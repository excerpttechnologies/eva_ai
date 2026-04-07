# # from langchain_ollama import ChatOllama
# # from langchain_core.messages import SystemMessage, HumanMessage

# # def backend_generator_node(state):
# #     print("▶ Entered backend_generator")

# #     llm = ChatOllama(
# #         model="qwen2.5-coder",
# #         temperature=0.1,
# #     )

# #     system_prompt = """
# # You are a senior backend engineer.

# # Generate a TypeScript backend using Express.js.

# # RULES (VERY IMPORTANT):
# # 1. Use TypeScript ONLY.
# # 2. Use Express.js.
# # 3. Create REST APIs needed by the frontend.
# # 4. Return output as STRICT JSON in this format:

# # {
# #   "files": [
# #     { "filename": "backend/package.json", "content": "..." },
# #     { "filename": "backend/tsconfig.json", "content": "..." },
# #     { "filename": "backend/src/server.ts", "content": "..." },
# #     { "filename": "backend/src/routes/api.ts", "content": "..." }
# #   ]
# # }

# # 5. NO markdown
# # 6. NO explanations
# # """

# #     user_prompt = f"""
# # Project requirements:
# # {state.get("requirements", {})}

# # Pages:
# # {state.get("site_plan", {})}

# # APIs to include:
# # - POST /api/contact
# # - GET /api/pricing
# # """

# #     response = llm.invoke([
# #         SystemMessage(content=system_prompt),
# #         HumanMessage(content=user_prompt)
# #     ])

# #     # Parse JSON safely
# #     data = response.content.strip()

# #     try:
# #         result = eval(data)  # controlled model output
# #     except Exception as e:
# #         return {
# #             "validation_errors": [f"Backend generator JSON error: {str(e)}"]
# #         }

# #     files = state.get("code_files", []) + result.get("files", [])

# #     return {
# #         "code_files": files
# #     }


# # from langchain_ollama import ChatOllama
# # from langchain_core.messages import SystemMessage, HumanMessage

# # def backend_generator_node(state):
# #     llm = ChatOllama(model="qwen2.5-coder", temperature=0.1)

# #     system_prompt = """
# # You are a BACKEND engineer.

# # Generate a TypeScript backend using Express.js.

# # STRICT RULES:
# # 1. TypeScript ONLY
# # 2. Express.js ONLY
# # 3. Files MUST end in .ts
# # 4. NO Python
# # 5. NO FastAPI
# # 6. NO uvicorn
# # 7. Backend must be in /backend folder

# # Return STRICT JSON:
# # {
# #   "files": [
# #     { "filename": "backend/package.json", "content": "..." },
# #     { "filename": "backend/tsconfig.json", "content": "..." },
# #     { "filename": "backend/src/server.ts", "content": "..." },
# #     { "filename": "backend/src/routes/api.ts", "content": "..." }
# #   ]
# # }
# # """

# #     response = llm.invoke(system_prompt + str(state["requirements"]))
# #     result = eval(response.content)

# #     return {
# #         "code_files": state["code_files"] + result["files"]
# #     }

# # from langchain_ollama import ChatOllama
# # from langchain_core.messages import SystemMessage, HumanMessage
# # from backend.state import AgentState
# # import json


# # def extract_json(text: str):
# #     """
# #     Safely extract JSON object from LLM output
# #     (handles ```json blocks)
# #     """
# #     start = text.find("{")
# #     end = text.rfind("}") + 1
# #     if start == -1 or end == -1:
# #         raise ValueError("No JSON found in backend model output")
# #     return json.loads(text[start:end])


# # def backend_generator_node(state: AgentState):
# #     print("🔥 BACKEND GENERATOR RUNNING")
# #     llm = ChatOllama(
# #         model="qwen2.5-coder",
# #         temperature=0.1
# #     )

# #     system_prompt = """
# # You are a BACKEND engineer.

# # Generate a TypeScript backend using Express.js.

# # STRICT RULES:
# # 1. TypeScript ONLY
# # 2. Express.js ONLY
# # 3. Files MUST end in .ts
# # 4. NO Python
# # 5. NO FastAPI
# # 6. NO uvicorn
# # 7. Backend must be inside /backend folder

