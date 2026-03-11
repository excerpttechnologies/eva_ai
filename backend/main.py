# from fastapi import FastAPI
# from backend.graph import graph
# from dotenv import load_dotenv
# load_dotenv()

# app = FastAPI()


# @app.get("/")
# def health():
#     return {"status": "ok"}


# @app.post("/build")
# def build_website(prompt: str):
#     return graph.invoke({
#         "user_prompt": prompt,
#         "requirements": {},
#         "research_context": "",
#         "site_plan": {},
#         "code_files": [],
#         "validation_errors": []
#     })
#     return result



# from fastapi import FastAPI, BackgroundTasks
# from uuid import uuid4
# from dotenv import load_dotenv
 

# from backend.jobs import jobs
# from backend.worker import run_graph
# from backend.state import AgentState
# from fastapi.responses import FileResponse

# load_dotenv()

# app = FastAPI()


# @app.get("/")
# def health():
#     return {"status": "ok"}


# @app.post("/build")
# def build_website(prompt: str, background_tasks: BackgroundTasks):
#     job_id = uuid4().hex

#     state: AgentState = {
#         "user_prompt": prompt,
#         "requirements": {},
#         "research_context": "",
#         "site_plan": {},
#         "code_files": [],
#         "validation_errors": [],
#         "retry_count": 0 
#     }

#     jobs[job_id] = {
#         "status": "queued",
#         "result": None,
#         "error": None
#     }

#     background_tasks.add_task(run_graph, job_id, state)

#     return {
#         "status": "processing",
#         "job_id": job_id
#     }


# @app.get("/status/{job_id}")
# def get_status(job_id: str):
#     job = jobs.get(job_id)
#     if not job:
#         return {"error": "Job not found"}
#     return {
#     "job_id": job_id,
#     "status": job["status"],
#     "error": job.get("error")
# }



# @app.get("/result/{job_id}")
# def get_result(job_id: str):
#     job = jobs.get(job_id)
#     if not job:
#         return {"error": "Job not found"}

#     if job["status"] != "completed":
#         return {"status": job["status"]}

#     return job["result"]

# @app.get("/download/{job_id}")
# def download_zip(job_id: str):
#     job = jobs.get(job_id)

#     if not job or job["status"] != "completed":
#         return {"error": "Job not ready"}

#     zip_path = job["result"]["zip_path"]

#     return FileResponse(
#         path=zip_path,
#         filename=f"{job_id}.zip",
#         media_type="application/zip"
#     )




from fastapi import FastAPI, BackgroundTasks
from uuid import uuid4
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

from backend.jobs import jobs
from backend.worker import run_graph
from backend.state import AgentState
from fastapi.responses import FileResponse

load_dotenv()

app = FastAPI()

# ✅ ADD THIS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health():
    return {"status": "ok"}


@app.post("/build")
def build_website(prompt: str, background_tasks: BackgroundTasks):
    job_id = uuid4().hex

    state: AgentState = {
        "user_prompt": prompt,
        "requirements": {},
        "research_context": "",
        "site_plan": {},
        "code_files": [],
        "validation_errors": [],
        "retry_count": 0 
    }

    jobs[job_id] = {
        "status": "queued",
        "result": None,
        "error": None
    }

    background_tasks.add_task(run_graph, job_id, state)

    return {
        "status": "processing",
        "job_id": job_id
    }


@app.get("/status/{job_id}")
def get_status(job_id: str):
    job = jobs.get(job_id)
    if not job:
        return {"error": "Job not found"}
    return {
    "job_id": job_id,
    "status": job["status"],
    "error": job.get("error")
}



@app.get("/result/{job_id}")
def get_result(job_id: str):
    job = jobs.get(job_id)
    if not job:
        return {"error": "Job not found"}

    if job["status"] != "completed":
        return {"status": job["status"]}

    return job["result"]

@app.get("/download/{job_id}")
def download_zip(job_id: str):
    job = jobs.get(job_id)

    if not job or job["status"] != "completed":
        return {"error": "Job not ready"}

    zip_path = job["result"]["zip_path"]

    return FileResponse(
        path=zip_path,
        filename=f"{job_id}.zip",
        media_type="application/zip"
    )