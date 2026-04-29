"""
llm_client.py  —  V3 Central LLM Configuration for AI Builder.
Uses NVIDIA's API with enhanced model chain and retry logic.
"""

from __future__ import annotations

import logging
import os
import time
from typing import Any, List

from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

NVIDIA_API_KEY  = os.getenv("NVIDIA_API_KEY", "")
NVIDIA_BASE_URL = "https://integrate.api.nvidia.com/v1"

# V3: Enhanced model chains — highest quality first
PRIMARY_MODELS: List[str] = [
    "nvidia/llama-3.3-nemotron-super-49b-v1",
    "meta/llama-3.3-70b-instruct",
    "meta/llama-3.1-70b-instruct",
    "meta/llama-3.1-8b-instruct",
    "mistralai/mistral-nemo-12b-instruct",
    "mistralai/mistral-7b-instruct-v0.3",
    "google/gemma-2-9b-it",
]

FAST_MODELS: List[str] = [
    "meta/llama-3.1-8b-instruct",
    "mistralai/mistral-nemo-12b-instruct",
    "mistralai/mistral-7b-instruct-v0.3",
    "google/gemma-2-9b-it",
    "microsoft/phi-3-mini-128k-instruct",
]


def _make_client() -> OpenAI:
    return OpenAI(base_url=NVIDIA_BASE_URL, api_key=NVIDIA_API_KEY)


def _is_bad_response(content: str) -> bool:
    if not content or not content.strip():
        return True
    lowered = content.lower().strip()
    return (lowered.startswith("i'm sorry") or
            lowered.startswith("i cannot") or
            lowered.startswith("i apologize") or
            len(content.strip()) < 20)


class _Response:
    def __init__(self, content: str, model: str = ""):
        self.content = content
        self.model   = model

    def __str__(self) -> str:
        return self.content


class _EmptyResponse:
    content = ""
    model   = ""


class _SingleLLM:
    def __init__(self, model: str, temperature: float, max_tokens: int):
        self.model       = model
        self.temperature = temperature
        self.max_tokens  = max_tokens
        self._client     = _make_client()

    def invoke(self, messages: list) -> _Response:
        response = self._client.chat.completions.create(
            model=self.model,
            messages=messages,
            temperature=self.temperature,
            max_tokens=self.max_tokens,
            stream=False,
        )
        text = response.choices[0].message.content or ""
        return _Response(text, self.model)


class FallbackLLM:
    """
    V3: Enhanced fallback LLM with retry + exponential backoff.
    Tries each model in order, first success wins.
    """

    def __init__(self, models: List[str], temperature: float = 0.2,
                 max_tokens: int = 1024, max_retries: int = 1):
        self.models      = models
        self.temperature = temperature
        self.max_tokens  = max_tokens
        self.max_retries = max_retries
        self._instances  = {
            m: _SingleLLM(m, temperature, max_tokens) for m in models
        }

    def invoke(self, prompt: str | list) -> Any:
        messages = self._to_messages(prompt)

        for model in self.models:
            t0 = time.time()
            for attempt in range(self.max_retries + 1):
                try:
                    resp    = self._instances[model].invoke(messages)
                    elapsed = int((time.time() - t0) * 1000)

                    if _is_bad_response(resp.content):
                        logger.warning("  [llm] %s → empty/bad response (%dms)", model, elapsed)
                        break  # Try next model, not retry

                    logger.debug("  [llm] %s → OK (%dms, %d chars)", model, elapsed, len(resp.content))
                    return resp

                except Exception as e:
                    elapsed = int((time.time() - t0) * 1000)
                    err = str(e)
                    if "429" in err and attempt < self.max_retries:
                        wait = 2 ** attempt
                        logger.warning("  [llm] %s → rate limited, waiting %ds", model, wait)
                        time.sleep(wait)
                        continue
                    reason = (
                        "404 not found" if "404" in err
                        else "auth error" if ("401" in err or "403" in err)
                        else "rate limited" if "429" in err
                        else "timeout" if "timeout" in err.lower()
                        else err[:60]
                    )
                    logger.warning("  [llm] %s → %s (%dms)", model, reason, elapsed)
                    break

        logger.error("  [llm] ALL %d models failed", len(self.models))
        return _EmptyResponse()

    @staticmethod
    def _to_messages(prompt: str | list) -> list:
        if isinstance(prompt, str):
            return [{"role": "user", "content": prompt}]
        messages = []
        for m in prompt:
            if hasattr(m, "content"):
                role = "assistant" if getattr(m, "type", "user") == "ai" else "user"
                messages.append({"role": role, "content": m.content})
            elif isinstance(m, dict):
                messages.append(m)
            else:
                messages.append({"role": "user", "content": str(m)})
        return messages


# Alias for backward compatibility
NvidiaLLM = FallbackLLM


def get_llm(temperature: float = 0.2, max_tokens: int = 4000) -> FallbackLLM:
    """V3: Standard LLM with 4000 token limit for rich page generation."""
    return FallbackLLM(models=PRIMARY_MODELS, temperature=temperature,
                       max_tokens=max_tokens)


def get_fast_llm(temperature: float = 0.1, max_tokens: int = 1024) -> FallbackLLM:
    """Fast LLM for JSON extraction, analyzer, simple tasks."""
    return FallbackLLM(models=FAST_MODELS, temperature=temperature,
                       max_tokens=max_tokens)


def llm_invoke(llm: FallbackLLM, prompt: str) -> str:
    r = llm.invoke(prompt)
    return r.content if hasattr(r, "content") else str(r)


if __name__ == "__main__":
    import sys
    logging.basicConfig(level=logging.WARNING, format="%(levelname)s  %(message)s")

    print("=" * 60)
    print("  V3 FallbackLLM self-test")
    print("=" * 60)

    if not NVIDIA_API_KEY:
        print("X  NVIDIA_API_KEY not set"); sys.exit(1)

    print(f"Key: {NVIDIA_API_KEY[:12]}...{NVIDIA_API_KEY[-4:]}\n")

    for label, chain in [("FAST", FAST_MODELS), ("PRIMARY", PRIMARY_MODELS)]:
        print(f"--- {label} ---")
        llm  = FallbackLLM(models=chain, temperature=0, max_tokens=20)
        t0   = time.time()
        resp = llm.invoke("Reply with exactly the word: WORKING")
        ms   = int((time.time() - t0) * 1000)
        ok   = resp.content and "WORKING" in resp.content.upper()
        if ok:
            print(f"  OK  model={getattr(resp,'model','?')}  ({ms}ms)")
        else:
            print(f"  FAIL  all models failed after {ms}ms")
        print()
