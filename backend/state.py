from typing import TypedDict, List, Dict

class AgentState(TypedDict, total=False):
    user_prompt: str
    requirements: Dict
    research_context: str
    site_plan: Dict
    code_files: List[Dict]
    validation_errors: List[str]
    retry_count: int 
