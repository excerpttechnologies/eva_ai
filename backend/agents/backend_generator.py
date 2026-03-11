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


from langchain_ollama import ChatOllama

def backend_generator_node(state):
    print("🔥 Generating backend (FINAL STABLE)")

    llm = ChatOllama(
        model="qwen2.5:3b-instruct",
        temperature=0
    )

    # Generate only server + routes via AI
    prompt = """
Generate a minimal Express TypeScript API.

Requirements:
- server.ts
- routes/api.ts
- No markdown
- No explanation
- Only raw TypeScript code
"""

    response = llm.invoke(prompt)
    server_code = response.content.strip()

    files = [
        # ✅ Hardcoded package.json
        {
            "filename": "backend/package.json",
            "content": """{
  "name": "backend",
  "version": "1.0.0",
  "main": "dist/server.js",
  "scripts": {
    "dev": "ts-node-dev --respawn src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "ts-node-dev": "^2.0.0",
    "@types/node": "^20.11.0",
    "@types/express": "^4.17.21"
  }
}"""
        },

        # ✅ Hardcoded tsconfig.json
        {
            "filename": "backend/tsconfig.json",
            "content": """{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}"""
        },

        # ✅ AI-generated server
        {
            "filename": "backend/src/server.ts",
            "content": server_code
        }
    ]

    print("✅ Backend generated complete structure")

    return {
        "code_files": state.get("code_files", []) + files
    }