# # Return STRICT JSON ONLY:
# # {
# #   "backend_files": [
# #     { "filename": "backend/package.json", "content": "..." },
# #     { "filename": "backend/tsconfig.json", "content": "..." },
# #     { "filename": "backend/src/server.ts", "content": "..." },
# #     { "filename": "backend/src/routes/api.ts", "content": "..." }
# #   ]
# # }
# # """

# #     user_prompt = f"""
# # Project requirements:
# # {json.dumps(state.get("requirements", {}), indent=2)}

# # Generate backend files now.
# # """

# #     response = llm.invoke([
# #         SystemMessage(content=system_prompt),
# #         HumanMessage(content=user_prompt)
# #     ])

# #     try:
# #         result = extract_json(response.content)
# #     except Exception as e:
# #         return {
# #             "validation_errors": [f"Backend JSON parse failed: {str(e)}"]
# #         }

# #         backend_files = result.get("backend_files", [])

# #     if not backend_files:
# #         return {
# #             "validation_errors": ["Backend generator returned no files"]
# #         }

# #     return {
# #         "code_files": state.get("code_files", []) + backend_files
# #     }


# # from langchain_ollama import ChatOllama
# # from langchain_core.messages import SystemMessage, HumanMessage
# # from backend.state import AgentState
# # import json


# # def extract_json(text: str):
# #     """
# #     Safely extract JSON object from LLM output
# #     (handles ```json blocks)
# #     """
# #     start = text.find("{")
# #     end = text.rfind("}") + 1
# #     if start == -1 or end == -1:
# #         raise ValueError("No JSON found in backend model output")
# #     return json.loads(text[start:end])


# # def backend_generator_node(state: AgentState):
# #     print("🔥 BACKEND GENERATOR RUNNING")

# #     llm = ChatOllama(
# #         model="qwen2.5-coder",
# #         temperature=0.1
# #     )

# #     system_prompt = """
# # You are a BACKEND engineer.

# # Generate a TypeScript backend using Express.js.

# # STRICT RULES:
# # 1. TypeScript ONLY
# # 2. Express.js ONLY
# # 3. Files MUST end in .ts
# # 4. NO Python
# # 5. NO FastAPI
# # 6. NO uvicorn
# # 7. Backend must be inside /backend folder


# # Return STRICT JSON ONLY:
# # {
# #   "files": [
# #     { "filename": "backend/package.json", "content": "..." },
# #     { "filename": "backend/tsconfig.json", "content": "..." },
# #     { "filename": "backend/src/server.ts", "content": "..." },
# #     { "filename": "backend/src/routes/api.ts", "content": "..." }
# #   ]
# # }
# # """

# #     user_prompt = f"""
# # Project requirements:
# # {json.dumps(state.get("requirements", {}), indent=2)}

# # Generate backend files now.
# # """

# #     response = llm.invoke([
# #         SystemMessage(content=system_prompt),
# #         HumanMessage(content=user_prompt)
# #     ])
# #     print("BACKEND RAW OUTPUT:", response.content)


# #     # ---- FIXED LOGIC ----
# #     try:
# #         result = extract_json(response.content)
# #         # backend_files = result.get("backend_files", [])
# #     except Exception as e:
# #         return {
# #             "code_files": state.get("code_files", []),
# #             "validation_errors": [f"Backend JSON parse failed: {str(e)}"]
# #         }
# #     backend_files = result.get("backend_files") or result.get("files", [])

# #     if not backend_files:
# #         return {
# #             "code_files": state.get("code_files", []),
# #             "validation_errors": ["Backend generator returned no files"]
# #         }
        
# #     return {
# #         "code_files": state.get("code_files", []) + backend_files
# #     }


# # from langchain_ollama import ChatOllama
# # from langchain_core.messages import SystemMessage, HumanMessage
# # from backend.state import AgentState
# # import json


# # def extract_json(text: str):
# #     """
# #     Safely extract JSON object from LLM output
# #     (handles ```json blocks)
# #     """
# #     start = text.find("{")
# #     end = text.rfind("}") + 1

# #     if start == -1 or end == -1:
# #         raise ValueError("No JSON found in backend model output")

