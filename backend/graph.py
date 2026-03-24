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
from state import AgentState
from agents.analyzer import analyze_requirements
from agents.researcher import research_node
from agents.planner import planner_agent
from agents.generator import coder_node
from agents.validator import validator_node

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



# # latest version

# from langgraph.graph import StateGraph, START, END
# from backend.state import AgentState

# from backend.agents.analyzer import analyze_requirements
# from backend.agents.planner import planner_agent
# from backend.agents.frontend_scaffold import frontend_scaffold_node
# from backend.agents.frontend_pages import frontend_pages_node
# from backend.agents.backend_generator import backend_generator_node
# from backend.agents.validator import validator_node
# from backend.agents.frontend_router import frontend_router_node

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



from langgraph.graph import StateGraph, START, END
from state import AgentState

from agents.analyzer import analyze_requirements
from agents.planner import planner_agent
from agents.frontend_scaffold import frontend_scaffold_node
from agents.frontend_pages import frontend_pages_node
from agents.backend_generator import backend_generator_node
from agents.validator import validator_node
from agents.frontend_router import frontend_router_node

MAX_RETRIES = 1

def should_continue(state: AgentState):
    errors = state.get("validation_errors", [])
    retry_count = state.get("retry_count", 0)

    if not errors or retry_count >= MAX_RETRIES:
        return END

    state["retry_count"] = retry_count + 1
    print(f"⚠ Retry {retry_count + 1}: {errors[0]}")
    return "planner"


workflow = StateGraph(AgentState)

workflow.add_node("analyzer", analyze_requirements)
workflow.add_node("planner", planner_agent)
workflow.add_node("frontend_scaffold", frontend_scaffold_node)
workflow.add_node("frontend_pages", frontend_pages_node)
workflow.add_node("frontend_router", frontend_router_node)
workflow.add_node("backend_generator", backend_generator_node)
workflow.add_node("validator", validator_node)

workflow.add_edge(START, "analyzer")
workflow.add_edge("analyzer", "planner")
workflow.add_edge("planner", "frontend_scaffold")
workflow.add_edge("frontend_scaffold", "frontend_pages")
workflow.add_edge("frontend_pages", "frontend_router")
workflow.add_edge("frontend_router", "backend_generator")
workflow.add_edge("backend_generator", "validator")

workflow.add_conditional_edges(
    "validator",
    should_continue,
    {
        "planner": "planner",
        END: END
    }
)

graph = workflow.compile()
print("✅ OPTIMIZED GRAPH COMPILED")