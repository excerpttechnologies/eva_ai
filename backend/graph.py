# # from langgraph.graph import StateGraph, START, END
# # from backend.state import AgentState
# # from backend.agents.analyzer import requirement_analyzer_node
# # from backend.agents.researcher import research_node

# # workflow = StateGraph(AgentState)

# # # Nodes
# # workflow.add_node("analyze_requirements", requirement_analyzer_node)
# # workflow.add_node("research", research_node)

# # # Flow
# # workflow.add_edge(START, "analyze_requirements")
# # workflow.add_edge("analyze_requirements", "research")
# # workflow.add_edge("research", END)

# # # Compile
# # builder_app = workflow.compile()


# # from langgraph.graph import StateGraph, START, END
# # from backend.state import AgentState
# # from backend.agents.analyzer import analyze_requirements
# # from backend.agents.researcher import research_node
# # from backend.agents.planner import planner_agent
# # from backend.agents.generator import coder_node

# # # 1. Initialize the Graph
# # workflow = StateGraph(AgentState)

# # # 2. Register all Nodes (Your Agent Brains)
# # workflow.add_node("analyzer", analyze_requirements)
# # workflow.add_node("researcher", research_node)
# # workflow.add_node("planner", planner_agent)
# # workflow.add_node("generator", coder_node)

# # # 3. Define the Flow (Edges)
# # workflow.add_edge(START, "analyzer")        # Step 1
# # workflow.add_edge("analyzer", "researcher")  # Step 2
# # workflow.add_edge("researcher", "planner")   # Step 3
# # workflow.add_edge("planner", "generator")    # Step 4
# # workflow.add_edge("generator", END)          # Finalizing

# # # 4. Compile the Workflow
# # graph = workflow.compile()


# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState
# from backend.agents.analyzer import analyze_requirements
# from backend.agents.researcher import research_node
# from backend.agents.planner import planner_agent
# from backend.agents.generator import coder_node
# from backend.agents.validator import validator_node

# # 1. Logic to decide whether to loop or finish
# def should_continue(state: AgentState):
#     # If there are errors, go back to the generator
#     if state["validation_errors"]:
#         print(f"⚠️ Validation Failed: {state['validation_errors'][0]}")
#         return "generator"
#     # Otherwise, we are done
#     return END

# # 2. Build the Graph
# workflow = StateGraph(AgentState)

# # Add all specialized nodes
# workflow.add_node("analyzer", analyze_requirements)
# workflow.add_node("researcher", research_node)
# workflow.add_node("planner", planner_agent)
# workflow.add_node("generator", coder_node)
# workflow.add_node("validator", validator_node)

# # 3. Define the Flow
# workflow.add_edge(START, "analyzer")
# workflow.add_edge("analyzer", "researcher")
# workflow.add_edge("researcher", "planner")
# workflow.add_edge("planner", "generator")

# # After generation, always go to validation
# workflow.add_edge("generator", "validator")

# # 4. The Fixer Loop (Step 6)
# # This evaluates 'should_continue' to decide if we go to END or back to 'generator'
# workflow.add_conditional_edges(
#     "validator",
#     should_continue,
#     {
#         "generator": "generator",
#         END: END
#     }
# )

# # 5. Compile the Workflow
# graph = workflow.compile()



# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState
# from backend.agents.analyzer import analyze_requirements
# from backend.agents.researcher import research_node
# from backend.agents.planner import planner_agent
# from backend.agents.generator import coder_node
# from backend.agents.validator import validator_node

# # 1. Logic to decide whether to loop or finish
# MAX_RETRIES = 1

# def should_continue(state: AgentState):
#     errors = state.get("validation_errors", [])
#     retry_count = state.get("_retry_count", 0)

#     if not errors:
#         return END

#     # Do NOT retry structural failures
#     if any("No files" in e or "validator" in e.lower() for e in errors):
#         return END

#     if retry_count < MAX_RETRIES:
#         state["_retry_count"] = retry_count + 1
#         print(f"⚠️ Retrying generation once: {errors[0]}")
#         return "planner"

