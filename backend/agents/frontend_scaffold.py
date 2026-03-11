# from langchain_ollama import ChatOllama
# # import json

# # def extract_json(text):
# #     start = text.find("{")
# #     end = text.rfind("}") + 1
# #     return json.loads(text[start:end])
# import json
# import re

# def extract_json(text: str):
#     """
#     Robust JSON extractor for LLM outputs.
#     Handles:
#     - Markdown blocks
#     - Extra text before/after JSON
#     - Trailing commas
#     """

#     if not text:
#         raise ValueError("Empty model output")

#     # Remove markdown fences
#     text = re.sub(r"```json", "", text)
#     text = re.sub(r"```", "", text)

#     # Find first JSON object
#     match = re.search(r"\{.*\}", text, re.DOTALL)
#     if not match:
#         raise ValueError("No valid JSON object found")

#     json_str = match.group(0)

#     # Remove trailing commas
#     json_str = re.sub(r",\s*}", "}", json_str)
#     json_str = re.sub(r",\s*]", "]", json_str)

#     try:
#         return json.loads(json_str)
#     except json.JSONDecodeError as e:
#         print("❌ JSON PARSE ERROR")
#         print("Cleaned JSON:\n", json_str)
#         raise e

# def frontend_scaffold_node(state):
#     print("🔥 Generating frontend scaffold")

#     llm = ChatOllama(
#         model="deepseek-coder:6.7b",
#         temperature=0.2
#     )

#     system_prompt = """
# Generate a Vite + React 18 + React Router + Tailwind scaffold.

# Return STRICT JSON:
# {
#   "files": [
#     { "filename": "package.json", "content": "..." },
#     { "filename": "vite.config.js", "content": "..." },
#     { "filename": "tailwind.config.js", "content": "..." },
#     { "filename": "postcss.config.js", "content": "..." },
#     { "filename": "index.html", "content": "..." },
#     { "filename": "src/main.jsx", "content": "..." },
#     { "filename": "src/App.jsx", "content": "..." },
#     { "filename": "src/index.css", "content": "..." }
#   ]
# }
# """

#     response = llm.invoke(system_prompt)
#     result = extract_json(response.content)

#     prefixed = []

#     for file in result.get("files", []):
#         prefixed.append({
#             "filename": f"frontend/{file['filename']}",
#             "content": file["content"]
#         })

#     return {
#         "code_files": state.get("code_files", []) + prefixed
#     }

# from langchain_ollama import ChatOllama
# from langchain_core.messages import SystemMessage
# from backend.state import AgentState
# import json
# import re


# import json
# import re

# def extract_json(text: str):
#     if not text:
#         raise ValueError("Empty model output")

#     # Remove markdown fences
#     text = re.sub(r"```json", "", text)
#     text = re.sub(r"```", "", text)

#     # Extract JSON object
#     match = re.search(r"\{.*\}", text, re.DOTALL)
#     if not match:
#         raise ValueError("No valid JSON found")

#     json_str = match.group(0)

#     # Remove trailing commas
#     json_str = re.sub(r",\s*}", "}", json_str)
#     json_str = re.sub(r",\s*]", "]", json_str)

#     try:
#         return json.loads(json_str)
#     except json.JSONDecodeError as e:
#         print("❌ RAW BROKEN JSON:\n", json_str[:1000])
#         raise e

# def frontend_scaffold_node(state: AgentState):
#     print("🔥 Generating frontend scaffold (FAST MODE)")

#     # 🔥 MUCH FASTER MODEL
#     llm = ChatOllama(
#         model="qwen2.5:3b-instruct",
#         temperature=0
#     )

#     prompt = """
# Generate a complete Vite + React 18 + React Router v6 + Tailwind CSS scaffold.

# STRICT RULES:
# - All content strings must be valid JSON strings
# - Escape all quotes properly
# - Do not include unescaped backslashes
# - Do not include Windows paths
# - Do not use template strings
# - Do not use regex patterns
# - Do not include \ unless escaped as \\
# - Return ONLY valid JSON
# - No markdown
# - No explanations
# - Use double quotes
# - No trailing commas
# - Use React 18 createRoot
# - Tailwind fully configured
# - Include react-router-dom
# - Use latest stable dependency versions

# Required structure:

