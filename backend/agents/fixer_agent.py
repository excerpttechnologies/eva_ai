# from backend.state import AgentState
# from langchain_ollama import ChatOllama


# def fixer_agent(state: AgentState):

#     errors = state.get("validation_errors", [])
#     files = state.get("code_files", [])

#     if not errors:
#         print("✅ No errors to fix")
#         return {}

#     print("🛠 Fixer agent running")

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     fixed_files = []

#     for file in files:

#         filename = file["filename"]
#         content = file["content"]

#         prompt = f"""
# You are a senior software engineer.

# The following file contains errors.

# Validation errors:
# {errors}

# Fix the code so it compiles and runs correctly.

# Rules:
# - Return ONLY corrected code
# - Do not explain
# - Do not add comments
# - Do not add markdown
# - Keep same file structure
# - Ensure React components have a valid root JSX element
# - Ensure all used components are imported
# - Ensure no undefined variables
# - Ensure valid syntax

# File: {filename}

# Code:
# {content}
# """

#         try:
#             response = llm.invoke(prompt)

#             fixed_files.append({
#                 "filename": filename,
#                 "content": response.content.strip()
#             })

#         except Exception as e:
#             print(f"⚠ Fix failed for {filename}: {e}")
#             fixed_files.append(file)

#     print("✅ Fixer finished")

#     return {
#         "code_files": fixed_files
#     }

# from backend.state import AgentState
# from langchain_ollama import ChatOllama
# import re


# def clean_output(text: str):

#     if not text:
#         return text

#     # Remove markdown
#     text = re.sub(r"```[a-zA-Z]*", "", text)
#     text = text.replace("```", "")

#     # Remove explanations before code
#     if "export default" in text:
#         text = text[text.index("export default"):]

#     return text.strip()


# def fixer_agent(state: AgentState):

#     errors = state.get("validation_errors", [])
#     files = state.get("code_files", [])

#     if not errors:
#         print("✅ No errors to fix")
#         return {}

#     print("🛠 Fixer agent running")

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     fixed_files = []

#     # Find files related to errors
#     error_files = []

#     for err in errors:
#         for file in files:
#             if file["filename"] in err:
#                 error_files.append(file["filename"])

#     for file in files:

#         filename = file["filename"]
#         content = file["content"]

#         # Skip files without errors
#         if filename not in error_files:
#             fixed_files.append(file)
#             continue

#         print(f"🔧 Fixing {filename}")

#         prompt = f"""
# Fix the following file so it compiles correctly.

# Validation errors:
# {errors}

# Rules:
# - Return ONLY corrected code
# - No markdown
# - No explanations
# - No comments
# - Ensure valid syntax
# - Ensure React JSX has one root element
# - Ensure imports exist
# - Do not change filename

# File: {filename}

# Code:
# {content}
# """

#         try:

#             response = llm.invoke(prompt)

#             fixed_code = clean_output(response.content)

#             fixed_files.append({
#                 "filename": filename,
#                 "content": fixed_code
#             })

#         except Exception as e:

#             print(f"⚠ Fix failed for {filename}: {e}")

#             fixed_files.append(file)

#     print("✅ Fixer finished")

#     return {
#         "code_files": fixed_files
#     }


# """
# fixer_agent.py  -  Targeted code repair agent.

# Improvements over original:
# - Parses structured validation errors to find exactly which files need fixing
# - Fixes files concurrently using ThreadPoolExecutor (fast for multi-page projects)
# - Smart clean_output: strips markdown fences AND non-code preamble for both
#   JSX ("export default") and TS module ("import" / "const " / "interface ")
# - Per-file retry (up to 2 attempts) with an escalating prompt on retry
# - Patch verification: checks that the fixed code at least has the same
#   export/function name as the original, so the LLM didn't return something wrong
# - Diff summary logged so you can see what changed without reading the whole file
# - Preserves files that don't need fixing in O(1) (dict lookup, not linear scan)
# - Never silently drops a file — original is always the fallback
# """

# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from difflib import unified_diff
# from typing import Dict, List, Optional, Tuple

# from langchain_ollama import ChatOllama
# from backend.state import AgentState

# logger = logging.getLogger(__name__)

# # ==============================================================
# # Constants
# # ==============================================================

# MAX_WORKERS   = 4    # parallel fix threads
# MAX_RETRIES   = 2
# MODEL         = "qwen2.5:3b-instruct"

# # Anchors for stripping LLM preamble — tried in order, first match wins
# _CODE_ANCHORS = [
#     "export default",
#     "import React",
#     "import {",
#     "import type",
#     "const ",
#     "interface ",
#     "function ",
#     "class ",
# ]

# _FENCE_RE = re.compile(r"```[a-zA-Z]*")
# _EXPORT_NAME_RE = re.compile(
#     r"export\s+default\s+(?:function|class|const)?\s*(\w+)|"
#     r"export\s+default\s+(\w+)"
# )


# # ==============================================================
# # Helpers
# # ==============================================================

# def _clean(text: str) -> str:
#     """Strip markdown fences and pre-code explanations."""
#     if not text:
#         return text
#     text = _FENCE_RE.sub("", text).replace("```", "")
#     for anchor in _CODE_ANCHORS:
#         idx = text.find(anchor)
#         if idx != -1:
#             text = text[idx:]
#             break
#     return text.strip()


# def _extract_export_name(code: str) -> Optional[str]:
#     m = _EXPORT_NAME_RE.search(code)
#     if m:
#         return m.group(1) or m.group(2)
#     return None


# def _diff_summary(original: str, fixed: str, filename: str) -> str:
#     orig_lines  = original.splitlines(keepends=True)
#     fixed_lines = fixed.splitlines(keepends=True)
#     diff = list(unified_diff(orig_lines, fixed_lines, fromfile=filename, tofile=filename + " (fixed)", n=0))
#     additions = sum(1 for l in diff if l.startswith("+") and not l.startswith("+++"))
#     deletions = sum(1 for l in diff if l.startswith("-") and not l.startswith("---"))
#     return f"+{additions}/-{deletions} lines"


# def _errors_for_file(filename: str, errors: List[str]) -> List[str]:
#     return [e for e in errors if filename in e]


# def _files_needing_fix(errors: List[str], filenames: List[str]) -> set[str]:
#     """Return the set of filenames that appear in at least one error string."""
#     targets: set[str] = set()
#     for err in errors:
#         for fn in filenames:
#             if fn in err:
#                 targets.add(fn)
#     # Also add App.tsx/jsx when router errors are present
#     router_keywords = ("router", "route", "App.jsx", "App.tsx", "BrowserRouter")
#     if any(kw.lower() in err.lower() for err in errors for kw in router_keywords):
#         for fn in filenames:
#             if fn.endswith(("App.jsx", "App.tsx")):
#                 targets.add(fn)
#     return targets


# # ==============================================================
# # LLM fix logic (single file, with retry)
# # ==============================================================

# def _build_prompt(filename: str, content: str, errors: List[str], attempt: int) -> str:
#     error_block = "\n".join(f"  - {e}" for e in errors)
#     strictness = (
#         "Be extremely conservative — change only what is broken."
#         if attempt == 0
#         else "The previous fix was insufficient. Rewrite the file completely if needed."
#     )
#     return (
#         "You are a senior TypeScript + React engineer fixing a broken file.\n\n"
#         f"File: {filename}\n\n"
#         f"Errors to fix:\n{error_block}\n\n"
#         f"Instructions:\n"
#         f"- {strictness}\n"
#         "- Return ONLY the corrected source code — no markdown, no explanation.\n"
#         "- Preserve the export name and component structure.\n"
#         "- Ensure every JSX element has a single root element.\n"
#         "- Ensure all imports are correct.\n\n"
#         f"Current code:\n{content}\n"
#     )


# def _fix_one(
#     filename: str,
#     content: str,
#     file_errors: List[str],
#     llm: ChatOllama,
# ) -> Tuple[str, str, str]:
#     """
#     Returns (filename, fixed_content, status).
#     status: "fixed" | "fallback"
#     """
#     original_name = _extract_export_name(content)

#     for attempt in range(MAX_RETRIES):
#         try:
#             prompt   = _build_prompt(filename, content, file_errors, attempt)
#             response = llm.invoke(prompt)
#             raw      = response.content if hasattr(response, "content") else str(response)
#             fixed    = _clean(raw)

#             if not fixed:
#                 logger.warning("  [%s] attempt %d: empty LLM response", filename, attempt + 1)
#                 continue

#             # Sanity-check: export name should be preserved for JSX/TSX
#             if filename.endswith((".jsx", ".tsx")) and original_name:
#                 fixed_name = _extract_export_name(fixed)
#                 if fixed_name and fixed_name != original_name:
#                     logger.warning(
#                         "  [%s] export name mismatch (%s -> %s); retrying",
#                         filename, original_name, fixed_name,
#                     )
#                     continue

#             diff = _diff_summary(content, fixed, filename)
#             logger.info("  [%s] fixed on attempt %d  (%s)", filename, attempt + 1, diff)
#             return filename, fixed, "fixed"

#         except Exception as exc:
#             logger.warning("  [%s] LLM error on attempt %d: %s", filename, attempt + 1, exc)

#     logger.warning("  [%s] all attempts failed; keeping original", filename)
#     return filename, content, "fallback"


# # ==============================================================
# # Node
# # ==============================================================

# def fixer_agent(state: AgentState) -> dict:
#     errors: List[str] = state.get("validation_errors", [])
#     files:  List[dict] = state.get("code_files", [])