# #     cleaned = text[start:end]
# #     parsed = json.loads(cleaned)

# #     return parsed
# # def backend_generator_node(state: AgentState):
# #     print("🔥 BACKEND GENERATOR RUNNING")

# #     llm = ChatOllama(
# #         model="deepseek-coder:6.7b",
# #         temperature=0.1
# #     )

# #     system_prompt = """
# # You are a BACKEND engineer.

# # Generate a TypeScript backend using Express.js.

# # STRICT RULES:
# # 1. TypeScript ONLY
# # 2. Express.js ONLY
# # 3. Files MUST end in .ts
# # 4. NO Python
# # 5. NO FastAPI
# # 6. NO uvicorn
# # 7. Backend must be inside /backend folder
# # 8. IMPORTANT: The "content" field must be a plain string.
# #    DO NOT use JSON.stringify().
# #    DO NOT use backticks.
# #    DO NOT embed JavaScript expressions.

# # Return STRICT JSON ONLY:
# # {
# #   "files": [
# #     { "filename": "backend/package.json", "content": "..." },
# #     { "filename": "backend/tsconfig.json", "content": "..." },
# #     { "filename": "backend/src/server.ts", "content": "..." },
# #     { "filename": "backend/src/routes/api.ts", "content": "..." }
# #   ]
# # }
# # """

# #     user_prompt = f"""
# # Project requirements:
# # {json.dumps(state.get("requirements", {}), indent=2)}

# # Generate backend files now.
# # """

# #     response = llm.invoke([
# #         SystemMessage(content=system_prompt),
# #         HumanMessage(content=user_prompt)
# #     ])

# #     print("BACKEND RAW OUTPUT:\n", response.content)

# #     try:
# #         result = extract_json(response.content)
# #         print("PARSED BACKEND JSON:\n", result)
# #     except Exception as e:
# #         return {
# #             "code_files": state.get("code_files", []),
# #             "validation_errors": [f"Backend JSON parse failed: {str(e)}"]
# #         }

# #     backend_files = result.get("files", [])

# #     if not backend_files:
# #         return {
# #             "code_files": state.get("code_files", []),
# #             "validation_errors": ["Backend generator returned no files"]
# #         }

# #     return {
# #         "code_files": state.get("code_files", []) + backend_files
# #     }


# # latest version 

# from langchain_ollama import ChatOllama
# # import json

# # def extract_json(text):
# #     start = text.find("{")
# #     end = text.rfind("}") + 1
# #     return json.loads(text[start:end])
# import json
# import re

# def extract_json(text: str):
#     """
#     Robust JSON extractor for LLM outputs.
#     Handles:
#     - Markdown blocks
#     - Extra text before/after JSON
#     - Trailing commas
#     """

#     if not text:
#         raise ValueError("Empty model output")

#     # Remove markdown fences
#     text = re.sub(r"```json", "", text)
#     text = re.sub(r"```", "", text)

#     # Find first JSON object
#     match = re.search(r"\{.*\}", text, re.DOTALL)
#     if not match:
#         raise ValueError("No valid JSON object found")

#     json_str = match.group(0)

#     # Remove trailing commas
#     json_str = re.sub(r",\s*}", "}", json_str)
#     json_str = re.sub(r",\s*]", "]", json_str)

#     try:
#         return json.loads(json_str)
#     except json.JSONDecodeError as e:
#         print("❌ JSON PARSE ERROR")
#         print("Cleaned JSON:\n", json_str)
#         raise e

# def backend_generator_node(state):
#     print("🔥 Generating backend")

#     llm = ChatOllama(
#         model="deepseek-coder:6.7b",
#         temperature=0.1
#     )

#     prompt = f"""
# Generate a TypeScript Express backend.

# All files must start with backend/.

# Return STRICT JSON:
# {{
#   "files": [
#     {{ "filename": "backend/package.json", "content": "..." }},
#     {{ "filename": "backend/tsconfig.json", "content": "..." }},
#     {{ "filename": "backend/src/server.ts", "content": "..." }},
#     {{ "filename": "backend/src/routes/api.ts", "content": "..." }}
#   ]
# }}
# """

#     response = llm.invoke(prompt)
#     result = extract_json(response.content)