# {
#   "files": [
#     { "filename": "package.json", "content": "..." },
#     { "filename": "vite.config.js", "content": "..." },
#     { "filename": "postcss.config.js", "content": "..." },
#     { "filename": "tailwind.config.js", "content": "..." },
#     { "filename": "index.html", "content": "..." },
#     { "filename": "src/main.jsx", "content": "..." },
#     { "filename": "src/App.jsx", "content": "..." },
#     { "filename": "src/index.css", "content": "..." }
#   ]
# }
# """

#     response = llm.invoke([
#         SystemMessage(content=prompt)
#     ])

#     result = extract_json(response.content)
#     files = result.get("files", [])

#     if not files:
#         return {
#             "validation_errors": ["Frontend scaffold returned no files"]
#         }

#     # ✅ Force correct folder structure
#     formatted = []
#     for file in files:
#         formatted.append({
#             "filename": f"frontend/{file['filename']}",
#             "content": file["content"]
#         })

#     print(f"✅ Generated {len(formatted)} scaffold files")

#     return {
#         "code_files": state.get("code_files", []) + formatted
#     }

# import json

# def frontend_scaffold_node(state):
#     print("⚡ Creating frontend scaffold (hardcoded)")

#     scaffold_files = [

#         {
#             "filename": "frontend/package.json",
#             "content": json.dumps({
#                 "name": "frontend",
#                 "private": True,
#                 "version": "0.0.0",
#                 "type": "module",
#                 "scripts": {
#                     "dev": "vite",
#                     "build": "vite build",
#                     "preview": "vite preview"
#                 },
#                 "dependencies": {
#                     "react": "^18.2.0",
#                     "react-dom": "^18.2.0",
#                     "react-router-dom": "^6.22.0"
#                 },
#                 "devDependencies": {
#                     "vite": "^5.0.0",
#                     "@vitejs/plugin-react": "^4.2.0",
#                     "tailwindcss": "^3.4.0",
#                     "postcss": "^8.4.0",
#                     "autoprefixer": "^10.4.0"
#                 }
#             }, indent=2)
#         },

#         {
#             "filename": "frontend/vite.config.js",
#             "content": """import { defineConfig } from 'vite'
# import react from '@vitejs/plugin-react'

# export default defineConfig({
#   plugins: [react()]
# })
# """
#         },

#         {
#             "filename": "frontend/postcss.config.js",
#             "content": """export default {
#   plugins: {
#     tailwindcss: {},
#     autoprefixer: {},
#   },
# }
# """
#         },

#         {
#             "filename": "frontend/tailwind.config.js",
#             "content": """export default {
#   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
#   theme: {
#     extend: {},
#   },
#   plugins: [],
# }
# """
#         },

#         {
#             "filename": "frontend/index.html",
#             "content": """<!DOCTYPE html>
# <html lang="en">
#   <head>
#     <meta charset="UTF-8" />
#     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
#     <title>AI Generated App</title>
#   </head>
#   <body>
#     <div id="root"></div>
#     <script type="module" src="/src/main.jsx"></script>
#   </body>
# </html>
# """
#         },

#         {
#             "filename": "frontend/src/main.jsx",
#             "content": """import React from 'react'
# import ReactDOM from 'react-dom/client'
# import App from './App.jsx'
# import './index.css'

# ReactDOM.createRoot(document.getElementById('root')).render(
#   <React.StrictMode>
#     <App />
#   </React.StrictMode>
# )
# """
#         },

# #         {
# #             "filename": "frontend/src/App.jsx",
# #             "content": """import { BrowserRouter, Routes, Route } from 'react-router-dom'

# # export default function App() {
# #   return (
# #     <BrowserRouter>
# #       <Routes>
# #         <Route path="/" element={<div className="p-10 text-2xl">Home</div>} />
# #       </Routes>
# #     </BrowserRouter>
# #   )
# # }
# # """
# #         },

#         {
#             "filename": "frontend/src/index.css",
#             "content": """@tailwind base;
# @tailwind components;
# @tailwind utilities;
# """
#         }
#     ]

#     return {
#         "code_files": state.get("code_files", []) + scaffold_files
#     }


# import json


# def frontend_scaffold_node(state):
#     print("⚡ Creating frontend scaffold (PRODUCTION READY)")