#     return END


# # 2. Build the Graph
# workflow = StateGraph(AgentState)

# # Add all specialized nodes
# workflow.add_node("analyzer", analyze_requirements)
# # workflow.add_node("researcher", research_node)
# workflow.add_node("planner", planner_agent)
# workflow.add_node("generator", coder_node)
# workflow.add_node("validator", validator_node)

# # 3. Define the Flow
# workflow.add_edge(START, "analyzer")
# workflow.add_edge("analyzer","planner")
# # workflow.add_edge("researcher", "planner")
# workflow.add_edge("planner", "generator")

# # After generation, always go to validation
# workflow.add_edge("generator", "validator")

# # 4. The Fixer Loop (Step 6)
# # This evaluates 'should_continue' to decide if we go to END or back to 'generator'
# workflow.add_conditional_edges(
#     "validator",
#     should_continue,
#     {
#         "generator": "generator",
#         END: END
#     }
# )

# # 5. Compile the Workflow
# graph = workflow.compile()



# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState
# # from backend.agents.researcher import research_node

# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.generator import coder_node              # frontend
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.validator import validator_node

# MAX_RETRIES = 1
# # def should_continue(state: AgentState):
# #     errors = state.get("validation_errors", [])
# #     # ❌ Fix: Change _retry_count to retry_count to match state.py
# #     retry_count = state.get("retry_count", 0) 

# #     if not errors or retry_count >= MAX_RETRIES:
# #         return END

# #     # This update will be passed back to the state
# #     return "generator"  
# def should_continue(state: AgentState):
#     errors = state.get("validation_errors", [])
#     retry_count = state.get("retry_count", 0)

#     if not errors:
#         return END

#     if retry_count >= MAX_RETRIES:
#         return END

#     state["retry_count"] = retry_count + 1
#     print(f"⚠️ Retry {retry_count + 1}: {errors[0]}")
#     return "planner"


# workflow = StateGraph(AgentState)

# workflow.add_node("analyzer", analyze_requirements)
# # workflow.add_node("researcher", research_node)
# workflow.add_node("planner", planner_agent)

# workflow.add_node("generator", coder_node)              # frontend
# workflow.add_node("backend_generator", backend_generator_node)
# workflow.add_node("validator", validator_node)

# workflow.add_edge(START, "analyzer")
# workflow.add_edge("analyzer", "planner")
# # workflow.add_edge("researcher", "planner")


# workflow.add_edge("planner", "generator")
# workflow.add_edge("generator", "backend_generator")
# workflow.add_edge("backend_generator", "validator")

# # workflow.add_conditional_edges(
# #     "validator",
# #     should_continue,
# #     {
# #         "generator": "generator",
# #         END: END
# #     }
# # )
# workflow.add_conditional_edges(
#     "validator",
#     should_continue,
#     {
#         "planner": "planner",
#         END: END
#     }
# )


# graph = workflow.compile()
# print("✅ GRAPH COMPILED WITH NEW GENERATORS")



# latest version

# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState

# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.frontend_scaffold import frontend_scaffold_node
# from backend.agents.frontend_pages import frontend_pages_node
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.validator import validator_node
# from backend.agents.frontend_router import frontend_router_node
# from backend.agents.fixer_agent import fixer_agent

# MAX_RETRIES = 1

# def should_continue(state: AgentState):
#     errors = state.get("validation_errors", [])
#     retry_count = state.get("retry_count", 0)

#     if not errors or retry_count >= MAX_RETRIES:
#         return END

#     state["retry_count"] = retry_count + 1
#     print(f"⚠ Retry {retry_count + 1}: {errors[0]}")
#     return "planner"


# workflow = StateGraph(AgentState)

# workflow.add_node("analyzer", analyze_requirements)
# workflow.add_node("planner", planner_agent)
# workflow.add_node("frontend_scaffold", frontend_scaffold_node)
# workflow.add_node("frontend_pages", frontend_pages_node)
# workflow.add_node("frontend_router", frontend_router_node)
# workflow.add_node("backend_generator", backend_generator_node)
# workflow.add_node("validator", validator_node)

