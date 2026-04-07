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


# from langchain_ollama import ChatOllama
# from pydantic import BaseModel, Field
# from typing import List


# class PagePlan(BaseModel):
#     pages: List[str] = Field(description="List of page names")


# def planner_agent(state):
#     print("🧠 Planning pages")

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     ).with_structured_output(PagePlan, method="json_schema")

# #     prompt = f"""
# # User request:
# # {state["user_prompt"]}

# # Generate minimum 5 clean page names.
# # Examples: Home, About, Features, Pricing, Contact
# # """

#     prompt = f"""
# User request:
# {state["user_prompt"]}

# You are generating page names for a modern SaaS website.

# STRICT RULES:

# 1. Return ONLY valid JSON.
# 2. Do NOT return explanations.
# 3. Do NOT return markdown.
# 4. Do NOT include comments.
# 5. Maximum 5 pages.
# 6. Page names must be PascalCase only.
# 7. No spaces.
# 8. No hyphens.
# 9. No special characters.
# 10. No long descriptive names.

# Correct format:

# {{
#   "pages": ["Home", "About", "Features", "Pricing", "Contact"]
# }}

# Return JSON only.
# """

    

#     plan = llm.invoke(prompt)

#     parsed = plan.model_dump()

#     print("✅ Planned pages:", parsed)

#     return {"site_plan": parsed}


# """
# planner.py  -  Site plan agent.

# Improvements over original:
# - Reads rich context from requirements (app_name, tagline, industry, features)
#   so the plan is coherent with what the analyzer extracted
# - SitePlan model carries more than just page names — colours, app_name, description
#   are forwarded so scaffold/pages nodes don't have to re-invent them
# - Parallel LLM call + immediate JSON repair fallback (never blocks the pipeline)
# - Dedup + PascalCase enforcement on the way out
# - Pages capped at 6 (router is cleaner, LLM less likely to hallucinate)
# - Deterministic fallback derived from requirements so the fallback is always relevant
# """

# from __future__ import annotations

# import json
# import logging
# import re
# from typing import List

# from langchain_ollama import ChatOllama
# from pydantic import BaseModel, Field, field_validator

# logger = logging.getLogger(__name__)


# # ==============================================================
# # Schema
# # ==============================================================

# class SitePlan(BaseModel):
#     app_name:        str       = Field(default="AI Builder")
#     description:     str       = Field(default="AI Generated SaaS")
#     pages:           List[str] = Field(default_factory=list)
#     primary_color:   str       = Field(default="#4f46e5")
#     secondary_color: str       = Field(default="#0ea5e9")
#     tone:            str       = Field(default="professional")

#     @field_validator("pages")
#     @classmethod
#     def clean_pages(cls, pages: List[str]) -> List[str]:
#         def to_pascal(name: str) -> str:
#             name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#             return "".join(w.capitalize() for w in name.split()) or name

#         seen: set[str] = set()
#         result: List[str] = []
#         for p in pages:
#             norm = to_pascal(p)
#             if norm and norm not in seen:
#                 seen.add(norm)
#                 result.append(norm)

#         if "Home" not in seen:
#             result.insert(0, "Home")

#         return result[:6]


# # ==============================================================
# # Helpers
# # ==============================================================

# _JSON_RE = re.compile(r"\{.*\}", re.DOTALL)


# def _repair_json(raw: str) -> dict:
#     cleaned = raw.strip()
#     try:
#         return json.loads(cleaned)
#     except json.JSONDecodeError:
#         pass
#     m = _JSON_RE.search(cleaned)
#     if m:
#         try:
#             return json.loads(m.group())
#         except json.JSONDecodeError:
#             pass
#     raise ValueError(f"Cannot parse JSON: {cleaned[:200]!r}")


# def _fallback_plan(requirements: dict) -> SitePlan:
#     """Build a sensible plan directly from analyzer output."""
#     pages = requirements.get("pages") or ["Home", "Features", "Pricing", "About", "Contact"]
#     return SitePlan(
#         app_name=requirements.get("app_name", "AI Builder"),
#         description=requirements.get("tagline", "AI Generated SaaS"),
#         pages=pages,
#         primary_color=requirements.get("primary_color", "#4f46e5"),
#         secondary_color=requirements.get("secondary_color", "#0ea5e9"),
#         tone=requirements.get("tone", "professional"),
#     )


