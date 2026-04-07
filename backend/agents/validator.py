# def validator_node(state):
#     # Check if code_files list is empty or malformed
#     if not state.get("code_files") or len(state["code_files"]) == 0:
#         return {
#             "validation_errors": ["Coder output was empty or malformed. Re-attempting generation with stricter JSON formatting."]
#         }
    
#     # Check for technical errors mentioned in your workflow (Step 6)
#     for file in state["code_files"]:
#         content = file.get("content", "")
#         if "import" not in content and "export" not in content:
#             return {"validation_errors": [f"Invalid React structure in {file['filename']}"]}

            
#     return {"validation_errors": []}

# from backend.state import AgentState
# from typing import List


# def validator_node(state: AgentState):
#     errors: List[str] = []
#     files = state.get("code_files", [])

#     if not files:
#         return {"validation_errors": ["No files were generated"]}

#     for file in files:
#         filename = file.get("filename", "")
#         content = file.get("content", "")

#         # --- Basic structure ---
#         if not filename or not content:
#             errors.append("Each file must have filename and content")
#             continue

#         if "```" in content:
#             errors.append(f"Markdown fences found in {filename}")

#         # --- React validation ONLY for .tsx files ---
#         if filename.endswith(".tsx"):
#             if "export default" not in content and "export const" not in content:
#                 errors.append(f"Invalid React structure in {filename}")

#         # --- Backend sanity ---
#         if filename.endswith(".py"):
#             if "FastAPI" not in content and "APIRouter" not in content:
#                 errors.append(f"Suspicious backend file: {filename}")

#         # --- package.json should NOT be React validated ---
#         if filename.endswith("package.json"):
#             if not content.strip().startswith("{"):
#                 errors.append("Invalid JSON in package.json")

#     return {"validation_errors": errors}


# from backend.state import AgentState
# from typing import List


# def validator_node(state):
#     errors = []

#     for file in state.get("code_files", []):
#         name = file["filename"]
#         content = file["content"]

#         # ❌ Python in JS/TS files
#         if name.endswith((".js", ".ts")):
#             if "FastAPI" in content or "uvicorn" in content:
#                 errors.append(f"Python backend leaked into {name}")

#         # ❌ Backend JS files in frontend
#         if name.startswith("src/") and "express" in content:
#             errors.append(f"Backend code inside frontend: {name}")

#         # ❌ Non-TS backend
#         if name.startswith("backend/") and not name.endswith(".ts") and "package.json" not in name:
#             errors.append(f"Backend must be TypeScript: {name}")

#     return {"validation_errors": errors}

# from backend.state import AgentState
# from typing import List


# def validator_node(state: AgentState):
#     errors: List[str] = []
#     files = state.get("code_files", [])

#     if not files:
#         return {"validation_errors": ["No files were generated"]}

#     for file in files:
#         filename = file.get("filename", "")
#         content = file.get("content", "")

#         # ❌ Python accidentally generated in JS/TS files
#         if filename.endswith((".js", ".ts")):
#             if "FastAPI" in content or "uvicorn" in content or "def " in content:
#                 errors.append(f"Python backend leaked into {filename}")

#         # ❌ Backend JS inside frontend folder
#         if filename.startswith("src/") and "express" in content:
#             errors.append(f"Backend code inside frontend: {filename}")

#         # ❌ Backend must be TypeScript
#         if filename.startswith("backend/"):
#             if not filename.endswith(".ts") and "package.json" not in filename:
#                 errors.append(f"Backend must be TypeScript: {filename}")

#     return {"validation_errors": errors}

# from backend.state import AgentState
# from typing import List

# CODE_EXTENSIONS = (".js", ".ts", ".tsx")


# def validator_node(state: AgentState):
#     errors: List[str] = []
#     files = state.get("code_files", [])

#     if not files:
#         return {"validation_errors": ["No files were generated"]}

#     for file in files:
#         filename = file.get("filename", "")
#         content = file.get("content", "")

#         #  Skip config / meta files
#         if filename.endswith(("package.json", ".json", ".config.js", ".config.ts")):
#             continue

#         # Python in JS/TS files
#         if filename.endswith(CODE_EXTENSIONS):
#             if "FastAPI" in content or "uvicorn" in content or "def " in content:
#                 errors.append(f"Python backend leaked into {filename}")

#         # ❌ Backend code inside frontend
#         if filename.startswith("src/") and "express(" in content:
#             errors.append(f"Backend code inside frontend: {filename}")

#         # ❌ Backend must be TypeScript
#         if filename.startswith("backend/") and not filename.endswith(".ts"):
#             errors.append(f"Backend must be TypeScript: {filename}")

#     return {"validation_errors": errors}


# latest version

# from backend.state import AgentState
# from typing import List

# CODE_EXTENSIONS = (".js", ".ts", ".tsx")

# def validator_node(state: AgentState):
#     errors: List[str] = []
#     files = state.get("code_files", [])

#     if not files:
#         return {"validation_errors": ["No files were generated"]}

#     filenames = [f.get("filename", "") for f in files]

#     # ===============================
#     # ✅ REQUIRED FRONTEND FILES
#     # ===============================
#     required_frontend_files = [
#         "frontend/package.json",
#         "frontend/vite.config.js",
#         "frontend/tailwind.config.js",
#         "frontend/postcss.config.js",
#         "frontend/index.html",
#         "frontend/src/main.jsx",
#         "frontend/src/App.jsx",
#         "frontend/src/index.css"
#     ]

#     for rf in required_frontend_files:
#         if rf not in filenames:
#             errors.append(f"Missing required frontend file: {rf}")

#     # ===============================
#     # ✅ REQUIRED BACKEND FILES
#     # ===============================
#     required_backend_files = [
#         "backend/package.json",
#         "backend/tsconfig.json",
#         "backend/src/server.ts"
#     ]

#     for rb in required_backend_files:
#         if rb not in filenames:
#             errors.append(f"Missing required backend file: {rb}")

#     # ===============================
#     # 🔍 CONTENT VALIDATION
#     # ===============================
#     for file in files:
#         filename = file.get("filename", "")
#         content = file.get("content", "")

#         # Skip configs
#         if filename.endswith(("package.json", ".json", ".config.js", ".config.ts")):
#             continue

#         # ❌ Python leakage
#         if filename.endswith(CODE_EXTENSIONS):
#             if "FastAPI" in content or "uvicorn" in content or "def " in content:
#                 errors.append(f"Python code leaked into: {filename}")

#         # ❌ Backend code inside frontend
#         if filename.startswith("frontend/") and "express(" in content:
#             errors.append(f"Backend code found inside frontend: {filename}")

#         # ❌ Backend must be TypeScript only
#         if filename.startswith("backend/"):
#             if not filename.endswith(".ts") and not filename.endswith("package.json") and not filename.endswith("tsconfig.json"):
#                 errors.append(f"Backend file must be TypeScript: {filename}")

#     # ===============================
#     # ✅ RETURN RESULT
#     # ===============================
#     if errors:
#         print("❌ VALIDATION ERRORS:", errors)

#     return {"validation_errors": errors}



# from backend.state import AgentState
# from typing import List

# CODE_EXTENSIONS = (".js", ".ts", ".tsx", ".jsx")


# def validator_node(state: AgentState):
#     errors: List[str] = []
#     files = state.get("code_files", [])

#     if not files:
#         return {"validation_errors": ["No files were generated"]}

#     filenames = [f.get("filename", "") for f in files]
#     file_map = {f.get("filename"): f.get("content", "") for f in files}

#     # =====================================================
#     # ✅ FRONTEND STRUCTURE VALIDATION
#     # =====================================================

#     required_frontend = [
#         "frontend/package.json",
#         "frontend/vite.config.js",
#         "frontend/tailwind.config.js",
#         "frontend/postcss.config.js",
#         "frontend/index.html",
#         "frontend/src/main.jsx",
#         "frontend/src/App.jsx",
#         "frontend/src/index.css"
#     ]