# workflow.add_edge(START, "analyzer")
# workflow.add_edge("analyzer", "planner")
# workflow.add_edge("planner", "frontend_scaffold")
# workflow.add_edge("frontend_scaffold", "frontend_pages")
# workflow.add_edge("frontend_pages", "frontend_router")
# workflow.add_edge("frontend_router", "backend_generator")
# workflow.add_edge("backend_generator", "validator")

# workflow.add_conditional_edges(
#     "validator",
#     should_continue,
#     {
#         "planner": "planner",
#         END: END
#     }
# )

# graph = workflow.compile()
# print("✅ OPTIMIZED GRAPH COMPILED")

# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState

# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.frontend_scaffold import frontend_scaffold_node
# from backend.agents.frontend_pages import frontend_pages_node
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.frontend_router import frontend_router_node
# from backend.agents.validator import validator_node
# from backend.agents.fixer_agent import fixer_agent


# MAX_RETRIES = 1


# def should_fix(state: AgentState):
#     errors = state.get("validation_errors", [])
#     retry_count = state.get("retry_count", 0)

#     if errors and retry_count < MAX_RETRIES:
#         state["retry_count"] = retry_count + 1
#         print(f"🛠 Fix attempt {retry_count + 1}")
#         return "fixer"

#     return END


# workflow = StateGraph(AgentState)

# # =========================
# # Nodes
# # =========================

# workflow.add_node("analyzer", analyze_requirements)
# workflow.add_node("planner", planner_agent)

# workflow.add_node("frontend_scaffold", frontend_scaffold_node)
# workflow.add_node("frontend_pages", frontend_pages_node)
# workflow.add_node("backend_generator", backend_generator_node)

# workflow.add_node("frontend_router", frontend_router_node)

# workflow.add_node("validator", validator_node)
# workflow.add_node("fixer", fixer_agent)

# # =========================
# # Flow
# # =========================

# workflow.add_edge(START, "analyzer")
# workflow.add_edge("analyzer", "planner")

# # -------------------------
# # Parallel Generation
# # -------------------------

# workflow.add_edge("planner", "frontend_scaffold")
# workflow.add_edge("planner", "frontend_pages")
# workflow.add_edge("planner", "backend_generator")

# # -------------------------
# # Router (after pages)
# # -------------------------

# workflow.add_edge("frontend_pages", "frontend_router")
# workflow.add_edge("frontend_scaffold", "frontend_router")

# # -------------------------
# # Validation
# # -------------------------

# workflow.add_edge("frontend_router", "validator")
# workflow.add_edge("backend_generator", "validator")

# # -------------------------
# # Fix if needed
# # -------------------------

# workflow.add_conditional_edges(
#     "validator",
#     should_fix,
#     {
#         "fixer": "fixer",
#         END: END
#     }
# )

# # After fixing → validate again
# workflow.add_edge("fixer", "validator")

# graph = workflow.compile()

# print("🚀 PARALLEL AI BUILDER GRAPH READY")



# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState

# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.frontend_scaffold import frontend_scaffold_node
# from backend.agents.frontend_pages import frontend_pages_node
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.frontend_router import frontend_router_node
# from backend.agents.validator import validator_node
# from backend.agents.fixer_agent import fixer_agent


# MAX_RETRIES = 1


# # ==============================================================
# # Conditional Fix Logic
# # ==============================================================

# def should_fix(state: AgentState):
#     errors = state.get("validation_errors", [])
#     retry_count = state.get("retry_count", 0)

#     if errors and retry_count < MAX_RETRIES:
#         state["retry_count"] = retry_count + 1
#         print(f"🛠 Fix attempt {retry_count + 1}")
#         return "fixer"

#     return END


# # ==============================================================
# # JOIN NODE (CRITICAL FIX)
# # ==============================================================

# def join_node(state: AgentState):
#     print("✅ JOIN NODE: All frontend parts ready")
#     return state


# # ==============================================================
# # Graph
# # ==============================================================

# workflow = StateGraph(AgentState)