#     if not errors:
#         logger.info("No validation errors; fixer skipped")
#         return {}

#     logger.info("Fixer agent starting: %d error(s), %d file(s)", len(errors), len(files))

#     # Build fast lookup
#     file_map: Dict[str, str] = {f["filename"]: f["content"] for f in files}
#     filenames = list(file_map.keys())

#     targets = _files_needing_fix(errors, filenames)
#     logger.info("Files needing repair: %s", sorted(targets))

#     if not targets:
#         logger.warning("Could not map errors to specific files; returning unchanged")
#         return {}

#     llm = ChatOllama(model=MODEL, temperature=0, num_predict=2048)

#     # Fix targeted files in parallel
#     futures: dict = {}
#     with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
#         for fn in targets:
#             content     = file_map[fn]
#             file_errors = _errors_for_file(fn, errors)
#             futures[pool.submit(_fix_one, fn, content, file_errors, llm)] = fn

#         for future in as_completed(futures):
#             fn, fixed_content, status = future.result()
#             file_map[fn] = fixed_content
#             if status == "fallback":
#                 logger.warning("  [%s] used fallback (original preserved)", fn)

#     # Reconstruct ordered file list
#     fixed_files = [
#         {"filename": fn, "content": content, **({"meta": f.get("meta")} if f.get("meta") else {})}
#         for f in files
#         for fn, content in [(f["filename"], file_map[f["filename"]])]
#     ]

#     logger.info("Fixer finished: %d file(s) processed", len(targets))
#     return {"code_files": fixed_files}




# """
# fixer_agent.py  -  Targeted code repair agent.

# Improvements over original:
# - Parses structured validation errors to find exactly which files need fixing
# - Fixes files concurrently using ThreadPoolExecutor (fast for multi-page projects)
# - Smart clean_output: strips markdown fences AND non-code preamble for both
#   JSX ("export default") and TS module ("import" / "const " / "interface ")
# - Per-file retry (up to 2 attempts) with an escalating prompt on retry
# - Patch verification: checks that the fixed code at least has the same
#   export/function name as the original, so the LLM didn't return something wrong
# - Diff summary logged so you can see what changed without reading the whole file
# - Preserves files that don't need fixing in O(1) (dict lookup, not linear scan)
# - Never silently drops a file — original is always the fallback
# """

# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from difflib import unified_diff
# from typing import Dict, List, Optional, Tuple

# from backend.llm_client import NvidiaLLM, get_llm
# from backend.state import AgentState

# logger = logging.getLogger(__name__)

# # ==============================================================
# # Constants
# # ==============================================================

# MAX_WORKERS   = 4    # parallel fix threads
# MAX_RETRIES   = 2
# MODEL         = "meta/llama-3.1-8b-instruct"  # via NVIDIA API

# # Anchors for stripping LLM preamble — tried in order, first match wins
# _CODE_ANCHORS = [
#     "export default",
#     "import React",
#     "import {",
#     "import type",
#     "const ",
#     "interface ",
#     "function ",
#     "class ",
# ]

# _FENCE_RE = re.compile(r"```[a-zA-Z]*")
# _EXPORT_NAME_RE = re.compile(
#     r"export\s+default\s+(?:function|class|const)?\s*(\w+)|"
#     r"export\s+default\s+(\w+)"
# )


# # ==============================================================
# # Helpers
# # ==============================================================

# def _clean(text: str) -> str:
#     """Strip markdown fences and pre-code explanations."""
#     if not text:
#         return text
#     text = _FENCE_RE.sub("", text).replace("```", "")
#     for anchor in _CODE_ANCHORS:
#         idx = text.find(anchor)
#         if idx != -1:
#             text = text[idx:]
#             break
#     return text.strip()


# def _extract_export_name(code: str) -> Optional[str]:
#     m = _EXPORT_NAME_RE.search(code)
#     if m:
#         return m.group(1) or m.group(2)
#     return None


# def _diff_summary(original: str, fixed: str, filename: str) -> str:
#     orig_lines  = original.splitlines(keepends=True)
#     fixed_lines = fixed.splitlines(keepends=True)
#     diff = list(unified_diff(orig_lines, fixed_lines, fromfile=filename, tofile=filename + " (fixed)", n=0))
#     additions = sum(1 for l in diff if l.startswith("+") and not l.startswith("+++"))
#     deletions = sum(1 for l in diff if l.startswith("-") and not l.startswith("---"))
#     return f"+{additions}/-{deletions} lines"


# def _errors_for_file(filename: str, errors: List[str]) -> List[str]:
#     return [e for e in errors if filename in e]


# def _files_needing_fix(errors: List[str], filenames: List[str]) -> set[str]:
#     """Return the set of filenames that appear in at least one error string."""
#     targets: set[str] = set()
#     for err in errors:
#         for fn in filenames:
#             if fn in err:
#                 targets.add(fn)
#     # Also add App.tsx/jsx when router errors are present
#     router_keywords = ("router", "route", "App.jsx", "App.tsx", "BrowserRouter")
#     if any(kw.lower() in err.lower() for err in errors for kw in router_keywords):
#         for fn in filenames:
#             if fn.endswith(("App.jsx", "App.tsx")):
#                 targets.add(fn)
#     return targets


# # ==============================================================
# # LLM fix logic (single file, with retry)
# # ==============================================================

# def _build_prompt(filename: str, content: str, errors: List[str], attempt: int) -> str:
#     error_block = "\n".join(f"  - {e}" for e in errors)
#     strictness = (
#         "Be extremely conservative — change only what is broken."
#         if attempt == 0
#         else "The previous fix was insufficient. Rewrite the file completely if needed."
#     )
#     return (
#         "You are a senior TypeScript + React engineer fixing a broken file.\n\n"
#         f"File: {filename}\n\n"
#         f"Errors to fix:\n{error_block}\n\n"
#         f"Instructions:\n"
#         f"- {strictness}\n"
#         "- Return ONLY the corrected source code — no markdown, no explanation.\n"
#         "- Preserve the export name and component structure.\n"
#         "- Ensure every JSX element has a single root element.\n"
#         "- Ensure all imports are correct.\n\n"
#         f"Current code:\n{content}\n"
#     )


# def _fix_one(
#     filename: str,
#     content: str,
#     file_errors: List[str],
#     llm: NvidiaLLM,
# ) -> Tuple[str, str, str]:
#     """
#     Returns (filename, fixed_content, status).
#     status: "fixed" | "fallback"
#     """
#     original_name = _extract_export_name(content)

#     for attempt in range(MAX_RETRIES):
#         try:
#             prompt   = _build_prompt(filename, content, file_errors, attempt)
#             response = llm.invoke(prompt)
#             raw      = response.content if hasattr(response, "content") else str(response)
#             fixed    = _clean(raw)

#             if not fixed:
#                 logger.warning("  [%s] attempt %d: empty LLM response", filename, attempt + 1)
#                 continue

#             # Sanity-check: export name should be preserved for JSX/TSX
#             if filename.endswith((".jsx", ".tsx")) and original_name:
#                 fixed_name = _extract_export_name(fixed)
#                 if fixed_name and fixed_name != original_name:
#                     logger.warning(
#                         "  [%s] export name mismatch (%s -> %s); retrying",
#                         filename, original_name, fixed_name,
#                     )
#                     continue

#             diff = _diff_summary(content, fixed, filename)
#             logger.info("  [%s] fixed on attempt %d  (%s)", filename, attempt + 1, diff)
#             return filename, fixed, "fixed"

#         except Exception as exc:
#             logger.warning("  [%s] LLM error on attempt %d: %s", filename, attempt + 1, exc)

#     logger.warning("  [%s] all attempts failed; keeping original", filename)
#     return filename, content, "fallback"


# # ==============================================================
# # Node
# # ==============================================================

# def fixer_agent(state: AgentState) -> dict:
#     errors: List[str] = state.get("validation_errors", [])
#     files:  List[dict] = state.get("code_files", [])

#     if not errors:
#         logger.info("No validation errors; fixer skipped")
#         return {}

#     logger.info("Fixer agent starting: %d error(s), %d file(s)", len(errors), len(files))

#     # Build fast lookup
#     file_map: Dict[str, str] = {f["filename"]: f["content"] for f in files}
#     filenames = list(file_map.keys())

#     targets = _files_needing_fix(errors, filenames)
#     logger.info("Files needing repair: %s", sorted(targets))

#     if not targets:
#         logger.warning("Could not map errors to specific files; returning unchanged")
#         return {}

#     llm = get_llm(temperature=0, max_tokens=2048)

#     # Fix targeted files in parallel
#     futures: dict = {}
#     with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
#         for fn in targets:
#             content     = file_map[fn]
#             file_errors = _errors_for_file(fn, errors)
#             futures[pool.submit(_fix_one, fn, content, file_errors, llm)] = fn

#         for future in as_completed(futures):
#             fn, fixed_content, status = future.result()
#             file_map[fn] = fixed_content
#             if status == "fallback":
#                 logger.warning("  [%s] used fallback (original preserved)", fn)

#     # Reconstruct ordered file list
#     fixed_files = [
#         {"filename": fn, "content": content, **({"meta": f.get("meta")} if f.get("meta") else {})}
#         for f in files
#         for fn, content in [(f["filename"], file_map[f["filename"]])]
#     ]

#     logger.info("Fixer finished: %d file(s) processed", len(targets))
#     return {"code_files": fixed_files}



# """
# fixer_agent.py  -  Targeted code repair agent.