# SYSTEM_PROMPT = """
# You are a senior information architect planning a modern SaaS website.

# Return ONLY valid JSON — no markdown, no explanation.

# Rules:
# - pages: PascalCase names, max 6, always include "Home".
# - app_name: short, memorable product name.
# - description: one sentence (the product tagline).
# - primary_color / secondary_color: 6-digit hex strings.
# - tone: professional | playful | bold | minimal.

# Example:
# {
#   "app_name": "Draftly",
#   "description": "AI-powered writing assistant for teams.",
#   "pages": ["Home", "Features", "Pricing", "Blog", "Contact"],
#   "primary_color": "#6366f1",
#   "secondary_color": "#0ea5e9",
#   "tone": "professional"
# }
# """


# # ==============================================================
# # Agent
# # ==============================================================

# def planner_agent(state: dict) -> dict:
#     logger.info("Planning site structure")

#     user_prompt:  str  = state.get("user_prompt", "")
#     requirements: dict = state.get("requirements", {})

#     # Build a rich context block so the LLM doesn't start from zero
#     context = (
#         "User request: " + user_prompt + "\n\n"
#         "Already extracted requirements:\n"
#         "  website_type: "    + requirements.get("website_type", "SaaS Landing Page") + "\n"
#         "  industry: "        + requirements.get("industry", "Technology") + "\n"
#         "  app_name: "        + requirements.get("app_name", "") + "\n"
#         "  tagline: "         + requirements.get("tagline", "") + "\n"
#         "  target_audience: " + requirements.get("target_audience", "") + "\n"
#         "  tone: "            + requirements.get("tone", "professional") + "\n"
#         "  suggested_pages: " + str(requirements.get("pages", [])) + "\n"
#         "  features: "        + str(requirements.get("features", [])) + "\n\n"
#         "Produce the final site plan JSON."
#     )

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0,
#         num_predict=256,
#     )

#     try:
#         response = llm.invoke([
#             {"role": "system",  "content": SYSTEM_PROMPT},
#             {"role": "user",    "content": context},
#         ])
#         raw  = response.content if hasattr(response, "content") else str(response)
#         data = _repair_json(raw)

#         # Merge: LLM plan wins for page names; requirements fill any gaps
#         plan = SitePlan(
#             app_name=data.get("app_name")        or requirements.get("app_name", "AI Builder"),
#             description=data.get("description")  or requirements.get("tagline", "AI Generated SaaS"),
#             pages=data.get("pages")              or requirements.get("pages", []),
#             primary_color=data.get("primary_color")   or requirements.get("primary_color", "#4f46e5"),
#             secondary_color=data.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
#             tone=data.get("tone")                or requirements.get("tone", "professional"),
#         )

#     except Exception as exc:
#         logger.warning("Planner LLM failed (%s); deriving plan from requirements", exc)
#         plan = _fallback_plan(requirements)

#     logger.info("Site plan: app=%s pages=%s", plan.app_name, plan.pages)
#     return {"site_plan": plan.model_dump()}

"""
planner.py  -  Site plan agent.

Improvements over original:
- Reads rich context from requirements (app_name, tagline, industry, features)
  so the plan is coherent with what the analyzer extracted
- SitePlan model carries more than just page names — colours, app_name, description
  are forwarded so scaffold/pages nodes don't have to re-invent them
- Parallel LLM call + immediate JSON repair fallback (never blocks the pipeline)
- Dedup + PascalCase enforcement on the way out
- Pages capped at 6 (router is cleaner, LLM less likely to hallucinate)
- Deterministic fallback derived from requirements so the fallback is always relevant
"""

from __future__ import annotations

import json
import logging
import re
from typing import List

from backend.llm_client import get_fast_llm
from pydantic import BaseModel, Field, field_validator

logger = logging.getLogger(__name__)


# ==============================================================
# Schema
# ==============================================================

class SitePlan(BaseModel):
    app_name:        str       = Field(default="AI Builder")
    description:     str       = Field(default="AI Generated SaaS")
    pages:           List[str] = Field(default_factory=list)
    primary_color:   str       = Field(default="#4f46e5")
    secondary_color: str       = Field(default="#0ea5e9")
    tone:            str       = Field(default="professional")

    @field_validator("pages")
    @classmethod
    def clean_pages(cls, pages: List[str]) -> List[str]:
        def to_pascal(name: str) -> str:
            name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
            return "".join(w.capitalize() for w in name.split()) or name

        seen: set[str] = set()
        result: List[str] = []
        for p in pages:
            norm = to_pascal(p)
            if norm and norm not in seen:
                seen.add(norm)
                result.append(norm)

        if "Home" not in seen:
            result.insert(0, "Home")

        return result[:12]


