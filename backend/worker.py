# from backend.jobs import jobs
# from backend.graph import graph
# from backend.state import AgentState

# def run_graph(job_id: str, state: AgentState):
#     try:
#         jobs[job_id]["status"] = "running"
#         result = graph.invoke(state)
#         jobs[job_id]["status"] = "completed"
#         jobs[job_id]["result"] = result
#     except Exception as e:
#         jobs[job_id]["status"] = "failed"
#         jobs[job_id]["error"] = str(e)


# from backend.graph import graph
# from backend.jobs import jobs
# import traceback

# def run_graph(job_id: str, state: dict):
#     try:
#         jobs[job_id]["status"] = "running"

#         result = graph.invoke(state)

#         jobs[job_id]["status"] = "completed"
#         jobs[job_id]["result"] = result

#     except Exception as e:
#         jobs[job_id]["status"] = "failed"
#         jobs[job_id]["error"] = {
#             "message": str(e),
#             "traceback": traceback.format_exc()
#         }

from backend.utils.artifact_writer import save_and_zip
from backend.jobs import jobs
from backend.graph import graph


def run_graph(job_id: str, state):
    try:
        jobs[job_id]["status"] = "running"

        result = graph.invoke(state)
        # print("FINAL FILE COUNT:", len(files))


        files = result.get("code_files", [])

        zip_path = save_and_zip(job_id, files)

        jobs[job_id]["status"] = "completed"
        jobs[job_id]["result"] = {
            "files": files,
            "zip_path": zip_path
        }

    except Exception as e:
        jobs[job_id]["status"] = "failed"
        jobs[job_id]["error"] = {
            "message": str(e)
        }