# # =========================
# # Nodes
# # =========================

# workflow.add_node("analyzer", analyze_requirements)
# workflow.add_node("planner", planner_agent)

# workflow.add_node("frontend_scaffold", frontend_scaffold_node)
# workflow.add_node("frontend_pages", frontend_pages_node)
# workflow.add_node("backend_generator", backend_generator_node)

# workflow.add_node("join", join_node)  # ✅ NEW

# workflow.add_node("frontend_router", frontend_router_node)

# workflow.add_node("validator", validator_node)
# workflow.add_node("fixer", fixer_agent)


# # =========================
# # Flow
# # =========================

# workflow.add_edge(START, "analyzer")
# workflow.add_edge("analyzer", "planner")


# # -------------------------
# # Parallel Generation
# # -------------------------

# workflow.add_edge("planner", "frontend_scaffold")
# workflow.add_edge("planner", "frontend_pages")
# workflow.add_edge("planner", "backend_generator")


# # -------------------------
# # Synchronization (FIX)
# # -------------------------

# workflow.add_edge("frontend_scaffold", "join")
# workflow.add_edge("frontend_pages", "join")


# # -------------------------
# # Router AFTER BOTH READY
# # -------------------------

# workflow.add_edge("join", "frontend_router")


# # -------------------------
# # Validation
# # -------------------------

# workflow.add_edge("frontend_router", "validator")
# workflow.add_edge("backend_generator", "validator")


# # -------------------------
# # Fix Loop
# # -------------------------

# workflow.add_conditional_edges(
#     "validator",
#     should_fix,
#     {
#         "fixer": "fixer",
#         END: END
#     }
# )

# workflow.add_edge("fixer", "validator")


# # =========================
# # Compile
# # =========================

# graph = workflow.compile()

# print("🚀 PARALLEL AI BUILDER GRAPH READY (FIXED VERSION)")


# latest version

# """
# graph.py  -  LangGraph workflow for AI Builder.

# Bugs fixed vs the original:

# 1. PARALLEL STATE MERGE (critical)
#    - code_files now uses Annotated[List, merge_code_files] reducer in AgentState
#    - All three parallel nodes safely append to the same list without overwriting
#    - join_node deduplicates by filename (last writer wins = pages override scaffold)

# 2. BACKEND GENERATOR CONNECTED TO join_all (critical)
#    - Previously: backend_generator → validator (DIRECT, bypassing join)
#    - validator was called TWICE and saw incomplete state on first call
#    - Fixed: all three parallel branches → join_all → frontend_router → validator

# 3. should_fix NO LONGER MUTATES STATE (critical)
#    - Conditional edge functions must be pure in LangGraph
#    - Moved retry_count increment into fixer_agent's return value

# 4. MAX_RETRIES bumped to 3
#    - 1 attempt was never enough for complex JSX/structure errors

# 5. TOPOLOGY: join_all waits for ALL THREE parallel branches
#    - scaffold + pages + backend all feed into join_all
#    - frontend_router only runs after everything is ready
#    - single clean path: join_all → frontend_router → validator → (fix loop) → END

# 6. retry_count initialized in state and incremented by fixer_agent (not graph)
# """

# from __future__ import annotations

# import operator
# from typing import Annotated, List

# from langgraph.graph import StateGraph, START, END
# from typing_extensions import TypedDict

# from backend.state import AgentState
# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.frontend_scaffold import frontend_scaffold_node
# from backend.agents.frontend_pages import frontend_pages_node
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.frontend_router import frontend_router_node
# from backend.agents.validator import validator_node
# from backend.agents.fixer_agent import fixer_agent


# MAX_RETRIES = 3


# # ──────────────────────────────────────────────────────────────
# # code_files reducer — merges lists from parallel branches
# # ──────────────────────────────────────────────────────────────

# def _merge_code_files(existing: List[dict], incoming: List[dict]) -> List[dict]:
#     """
#     Merge two code_files lists, deduplicating by filename.
#     Last writer wins — pages/router output overrides scaffold stubs.
#     Called automatically by LangGraph when parallel nodes write to code_files.
#     """
#     file_map = {f["filename"]: f for f in (existing or [])}
#     for f in (incoming or []):
#         file_map[f["filename"]] = f     # later write wins
#     return list(file_map.values())


