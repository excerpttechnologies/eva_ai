# """
# llm_client.py  —  Central LLM configuration for AI Builder.

# Switches from local Ollama to NVIDIA's free API (OpenAI-compatible).
# All agents import get_llm() from here — change model/key in ONE place.

# NVIDIA Free Models (good choices):
#   - mistralai/mistral-7b-instruct-v0.3      (fast, great for JSON)
#   - mistralai/mamba-codestral-7b-v0.1       (code-focused)
#   - meta/llama-3.1-8b-instruct              (strong reasoning)
#   - meta/llama-3.3-70b-instruct             (most capable, slower)
#   - google/gemma-2-9b-it                    (balanced)
#   - microsoft/phi-3-mini-128k-instruct      (ultra fast)

# Usage in agents:
#     from backend.llm_client import get_llm, get_fast_llm, LLMMessage, llm_invoke

#     llm  = get_llm()          # standard model
#     fast = get_fast_llm()     # cheaper/faster for simple tasks
#     text = llm_invoke(llm, "your prompt here")
# """

# from __future__ import annotations

# import logging
# import os
# from typing import Any
# from dotenv import load_dotenv
# load_dotenv()

# from openai import OpenAI

# logger = logging.getLogger(__name__)

# # ==============================================================
# # Configuration — edit these to switch models/keys
# # ==============================================================

# NVIDIA_API_KEY  = os.getenv("NVIDIA_API_KEY")
# NVIDIA_BASE_URL = "https://integrate.api.nvidia.com/v1"

# # Primary model — used for page generation, fixing, planning
# PRIMARY_MODEL   = "nvidia/llama-3.3-nemotron-super-49b-v1"
# # Fast model — used for JSON extraction, analyzer, simple tasks
# FAST_MODEL      = "google/gemma-2-9b-it"
# # ==============================================================
# # Client factory
# # ==============================================================

# def _make_client() -> OpenAI:
#     return OpenAI(
#         base_url=NVIDIA_BASE_URL,
#         api_key=NVIDIA_API_KEY,
#     )


# # ==============================================================
# # Simple wrapper that mimics the ChatOllama .invoke() interface
# # so agents need minimal changes
# # ==============================================================

# class NvidiaLLM:
#     """
#     Drop-in replacement for ChatOllama.
#     Supports: llm.invoke(prompt) -> object with .content attribute
#     """

#     def __init__(
#         self,
#         model: str = PRIMARY_MODEL,
#         temperature: float = 0.2,
#         max_tokens: int = 1024,
#         stream: bool = False,
#     ):
#         self.model       = model
#         self.temperature = temperature
#         self.max_tokens  = max_tokens
#         self.stream      = stream
#         self._client     = _make_client()

#     def invoke(self, prompt: str | list) -> Any:
#         """
#         Accepts either:
#           - a plain string prompt
#           - a list of {"role": ..., "content": ...} dicts
#         Returns an object with a .content attribute (same as ChatOllama).
#         """
#         if isinstance(prompt, str):
#             messages = [{"role": "user", "content": prompt}]
#         else:
#             # LangChain message objects → dicts
#             messages = []
#             for m in prompt:
#                 if hasattr(m, "content"):
#                     role = getattr(m, "type", "user")
#                     role = "assistant" if role == "ai" else "user"
#                     messages.append({"role": role, "content": m.content})
#                 elif isinstance(m, dict):
#                     messages.append(m)
#                 else:
#                     messages.append({"role": "user", "content": str(m)})

#         try:
#             if self.stream:
#                 return self._invoke_stream(messages)
#             else:
#                 return self._invoke_sync(messages)
#         except Exception as e:
#             logger.error("NVIDIA API error: %s", e)
#             # Return empty-content object so callers don't crash
#             return _EmptyResponse()

#     def _invoke_sync(self, messages: list) -> Any:
#         response = self._client.chat.completions.create(
#             model=self.model,
#             messages=messages,
#             temperature=self.temperature,
#             max_tokens=self.max_tokens,
#             stream=False,
#         )
#         text = response.choices[0].message.content or ""
#         logger.debug("  [nvidia] model=%s tokens=%s",
#                      self.model,
#                      getattr(response.usage, "completion_tokens", "?"))
#         return _Response(text)