#     backend_files = result.get("files", [])

#     return {
#         "code_files": state.get("code_files", []) + backend_files
#     }


# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json
# import re

# import json
# import re

# def extract_json(text: str):
#     if not text:
#         raise ValueError("Empty model output")

#     # Remove markdown fences
#     text = re.sub(r"```json", "", text)
#     text = re.sub(r"```", "", text)

#     # Extract JSON object
#     match = re.search(r"\{.*\}", text, re.DOTALL)
#     if not match:
#         raise ValueError("No valid JSON found")

#     json_str = match.group(0)

#     # Remove trailing commas
#     json_str = re.sub(r",\s*}", "}", json_str)
#     json_str = re.sub(r",\s*]", "]", json_str)

#     try:
#         return json.loads(json_str)
#     except json.JSONDecodeError as e:
#         print("❌ RAW BROKEN JSON:\n", json_str[:1000])
#         raise e


# def backend_generator_node(state: AgentState):
#     print("🔥 Generating backend (optimized)")

#     # ⚡ Use smaller faster model for backend
#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",  # MUCH faster than deepseek 6.7b
#         temperature=0
#     )

#     requirements = state.get("requirements", {})
#     pages = state.get("site_plan", {}).get("components", [])

#     system_prompt = """
# You are a senior backend engineer.

# Generate a PRODUCTION-READY TypeScript Express backend.

# STRICT RULES:
# - All content strings must be valid JSON strings
# - Escape all quotes properly
# - Do not include unescaped backslashes
# - Do not include Windows paths
# - Do not use template strings
# - Do not use regex patterns
# - Do not include \ unless escaped as \\
# 1. Use TypeScript only.
# 2. Use Express.js.
# 3. Backend must be inside "backend/" folder.
# 4. Create REST APIs matching frontend pages.
# 5. Include:
#    - backend/package.json
#    - backend/tsconfig.json
#    - backend/src/server.ts
#    - backend/src/routes/api.ts
# 6. No markdown.
# 7. No explanations.
# 8. Return strict valid JSON only.
# 9. All property names must use double quotes.
# 10. No trailing commas.
# """

#     user_prompt = f"""
# Project requirements:
# {json.dumps(requirements, indent=2)}

# Frontend components:
# {json.dumps(pages, indent=2)}

# Create REST endpoints matching the pages.
# Example:
# GET /api/home
# GET /api/about
# POST /api/contact
# """

#     try:
#         response = llm.invoke([
#             SystemMessage(content=system_prompt),
#             HumanMessage(content=user_prompt)
#         ])

#         result = extract_json(response.content)
#         backend_files = result.get("files", [])

#         if not backend_files:
#             raise ValueError("No backend files returned")

#         print(f"✅ Backend generated {len(backend_files)} files")

#         return {
#             "code_files": state.get("code_files", []) + backend_files
#         }

#     except Exception as e:
#         print("❌ Backend generation failed:", str(e))
#         return {
#             "code_files": state.get("code_files", []),
#             "validation_errors": [f"Backend generation failed: {str(e)}"]
#         }


# from langchain_ollama import ChatOllama

# def backend_generator_node(state):
#     print("🔥 Generating backend (FINAL STABLE)")

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     # Generate only server + routes via AI
#     prompt = """
# Generate a minimal Express TypeScript API.

# Requirements:
# - server.ts
# - routes/api.ts
# - No markdown
# - No explanation
# - Only raw TypeScript code
# """

#     response = llm.invoke(prompt)
#     server_code = response.content.strip()

#     files = [
#         # ✅ Hardcoded package.json
#         {
#             "filename": "backend/package.json",
#             "content": """{
#   "name": "backend",
#   "version": "1.0.0",
#   "main": "dist/server.js",
#   "scripts": {
#     "dev": "ts-node-dev --respawn src/server.ts",
#     "build": "tsc",
#     "start": "node dist/server.js"
#   },
#   "dependencies": {
#     "express": "^4.18.2",
#     "cors": "^2.8.5"
#   },
#   "devDependencies": {
#     "typescript": "^5.3.3",
#     "ts-node-dev": "^2.0.0",
#     "@types/node": "^20.11.0",
#     "@types/express": "^4.17.21"
#   }
# }"""
#         },

