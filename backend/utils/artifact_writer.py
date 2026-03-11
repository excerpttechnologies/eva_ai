import os
import zipfile
from pathlib import Path
import re

BASE_DIR = Path("generated/jobs")


# def save_and_zip(job_id: str, files: list[dict]) -> str:
#     job_dir = BASE_DIR / job_id
#     zip_path = BASE_DIR / f"{job_id}.zip"

#     job_dir.mkdir(parents=True, exist_ok=True)

#     # Write files
#     for file in files:
#         file_path = job_dir / file["filename"]
#         file_path.parent.mkdir(parents=True, exist_ok=True)

#         with open(file_path, "w", encoding="utf-8") as f:
#             f.write(file["content"])

#     # Zip
#     with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
#         for root, _, filenames in os.walk(job_dir):
#             for name in filenames:
#                 full_path = Path(root) / name
#                 zipf.write(
#                     full_path,
#                     arcname=full_path.relative_to(job_dir)
#                 )

#     return str(zip_path)

def clean_code(content: str) -> str:
    """
    Removes markdown fences and extra backticks from LLM output
    """
    if not content:
        return content

    # Remove ```jsx, ```js, ```ts etc
    content = re.sub(r"```[a-zA-Z]*", "", content)

    # Remove closing ```
    content = content.replace("```", "")

    return content.strip()

def save_and_zip(job_id: str, files: list):
    base_path = os.path.join("generated", "jobs", job_id)
    os.makedirs(base_path, exist_ok=True)

    # Save files
    for file in files:
        filename = file["filename"]
        content = file["content"]

        full_path = os.path.join(base_path, filename)

        # 🔥 IMPORTANT: create nested directories
        os.makedirs(os.path.dirname(full_path), exist_ok=True)

        with open(full_path, "w", encoding="utf-8") as f:
            # f.write(content)
            f.write(clean_code(content))

    # Zip everything
    zip_path = base_path + ".zip"

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, file_names in os.walk(base_path):
            for file_name in file_names:
                file_path = os.path.join(root, file_name)
                arcname = os.path.relpath(file_path, base_path)
                zipf.write(file_path, arcname)

    return zip_path