#     for rf in required_frontend:
#         if rf not in filenames:
#             errors.append(f"Missing frontend file: {rf}")

#     # =====================================================
#     # ✅ BACKEND STRUCTURE VALIDATION
#     # =====================================================

#     required_backend = [
#         "backend/package.json",
#         "backend/tsconfig.json",
#         "backend/src/server.ts"
#     ]

#     for rb in required_backend:
#         if rb not in filenames:
#             errors.append(f"Missing backend file: {rb}")

#     # =====================================================
#     # ✅ PAGE VALIDATION
#     # =====================================================

#     expected_pages = state.get("site_plan", {}).get("pages", [])

#     for page in expected_pages:
#         page_file = f"frontend/src/pages/{page}.jsx"
#         if page_file not in filenames:
#             errors.append(f"Missing page component: {page_file}")

#     # =====================================================
#     # 🔍 CONTENT VALIDATION
#     # =====================================================

#     for filename, content in file_map.items():

#         # Skip configs
#         if filename.endswith(("package.json", ".json", ".config.js", ".config.ts")):
#             continue

#         # ❌ Python leakage
#         if filename.endswith(CODE_EXTENSIONS):
#             if any(word in content for word in ["FastAPI", "uvicorn", "def "]):
#                 errors.append(f"Python code leaked into: {filename}")

#         # ❌ Backend code inside frontend
#         if filename.startswith("frontend/") and "express(" in content:
#             errors.append(f"Backend code found inside frontend: {filename}")

#         # ❌ Backend must be TypeScript
#         if filename.startswith("backend/"):
#             if not (
#                 filename.endswith(".ts")
#                 or filename.endswith("package.json")
#                 or filename.endswith("tsconfig.json")
#             ):
#                 errors.append(f"Backend must be TypeScript: {filename}")

#     # =====================================================
#     # 🔍 ROUTER CHECK
#     # =====================================================

#     app_file = file_map.get("frontend/src/App.jsx", "")
#     if app_file:
#         if "Routes" not in app_file or "Route" not in app_file:
#             errors.append("App.jsx missing React Router configuration")

#     # =====================================================
#     # 🔍 TAILWIND CHECK
#     # =====================================================

#     css_file = file_map.get("frontend/src/index.css", "")
#     if css_file:
#         if "@tailwind base;" not in css_file:
#             errors.append("Tailwind base directive missing")

#     # =====================================================
#     # FINAL RESULT
#     # =====================================================

#     if errors:
#         print("❌ VALIDATION ERRORS:")
#         for e in errors:
#             print(" -", e)

#     else:
#         print("✅ Validation passed")

    # return {"validation_errors": errors}

# """
# validator.py  -  Static analysis and structural validation.

# Fixes in this version:
# 1. Duplicate filename deduplication - last writer wins (pages override scaffold stubs)
# 2. JSX root heuristic tightened - no longer false-fires on comments/lazy imports
# 3. Duplicates are silently deduped, not warned about
# 4. Returns deduped code_files back into state
# """

# from __future__ import annotations

# import json
# import logging
# import re
# from dataclasses import dataclass, field
# from typing import Dict, List

# from backend.state import AgentState

# logger = logging.getLogger(__name__)


# # ==============================================================
# # Data types
# # ==============================================================

# @dataclass
# class Finding:
#     severity: str   # "error" | "warning"
#     category: str
#     message:  str
#     filename: str = ""

#     def __str__(self) -> str:
#         tag = "ERROR" if self.severity == "error" else "WARN "
#         loc = f" [{self.filename}]" if self.filename else ""
#         return f"[{tag}] {self.category.upper()}{loc}: {self.message}"


# @dataclass
# class ValidationResult:
#     findings:  List[Finding] = field(default_factory=list)
#     file_map:  Dict[str, str] = field(default_factory=dict)

#     @property
#     def errors(self) -> List[str]:
#         return [str(f) for f in self.findings if f.severity == "error"]

#     @property
#     def warnings(self) -> List[str]:
#         return [str(f) for f in self.findings if f.severity == "warning"]

#     def add(self, severity: str, category: str, message: str, filename: str = "") -> None:
#         self.findings.append(Finding(severity, category, message, filename))

#     def ok(self) -> bool:
#         return not self.errors


# # ==============================================================
# # Constants
# # ==============================================================

# CODE_EXTENSIONS = (".js", ".ts", ".jsx", ".tsx")

# REQUIRED_FRONTEND = [
#     ("frontend/package.json",),
#     ("frontend/vite.config.js",    "frontend/vite.config.ts"),
#     ("frontend/tailwind.config.js","frontend/tailwind.config.ts"),
#     ("frontend/postcss.config.js", "frontend/postcss.config.ts"),
#     ("frontend/index.html",),
#     ("frontend/src/main.jsx",      "frontend/src/main.tsx"),
#     ("frontend/src/App.jsx",       "frontend/src/App.tsx"),
#     ("frontend/src/index.css",),
# ]

# REQUIRED_BACKEND = [
#     ("backend/package.json",),
#     ("backend/tsconfig.json",),
#     ("backend/src/server.ts",),
# ]

# PYTHON_LEAKAGE_TOKENS = [
#     "from fastapi", "import uvicorn", "def ", "@app.get", "@app.post",
#     "BaseModel", "print(", "import flask",
# ]

# PLACEHOLDER_PATTERNS = [
#     re.compile(r"\bTODO\b"),
#     re.compile(r"\bFIXME\b"),
#     re.compile(r"Lorem ipsum", re.IGNORECASE),
#     re.compile(r"placeholder text", re.IGNORECASE),
#     re.compile(r'className="[^"]*REPLACE[^"]*"'),
# ]


# # ==============================================================
# # Deduplication — last writer wins
# # ==============================================================

# def _dedup_files(files: List[dict]) -> List[dict]:
#     """
#     When scaffold AND pages both wrote the same filename,
#     keep the LAST occurrence (pages node runs after scaffold, so its
#     version is more specific and should win).
#     """
#     seen: Dict[str, int] = {}
#     for i, f in enumerate(files):
#         name = f.get("filename", "")
#         if name:
#             seen[name] = i   # overwrite — last wins
#     deduped = [files[i] for i in sorted(seen.values())]
#     removed = len(files) - len(deduped)
#     if removed:
#         logger.info("  [dedup] removed %d duplicate file(s) — kept last writer per filename", removed)
#     return deduped


# # ==============================================================
# # Individual validators
# # ==============================================================

# def _check_structure(result: ValidationResult, filenames: List[str]) -> None:
#     for variants in REQUIRED_FRONTEND:
#         if not any(v in filenames for v in variants):
#             result.add("error", "structure", f"Missing required file: {variants[0]}")
#     for variants in REQUIRED_BACKEND:
#         if not any(v in filenames for v in variants):
#             result.add("error", "structure", f"Missing required backend file: {variants[0]}")


# def _check_empty_files(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     for filename, content in file_map.items():
#         if filename.endswith(CODE_EXTENSIONS) and not content.strip():
#             result.add("error", "content", "File is empty", filename)


# def _check_pages(result: ValidationResult, filenames: List[str], expected_pages: List[str]) -> None:
#     for page in expected_pages:
#         if (f"frontend/src/pages/{page}.jsx" not in filenames and
#                 f"frontend/src/pages/{page}.tsx" not in filenames):
#             result.add("error", "page", f"Missing page component for '{page}'")


# def _check_content(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     for filename, content in file_map.items():
#         if not filename.endswith(CODE_EXTENSIONS):
#             continue

#         # Python leakage into frontend
#         if filename.startswith("frontend/"):
#             for token in PYTHON_LEAKAGE_TOKENS:
#                 if token in content:
#                     result.add("error", "content",
#                                f"Python token '{token}' found in frontend file", filename)
#                     break