#     scaffold_files = [

#         # ===============================
#         # PACKAGE.JSON
#         # ===============================
#         {
#             "filename": "frontend/package.json",
#             "content": json.dumps({
#                 "name": "frontend",
#                 "private": True,
#                 "version": "1.0.0",
#                 "type": "module",
#                 "scripts": {
#                     "dev": "vite",
#                     "build": "vite build",
#                     "preview": "vite preview"
#                 },
#                 "dependencies": {
#                     "react": "^18.2.0",
#                     "react-dom": "^18.2.0",
#                     "react-router-dom": "^6.22.0"
#                 },
#                 "devDependencies": {
#                     "vite": "^5.0.0",
#                     "@vitejs/plugin-react": "^4.2.0",
#                     "tailwindcss": "^3.4.0",
#                     "postcss": "^8.4.0",
#                     "autoprefixer": "^10.4.0"
#                 }
#             }, indent=2)
#         },

#         # ===============================
#         # VITE CONFIG
#         # ===============================
#         {
#             "filename": "frontend/vite.config.js",
#             "content": """import { defineConfig } from 'vite'
# import react from '@vitejs/plugin-react'

# export default defineConfig({
#   plugins: [react()],
#   server: {
#     port: 5173,
#     open: true
#   }
# })
# """
#         },

#         # ===============================
#         # POSTCSS CONFIG
#         # ===============================
#         {
#             "filename": "frontend/postcss.config.js",
#             "content": """export default {
#   plugins: {
#     tailwindcss: {},
#     autoprefixer: {},
#   },
# }
# """
#         },

#         # ===============================
#         # TAILWIND CONFIG (Improved)
#         # ===============================
#         {
#             "filename": "frontend/tailwind.config.js",
#             "content": """export default {
#   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
#   theme: {
#     extend: {
#       colors: {
#         primary: "#4f46e5",
#         secondary: "#0ea5e9"
#       }
#     },
#   },
#   plugins: [],
# }
# """
#         },

#         # ===============================
#         # INDEX.HTML (Improved SEO)
#         # ===============================
#         {
#             "filename": "frontend/index.html",
#             "content": """<!DOCTYPE html>
# <html lang="en">
#   <head>
#     <meta charset="UTF-8" />
#     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
#     <meta name="description" content="AI Generated SaaS Application" />
#     <title>AI SaaS App</title>
#   </head>
#   <body class="bg-gray-50">
#     <div id="root"></div>
#     <script type="module" src="/src/main.jsx"></script>
#   </body>
# </html>
# """
#         },

#         # ===============================
#         # MAIN ENTRY
#         # ===============================
#         {
#             "filename": "frontend/src/main.jsx",
#             "content": """import React from 'react'
# import ReactDOM from 'react-dom/client'
# import App from './App.jsx'
# import './index.css'

# ReactDOM.createRoot(document.getElementById('root')).render(
#   <React.StrictMode>
#     <App />
#   </React.StrictMode>
# )
# """
#         },

#         # ===============================
#         # LAYOUT COMPONENT
#         # ===============================
#         {
#             "filename": "frontend/src/components/Layout.jsx",
#             "content": """import Navbar from './Navbar'

# export default function Layout({ children }) {
#   return (
#     <div className="min-h-screen flex flex-col">
#       <Navbar />
#       <main className="flex-1 container mx-auto px-6 py-10">
#         {children}
#       </main>
#       <footer className="bg-gray-900 text-white text-center py-6">
#         © 2026 AI Generated App
#       </footer>
#     </div>
#   )
# }
# """
#         },

#         # ===============================
#         # NAVBAR COMPONENT
#         # ===============================
#         {
#             "filename": "frontend/src/components/Navbar.jsx",
#             "content": """import { Link } from 'react-router-dom'

# export default function Navbar() {
#   return (
#     <nav className="bg-white shadow-md">
#       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
#         <h1 className="text-xl font-bold text-primary">AI Builder</h1>
#         <div className="space-x-6">
#           <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
#         </div>
#       </div>
#     </nav>
#   )
# }
# """
#         },

#         # ===============================
#         # EMPTY APP (Will be replaced by router node)
#         # ===============================
#         {
#             "filename": "frontend/src/App.jsx",
#             "content": """import { BrowserRouter, Routes, Route } from 'react-router-dom'
# import Layout from './components/Layout'

