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



from state import AgentState
from typing import List

CODE_EXTENSIONS = (".js", ".ts", ".tsx", ".jsx")


def validator_node(state: AgentState):
    errors: List[str] = []
    files = state.get("code_files", [])

    if not files:
        return {"validation_errors": ["No files were generated"]}

    filenames = [f.get("filename", "") for f in files]
    file_map = {f.get("filename"): f.get("content", "") for f in files}

    # =====================================================
    # ✅ FRONTEND STRUCTURE VALIDATION
    # =====================================================

    required_frontend = [
        "frontend/package.json",
        "frontend/vite.config.js",
        "frontend/tailwind.config.js",
        "frontend/postcss.config.js",
        "frontend/index.html",
        "frontend/src/main.jsx",
        "frontend/src/App.jsx",
        "frontend/src/index.css"
    ]

    for rf in required_frontend:
        if rf not in filenames:
            errors.append(f"Missing frontend file: {rf}")

    # =====================================================
    # ✅ BACKEND STRUCTURE VALIDATION
    # =====================================================

    required_backend = [
        "backend/package.json",
        "backend/tsconfig.json",
        "backend/src/server.ts"
    ]

    for rb in required_backend:
        if rb not in filenames:
            errors.append(f"Missing backend file: {rb}")

    # =====================================================
    # ✅ PAGE VALIDATION
    # =====================================================

    expected_pages = state.get("site_plan", {}).get("pages", [])

    for page in expected_pages:
        page_file = f"frontend/src/pages/{page}.jsx"
        if page_file not in filenames:
            errors.append(f"Missing page component: {page_file}")

    # =====================================================
    # 🔍 CONTENT VALIDATION
    # =====================================================

    for filename, content in file_map.items():

        # Skip configs
        if filename.endswith(("package.json", ".json", ".config.js", ".config.ts")):
            continue

        # ❌ Python leakage
        if filename.endswith(CODE_EXTENSIONS):
            if any(word in content for word in ["FastAPI", "uvicorn", "def "]):
                errors.append(f"Python code leaked into: {filename}")

        # ❌ Backend code inside frontend
        if filename.startswith("frontend/") and "express(" in content:
            errors.append(f"Backend code found inside frontend: {filename}")

        # ❌ Backend must be TypeScript
        if filename.startswith("backend/"):
            if not (
                filename.endswith(".ts")
                or filename.endswith("package.json")
                or filename.endswith("tsconfig.json")
            ):
                errors.append(f"Backend must be TypeScript: {filename}")

    # =====================================================
    # 🔍 ROUTER CHECK
    # =====================================================

    app_file = file_map.get("frontend/src/App.jsx", "")
    if app_file:
        if "Routes" not in app_file or "Route" not in app_file:
            errors.append("App.jsx missing React Router configuration")

    # =====================================================
    # 🔍 TAILWIND CHECK
    # =====================================================

    css_file = file_map.get("frontend/src/index.css", "")
    if css_file:
        if "@tailwind base;" not in css_file:
            errors.append("Tailwind base directive missing")

    # =====================================================
    # FINAL RESULT
    # =====================================================

    if errors:
        print("❌ VALIDATION ERRORS:")
        for e in errors:
            print(" -", e)

    else:
        print("✅ Validation passed")

    return {"validation_errors": errors}