#         # Express in frontend
#         if filename.startswith("frontend/") and "express(" in content:
#             result.add("error", "content", "Backend Express code found in frontend file", filename)

#         # Backend must be .ts
#         if filename.startswith("backend/src/") and not filename.endswith(".ts"):
#             result.add("error", "content", "Backend source file must be TypeScript (.ts)", filename)

#         # Placeholder detection
#         for pat in PLACEHOLDER_PATTERNS:
#             if pat.search(content):
#                 result.add("warning", "content", "Placeholder pattern detected", filename)
#                 break

#         # JSX root check — only for page files (not components/hooks/utils)
#         if filename.endswith((".jsx", ".tsx")) and "/pages/" in filename:
#             _check_jsx_root(result, filename, content)


# def _check_jsx_root(result: ValidationResult, filename: str, content: str) -> None:
#     """
#     Tightened: only warn if a return() block has two immediate sibling
#     root elements with NO wrapping Fragment (<> or <React.Fragment>).

#     Explicitly ignores:
#     - Files that already use <> or <React.Fragment>
#     - Lazy.load / React.lazy calls
#     - TypeScript generic syntax
#     """
#     # Fragment present? File is fine.
#     if "<>" in content or "<React.Fragment" in content:
#         return

#     # Only look at content between `return (` and the matching `)`
#     # Use a simple scan rather than regex DOTALL to avoid false positives
#     in_return = False
#     depth = 0
#     return_block_lines: List[str] = []

#     for line in content.split("\n"):
#         stripped = line.strip()
#         if not in_return:
#             if re.match(r"return\s*\(", stripped):
#                 in_return = True
#                 depth = stripped.count("(") - stripped.count(")")
#                 continue
#         else:
#             depth += stripped.count("(") - stripped.count(")")
#             if depth <= 0:
#                 break
#             return_block_lines.append(line)

#     if not return_block_lines:
#         return

#     # Count top-level JSX opening tags (indent <= 4 spaces from left margin)
#     # A real root tag looks like: "    <div" or "  <section"
#     # NOT: "      <span" (deeply nested), NOT: "</div>", NOT: "{...}"
#     root_tags_found = 0
#     base_indent: int | None = None

#     for line in return_block_lines:
#         if not line.strip():
#             continue
#         stripped = line.strip()

#         # Skip closing tags, fragments, JS expressions, comments
#         if (stripped.startswith("</") or stripped.startswith("{") or
#                 stripped.startswith("//") or stripped.startswith("/*") or
#                 stripped.startswith("*") or not stripped.startswith("<")):
#             continue

#         # Skip self-closing tags
#         if stripped.endswith("/>"):
#             continue

#         # Measure indent
#         indent = len(line) - len(line.lstrip())

#         if base_indent is None:
#             base_indent = indent
#             root_tags_found = 1
#         elif indent == base_indent:
#             root_tags_found += 1

#         if root_tags_found >= 2:
#             result.add("warning", "content",
#                        "Possible missing JSX root wrapper (multiple sibling elements)",
#                        filename)
#             return


# def _check_router(result: ValidationResult, file_map: Dict[str, str], expected_pages: List[str]) -> None:
#     app_content = (
#         file_map.get("frontend/src/App.tsx") or
#         file_map.get("frontend/src/App.jsx") or ""
#     )
#     if not app_content:
#         result.add("error", "router", "App entry file (App.tsx / App.jsx) not found")
#         return
#     if "Routes" not in app_content or "<Route" not in app_content:
#         result.add("error", "router", "App file missing React Router <Routes>/<Route> setup")
#     if "BrowserRouter" not in app_content and "RouterProvider" not in app_content:
#         result.add("error", "router", "App file missing BrowserRouter or RouterProvider")
#     for page in expected_pages:
#         if page not in app_content:
#             result.add("warning", "router", f"Page '{page}' not referenced in App file")


# def _check_tailwind(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     css = file_map.get("frontend/src/index.css", "")
#     if not css:
#         result.add("error", "style", "frontend/src/index.css not found")
#         return
#     for directive in ("@tailwind base", "@tailwind components", "@tailwind utilities"):
#         if directive not in css:
#             result.add("error", "style", f"Missing Tailwind directive: '{directive};'")


# def _check_package_json(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     raw = file_map.get("frontend/package.json", "")
#     if not raw:
#         return
#     try:
#         pkg  = json.loads(raw)
#         deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
#         for req in ("react", "react-dom", "vite"):
#             if req not in deps:
#                 result.add("error", "structure",
#                            f"frontend/package.json missing dependency: '{req}'")
#     except json.JSONDecodeError:
#         result.add("error", "structure", "frontend/package.json is not valid JSON")


# # ==============================================================
# # Node
# # ==============================================================

# def validator_node(state: AgentState) -> dict:
#     raw_files: List[dict] = state.get("code_files", [])

#     if not raw_files:
#         logger.error("No files were generated")
#         return {
#             "code_files":          [],
#             "validation_errors":   ["No files were generated"],
#             "validation_warnings": [],
#         }

#     # ---- DEDUP FIRST — eliminates all the duplicate warnings ----
#     files     = _dedup_files(raw_files)
#     filenames = [f.get("filename", "") for f in files]
#     file_map  = {f.get("filename", ""): f.get("content", "") for f in files}
#     expected_pages = state.get("site_plan", {}).get("pages", [])

#     result = ValidationResult(file_map=file_map)

#     _check_structure(result, filenames)
#     _check_empty_files(result, file_map)
#     _check_pages(result, filenames, expected_pages)
#     _check_content(result, file_map)
#     _check_router(result, file_map, expected_pages)
#     _check_tailwind(result, file_map)
#     _check_package_json(result, file_map)

#     # --- report ---
#     if result.errors:
#         logger.error("Validation FAILED: %d error(s), %d warning(s)",
#                      len(result.errors), len(result.warnings))
#         for e in result.errors:
#             logger.error("  %s", e)
#     else:
#         logger.info("Validation PASSED with %d warning(s)", len(result.warnings))

#     for w in result.warnings:
#         logger.warning("  %s", w)

#     return {
#         "code_files":          files,          # <-- deduped, clean list for writer/fixer
#         "validation_errors":   result.errors,
#         "validation_warnings": result.warnings,
#     }


# """
# validator.py  -  Static analysis + JSX structural validation.

# Root causes fixed in this version (based on production log analysis):

# 1. FALSE POSITIVES on scaffold components (Button, Card, Spinner, ErrorBoundary)
#    OLD: regex `<([a-zA-Z][a-zA-Z0-9]*)([^>]*[^/])>` has a greedy bug:
#         for `<main>` it captures tag='mai' not 'main', missing the tag entirely;
#         also PascalCase components like <BrowserRouter> were being tracked
#    NEW: uses two clean separate patterns — OPEN_RE and CLOSE_RE
#         only checks lowercase HTML tags (div, span, h1, svg, etc.)
#         skips PascalCase React components entirely

# 2. FALSE POSITIVES on multi-line JSX tags:
#    OLD: <button\n  disabled\n> was never matched as an open tag
#         so </button> later appeared as "unexpected close"
#    NEW: separate scan for `<tagname` at line start (no > on same line)
#         with lookahead to confirm it closes with > (not />) later

# 3. CORRECT DETECTION on genuinely broken LLM pages:
#    <h1>Title\n</div> → correctly reports "unexpected </div>, expected </h1>"
#    Missing </table> → correctly reports "unclosed <table>"
# """

# from __future__ import annotations

# import json
# import logging
# import re
# from dataclasses import dataclass, field
# from typing import Dict, List, Optional, Tuple

# from backend.state import AgentState

# logger = logging.getLogger(__name__)


# # ──────────────────────────────────────────────────────────────
# # Data types
# # ──────────────────────────────────────────────────────────────

# @dataclass
# class Finding:
#     severity: str
#     category: str
#     message:  str
#     filename: str = ""

