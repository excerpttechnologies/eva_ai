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

# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage, HumanMessage
# from pydantic import BaseModel, Field
# from typing import List, Dict


# class WebsiteRequirements(BaseModel):
#     website_type: str = Field(description="Type of website")
#     industry: str = Field(description="Business sector")
#     pages: List[str] = Field(description="Core pages needed")
#     tech_stack: Dict[str, str] = Field(description="Frontend and styling choices")


# def analyze_requirements(state):
#     print("🔎 Analyzing user requirements")

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     ).with_structured_output(WebsiteRequirements, method="json_schema")

#     system_prompt = """
# You are a senior product architect.

# Extract structured website requirements from the user prompt.

# Rules:
# - All content strings must be valid JSON strings
# - Escape all quotes properly
# - Do not include unescaped backslashes
# - Do not include Windows paths
# - Do not use template strings
# - Do not use regex patterns
# - Do not include \ unless escaped as \\
# - Identify website type clearly (e.g., SaaS Landing Page, Portfolio, E-commerce)
# - Identify industry
# - Extract clear page names (Home, About, Contact, Pricing, etc.)
# - Normalize page names to PascalCase (e.g., AboutUs, ContactUs)
# - Always include Home page if missing
# - Tech stack should default to:
#   {
#     "frontend": "React + Vite",
#     "styling": "Tailwind CSS",
#     "backend": "Express + TypeScript"
#   }

# Return ONLY structured JSON.
# """

#     user_prompt = state["user_prompt"]

#     structured_data = llm.invoke([
#         SystemMessage(content=system_prompt),
#         HumanMessage(content=user_prompt)
#     ])

#     result = structured_data.model_dump()

#     # ✅ Safety fallback
#     if "Home" not in result["pages"]:
#         result["pages"].insert(0, "Home")

#     print("✅ Extracted requirements:", result)

#     return {"requirements": result}

# """
# analyzer.py  -  Senior product architect agent.

# Improvements over original:
# - Parallel-safe: pure function, no side-effects
# - Rich Pydantic model with colour palette, font, tone, and nav meta
# - Strict JSON repair via regex fallback (handles partial LLM output)
# - Hard page-name normalisation (PascalCase, dedup, Home guaranteed)
# - Meaningful defaults instead of empty strings
# - Detailed system prompt with few-shot example
# - Full logging instead of bare print()
# """

# from __future__ import annotations

# import json
# import logging
# import re
# from typing import Dict, List, Optional

# from langchain_core.messages import HumanMessage, SystemMessage
# from langchain_ollama import ChatOllama
# from pydantic import BaseModel, Field, field_validator

# logger = logging.getLogger(__name__)


# # ==============================================================
# # Schema
# # ==============================================================

# class WebsiteRequirements(BaseModel):
#     website_type:    str            = Field(description="Type of website, e.g. SaaS Landing Page, Portfolio, E-commerce")
#     industry:        str            = Field(description="Business sector, e.g. FinTech, HealthTech, EdTech")
#     app_name:        str            = Field(description="Short product / brand name, e.g. Draftly")
#     tagline:         str            = Field(description="One-sentence value proposition")
#     pages:           List[str]      = Field(description="PascalCase page names, max 6, always includes Home")
#     primary_color:   str            = Field(default="#4f46e5", description="Hex primary brand colour")
#     secondary_color: str            = Field(default="#0ea5e9", description="Hex secondary brand colour")
#     tone:            str            = Field(default="professional", description="Copy tone: professional | playful | bold | minimal")
#     target_audience: str            = Field(default="general", description="Primary user persona")
#     tech_stack:      Dict[str, str] = Field(description="frontend, styling, backend choices")
#     nav_cta:         str            = Field(default="Get Started", description="Primary navbar CTA label")
#     features:        List[str]      = Field(default_factory=list, description="Up to 6 key product features")

#     @field_validator("pages")
#     @classmethod
#     def normalise_pages(cls, pages: List[str]) -> List[str]:
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

#     @field_validator("primary_color", "secondary_color")
#     @classmethod
#     def validate_hex(cls, v: str) -> str:
#         if not re.match(r"^#[0-9a-fA-F]{6}$", v):
#             return "#4f46e5"
#         return v


# # ==============================================================
# # Helpers
# # ==============================================================

# _JSON_RE = re.compile(r"\{.*\}", re.DOTALL)

# DEFAULT_TECH_STACK = {
#     "frontend": "React + Vite + TypeScript",
#     "styling":  "Tailwind CSS",
#     "backend":  "FastAPI + Python",
# }

# DEFAULT_REQUIREMENTS = WebsiteRequirements(
#     website_type="SaaS Landing Page",
#     industry="Technology",
#     app_name="AI Builder",
#     tagline="Build faster with AI.",
#     pages=["Home", "Features", "Pricing", "About", "Contact"],
#     tone="professional",
#     target_audience="developers and startups",
#     tech_stack=DEFAULT_TECH_STACK,
#     nav_cta="Get Started",
#     features=["Fast setup", "AI-powered", "Scalable infrastructure"],
# )

