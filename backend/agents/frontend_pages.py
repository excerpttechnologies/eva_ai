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

# def frontend_pages_node(state):
#     print("🔥 Generating frontend pages")

#     pages = state.get("site_plan", {}).get("pages", [])

#     llm = ChatOllama(
#         model="deepseek-coder:6.7b",
#         temperature=0.2
#     )

#     prompt = f"""
# Create React page components inside src/pages.

# Pages:
# {pages}

# Return JSON:
# {{
#   "files": [
#     {{ "filename": "src/pages/Home.jsx", "content": "..." }}
#   ]
# }}
# """

#     response = llm.invoke(prompt)
#     result = extract_json(response.content)

#     prefixed = []

#     for file in result.get("files", []):
#         prefixed.append({
#             "filename": f"frontend/{file['filename']}",
#             "content": file["content"]
#         })

#     return {
#         "code_files": state.get("code_files", []) + prefixed
#     }

# from langchain_ollama import ChatOllama
# import re


# def to_pascal_case(name):
#     name = re.sub(r'[^a-zA-Z0-9 ]', ' ', name)
#     words = name.replace("-", " ").replace("_", " ").split()
#     return "".join(word.capitalize() for word in words)

# def clean_code(content: str) -> str:
#     """
#     Removes markdown fences and extra backticks from LLM output
#     """
#     if not content:
#         return content

#     # Remove ```jsx, ```js, ```ts etc
#     content = re.sub(r"```[a-zA-Z]*", "", content)

#     # Remove closing ```
#     content = content.replace("```", "")

#     return content.strip()

# def frontend_pages_node(state):
#     print("🔥 Generating frontend pages (STABLE MODE)")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined"]
#         }

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     generated_files = []

#     for raw_page in pages:
#         page = to_pascal_case(raw_page)
        
#         prompt = f"""
# Generate a React 18 page component called {page}.

# Requirements:
# - Export default function {page}
# - Use Tailwind CSS
# - Clean SaaS layout
# - No markdown
# - No explanation
# - Only raw JSX code
# """

#         response = llm.invoke(prompt)
#         # code = response.content.strip()
#         code = clean_code(response.content)

#         generated_files.append({
#             "filename": f"frontend/src/pages/{page}.jsx",
#             "content": code
#         })

#     print(f"✅ Generated {len(generated_files)} pages")

#     return {
#         "code_files": state.get("code_files", []) + generated_files
#     }

# from langchain_ollama import ChatOllama
# import re

# def clean_code(content: str) -> str:
#     """
#     Removes markdown fences and extra backticks from LLM output
#     """
#     if not content:
#         return content

#     # Remove ```jsx, ```js, ```ts etc
#     content = re.sub(r"```[a-zA-Z]*", "", content)

#     # Remove closing ```
#     content = content.replace("```", "")

#     return content.strip()


# def frontend_pages_node(state):
#     print("🔥 Generating frontend pages (STABLE MODE)")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined"]
#         }

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     generated_files = []

#     for page in pages:
# #         prompt = f"""
# # # Generate a React 18 page component called {page}.

# # # Requirements:
# # # - Export default function {page}
# # # - Use Tailwind CSS
# # # - Clean SaaS layout
# # # - No markdown
# # # - No explanation
# # # - Only raw JSX code
# # # """
#           prompt = f"""
# Generate a PRODUCTION-READY React 18 page component called {page}.

# STRICT REQUIREMENTS:

# The page must include MULTIPLE sections:

# 1. Hero Section
#    - Large heading
#    - Subheading
#    - CTA button
#    - Background gradient

# 2. Features Section
#    - At least 3 feature cards
#    - Each with title and description
#    - Responsive grid layout

# 3. Call To Action Section
#    - Bold message
#    - Button

# 4. Footer Section
#    - Simple links or copyright text

# Design rules:
# - Use Tailwind CSS
# - Use modern SaaS style
# - Use spacing (py-20, px-6, container mx-auto)
# - Use responsive grid (md:grid-cols-3)
# - Use shadows and rounded-xl
# - Clean typography
# - Proper layout structure

# Code rules:
# - Export default function {page}
# - Valid JSX
# - No markdown
# - Do NOT include // or /* */ or # comments.
# - Do NOT include explanations.
# - No backticks
# - No explanation
# - Only raw JSX code
# """


#           response = llm.invoke(prompt)

#         # ✅ CLEAN THE OUTPUT HERE
#           code = clean_code(response.content)

#           generated_files.append({
#             "filename": f"frontend/src/pages/{page}.jsx",
#             "content": code
#         })

#     print(f"✅ Generated {len(generated_files)} pages")

#     return {
#         "code_files": state.get("code_files", []) + generated_files
#     }

# from langchain_ollama import ChatOllama
# from backend.state import AgentState
# import re


# def clean_code(content: str) -> str:
#     """
#     Cleans LLM output:
#     - Removes markdown fences
#     - Removes comments
#     - Removes accidental backticks
#     """
#     if not content:
#         return content

#     # Remove markdown fences like ```jsx
#     content = re.sub(r"```[a-zA-Z]*", "", content)
#     content = content.replace("```", "")