#     def __str__(self) -> str:
#         tag = "ERROR" if self.severity == "error" else "WARN "
#         loc = f" [{self.filename}]" if self.filename else " [unknown]"
#         return f"[{tag}] {self.category.upper()}{loc}: {self.message}"


# @dataclass
# class ValidationResult:
#     findings:  List[Finding] = field(default_factory=list)
#     file_map:  Dict[str, str] = field(default_factory=dict)

#     @property
#     def errors(self) -> List[str]:
#         return [str(f) for f in self.findings if f.severity == "error"]

#     @property
#     def warnings(self) -> List[str]:
#         return [str(f) for f in self.findings if f.severity == "warning"]

#     def add(self, severity: str, category: str, message: str, filename: str = "") -> None:
#         self.findings.append(Finding(severity, category, message, filename))

#     def ok(self) -> bool:
#         return not self.errors


# # ──────────────────────────────────────────────────────────────
# # Constants
# # ──────────────────────────────────────────────────────────────

# CODE_EXTENSIONS = (".js", ".ts", ".jsx", ".tsx")

# REQUIRED_FRONTEND = [
#     ("frontend/package.json",),
#     ("frontend/vite.config.js",     "frontend/vite.config.ts"),
#     ("frontend/tailwind.config.js", "frontend/tailwind.config.ts"),
#     ("frontend/postcss.config.js",  "frontend/postcss.config.ts"),
#     ("frontend/index.html",),
#     ("frontend/src/main.jsx",       "frontend/src/main.tsx"),
#     ("frontend/src/App.jsx",        "frontend/src/App.tsx"),
#     ("frontend/src/index.css",),
# ]

# BACKEND_CORE = [
#     ("backend/package.json",),
#     ("backend/src/server.ts",),
# ]

# PYTHON_LEAKAGE_TOKENS = [
#     "from fastapi", "import uvicorn", "def ", "@app.get", "@app.post",
#     "BaseModel", "import flask",
# ]

# # ── JSX tag patterns ──────────────────────────────────────────
# # Only known lowercase HTML tags — completely ignores PascalCase components
# # (BrowserRouter, Link, Route, Navbar etc.) to avoid false positives.
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

# # Opening tag: <tagname> or <tagname attrs> — NOT self-closing
# # Uses (?:\s[^>]*[^/])? to allow zero or more attrs but require last char before > is not /
# _OPEN_TAG_RE  = re.compile(r"<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*[^/])?>")
# # Closing tag: </tagname>
# _CLOSE_TAG_RE = re.compile(r"</([a-zA-Z][a-zA-Z0-9]*)>")
# # Self-closing: <tagname ... />  (must end with />, not just >)
# _SELF_CLOSE_RE = re.compile(r"<[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?/\s*>")

# # Hooks that require a React import
# _HOOKS_RE = re.compile(
#     r"\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer)\s*\("
# )

# # TypeScript leakage in .jsx files
# _TS_LEAKAGE_RE = re.compile(
#     r"interface\s+\w+\s*\{"
#     r"|type\s+\w+\s*=\s*[{([]"
#     r"|import type\s+"
#     r"|useState<[A-Z]"
# )


# # ──────────────────────────────────────────────────────────────
# # Helpers
# # ──────────────────────────────────────────────────────────────

# def _strip_strings(line: str) -> str:
#     """Remove string literals so tags inside strings aren't counted."""
#     line = re.sub(r'"(?:[^"\\]|\\.)*"', '""', line)
#     line = re.sub(r"'(?:[^'\\]|\\.)*'", "''", line)
#     line = re.sub(r"`(?:[^`\\]|\\.)*`", "``", line)
#     return line


# def _is_multiline_open(line: str, lines: List[str], line_idx: int) -> Optional[str]:
#     """
#     Detect `<tagname` at the start of a JSX element that spans multiple lines,
#     e.g.:
#         <button
#           disabled={loading}
#           className="..."
#         >
#     Returns the tag name if this is a multi-line opening tag, else None.
#     """
#     clean = _strip_strings(line).strip()
#     # Must start with < followed by a lowercase letter (HTML tag, not PascalCase)
#     m = re.match(r"<([a-z][a-z0-9]*)(?:\s|$)", clean)
#     if not m:
#         return None
#     tag_name = m.group(1)
#     if tag_name not in HTML_TAGS or tag_name in VOID_ELEMENTS:
#         return None
#     # The opening line must NOT contain a closing > (that's handled by single-line pattern)
#     if ">" in clean:
#         return None
#     # Look ahead up to 15 lines for the closing >
#     for j in range(line_idx + 1, min(line_idx + 15, len(lines))):
#         peek = _strip_strings(lines[j]).strip()
#         if "/>" in peek:
#             return None   # self-closing
#         if re.search(r"(?<!/)\s*>", peek):
#             return tag_name  # found closing > (not self-close)
#     return None


# # ──────────────────────────────────────────────────────────────
# # Deduplication
# # ──────────────────────────────────────────────────────────────

# def _dedup_files(files: List[dict]) -> List[dict]:
#     seen: Dict[str, int] = {}
#     for i, f in enumerate(files):
#         name = f.get("filename", "")
#         if name:
#             seen[name] = i
#     deduped = [files[i] for i in sorted(seen.values())]
#     removed = len(files) - len(deduped)
#     if removed:
#         logger.info("  [dedup] removed %d duplicate(s)", removed)
#     return deduped


# # ──────────────────────────────────────────────────────────────
# # JSX structural checker
# # ──────────────────────────────────────────────────────────────

# def _check_tag_balance(code: str) -> List[Tuple[int, str]]:
#     """
#     Stack-based JSX tag balance checker.

#     CRITICAL FIX: processes opens and closes in LEFT-TO-RIGHT document order
#     per line, not two separate passes. The old two-pass approach caused
#     <h1>Title</h1> to report "unexpected </h1>" because the close was
#     processed before the open was registered.

#     - Only tracks known lowercase HTML tags (HTML_TAGS set)
#     - Skips PascalCase React components entirely
#     - Handles multi-line opening tags like <button\\n  attrs\\n>
#     - Skips implicit-close elements (option, dt, dd) to avoid false positives
#     Returns list of (line_number, error_message).
#     """
#     # Elements that implicitly close when a sibling opens — skip tracking them
#     _IMPLICIT = frozenset({"option", "optgroup", "dt", "dd", "rp", "rt", "colgroup"})

#     issues: List[Tuple[int, str]] = []
#     tag_stack: List[Tuple[str, int]] = []
#     lines = code.split("\n")

#     for i, line in enumerate(lines, 1):
#         stripped = line.strip()
#         if stripped.startswith("//") or stripped.startswith("*") or stripped.startswith("/*"):
#             continue

#         clean = _strip_strings(line)

#         # Build blank-copy with self-closing and void tags removed (for open detection)
#         no_self = _SELF_CLOSE_RE.sub(lambda m: " " * len(m.group(0)), clean)
#         for void in VOID_ELEMENTS:
#             no_self = re.sub(
#                 rf"<{void}(?:\s[^>]*)?>",
#                 lambda m: " " * len(m.group(0)),
#                 no_self,
#             )

#         # Collect all events (open/close) in document order on this line
#         events: List[Tuple[int, str, str]] = []

#         for m in _OPEN_TAG_RE.finditer(no_self):
#             tag = m.group(1).lower()
#             if tag not in HTML_TAGS or tag in VOID_ELEMENTS or tag in _IMPLICIT:
#                 continue
#             before = no_self[: m.start()]
#             if re.search(r"[A-Za-z0-9_]\s*$", before):
#                 continue   # TypeScript generic — skip
#             events.append((m.start(), "open", tag, m.group(1)))

#         for m in _CLOSE_TAG_RE.finditer(clean):
#             tag = m.group(1).lower()
#             if tag not in HTML_TAGS or tag in _IMPLICIT:
#                 continue
#             events.append((m.start(), "close", tag, m.group(1)))