#     def _invoke_stream(self, messages: list) -> Any:
#         completion = self._client.chat.completions.create(
#             model=self.model,
#             messages=messages,
#             temperature=self.temperature,
#             max_tokens=self.max_tokens,
#             stream=True,
#         )
#         parts = []
#         for chunk in completion:
#             delta = chunk.choices[0].delta.content
#             if delta:
#                 parts.append(delta)
#         return _Response("".join(parts))


# class _Response:
#     """Mimics ChatOllama response — has .content attribute."""
#     def __init__(self, content: str):
#         self.content = content

#     def __str__(self) -> str:
#         return self.content


# class _EmptyResponse:
#     content = ""


# # ==============================================================
# # Public factory functions
# # ==============================================================

# def get_llm(
#     temperature: float = 0.2,
#     max_tokens: int = 1024,
# ) -> NvidiaLLM:
#     """Standard LLM — used for page generation, fixer, router."""
#     return NvidiaLLM(
#         model=PRIMARY_MODEL,
#         temperature=temperature,
#         max_tokens=max_tokens,
#     )


# def get_fast_llm(
#     temperature: float = 0.1,
#     max_tokens: int = 512,
# ) -> NvidiaLLM:
#     """Faster/cheaper LLM — used for JSON extraction, analyzer, planner."""
#     return NvidiaLLM(
#         model=FAST_MODEL,
#         temperature=temperature,
#         max_tokens=max_tokens,
#     )


# def llm_invoke(llm: NvidiaLLM, prompt: str) -> str:
#     """Helper: invoke and return plain string content."""
#     r = llm.invoke(prompt)
#     return r.content if hasattr(r, "content") else str(r)



# """
# llm_client.py  —  Central LLM configuration for AI Builder.

# FALLBACK CHAIN: If the first model returns 404 / empty / error,
# automatically tries the next one in the list. No agent code changes needed.

# Configure your chains in PRIMARY_MODELS and FAST_MODELS below.
# Models are tried in order — put your best/preferred model first.

# Usage in agents (unchanged):
#     from backend.llm_client import get_llm, get_fast_llm, llm_invoke

#     llm  = get_llm()
#     fast = get_fast_llm()
#     text = llm_invoke(llm, "your prompt here")
# """

# from __future__ import annotations

# import logging
# import os
# import time
# from typing import Any, List

# from openai import OpenAI
# from dotenv import load_dotenv

# load_dotenv()

# logger = logging.getLogger(__name__)

# NVIDIA_API_KEY  = os.getenv("NVIDIA_API_KEY", "")
# NVIDIA_BASE_URL = "https://integrate.api.nvidia.com/v1"

# # ──────────────────────────────────────────────────────────────
# # Fallback model chains — tried IN ORDER, first success wins.
# # Run `python check_nvidia.py` to find which models your key can use.
# # ──────────────────────────────────────────────────────────────

# PRIMARY_MODELS: List[str] = [
#     "nvidia/llama-3.3-nemotron-super-49b-v1",
#     "meta/llama-3.3-70b-instruct",
#     "meta/llama-3.1-70b-instruct",
#     "meta/llama-3.1-8b-instruct",
#     "mistralai/mistral-nemo-12b-instruct",
#     "mistralai/mistral-7b-instruct-v0.3",
#     "google/gemma-2-9b-it",
# ]

# FAST_MODELS: List[str] = [
#     "meta/llama-3.1-8b-instruct",
#     "mistralai/mistral-7b-instruct-v0.3",
#     "google/gemma-2-9b-it",
#     "microsoft/phi-3-mini-128k-instruct",
#     "meta/llama-3.2-3b-instruct",
# ]


# def _make_client() -> OpenAI:
#     return OpenAI(base_url=NVIDIA_BASE_URL, api_key=NVIDIA_API_KEY)


# def _is_bad_response(content: str) -> bool:
#     if not content or not content.strip():
#         return True
#     lowered = content.lower().strip()
#     return lowered.startswith("i'm sorry") or lowered.startswith("i cannot")


# class _Response:
#     def __init__(self, content: str, model: str = ""):
#         self.content = content
#         self.model   = model

#     def __str__(self) -> str:
#         return self.content


# class _EmptyResponse:
#     content = ""
#     model   = ""