# SYSTEM_PROMPT = """
# You are a senior product architect who extracts structured website requirements from a user description.

# Rules:
# 1. Return ONLY valid JSON — no markdown, no explanation.
# 2. All strings must be plain ASCII-safe JSON strings.
# 3. pages: PascalCase names only (e.g. "AboutUs"), max 6, always include "Home".
# 4. primary_color and secondary_color: valid 6-digit hex strings (e.g. "#4f46e5").
# 5. tone: one of professional | playful | bold | minimal.
# 6. tech_stack defaults: { "frontend": "React + Vite + TypeScript", "styling": "Tailwind CSS", "backend": "FastAPI + Python" }
# 7. features: up to 6 short feature names (3–5 words each).

# Example output:
# {
#   "website_type": "SaaS Landing Page",
#   "industry": "FinTech",
#   "app_name": "PayFlow",
#   "tagline": "Accept payments in seconds.",
#   "pages": ["Home", "Features", "Pricing", "Contact"],
#   "primary_color": "#0ea5e9",
#   "secondary_color": "#6366f1",
#   "tone": "professional",
#   "target_audience": "small business owners",
#   "tech_stack": { "frontend": "React + Vite + TypeScript", "styling": "Tailwind CSS", "backend": "FastAPI + Python" },
#   "nav_cta": "Start Free Trial",
#   "features": ["Instant payouts", "Multi-currency support", "Fraud detection", "One-click checkout"]
# }
# """


# def _repair_json(raw: str) -> dict:
#     """Try strict parse, then regex-extract the first {...} block."""
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
#     raise ValueError(f"Cannot extract JSON from LLM output: {cleaned[:200]!r}")


# def _build_requirements(data: dict) -> WebsiteRequirements:
#     """Merge LLM data with sensible defaults and validate."""
#     merged = {
#         "tech_stack":      DEFAULT_TECH_STACK,
#         "primary_color":   "#4f46e5",
#         "secondary_color": "#0ea5e9",
#         "tone":            "professional",
#         "target_audience": "general",
#         "nav_cta":         "Get Started",
#         "features":        [],
#         **data,
#     }
#     return WebsiteRequirements(**merged)


# # ==============================================================
# # Agent
# # ==============================================================

# def analyze_requirements(state: dict) -> dict:
#     logger.info("Analyzing user requirements")

#     user_prompt: str = state.get("user_prompt", "")
#     if not user_prompt.strip():
#         logger.warning("Empty user_prompt; using defaults")
#         return {"requirements": DEFAULT_REQUIREMENTS.model_dump()}

#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0,
#         num_predict=512,
#     )

#     try:
#         response = llm.invoke([
#             SystemMessage(content=SYSTEM_PROMPT),
#             HumanMessage(content=user_prompt),
#         ])
#         raw  = response.content if hasattr(response, "content") else str(response)
#         data = _repair_json(raw)
#         reqs = _build_requirements(data)
#         logger.info("Requirements extracted: type=%s industry=%s pages=%s",
#                     reqs.website_type, reqs.industry, reqs.pages)
#         return {"requirements": reqs.model_dump()}

#     except Exception as exc:
#         logger.warning("Analyzer LLM failed (%s); using defaults", exc)
#         return {"requirements": DEFAULT_REQUIREMENTS.model_dump()}

"""
analyzer.py  -  Senior product architect agent.

Improvements over original:
- Parallel-safe: pure function, no side-effects
- Rich Pydantic model with colour palette, font, tone, and nav meta
- Strict JSON repair via regex fallback (handles partial LLM output)
- Hard page-name normalisation (PascalCase, dedup, Home guaranteed)
- Meaningful defaults instead of empty strings
- Detailed system prompt with few-shot example
- Full logging instead of bare print()
"""

from __future__ import annotations

import json
import logging
import re
from typing import Dict, List, Optional

from langchain_core.messages import HumanMessage, SystemMessage
from backend.llm_client import get_fast_llm
from pydantic import BaseModel, Field, field_validator

logger = logging.getLogger(__name__)


# ==============================================================
# Schema
# ==============================================================