#         events.sort(key=lambda e: e[0])

#         # Process in document order
#         for _, etype, tag, raw in events:
#             if etype == "open":
#                 tag_stack.append((tag, i))
#             else:  # close
#                 if tag_stack and tag_stack[-1][0] == tag:
#                     tag_stack.pop()
#                 else:
#                     expected = tag_stack[-1][0] if tag_stack else None
#                     msg = (
#                         f"Unexpected closing tag </{raw}> — expected </{expected}>"
#                         if expected
#                         else f"Unexpected closing tag </{raw}> with no matching open tag"
#                     )
#                     issues.append((i, msg))

#         # Multi-line opening tag: <tagname at end of line, > on a later line
#         ml_tag = _is_multiline_open(line, lines, i - 1)
#         if ml_tag:
#             tag_stack.append((ml_tag, i))

#     # Unclosed tags
#     for tag_name, lineno in tag_stack:
#         issues.append((lineno, f"Unclosed tag <{tag_name}> (opened on line {lineno})"))

#     return issues


# def _check_paren_balance(code: str) -> List[Tuple[int, str]]:
#     """Check parenthesis balance — catches unterminated return() blocks."""
#     issues: List[Tuple[int, str]] = []
#     depth = 0
#     for i, line in enumerate(code.split("\n"), 1):
#         stripped = line.strip()
#         if stripped.startswith("//") or stripped.startswith("*"):
#             continue
#         clean = _strip_strings(line)
#         clean = re.sub(r"=\{[^}]*\}", "", clean)  # remove JSX attr expressions
#         for ch in clean:
#             if ch == "(":
#                 depth += 1
#             elif ch == ")":
#                 depth -= 1
#                 if depth < 0:
#                     issues.append((i, "Unexpected closing parenthesis ')'"))
#                     depth = 0
#     if depth > 0:
#         issues.append((0, f"Unclosed parenthesis: {depth} '(' without closing ')'"))
#     return issues


# def _check_jsx_structure(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     for filename, content in file_map.items():
#         if not filename.endswith((".jsx", ".tsx")):
#             continue
#         if not content.strip():
#             continue

#         # Tag balance
#         for lineno, msg in _check_tag_balance(content):
#             result.add("error", "jsx_syntax",
#                        f"JSX tag imbalance (line {lineno}): {msg}" if lineno else f"JSX: {msg}",
#                        filename)

#         # Paren balance
#         for lineno, msg in _check_paren_balance(content):
#             result.add("error", "jsx_syntax",
#                        f"Parenthesis imbalance (line {lineno}): {msg}" if lineno else f"JSX: {msg}",
#                        filename)

#         # export default required for page files
#         if "/pages/" in filename and "export default" not in content:
#             result.add("error", "jsx_syntax",
#                        "Page component missing 'export default'", filename)

#         # React hooks need import
#         hooks = set(_HOOKS_RE.findall(content))
#         if hooks:
#             has_react = (
#                 "import React" in content
#                 or "from 'react'" in content
#                 or 'from "react"' in content
#             )
#             if not has_react:
#                 result.add("error", "jsx_syntax",
#                            f"React hooks used ({', '.join(sorted(hooks))}) but 'react' not imported",
#                            filename)

#         # TypeScript leakage in .jsx
#         if filename.endswith(".jsx") and _TS_LEAKAGE_RE.search(content):
#             result.add("warning", "jsx_syntax",
#                        "TypeScript syntax in .jsx file — may break Sandpack Babel",
#                        filename)


# # ──────────────────────────────────────────────────────────────
# # Structural checks
# # ──────────────────────────────────────────────────────────────

# def _check_structure(result: ValidationResult, filenames: List[str]) -> None:
#     for variants in REQUIRED_FRONTEND:
#         if not any(v in filenames for v in variants):
#             result.add("error", "structure",
#                        f"Missing required file: {variants[0]}", variants[0])


# def _check_backend_optional(result: ValidationResult, filenames: List[str]) -> None:
#     if not any(fn.startswith("backend/") for fn in filenames):
#         return
#     for variants in BACKEND_CORE:
#         if not any(v in filenames for v in variants):
#             result.add("warning", "structure",
#                        f"Backend directory found but missing: {variants[0]}", variants[0])


# def _check_empty_files(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     for filename, content in file_map.items():
#         if filename.endswith(CODE_EXTENSIONS) and not content.strip():
#             result.add("error", "content", "File is empty", filename)


# def _check_pages(result: ValidationResult, filenames: List[str],
#                  expected_pages: List[str]) -> None:
#     for page in expected_pages:
#         if (f"frontend/src/pages/{page}.jsx" not in filenames and
#                 f"frontend/src/pages/{page}.tsx" not in filenames):
#             result.add("error", "page",
#                        f"Missing page component for '{page}'",
#                        f"frontend/src/pages/{page}.tsx")


# def _check_content(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     for filename, content in file_map.items():
#         if not filename.endswith(CODE_EXTENSIONS):
#             continue
#         if filename.startswith("frontend/"):
#             for token in PYTHON_LEAKAGE_TOKENS:
#                 if token in content:
#                     result.add("error", "content",
#                                f"Python token '{token}' in frontend file", filename)
#                     break
#         if filename.startswith("frontend/") and "express(" in content:
#             result.add("error", "content",
#                        "Backend Express code in frontend file", filename)
#         if (filename.startswith("backend/src/") and
#                 not filename.endswith(".ts") and not filename.endswith(".d.ts")):
#             result.add("error", "content",
#                        "Backend source must be TypeScript (.ts)", filename)


# def _check_router(result: ValidationResult, file_map: Dict[str, str],
#                   expected_pages: List[str]) -> None:
#     app = (file_map.get("frontend/src/App.tsx") or
#            file_map.get("frontend/src/App.jsx") or "")
#     app_file = ("frontend/src/App.tsx" if "frontend/src/App.tsx" in file_map
#                 else "frontend/src/App.jsx")
#     if not app:
#         result.add("error", "router",
#                    "App entry file not found", "frontend/src/App.tsx")
#         return
#     if "Routes" not in app or "<Route" not in app:
#         result.add("error", "router",
#                    "App missing React Router <Routes>/<Route> setup", app_file)
#     if "BrowserRouter" not in app and "RouterProvider" not in app:
#         result.add("error", "router",
#                    "App missing BrowserRouter or RouterProvider", app_file)
#     for page in expected_pages:
#         if page not in app:
#             result.add("warning", "router",
#                        f"Page '{page}' not referenced in App file", app_file)


# def _check_tailwind(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     css = file_map.get("frontend/src/index.css", "")
#     if not css:
#         result.add("error", "style",
#                    "frontend/src/index.css not found", "frontend/src/index.css")
#         return
#     if css.strip() and len(css.strip()) > 20 and "@tailwind base" not in css:
#         result.add("warning", "style",
#                    "Tailwind directives missing (OK if using CDN mode)",
#                    "frontend/src/index.css")


# def _check_package_json(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     raw = file_map.get("frontend/package.json", "")
#     if not raw:
#         return
#     try:
#         pkg  = json.loads(raw)
#         deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
#         for req in ("react", "react-dom", "vite"):
#             if req not in deps:
#                 result.add("error", "structure",
#                            f"frontend/package.json missing: '{req}'",
#                            "frontend/package.json")
#     except json.JSONDecodeError:
#         result.add("error", "structure",
#                    "frontend/package.json invalid JSON", "frontend/package.json")


# # ──────────────────────────────────────────────────────────────
# # Node
# # ──────────────────────────────────────────────────────────────

# def validator_node(state: AgentState) -> dict:
#     raw_files: List[dict] = state.get("code_files", [])

#     if not raw_files:
#         logger.error("No files generated")
#         return {
#             "code_files":          [],
#             "validation_errors":   ["[ERROR] STRUCTURE [unknown]: No files were generated"],
#             "validation_warnings": [],
#         }

