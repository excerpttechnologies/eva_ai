# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# import json

from state import AgentState

# def code_generator_node(state):
#     # Initialize Qwen2.5-Coder
#     # temperature=0.2 adds a slight creative touch while remaining reliable
#     llm = ChatOllama(model="qwen2.5-coder", temperature=0.2)
    
#     # Identify the specific component to build (e.g., 'Hero', 'Navbar')
#     # This comes from the site_plan generated in Step 3
#     current_component = state['site_plan']['current_task']
    
#     system_prompt = f"""
#     You are an expert React + Tailwind CSS developer. 
#     Your mission is to build the '{current_component}' component for XYZ Company.
    
#     GUIDELINES:
#     1. Output functional TypeScript components using Arrow functions.
#     2. Use ONLY Tailwind CSS classes for styling.
#     3. Ensure modern, high-quality UI based on this context: {state['research_context']}
#     4. Provide the code in a single Markdown code block.
#     5. No additional conversational text. Just the code.
#     """

#     user_input = f"Write the React code for the {current_component} based on these requirements: {state['requirements']}"
    
#     response = llm.invoke([
#         SystemMessage(content=system_prompt),
#         HumanMessage(content=user_input)
#     ])

#     # Store the result in the shared state
#     new_file = {
#         "filename": f"{current_component}.tsx",
#         "content": response.content
#     }
    
#     updated_files = state.get('code_files', []) + [new_file]
#     return {"code_files": updated_files}

# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json





# def coder_node(state: AgentState):
#     llm = ChatOllama(
#         model="qwen2.5-coder",
#         temperature=0.1
#     )

#     system_prompt = """
# You are a senior full-stack engineer.

# TASK:
# Generate a COMPLETE full-stack project (frontend + backend).

# OUTPUT RULES (STRICT):
# - Output ONLY valid JSON
# - JSON must be a list of files:
#   [{ "filename": "...", "content": "..." }]
# - NO markdown fences
# - NO explanations
# - Use REAL file paths

# TECH STACK:
# Frontend:
# - React
# - TypeScript
# - Tailwind CSS

# Backend:
# - FastAPI
# - REST APIs
# - Pydantic models

# PROJECT RULES:
# - Frontend files go under /frontend
# - Backend files go under /backend
# - If Contact form exists → POST /api/contact
# - If Pricing exists → GET /api/pricing
# """

#     user_prompt = f"""
# User request:
# {state["user_prompt"]}

# Requirements:
# {json.dumps(state.get("requirements", {}), indent=2)}

# Site plan:
# {json.dumps(state.get("site_plan", {}), indent=2)}

# Design context:
# {state.get("research_context", "")}

# Generate the full project now.
# """

#     response = llm.invoke([
#         SystemMessage(content=system_prompt),
#         HumanMessage(content=user_prompt)
#     ])

#     try:
#         files = json.loads(response.content)
#         assert isinstance(files, list)
#     except Exception:
#         return {
#             "validation_errors": [
#                 "Coder agent failed to return valid JSON file list"
#             ]
#         }

#     return {
#         "code_files": files
#     }


# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json


# def extract_json(text: str):
#     start = text.find("[")
#     end = text.rfind("]") + 1
#     if start == -1 or end == -1:
#         raise ValueError("No JSON found in model output")
#     return json.loads(text[start:end])


# def coder_node(state: AgentState):
#     llm = ChatOllama(
#         model="qwen2.5-coder",
#         temperature=0.1,
#         timeout=120
#     )

#     system_prompt = """
# You are a code generation engine.

# STRICT RULES:
# - Return ONLY valid JSON
# - No markdown
# - No backticks
# - No explanations
# - Response MUST start with '[' and end with ']'

# Schema:
# [
#   {
#     "filename": "string",
#     "content": "string"
#   }
# ]
# """

#     user_prompt = f"""
# User request:
# {state["user_prompt"]}

# Requirements:
# {json.dumps(state.get("requirements", {}), indent=2)}

# Site plan:
# {json.dumps(state.get("site_plan", {}), indent=2)}

# Generate a full-stack project:
# - Frontend: React + Tailwind
# - Backend: FastAPI
# - Contact form → POST /api/contact
# - Pricing → GET /api/pricing
# """

#     response = llm.invoke([
#         SystemMessage(content=system_prompt),
#         HumanMessage(content=user_prompt)
#     ])

#     try:
#         files = extract_json(response.content)
#         assert isinstance(files, list)
#     except Exception as e:
#         return {
#             "validation_errors": [str(e)]
#         }

#     return {
#         "code_files": files
#     }



# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json


# def extract_json(text: str):
#     start = text.find("[")
#     end = text.rfind("]") + 1
#     if start == -1 or end == -1:
#         raise ValueError("No JSON found in model output")
#     return json.loads(text[start:end])
# def coder_node(state):
#     llm = ChatOllama(model="qwen2.5-coder", temperature=0.2)

#     system_prompt = """
# You are a FRONTEND engineer.

# STRICT RULES:
# 1. Generate ONLY React frontend code.
# 2. Use JavaScript or TypeScript for React components.
# 3. DO NOT generate:
#    - backend code
#    - servers
#    - APIs
#    - FastAPI
#    - Express
#    - Node servers
# 4. DO NOT create server.js or backend files.
# 5. Output ONLY frontend files.