# export default function App() {
#   return (
#     <BrowserRouter>
#       <Layout>
#         <Routes>
#           <Route path="/" element={<div className="text-3xl font-bold">Loading...</div>} />
#         </Routes>
#       </Layout>
#     </BrowserRouter>
#   )
# }
# """
#         },

#         # ===============================
#         # INDEX.CSS
#         # ===============================
#         {
#             "filename": "frontend/src/index.css",
#             "content": """@tailwind base;
# @tailwind components;
# @tailwind utilities;

# body {
#   font-family: ui-sans-serif, system-ui, sans-serif;
# }
# """
#         }
#     ]

#     return {
#         "code_files": state.get("code_files", []) + scaffold_files
#     }


import json

def frontend_scaffold_node(state):
    print("⚡ Creating frontend scaffold (ENTERPRISE MODE)")

    scaffold_files = [

        # ===============================
        # PACKAGE.JSON (Improved)
        # ===============================
        {
            "filename": "frontend/package.json",
            "content": json.dumps({
                "name": "frontend",
                "private": True,
                "version": "1.0.0",
                "type": "module",
                "scripts": {
                    "dev": "vite",
                    "build": "vite build",
                    "preview": "vite preview"
                },
                "dependencies": {
                    "react": "^18.2.0",
                    "react-dom": "^18.2.0",
                    "react-router-dom": "^6.22.0",
                    "axios": "^1.6.7"
                },
                "devDependencies": {
                    "vite": "^5.0.0",
                    "@vitejs/plugin-react": "^4.2.0",
                    "tailwindcss": "^3.4.0",
                    "postcss": "^8.4.0",
                    "autoprefixer": "^10.4.0"
                }
            }, indent=2)
        },

        # ===============================
        # VITE CONFIG
        # ===============================
        {
            "filename": "frontend/vite.config.js",
            "content": """import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
"""
        },

        # ===============================
        # ENV FILE
        # ===============================
        {
            "filename": "frontend/.env",
            "content": """VITE_API_URL=http://localhost:8000
"""
        },

        # ===============================
        # POSTCSS CONFIG
        # ===============================
        {
            "filename": "frontend/postcss.config.js",
            "content": """export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
"""
        },

        # ===============================
        # TAILWIND CONFIG (THEME READY)
        # ===============================
        {
            "filename": "frontend/tailwind.config.js",
            "content": """export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#0ea5e9",
        background: "#f9fafb"
      }
    }
  },
  plugins: [],
}
"""
        },

        # ===============================
        # INDEX.HTML
        # ===============================
        {
            "filename": "frontend/index.html",
            "content": """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AI Generated SaaS Application" />
    <title>AI SaaS App</title>
  </head>
  <body class="bg-background text-gray-900">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"""
        },

        # ===============================
        # MAIN ENTRY
        # ===============================
        {
            "filename": "frontend/src/main.jsx",
            "content": """import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
"""
        },

        # ===============================
        # API CLIENT
        # ===============================
        {
            "filename": "frontend/src/api/client.js",
            "content": """import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default api
"""
        },

        # ===============================
        # LAYOUT
        # ===============================
        {
    "filename": "frontend/src/components/Layout.jsx",
    "content": """export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}
      </main>
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2026 AI Builder
      </footer>
    </div>
  )
}
"""
},
        # ===============================
        # UI COMPONENTS
        # ===============================
        {
    "filename": "frontend/src/components/ui/Card.jsx",
    "content": """export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition ${className}`}>
      {children}
    </div>
  )
}
"""
},

      {
    "filename": "frontend/src/components/ui/Button.jsx",
    "content": """export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-primary text-white rounded-xl shadow hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  )
}
"""
},

        # ===============================
        # APP ROOT (Router Placeholder)
        # ===============================
        {
            "filename": "frontend/src/App.jsx",
            "content": """import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div className="text-3xl font-bold">Loading...</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
"""
        },

        # ===============================
        # INDEX.CSS
        # ===============================
        {
            "filename": "frontend/src/index.css",
            "content": """@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: ui-sans-serif, system-ui, sans-serif;
}
"""
        }
    ]

    return {
        "code_files": state.get("code_files", []) + scaffold_files
    }