#         # ✅ Hardcoded tsconfig.json
#         {
#             "filename": "backend/tsconfig.json",
#             "content": """{
#   "compilerOptions": {
#     "target": "ES2020",
#     "module": "CommonJS",
#     "rootDir": "src",
#     "outDir": "dist",
#     "strict": true,
#     "esModuleInterop": true
#   }
# }"""
#         },

#         # ✅ AI-generated server
#         {
#             "filename": "backend/src/server.ts",
#             "content": server_code
#         }
#     ]

#     print("✅ Backend generated complete structure")

#     return {
#         "code_files": state.get("code_files", []) + files
#     }


"""
backend_generator_node.py  -  Generates Express TypeScript backend.

- package.json, tsconfig.json — hardcoded (stable, no LLM needed)
- server.ts  — LLM-generated via NVIDIA API
- routes/api.ts — LLM-generated, prompt-aware (uses user's app context)
- models/ — LLM-generated data models based on requirements
- middleware/ — hardcoded CORS, auth, error handler
- .env.example — hardcoded

Switched from ChatOllama -> NVIDIA API via llm_client.get_fast_llm()
"""

from __future__ import annotations

import logging
import re

from backend.llm_client import get_fast_llm, llm_invoke
from backend.state import AgentState

logger = logging.getLogger(__name__)


# ==============================================================
# Helpers
# ==============================================================

def _clean(raw: str) -> str:
    """Strip markdown fences and leading/trailing whitespace."""
    raw = re.sub(r"```[a-zA-Z]*", "", raw)
    return raw.replace("```", "").strip()


def _file(filename: str, content: str) -> dict:
    return {"filename": filename, "content": content}


# ==============================================================
# Hardcoded stable files (no LLM needed)
# ==============================================================

def _package_json() -> dict:
    return _file("backend/package.json", """{
  "name": "backend",
  "version": "1.0.0",
  "main": "dist/server.js",
  "scripts": {
    "dev":   "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "lint":  "eslint src --ext .ts"
  },
  "dependencies": {
    "express":     "^4.18.2",
    "cors":        "^2.8.5",
    "dotenv":      "^16.4.0",
    "helmet":      "^7.1.0",
    "morgan":      "^1.10.0",
    "express-rate-limit": "^7.2.0"
  },
  "devDependencies": {
    "typescript":        "^5.3.3",
    "ts-node-dev":       "^2.0.0",
    "@types/node":       "^20.11.0",
    "@types/express":    "^4.17.21",
    "@types/cors":       "^2.8.17",
    "@types/morgan":     "^1.9.9"
  }
}""")


def _tsconfig_json() -> dict:
    return _file("backend/tsconfig.json", """{
  "compilerOptions": {
    "target":          "ES2020",
    "module":          "CommonJS",
    "lib":             ["ES2020"],
    "rootDir":         "src",
    "outDir":          "dist",
    "strict":          true,
    "esModuleInterop": true,
    "skipLibCheck":    true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}""")


def _middleware_cors() -> dict:
    return _file("backend/src/middleware/cors.ts",
        "import cors from 'cors'\n"
        "\n"
        "const allowedOrigins = [\n"
        "  'http://localhost:5173',\n"
        "  'http://localhost:3000',\n"
        "  process.env.FRONTEND_URL ?? '',\n"
        "].filter(Boolean)\n"
        "\n"
        "export const corsMiddleware = cors({\n"
        "  origin: (origin, cb) => {\n"
        "    if (!origin || allowedOrigins.includes(origin)) cb(null, true)\n"
        "    else cb(new Error('Not allowed by CORS'))\n"
        "  },\n"
        "  credentials: true,\n"
        "})\n"
    )


def _middleware_error() -> dict:
    return _file("backend/src/middleware/errorHandler.ts",
        "import { Request, Response, NextFunction } from 'express'\n"
        "\n"
        "export interface AppError extends Error {\n"
        "  statusCode?: number\n"
        "}\n"
        "\n"
        "export function errorHandler(\n"
        "  err: AppError,\n"
        "  _req: Request,\n"
        "  res: Response,\n"
        "  _next: NextFunction\n"
        "): void {\n"
        "  const status  = err.statusCode ?? 500\n"
        "  const message = err.message    ?? 'Internal Server Error'\n"
        "  console.error(`[${status}] ${message}`)\n"
        "  res.status(status).json({ success: false, message })\n"
        "}\n"
    )


