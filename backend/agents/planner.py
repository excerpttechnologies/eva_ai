# from langchain_ollama import ChatOllama
# from pydantic import BaseModel, Field
# from typing import List

# class SiteBlueprint(BaseModel):
#     components: List[str] = Field(description="List of React components to build, e.g., ['Navbar', 'Hero']")
#     current_task: str = Field(description="The first component to start with")

# def planner_agent(state):
#     # Use local qwen2.5:7b-instruct for planning
#     llm = ChatOllama(model="qwen2.5:3b-instruct", temperature=0).with_structured_output(SiteBlueprint, method="json_schema")
    
#     prompt = f"Create a blueprint for a {state['requirements']['website_type']} in the {state['requirements']['industry']} industry. Research data: {state['research_context']}"
    
#     plan = llm.invoke(prompt)
#     return {"site_plan": plan.model_dump()}


# latest version

# from langchain_ollama import ChatOllama
# import json

# def planner_agent(state):
#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     prompt = f"""
# User request:
# {state["user_prompt"]}

# Return STRICT JSON:
# {{
#   "pages": ["Home", "About", "Contact"]
# }}

# Maximum 5 pages.
# Only page names.
# """

#     response = llm.invoke(prompt)

#     try:
#         start = response.content.find("{")
#         end = response.content.rfind("}") + 1
#         parsed = json.loads(response.content[start:end])
#     except:
#         parsed = {"pages": ["Home"]}

#     return {"site_plan": parsed}


from langchain_ollama import ChatOllama
from pydantic import BaseModel, Field
from typing import List


class PagePlan(BaseModel):
    pages: List[str] = Field(description="List of page names")


def planner_agent(state):
    print("🧠 Planning pages")

    llm = ChatOllama(
        model="qwen2.5:3b-instruct",
        temperature=0
    ).with_structured_output(PagePlan, method="json_schema")

#     prompt = f"""
# User request:
# {state["user_prompt"]}

# Generate minimum 5 clean page names.
# Examples: Home, About, Features, Pricing, Contact
# """

    prompt = f"""
User request:
{state["user_prompt"]}

You are generating page names for a modern SaaS website.

STRICT RULES:

1. Return ONLY valid JSON.
2. Do NOT return explanations.
3. Do NOT return markdown.
4. Do NOT include comments.
5. Maximum 5 pages.
6. Page names must be PascalCase only.
7. No spaces.
8. No hyphens.
9. No special characters.
10. No long descriptive names.

Correct format:

{{
  "pages": ["Home", "About", "Features", "Pricing", "Contact"]
}}

Return JSON only.
"""

    

    plan = llm.invoke(prompt)

    parsed = plan.model_dump()

    print("✅ Planned pages:", parsed)

    return {"site_plan": parsed}