# class _SingleLLM:
#     def __init__(self, model: str, temperature: float, max_tokens: int):
#         self.model       = model
#         self.temperature = temperature
#         self.max_tokens  = max_tokens
#         self._client     = _make_client()

#     def invoke(self, messages: list) -> _Response:
#         response = self._client.chat.completions.create(
#             model=self.model,
#             messages=messages,
#             temperature=self.temperature,
#             max_tokens=self.max_tokens,
#             stream=False,
#         )
#         text = response.choices[0].message.content or ""
#         return _Response(text, self.model)


# class FallbackLLM:
#     """
#     Tries each model in `models` in order.
#     Falls through to the next on any error or empty/bad response.
#     """

#     def __init__(self, models: List[str], temperature: float = 0.2,
#                  max_tokens: int = 1024):
#         self.models      = models
#         self.temperature = temperature
#         self.max_tokens  = max_tokens
#         self._instances  = {
#             m: _SingleLLM(m, temperature, max_tokens) for m in models
#         }

#     def invoke(self, prompt: str | list) -> Any:
#         messages = self._to_messages(prompt)

#         for model in self.models:
#             t0 = time.time()
#             try:
#                 resp    = self._instances[model].invoke(messages)
#                 elapsed = int((time.time() - t0) * 1000)

#                 if _is_bad_response(resp.content):
#                     logger.warning("  [fallback] %s → empty (%dms), trying next", model, elapsed)
#                     continue

#                 logger.debug("  [fallback] %s → OK (%dms)", model, elapsed)
#                 return resp

#             except Exception as e:
#                 elapsed = int((time.time() - t0) * 1000)
#                 err = str(e)
#                 reason = ("404" if "404" in err
#                           else "auth error" if ("401" in err or "403" in err)
#                           else "rate limited" if "429" in err
#                           else "timeout" if "timeout" in err.lower()
#                           else err[:50])
#                 logger.warning("  [fallback] %s → %s (%dms), trying next",
#                                model, reason, elapsed)

#         logger.error("  [fallback] ALL %d model(s) failed", len(self.models))
#         return _EmptyResponse()

#     @staticmethod
#     def _to_messages(prompt: str | list) -> list:
#         if isinstance(prompt, str):
#             return [{"role": "user", "content": prompt}]
#         messages = []
#         for m in prompt:
#             if hasattr(m, "content"):
#                 role = "assistant" if getattr(m, "type", "user") == "ai" else "user"
#                 messages.append({"role": role, "content": m.content})
#             elif isinstance(m, dict):
#                 messages.append(m)
#             else:
#                 messages.append({"role": "user", "content": str(m)})
#         return messages


# # Alias so existing code using NvidiaLLM still works
# NvidiaLLM = FallbackLLM


# def get_llm(temperature: float = 0.2, max_tokens: int = 1024) -> FallbackLLM:
#     """Standard LLM — page generation, fixer, router."""
#     return FallbackLLM(models=PRIMARY_MODELS, temperature=temperature,
#                        max_tokens=max_tokens)


# def get_fast_llm(temperature: float = 0.1, max_tokens: int = 512) -> FallbackLLM:
#     """Fast LLM — analyzer, planner, JSON extraction."""
#     return FallbackLLM(models=FAST_MODELS, temperature=temperature,
#                        max_tokens=max_tokens)


# def llm_invoke(llm: FallbackLLM, prompt: str) -> str:
#     r = llm.invoke(prompt)
#     return r.content if hasattr(r, "content") else str(r)


# if __name__ == "__main__":
#     import sys
#     logging.basicConfig(level=logging.WARNING, format="%(levelname)s  %(message)s")

#     print("=" * 60)
#     print("  FallbackLLM self-test")
#     print("=" * 60)

#     if not NVIDIA_API_KEY:
#         print("X  NVIDIA_API_KEY not set"); sys.exit(1)

#     print(f"Key: {NVIDIA_API_KEY[:12]}...{NVIDIA_API_KEY[-4:]}\n")