class WebsiteRequirements(BaseModel):
    website_type:    str            = Field(description="Type of website, e.g. SaaS Landing Page, Portfolio, E-commerce")
    industry:        str            = Field(description="Business sector, e.g. FinTech, HealthTech, EdTech")
    app_name:        str            = Field(description="Short product / brand name, e.g. Draftly")
    tagline:         str            = Field(description="One-sentence value proposition")
    pages:           List[str]      = Field(description="PascalCase page names, max 6, always includes Home")
    primary_color:   str            = Field(default="#4f46e5", description="Hex primary brand colour")
    secondary_color: str            = Field(default="#0ea5e9", description="Hex secondary brand colour")
    tone:            str            = Field(default="professional", description="Copy tone: professional | playful | bold | minimal")
    target_audience: str            = Field(default="general", description="Primary user persona")
    tech_stack:      Dict[str, str] = Field(description="frontend, styling, backend choices")
    nav_cta:         str            = Field(default="Get Started", description="Primary navbar CTA label")
    features:        List[str]      = Field(default_factory=list, description="Up to 6 key product features")

    @field_validator("pages")
    @classmethod
    def normalise_pages(cls, pages: List[str]) -> List[str]:
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

    @field_validator("primary_color", "secondary_color")
    @classmethod
    def validate_hex(cls, v: str) -> str:
        if not re.match(r"^#[0-9a-fA-F]{6}$", v):
            return "#4f46e5"
        return v


# ==============================================================
# Helpers
# ==============================================================

_JSON_RE = re.compile(r"\{.*\}", re.DOTALL)

DEFAULT_TECH_STACK = {
    "frontend": "React + Vite + TypeScript",
    "styling":  "Tailwind CSS",
    "backend":  "FastAPI + Python",
}

DEFAULT_REQUIREMENTS = WebsiteRequirements(
    website_type="SaaS Landing Page",
    industry="Technology",
    app_name="AI Builder",
    tagline="Build faster with AI.",
    pages=["Home", "Features", "Pricing", "About", "Contact"],
    tone="professional",
    target_audience="developers and startups",
    tech_stack=DEFAULT_TECH_STACK,
    nav_cta="Get Started",
    features=["Fast setup", "AI-powered", "Scalable infrastructure"],
)

SYSTEM_PROMPT = """
You are a senior product architect who extracts structured website requirements from a user description.

Rules:
1. Return ONLY valid JSON — no markdown, no explanation.
2. All strings must be plain ASCII-safe JSON strings.
3. pages: PascalCase names only (e.g. "AboutUs"), 8-12 pages covering all user requirements, always include "Home".
4. primary_color and secondary_color: valid 6-digit hex strings (e.g. "#4f46e5").
5. tone: one of professional | playful | bold | minimal.
6. tech_stack defaults: { "frontend": "React + Vite + TypeScript", "styling": "Tailwind CSS", "backend": "FastAPI + Python" }
7. features: up to 6 short feature names (3–5 words each).

Example output:
{
  "website_type": "SaaS Landing Page",
  "industry": "FinTech",
  "app_name": "PayFlow",
  "tagline": "Accept payments in seconds.",
  "pages": ["Home", "Features", "Pricing", "About", "Contact", "Login", "Signup", "Dashboard"],
  "primary_color": "#0ea5e9",
  "secondary_color": "#6366f1",
  "tone": "professional",
  "target_audience": "small business owners",
  "tech_stack": { "frontend": "React + Vite + TypeScript", "styling": "Tailwind CSS", "backend": "FastAPI + Python" },
  "nav_cta": "Start Free Trial",
  "features": ["Instant payouts", "Multi-currency support", "Fraud detection", "One-click checkout"]
}
"""


def _repair_json(raw: str) -> dict:
    """Try strict parse, then regex-extract the first {...} block."""
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
    raise ValueError(f"Cannot extract JSON from LLM output: {cleaned[:200]!r}")


def _build_requirements(data: dict) -> WebsiteRequirements:
    """Merge LLM data with sensible defaults and validate."""
    merged = {
        "tech_stack":      DEFAULT_TECH_STACK,
        "primary_color":   "#4f46e5",
        "secondary_color": "#0ea5e9",
        "tone":            "professional",
        "target_audience": "general",
        "nav_cta":         "Get Started",
        "features":        [],
        **data,
    }
    return WebsiteRequirements(**merged)


# ==============================================================
# Agent
# ==============================================================

def analyze_requirements(state: dict) -> dict:
    logger.info("Analyzing user requirements")

    user_prompt: str = state.get("user_prompt", "")
    if not user_prompt.strip():
        logger.warning("Empty user_prompt; using defaults")
        return {"requirements": DEFAULT_REQUIREMENTS.model_dump()}

    llm = get_fast_llm(temperature=0, max_tokens=512)

    try:
        response = llm.invoke([
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=user_prompt),
        ])
        raw  = response.content if hasattr(response, "content") else str(response)
        data = _repair_json(raw)
        reqs = _build_requirements(data)
        logger.info("Requirements extracted: type=%s industry=%s pages=%s",
                    reqs.website_type, reqs.industry, reqs.pages)
        return {"requirements": reqs.model_dump()}

    except Exception as exc:
        logger.warning("Analyzer LLM failed (%s); using defaults", exc)
        return {"requirements": DEFAULT_REQUIREMENTS.model_dump()}