#     files          = _dedup_files(raw_files)
#     filenames      = [f.get("filename", "") for f in files]
#     file_map       = {f.get("filename", ""): f.get("content", "") for f in files}
#     expected_pages = state.get("site_plan", {}).get("pages", [])

#     result = ValidationResult(file_map=file_map)

#     _check_structure(result, filenames)
#     _check_backend_optional(result, filenames)
#     _check_empty_files(result, file_map)
#     _check_pages(result, filenames, expected_pages)
#     _check_content(result, file_map)
#     _check_jsx_structure(result, file_map)
#     _check_router(result, file_map, expected_pages)
#     _check_tailwind(result, file_map)
#     _check_package_json(result, file_map)

#     if result.errors:
#         logger.error("Validation FAILED: %d error(s), %d warning(s)",
#                      len(result.errors), len(result.warnings))
#         for e in result.errors:
#             logger.error("  %s", e)
#     else:
#         logger.info("Validation PASSED with %d warning(s)", len(result.warnings))

#     for w in result.warnings:
#         logger.warning("  %s", w)

#     return {
#         "code_files":          files,
#         "validation_errors":   result.errors,
#         "validation_warnings": result.warnings,
#     }


# """
# validator.py  -  Static analysis + JSX structural validation.
# """

# from __future__ import annotations

# import json
# import logging
# import re
# from dataclasses import dataclass, field
# from typing import Dict, List, Optional, Tuple

# from backend.state import AgentState

# logger = logging.getLogger(__name__)


# # ──────────────────────────────────────────────────────────────
# # Data types
# # ──────────────────────────────────────────────────────────────

# @dataclass
# class Finding:
#     severity: str
#     category: str
#     message: str
#     filename: str = ""

#     def __str__(self) -> str:
#         tag = "ERROR" if self.severity == "error" else "WARN "
#         loc = f" [{self.filename}]" if self.filename else " [unknown]"
#         return f"[{tag}] {self.category.upper()}{loc}: {self.message}"


# @dataclass
# class ValidationResult:
#     findings: List[Finding] = field(default_factory=list)
#     file_map: Dict[str, str] = field(default_factory=dict)

#     @property
#     def errors(self) -> List[str]:
#         return [str(f) for f in self.findings if f.severity == "error"]

#     @property
#     def warnings(self) -> List[str]:
#         return [str(f) for f in self.findings if f.severity == "warning"]

#     def add(self, severity: str, category: str, message: str, filename: str = "") -> None:
#         self.findings.append(Finding(severity, category, message, filename))

#     def ok(self) -> bool:
#         return not self.errors


# # ──────────────────────────────────────────────────────────────
# # Constants
# # ──────────────────────────────────────────────────────────────

# CODE_EXTENSIONS = (".js", ".ts", ".jsx", ".tsx")

# REQUIRED_FRONTEND = [
#     ("frontend/package.json",),
#     ("frontend/vite.config.ts", "frontend/vite.config.js"),
#     ("frontend/tailwind.config.js", "frontend/tailwind.config.ts"),
#     ("frontend/postcss.config.js", "frontend/postcss.config.ts"),
#     ("frontend/index.html",),
#     ("frontend/src/main.tsx", "frontend/src/main.jsx"),
#     ("frontend/src/App.tsx", "frontend/src/App.jsx"),
#     ("frontend/src/index.css",),
# ]

# PYTHON_LEAKAGE_TOKENS = [
#     "from fastapi", "import uvicorn", "def ", "@app.get", "@app.post",
#     "BaseModel", "import flask",
# ]

# # JSX tag patterns
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

# _HOOKS_RE = re.compile(
#     r"\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer)\s*\("
# )

# _TS_LEAKAGE_RE = re.compile(
#     r"interface\s+\w+\s*\{"
#     r"|type\s+\w+\s*=\s*[{([]"
#     r"|import type\s+"
#     r"|useState<[A-Z]"
# )


# # ──────────────────────────────────────────────────────────────
# # Helpers
# # ──────────────────────────────────────────────────────────────

# def _strip_strings(line: str) -> str:
#     """Remove string literals so tags inside strings aren't counted."""
#     line = re.sub(r'"(?:[^"\\]|\\.)*"', '""', line)
#     line = re.sub(r"'(?:[^'\\]|\\.)*'", "''", line)
#     line = re.sub(r"`(?:[^`\\]|\\.)*`", "``", line)
#     return line


# def _is_multiline_open(line: str, lines: List[str], line_idx: int) -> Optional[str]:
#     """Detect multi-line JSX opening tags."""
#     clean = _strip_strings(line).strip()
#     m = re.match(r"<([a-z][a-z0-9]*)(?:\s|$)", clean)
#     if not m:
#         return None
#     tag_name = m.group(1)
#     if tag_name not in HTML_TAGS or tag_name in VOID_ELEMENTS:
#         return None
#     if ">" in clean:
#         return None
#     for j in range(line_idx + 1, min(line_idx + 15, len(lines))):
#         peek = _strip_strings(lines[j]).strip()
#         if "/>" in peek:
#             return None
#         if re.search(r"(?<!/)\s*>", peek):
#             return tag_name
#     return None


# def _dedup_files(files: List[dict]) -> List[dict]:
#     """Remove duplicate files based on filename."""
#     seen: Dict[str, int] = {}
#     for i, f in enumerate(files):
#         name = f.get("filename", "")
#         if name:
#             seen[name] = i
#     deduped = [files[i] for i in sorted(seen.values())]
#     removed = len(files) - len(deduped)
#     if removed:
#         logger.info("  [dedup] removed %d duplicate(s)", removed)
#     return deduped


# # ──────────────────────────────────────────────────────────────
# # JSX structural checker
# # ──────────────────────────────────────────────────────────────

# def _check_tag_balance(code: str) -> List[Tuple[int, str]]:
#     """Stack-based JSX tag balance checker."""
#     issues: List[Tuple[int, str]] = []
#     tag_stack: List[Tuple[str, int]] = []
#     lines = code.split("\n")

#     for i, line in enumerate(lines, 1):
#         stripped = line.strip()
#         if stripped.startswith("//") or stripped.startswith("*") or stripped.startswith("/*"):
#             continue

#         clean = _strip_strings(line)

#         # Remove self-closing and void tags
#         no_self = _SELF_CLOSE_RE.sub(lambda m: " " * len(m.group(0)), clean)
#         for void in VOID_ELEMENTS:
#             no_self = re.sub(
#                 rf"<{void}(?:\s[^>]*)?>",
#                 lambda m: " " * len(m.group(0)),
#                 no_self,
#             )

#         # Collect events in document order
#         events: List[Tuple[int, str, str]] = []

#         for m in _OPEN_TAG_RE.finditer(no_self):
#             tag = m.group(1).lower()
#             if tag not in HTML_TAGS or tag in VOID_ELEMENTS:
#                 continue
#             before = no_self[: m.start()]
#             if re.search(r"[A-Za-z0-9_]\s*$", before):
#                 continue
#             events.append((m.start(), "open", tag))

#         for m in _CLOSE_TAG_RE.finditer(clean):
#             tag = m.group(1).lower()
#             if tag not in HTML_TAGS:
#                 continue
#             events.append((m.start(), "close", tag))

#         events.sort(key=lambda e: e[0])

#         # Process events
#         for _, etype, tag in events:
#             if etype == "open":
#                 tag_stack.append((tag, i))
#             else:  # close
#                 if tag_stack and tag_stack[-1][0] == tag:
#                     tag_stack.pop()
#                 else:
#                     expected = tag_stack[-1][0] if tag_stack else None
#                     msg = (
#                         f"Unexpected closing tag </{tag}> — expected </{expected}>"
#                         if expected
#                         else f"Unexpected closing tag </{tag}> with no matching open tag"
#                     )
#                     issues.append((i, msg))

