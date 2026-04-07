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




# from fastapi import FastAPI, BackgroundTasks
# from uuid import uuid4
# from dotenv import load_dotenv
# from fastapi.middleware.cors import CORSMiddleware

# from backend.jobs import jobs
# from backend.worker import run_graph
# from backend.state import AgentState
# from fastapi.responses import FileResponse

# load_dotenv()

# app = FastAPI()

# # ✅ ADD THIS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


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


"""
main.py  -  FastAPI entry point for AI Builder.

Endpoints:
  POST /build          — queue a new website generation job
  GET  /status/{id}    — poll job status (queued | running | completed | failed)
  GET  /result/{id}    — get full result when completed
  GET  /download/{id}  — download generated project as .zip
  GET  /health         — liveness check
"""

from __future__ import annotations

import logging
from uuid import uuid4

from dotenv import load_dotenv
from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from backend.jobs import jobs
from backend.worker import run_graph
from backend.state import AgentState

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)-8s  %(name)s  %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger(__name__)

# ==============================================================
# App
# ==============================================================

app = FastAPI(
    title="AI Builder API",
    description="Generate full-stack websites from a text prompt",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==============================================================
# Routes
# ==============================================================

@app.get("/health", tags=["meta"])
def health():
    """Liveness check."""
    return {"status": "ok", "service": "AI Builder API"}


@app.post("/build", tags=["jobs"])
def build_website(prompt: str, background_tasks: BackgroundTasks):
    """
    Queue a new website generation job.
    Returns a job_id to poll with /status/{job_id}.
    """
    if not prompt or not prompt.strip():
        raise HTTPException(status_code=400, detail="prompt cannot be empty")

    job_id = uuid4().hex

    state: AgentState = {
        "user_prompt":        prompt.strip(),
        "requirements":       {},
        "research_context":   "",
        "site_plan":          {},
        "code_files":         [],
        "validation_errors":  [],
        "validation_warnings": [],
        "retry_count":        0,
    }

    jobs[job_id] = {
        "status": "queued",
        "result": None,
        "error":  None,
    }

    background_tasks.add_task(run_graph, job_id, state)
    logger.info("Job queued: %s  |  prompt: %.60s…", job_id, prompt)

    return {
        "status": "processing",
        "job_id": job_id,
    }


@app.get("/status/{job_id}", tags=["jobs"])
def get_status(job_id: str):
    """
    Poll job status.
    Returns: queued | running | completed | failed
    """
    job = jobs.get(job_id)
    if not job:
        raise HTTPException(status_code=404, detail=f"Job '{job_id}' not found")

    response = {
        "job_id": job_id,
        "status": job["status"],
    }

    # Include error message if failed
    if job["status"] == "failed" and job.get("error"):
        response["error"] = job["error"]

    # Include summary counts when completed
    if job["status"] == "completed" and job.get("result"):
        result = job["result"]
        response["file_count"]       = result.get("file_count", 0)
        response["validation_errors"] = result.get("validation_errors", [])

    return response


@app.get("/result/{job_id}", tags=["jobs"])
def get_result(job_id: str):
    """
    Get the full generation result (list of files, zip path, etc).
    Only available when status == 'completed'.
    """
    job = jobs.get(job_id)
    if not job:
        raise HTTPException(status_code=404, detail=f"Job '{job_id}' not found")

    if job["status"] == "failed":
        raise HTTPException(status_code=500, detail=job.get("error", "Job failed"))

    if job["status"] != "completed":
        return {"status": job["status"], "message": "Job not yet complete"}

    return job["result"]


@app.get("/download/{job_id}", tags=["jobs"])
def download_zip(job_id: str):
    """
    Download the generated project as a .zip file.
    Only available when status == 'completed'.
    """
    job = jobs.get(job_id)

    if not job:
        raise HTTPException(status_code=404, detail=f"Job '{job_id}' not found")

    if job["status"] != "completed":
        raise HTTPException(
            status_code=425,
            detail=f"Job not ready yet (status: {job['status']})"
        )

    result   = job.get("result") or {}
    zip_path = result.get("zip_path")

    if not zip_path:
        raise HTTPException(status_code=500, detail="No zip file found for this job")

    logger.info("Serving zip for job %s: %s", job_id, zip_path)

    return FileResponse(
        path=zip_path,
        filename=f"aibuilder-{job_id[:8]}.zip",
        media_type="application/zip",
    )