def _env_example(app_name: str) -> dict:
    return _file("backend/.env.example",
        "PORT=8000\n"
        "NODE_ENV=development\n"
        "FRONTEND_URL=http://localhost:5173\n"
        "JWT_SECRET=change_me_in_production\n"
        "DATABASE_URL=\n"
        f"APP_NAME={app_name}\n"
    )


# ==============================================================
# LLM-generated files
# ==============================================================

def _gen_server(llm, app_name: str, industry: str) -> dict:
    prompt = (
        "Generate a production-ready Express TypeScript server file (server.ts).\n"
        f"App: {app_name} | Industry: {industry}\n\n"
        "Requirements:\n"
        "- Import express, cors, helmet, morgan, dotenv\n"
        "- Import corsMiddleware from './middleware/cors'\n"
        "- Import errorHandler from './middleware/errorHandler'\n"
        "- Import apiRouter from './routes/api'\n"
        "- Use helmet(), morgan('dev'), express.json(), corsMiddleware\n"
        "- Mount apiRouter at /api\n"
        "- Health check GET /health returning { status: 'ok', app: APP_NAME }\n"
        "- Listen on process.env.PORT ?? 8000\n"
        "- Export app for testing\n"
        "- TypeScript only. No markdown. No explanation. Raw code only."
    )
    raw = llm_invoke(llm, prompt)
    code = _clean(raw)

    # Fallback if LLM returns garbage
    if "express" not in code or "listen" not in code:
        logger.warning("server.ts LLM output invalid — using fallback")
        code = (
            "import express from 'express'\n"
            "import helmet from 'helmet'\n"
            "import morgan from 'morgan'\n"
            "import dotenv from 'dotenv'\n"
            "import { corsMiddleware } from './middleware/cors'\n"
            "import { errorHandler } from './middleware/errorHandler'\n"
            "import { apiRouter } from './routes/api'\n"
            "\n"
            "dotenv.config()\n"
            "\n"
            "const app = express()\n"
            "const PORT = process.env.PORT ?? 8000\n"
            f"const APP_NAME = process.env.APP_NAME ?? '{app_name}'\n"
            "\n"
            "app.use(helmet())\n"
            "app.use(morgan('dev'))\n"
            "app.use(express.json())\n"
            "app.use(corsMiddleware)\n"
            "\n"
            "app.get('/health', (_req, res) => {\n"
            "  res.json({ status: 'ok', app: APP_NAME })\n"
            "})\n"
            "\n"
            "app.use('/api', apiRouter)\n"
            "app.use(errorHandler)\n"
            "\n"
            "app.listen(PORT, () => {\n"
            f"  console.log(`{app_name} API running on http://localhost:${{PORT}}`)\n"
            "})\n"
            "\n"
            "export default app\n"
        )
    return _file("backend/src/server.ts", code)