# Key addition: deterministic JSX auto-repair tier (no LLM needed).
# From the production logs, the LLM API was returning 404 for EVERY call,
# meaning zero files ever got fixed. We now have three repair tiers:

#   Tier 1 — DETERMINISTIC (no LLM, always works):
#     - Missing React import when hooks are used
#     - TypeScript leakage in .jsx files
#     - JSX tag auto-repair: inserts missing closing tags / removes extras
#       using the same stack-based algorithm as the validator

#   Tier 2 — LLM FIX (when Tier 1 didn't fully fix it):
#     - Sends broken file to LLM with specific error messages
#     - Falls back gracefully if API is unavailable (404, 500, timeout)

#   Tier 3 — STUB REPLACEMENT (for missing page files):
#     - Creates minimal working page so the app doesn't crash

# The JSX auto-repair handles the most common LLM output mistakes:
#   - Forgetting to close <h1>, <div>, <td>, <span> etc.
#   - Extra closing tags due to mismatched nesting
#   - Both are fixed by replaying the tag stack and inserting/removing as needed
# """

# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from difflib import unified_diff
# from typing import Dict, List, Optional, Tuple

# from backend.llm_client import NvidiaLLM, get_llm
# from backend.state import AgentState

# logger = logging.getLogger(__name__)


# # ──────────────────────────────────────────────────────────────
# # Constants
# # ──────────────────────────────────────────────────────────────

# MAX_WORKERS = 4
# MAX_RETRIES = 2

# _CODE_ANCHORS = [
#     "export default", "import React", "import {",
#     "import type", "const ", "interface ", "function ", "class ",
# ]

# _FENCE_RE       = re.compile(r"```[a-zA-Z]*")
# _EXPORT_NAME_RE = re.compile(
#     r"export\s+default\s+(?:function|class|const)?\s*(\w+)|"
#     r"export\s+default\s+(\w+)"
# )
# _ERROR_FN_RE = re.compile(r"\[(?:ERROR|WARN )\]\s+\w+\s+\[([^\]]+)\]:")

# REACT_IMPORT = (
#     "import React, { useState, useEffect, useRef, useCallback, useMemo } "
#     "from 'react'\n"
# )

# HTML_TAGS = frozenset({
#     "a", "abbr", "address", "article", "aside", "audio", "b", "blockquote",
#     "button", "canvas", "caption", "cite", "code", "colgroup", "data",
#     "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
#     "em", "fieldset", "figcaption", "figure", "footer", "form",
#     "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "i", "iframe",
#     "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "meter",
#     "nav", "noscript", "ol", "optgroup", "option", "output", "p", "picture",
#     "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script",
#     "section", "select", "small", "span", "strong", "style", "sub",
#     "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea",
#     "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video",
# })

# VOID_ELEMENTS = frozenset({
#     "area", "base", "br", "col", "embed", "hr", "img", "input",
#     "link", "meta", "param", "source", "track", "wbr",
# })

# _OPEN_TAG_RE   = re.compile(r"<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*[^/])?>")
# _CLOSE_TAG_RE  = re.compile(r"</([a-zA-Z][a-zA-Z0-9]*)>")
# _SELF_CLOSE_RE = re.compile(r"<[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?/\s*>")
# _TS_PATTERNS: List[Tuple[re.Pattern, str]] = [
#     (re.compile(r"import type [^;]+;"),                                       ""),
#     (re.compile(r"export type [^;{]+;"),                                      ""),
#     (re.compile(r"(?:export\s+)?interface\s+\w+[^{]*\{[^}]*\}", re.DOTALL),  ""),
#     (re.compile(r"(?:export\s+)?type\s+\w+(?:<[^>]*>)?\s*=[^;]+;"),          ""),
#     (re.compile(r"useState<[^>()]+>"),                                        "useState"),
#     (re.compile(r"useRef<[^>()]+>"),                                          "useRef"),
#     (re.compile(r"useCallback<[^>()]+>"),                                     "useCallback"),
#     (re.compile(r"useMemo<[^>()]+>"),                                         "useMemo"),
#     (re.compile(r":\s*(?:string|number|boolean|void|any|never|null|undefined)\b"), ""),
#     (re.compile(r"\s+as\s+(?:string|number|boolean|any|unknown|never)\b"),    ""),
#     (re.compile(r"\s*:\s*,"),                                                 ","),
#     (re.compile(r"\s*:\s*\)"),                                                ")"),
#     (re.compile(r"\s*:\s*\n"),                                                "\n"),
# ]

# _TS_LEAKAGE_RE = re.compile(
#     r"interface\s+\w+\s*\{"
#     r"|type\s+\w+\s*=\s*[{([]"
#     r"|import type\s+"
#     r"|useState<[A-Z]"
# )

# _HOOKS_RE = re.compile(
#     r"\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer)\s*\("
# )


# # ──────────────────────────────────────────────────────────────
# # Utilities
# # ──────────────────────────────────────────────────────────────

# def _clean(text: str) -> str:
#     if not text:
#         return text
#     text = _FENCE_RE.sub("", text).replace("```", "")
#     for anchor in _CODE_ANCHORS:
#         idx = text.find(anchor)
#         if idx != -1:
#             text = text[idx:]
#             break
#     return text.strip()


# def _extract_export_name(code: str) -> Optional[str]:
#     m = _EXPORT_NAME_RE.search(code)
#     return (m.group(1) or m.group(2)) if m else None


# def _diff_summary(original: str, fixed: str, filename: str) -> str:
#     orig  = original.splitlines(keepends=True)
#     fixed = fixed.splitlines(keepends=True)
#     diff  = list(unified_diff(orig, fixed, fromfile=filename,
#                                tofile=filename + " (fixed)", n=0))
#     adds = sum(1 for l in diff if l.startswith("+") and not l.startswith("+++"))
#     dels = sum(1 for l in diff if l.startswith("-") and not l.startswith("---"))
#     return f"+{adds}/-{dels} lines"


# def _strip_strings(line: str) -> str:
#     line = re.sub(r'"(?:[^"\\]|\\.)*"', '""', line)
#     line = re.sub(r"'(?:[^'\\]|\\.)*'", "''", line)
#     return line


# def _strip_typescript(code: str) -> str:
#     for pattern, replacement in _TS_PATTERNS:
#         code = pattern.sub(replacement, code)
#     return code


# def _ensure_react_import(code: str) -> str:
#     if not _HOOKS_RE.search(code):
#         return code
#     has_import = (
#         "import React" in code
#         or "from 'react'" in code
#         or 'from "react"' in code
#     )
#     return code if has_import else REACT_IMPORT + code


# def _parse_error_filename(error_str: str) -> Optional[str]:
#     m = _ERROR_FN_RE.search(error_str)
#     if not m:
#         return None
#     fn = m.group(1).strip()
#     return None if fn in ("unknown", "", "[]") else fn


# def _categorize_errors(
#     errors: List[str], file_map: Dict[str, str]
# ) -> Tuple[Dict[str, List[str]], List[str]]:
#     file_errors: Dict[str, List[str]] = {}
#     structural:  List[str] = []
#     for err in errors:
#         fn = _parse_error_filename(err)
#         if fn and fn in file_map:
#             file_errors.setdefault(fn, []).append(err)
#         else:
#             structural.append(err)
#     return file_errors, structural


# # ──────────────────────────────────────────────────────────────
# # Tier 1: Deterministic JSX auto-repair
# # ──────────────────────────────────────────────────────────────

# def _get_indent(line: str) -> int:
#     return len(line) - len(line.lstrip())


# # HTML elements that implicitly close when a sibling of the same type opens.
# # We skip tracking these as open tags to avoid false "unclosed" reports.
# _IMPLICIT_CLOSE_TAGS = frozenset({
#     "option", "optgroup", "colgroup",
#     "dt", "dd",       # definition list items
#     "rp", "rt",       # ruby
# })


# def _get_tag_events(line: str) -> List[Tuple[int, str, str]]:
#     """
#     Return all JSX tag events on one line in document order.
#     Each event is (char_position, 'open'|'close', tag_name_lowercase).
#     Self-closing tags and void elements are excluded entirely.
#     """
#     clean = _strip_strings(line)

#     # Blank out self-closing tags so they don't match open patterns
#     no_self = _SELF_CLOSE_RE.sub(lambda m: " " * len(m.group(0)), clean)

#     # Blank out void elements
#     for void in VOID_ELEMENTS:
#         no_self = re.sub(
#             rf"<{void}(?:\s[^>]*)?>",
#             lambda m: " " * len(m.group(0)),
#             no_self,
#         )

#     events: List[Tuple[int, str, str]] = []

#     # Opening tags
#     for m in _OPEN_TAG_RE.finditer(no_self):
#         tag = m.group(1).lower()
#         if tag not in HTML_TAGS or tag in VOID_ELEMENTS or tag in _IMPLICIT_CLOSE_TAGS:
#             continue
#         before = no_self[: m.start()]
#         if re.search(r"[A-Za-z0-9_]\s*$", before):
#             continue   # TypeScript generic like Array<div> — skip
#         events.append((m.start(), "open", tag))

#     # Closing tags (use original clean, not no_self)
#     for m in _CLOSE_TAG_RE.finditer(clean):
#         tag = m.group(1).lower()
#         if tag not in HTML_TAGS or tag in _IMPLICIT_CLOSE_TAGS:
#             continue
#         events.append((m.start(), "close", tag))

#     events.sort(key=lambda e: e[0])
#     return events


# def _repair_jsx_tags(code: str) -> str:
#     """
#     Correct deterministic JSX tag repair using left-to-right event processing.