#     for label, chain in [("FAST", FAST_MODELS), ("PRIMARY", PRIMARY_MODELS)]:
#         print(f"--- {label} ---")
#         llm  = FallbackLLM(models=chain, temperature=0, max_tokens=20)
#         t0   = time.time()
#         resp = llm.invoke("Reply with exactly the word: WORKING")
#         ms   = int((time.time() - t0) * 1000)
#         ok   = resp.content and "WORKING" in resp.content.upper()
#         if ok:
#             print(f"  OK  model={getattr(resp,'model','?')}  ({ms}ms)")
#         else:
#             print(f"  FAIL  all models failed after {ms}ms")
#             print(f"  Run: python check_nvidia.py")
#         print()


"""
llm_client.py  —  Central LLM configuration for AI Builder.

FALLBACK CHAIN: If the first model returns 404 / empty / error,
automatically tries the next one in the list. No agent code changes needed.

Configure your chains in PRIMARY_MODELS and FAST_MODELS below.
Models are tried in order — put your best/preferred model first.

Usage in agents (unchanged):
    from backend.llm_client import get_llm, get_fast_llm, llm_invoke

    llm  = get_llm()
    fast = get_fast_llm()
    text = llm_invoke(llm, "your prompt here")
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

# ──────────────────────────────────────────────────────────────
# Fallback model chains — tried IN ORDER, first success wins.
# Run `python check_nvidia.py` to find which models your key can use.
# ──────────────────────────────────────────────────────────────

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
    "mistralai/mistral-7b-instruct-v0.3",
    "google/gemma-2-9b-it",
    "microsoft/phi-3-mini-128k-instruct",
    "meta/llama-3.2-3b-instruct",
]


def _make_client() -> OpenAI:
    return OpenAI(base_url=NVIDIA_BASE_URL, api_key=NVIDIA_API_KEY)


def _is_bad_response(content: str) -> bool:
    if not content or not content.strip():
        return True
    lowered = content.lower().strip()
    return lowered.startswith("i'm sorry") or lowered.startswith("i cannot")


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
    Tries each model in `models` in order.
    Falls through to the next on any error or empty/bad response.
    """

    def __init__(self, models: List[str], temperature: float = 0.2,
                 max_tokens: int = 1024):
        self.models      = models
        self.temperature = temperature
        self.max_tokens  = max_tokens
        self._instances  = {
            m: _SingleLLM(m, temperature, max_tokens) for m in models
        }

    def invoke(self, prompt: str | list) -> Any:
        messages = self._to_messages(prompt)

        for model in self.models:
            t0 = time.time()
            try:
                resp    = self._instances[model].invoke(messages)
                elapsed = int((time.time() - t0) * 1000)

                if _is_bad_response(resp.content):
                    logger.warning("  [fallback] %s → empty (%dms), trying next", model, elapsed)
                    continue

                logger.debug("  [fallback] %s → OK (%dms)", model, elapsed)
                return resp

            except Exception as e:
                elapsed = int((time.time() - t0) * 1000)
                err = str(e)
                reason = ("404" if "404" in err
                          else "auth error" if ("401" in err or "403" in err)
                          else "rate limited" if "429" in err
                          else "timeout" if "timeout" in err.lower()
                          else err[:50])
                logger.warning("  [fallback] %s → %s (%dms), trying next",
                               model, reason, elapsed)

        logger.error("  [fallback] ALL %d model(s) failed", len(self.models))
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


# Alias so existing code using NvidiaLLM still works
NvidiaLLM = FallbackLLM


def get_llm(temperature: float = 0.2, max_tokens: int = 1024) -> FallbackLLM:
    """Standard LLM — page generation, fixer, router."""
    return FallbackLLM(models=PRIMARY_MODELS, temperature=temperature,
                       max_tokens=max_tokens)


def get_fast_llm(temperature: float = 0.1, max_tokens: int = 512) -> FallbackLLM:
    """Fast LLM — analyzer, planner, JSON extraction."""
    return FallbackLLM(models=FAST_MODELS, temperature=temperature,
                       max_tokens=max_tokens)


def llm_invoke(llm: FallbackLLM, prompt: str) -> str:
    r = llm.invoke(prompt)
    return r.content if hasattr(r, "content") else str(r)


if __name__ == "__main__":
    import sys
    logging.basicConfig(level=logging.WARNING, format="%(levelname)s  %(message)s")

    print("=" * 60)
    print("  FallbackLLM self-test")
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
            print(f"  Run: python check_nvidia.py")
        print()