def _gen_routes(llm, app_name: str, industry: str, features: list, pages: list) -> dict:
    features_str = ", ".join(features[:6]) if features else "CRUD operations"
    pages_str    = ", ".join(pages[:6])    if pages    else "Home, Dashboard"

    prompt = (
        "Generate an Express TypeScript API router file (routes/api.ts).\n"
        f"App: {app_name} | Industry: {industry}\n"
        f"Features: {features_str}\n"
        f"Pages: {pages_str}\n\n"
        "Requirements:\n"
        "- Use express.Router()\n"
        "- Create 4-6 REST endpoints relevant to the app's industry and features\n"
        "- Each endpoint returns realistic mock JSON data\n"
        "- Include GET (list), GET (by id), POST (create), PUT (update), DELETE\n"
        "- Export as: export const apiRouter = router\n"
        "- TypeScript only. No markdown. No explanation. Raw code only."
    )
    raw  = llm_invoke(llm, prompt)
    code = _clean(raw)

    if "Router()" not in code or "apiRouter" not in code:
        logger.warning("routes/api.ts LLM output invalid — using fallback")
        code = (
            "import { Router, Request, Response } from 'express'\n"
            "\n"
            "export const apiRouter = Router()\n"
            "\n"
            "// Health / status\n"
            "apiRouter.get('/status', (_req: Request, res: Response) => {\n"
            f"  res.json({{ success: true, app: '{app_name}', version: '1.0.0' }})\n"
            "})\n"
            "\n"
            "// Items list\n"
            "apiRouter.get('/items', (_req: Request, res: Response) => {\n"
            "  res.json({ success: true, data: [], total: 0 })\n"
            "})\n"
            "\n"
            "// Item by ID\n"
            "apiRouter.get('/items/:id', (req: Request, res: Response) => {\n"
            "  res.json({ success: true, data: { id: req.params.id } })\n"
            "})\n"
            "\n"
            "// Create item\n"
            "apiRouter.post('/items', (req: Request, res: Response) => {\n"
            "  res.status(201).json({ success: true, data: req.body })\n"
            "})\n"
            "\n"
            "// Update item\n"
            "apiRouter.put('/items/:id', (req: Request, res: Response) => {\n"
            "  res.json({ success: true, data: { id: req.params.id, ...req.body } })\n"
            "})\n"
            "\n"
            "// Delete item\n"
            "apiRouter.delete('/items/:id', (req: Request, res: Response) => {\n"
            "  res.json({ success: true, message: 'Deleted successfully' })\n"
            "})\n"
        )
    return _file("backend/src/routes/api.ts", code)


def _gen_models(llm, app_name: str, industry: str, features: list) -> dict:
    features_str = ", ".join(features[:5]) if features else "users, items"

    prompt = (
        "Generate TypeScript interface/type definitions for a backend models file (models/types.ts).\n"
        f"App: {app_name} | Industry: {industry} | Features: {features_str}\n\n"
        "Requirements:\n"
        "- Define 3-5 TypeScript interfaces relevant to this app\n"
        "- Include id, createdAt, updatedAt on main entities\n"
        "- Export all interfaces\n"
        "- TypeScript only. No markdown. No explanation. Raw code only."
    )
    raw  = llm_invoke(llm, prompt)
    code = _clean(raw)

    if "interface" not in code and "type " not in code:
        logger.warning("models/types.ts LLM output invalid — using fallback")
        code = (
            "export interface BaseEntity {\n"
            "  id:        string\n"
            "  createdAt: string\n"
            "  updatedAt: string\n"
            "}\n"
            "\n"
            "export interface User extends BaseEntity {\n"
            "  name:   string\n"
            "  email:  string\n"
            "  role:   'admin' | 'user'\n"
            "  active: boolean\n"
            "}\n"
            "\n"
            "export interface ApiResponse<T> {\n"
            "  success: boolean\n"
            "  data?:   T\n"
            "  message?: string\n"
            "  total?:   number\n"
            "}\n"
        )
    return _file("backend/src/models/types.ts", code)


# ==============================================================
# Node
# ==============================================================

def backend_generator_node(state: AgentState) -> dict:
    print("Generating backend (NVIDIA API)")

    site_plan    = state.get("site_plan", {})
    requirements = state.get("requirements", {})

    app_name  = site_plan.get("app_name",  requirements.get("app_name",  "App"))
    industry  = requirements.get("industry", "Technology")
    features  = requirements.get("features", [])
    pages     = site_plan.get("pages", [])

    llm = get_fast_llm(temperature=0, max_tokens=1024)

    # Generate LLM files (server + routes + models in sequence)
    server_file = _gen_server(llm, app_name, industry)
    routes_file = _gen_routes(llm, app_name, industry, features, pages)
    models_file = _gen_models(llm, app_name, industry, features)

    files = [
        _package_json(),
        _tsconfig_json(),
        _middleware_cors(),
        _middleware_error(),
        _env_example(app_name),
        server_file,
        routes_file,
        models_file,
    ]

    print(f"Backend generated: {len(files)} files  |  app: {app_name}  |  industry: {industry}")

    return {
        "code_files": state.get("code_files", []) + files
    }