#     Key fix over previous version:
#     - Processes opens AND closes in document order on each line (not two
#       separate passes), so <p>text</p> on one line correctly cancels out
#       instead of leaving a spurious unclosed <p> on the stack.
#     - Inserts missing closing tags BEFORE the line that triggered the mismatch,
#       not after or at the end of the file.
#     - Skips implicit-close elements (option, dt, dd) that don't need explicit closes.

#     Example — LLM forgot to close <h1>:
#         <div>
#           <h1>Title          stack: [div, h1]
#           <p>Subtitle</p>    p opens and closes → stack unchanged: [div, h1]
#         </div>               </div> finds div at idx 0, h1 is above it
#                              → inserts </h1> before this line ✓
#     """
#     lines = code.split("\n")
#     result: List[str] = []
#     # stack entries: (tag_name, indent_of_that_line + 2)
#     stack: List[Tuple[str, int]] = []
#     changed = False

#     for line in lines:
#         stripped = line.strip()
#         if stripped.startswith("//") or stripped.startswith("*"):
#             result.append(line)
#             continue

#         indent = _get_indent(line)
#         extra_before: List[str] = []
#         events = _get_tag_events(line)

#         for _, etype, tag in events:
#             if etype == "open":
#                 # Use indent+2 so inserted closes align with children
#                 stack.append((tag, indent + 2))

#             else:  # close
#                 if stack and stack[-1][0] == tag:
#                     stack.pop()
#                 else:
#                     # Find this tag somewhere deeper in the stack
#                     idx = next(
#                         (j for j, (t, _) in reversed(list(enumerate(stack)))
#                          if t == tag),
#                         None,
#                     )
#                     if idx is not None:
#                         # Pop everything above it, inserting closing tags
#                         while len(stack) > idx + 1:
#                             t, ind = stack.pop()
#                             extra_before.append(" " * ind + f"</{t}>")
#                             changed = True
#                         stack.pop()  # pop the matched tag
#                     # else: completely spurious close — ignore it silently

#         result.extend(extra_before)
#         result.append(line)

#     # Close any tags still open at end-of-file.
#     # Insert before the final JS closing brackets (}, ), );) not after them.
#     if stack:
#         insert_pos = len(result)
#         for j in range(len(result) - 1, -1, -1):
#             s = result[j].strip()
#             if s in (")", "}", ");", "};", "}):", "});", ""):
#                 insert_pos = j
#             else:
#                 break
#         close_block = [" " * ind + f"</{t}>" for t, ind in reversed(stack)]
#         result[insert_pos:insert_pos] = close_block
#         changed = True

#     return "\n".join(result) if changed else code


# def _apply_quick_fixes(
#     filename: str, content: str, errors: List[str]
# ) -> Tuple[str, bool]:
#     """
#     Tier 1: deterministic fixes. Returns (fixed_content, was_changed).
#     """
#     original = content

#     # Fix 1: TypeScript leakage in .jsx
#     if filename.endswith(".jsx") and _TS_LEAKAGE_RE.search(content):
#         content = _strip_typescript(content)

#     # Fix 2: Missing React import
#     content = _ensure_react_import(content)

#     # Fix 3: JSX tag repair (for files with jsx_syntax errors)
#     has_jsx_error = any("JSX tag imbalance" in e or "jsx_syntax" in e.lower()
#                         for e in errors)
#     if has_jsx_error and filename.endswith((".jsx", ".tsx")):
#         repaired = _repair_jsx_tags(content)
#         if repaired != content:
#             content = repaired

#     return content, (content != original)


# # ──────────────────────────────────────────────────────────────
# # Tier 2: LLM fix
# # ──────────────────────────────────────────────────────────────

# def _build_prompt(filename: str, content: str, errors: List[str], attempt: int) -> str:
#     error_block = "\n".join(f"  - {e}" for e in errors[:20])  # cap at 20
#     strictness = (
#         "Fix ONLY the broken parts. Preserve all working code."
#         if attempt == 0
#         else "Rewrite the component completely. Keep the same export name."
#     )
#     return (
#         "You are a senior React engineer fixing broken JSX.\n\n"
#         f"File: {filename}\n\n"
#         f"Errors:\n{error_block}\n\n"
#         f"- {strictness}\n"
#         "- Return ONLY source code — no markdown, no backticks.\n"
#         "- Start with 'import React...' or 'export default'.\n"
#         "- Keep the exact export default function name.\n"
#         "- Every JSX return() must have ONE root element. Use <> </> if needed.\n"
#         "- Close EVERY opened tag: <div>...</div>. Never leave tags unclosed.\n"
#         "- Void elements: <input />, <br />, <img />.\n"
#         "- Import: import React, { useState, useEffect } from 'react'\n"
#         "- No TypeScript — plain JSX only.\n"
#         "- Tailwind CSS for all styling.\n\n"
#         f"Current code:\n{content}\n"
#     )


# def _fix_one_file(
#     filename: str, content: str, file_errors: List[str], llm
# ) -> Tuple[str, str, str]:
#     """Returns (filename, fixed_content, status)."""

#     # Tier 1: deterministic
#     quick, changed = _apply_quick_fixes(filename, content, file_errors)
#     if changed:
#         diff = _diff_summary(content, quick, filename)
#         logger.info("  [%s] deterministic-fixed (%s)", filename, diff)
#         return filename, quick, "deterministic"

#     # Tier 2: LLM (only if API is available)
#     if llm is None:
#         logger.warning("  [%s] LLM unavailable; keeping original", filename)
#         return filename, content, "fallback"

#     original_name = _extract_export_name(content)
#     working = content

#     for attempt in range(MAX_RETRIES):
#         try:
#             prompt   = _build_prompt(filename, working, file_errors, attempt)
#             response = llm.invoke(prompt)
#             raw      = response.content if hasattr(response, "content") else str(response)
#             fixed    = _clean(raw)

#             if not fixed:
#                 logger.warning("  [%s] attempt %d: empty response", filename, attempt + 1)
#                 continue

#             # Sanity check export name
#             if filename.endswith((".jsx", ".tsx")) and original_name:
#                 fixed_name = _extract_export_name(fixed)
#                 if fixed_name and fixed_name != original_name:
#                     logger.warning("  [%s] export name mismatch (%s→%s)",
#                                    filename, original_name, fixed_name)
#                     working = fixed
#                     continue

#             fixed = _ensure_react_import(fixed)
#             diff  = _diff_summary(content, fixed, filename)
#             logger.info("  [%s] LLM-fixed attempt %d (%s)", filename, attempt + 1, diff)
#             return filename, fixed, "llm_fixed"

#         except Exception as exc:
#             # Catch 404, connection errors etc. — don't crash the whole pipeline
#             err_str = str(exc)
#             if "404" in err_str or "not found" in err_str.lower():
#                 logger.warning("  [%s] LLM API unavailable (404) — skipping LLM fix", filename)
#                 break
#             logger.warning("  [%s] LLM error attempt %d: %s", filename, attempt + 1, exc)
#             working = content

#     logger.warning("  [%s] all fix attempts failed; keeping original", filename)
#     return filename, content, "fallback"


# # ──────────────────────────────────────────────────────────────
# # Tier 3: Missing page stubs
# # ──────────────────────────────────────────────────────────────

# def _generate_stub(page_name: str) -> str:
#     return (
#         f"import React from 'react'\n\n"
#         f"export default function {page_name}() {{\n"
#         f"  return (\n"
#         f"    <div className=\"min-h-screen flex flex-col items-center justify-center "
#         f"bg-gradient-to-br from-indigo-600 to-purple-700\">\n"
#         f"      <div className=\"text-center text-white px-6\">\n"
#         f"        <div className=\"text-6xl mb-6\">🚀</div>\n"
#         f"        <h1 className=\"text-4xl font-black mb-4\">{page_name}</h1>\n"
#         f"        <p className=\"text-white/70 text-lg\">Page is loading...</p>\n"
#         f"      </div>\n"
#         f"    </div>\n"
#         f"  )\n"
#         f"}}\n"
#     )


# def _handle_missing_pages(structural: List[str],
#                            file_dict: Dict[str, dict]) -> List[dict]:
#     new_files = []
#     for err in structural:
#         if "Missing page component" not in err:
#             continue
#         fn = _parse_error_filename(err)
#         if not fn or fn in file_dict:
#             continue
#         page_name = re.sub(r"\.(tsx|jsx)$", "", fn.split("/")[-1])
#         if not page_name:
#             continue
#         new_files.append({
#             "filename": fn,
#             "content":  _generate_stub(page_name),
#             "meta":     {"page": page_name, "type": "stub"},
#         })
#         logger.info("  Created stub: %s", fn)
#     return new_files


# # ──────────────────────────────────────────────────────────────
# # Try to get LLM — return None if unavailable
# # ──────────────────────────────────────────────────────────────

# def _try_get_llm():
#     try:
#         return get_llm(temperature=0, max_tokens=2048)
#     except Exception as e:
#         logger.warning("LLM unavailable: %s — will use deterministic fixes only", e)
#         return None


# # ──────────────────────────────────────────────────────────────
# # Node
# # ──────────────────────────────────────────────────────────────

# def fixer_agent(state: AgentState) -> dict:
#     errors: List[str] = state.get("validation_errors", [])
#     files:  List[dict] = state.get("code_files", [])
#     retry_count = state.get("retry_count", 0)

#     if not errors:
#         logger.info("No validation errors — fixer skipped")
#         return {}

#     logger.info("Fixer: %d error(s), %d file(s)", len(errors), len(files))