#         # Multi-line opening tag
#         ml_tag = _is_multiline_open(line, lines, i - 1)
#         if ml_tag:
#             tag_stack.append((ml_tag, i))

#     # Unclosed tags
#     for tag_name, lineno in tag_stack:
#         issues.append((lineno, f"Unclosed tag <{tag_name}> (opened on line {lineno})"))

#     return issues


# def _check_jsx_structure(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     """Check JSX syntax and structure."""
#     for filename, content in file_map.items():
#         if not filename.endswith((".jsx", ".tsx")):
#             continue
#         if not content.strip():
#             continue

#         # Tag balance
#         for lineno, msg in _check_tag_balance(content):
#             location = f"(line {lineno})" if lineno else ""
#             result.add("error", "jsx_syntax", f"{location}: {msg}", filename)

#         # export default required for page files
#         if "/pages/" in filename and "export default" not in content:
#             result.add("error", "jsx_syntax",
#                        "Page component missing 'export default'", filename)

#         # React hooks need import
#         hooks = set(_HOOKS_RE.findall(content))
#         if hooks:
#             has_react = (
#                 "import React" in content
#                 or "from 'react'" in content
#                 or 'from "react"' in content
#             )
#             if not has_react:
#                 result.add("error", "jsx_syntax",
#                            f"React hooks used ({', '.join(sorted(hooks))}) but 'react' not imported",
#                            filename)

#         # TypeScript leakage in .jsx
#         if filename.endswith(".jsx") and _TS_LEAKAGE_RE.search(content):
#             result.add("warning", "jsx_syntax",
#                        "TypeScript syntax in .jsx file", filename)


# # ──────────────────────────────────────────────────────────────
# # Structural checks
# # ──────────────────────────────────────────────────────────────

# def _check_structure(result: ValidationResult, filenames: List[str]) -> None:
#     """Check for required files."""
#     for variants in REQUIRED_FRONTEND:
#         if not any(v in filenames for v in variants):
#             result.add("error", "structure",
#                        f"Missing required file: {variants[0]}", variants[0])


# def _check_empty_files(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     """Check for empty files."""
#     for filename, content in file_map.items():
#         if filename.endswith(CODE_EXTENSIONS) and not content.strip():
#             result.add("error", "content", "File is empty", filename)


# def _check_pages(result: ValidationResult, filenames: List[str],
#                  expected_pages: List[str]) -> None:
#     """Check that all expected pages exist."""
#     for page in expected_pages:
#         page_name = _to_pascal(page)
#         if (f"frontend/src/pages/{page_name}.jsx" not in filenames and
#                 f"frontend/src/pages/{page_name}.tsx" not in filenames):
#             result.add("error", "page",
#                        f"Missing page component for '{page}'",
#                        f"frontend/src/pages/{page_name}.tsx")


# def _check_content(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     """Check content for common issues."""
#     for filename, content in file_map.items():
#         if not filename.endswith(CODE_EXTENSIONS):
#             continue
            
#         if filename.startswith("frontend/"):
#             for token in PYTHON_LEAKAGE_TOKENS:
#                 if token in content:
#                     result.add("error", "content",
#                                f"Python token '{token}' in frontend file", filename)
#                     break


# def _check_router(result: ValidationResult, file_map: Dict[str, str],
#                   expected_pages: List[str]) -> None:
#     """Check router configuration."""
#     app = (file_map.get("frontend/src/App.tsx") or
#            file_map.get("frontend/src/App.jsx") or "")
#     app_file = ("frontend/src/App.tsx" if "frontend/src/App.tsx" in file_map
#                 else "frontend/src/App.jsx")
    
#     if not app:
#         result.add("error", "router", "App entry file not found", "frontend/src/App.tsx")
#         return
    
#     if "Routes" not in app or "<Route" not in app:
#         result.add("error", "router",
#                    "App missing React Router <Routes>/<Route> setup", app_file)
    
#     if "BrowserRouter" not in app:
#         result.add("error", "router", "App missing BrowserRouter", app_file)


# def _check_package_json(result: ValidationResult, file_map: Dict[str, str]) -> None:
#     """Check package.json for required dependencies."""
#     raw = file_map.get("frontend/package.json", "")
#     if not raw:
#         return
    
#     try:
#         pkg = json.loads(raw)
#         deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
#         for req in ("react", "react-dom", "vite"):
#             if req not in deps:
#                 result.add("error", "structure",
#                            f"frontend/package.json missing: '{req}'",
#                            "frontend/package.json")
#     except json.JSONDecodeError:
#         result.add("error", "structure",
#                    "frontend/package.json invalid JSON", "frontend/package.json")


# def _to_pascal(name: str) -> str:
#     """Convert name to PascalCase."""
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# # ──────────────────────────────────────────────────────────────
# # Node
# # ──────────────────────────────────────────────────────────────

# def validator_node(state: AgentState) -> dict:
#     """Main validation node."""
#     raw_files: List[dict] = state.get("code_files", [])

#     if not raw_files:
#         logger.error("No files generated")
#         return {
#             "code_files": [],
#             "validation_errors": ["[ERROR] STRUCTURE [unknown]: No files were generated"],
#             "validation_warnings": [],
#         }

#     files = _dedup_files(raw_files)
#     filenames = [f.get("filename", "") for f in files]
#     file_map = {f.get("filename", ""): f.get("content", "") for f in files}
#     expected_pages = state.get("site_plan", {}).get("pages", [])

#     result = ValidationResult(file_map=file_map)

#     _check_structure(result, filenames)
#     _check_empty_files(result, file_map)
#     _check_pages(result, filenames, expected_pages)
#     _check_content(result, file_map)
#     _check_jsx_structure(result, file_map)
#     _check_router(result, file_map, expected_pages)
#     _check_package_json(result, file_map)

#     if result.errors:
#         logger.error("Validation FAILED: %d error(s), %d warning(s)",
#                      len(result.errors), len(result.warnings))
#         for e in result.errors:
#             logger.error("  %s", e)
#     else:
#         logger.info("Validation PASSED with %d warning(s)", len(result.warnings))

#     for w in result.warnings:
#         logger.warning("  %s", w)

#     return {
#         "code_files": files,
#         "validation_errors": result.errors,
#         "validation_warnings": result.warnings,
#     }


from __future__ import annotations

import json
import logging
import re
from dataclasses import dataclass, field
from typing import Dict, List, Optional, Tuple

from backend.state import AgentState

logger = logging.getLogger(__name__)


@dataclass
class Finding:
    severity: str
    category: str
    message: str
    filename: str = ""

    def __str__(self) -> str:
        tag = "ERROR" if self.severity == "error" else "WARN "
        loc = f" [{self.filename}]" if self.filename else " [unknown]"
        return f"[{tag}] {self.category.upper()}{loc}: {self.message}"


@dataclass
class ValidationResult:
    findings: List[Finding] = field(default_factory=list)
    file_map: Dict[str, str] = field(default_factory=dict)

    @property
    def errors(self) -> List[str]:
        return [str(f) for f in self.findings if f.severity == "error"]

    @property
    def warnings(self) -> List[str]:
        return [str(f) for f in self.findings if f.severity == "warning"]

    def add(self, severity: str, category: str, message: str, filename: str = "") -> None:
        self.findings.append(Finding(severity, category, message, filename))

    def ok(self) -> bool:
        return not self.errors


CODE_EXTENSIONS = (".ts", ".tsx")

REQUIRED_FRONTEND = [
    ("frontend/package.json",),
    ("frontend/vite.config.ts",),
    ("frontend/tailwind.config.js",),
    ("frontend/postcss.config.js",),
    ("frontend/index.html",),
    ("frontend/src/main.tsx",),
    ("frontend/src/App.tsx",),
    ("frontend/src/index.css",),
]

PYTHON_LEAKAGE_TOKENS = [
    "from fastapi", "import uvicorn", "def ", "@app.get", "@app.post",
    "BaseModel", "import flask",
]

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