# ==============================================================
# Helpers
# ==============================================================

_JSON_RE = re.compile(r"\{.*\}", re.DOTALL)


def _repair_json(raw: str) -> dict:
    cleaned = raw.strip()
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        pass
    m = _JSON_RE.search(cleaned)
    if m:
        try:
            return json.loads(m.group())
        except json.JSONDecodeError:
            pass
    raise ValueError(f"Cannot parse JSON: {cleaned[:200]!r}")


def _fallback_plan(requirements: dict) -> SitePlan:
    """Build a sensible plan directly from analyzer output."""
    pages = requirements.get("pages") or ["Home", "Features", "Pricing", "About", "Contact"]
    return SitePlan(
        app_name=requirements.get("app_name", "AI Builder"),
        description=requirements.get("tagline", "AI Generated SaaS"),
        pages=pages,
        primary_color=requirements.get("primary_color", "#4f46e5"),
        secondary_color=requirements.get("secondary_color", "#0ea5e9"),
        tone=requirements.get("tone", "professional"),
    )


SYSTEM_PROMPT = """
You are a senior information architect planning a modern SaaS website.

Return ONLY valid JSON — no markdown, no explanation.

Rules:
- pages: PascalCase names, 8-12 pages covering ALL user requirements. Always include "Home".
- app_name: short, memorable product name.
- description: one sentence (the product tagline).
- primary_color / secondary_color: 6-digit hex strings.
- tone: professional | playful | bold | minimal.

Example:
{
  "app_name": "Draftly",
  "description": "AI-powered writing assistant for teams.",
  "pages": ["Home", "Features", "Pricing", "Blog", "About", "Contact", "Login", "Signup", "Dashboard", "Settings"],
  "primary_color": "#6366f1",
  "secondary_color": "#0ea5e9",
  "tone": "professional"
}
"""


# ==============================================================
# Agent
# ==============================================================

def planner_agent(state: dict) -> dict:
    logger.info("Planning site structure")

    user_prompt:  str  = state.get("user_prompt", "")
    requirements: dict = state.get("requirements", {})

    # Build a rich context block so the LLM doesn't start from zero
    context = (
        "User request: " + user_prompt + "\n\n"
        "Already extracted requirements:\n"
        "  website_type: "    + requirements.get("website_type", "SaaS Landing Page") + "\n"
        "  industry: "        + requirements.get("industry", "Technology") + "\n"
        "  app_name: "        + requirements.get("app_name", "") + "\n"
        "  tagline: "         + requirements.get("tagline", "") + "\n"
        "  target_audience: " + requirements.get("target_audience", "") + "\n"
        "  tone: "            + requirements.get("tone", "professional") + "\n"
        "  suggested_pages: " + str(requirements.get("pages", [])) + "\n"
        "  features: "        + str(requirements.get("features", [])) + "\n\n"
        "Produce the final site plan JSON."
    )

    llm = get_fast_llm(temperature=0, max_tokens=256)

    try:
        response = llm.invoke([
            {"role": "system",  "content": SYSTEM_PROMPT},
            {"role": "user",    "content": context},
        ])
        raw  = response.content if hasattr(response, "content") else str(response)
        data = _repair_json(raw)

        # Merge: LLM plan wins for page names; requirements fill any gaps
        plan = SitePlan(
            app_name=data.get("app_name")        or requirements.get("app_name", "AI Builder"),
            description=data.get("description")  or requirements.get("tagline", "AI Generated SaaS"),
            pages=data.get("pages")              or requirements.get("pages", []),
            primary_color=data.get("primary_color")   or requirements.get("primary_color", "#4f46e5"),
            secondary_color=data.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
            tone=data.get("tone")                or requirements.get("tone", "professional"),
        )

    except Exception as exc:
        logger.warning("Planner LLM failed (%s); deriving plan from requirements", exc)
        plan = _fallback_plan(requirements)

    logger.info("Site plan: app=%s pages=%s", plan.app_name, plan.pages)
    return {"site_plan": plan.model_dump()}