# Return STRICT JSON:
# {
#   "files": [
#     { "filename": "...", "content": "..." }
#   ]
# }
# """

#     response = llm.invoke(state["site_plan"])

#     result = eval(response.content)

#     return {
#         "code_files": state["code_files"] + result["files"]
#     }


# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json


# def extract_json(text: str):
#     start = text.find("{")
#     end = text.rfind("}") + 1
#     if start == -1 or end == -1:
#         raise ValueError("No JSON found in model output")
#     return json.loads(text[start:end])


# def coder_node(state: AgentState):
#     print("🔥 NEW FRONTEND GENERATOR LOADED")

#     llm = ChatOllama(
#         model="qwen2.5-coder",
#         temperature=0.2
#     )

#     system_prompt = """
# You are a FRONTEND engineer.

# STRICT RULES:
# 1. Generate ONLY React frontend code.
# 2. Use JavaScript or TypeScript for React components.
# 3. DO NOT generate backend code, APIs, servers, FastAPI, Express.
# 4. DO NOT create server.js or backend files.
# 5. Output ONLY frontend files.

# Return STRICT JSON ONLY:
# {
#   "files": [
#     { "filename": "...", "content": "..." }
#   ]
# }
# """

#     site_plan = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     user_prompt = f"""
# Site plan:
# {json.dumps(site_plan, indent=2)}

# Requirements:
# {json.dumps(requirements, indent=2)}

# Generate frontend React files now.
# """

#     response = llm.invoke([
#         SystemMessage(content=system_prompt),
#         HumanMessage(content=user_prompt)
#     ])

#     try:
#         result = extract_json(response.content)
#     except Exception as e:
#         return {
#             "validation_errors": [f"Frontend JSON parse failed: {str(e)}"]
#         }

#     files = result.get("files", [])

#     if not files:
#         return {
#             "validation_errors": ["Frontend generator returned no files"]
#         }

#     return {
#         "code_files": state.get("code_files", []) + files
#     }

# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json


# def extract_json(text: str):
#     start = text.find("{")
#     end = text.rfind("}") + 1
#     if start == -1 or end == -1:
#         raise ValueError("No JSON found in model output")
#     return json.loads(text[start:end])


# def coder_node(state: AgentState):
#     print("🔥 FULL FRONTEND + TAILWIND GENERATOR RUNNING")

#     llm = ChatOllama(
#         model="qwen2.5-coder",
#         temperature=0.2
#     )

#     system_prompt = """
# You are a senior frontend engineer.

# Generate a COMPLETE runnable React project using:

# - Vite
# - React
# - Tailwind CSS (fully configured)

# STRICT RULES:
# 1. Use Vite + React.
# 2. Include Tailwind CSS fully configured.
# 3. Include postcss.config.js.
# 4. Include tailwind.config.js.
# 5. Include index.css with Tailwind directives:
#    @tailwind base;
#    @tailwind components;
#    @tailwind utilities;
# 6. Include package.json with required dependencies.
# 7. Use modern React (createRoot).
# 8. DO NOT generate backend code.
# 9. DO NOT generate Express or FastAPI.
# 10. All file contents must be plain strings.
# 11. No JSON.stringify.
# 12. No backticks.
# 13. No markdown formatting.

# Return STRICT JSON only:

# {
#   "files": [
#     { "filename": "package.json", "content": "..." },
#     { "filename": "vite.config.js", "content": "..." },
#     { "filename": "postcss.config.js", "content": "..." },
#     { "filename": "tailwind.config.js", "content": "..." },
#     { "filename": "index.html", "content": "..." },
#     { "filename": "src/main.jsx", "content": "..." },
#     { "filename": "src/App.jsx", "content": "..." },
#     { "filename": "src/index.css", "content": "..." }
#   ]
# }
# """

#     user_prompt = f"""
# Project requirements:
# {json.dumps(state.get("requirements", {}), indent=2)}

# Generate a modern SaaS-style UI with clean layout and Tailwind styling.
# """

#     response = llm.invoke([
#         SystemMessage(content=system_prompt),
#         HumanMessage(content=user_prompt)
#     ])

#     print("FRONTEND RAW OUTPUT:", response.content)

#     try:
#         result = extract_json(response.content)
#     except Exception as e:
#         return {
#             "code_files": state.get("code_files", []),
#             "validation_errors": [f"Frontend JSON parse failed: {str(e)}"]
#         }

#     frontend_files = result.get("files", [])

#     if not frontend_files:
#         return {
#             "code_files": state.get("code_files", []),
#             "validation_errors": ["Frontend generator returned no files"]
#         }

#     return {
#         "code_files": state.get("code_files", []) + frontend_files
#     }

# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from backend.state import AgentState
# import json


# def extract_json(text: str):
#     """
#     Safely extract JSON object from LLM output
#     (handles ```json blocks automatically)
#     """
#     start = text.find("{")
#     end = text.rfind("}") + 1

#     if start == -1 or end == -1:
#         raise ValueError("No valid JSON found in frontend model output")

#     return json.loads(text[start:end])


def coder_node(state: AgentState):
    # Placeholder for frontend generation - returns dummy file for testing
    return {
        "code_files": state.get("code_files", []) + [
            {
                "filename": "index.html",
                "content": "<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello World</h1></body></html>"
            }
        ]
    }
