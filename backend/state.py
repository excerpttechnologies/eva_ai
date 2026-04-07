# # from typing import TypedDict, List, Dict

# # class AgentState(TypedDict, total=False):
# #     user_prompt: str
# #     requirements: Dict
# #     research_context: str
# #     site_plan: Dict
# #     code_files: List[Dict]
# #     validation_errors: List[str]
# #     retry_count: int 


# from typing import List, TypedDict
# from typing_extensions import Annotated
# import operator


# class AgentState(TypedDict):

#     user_prompt: str

#     requirements: dict
#     site_plan: dict

#     retry_count: int

#     validation_errors: Annotated[List[str], operator.add]

#     code_files: Annotated[List[dict], operator.add]


# # latest version
# """
# state.py  -  Shared LangGraph state definition.

# Key change: code_files uses Annotated[List[dict], _merge_code_files]
# so that parallel nodes (scaffold, pages, backend) can each append
# their files without overwriting each other.

# Without the reducer, LangGraph uses last-writer-wins at the state key level,
# meaning only ONE of the three parallel outputs would survive.

# The reducer deduplicates by filename — last write wins per filename,
# so frontend_pages output correctly overrides the scaffold stub App.tsx.
# """

# from __future__ import annotations

# from typing import Annotated, Any, Dict, List, Optional
# from typing_extensions import TypedDict


# # ──────────────────────────────────────────────────────────────
# # code_files reducer
# # ──────────────────────────────────────────────────────────────

# def _merge_code_files(existing: List[dict], incoming: List[dict]) -> List[dict]:
#     """
#     Merge two code_files lists from parallel branches.
#     Deduplicates by 'filename' — later write wins per filename.
#     This lets all three parallel nodes (scaffold, pages, backend)
#     safely write to the same list.
#     """
#     file_map: Dict[str, dict] = {f["filename"]: f for f in (existing or [])}
#     for f in (incoming or []):
#         file_map[f["filename"]] = f
#     return list(file_map.values())


# # ──────────────────────────────────────────────────────────────
# # Agent state
# # ──────────────────────────────────────────────────────────────

# class AgentState(TypedDict, total=False):
#     # Input
#     user_prompt:         str

#     # After analyzer
#     requirements:        Dict[str, Any]
#     research_context:    str

#     # After planner
#     site_plan:           Dict[str, Any]

#     # Generated files — uses reducer so parallel writes merge correctly
#     code_files: Annotated[List[dict], _merge_code_files]

#     # After validator
#     validation_errors:   List[str]
#     validation_warnings: List[str]

#     # Fix loop counter — incremented by fixer_agent, read by should_fix
#     retry_count:         int


"""
state.py  -  Shared LangGraph state definition.

Key change: code_files uses Annotated[List[dict], _merge_code_files]
so that parallel nodes (scaffold, pages, backend) can each append
their files without overwriting each other.

Without the reducer, LangGraph uses last-writer-wins at the state key level,
meaning only ONE of the three parallel outputs would survive.

The reducer deduplicates by filename — last write wins per filename,
so frontend_pages output correctly overrides the scaffold stub App.tsx.
"""

from __future__ import annotations

from typing import Annotated, Any, Dict, List, Optional
from typing_extensions import TypedDict


# ──────────────────────────────────────────────────────────────
# code_files reducer
# ──────────────────────────────────────────────────────────────

def _merge_code_files(existing: List[dict], incoming: List[dict]) -> List[dict]:
    """
    Merge two code_files lists from parallel branches.
    Deduplicates by 'filename' — later write wins per filename.
    This lets all three parallel nodes (scaffold, pages, backend)
    safely write to the same list.
    """
    file_map: Dict[str, dict] = {f["filename"]: f for f in (existing or [])}
    for f in (incoming or []):
        file_map[f["filename"]] = f
    return list(file_map.values())


# ──────────────────────────────────────────────────────────────
# Agent state
# ──────────────────────────────────────────────────────────────

class AgentState(TypedDict, total=False):
    # Input
    user_prompt:         str

    # After analyzer
    requirements:        Dict[str, Any]
    research_context:    str

    # After planner
    site_plan:           Dict[str, Any]

    # Generated files — uses reducer so parallel writes merge correctly
    code_files: Annotated[List[dict], _merge_code_files]

    # After validator
    validation_errors:   List[str]
    validation_warnings: List[str]

    # Fix loop counter — incremented by fixer_agent, read by should_fix
    retry_count:         int