# # ──────────────────────────────────────────────────────────────
# # JOIN node — synchronises after all parallel branches complete
# # ──────────────────────────────────────────────────────────────

# def join_all(state: AgentState) -> dict:
#     """
#     Wait for scaffold + pages + backend to all finish.
#     By the time this runs, LangGraph has already called _merge_code_files
#     to combine all three code_files lists, so dedup is already done.
#     We just log and pass through.
#     """
#     files = state.get("code_files", [])
#     fe = sum(1 for f in files if f["filename"].startswith("frontend/"))
#     be = sum(1 for f in files if f["filename"].startswith("backend/"))
#     print(f"✅ JOIN: {len(files)} files ready ({fe} frontend, {be} backend)")
#     return {}   # no state change needed — files already merged by reducer


# # ──────────────────────────────────────────────────────────────
# # Conditional edge — pure function, no state mutation
# # ──────────────────────────────────────────────────────────────

# def should_fix(state: AgentState) -> str:
#     """
#     Pure routing function — must NOT mutate state.
#     retry_count is incremented by fixer_agent's return value instead.
#     """
#     errors      = state.get("validation_errors", [])
#     retry_count = state.get("retry_count", 0)

#     if errors and retry_count < MAX_RETRIES:
#         print(f"🛠  Fix attempt {retry_count + 1}/{MAX_RETRIES} "
#               f"({len(errors)} error(s))")
#         return "fixer"

#     if errors:
#         print(f"⚠️  {len(errors)} error(s) remain after {retry_count} fix attempt(s) — finishing")
#     else:
#         print("✅  Validation passed")

#     return END


# # ──────────────────────────────────────────────────────────────
# # Build graph
# # ──────────────────────────────────────────────────────────────

# workflow = StateGraph(AgentState)

# # Nodes
# workflow.add_node("analyzer",          analyze_requirements)
# workflow.add_node("planner",           planner_agent)
# workflow.add_node("frontend_scaffold", frontend_scaffold_node)
# workflow.add_node("frontend_pages",    frontend_pages_node)
# workflow.add_node("backend_generator", backend_generator_node)
# workflow.add_node("join_all",          join_all)           # waits for all 3 branches
# workflow.add_node("frontend_router",   frontend_router_node)
# workflow.add_node("validator",         validator_node)
# workflow.add_node("fixer",             fixer_agent)

# # Sequential start
# workflow.add_edge(START,      "analyzer")
# workflow.add_edge("analyzer", "planner")

# # Fan-out: planner triggers all three parallel generators
# workflow.add_edge("planner", "frontend_scaffold")
# workflow.add_edge("planner", "frontend_pages")
# workflow.add_edge("planner", "backend_generator")

# # Fan-in: ALL THREE must complete before join_all proceeds
# workflow.add_edge("frontend_scaffold", "join_all")
# workflow.add_edge("frontend_pages",    "join_all")
# workflow.add_edge("backend_generator", "join_all")

# # Router runs after everything is merged
# workflow.add_edge("join_all",        "frontend_router")
# workflow.add_edge("frontend_router", "validator")

# # Fix loop
# workflow.add_conditional_edges(
#     "validator",
#     should_fix,
#     {
#         "fixer": "fixer",
#         END:     END,
#     },
# )
# workflow.add_edge("fixer", "validator")

# # Compile
# graph = workflow.compile()

# print("🚀 AI BUILDER GRAPH READY")


# """
# graph.py  -  LangGraph workflow for AI Builder.

# Bugs fixed vs the original:

# 1. PARALLEL STATE MERGE (critical)
#    - code_files now uses Annotated[List, merge_code_files] reducer in AgentState
#    - All three parallel nodes safely append to the same list without overwriting
#    - join_node deduplicates by filename (last writer wins = pages override scaffold)