#     file_dict: Dict[str, dict] = {f["filename"]: f for f in files}
#     file_map:  Dict[str, str]  = {fn: d["content"] for fn, d in file_dict.items()}

#     file_errors, structural = _categorize_errors(errors, file_map)

#     if structural:
#         logger.info("Structural errors: %d", len(structural))

#     if not file_errors:
#         new_files = _handle_missing_pages(structural, file_dict)
#         for f in new_files:
#             file_dict[f["filename"]] = f
#         base: dict = {"retry_count": retry_count + 1}
#         if new_files:
#             base["code_files"] = list(file_dict.values())
#         return base

#     logger.info("Fixing %d file(s): %s", len(file_errors), sorted(file_errors.keys()))

#     # Try to get LLM — gracefully handle 404/unavailable
#     llm = _try_get_llm()
#     if llm is None:
#         logger.info("LLM unavailable — running deterministic fixes only")

#     futures: dict = {}
#     with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
#         for fn, errs in file_errors.items():
#             futures[pool.submit(_fix_one_file, fn, file_map[fn], errs, llm)] = fn

#         for future in as_completed(futures):
#             fn, fixed_content, status = future.result()
#             file_dict[fn] = {**file_dict[fn], "content": fixed_content}
#             if status == "fallback":
#                 logger.warning("  [%s] kept original", fn)

#     new_files = _handle_missing_pages(structural, file_dict)
#     for f in new_files:
#         file_dict[f["filename"]] = f

#     logger.info("Fixer done: %d file(s) processed, %d stub(s) created",
#                 len(file_errors), len(new_files))
#     return {
#         "code_files":  list(file_dict.values()),
#         "retry_count": retry_count + 1,
#     }

# """
# fixer_agent.py  -  Targeted code repair agent.

# Key addition: deterministic JSX auto-repair tier (no LLM needed).
# From the production logs, the LLM API was returning 404 for EVERY call,
# meaning zero files ever got fixed. We now have three repair tiers:

#   Tier 1 — DETERMINISTIC (no LLM, always works):
#     - Missing React import when hooks are used
#     - TypeScript leakage in .jsx files
#     - JSX tag auto-repair: inserts missing closing tags / removes extras
#       using the same stack-based algorithm as the validator

#   Tier 2 — LLM FIX (when Tier 1 didn't fully fix it):
#     - Sends broken file to LLM with specific error messages
#     - Falls back gracefully if API is unavailable (404, 500, timeout)

#   Tier 3 — STUB REPLACEMENT (for missing page files):
#     - Creates minimal working page so the app doesn't crash

# The JSX auto-repair handles the most common LLM output mistakes:
#   - Forgetting to close <h1>, <div>,  <p>, <span> etc.
#   - Extra closing tags due to mismatched nesting
#   - Both are fixed by replaying the tag stack and inserting/removing as needed
# """

# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from difflib import unified_diff
# from typing import Dict, List, Optional, Tuple

# from backend.state import AgentState

# logger = logging.getLogger(__name__)


# # ──────────────────────────────────────────────────────────────
# # Constants
# # ──────────────────────────────────────────────────────────────

# MAX_WORKERS = 4
# MAX_RETRIES = 2

# _CODE_ANCHORS = [
#     "export default", "import React", "import {",
#     "import type", "const ", "interface ", "function ", "class ",
# ]

# _FENCE_RE = re.compile(r"```[a-zA-Z]*")
# _EXPORT_NAME_RE = re.compile(
#     r"export\s+default\s+(?:function|class|const)?\s*(\w+)|"
#     r"export\s+default\s+(\w+)"
# )
# _ERROR_FN_RE = re.compile(r"\[(?:ERROR|WARN )\]\s+\w+\s+\[([^\]]+)\]:")

# REACT_IMPORT = (
#     "import React, { useState, useEffect, useRef, useCallback, useMemo } "
#     "from 'react'\n"
# )

# HTML_TAGS = frozenset({
#     "a", "abbr", "address", "article", "aside", "audio", "b", "blockquote",
#     "button", "canvas", "caption", "cite", "code", "colgroup", "data",
#     "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
#     "em", "fieldset", "figcaption", "figure", "footer", "form",
#     "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "i", "iframe",
#     "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "meter",
#     "nav", "noscript", "ol", "optgroup", "option", "output", "p", "picture",
#     "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script",
#     "section", "select", "small", "span", "strong", "style", "sub",
#     "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea",
#     "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video",
# })

# VOID_ELEMENTS = frozenset({
#     "area", "base", "br", "col", "embed", "hr", "img", "input",
#     "link", "meta", "param", "source", "track", "wbr",
# })

# _OPEN_TAG_RE = re.compile(r"<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*[^/])?>")
# _CLOSE_TAG_RE = re.compile(r"</([a-zA-Z][a-zA-Z0-9]*)>")
# _SELF_CLOSE_RE = re.compile(r"<[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?/\s*>")

# _TS_PATTERNS: List[Tuple[re.Pattern, str]] = [
#     (re.compile(r"import type [^;]+;"), ""),
#     (re.compile(r"export type [^;{]+;"), ""),
#     (re.compile(r"(?:export\s+)?interface\s+\w+[^{]*\{[^}]*\}", re.DOTALL), ""),
#     (re.compile(r"(?:export\s+)?type\s+\w+(?:<[^>]*>)?\s*=[^;]+;"), ""),
#     (re.compile(r"useState<[^>()]+>"), "useState"),
#     (re.compile(r"useRef<[^>()]+>"), "useRef"),
#     (re.compile(r"useCallback<[^>()]+>"), "useCallback"),
#     (re.compile(r"useMemo<[^>()]+>"), "useMemo"),
#     (re.compile(r":\s*(?:string|number|boolean|void|any|never|null|undefined)\b"), ""),
#     (re.compile(r"\s+as\s+(?:string|number|boolean|any|unknown|never)\b"), ""),
#     (re.compile(r"\s*:\s*,"), ","),
#     (re.compile(r"\s*:\s*\)"), ")"),
#     (re.compile(r"\s*:\s*\n"), "\n"),
# ]

# _TS_LEAKAGE_RE = re.compile(
#     r"interface\s+\w+\s*\{"
#     r"|type\s+\w+\s*=\s*[{([]"
#     r"|import type\s+"
#     r"|useState<[A-Z]"
# )

# _HOOKS_RE = re.compile(
#     r"\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer)\s*\("
# )

# _IMPLICIT_CLOSE_TAGS = frozenset({
#     "option", "optgroup", "colgroup",
#     "dt", "dd",
#     "rp", "rt",
# })


# # ──────────────────────────────────────────────────────────────
# # Utilities
# # ──────────────────────────────────────────────────────────────

# def _clean(text: str) -> str:
#     """Clean LLM response by removing markdown fences."""
#     if not text:
#         return text
#     text = _FENCE_RE.sub("", text).replace("```", "")
#     # Find first code anchor
#     for anchor in _CODE_ANCHORS:
#         idx = text.find(anchor)
#         if idx != -1:
#             text = text[idx:]
#             break
#     return text.strip()


# def _extract_export_name(code: str) -> Optional[str]:
#     """Extract the exported component name."""
#     m = _EXPORT_NAME_RE.search(code)
#     return (m.group(1) or m.group(2)) if m else None


# def _diff_summary(original: str, fixed: str, filename: str) -> str:
#     """Generate a summary of changes."""
#     orig = original.splitlines(keepends=True)
#     fixed = fixed.splitlines(keepends=True)
#     diff = list(unified_diff(orig, fixed, fromfile=filename,
#                             tofile=filename + " (fixed)", n=0))
#     adds = sum(1 for l in diff if l.startswith("+") and not l.startswith("+++"))
#     dels = sum(1 for l in diff if l.startswith("-") and not l.startswith("---"))
#     return f"+{adds}/-{dels} lines"


# def _strip_strings(line: str) -> str:
#     """Remove string literals to avoid false positives."""
#     line = re.sub(r'"(?:[^"\\]|\\.)*"', '""', line)
#     line = re.sub(r"'(?:[^'\\]|\\.)*'", "''", line)
#     line = re.sub(r"`(?:[^`\\]|\\.)*`", "``", line)
#     return line


# def _strip_typescript(code: str) -> str:
#     """Strip TypeScript syntax from .jsx files."""
#     for pattern, replacement in _TS_PATTERNS:
#         try:
#             code = pattern.sub(replacement, code)
#         except Exception:
#             continue
#     return code


# def _ensure_react_import(code: str) -> str:
#     """Ensure React is imported if hooks are used."""
#     if not _HOOKS_RE.search(code):
#         return code
#     has_import = (
#         "import React" in code
#         or "from 'react'" in code
#         or 'from "react"' in code
#     )
#     return code if has_import else REACT_IMPORT + code


# def _parse_error_filename(error_str: str) -> Optional[str]:
#     """Extract filename from error message."""
#     m = _ERROR_FN_RE.search(error_str)
#     if not m:
#         return None
#     fn = m.group(1).strip()
#     return None if fn in ("unknown", "", "[]") else fn


# def _categorize_errors(
#     errors: List[str], file_map: Dict[str, str]
# ) -> Tuple[Dict[str, List[str]], List[str]]:
#     """Categorize errors by file."""
#     file_errors: Dict[str, List[str]] = {}
#     structural: List[str] = []
    
#     for err in errors:
#         fn = _parse_error_filename(err)
#         if fn and fn in file_map:
#             file_errors.setdefault(fn, []).append(err)
#         else:
#             structural.append(err)
    