_HOOKS_RE = re.compile(
    r"\b(useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer)\s*\("
)

_TS_LEAKAGE_RE = re.compile(
    r"interface\s+\w+\s*\{"
    r"|type\s+\w+\s*=\s*[{([]"
    r"|import type\s+"
    r"|useState<[A-Z]"
)


def _strip_strings(line: str) -> str:
    line = re.sub(r'"(?:[^"\\]|\\.)*"', '""', line)
    line = re.sub(r"'(?:[^'\\]|\\.)*'", "''", line)
    line = re.sub(r"`(?:[^`\\]|\\.)*`", "``", line)
    return line


def _is_multiline_open(line: str, lines: List[str], line_idx: int) -> Optional[str]:
    clean = _strip_strings(line).strip()
    m = re.match(r"<([a-z][a-z0-9]*)(?:\s|$)", clean)
    if not m:
        return None
    tag_name = m.group(1)
    if tag_name not in HTML_TAGS or tag_name in VOID_ELEMENTS:
        return None
    if ">" in clean:
        return None
    for j in range(line_idx + 1, min(line_idx + 15, len(lines))):
        peek = _strip_strings(lines[j]).strip()
        if "/>" in peek:
            return None
        if re.search(r"(?<!/)\s*>", peek):
            return tag_name
    return None


def _dedup_files(files: List[dict]) -> List[dict]:
    seen: Dict[str, int] = {}
    for i, f in enumerate(files):
        name = f.get("filename", "")
        if name:
            seen[name] = i
    deduped = [files[i] for i in sorted(seen.values())]
    removed = len(files) - len(deduped)
    if removed:
        logger.info("  [dedup] removed %d duplicate(s)", removed)
    return deduped


def _check_tag_balance(code: str) -> List[Tuple[int, str]]:
    issues: List[Tuple[int, str]] = []
    tag_stack: List[Tuple[str, int]] = []
    lines = code.split("\n")

    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if stripped.startswith("//") or stripped.startswith("*") or stripped.startswith("/*"):
            continue

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
            if tag not in HTML_TAGS or tag in VOID_ELEMENTS:
                continue
            before = no_self[: m.start()]
            if re.search(r"[A-Za-z0-9_]\s*$", before):
                continue
            events.append((m.start(), "open", tag))

        for m in _CLOSE_TAG_RE.finditer(clean):
            tag = m.group(1).lower()
            if tag not in HTML_TAGS:
                continue
            events.append((m.start(), "close", tag))

        events.sort(key=lambda e: e[0])

        for _, etype, tag in events:
            if etype == "open":
                tag_stack.append((tag, i))
            else:
                if tag_stack and tag_stack[-1][0] == tag:
                    tag_stack.pop()
                else:
                    expected = tag_stack[-1][0] if tag_stack else None
                    msg = (
                        f"Unexpected closing tag </{tag}> — expected </{expected}>"
                        if expected
                        else f"Unexpected closing tag </{tag}> with no matching open tag"
                    )
                    issues.append((i, msg))

        ml_tag = _is_multiline_open(line, lines, i - 1)
        if ml_tag:
            tag_stack.append((ml_tag, i))

    for tag_name, lineno in tag_stack:
        issues.append((lineno, f"Unclosed tag <{tag_name}> (opened on line {lineno})"))

    return issues


def _check_jsx_structure(result: ValidationResult, file_map: Dict[str, str]) -> None:
    for filename, content in file_map.items():
        if not filename.endswith((".tsx")):
            continue
        if not content.strip():
            continue

        for lineno, msg in _check_tag_balance(content):
            location = f"(line {lineno})" if lineno else ""
            result.add("error", "jsx_syntax", f"{location}: {msg}", filename)

        if "/pages/" in filename and "export default" not in content:
            result.add("error", "jsx_syntax", "Page component missing 'export default'", filename)

        hooks = set(_HOOKS_RE.findall(content))
        if hooks:
            has_react = (
                "import React" in content
                or "from 'react'" in content
                or 'from "react"' in content
            )
            if not has_react:
                result.add("error", "jsx_syntax",
                           f"React hooks used ({', '.join(sorted(hooks))}) but 'react' not imported",
                           filename)


def _check_structure(result: ValidationResult, filenames: List[str]) -> None:
    for variants in REQUIRED_FRONTEND:
        if not any(v in filenames for v in variants):
            result.add("error", "structure", f"Missing required file: {variants[0]}", variants[0])


def _check_empty_files(result: ValidationResult, file_map: Dict[str, str]) -> None:
    for filename, content in file_map.items():
        if filename.endswith(CODE_EXTENSIONS) and not content.strip():
            result.add("error", "content", "File is empty", filename)


def _check_pages(result: ValidationResult, filenames: List[str], expected_pages: List[str]) -> None:
    for page in expected_pages:
        page_name = _to_pascal(page)
        if f"frontend/src/pages/{page_name}.tsx" not in filenames:
            result.add("error", "page", f"Missing page component for '{page}'",
                       f"frontend/src/pages/{page_name}.tsx")


def _check_content(result: ValidationResult, file_map: Dict[str, str]) -> None:
    for filename, content in file_map.items():
        if not filename.endswith(CODE_EXTENSIONS):
            continue
            
        if filename.startswith("frontend/"):
            for token in PYTHON_LEAKAGE_TOKENS:
                if token in content:
                    result.add("error", "content", f"Python token '{token}' in frontend file", filename)
                    break


def _check_router(result: ValidationResult, file_map: Dict[str, str], expected_pages: List[str]) -> None:
    app = file_map.get("frontend/src/App.tsx", "")
    app_file = "frontend/src/App.tsx"
    
    if not app:
        result.add("error", "router", "App entry file not found", app_file)
        return
    
    if "Routes" not in app or "<Route" not in app:
        result.add("error", "router", "App missing React Router <Routes>/<Route> setup", app_file)
    
    if "BrowserRouter" not in app:
        result.add("error", "router", "App missing BrowserRouter", app_file)


def _check_package_json(result: ValidationResult, file_map: Dict[str, str]) -> None:
    raw = file_map.get("frontend/package.json", "")
    if not raw:
        return
    
    try:
        pkg = json.loads(raw)
        deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
        for req in ("react", "react-dom", "vite"):
            if req not in deps:
                result.add("error", "structure", f"frontend/package.json missing: '{req}'",
                           "frontend/package.json")
    except json.JSONDecodeError:
        result.add("error", "structure", "frontend/package.json invalid JSON", "frontend/package.json")


def _to_pascal(name: str) -> str:
    name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
    return "".join(w.capitalize() for w in name.split()) or name


def validator_node(state: AgentState) -> dict:
    raw_files: List[dict] = state.get("code_files", [])

    if not raw_files:
        logger.error("No files generated")
        return {
            "code_files": [],
            "validation_errors": ["[ERROR] STRUCTURE [unknown]: No files were generated"],
            "validation_warnings": [],
        }

    files = _dedup_files(raw_files)
    filenames = [f.get("filename", "") for f in files]
    file_map = {f.get("filename", ""): f.get("content", "") for f in files}
    expected_pages = state.get("site_plan", {}).get("pages", [])

    result = ValidationResult(file_map=file_map)

    _check_structure(result, filenames)
    _check_empty_files(result, file_map)
    _check_pages(result, filenames, expected_pages)
    _check_content(result, file_map)
    _check_jsx_structure(result, file_map)
    _check_router(result, file_map, expected_pages)
    _check_package_json(result, file_map)

    if result.errors:
        logger.error("Validation FAILED: %d error(s), %d warning(s)",
                     len(result.errors), len(result.warnings))
        for e in result.errors:
            logger.error("  %s", e)
    else:
        logger.info("Validation PASSED with %d warning(s)", len(result.warnings))

    for w in result.warnings:
        logger.warning("  %s", w)

    return {
        "code_files": files,
        "validation_errors": result.errors,
        "validation_warnings": result.warnings,
    }