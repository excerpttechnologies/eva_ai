# from langchain_ollama import ChatOllama
# from pydantic import BaseModel, Field
# from typing import List, Dict

# # This remains exactly as you had it
# class WebsiteRequirements(BaseModel):
#     website_type: str = Field(description="Type of website, e.g., SaaS Landing Page")
#     industry: str = Field(description="Business sector")
#     pages: List[str] = Field(description="Core pages needed")
#     tech_stack: Dict[str, str] = Field(description="Frontend and styling choices")

# def analyze_requirements(state):
#     # Initialize Qwen2.5-Coder via Ollama
#     # temperature=0 ensures deterministic, consistent JSON output
#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct", 
#         temperature=0
#     ).with_structured_output(WebsiteRequirements, method="json_schema")
    
#     # Run the analysis using the user prompt from state
#     structured_data = llm.invoke(state["user_prompt"])
    
#     # Return the data as a dictionary to be stored in the LangGraph state
#     return {"requirements": structured_data.model_dump()}

from langchain_ollama import ChatOllama
from langchain_core.messages import SystemMessage, HumanMessage
from pydantic import BaseModel, Field
from typing import List, Dict


class WebsiteRequirements(BaseModel):
    website_type: str = Field(description="Type of website")
    industry: str = Field(description="Business sector")
    pages: List[str] = Field(description="Core pages needed")
    tech_stack: Dict[str, str] = Field(description="Frontend and styling choices")


def analyze_requirements(state):
    print("🔎 Analyzing user requirements")

    llm = ChatOllama(
        model="qwen2.5:3b-instruct",
        temperature=0
    ).with_structured_output(WebsiteRequirements, method="json_schema")

    system_prompt = r"""
You are a senior product architect.

Extract structured website requirements from the user prompt.

Rules:
- All content strings must be valid JSON strings
- Escape all quotes properly
- Do not include unescaped backslashes
- Do not include Windows paths
- Do not use template strings
- Do not use regex patterns
- Do not include \ unless escaped as \\
- Identify website type clearly (e.g., SaaS Landing Page, Portfolio, E-commerce)
- Identify industry
- Extract clear page names (Home, About, Contact, Pricing, etc.)
- Normalize page names to PascalCase (e.g., AboutUs, ContactUs)
- Always include Home page if missing
- Tech stack should default to:
  {
    "frontend": "React + Vite",
    "styling": "Tailwind CSS",
    "backend": "Express + TypeScript"
  }

Return ONLY structured JSON.
"""

    user_prompt = state["user_prompt"]

    structured_data = llm.invoke([
        SystemMessage(content=system_prompt),
        HumanMessage(content=user_prompt)
    ])

    result = structured_data.model_dump()

    # ✅ Safety fallback
    if "Home" not in result["pages"]:
        result["pages"].insert(0, "Home")

    print("✅ Extracted requirements:", result)

    return {"requirements": result}