#     return file_errors, structural


# # ──────────────────────────────────────────────────────────────
# # Tier 1: Deterministic JSX auto-repair
# # ──────────────────────────────────────────────────────────────

# def _get_indent(line: str) -> int:
#     """Get indentation level of a line."""
#     return len(line) - len(line.lstrip())


# def _get_tag_events(line: str) -> List[Tuple[int, str, str]]:
#     """
#     Return all JSX tag events on one line in document order.
#     Each event is (char_position, 'open'|'close', tag_name_lowercase).
#     """
#     clean = _strip_strings(line)
    
#     # Blank out self-closing tags
#     no_self = _SELF_CLOSE_RE.sub(lambda m: " " * len(m.group(0)), clean)
    
#     # Blank out void elements
#     for void in VOID_ELEMENTS:
#         no_self = re.sub(
#             rf"<{void}(?:\s[^>]*)?>",
#             lambda m: " " * len(m.group(0)),
#             no_self,
#         )
    
#     events: List[Tuple[int, str, str]] = []
    
#     # Opening tags
#     for m in _OPEN_TAG_RE.finditer(no_self):
#         tag = m.group(1).lower()
#         if tag not in HTML_TAGS or tag in VOID_ELEMENTS or tag in _IMPLICIT_CLOSE_TAGS:
#             continue
#         before = no_self[: m.start()]
#         if re.search(r"[A-Za-z0-9_]\s*$", before):
#             continue
#         events.append((m.start(), "open", tag))
    
#     # Closing tags
#     for m in _CLOSE_TAG_RE.finditer(clean):
#         tag = m.group(1).lower()
#         if tag not in HTML_TAGS or tag in _IMPLICIT_CLOSE_TAGS:
#             continue
#         events.append((m.start(), "close", tag))
    
#     events.sort(key=lambda e: e[0])
#     return events


# def _repair_jsx_tags(code: str) -> str:
#     """Fix JSX tag imbalances."""
#     lines = code.split("\n")
#     result: List[str] = []
#     stack: List[Tuple[str, int]] = []
#     changed = False
    
#     for line in lines:
#         stripped = line.strip()
#         if stripped.startswith("//") or stripped.startswith("*"):
#             result.append(line)
#             continue
        
#         indent = _get_indent(line)
#         extra_before: List[str] = []
#         events = _get_tag_events(line)
        
#         for _, etype, tag in events:
#             if etype == "open":
#                 stack.append((tag, indent + 2))
#             else:  # close
#                 if stack and stack[-1][0] == tag:
#                     stack.pop()
#                 else:
#                     idx = next(
#                         (j for j, (t, _) in reversed(list(enumerate(stack)))
#                          if t == tag),
#                         None,
#                     )
#                     if idx is not None:
#                         while len(stack) > idx + 1:
#                             t, ind = stack.pop()
#                             extra_before.append(" " * ind + f"</{t}>")
#                             changed = True
#                         stack.pop()
        
#         result.extend(extra_before)
#         result.append(line)
    
#     # Close any remaining open tags
#     if stack:
#         insert_pos = len(result)
#         for j in range(len(result) - 1, -1, -1):
#             s = result[j].strip()
#             if s in (")", "}", ");", "};", "}):", "});", ""):
#                 insert_pos = j
#             else:
#                 break
#         close_block = [" " * ind + f"</{t}>" for t, ind in reversed(stack)]
#         result[insert_pos:insert_pos] = close_block
#         changed = True
    
#     return "\n".join(result) if changed else code


# def _apply_quick_fixes(
#     filename: str, content: str, errors: List[str]
# ) -> Tuple[str, bool]:
#     """
#     Tier 1: deterministic fixes. Returns (fixed_content, was_changed).
#     """
#     original = content
    
#     # Fix 1: TypeScript leakage in .jsx
#     if filename.endswith(".jsx") and _TS_LEAKAGE_RE.search(content):
#         content = _strip_typescript(content)
    
#     # Fix 2: Missing React import
#     content = _ensure_react_import(content)
    
#     # Fix 3: JSX tag repair
#     has_jsx_error = any("JSX tag imbalance" in e or "jsx_syntax" in e.lower()
#                         for e in errors)
#     if has_jsx_error and filename.endswith((".jsx", ".tsx")):
#         repaired = _repair_jsx_tags(content)
#         if repaired != content:
#             content = repaired
    
#     return content, (content != original)


# # ──────────────────────────────────────────────────────────────
# # Tier 2: LLM fix
# # ──────────────────────────────────────────────────────────────

# def _build_prompt(filename: str, content: str, errors: List[str], attempt: int) -> str:
#     """Build prompt for LLM fix."""
#     error_block = "\n".join(f"  - {e}" for e in errors[:20])
#     strictness = (
#         "Fix ONLY the broken parts. Preserve all working code."
#         if attempt == 0
#         else "Rewrite the component completely. Keep the same export name."
#     )
#     return (
#         "You are a senior React engineer fixing broken JSX.\n\n"
#         f"File: {filename}\n\n"
#         f"Errors:\n{error_block}\n\n"
#         f"- {strictness}\n"
#         "- Return ONLY source code — no markdown, no backticks.\n"
#         "- Start with 'import React...' or 'export default'.\n"
#         "- Keep the exact export default function name.\n"
#         "- Every JSX return() must have ONE root element. Use <> </> if needed.\n"
#         "- Close EVERY opened tag: <div>...</div>. Never leave tags unclosed.\n"
#         "- Void elements: <input />, <br />, <img />.\n"
#         "- Import: import React, { useState, useEffect } from 'react'\n"
#         "- No TypeScript — plain JSX only.\n"
#         "- Tailwind CSS for all styling.\n\n"
#         f"Current code:\n{content}\n"
#     )


# def _fix_one_file(
#     filename: str, content: str, file_errors: List[str], llm
# ) -> Tuple[str, str, str]:
#     """Fix a single file."""
    
#     # Tier 1: deterministic
#     quick, changed = _apply_quick_fixes(filename, content, file_errors)
#     if changed:
#         diff = _diff_summary(content, quick, filename)
#         logger.info("  [%s] deterministic-fixed (%s)", filename, diff)
#         return filename, quick, "deterministic"
    
#     # Tier 2: LLM
#     if llm is None:
#         logger.warning("  [%s] LLM unavailable; keeping original", filename)
#         return filename, content, "fallback"
    
#     original_name = _extract_export_name(content)
#     working = content
    
#     for attempt in range(MAX_RETRIES):
#         try:
#             prompt = _build_prompt(filename, working, file_errors, attempt)
#             response = llm.invoke(prompt)
#             raw = response.content if hasattr(response, "content") else str(response)
#             fixed = _clean(raw)
            
#             if not fixed:
#                 logger.warning("  [%s] attempt %d: empty response", filename, attempt + 1)
#                 continue
            
#             # Sanity check export name
#             if filename.endswith((".jsx", ".tsx")) and original_name:
#                 fixed_name = _extract_export_name(fixed)
#                 if fixed_name and fixed_name != original_name:
#                     logger.warning("  [%s] export name mismatch (%s→%s)",
#                                    filename, original_name, fixed_name)
#                     working = fixed
#                     continue
            
#             fixed = _ensure_react_import(fixed)
#             diff = _diff_summary(content, fixed, filename)
#             logger.info("  [%s] LLM-fixed attempt %d (%s)", filename, attempt + 1, diff)
#             return filename, fixed, "llm_fixed"
            
#         except Exception as exc:
#             err_str = str(exc)
#             if "404" in err_str or "not found" in err_str.lower():
#                 logger.warning("  [%s] LLM API unavailable — skipping LLM fix", filename)
#                 break
#             logger.warning("  [%s] LLM error attempt %d: %s", filename, attempt + 1, exc)
#             working = content
    
#     logger.warning("  [%s] all fix attempts failed; keeping original", filename)
#     return filename, content, "fallback"


# # ──────────────────────────────────────────────────────────────
# # Tier 3: Missing page stubs
# # ──────────────────────────────────────────────────────────────

# def _generate_stub(page_name: str) -> str:
#     """Generate a minimal working page stub."""
#     return (
#         f"import React from 'react'\n\n"
#         f"export default function {page_name}() {{\n"
#         f"  return (\n"
#         f"    <div className=\"min-h-screen flex flex-col items-center justify-center "
#         f"bg-gradient-to-br from-indigo-600 to-purple-700\">\n"
#         f"      <div className=\"text-center text-white px-6\">\n"
#         f"        <div className=\"text-6xl mb-6\">🚀</div>\n"
#         f"        <h1 className=\"text-4xl font-black mb-4\">{page_name}</h1>\n"
#         f"        <p className=\"text-white/70 text-lg\">Page is loading...</p>\n"
#         f"      </div>\n"
#         f"    </div>\n"
#         f"  )\n"
#         f"}}\n"
#     )


# def _handle_missing_pages(structural: List[str],
#                            file_dict: Dict[str, dict]) -> List[dict]:
#     """Create stubs for missing pages."""
#     new_files = []
#     for err in structural:
#         if "Missing page component" not in err:
#             continue
#         fn = _parse_error_filename(err)
#         if not fn or fn in file_dict:
#             continue
#         # Extract page name from filename
#         page_name_match = re.search(r"pages[/\\]([^/\\]+)\.(tsx|jsx)", fn)
#         if page_name_match:
#             page_name = page_name_match.group(1)
#         else:
#             page_name = re.sub(r"\.(tsx|jsx)$", "", fn.split("/")[-1])
        