#     # Remove JS comments
#     content = re.sub(r"//.*", "", content)
#     content = re.sub(r"/\*[\s\S]*?\*/", "", content)

#     return content.strip()


# def frontend_pages_node(state: AgentState):
#     print("🔥 Generating frontend pages (PRODUCTION MODE)")

#     requirements = state.get("requirements", {})
#     pages = state.get("site_plan", {}).get("pages", [])
#     user_prompt = state.get("user_prompt", "")

#     industry = requirements.get("industry", "")
#     website_type = requirements.get("website_type", "")

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined"]
#         }

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     generated_files = []

#     for page in pages:

#         prompt = f"""
# User Request:
# {user_prompt}

# Website Type: {website_type}
# Industry: {industry}

# Generate a PRODUCTION-READY React 18 page component called {page}.

# IMPORTANT:
# - Do NOT import components from Tailwind plugins like @tailwindcss/forms or @tailwindcss/typography. Always use standard HTML elements (div, section, header) with Tailwind className strings for layout and styling."
# - Content must be specific to the {industry} industry.
# - Do NOT generate generic placeholder text.
# - Use realistic terminology.
# - Avoid phrases like "Welcome to our website".

# STRUCTURE REQUIREMENTS:

# 1. Hero Section
#    - Large heading
#    - Subheading
#    - CTA button
#    - Gradient background

# 2. Features Section
#    - Minimum 3 feature cards
#    - Responsive grid (md:grid-cols-3)
#    - Shadow + rounded-xl styling

# 3. Call To Action Section
#    - Bold message
#    - Button

# 4. Footer Section
#    - Simple footer

# DESIGN RULES:
# - Tailwind CSS only
# - Use container mx-auto
# - Use py-20, px-6 spacing
# - Modern SaaS layout
# - Clean typography
# - Responsive layout

# CODE RULES:
# - Export default function {page}
# - Valid JSX
# - No markdown
# - No comments
# - No explanation
# - No backticks
# - Do NOT include explanations.
# - Only raw JSX code
# - Only pure JSX code
# """

#         response = llm.invoke(prompt)

#         code = clean_code(response.content)

#         generated_files.append({
#             "filename": f"frontend/src/pages/{page}.jsx",
#             "content": code
#         })

#     print(f"✅ Generated {len(generated_files)} advanced pages")

#     return {
#         "code_files": state.get("code_files", []) + generated_files
#     }


# from langchain_ollama import ChatOllama
# from backend.state import AgentState
# import re


# def clean_code(content: str) -> str:
#     """
#     Cleans LLM output:
#     - Removes markdown fences
#     - Removes comments
#     - Removes accidental backticks
#     """
#     if not content:
#         return content

#     # Remove markdown fences
#     content = re.sub(r"```[a-zA-Z]*", "", content)
#     content = content.replace("```", "")

#     # Remove JS single-line comments
#     content = re.sub(r"//.*", "", content)

#     # Remove JS multi-line comments
#     content = re.sub(r"/\*[\s\S]*?\*/", "", content)

#     return content.strip()


# def frontend_pages_node(state: AgentState):
#     print("🔥 Generating frontend pages (ENTERPRISE MODE)")

#     requirements = state.get("requirements", {})
#     pages = state.get("site_plan", {}).get("pages", [])
#     user_prompt = state.get("user_prompt", "")

#     industry = requirements.get("industry", "")
#     website_type = requirements.get("website_type", "")

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined"]
#         }

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0,
#         num_predict=2048  # 🔥 Prevent half-generated files
#     )

#     generated_files = []

#     for page in pages:

#         prompt = f"""
# User Request:
# {user_prompt}

# Website Type: {website_type}
# Industry: {industry}

# You are generating a PRODUCTION React 18 page called {page}.

# AVAILABLE UI COMPONENTS:
# - Button from "../components/ui/Button"
# - Card from "../components/ui/Card"

# You MUST:
# - Import Button
# - Import Card
# - Use Card for feature boxes
# - Use Button for CTA

# STRUCTURE:
# - Single root <div className="min-h-screen">
# - Hero section (gradient background)
# - Features section (3 cards minimum)
# - CTA section
# - Footer section

# CONTENT RULES:
# - Content must be specific to the {industry} industry
# - No generic text
# - Use realistic business terminology

# DESIGN RULES:
# - Tailwind CSS only
# - Use container mx-auto
# - Use py-20 px-6
# - Use md:grid-cols-3
# - Use rounded-xl and shadow-lg

# CODE RULES:
# - Include necessary imports
# - Do NOT import React
# - Do NOT use markdown
# - No comments
# - No explanation
# - No backticks
# - Valid JSX only
# - Must return ONE root div
# - Only pure code output
# """

#         try:
#             response = llm.invoke(prompt)
#             code = clean_code(response.content)

#             # 🛡 SAFETY: Ensure single root wrapper
#             if "min-h-screen" not in code:
#                 code = code.replace(
#                     "return (",
#                     'return (\n    <div className="min-h-screen">\n'
#                 )
#                 if code.endswith(")"):
#                     code = code[:-1] + "\n    </div>\n  )"