# 2. BACKEND GENERATOR CONNECTED TO join_all (critical)
#    - Previously: backend_generator → validator (DIRECT, bypassing join)
#    - validator was called TWICE and saw incomplete state on first call
#    - Fixed: all three parallel branches → join_all → frontend_router → validator

# 3. should_fix NO LONGER MUTATES STATE (critical)
#    - Conditional edge functions must be pure in LangGraph
#    - Moved retry_count increment into fixer_agent's return value

# 4. MAX_RETRIES bumped to 3
#    - 1 attempt was never enough for complex JSX/structure errors

# 5. TOPOLOGY: join_all waits for ALL THREE parallel branches
#    - scaffold + pages + backend all feed into join_all
#    - frontend_router only runs after everything is ready
#    - single clean path: join_all → frontend_router → validator → (fix loop) → END

# 6. retry_count initialized in state and incremented by fixer_agent (not graph)
# """

# from __future__ import annotations

# import operator
# from typing import Annotated, List

# from langgraph.graph import StateGraph, START, END
# from typing_extensions import TypedDict

# from backend.state import AgentState
# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.frontend_scaffold import frontend_scaffold_node
# from backend.agents.frontend_pages import frontend_pages_node
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.frontend_router import frontend_router_node
# from backend.agents.validator import validator_node
# from backend.agents.fixer_agent import fixer_agent


# MAX_RETRIES = 3


# # ──────────────────────────────────────────────────────────────
# # code_files reducer — merges lists from parallel branches
# # ──────────────────────────────────────────────────────────────

# def _merge_code_files(existing: List[dict], incoming: List[dict]) -> List[dict]:
#     """
#     Merge two code_files lists, deduplicating by filename.
#     Last writer wins — pages/router output overrides scaffold stubs.
#     Called automatically by LangGraph when parallel nodes write to code_files.
#     """
#     file_map = {f["filename"]: f for f in (existing or [])}
#     for f in (incoming or []):
#         file_map[f["filename"]] = f     # later write wins
#     return list(file_map.values())


# # ──────────────────────────────────────────────────────────────
# # JOIN node — synchronises after all parallel branches complete
# # ──────────────────────────────────────────────────────────────

# def join_all(state: AgentState) -> dict:
#     """
#     Wait for scaffold + pages + backend to all finish.
#     By the time this runs, LangGraph has already called _merge_code_files
#     to combine all three code_files lists, so dedup is already done.
#     We just log and pass through.
#     """
#     files = state.get("code_files", [])
#     fe = sum(1 for f in files if f["filename"].startswith("frontend/"))
#     be = sum(1 for f in files if f["filename"].startswith("backend/"))
#     print(f"✅ JOIN: {len(files)} files ready ({fe} frontend, {be} backend)")
#     return {}   # no state change needed — files already merged by reducer


# # ──────────────────────────────────────────────────────────────
# # Conditional edge — pure function, no state mutation
# # ──────────────────────────────────────────────────────────────

# def should_fix(state: AgentState) -> str:
#     """
#     Pure routing function — must NOT mutate state.
#     retry_count is incremented by fixer_agent's return value instead.
#     """
#     errors      = state.get("validation_errors", [])
#     retry_count = state.get("retry_count", 0)

#     if errors and retry_count < MAX_RETRIES:
#         print(f"🛠  Fix attempt {retry_count + 1}/{MAX_RETRIES} "
#               f"({len(errors)} error(s))")
#         return "fixer"

#     if errors:
#         print(f"⚠️  {len(errors)} error(s) remain after {retry_count} fix attempt(s) — finishing")
#     else:
#         print("✅  Validation passed")

#     return END


# # ──────────────────────────────────────────────────────────────
# # Build graph
# # ──────────────────────────────────────────────────────────────

# workflow = StateGraph(AgentState)

# # Nodes
# workflow.add_node("analyzer",          analyze_requirements)
# workflow.add_node("planner",           planner_agent)
# workflow.add_node("frontend_scaffold", frontend_scaffold_node)
# workflow.add_node("frontend_pages",    frontend_pages_node)
# workflow.add_node("backend_generator", backend_generator_node)
# workflow.add_node("join_all",          join_all)           # waits for all 3 branches
# workflow.add_node("frontend_router",   frontend_router_node)
# workflow.add_node("validator",         validator_node)
# workflow.add_node("fixer",             fixer_agent)