#         if not page_name:
#             continue
            
#         new_files.append({
#             "filename": fn,
#             "content": _generate_stub(page_name),
#             "meta": {"page": page_name, "type": "stub"},
#         })
#         logger.info("  Created stub: %s", fn)
#     return new_files


# # ──────────────────────────────────────────────────────────────
# # Try to get LLM — return None if unavailable
# # ──────────────────────────────────────────────────────────────

# def _try_get_llm():
#     """Attempt to initialize LLM, return None if fails."""
#     try:
#         from backend.llm_client import get_llm
#         return get_llm(temperature=0, max_tokens=2048)
#     except Exception as e:
#         logger.warning("LLM unavailable: %s — will use deterministic fixes only", e)
#         return None


# # ──────────────────────────────────────────────────────────────
# # Node
# # ──────────────────────────────────────────────────────────────

# def fixer_agent(state: AgentState) -> dict:
#     """Main fixer agent node."""
#     errors: List[str] = state.get("validation_errors", [])
#     files: List[dict] = state.get("code_files", [])
#     retry_count = state.get("retry_count", 0)
    
#     if not errors:
#         logger.info("No validation errors — fixer skipped")
#         return {}
    
#     logger.info("Fixer: %d error(s), %d file(s)", len(errors), len(files))
    
#     # Build file dictionaries
#     file_dict: Dict[str, dict] = {f["filename"]: f for f in files}
#     file_map: Dict[str, str] = {fn: d["content"] for fn, d in file_dict.items()}
    
#     # Categorize errors
#     file_errors, structural = _categorize_errors(errors, file_map)
    
#     if structural:
#         logger.info("Structural errors: %d", len(structural))
    
#     # Handle missing pages first
#     new_files = _handle_missing_pages(structural, file_dict)
#     for f in new_files:
#         file_dict[f["filename"]] = f
    
#     # If no file-specific errors, just return
#     if not file_errors:
#         base: dict = {"retry_count": retry_count + 1}
#         if new_files:
#             base["code_files"] = list(file_dict.values())
#         return base
    
#     logger.info("Fixing %d file(s): %s", len(file_errors), sorted(file_errors.keys()))
    
#     # Try to get LLM
#     llm = _try_get_llm()
#     if llm is None:
#         logger.info("LLM unavailable — running deterministic fixes only")
    
#     # Fix files in parallel
#     futures: dict = {}
#     with ThreadPoolExecutor(max_workers=min(MAX_WORKERS, len(file_errors))) as pool:
#         for fn, errs in file_errors.items():
#             if fn in file_map:
#                 futures[pool.submit(_fix_one_file, fn, file_map[fn], errs, llm)] = fn
        
#         for future in as_completed(futures):
#             try:
#                 fn, fixed_content, status = future.result()
#                 file_dict[fn] = {**file_dict[fn], "content": fixed_content}
#                 if status == "fallback":
#                     logger.warning("  [%s] kept original", fn)
#             except Exception as e:
#                 fn = futures[future]
#                 logger.error("  [%s] fix failed: %s", fn, e)
    
#     logger.info("Fixer done: %d file(s) processed, %d stub(s) created",
#                 len(file_errors), len(new_files))
    
#     return {
#         "code_files": list(file_dict.values()),
#         "retry_count": retry_count + 1,
#     }


from __future__ import annotations

import logging
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from difflib import unified_diff
from typing import Dict, List, Optional, Tuple

from backend.state import AgentState

logger = logging.getLogger(__name__)

MAX_WORKERS = 4
MAX_RETRIES = 2

_CODE_ANCHORS = [
    "export default", "import React", "import {",
    "import type", "const ", "interface ", "function ", "class ",
]

_FENCE_RE = re.compile(r"```[a-zA-Z]*")
_EXPORT_NAME_RE = re.compile(
    r"export\s+default\s+(?:function|class|const)?\s*(\w+)|"
    r"export\s+default\s+(\w+)"
)
_ERROR_FN_RE = re.compile(r"\[(?:ERROR|WARN )\]\s+\w+\s+\[([^\]]+)\]:")

REACT_IMPORT = (
    "import React, { useState, useEffect, useRef, useCallback, useMemo } "
    "from 'react'\n"
)

HTML_TAGS = frozenset({
    "a", "abbr", "address", "article", "aside", "audio", "b", "blockquote",
    "button", "canvas", "caption", "cite", "code", "colgroup", "data",
    "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
    "em", "fieldset", "figcaption", "figure", "footer", "form",
    "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "i", "iframe",
    "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "meter",
    "nav", "noscript", "ol", "optgroup", "option", "output", "p", "picture",
    "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script",
    "section", "select", "small", "span", "strong", "style", "sub",
    "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea",
    "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video",
})

VOID_ELEMENTS = frozenset({
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
})

_OPEN_TAG_RE = re.compile(r"<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*[^/])?>")
_CLOSE_TAG_RE = re.compile(r"</([a-zA-Z][a-zA-Z0-9]*)>")
_SELF_CLOSE_RE = re.compile(r"<[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?/\s*>")

_TS_PATTERNS: List[Tuple[re.Pattern, str]] = [
    (re.compile(r"import type [^;]+;"), ""),
    (re.compile(r"export type [^;{]+;"), ""),
    (re.compile(r"(?:export\s+)?interface\s+\w+[^{]*\{[^}]*\}", re.DOTALL), ""),
    (re.compile(r"(?:export\s+)?type\s+\w+(?:<[^>]*>)?\s*=[^;]+;"), ""),
    (re.compile(r"useState<[^>()]+>"), "useState"),
    (re.compile(r"useRef<[^>()]+>"), "useRef"),
    (re.compile(r"useCallback<[^>()]+>"), "useCallback"),
    (re.compile(r"useMemo<[^>()]+>"), "useMemo"),
    (re.compile(r":\s*(?:string|number|boolean|void|any|never|null|undefined)\b"), ""),
    (re.compile(r"\s+as\s+(?:string|number|boolean|any|unknown|never)\b"), ""),
    (re.compile(r"\s*:\s*,"), ","),
    (re.compile(r"\s*:\s*\)"), ")"),
    (re.compile(r"\s*:\s*\n"), "\n"),
]

_TS_LEAKAGE_RE = re.compile(
    r"interface\s+\w+\s*\{"
    r"|type\s+\w+\s*=\s*[{([]"
    r"|import type\s+"
    r"|useState<[A-Z]"
)

_HOOKS_RE = re.compile(
    r"\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer)\s*\("
)

_IMPLICIT_CLOSE_TAGS = frozenset({
    "option", "optgroup", "colgroup",
    "dt", "dd",
    "rp", "rt",
})


def _clean(text: str) -> str:
    if not text:
        return text
    text = _FENCE_RE.sub("", text).replace("```", "")
    for anchor in _CODE_ANCHORS:
        idx = text.find(anchor)
        if idx != -1:
            text = text[idx:]
            break
    return text.strip()


def _extract_export_name(code: str) -> Optional[str]:
    m = _EXPORT_NAME_RE.search(code)
    return (m.group(1) or m.group(2)) if m else None


def _diff_summary(original: str, fixed: str, filename: str) -> str:
    orig = original.splitlines(keepends=True)
    fixed = fixed.splitlines(keepends=True)
    diff = list(unified_diff(orig, fixed, fromfile=filename,
                            tofile=filename + " (fixed)", n=0))
    adds = sum(1 for l in diff if l.startswith("+") and not l.startswith("+++"))
    dels = sum(1 for l in diff if l.startswith("-") and not l.startswith("---"))
    return f"+{adds}/-{dels} lines"


def _strip_strings(line: str) -> str:
    line = re.sub(r'"(?:[^"\\]|\\.)*"', '""', line)
    line = re.sub(r"'(?:[^'\\]|\\.)*'", "''", line)
    line = re.sub(r"`(?:[^`\\]|\\.)*`", "``", line)
    return line


def _strip_typescript(code: str) -> str:
    for pattern, replacement in _TS_PATTERNS:
        try:
            code = pattern.sub(replacement, code)
        except Exception:
            continue
    return code


def _ensure_react_import(code: str) -> str:
    if not _HOOKS_RE.search(code):
        return code
    has_import = (
        "import React" in code
        or "from 'react'" in code
        or 'from "react"' in code
    )
    return code if has_import else REACT_IMPORT + code


def _parse_error_filename(error_str: str) -> Optional[str]:
    m = _ERROR_FN_RE.search(error_str)
    if not m:
        return None
    fn = m.group(1).strip()
    return None if fn in ("unknown", "", "[]") else fn


def _categorize_errors(
    errors: List[str], file_map: Dict[str, str]
) -> Tuple[Dict[str, List[str]], List[str]]:
    file_errors: Dict[str, List[str]] = {}
    structural: List[str] = []
    
    for err in errors:
        fn = _parse_error_filename(err)
        if fn and fn in file_map:
            file_errors.setdefault(fn, []).append(err)
        else:
            structural.append(err)
    
    return file_errors, structural


def _get_indent(line: str) -> int:
    return len(line) - len(line.lstrip())