#             # 🛡 SAFETY: Ensure imports exist
#             if "import Button" not in code:
#                 code = 'import Button from "../components/ui/Button"\nimport Card from "../components/ui/Card"\n\n' + code

#             generated_files.append({
#                 "filename": f"frontend/src/pages/{page}.jsx",
#                 "content": code
#             })

#         except Exception as e:
#             print(f"❌ Failed generating page {page}: {e}")

#     print(f"✅ Generated {len(generated_files)} enterprise pages")

#     return {
#         "code_files": state.get("code_files", []) + generated_files
#     }

# from langchain_ollama import ChatOllama
# from backend.state import AgentState
# import re


# def clean_code(content: str) -> str:
#     if not content:
#         return content

#     content = re.sub(r"```[a-zA-Z]*", "", content)
#     content = content.replace("```", "")
#     content = re.sub(r"//.*", "", content)
#     content = re.sub(r"/\*[\s\S]*?\*/", "", content)

#     return content.strip()


# def ensure_structure(code: str, page: str) -> str:
#     if "export default function" not in code:
#         code = f"""
# export default function {page}() {{
#   return (
# {code}
#   )
# }}
# """
#     return code


# def frontend_pages_node(state: AgentState):
#     print("🔥 Generating frontend pages (STABLE MODE)")

#     requirements = state.get("requirements", {})
#     pages = state.get("site_plan", {}).get("pages", [])
#     user_prompt = state.get("user_prompt", "")

#     industry = requirements.get("industry", "")

#     if not pages:
#         return {"validation_errors": ["No pages defined"]}

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0,
#         num_predict=2048
#     )

#     generated_files = []

#     for page in pages:

#         prompt = f"""
# User Request:
# {user_prompt}

# Industry: {industry}

# Generate a React 18 page component named {page}.

# Use:
# - Button from "../components/ui/Button"
# - Card from "../components/ui/Card"

# Structure:
# - Hero section
# - 3 feature cards
# - CTA section

# Must:
# - Export default function
# - Return one root div with className="min-h-screen"
# - Valid JSX
# - No markdown
# - No comments
# - Only code
# """

#         response = llm.invoke(prompt)
#         code = clean_code(response.content)
#         code = ensure_structure(code, page)

#         if "import Button" not in code:
#             code = f'import Button from "../components/ui/Button"\nimport Card from "../components/ui/Card"\n\n' + code

#         generated_files.append({
#             "filename": f"frontend/src/pages/{page}.jsx",
#             "content": code
#         })

#     print(f"✅ Generated {len(generated_files)} stable pages")

#     return {
#         "code_files": state.get("code_files", []) + generated_files
#     }


from langchain_ollama import ChatOllama
from backend.state import AgentState
import re


def clean_code(content: str) -> str:
    if not content:
        return ""

    # Remove markdown
    content = re.sub(r"```[a-zA-Z]*", "", content)
    content = content.replace("```", "")

    # Remove comments
    content = re.sub(r"//.*", "", content)
    content = re.sub(r"/\*[\s\S]*?\*/", "", content)

    # Remove explanations after JSX
    content = content.split("This code")[0]

    return content.strip()


def extract_jsx_body(code: str) -> str:
    """
    Extract only JSX inside return(...)
    """

    match = re.search(r"return\s*\(([\s\S]*)\)\s*;", code)
    if match:
        return match.group(1).strip()

    # fallback: if model just returned JSX
    return code.strip()


def frontend_pages_node(state: AgentState):
    print("🔥 Generating frontend pages (STRUCTURE CONTROL MODE)")

    pages = state.get("site_plan", {}).get("pages", [])
    user_prompt = state.get("user_prompt", "")
    requirements = state.get("requirements", {})

    industry = requirements.get("industry", "")

    if not pages:
        return {"validation_errors": ["No pages defined"]}

    llm = ChatOllama(
        model="qwen2.5:3b-instruct",
        temperature=0,
        num_predict=2048
    )

    generated_files = []

    for page in pages:

        prompt = f"""
User Request:
{user_prompt}

Industry: {industry}

Generate ONLY the JSX body for a React page named {page}.
Generate ONLY JSX body.

STRICT RULES:
- Do NOT use undefined variables.
- Do NOT use products.map unless you define:
  const products = [...]
- Do NOT use useState.
- Do NOT use external functions like addToCart.
- Do NOT assume backend.
- Use static sample data inside the component.
- All variables must be defined locally.

Do NOT include:
- export
- function
- imports
- explanations
- comments

Only return JSX starting with:
<div className="min-h-screen">
"""

        response = llm.invoke(prompt)

        raw = clean_code(response.content)
        jsx_body = extract_jsx_body(raw)

        final_code = f"""import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function {page}() {{
  return (
{jsx_body}
  )
}}
"""

        generated_files.append({
            "filename": f"frontend/src/pages/{page}.jsx",
            "content": final_code
        })

    print(f"✅ Generated {len(generated_files)} stable pages")

    return {
        "code_files": state.get("code_files", []) + generated_files
    }