# # Sequential start
# workflow.add_edge(START,      "analyzer")
# workflow.add_edge("analyzer", "planner")

# # Fan-out: planner triggers all three parallel generators
# workflow.add_edge("planner", "frontend_scaffold")
# workflow.add_edge("planner", "frontend_pages")
# workflow.add_edge("planner", "backend_generator")

# # Fan-in: ALL THREE must complete before join_all proceeds
# workflow.add_edge("frontend_scaffold", "join_all")
# workflow.add_edge("frontend_pages",    "join_all")
# workflow.add_edge("backend_generator", "join_all")

# # Router runs after everything is merged
# workflow.add_edge("join_all",        "frontend_router")
# workflow.add_edge("frontend_router", "validator")

# # Fix loop
# workflow.add_conditional_edges(
#     "validator",
#     should_fix,
#     {
#         "fixer": "fixer",
#         END:     END,
#     },
# )
# workflow.add_edge("fixer", "validator")

# # Compile
# graph = workflow.compile()

# print("🚀 AI BUILDER GRAPH READY")


from __future__ import annotations

from langgraph.graph import StateGraph, START, END

from backend.state import AgentState
from backend.agents.analyzer import analyze_requirements
from backend.agents.planner import planner_agent
from backend.agents.frontend_scaffold import frontend_scaffold_node
from backend.agents.frontend_pages import frontend_pages_node
from backend.agents.backend_generator import backend_generator_node
from backend.agents.frontend_router import frontend_router_node
from backend.agents.validator import validator_node
from backend.agents.fixer_agent import fixer_agent


MAX_RETRIES = 3


def join_all(state: AgentState) -> dict:
    """Wait for all parallel branches to complete."""
    files = state.get("code_files", [])
    fe = sum(1 for f in files if f["filename"].startswith("frontend/"))
    be = sum(1 for f in files if f["filename"].startswith("backend/"))
    print(f"JOIN: {len(files)} files ready ({fe} frontend, {be} backend)")
    return {}


def should_fix(state: AgentState) -> str:
    """Determine if we need to fix errors."""
    errors = state.get("validation_errors", [])
    retry_count = state.get("retry_count", 0)

    if errors and retry_count < MAX_RETRIES:
        print(f"Fix attempt {retry_count + 1}/{MAX_RETRIES} ({len(errors)} errors)")
        return "fixer"

    if errors:
        print(f"{len(errors)} errors remain after {retry_count} fixes")
    else:
        print("Validation passed")

    return "end"


workflow = StateGraph(AgentState)

workflow.add_node("analyzer", analyze_requirements)
workflow.add_node("planner", planner_agent)
workflow.add_node("frontend_scaffold", frontend_scaffold_node)
workflow.add_node("frontend_pages", frontend_pages_node)
workflow.add_node("backend_generator", backend_generator_node)
workflow.add_node("join_all", join_all)
workflow.add_node("frontend_router", frontend_router_node)
workflow.add_node("validator", validator_node)
workflow.add_node("fixer", fixer_agent)

workflow.add_edge(START, "analyzer")
workflow.add_edge("analyzer", "planner")

workflow.add_edge("planner", "frontend_scaffold")
workflow.add_edge("planner", "frontend_pages")
workflow.add_edge("planner", "backend_generator")

workflow.add_edge("frontend_scaffold", "join_all")
workflow.add_edge("frontend_pages", "join_all")
workflow.add_edge("backend_generator", "join_all")

workflow.add_edge("join_all", "frontend_router")
workflow.add_edge("frontend_router", "validator")

workflow.add_conditional_edges(
    "validator",
    should_fix,
    {
        "fixer": "fixer",
        "end": END,
    },
)
workflow.add_edge("fixer", "validator")

graph = workflow.compile()

print("AI BUILDER GRAPH READY")