def _get_tag_events(line: str) -> List[Tuple[int, str, str]]:
    clean = _strip_strings(line)
    
    no_self = _SELF_CLOSE_RE.sub(lambda m: " " * len(m.group(0)), clean)
    
    for void in VOID_ELEMENTS:
        no_self = re.sub(
            rf"<{void}(?:\s[^>]*)?>",
            lambda m: " " * len(m.group(0)),
            no_self,
        )
    
    events: List[Tuple[int, str, str]] = []
    
    for m in _OPEN_TAG_RE.finditer(no_self):
        tag = m.group(1).lower()
        if tag not in HTML_TAGS or tag in VOID_ELEMENTS or tag in _IMPLICIT_CLOSE_TAGS:
            continue
        before = no_self[: m.start()]
        if re.search(r"[A-Za-z0-9_]\s*$", before):
            continue
        events.append((m.start(), "open", tag))
    
    for m in _CLOSE_TAG_RE.finditer(clean):
        tag = m.group(1).lower()
        if tag not in HTML_TAGS or tag in _IMPLICIT_CLOSE_TAGS:
            continue
        events.append((m.start(), "close", tag))
    
    events.sort(key=lambda e: e[0])
    return events


def _repair_jsx_tags(code: str) -> str:
    lines = code.split("\n")
    result: List[str] = []
    stack: List[Tuple[str, int]] = []
    changed = False
    
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("//") or stripped.startswith("*"):
            result.append(line)
            continue
        
        indent = _get_indent(line)
        extra_before: List[str] = []
        events = _get_tag_events(line)
        
        for _, etype, tag in events:
            if etype == "open":
                stack.append((tag, indent + 2))
            else:
                if stack and stack[-1][0] == tag:
                    stack.pop()
                else:
                    idx = next(
                        (j for j, (t, _) in reversed(list(enumerate(stack)))
                         if t == tag),
                        None,
                    )
                    if idx is not None:
                        while len(stack) > idx + 1:
                            t, ind = stack.pop()
                            extra_before.append(" " * ind + f"</{t}>")
                            changed = True
                        stack.pop()
        
        result.extend(extra_before)
        result.append(line)
    
    if stack:
        insert_pos = len(result)
        for j in range(len(result) - 1, -1, -1):
            s = result[j].strip()
            if s in (")", "}", ");", "};", "}):", "});", ""):
                insert_pos = j
            else:
                break
        close_block = [" " * ind + f"</{t}>" for t, ind in reversed(stack)]
        result[insert_pos:insert_pos] = close_block
        changed = True
    
    return "\n".join(result) if changed else code


def _apply_quick_fixes(
    filename: str, content: str, errors: List[str]
) -> Tuple[str, bool]:
    original = content
    
    if filename.endswith(".tsx") and _TS_LEAKAGE_RE.search(content):
        content = _strip_typescript(content)
    
    content = _ensure_react_import(content)
    
    has_jsx_error = any("JSX tag imbalance" in e or "jsx_syntax" in e.lower()
                        for e in errors)
    if has_jsx_error and filename.endswith(".tsx"):
        repaired = _repair_jsx_tags(content)
        if repaired != content:
            content = repaired
    
    return content, (content != original)


def _build_prompt(filename: str, content: str, errors: List[str], attempt: int) -> str:
    error_block = "\n".join(f"  - {e}" for e in errors[:20])
    strictness = (
        "Fix ONLY the broken parts. Preserve all working code."
        if attempt == 0
        else "Rewrite the component completely. Keep the same export name."
    )
    return (
        "You are a senior React engineer fixing broken TSX.\n\n"
        f"File: {filename}\n\n"
        f"Errors:\n{error_block}\n\n"
        f"- {strictness}\n"
        "- Return ONLY source code — no markdown, no backticks.\n"
        "- Start with 'import React...' or 'export default'.\n"
        "- Keep the exact export default function name.\n"
        "- Every JSX return() must have ONE root element. Use <> </> if needed.\n"
        "- Close EVERY opened tag: <div>...</div>. Never leave tags unclosed.\n"
        "- Void elements: <input />, <br />, <img />.\n"
        "- Import: import React, { useState, useEffect } from 'react'\n"
        "- Use TypeScript, no any types.\n"
        "- Tailwind CSS for all styling.\n\n"
        f"Current code:\n{content}\n"
    )


def _fix_one_file(
    filename: str, content: str, file_errors: List[str], llm
) -> Tuple[str, str, str]:
    quick, changed = _apply_quick_fixes(filename, content, file_errors)
    if changed:
        diff = _diff_summary(content, quick, filename)
        logger.info("  [%s] deterministic-fixed (%s)", filename, diff)
        return filename, quick, "deterministic"
    
    if llm is None:
        logger.warning("  [%s] LLM unavailable; keeping original", filename)
        return filename, content, "fallback"
    
    original_name = _extract_export_name(content)
    working = content
    
    for attempt in range(MAX_RETRIES):
        try:
            prompt = _build_prompt(filename, working, file_errors, attempt)
            response = llm.invoke(prompt)
            raw = response.content if hasattr(response, "content") else str(response)
            fixed = _clean(raw)
            
            if not fixed:
                logger.warning("  [%s] attempt %d: empty response", filename, attempt + 1)
                continue
            
            if filename.endswith(".tsx") and original_name:
                fixed_name = _extract_export_name(fixed)
                if fixed_name and fixed_name != original_name:
                    logger.warning("  [%s] export name mismatch (%s→%s)",
                                   filename, original_name, fixed_name)
                    working = fixed
                    continue
            
            fixed = _ensure_react_import(fixed)
            diff = _diff_summary(content, fixed, filename)
            logger.info("  [%s] LLM-fixed attempt %d (%s)", filename, attempt + 1, diff)
            return filename, fixed, "llm_fixed"
            
        except Exception as exc:
            err_str = str(exc)
            if "404" in err_str or "not found" in err_str.lower():
                logger.warning("  [%s] LLM API unavailable — skipping LLM fix", filename)
                break
            logger.warning("  [%s] LLM error attempt %d: %s", filename, attempt + 1, exc)
            working = content
    
    logger.warning("  [%s] all fix attempts failed; keeping original", filename)
    return filename, content, "fallback"


def _generate_stub(page_name: str) -> str:
    return (
        f"import React from 'react'\n\n"
        f"export default function {page_name}() {{\n"
        f"  return (\n"
        f"    <div className=\"min-h-screen flex flex-col items-center justify-center "
        f"bg-gradient-to-br from-indigo-600 to-purple-700\">\n"
        f"      <div className=\"text-center text-white px-6\">\n"
        f"        <div className=\"text-6xl mb-6\">🚀</div>\n"
        f"        <h1 className=\"text-4xl font-black mb-4\">{page_name}</h1>\n"
        f"        <p className=\"text-white/70 text-lg\">Page is loading...</p>\n"
        f"      </div>\n"
        f"    </div>\n"
        f"  )\n"
        f"}}\n"
    )


def _handle_missing_pages(structural: List[str],
                           file_dict: Dict[str, dict]) -> List[dict]:
    new_files = []
    for err in structural:
        if "Missing page component" not in err:
            continue
        fn = _parse_error_filename(err)
        if not fn or fn in file_dict:
            continue
        page_name_match = re.search(r"pages[/\\]([^/\\]+)\.tsx", fn)
        if page_name_match:
            page_name = page_name_match.group(1)
        else:
            page_name = re.sub(r"\.tsx$", "", fn.split("/")[-1])
        
        if not page_name:
            continue
            
        new_files.append({
            "filename": fn,
            "content": _generate_stub(page_name),
            "meta": {"page": page_name, "type": "stub"},
        })
        logger.info("  Created stub: %s", fn)
    return new_files


def _try_get_llm():
    try:
        from backend.llm_client import get_llm
        return get_llm(temperature=0, max_tokens=2048)
    except Exception as e:
        logger.warning("LLM unavailable: %s — will use deterministic fixes only", e)
        return None


def fixer_agent(state: AgentState) -> dict:
    errors: List[str] = state.get("validation_errors", [])
    files: List[dict] = state.get("code_files", [])
    retry_count = state.get("retry_count", 0)
    
    if not errors:
        logger.info("No validation errors — fixer skipped")
        return {}
    
    logger.info("Fixer: %d error(s), %d file(s)", len(errors), len(files))
    
    file_dict: Dict[str, dict] = {f["filename"]: f for f in files}
    file_map: Dict[str, str] = {fn: d["content"] for fn, d in file_dict.items()}
    
    file_errors, structural = _categorize_errors(errors, file_map)
    
    if structural:
        logger.info("Structural errors: %d", len(structural))
    
    new_files = _handle_missing_pages(structural, file_dict)
    for f in new_files:
        file_dict[f["filename"]] = f
    
    if not file_errors:
        base: dict = {"retry_count": retry_count + 1}
        if new_files:
            base["code_files"] = list(file_dict.values())
        return base
    
    logger.info("Fixing %d file(s): %s", len(file_errors), sorted(file_errors.keys()))
    
    llm = _try_get_llm()
    if llm is None:
        logger.info("LLM unavailable — running deterministic fixes only")
    
    futures: dict = {}
    with ThreadPoolExecutor(max_workers=min(MAX_WORKERS, len(file_errors))) as pool:
        for fn, errs in file_errors.items():
            if fn in file_map:
                futures[pool.submit(_fix_one_file, fn, file_map[fn], errs, llm)] = fn
        
        for future in as_completed(futures):
            try:
                fn, fixed_content, status = future.result()
                file_dict[fn] = {**file_dict[fn], "content": fixed_content}
                if status == "fallback":
                    logger.warning("  [%s] kept original", fn)
            except Exception as e:
                fn = futures[future]
                logger.error("  [%s] fix failed: %s", fn, e)
    
    logger.info("Fixer done: %d file(s) processed, %d stub(s) created",
                len(file_errors), len(new_files))
    
    return {
        "code_files": list(file_dict.values()),
        "retry_count": retry_count + 1,
    }