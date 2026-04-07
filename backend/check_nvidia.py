"""
check_nvidia.py — Diagnose your NVIDIA API key and test models.

Run from your project root:
    python check_nvidia.py

What it checks:
  1. API key is set and valid
  2. Lists all models your key can access
  3. Sends a quick test prompt to each candidate model
  4. Prints the working model names you can paste into llm_client.py
"""

import os
import sys
import time
from dotenv import load_dotenv

load_dotenv()

try:
    from openai import OpenAI
except ImportError:
    print("❌ openai package not installed. Run: pip install openai")
    sys.exit(1)


# ── Candidate models to test ─────────────────────────────────
# These are known NVIDIA NIM models as of early 2025.
# The script will also auto-discover from your account's model list.
CANDIDATE_MODELS = [
    "meta/llama-3.1-8b-instruct",
    "meta/llama-3.1-70b-instruct",
    "meta/llama-3.3-70b-instruct",
    "meta/llama-3.2-3b-instruct",
    "meta/llama-3.2-1b-instruct",
    "mistralai/mistral-7b-instruct-v0.3",
    "mistralai/mistral-nemo-12b-instruct",
    "mistralai/mixtral-8x7b-instruct-v0.1",
    "google/gemma-2-9b-it",
    "google/gemma-2-2b-it",
    "microsoft/phi-3-mini-128k-instruct",
    "microsoft/phi-3-medium-128k-instruct",
    "nvidia/llama-3.1-nemotron-70b-instruct",
    "nvidia/llama-3.1-nemotron-nano-8b-v1",
    "qwen/qwen2-7b-instruct",
    "deepseek-ai/deepseek-r1",
]

TEST_PROMPT = "Reply with exactly: WORKING"


def check_key():
    key = os.getenv("NVIDIA_API_KEY")
    if not key:
        print("❌  NVIDIA_API_KEY not found in environment or .env file")
        print("    Get your key at: https://build.nvidia.com")
        print("    Add to .env:  NVIDIA_API_KEY=nvapi-xxxxxxxxxxxx")
        sys.exit(1)
    if not key.startswith("nvapi-"):
        print(f"⚠️  Key doesn't start with 'nvapi-': {key[:20]}...")
        print("    Double-check you copied the full key from build.nvidia.com")
    else:
        print(f"✓  API key found: {key[:16]}...{key[-4:]}")
    return key


def list_models(client):
    print("\n=== Step 1: Listing available models ===")
    try:
        models = client.models.list()
        ids = sorted(m.id for m in models.data)
        print(f"   Found {len(ids)} model(s) on your account:")
        for m in ids:
            print(f"     • {m}")
        return ids
    except Exception as e:
        print(f"   ⚠️  Could not list models: {e}")
        print("   Falling back to hardcoded candidate list")
        return []


def test_model(client, model_id):
    """Returns (ok: bool, latency_ms: int, error: str)"""
    t0 = time.time()
    try:
        resp = client.chat.completions.create(
            model=model_id,
            messages=[{"role": "user", "content": TEST_PROMPT}],
            temperature=0,
            max_tokens=10,
        )
        text = resp.choices[0].message.content or ""
        latency = int((time.time() - t0) * 1000)
        return True, latency, text.strip()
    except Exception as e:
        latency = int((time.time() - t0) * 1000)
        err = str(e)
        if "404" in err:
            return False, latency, "404 Not Found"
        if "401" in err or "403" in err:
            return False, latency, "Auth error — check your API key"
        if "429" in err:
            return False, latency, "Rate limited"
        return False, latency, err[:80]


def main():
    print("=" * 60)
    print("  NVIDIA NIM API Diagnostic")
    print("=" * 60)

    key = check_key()
    client = OpenAI(
        base_url="https://integrate.api.nvidia.com/v1",
        api_key=key,
    )

    # Get model list from API, fall back to candidates
    available = list_models(client)
    to_test = available if available else CANDIDATE_MODELS
    # Always include candidates not in the API list (some aren't listed but work)
    for m in CANDIDATE_MODELS:
        if m not in to_test:
            to_test.append(m)

    print(f"\n=== Step 2: Testing {len(to_test)} model(s) ===")
    print(f"   Prompt: '{TEST_PROMPT}'\n")

    working = []
    for model_id in to_test:
        ok, ms, response = test_model(client, model_id)
        if ok:
            print(f"   ✓  {model_id:<55} {ms:>5}ms  → {response!r}")
            working.append((model_id, ms))
        else:
            print(f"   ✗  {model_id:<55} {ms:>5}ms  → {response}")

    # ── Summary ─────────────────────────────────────────────────
    print("\n" + "=" * 60)
    if not working:
        print("❌  NO working models found!")
        print("    Possible reasons:")
        print("    • API key is invalid or expired")
        print("    • Your account doesn't have access to these models")
        print("    • Network / firewall issue")
        print("    • Visit https://build.nvidia.com and re-generate your key")
    else:
        print(f"✓  {len(working)} working model(s) found!\n")
        working.sort(key=lambda x: x[1])  # sort by latency
        print("   Paste these into llm_client.py:\n")

        fastest = working[0][0]
        best = next(
            (m for m, _ in working if "70b" in m or "nemotron-70b" in m),
            working[-1][0]
        )
        medium = next(
            (m for m, _ in working if "8b" in m or "9b" in m or "7b" in m),
            working[0][0]
        )

        print(f'   # Fastest (for simple tasks / fixer):')
        print(f'   FAST_MODEL    = "{fastest}"')
        print()
        print(f'   # Balanced (for page generation):')
        print(f'   PRIMARY_MODEL = "{medium}"')
        print()
        print(f'   # Most capable (optional, slower):')
        print(f'   LARGE_MODEL   = "{best}"')
        print()
        print("   All working models:")
        for m, ms in working:
            print(f"     {ms:>5}ms  {m}")

    print("=" * 60)


if __name__ == "__main__":
    main()