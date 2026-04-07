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


# import json

# def frontend_scaffold_node(state):
#     print("⚡ Creating frontend scaffold (ENTERPRISE MODE)")

#     scaffold_files = [

#         # ===============================
#         # PACKAGE.JSON (Improved)
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
#                     "react-router-dom": "^6.22.0",
#                     "axios": "^1.6.7"
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
#         # ENV FILE
#         # ===============================
#         {
#             "filename": "frontend/.env",
#             "content": """VITE_API_URL=http://localhost:8000
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
#         # TAILWIND CONFIG (THEME READY)
#         # ===============================
#         {
#             "filename": "frontend/tailwind.config.js",
#             "content": """export default {
#   darkMode: 'class',
#   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
#   theme: {
#     extend: {
#       colors: {
#         primary: "#4f46e5",
#         secondary: "#0ea5e9",
#         background: "#f9fafb"
#       }
#     }
#   },
#   plugins: [],
# }
# """
#         },

#         # ===============================
#         # INDEX.HTML
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
#   <body class="bg-background text-gray-900">
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
#         # API CLIENT
#         # ===============================
#         {
#             "filename": "frontend/src/api/client.js",
#             "content": """import axios from 'axios'

# const api = axios.create({
#   baseURL: import.meta.env.VITE_API_URL
# })

# export default api
# """
#         },

#         # ===============================
#         # LAYOUT
#         # ===============================
#         {
#     "filename": "frontend/src/components/Layout.jsx",
#     "content": """export default function Layout({ children }) {
#   return (
#     <div className="min-h-screen flex flex-col bg-background">
#       <main className="flex-1 container mx-auto px-6 py-10">
#         {children}
#       </main>
#       <footer className="bg-gray-900 text-white text-center py-6">
#         © 2026 AI Builder
#       </footer>
#     </div>
#   )
# }
# """
# },
#         # ===============================
#         # UI COMPONENTS
#         # ===============================
#         {
#     "filename": "frontend/src/components/ui/Card.jsx",
#     "content": """export default function Card({ children, className = "" }) {
#   return (
#     <div className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition ${className}`}>
#       {children}
#     </div>
#   )
# }
# """
# },

#       {
#     "filename": "frontend/src/components/ui/Button.jsx",
#     "content": """export default function Button({ children, onClick, className = "" }) {
#   return (
#     <button
#       onClick={onClick}
#       className={`px-6 py-3 bg-primary text-white rounded-xl shadow hover:opacity-90 transition ${className}`}
#     >
#       {children}
#     </button>
#   )
# }
# """
# },

#         # ===============================
#         # APP ROOT (Router Placeholder)
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



# import json
# from backend.state import AgentState


# # ==============================================================
# # Helpers
# # ==============================================================

# def _json(obj: object) -> str:
#     return json.dumps(obj, indent=2)


# def _file(filename: str, content: str) -> dict:
#     return {"filename": filename, "content": content}


# # ==============================================================
# # Individual file builders
# # ==============================================================

# def _package_json(app_name: str, description: str) -> dict:
#     return _file("frontend/package.json", _json({
#         "name": app_name.lower().replace(" ", "-") or "frontend",
#         "private": True,
#         "version": "0.1.0",
#         "type": "module",
#         "description": description,
#         "scripts": {
#             "dev":     "vite",
#             "build":   "tsc && vite build",
#             "preview": "vite preview",
#             "lint":    "eslint src --ext ts,tsx --report-unused-disable-directives",
#             "typecheck": "tsc --noEmit",
#         },
#         "dependencies": {
#             "react":            "^18.3.0",
#             "react-dom":        "^18.3.0",
#             "react-router-dom": "^6.22.0",
#             "axios":            "^1.6.7",
#             "clsx":             "^2.1.0",
#             "react-hot-toast":  "^2.4.1",
#         },
#         "devDependencies": {
#             "@types/react":            "^18.3.0",
#             "@types/react-dom":        "^18.3.0",
#             "@vitejs/plugin-react":    "^4.2.0",
#             "autoprefixer":            "^10.4.0",
#             "eslint":                  "^8.57.0",
#             "postcss":                 "^8.4.0",
#             "tailwindcss":             "^3.4.0",
#             "typescript":              "^5.4.0",
#             "vite":                    "^5.2.0",
#         },
#     }))


# def _tsconfig() -> dict:
#     return _file("frontend/tsconfig.json", _json({
#         "compilerOptions": {
#             "target":          "ES2020",
#             "useDefineForClassFields": True,
#             "lib":             ["ES2020", "DOM", "DOM.Iterable"],
#             "module":          "ESNext",
#             "skipLibCheck":    True,
#             "moduleResolution":"bundler",
#             "allowImportingTsExtensions": True,
#             "resolveJsonModule": True,
#             "isolatedModules": True,
#             "noEmit":          True,
#             "jsx":             "react-jsx",
#             "strict":          True,
#             "noUnusedLocals":  True,
#             "noUnusedParameters": True,
#             "noFallthroughCasesInSwitch": True,
#             "baseUrl":         ".",
#             "paths":           {"@/*": ["src/*"]},
#         },
#         "include": ["src"],
#         "references": [{"path": "./tsconfig.node.json"}],
#     }))


# def _tsconfig_node() -> dict:
#     return _file("frontend/tsconfig.node.json", _json({
#         "compilerOptions": {
#             "composite":       True,
#             "skipLibCheck":    True,
#             "module":          "ESNext",
#             "moduleResolution":"bundler",
#             "allowSyntheticDefaultImports": True,
#         },
#         "include": ["vite.config.ts"],
#     }))


# def _vite_config() -> dict:
#     return _file("frontend/vite.config.ts",
#         "import { defineConfig } from 'vite'\n"
#         "import react from '@vitejs/plugin-react'\n"
#         "import path from 'path'\n"
#         "\n"
#         "export default defineConfig({\n"
#         "  plugins: [react()],\n"
#         "  resolve: {\n"
#         "    alias: { '@': path.resolve(__dirname, './src') },\n"
#         "  },\n"
#         "  server: {\n"
#         "    port: 5173,\n"
#         "    open: true,\n"
#         "    proxy: {\n"
#         "      '/api': {\n"
#         "        target: 'http://localhost:8000',\n"
#         "        changeOrigin: true,\n"
#         "        rewrite: (p) => p.replace(/^\\/api/, ''),\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  build: {\n"
#         "    sourcemap: true,\n"
#         "    rollupOptions: {\n"
#         "      output: {\n"
#         "        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "})\n"
#     )


# def _env_files() -> list[dict]:
#     return [
#         _file("frontend/.env",              "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.production",   "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.example",      "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#     ]


# def _postcss_config() -> dict:
#     return _file("frontend/postcss.config.js",
#         "export default {\n"
#         "  plugins: { tailwindcss: {}, autoprefixer: {} },\n"
#         "}\n"
#     )


# def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
#     return _file("frontend/tailwind.config.js",
#         "/** @type {import('tailwindcss').Config} */\n"
#         "export default {\n"
#         "  darkMode: 'class',\n"
#         "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n"
#         "  theme: {\n"
#         "    extend: {\n"
#         "      colors: {\n"
#         "        primary:    { DEFAULT: '" + primary + "', hover: '" + primary + "dd' },\n"
#         "        secondary:  { DEFAULT: '" + secondary + "' },\n"
#         "        surface:    '#ffffff',\n"
#         "        background: '#f8fafc',\n"
#         "        muted:      '#64748b',\n"
#         "        border:     '#e2e8f0',\n"
#         "      },\n"
#         "      fontFamily: {\n"
#         "        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],\n"
#         "      },\n"
#         "      borderRadius: {\n"
#         "        xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem',\n"
#         "      },\n"
#         "      boxShadow: {\n"
#         "        card:  '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',\n"
#         "        modal: '0 20px 60px -10px rgb(0 0 0 / 0.25)',\n"
#         "      },\n"
#         "      animation: {\n"
#         "        'fade-in':    'fadeIn 0.3s ease-out',\n"
#         "        'slide-up':   'slideUp 0.4s ease-out',\n"
#         "        'spin-slow':  'spin 3s linear infinite',\n"
#         "      },\n"
#         "      keyframes: {\n"
#         "        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },\n"
#         "        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  plugins: [],\n"
#         "}\n"
#     )


# def _index_html(app_name: str) -> dict:
#     return _file("frontend/index.html",
#         "<!DOCTYPE html>\n"
#         '<html lang="en" class="scroll-smooth">\n'
#         "  <head>\n"
#         '    <meta charset="UTF-8" />\n'
#         '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
#         '    <meta name="description" content="' + app_name + ' - AI Generated SaaS Application" />\n'
#         '    <meta name="theme-color" content="#4f46e5" />\n'
#         '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
#         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
#         '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />\n'
#         "    <title>" + app_name + "</title>\n"
#         "  </head>\n"
#         '  <body class="bg-background text-gray-900 antialiased">\n'
#         '    <div id="root"></div>\n'
#         '    <script type="module" src="/src/main.tsx"></script>\n'
#         "  </body>\n"
#         "</html>\n"
#     )


# def _main_tsx(app_name: str) -> dict:
#     return _file("frontend/src/main.tsx",
#         "import React from 'react'\n"
#         "import ReactDOM from 'react-dom/client'\n"
#         "import { Toaster } from 'react-hot-toast'\n"
#         "import App from './App'\n"
#         "import './index.css'\n"
#         "\n"
#         "ReactDOM.createRoot(document.getElementById('root')!).render(\n"
#         "  <React.StrictMode>\n"
#         "    <App />\n"
#         "    <Toaster\n"
#         "      position=\"top-right\"\n"
#         "      toastOptions={{\n"
#         "        duration: 4000,\n"
#         "        style: { borderRadius: '0.75rem', fontFamily: 'Inter, sans-serif' },\n"
#         "      }}\n"
#         "    />\n"
#         "  </React.StrictMode>\n"
#         ")\n"
#     )


# def _index_css() -> dict:
#     return _file("frontend/src/index.css",
#         "@tailwind base;\n"
#         "@tailwind components;\n"
#         "@tailwind utilities;\n"
#         "\n"
#         "@layer base {\n"
#         "  *, *::before, *::after { box-sizing: border-box; }\n"
#         "  html { -webkit-font-smoothing: antialiased; }\n"
#         "  :root {\n"
#         "    --color-primary:   #4f46e5;\n"
#         "    --color-secondary: #0ea5e9;\n"
#         "    --radius:          0.75rem;\n"
#         "  }\n"
#         "}\n"
#         "\n"
#         "@layer utilities {\n"
#         "  .center { @apply flex items-center justify-center; }\n"
#         "  .section { @apply py-20 px-6; }\n"
#         "  .container-narrow { @apply max-w-4xl mx-auto; }\n"
#         "  .text-balance { text-wrap: balance; }\n"
#         "}\n"
#     )


# def _api_client() -> dict:
#     return _file("frontend/src/api/client.ts",
#         "import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'\n"
#         "\n"
#         "const api = axios.create({\n"
#         "  baseURL: import.meta.env.VITE_API_URL,\n"
#         "  timeout: 15_000,\n"
#         "  headers: { 'Content-Type': 'application/json' },\n"
#         "})\n"
#         "\n"
#         "// --- Request interceptor: attach auth token ---\n"
#         "api.interceptors.request.use((config: InternalAxiosRequestConfig) => {\n"
#         "  const token = localStorage.getItem('token')\n"
#         "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
#         "  return config\n"
#         "})\n"
#         "\n"
#         "// --- Response interceptor: global error handling ---\n"
#         "api.interceptors.response.use(\n"
#         "  (res: AxiosResponse) => res,\n"
#         "  (err: AxiosError) => {\n"
#         "    if (err.response?.status === 401) {\n"
#         "      localStorage.removeItem('token')\n"
#         "      window.location.href = '/login'\n"
#         "    }\n"
#         "    return Promise.reject(err)\n"
#         "  }\n"
#         ")\n"
#         "\n"
#         "export default api\n"
#     )


# def _hooks() -> list[dict]:
#     use_api = (
#         "import { useState, useCallback } from 'react'\n"
#         "import { AxiosError } from 'axios'\n"
#         "import toast from 'react-hot-toast'\n"
#         "import api from '@/api/client'\n"
#         "\n"
#         "interface UseApiState<T> {\n"
#         "  data: T | null\n"
#         "  loading: boolean\n"
#         "  error: string | null\n"
#         "}\n"
#         "\n"
#         "export function useApi<T>(url: string) {\n"
#         "  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })\n"
#         "\n"
#         "  const fetch = useCallback(async (params?: object) => {\n"
#         "    setState(s => ({ ...s, loading: true, error: null }))\n"
#         "    try {\n"
#         "      const { data } = await api.get<T>(url, { params })\n"
#         "      setState({ data, loading: false, error: null })\n"
#         "      return data\n"
#         "    } catch (err) {\n"
#         "      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'\n"
#         "      setState(s => ({ ...s, loading: false, error: msg }))\n"
#         "      toast.error(msg)\n"
#         "    }\n"
#         "  }, [url])\n"
#         "\n"
#         "  return { ...state, fetch }\n"
#         "}\n"
#     )

#     use_local_storage = (
#         "import { useState, useEffect } from 'react'\n"
#         "\n"
#         "export function useLocalStorage<T>(key: string, initialValue: T) {\n"
#         "  const [value, setValue] = useState<T>(() => {\n"
#         "    try {\n"
#         "      const item = window.localStorage.getItem(key)\n"
#         "      return item ? (JSON.parse(item) as T) : initialValue\n"
#         "    } catch { return initialValue }\n"
#         "  })\n"
#         "\n"
#         "  useEffect(() => {\n"
#         "    try { window.localStorage.setItem(key, JSON.stringify(value)) }\n"
#         "    catch { /* quota exceeded */ }\n"
#         "  }, [key, value])\n"
#         "\n"
#         "  return [value, setValue] as const\n"
#         "}\n"
#     )

#     return [
#         _file("frontend/src/hooks/useApi.ts", use_api),
#         _file("frontend/src/hooks/useLocalStorage.ts", use_local_storage),
#     ]


# def _ui_components() -> list[dict]:
#     button = (
#         "import { ButtonHTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'\n"
#         "type Size    = 'sm' | 'md' | 'lg'\n"
#         "\n"
#         "interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: Variant\n"
#         "  size?: Size\n"
#         "  loading?: boolean\n"
#         "  fullWidth?: boolean\n"
#         "}\n"
#         "\n"
#         "const variants: Record<Variant, string> = {\n"
#         "  primary:   'bg-primary text-white hover:bg-primary/90 shadow-sm',\n"
#         "  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',\n"
#         "  ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 border border-border',\n"
#         "  danger:    'bg-red-600 text-white hover:bg-red-700 shadow-sm',\n"
#         "}\n"
#         "\n"
#         "const sizes: Record<Size, string> = {\n"
#         "  sm: 'px-3 py-1.5 text-sm',\n"
#         "  md: 'px-5 py-2.5 text-sm',\n"
#         "  lg: 'px-7 py-3 text-base',\n"
#         "}\n"
#         "\n"
#         "export default function Button({\n"
#         "  children, variant = 'primary', size = 'md',\n"
#         "  loading = false, fullWidth = false, className, disabled, ...props\n"
#         "}: ButtonProps) {\n"
#         "  return (\n"
#         "    <button\n"
#         "      disabled={disabled || loading}\n"
#         "      className={clsx(\n"
#         "        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',\n"
#         "        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',\n"
#         "        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none',\n"
#         "        variants[variant], sizes[size],\n"
#         "        fullWidth && 'w-full',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {loading && (\n"
#         "        <svg className=\"animate-spin h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "          <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "          <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "        </svg>\n"
#         "      )}\n"
#         "      {children}\n"
#         "    </button>\n"
#         "  )\n"
#         "}\n"
#     )

#     card = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface CardProps extends HTMLAttributes<HTMLDivElement> {\n"
#         "  children: ReactNode\n"
#         "  padding?: 'none' | 'sm' | 'md' | 'lg'\n"
#         "  hoverable?: boolean\n"
#         "}\n"
#         "\n"
#         "const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }\n"
#         "\n"
#         "export default function Card({ children, padding = 'md', hoverable = false, className, ...props }: CardProps) {\n"
#         "  return (\n"
#         "    <div\n"
#         "      className={clsx(\n"
#         "        'bg-surface rounded-2xl border border-border shadow-card',\n"
#         "        paddings[padding],\n"
#         "        hoverable && 'transition-shadow duration-200 hover:shadow-md cursor-pointer',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )

#     badge = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'\n"
#         "\n"
#         "const styles: Record<BadgeVariant, string> = {\n"
#         "  default: 'bg-gray-100 text-gray-700',\n"
#         "  success: 'bg-green-100 text-green-700',\n"
#         "  warning: 'bg-yellow-100 text-yellow-800',\n"
#         "  danger:  'bg-red-100 text-red-700',\n"
#         "  info:    'bg-blue-100 text-blue-700',\n"
#         "}\n"
#         "\n"
#         "interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: BadgeVariant\n"
#         "}\n"
#         "\n"
#         "export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {\n"
#         "  return (\n"
#         "    <span\n"
#         "      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </span>\n"
#         "  )\n"
#         "}\n"
#     )

#     spinner = (
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "export default function Spinner({ className }: { className?: string }) {\n"
#         "  return (\n"
#         "    <svg\n"
#         "      className={clsx('animate-spin text-primary', className ?? 'h-6 w-6')}\n"
#         "      fill=\"none\" viewBox=\"0 0 24 24\"\n"
#         "    >\n"
#         "      <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "      <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "    </svg>\n"
#         "  )\n"
#         "}\n"
#     )

#     input_field = (
#         "import { InputHTMLAttributes, forwardRef } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface InputProps extends InputHTMLAttributes<HTMLInputElement> {\n"
#         "  label?: string\n"
#         "  error?: string\n"
#         "  hint?: string\n"
#         "}\n"
#         "\n"
#         "const Input = forwardRef<HTMLInputElement, InputProps>(function Input(\n"
#         "  { label, error, hint, className, id, ...props }, ref\n"
#         ") {\n"
#         "  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')\n"
#         "  return (\n"
#         "    <div className=\"flex flex-col gap-1\">\n"
#         "      {label && (\n"
#         "        <label htmlFor={inputId} className=\"text-sm font-medium text-gray-700\">\n"
#         "          {label}\n"
#         "        </label>\n"
#         "      )}\n"
#         "      <input\n"
#         "        ref={ref}\n"
#         "        id={inputId}\n"
#         "        className={clsx(\n"
#         "          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',\n"
#         "          'transition focus:ring-2 focus:ring-primary/40',\n"
#         "          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',\n"
#         "          'disabled:opacity-50 disabled:cursor-not-allowed',\n"
#         "          className,\n"
#         "        )}\n"
#         "        {...props}\n"
#         "      />\n"
#         "      {error && <p className=\"text-xs text-red-600\">{error}</p>}\n"
#         "      {hint && !error && <p className=\"text-xs text-muted\">{hint}</p>}\n"
#         "    </div>\n"
#         "  )\n"
#         "})\n"
#         "\n"
#         "export default Input\n"
#     )

#     return [
#         _file("frontend/src/components/ui/Button.tsx",  button),
#         _file("frontend/src/components/ui/Card.tsx",    card),
#         _file("frontend/src/components/ui/Badge.tsx",   badge),
#         _file("frontend/src/components/ui/Spinner.tsx", spinner),
#         _file("frontend/src/components/ui/Input.tsx",   input_field),
#     ]


# def _layout(app_name: str) -> dict:
#     return _file("frontend/src/components/Layout.tsx",
#         "import { ReactNode } from 'react'\n"
#         "\n"
#         "export default function Layout({ children }: { children: ReactNode }) {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex flex-col bg-background\">\n"
#         "      <main className=\"flex-1 animate-fade-in\">\n"
#         "        {children}\n"
#         "      </main>\n"
#         "      <footer className=\"bg-gray-950 text-white py-8\">\n"
#         "        <div className=\"container mx-auto px-6 text-center text-sm text-gray-400\">\n"
#         "          &copy; {new Date().getFullYear()} " + app_name + ". All rights reserved.\n"
#         "        </div>\n"
#         "      </footer>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _error_boundary() -> dict:
#     return _file("frontend/src/components/ErrorBoundary.tsx",
#         "import { Component, ErrorInfo, ReactNode } from 'react'\n"
#         "\n"
#         "interface Props  { children: ReactNode }\n"
#         "interface State  { hasError: boolean; message: string }\n"
#         "\n"
#         "export default class ErrorBoundary extends Component<Props, State> {\n"
#         "  state: State = { hasError: false, message: '' }\n"
#         "\n"
#         "  static getDerivedStateFromError(err: Error): State {\n"
#         "    return { hasError: true, message: err.message }\n"
#         "  }\n"
#         "\n"
#         "  componentDidCatch(err: Error, info: ErrorInfo) {\n"
#         "    console.error('[ErrorBoundary]', err, info)\n"
#         "  }\n"
#         "\n"
#         "  render() {\n"
#         "    if (this.state.hasError) {\n"
#         "      return (\n"
#         "        <div className=\"min-h-screen center flex-col gap-4 text-center px-6\">\n"
#         "          <h1 className=\"text-3xl font-bold text-gray-900\">Something went wrong</h1>\n"
#         "          <p className=\"text-muted\">{this.state.message}</p>\n"
#         "          <button\n"
#         "            onClick={() => this.setState({ hasError: false, message: '' })}\n"
#         "            className=\"px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "          >\n"
#         "            Try again\n"
#         "          </button>\n"
#         "        </div>\n"
#         "      )\n"
#         "    }\n"
#         "    return this.props.children\n"
#         "  }\n"
#         "}\n"
#     )


# def _not_found_page() -> dict:
#     return _file("frontend/src/pages/NotFound.tsx",
#         "import { Link } from 'react-router-dom'\n"
#         "\n"
#         "export default function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen center flex-col gap-6 text-center px-6\">\n"
#         "      <span className=\"text-8xl font-black text-gray-100 select-none\">404</span>\n"
#         "      <div className=\"-mt-8\">\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
#         "        <Link\n"
#         "          to=\"/\"\n"
#         "          className=\"inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "        >\n"
#         "          Go home\n"
#         "        </Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _app_tsx(pages: list[str]) -> dict:
#     imports = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in pages
#     )
#     routes = "".join(
#         "          <Route path=\"/" + ("" if i == 0 else p.lower()) + "\" element={<" + p + " />} />\n"
#         for i, p in enumerate(pages)
#     )
#     if not pages:
#         imports = ""
#         routes  = '          <Route path="/" element={<div className="center min-h-screen text-2xl font-bold">Welcome</div>} />\n'

#     return _file("frontend/src/App.tsx",
#         "import { BrowserRouter, Routes, Route } from 'react-router-dom'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         + imports
#         + "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + routes
#         + '          <Route path="*" element={<NotFound />} />\n'
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )


# def _types() -> dict:
#     return _file("frontend/src/types/index.ts",
#         "// ---- API response wrapper ----\n"
#         "export interface ApiResponse<T> {\n"
#         "  data:    T\n"
#         "  message: string\n"
#         "  success: boolean\n"
#         "}\n"
#         "\n"
#         "// ---- Pagination ----\n"
#         "export interface PaginatedResponse<T> {\n"
#         "  items:   T[]\n"
#         "  total:   number\n"
#         "  page:    number\n"
#         "  size:    number\n"
#         "  pages:   number\n"
#         "}\n"
#         "\n"
#         "// ---- Auth ----\n"
#         "export interface User {\n"
#         "  id:         string\n"
#         "  email:      string\n"
#         "  name:       string\n"
#         "  role:       'admin' | 'user'\n"
#         "  created_at: string\n"
#         "}\n"
#         "\n"
#         "export interface AuthTokens {\n"
#         "  access_token:  string\n"
#         "  refresh_token: string\n"
#         "  token_type:    string\n"
#         "}\n"
#     )


# def _gitignore() -> dict:
#     return _file("frontend/.gitignore",
#         "node_modules/\ndist/\n.env\n.env.local\n.env.*.local\n"
#         "*.log\n.DS_Store\n*.pem\n.vscode/\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_scaffold_node(state: AgentState) -> dict:
#     print("Generating frontend scaffold (ENTERPRISE MODE)")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     app_name    = site_plan.get("app_name", requirements.get("app_name", "AI Builder"))
#     description = site_plan.get("description", requirements.get("description", "AI Generated SaaS Application"))
#     pages       = site_plan.get("pages", [])
#     primary     = site_plan.get("primary_color",   requirements.get("primary_color",   "#4f46e5"))
#     secondary   = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

#     scaffold: list[dict] = [
#         _package_json(app_name, description),
#         _tsconfig(),
#         _tsconfig_node(),
#         _vite_config(),
#         *_env_files(),
#         _postcss_config(),
#         _tailwind_config(primary, secondary),
#         _index_html(app_name),
#         _main_tsx(app_name),
#         _index_css(),
#         _api_client(),
#         *_hooks(),
#         *_ui_components(),
#         _layout(app_name),
#         _error_boundary(),
#         _not_found_page(),
#         _app_tsx(pages),
#         _types(),
#         _gitignore(),
#     ]

#     print(f"Generated {len(scaffold)} scaffold files  |  app: {app_name}  |  pages: {pages}")

#     return {
#         "code_files": state.get("code_files", []) + scaffold,
#     }


# import json
# from backend.state import AgentState


# # ==============================================================
# # Helpers
# # ==============================================================

# def _json(obj: object) -> str:
#     return json.dumps(obj, indent=2)


# def _file(filename: str, content: str) -> dict:
#     return {"filename": filename, "content": content}


# # ==============================================================
# # Individual file builders
# # ==============================================================

# def _package_json(app_name: str, description: str) -> dict:
#     return _file("frontend/package.json", _json({
#         "name": app_name.lower().replace(" ", "-") or "frontend",
#         "private": True,
#         "version": "0.1.0",
#         "type": "module",
#         "description": description,
#         "scripts": {
#             "dev":     "vite",
#             "build":   "tsc && vite build",
#             "preview": "vite preview",
#             "lint":    "eslint src --ext ts,tsx --report-unused-disable-directives",
#             "typecheck": "tsc --noEmit",
#         },
#         "dependencies": {
#             "react":            "^18.3.0",
#             "react-dom":        "^18.3.0",
#             "react-router-dom": "^6.22.0",
#             "axios":            "^1.6.7",
#             "clsx":             "^2.1.0",
#             "react-hot-toast":  "^2.4.1",
#         },
#         "devDependencies": {
#             "@types/react":            "^18.3.0",
#             "@types/react-dom":        "^18.3.0",
#             "@vitejs/plugin-react":    "^4.2.0",
#             "autoprefixer":            "^10.4.0",
#             "eslint":                  "^8.57.0",
#             "postcss":                 "^8.4.0",
#             "tailwindcss":             "^3.4.0",
#             "typescript":              "^5.4.0",
#             "vite":                    "^5.2.0",
#         },
#     }))


# def _tsconfig() -> dict:
#     return _file("frontend/tsconfig.json", _json({
#         "compilerOptions": {
#             "target":          "ES2020",
#             "useDefineForClassFields": True,
#             "lib":             ["ES2020", "DOM", "DOM.Iterable"],
#             "module":          "ESNext",
#             "skipLibCheck":    True,
#             "moduleResolution":"bundler",
#             "allowImportingTsExtensions": True,
#             "resolveJsonModule": True,
#             "isolatedModules": True,
#             "noEmit":          True,
#             "jsx":             "react-jsx",
#             "strict":          True,
#             "noUnusedLocals":  True,
#             "noUnusedParameters": True,
#             "noFallthroughCasesInSwitch": True,
#             "baseUrl":         ".",
#             "paths":           {"@/*": ["src/*"]},
#         },
#         "include": ["src"],
#         "references": [{"path": "./tsconfig.node.json"}],
#     }))


# def _tsconfig_node() -> dict:
#     return _file("frontend/tsconfig.node.json", _json({
#         "compilerOptions": {
#             "composite":       True,
#             "skipLibCheck":    True,
#             "module":          "ESNext",
#             "moduleResolution":"bundler",
#             "allowSyntheticDefaultImports": True,
#         },
#         "include": ["vite.config.ts"],
#     }))


# def _vite_config() -> dict:
#     return _file("frontend/vite.config.ts",
#         "import { defineConfig } from 'vite'\n"
#         "import react from '@vitejs/plugin-react'\n"
#         "import path from 'path'\n"
#         "\n"
#         "export default defineConfig({\n"
#         "  plugins: [react()],\n"
#         "  resolve: {\n"
#         "    alias: { '@': path.resolve(__dirname, './src') },\n"
#         "  },\n"
#         "  server: {\n"
#         "    port: 5173,\n"
#         "    open: true,\n"
#         "    proxy: {\n"
#         "      '/api': {\n"
#         "        target: 'http://localhost:8000',\n"
#         "        changeOrigin: true,\n"
#         "        rewrite: (p) => p.replace(/^\\/api/, ''),\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  build: {\n"
#         "    sourcemap: true,\n"
#         "    rollupOptions: {\n"
#         "      output: {\n"
#         "        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "})\n"
#     )


# def _env_files() -> list[dict]:
#     return [
#         _file("frontend/.env",              "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.production",   "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.example",      "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#     ]


# def _postcss_config() -> dict:
#     return _file("frontend/postcss.config.js",
#         "export default {\n"
#         "  plugins: { tailwindcss: {}, autoprefixer: {} },\n"
#         "}\n"
#     )


# def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
#     return _file("frontend/tailwind.config.js",
#         "/** @type {import('tailwindcss').Config} */\n"
#         "export default {\n"
#         "  darkMode: 'class',\n"
#         "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n"
#         "  theme: {\n"
#         "    extend: {\n"
#         "      colors: {\n"
#         "        primary:    { DEFAULT: '" + primary + "', hover: '" + primary + "dd' },\n"
#         "        secondary:  { DEFAULT: '" + secondary + "' },\n"
#         "        surface:    '#ffffff',\n"
#         "        background: '#f8fafc',\n"
#         "        muted:      '#64748b',\n"
#         "        border:     '#e2e8f0',\n"
#         "      },\n"
#         "      fontFamily: {\n"
#         "        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],\n"
#         "      },\n"
#         "      borderRadius: {\n"
#         "        xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem',\n"
#         "      },\n"
#         "      boxShadow: {\n"
#         "        card:  '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',\n"
#         "        modal: '0 20px 60px -10px rgb(0 0 0 / 0.25)',\n"
#         "      },\n"
#         "      animation: {\n"
#         "        'fade-in':    'fadeIn 0.3s ease-out',\n"
#         "        'slide-up':   'slideUp 0.4s ease-out',\n"
#         "        'spin-slow':  'spin 3s linear infinite',\n"
#         "      },\n"
#         "      keyframes: {\n"
#         "        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },\n"
#         "        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  plugins: [],\n"
#         "}\n"
#     )


# def _index_html(app_name: str) -> dict:
#     return _file("frontend/index.html",
#         "<!DOCTYPE html>\n"
#         '<html lang="en" class="scroll-smooth">\n'
#         "  <head>\n"
#         '    <meta charset="UTF-8" />\n'
#         '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
#         '    <meta name="description" content="' + app_name + ' - AI Generated SaaS Application" />\n'
#         '    <meta name="theme-color" content="#4f46e5" />\n'
#         '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
#         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
#         '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />\n'
#         "    <title>" + app_name + "</title>\n"
#         "  </head>\n"
#         '  <body class="bg-background text-gray-900 antialiased">\n'
#         '    <div id="root"></div>\n'
#         '    <script type="module" src="/src/main.tsx"></script>\n'
#         "  </body>\n"
#         "</html>\n"
#     )


# def _main_tsx(app_name: str) -> dict:
#     return _file("frontend/src/main.tsx",
#         "import React from 'react'\n"
#         "import ReactDOM from 'react-dom/client'\n"
#         "import { Toaster } from 'react-hot-toast'\n"
#         "import App from './App'\n"
#         "import './index.css'\n"
#         "\n"
#         "ReactDOM.createRoot(document.getElementById('root')!).render(\n"
#         "  <React.StrictMode>\n"
#         "    <App />\n"
#         "    <Toaster\n"
#         "      position=\"top-right\"\n"
#         "      toastOptions={{\n"
#         "        duration: 4000,\n"
#         "        style: { borderRadius: '0.75rem', fontFamily: 'Inter, sans-serif' },\n"
#         "      }}\n"
#         "    />\n"
#         "  </React.StrictMode>\n"
#         ")\n"
#     )


# def _index_css() -> dict:
#     return _file("frontend/src/index.css",
#         "@tailwind base;\n"
#         "@tailwind components;\n"
#         "@tailwind utilities;\n"
#         "\n"
#         "@layer base {\n"
#         "  *, *::before, *::after { box-sizing: border-box; }\n"
#         "  html { -webkit-font-smoothing: antialiased; }\n"
#         "  :root {\n"
#         "    --color-primary:   #4f46e5;\n"
#         "    --color-secondary: #0ea5e9;\n"
#         "    --radius:          0.75rem;\n"
#         "  }\n"
#         "}\n"
#         "\n"
#         "@layer utilities {\n"
#         "  .center { @apply flex items-center justify-center; }\n"
#         "  .section { @apply py-20 px-6; }\n"
#         "  .container-narrow { @apply max-w-4xl mx-auto; }\n"
#         "  .text-balance { text-wrap: balance; }\n"
#         "}\n"
#     )


# def _api_client() -> dict:
#     return _file("frontend/src/api/client.ts",
#         "import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'\n"
#         "\n"
#         "const api = axios.create({\n"
#         "  baseURL: import.meta.env.VITE_API_URL,\n"
#         "  timeout: 15_000,\n"
#         "  headers: { 'Content-Type': 'application/json' },\n"
#         "})\n"
#         "\n"
#         "// --- Request interceptor: attach auth token ---\n"
#         "api.interceptors.request.use((config: InternalAxiosRequestConfig) => {\n"
#         "  const token = localStorage.getItem('token')\n"
#         "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
#         "  return config\n"
#         "})\n"
#         "\n"
#         "// --- Response interceptor: global error handling ---\n"
#         "api.interceptors.response.use(\n"
#         "  (res: AxiosResponse) => res,\n"
#         "  (err: AxiosError) => {\n"
#         "    if (err.response?.status === 401) {\n"
#         "      localStorage.removeItem('token')\n"
#         "      window.location.href = '/login'\n"
#         "    }\n"
#         "    return Promise.reject(err)\n"
#         "  }\n"
#         ")\n"
#         "\n"
#         "export default api\n"
#     )


# def _hooks() -> list[dict]:
#     use_api = (
#         "import { useState, useCallback } from 'react'\n"
#         "import { AxiosError } from 'axios'\n"
#         "import toast from 'react-hot-toast'\n"
#         "import api from '@/api/client'\n"
#         "\n"
#         "interface UseApiState<T> {\n"
#         "  data: T | null\n"
#         "  loading: boolean\n"
#         "  error: string | null\n"
#         "}\n"
#         "\n"
#         "export function useApi<T>(url: string) {\n"
#         "  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })\n"
#         "\n"
#         "  const fetch = useCallback(async (params?: object) => {\n"
#         "    setState(s => ({ ...s, loading: true, error: null }))\n"
#         "    try {\n"
#         "      const { data } = await api.get<T>(url, { params })\n"
#         "      setState({ data, loading: false, error: null })\n"
#         "      return data\n"
#         "    } catch (err) {\n"
#         "      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'\n"
#         "      setState(s => ({ ...s, loading: false, error: msg }))\n"
#         "      toast.error(msg)\n"
#         "    }\n"
#         "  }, [url])\n"
#         "\n"
#         "  return { ...state, fetch }\n"
#         "}\n"
#     )

#     use_local_storage = (
#         "import { useState, useEffect } from 'react'\n"
#         "\n"
#         "export function useLocalStorage<T>(key: string, initialValue: T) {\n"
#         "  const [value, setValue] = useState<T>(() => {\n"
#         "    try {\n"
#         "      const item = window.localStorage.getItem(key)\n"
#         "      return item ? (JSON.parse(item) as T) : initialValue\n"
#         "    } catch { return initialValue }\n"
#         "  })\n"
#         "\n"
#         "  useEffect(() => {\n"
#         "    try { window.localStorage.setItem(key, JSON.stringify(value)) }\n"
#         "    catch { /* quota exceeded */ }\n"
#         "  }, [key, value])\n"
#         "\n"
#         "  return [value, setValue] as const\n"
#         "}\n"
#     )

#     return [
#         _file("frontend/src/hooks/useApi.ts", use_api),
#         _file("frontend/src/hooks/useLocalStorage.ts", use_local_storage),
#     ]


# def _ui_components() -> list[dict]:
#     button = (
#         "import { ButtonHTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'\n"
#         "type Size    = 'sm' | 'md' | 'lg'\n"
#         "\n"
#         "interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: Variant\n"
#         "  size?: Size\n"
#         "  loading?: boolean\n"
#         "  fullWidth?: boolean\n"
#         "}\n"
#         "\n"
#         "const variants: Record<Variant, string> = {\n"
#         "  primary:   'bg-primary text-white hover:bg-primary/90 shadow-sm',\n"
#         "  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',\n"
#         "  ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 border border-border',\n"
#         "  danger:    'bg-red-600 text-white hover:bg-red-700 shadow-sm',\n"
#         "}\n"
#         "\n"
#         "const sizes: Record<Size, string> = {\n"
#         "  sm: 'px-3 py-1.5 text-sm',\n"
#         "  md: 'px-5 py-2.5 text-sm',\n"
#         "  lg: 'px-7 py-3 text-base',\n"
#         "}\n"
#         "\n"
#         "export default function Button({\n"
#         "  children, variant = 'primary', size = 'md',\n"
#         "  loading = false, fullWidth = false, className, disabled, ...props\n"
#         "}: ButtonProps) {\n"
#         "  return (\n"
#         "    <button\n"
#         "      disabled={disabled || loading}\n"
#         "      className={clsx(\n"
#         "        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',\n"
#         "        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',\n"
#         "        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none',\n"
#         "        variants[variant], sizes[size],\n"
#         "        fullWidth && 'w-full',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {loading && (\n"
#         "        <svg className=\"animate-spin h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "          <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "          <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "        </svg>\n"
#         "      )}\n"
#         "      {children}\n"
#         "    </button>\n"
#         "  )\n"
#         "}\n"
#     )

#     card = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface CardProps extends HTMLAttributes<HTMLDivElement> {\n"
#         "  children: ReactNode\n"
#         "  padding?: 'none' | 'sm' | 'md' | 'lg'\n"
#         "  hoverable?: boolean\n"
#         "}\n"
#         "\n"
#         "const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }\n"
#         "\n"
#         "export default function Card({ children, padding = 'md', hoverable = false, className, ...props }: CardProps) {\n"
#         "  return (\n"
#         "    <div\n"
#         "      className={clsx(\n"
#         "        'bg-surface rounded-2xl border border-border shadow-card',\n"
#         "        paddings[padding],\n"
#         "        hoverable && 'transition-shadow duration-200 hover:shadow-md cursor-pointer',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )

#     badge = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'\n"
#         "\n"
#         "const styles: Record<BadgeVariant, string> = {\n"
#         "  default: 'bg-gray-100 text-gray-700',\n"
#         "  success: 'bg-green-100 text-green-700',\n"
#         "  warning: 'bg-yellow-100 text-yellow-800',\n"
#         "  danger:  'bg-red-100 text-red-700',\n"
#         "  info:    'bg-blue-100 text-blue-700',\n"
#         "}\n"
#         "\n"
#         "interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: BadgeVariant\n"
#         "}\n"
#         "\n"
#         "export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {\n"
#         "  return (\n"
#         "    <span\n"
#         "      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </span>\n"
#         "  )\n"
#         "}\n"
#     )

#     spinner = (
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "export default function Spinner({ className }: { className?: string }) {\n"
#         "  return (\n"
#         "    <svg\n"
#         "      className={clsx('animate-spin text-primary', className ?? 'h-6 w-6')}\n"
#         "      fill=\"none\" viewBox=\"0 0 24 24\"\n"
#         "    >\n"
#         "      <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "      <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "    </svg>\n"
#         "  )\n"
#         "}\n"
#     )

#     input_field = (
#         "import { InputHTMLAttributes, forwardRef } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface InputProps extends InputHTMLAttributes<HTMLInputElement> {\n"
#         "  label?: string\n"
#         "  error?: string\n"
#         "  hint?: string\n"
#         "}\n"
#         "\n"
#         "const Input = forwardRef<HTMLInputElement, InputProps>(function Input(\n"
#         "  { label, error, hint, className, id, ...props }, ref\n"
#         ") {\n"
#         "  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')\n"
#         "  return (\n"
#         "    <div className=\"flex flex-col gap-1\">\n"
#         "      {label && (\n"
#         "        <label htmlFor={inputId} className=\"text-sm font-medium text-gray-700\">\n"
#         "          {label}\n"
#         "        </label>\n"
#         "      )}\n"
#         "      <input\n"
#         "        ref={ref}\n"
#         "        id={inputId}\n"
#         "        className={clsx(\n"
#         "          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',\n"
#         "          'transition focus:ring-2 focus:ring-primary/40',\n"
#         "          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',\n"
#         "          'disabled:opacity-50 disabled:cursor-not-allowed',\n"
#         "          className,\n"
#         "        )}\n"
#         "        {...props}\n"
#         "      />\n"
#         "      {error && <p className=\"text-xs text-red-600\">{error}</p>}\n"
#         "      {hint && !error && <p className=\"text-xs text-muted\">{hint}</p>}\n"
#         "    </div>\n"
#         "  )\n"
#         "})\n"
#         "\n"
#         "export default Input\n"
#     )

#     return [
#         _file("frontend/src/components/ui/Button.tsx",  button),
#         _file("frontend/src/components/ui/Card.tsx",    card),
#         _file("frontend/src/components/ui/Badge.tsx",   badge),
#         _file("frontend/src/components/ui/Spinner.tsx", spinner),
#         _file("frontend/src/components/ui/Input.tsx",   input_field),
#     ]


# def _layout(app_name: str) -> dict:
#     # Layout is intentionally minimal — no navbar, no footer.
#     # The Navbar lives in App.tsx (frontend_router_node).
#     # Each page component owns its own footer/CTA section.
#     return _file("frontend/src/components/Layout.tsx",
#         "import { ReactNode } from 'react'\n"
#         "\n"
#         "export default function Layout({ children }: { children: ReactNode }) {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex flex-col bg-background\">\n"
#         "      <main className=\"flex-1\">{children}</main>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _error_boundary() -> dict:
#     return _file("frontend/src/components/ErrorBoundary.tsx",
#         "import { Component, ErrorInfo, ReactNode } from 'react'\n"
#         "\n"
#         "interface Props  { children: ReactNode }\n"
#         "interface State  { hasError: boolean; message: string }\n"
#         "\n"
#         "export default class ErrorBoundary extends Component<Props, State> {\n"
#         "  state: State = { hasError: false, message: '' }\n"
#         "\n"
#         "  static getDerivedStateFromError(err: Error): State {\n"
#         "    return { hasError: true, message: err.message }\n"
#         "  }\n"
#         "\n"
#         "  componentDidCatch(err: Error, info: ErrorInfo) {\n"
#         "    console.error('[ErrorBoundary]', err, info)\n"
#         "  }\n"
#         "\n"
#         "  render() {\n"
#         "    if (this.state.hasError) {\n"
#         "      return (\n"
#         "        <div className=\"min-h-screen center flex-col gap-4 text-center px-6\">\n"
#         "          <h1 className=\"text-3xl font-bold text-gray-900\">Something went wrong</h1>\n"
#         "          <p className=\"text-muted\">{this.state.message}</p>\n"
#         "          <button\n"
#         "            onClick={() => this.setState({ hasError: false, message: '' })}\n"
#         "            className=\"px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "          >\n"
#         "            Try again\n"
#         "          </button>\n"
#         "        </div>\n"
#         "      )\n"
#         "    }\n"
#         "    return this.props.children\n"
#         "  }\n"
#         "}\n"
#     )


# def _not_found_page() -> dict:
#     return _file("frontend/src/pages/NotFound.tsx",
#         "import { Link } from 'react-router-dom'\n"
#         "\n"
#         "export default function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen center flex-col gap-6 text-center px-6\">\n"
#         "      <span className=\"text-8xl font-black text-gray-100 select-none\">404</span>\n"
#         "      <div className=\"-mt-8\">\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
#         "        <Link\n"
#         "          to=\"/\"\n"
#         "          className=\"inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "        >\n"
#         "          Go home\n"
#         "        </Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _app_tsx(pages: list[str]) -> dict:
#     imports = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in pages
#     )
#     routes = "".join(
#         "          <Route path=\"/" + ("" if i == 0 else p.lower()) + "\" element={<" + p + " />} />\n"
#         for i, p in enumerate(pages)
#     )
#     if not pages:
#         imports = ""
#         routes  = '          <Route path="/" element={<div className="center min-h-screen text-2xl font-bold">Welcome</div>} />\n'

#     return _file("frontend/src/App.tsx",
#         "import { BrowserRouter, Routes, Route } from 'react-router-dom'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         + imports
#         + "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + routes
#         + '          <Route path="*" element={<NotFound />} />\n'
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )


# def _types() -> dict:
#     return _file("frontend/src/types/index.ts",
#         "// ---- API response wrapper ----\n"
#         "export interface ApiResponse<T> {\n"
#         "  data:    T\n"
#         "  message: string\n"
#         "  success: boolean\n"
#         "}\n"
#         "\n"
#         "// ---- Pagination ----\n"
#         "export interface PaginatedResponse<T> {\n"
#         "  items:   T[]\n"
#         "  total:   number\n"
#         "  page:    number\n"
#         "  size:    number\n"
#         "  pages:   number\n"
#         "}\n"
#         "\n"
#         "// ---- Auth ----\n"
#         "export interface User {\n"
#         "  id:         string\n"
#         "  email:      string\n"
#         "  name:       string\n"
#         "  role:       'admin' | 'user'\n"
#         "  created_at: string\n"
#         "}\n"
#         "\n"
#         "export interface AuthTokens {\n"
#         "  access_token:  string\n"
#         "  refresh_token: string\n"
#         "  token_type:    string\n"
#         "}\n"
#     )


# def _gitignore() -> dict:
#     return _file("frontend/.gitignore",
#         "node_modules/\ndist/\n.env\n.env.local\n.env.*.local\n"
#         "*.log\n.DS_Store\n*.pem\n.vscode/\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_scaffold_node(state: AgentState) -> dict:
#     print("Generating frontend scaffold (ENTERPRISE MODE)")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     app_name    = site_plan.get("app_name", requirements.get("app_name", "AI Builder"))
#     description = site_plan.get("description", requirements.get("description", "AI Generated SaaS Application"))
#     pages       = site_plan.get("pages", [])
#     primary     = site_plan.get("primary_color",   requirements.get("primary_color",   "#4f46e5"))
#     secondary   = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

#     scaffold: list[dict] = [
#         _package_json(app_name, description),
#         _tsconfig(),
#         _tsconfig_node(),
#         _vite_config(),
#         *_env_files(),
#         _postcss_config(),
#         _tailwind_config(primary, secondary),
#         _index_html(app_name),
#         _main_tsx(app_name),
#         _index_css(),
#         _api_client(),
#         *_hooks(),
#         *_ui_components(),
#         _layout(app_name),
#         _error_boundary(),
#         _not_found_page(),
#         _app_tsx(pages),
#         _types(),
#         _gitignore(),
#     ]

#     print(f"Generated {len(scaffold)} scaffold files  |  app: {app_name}  |  pages: {pages}")

#     return {
#         "code_files": state.get("code_files", []) + scaffold,
#     }



# """
# frontend_scaffold_node.py  -  Generates all boilerplate frontend files.

# - Full TypeScript scaffold: .tsx/.ts files, tsconfig.json, tsconfig.node.json
# - vite.config.ts: path alias @/->src/, dev proxy /api->localhost:8000
# - Multi-env files: .env, .env.production, .env.example
# - Extended tailwind.config.js: custom colors, fonts, animations, shadows
# - UI components: Button, Card, Badge, Spinner, Input
# - Custom hooks: useApi<T>, useLocalStorage<T>
# - Axios client with request/response interceptors
# - ErrorBoundary, NotFound, Layout (pure <main> wrapper — NO navbar)
# - types/index.ts: ApiResponse<T>, PaginatedResponse<T>, User, AuthTokens
# - No LLM calls — pure Python template generation
# """

# import json
# from backend.state import AgentState


# # ==============================================================
# # Helpers
# # ==============================================================

# def _json(obj: object) -> str:
#     return json.dumps(obj, indent=2)


# def _file(filename: str, content: str) -> dict:
#     return {"filename": filename, "content": content}


# # ==============================================================
# # Individual file builders
# # ==============================================================

# def _package_json(app_name: str, description: str) -> dict:
#     return _file("frontend/package.json", _json({
#         "name": app_name.lower().replace(" ", "-") or "frontend",
#         "private": True,
#         "version": "0.1.0",
#         "type": "module",
#         "description": description,
#         "scripts": {
#             "dev":       "vite",
#             "build":     "tsc && vite build",
#             "preview":   "vite preview",
#             "lint":      "eslint src --ext ts,tsx --report-unused-disable-directives",
#             "typecheck": "tsc --noEmit",
#         },
#         "dependencies": {
#             "react":            "^18.3.0",
#             "react-dom":        "^18.3.0",
#             "react-router-dom": "^6.22.0",
#             "axios":            "^1.6.7",
#             "clsx":             "^2.1.0",
#             "react-hot-toast":  "^2.4.1",
#         },
#         "devDependencies": {
#             "@types/react":         "^18.3.0",
#             "@types/react-dom":     "^18.3.0",
#             "@vitejs/plugin-react": "^4.2.0",
#             "autoprefixer":         "^10.4.0",
#             "eslint":               "^8.57.0",
#             "postcss":              "^8.4.0",
#             "tailwindcss":          "^3.4.0",
#             "typescript":           "^5.4.0",
#             "vite":                 "^5.2.0",
#         },
#     }))


# def _tsconfig() -> dict:
#     return _file("frontend/tsconfig.json", _json({
#         "compilerOptions": {
#             "target":                     "ES2020",
#             "useDefineForClassFields":    True,
#             "lib":                        ["ES2020", "DOM", "DOM.Iterable"],
#             "module":                     "ESNext",
#             "skipLibCheck":               True,
#             "moduleResolution":           "bundler",
#             "allowImportingTsExtensions": True,
#             "resolveJsonModule":          True,
#             "isolatedModules":            True,
#             "noEmit":                     True,
#             "jsx":                        "react-jsx",
#             "strict":                     True,
#             "noUnusedLocals":             True,
#             "noUnusedParameters":         True,
#             "noFallthroughCasesInSwitch": True,
#             "baseUrl":                    ".",
#             "paths":                      {"@/*": ["src/*"]},
#         },
#         "include":    ["src"],
#         "references": [{"path": "./tsconfig.node.json"}],
#     }))


# def _tsconfig_node() -> dict:
#     return _file("frontend/tsconfig.node.json", _json({
#         "compilerOptions": {
#             "composite":                  True,
#             "skipLibCheck":               True,
#             "module":                     "ESNext",
#             "moduleResolution":           "bundler",
#             "allowSyntheticDefaultImports": True,
#         },
#         "include": ["vite.config.ts"],
#     }))


# def _vite_config() -> dict:
#     return _file("frontend/vite.config.ts",
#         "import { defineConfig } from 'vite'\n"
#         "import react from '@vitejs/plugin-react'\n"
#         "import path from 'path'\n"
#         "\n"
#         "export default defineConfig({\n"
#         "  plugins: [react()],\n"
#         "  resolve: {\n"
#         "    alias: { '@': path.resolve(__dirname, './src') },\n"
#         "  },\n"
#         "  server: {\n"
#         "    port: 5173,\n"
#         "    open: true,\n"
#         "    proxy: {\n"
#         "      '/api': {\n"
#         "        target: 'http://localhost:8000',\n"
#         "        changeOrigin: true,\n"
#         "        rewrite: (p) => p.replace(/^\\/api/, ''),\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  build: {\n"
#         "    sourcemap: true,\n"
#         "    rollupOptions: {\n"
#         "      output: {\n"
#         "        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "})\n"
#     )


# def _env_files() -> list:
#     return [
#         _file("frontend/.env",            "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.production", "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.example",    "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#     ]


# def _postcss_config() -> dict:
#     return _file("frontend/postcss.config.js",
#         "export default {\n"
#         "  plugins: { tailwindcss: {}, autoprefixer: {} },\n"
#         "}\n"
#     )


# def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
#     return _file("frontend/tailwind.config.js",
#         "/** @type {import('tailwindcss').Config} */\n"
#         "export default {\n"
#         "  darkMode: 'class',\n"
#         "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n"
#         "  theme: {\n"
#         "    extend: {\n"
#         "      colors: {\n"
#         "        primary:    { DEFAULT: '" + primary + "', hover: '" + primary + "dd' },\n"
#         "        secondary:  { DEFAULT: '" + secondary + "' },\n"
#         "        surface:    '#ffffff',\n"
#         "        background: '#f8fafc',\n"
#         "        muted:      '#64748b',\n"
#         "        border:     '#e2e8f0',\n"
#         "      },\n"
#         "      fontFamily: {\n"
#         "        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],\n"
#         "      },\n"
#         "      borderRadius: {\n"
#         "        xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem',\n"
#         "      },\n"
#         "      boxShadow: {\n"
#         "        card:  '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',\n"
#         "        modal: '0 20px 60px -10px rgb(0 0 0 / 0.25)',\n"
#         "      },\n"
#         "      animation: {\n"
#         "        'fade-in':   'fadeIn 0.3s ease-out',\n"
#         "        'slide-up':  'slideUp 0.4s ease-out',\n"
#         "        'spin-slow': 'spin 3s linear infinite',\n"
#         "      },\n"
#         "      keyframes: {\n"
#         "        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },\n"
#         "        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  plugins: [],\n"
#         "}\n"
#     )


# def _index_html(app_name: str) -> dict:
#     return _file("frontend/index.html",
#         "<!DOCTYPE html>\n"
#         '<html lang="en" class="scroll-smooth">\n'
#         "  <head>\n"
#         '    <meta charset="UTF-8" />\n'
#         '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
#         '    <meta name="description" content="' + app_name + ' - AI Generated Application" />\n'
#         '    <meta name="theme-color" content="#4f46e5" />\n'
#         '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
#         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
#         '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />\n'
#         "    <title>" + app_name + "</title>\n"
#         "  </head>\n"
#         '  <body class="bg-background text-gray-900 antialiased">\n'
#         '    <div id="root"></div>\n'
#         '    <script type="module" src="/src/main.tsx"></script>\n'
#         "  </body>\n"
#         "</html>\n"
#     )


# def _main_tsx(app_name: str) -> dict:
#     return _file("frontend/src/main.tsx",
#         "import React from 'react'\n"
#         "import ReactDOM from 'react-dom/client'\n"
#         "import { Toaster } from 'react-hot-toast'\n"
#         "import App from './App'\n"
#         "import './index.css'\n"
#         "\n"
#         "ReactDOM.createRoot(document.getElementById('root')!).render(\n"
#         "  <React.StrictMode>\n"
#         "    <App />\n"
#         "    <Toaster\n"
#         "      position=\"top-right\"\n"
#         "      toastOptions={{\n"
#         "        duration: 4000,\n"
#         "        style: { borderRadius: '0.75rem', fontFamily: 'Inter, sans-serif' },\n"
#         "      }}\n"
#         "    />\n"
#         "  </React.StrictMode>\n"
#         ")\n"
#     )


# def _index_css() -> dict:
#     return _file("frontend/src/index.css",
#         "@tailwind base;\n"
#         "@tailwind components;\n"
#         "@tailwind utilities;\n"
#         "\n"
#         "@layer base {\n"
#         "  *, *::before, *::after { box-sizing: border-box; }\n"
#         "  html { -webkit-font-smoothing: antialiased; }\n"
#         "  :root {\n"
#         "    --color-primary:   #4f46e5;\n"
#         "    --color-secondary: #0ea5e9;\n"
#         "    --radius:          0.75rem;\n"
#         "  }\n"
#         "}\n"
#         "\n"
#         "@layer utilities {\n"
#         "  .center { @apply flex items-center justify-center; }\n"
#         "  .section { @apply py-20 px-6; }\n"
#         "  .container-narrow { @apply max-w-4xl mx-auto; }\n"
#         "  .text-balance { text-wrap: balance; }\n"
#         "}\n"
#     )


# def _api_client() -> dict:
#     return _file("frontend/src/api/client.ts",
#         "import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'\n"
#         "\n"
#         "const api = axios.create({\n"
#         "  baseURL: import.meta.env.VITE_API_URL,\n"
#         "  timeout: 15_000,\n"
#         "  headers: { 'Content-Type': 'application/json' },\n"
#         "})\n"
#         "\n"
#         "// --- Request interceptor: attach auth token ---\n"
#         "api.interceptors.request.use((config: InternalAxiosRequestConfig) => {\n"
#         "  const token = localStorage.getItem('token')\n"
#         "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
#         "  return config\n"
#         "})\n"
#         "\n"
#         "// --- Response interceptor: global error handling ---\n"
#         "api.interceptors.response.use(\n"
#         "  (res: AxiosResponse) => res,\n"
#         "  (err: AxiosError) => {\n"
#         "    if (err.response?.status === 401) {\n"
#         "      localStorage.removeItem('token')\n"
#         "      window.location.href = '/login'\n"
#         "    }\n"
#         "    return Promise.reject(err)\n"
#         "  }\n"
#         ")\n"
#         "\n"
#         "export default api\n"
#     )


# def _hooks() -> list:
#     use_api = (
#         "import { useState, useCallback } from 'react'\n"
#         "import { AxiosError } from 'axios'\n"
#         "import toast from 'react-hot-toast'\n"
#         "import api from '@/api/client'\n"
#         "\n"
#         "interface UseApiState<T> {\n"
#         "  data: T | null\n"
#         "  loading: boolean\n"
#         "  error: string | null\n"
#         "}\n"
#         "\n"
#         "export function useApi<T>(url: string) {\n"
#         "  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })\n"
#         "\n"
#         "  const fetch = useCallback(async (params?: object) => {\n"
#         "    setState(s => ({ ...s, loading: true, error: null }))\n"
#         "    try {\n"
#         "      const { data } = await api.get<T>(url, { params })\n"
#         "      setState({ data, loading: false, error: null })\n"
#         "      return data\n"
#         "    } catch (err) {\n"
#         "      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'\n"
#         "      setState(s => ({ ...s, loading: false, error: msg }))\n"
#         "      toast.error(msg)\n"
#         "    }\n"
#         "  }, [url])\n"
#         "\n"
#         "  return { ...state, fetch }\n"
#         "}\n"
#     )

#     use_local_storage = (
#         "import { useState, useEffect } from 'react'\n"
#         "\n"
#         "export function useLocalStorage<T>(key: string, initialValue: T) {\n"
#         "  const [value, setValue] = useState<T>(() => {\n"
#         "    try {\n"
#         "      const item = window.localStorage.getItem(key)\n"
#         "      return item ? (JSON.parse(item) as T) : initialValue\n"
#         "    } catch { return initialValue }\n"
#         "  })\n"
#         "\n"
#         "  useEffect(() => {\n"
#         "    try { window.localStorage.setItem(key, JSON.stringify(value)) }\n"
#         "    catch { /* quota exceeded */ }\n"
#         "  }, [key, value])\n"
#         "\n"
#         "  return [value, setValue] as const\n"
#         "}\n"
#     )

#     return [
#         _file("frontend/src/hooks/useApi.ts",           use_api),
#         _file("frontend/src/hooks/useLocalStorage.ts",  use_local_storage),
#     ]


# def _ui_components() -> list:
#     button = (
#         "import { ButtonHTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'\n"
#         "type Size    = 'sm' | 'md' | 'lg'\n"
#         "\n"
#         "interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: Variant\n"
#         "  size?: Size\n"
#         "  loading?: boolean\n"
#         "  fullWidth?: boolean\n"
#         "}\n"
#         "\n"
#         "const variants: Record<Variant, string> = {\n"
#         "  primary:   'bg-primary text-white hover:bg-primary/90 shadow-sm',\n"
#         "  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',\n"
#         "  ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 border border-border',\n"
#         "  danger:    'bg-red-600 text-white hover:bg-red-700 shadow-sm',\n"
#         "}\n"
#         "\n"
#         "const sizes: Record<Size, string> = {\n"
#         "  sm: 'px-3 py-1.5 text-sm',\n"
#         "  md: 'px-5 py-2.5 text-sm',\n"
#         "  lg: 'px-7 py-3 text-base',\n"
#         "}\n"
#         "\n"
#         "export default function Button({\n"
#         "  children, variant = 'primary', size = 'md',\n"
#         "  loading = false, fullWidth = false, className, disabled, ...props\n"
#         "}: ButtonProps) {\n"
#         "  return (\n"
#         "    <button\n"
#         "      disabled={disabled || loading}\n"
#         "      className={clsx(\n"
#         "        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',\n"
#         "        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',\n"
#         "        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none',\n"
#         "        variants[variant], sizes[size],\n"
#         "        fullWidth && 'w-full',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {loading && (\n"
#         "        <svg className=\"animate-spin h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "          <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "          <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "        </svg>\n"
#         "      )}\n"
#         "      {children}\n"
#         "    </button>\n"
#         "  )\n"
#         "}\n"
#     )

#     card = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface CardProps extends HTMLAttributes<HTMLDivElement> {\n"
#         "  children: ReactNode\n"
#         "  padding?: 'none' | 'sm' | 'md' | 'lg'\n"
#         "  hoverable?: boolean\n"
#         "}\n"
#         "\n"
#         "const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }\n"
#         "\n"
#         "export default function Card({ children, padding = 'md', hoverable = false, className, ...props }: CardProps) {\n"
#         "  return (\n"
#         "    <div\n"
#         "      className={clsx(\n"
#         "        'bg-surface rounded-2xl border border-border shadow-card',\n"
#         "        paddings[padding],\n"
#         "        hoverable && 'transition-shadow duration-200 hover:shadow-md cursor-pointer',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )

#     badge = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'\n"
#         "\n"
#         "const styles: Record<BadgeVariant, string> = {\n"
#         "  default: 'bg-gray-100 text-gray-700',\n"
#         "  success: 'bg-green-100 text-green-700',\n"
#         "  warning: 'bg-yellow-100 text-yellow-800',\n"
#         "  danger:  'bg-red-100 text-red-700',\n"
#         "  info:    'bg-blue-100 text-blue-700',\n"
#         "}\n"
#         "\n"
#         "interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: BadgeVariant\n"
#         "}\n"
#         "\n"
#         "export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {\n"
#         "  return (\n"
#         "    <span\n"
#         "      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </span>\n"
#         "  )\n"
#         "}\n"
#     )

#     spinner = (
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "export default function Spinner({ className }: { className?: string }) {\n"
#         "  return (\n"
#         "    <svg\n"
#         "      className={clsx('animate-spin text-primary', className ?? 'h-6 w-6')}\n"
#         "      fill=\"none\" viewBox=\"0 0 24 24\"\n"
#         "    >\n"
#         "      <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "      <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "    </svg>\n"
#         "  )\n"
#         "}\n"
#     )

#     input_field = (
#         "import { InputHTMLAttributes, forwardRef } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface InputProps extends InputHTMLAttributes<HTMLInputElement> {\n"
#         "  label?: string\n"
#         "  error?: string\n"
#         "  hint?: string\n"
#         "}\n"
#         "\n"
#         "const Input = forwardRef<HTMLInputElement, InputProps>(function Input(\n"
#         "  { label, error, hint, className, id, ...props }, ref\n"
#         ") {\n"
#         "  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')\n"
#         "  return (\n"
#         "    <div className=\"flex flex-col gap-1\">\n"
#         "      {label && (\n"
#         "        <label htmlFor={inputId} className=\"text-sm font-medium text-gray-700\">\n"
#         "          {label}\n"
#         "        </label>\n"
#         "      )}\n"
#         "      <input\n"
#         "        ref={ref}\n"
#         "        id={inputId}\n"
#         "        className={clsx(\n"
#         "          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',\n"
#         "          'transition focus:ring-2 focus:ring-primary/40',\n"
#         "          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',\n"
#         "          'disabled:opacity-50 disabled:cursor-not-allowed',\n"
#         "          className,\n"
#         "        )}\n"
#         "        {...props}\n"
#         "      />\n"
#         "      {error && <p className=\"text-xs text-red-600\">{error}</p>}\n"
#         "      {hint && !error && <p className=\"text-xs text-muted\">{hint}</p>}\n"
#         "    </div>\n"
#         "  )\n"
#         "})\n"
#         "\n"
#         "export default Input\n"
#     )

#     return [
#         _file("frontend/src/components/ui/Button.tsx",  button),
#         _file("frontend/src/components/ui/Card.tsx",    card),
#         _file("frontend/src/components/ui/Badge.tsx",   badge),
#         _file("frontend/src/components/ui/Spinner.tsx", spinner),
#         _file("frontend/src/components/ui/Input.tsx",   input_field),
#     ]


# def _layout(app_name: str) -> dict:
#     # Layout is intentionally minimal — NO navbar, NO footer.
#     # Navbar lives in App.tsx (frontend_router_node).
#     # Each page owns its own footer/CTA section.
#     return _file("frontend/src/components/Layout.tsx",
#         "import { ReactNode } from 'react'\n"
#         "\n"
#         "export default function Layout({ children }: { children: ReactNode }) {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex flex-col bg-background\">\n"
#         "      <main className=\"flex-1\">{children}</main>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _error_boundary() -> dict:
#     return _file("frontend/src/components/ErrorBoundary.tsx",
#         "import { Component, ErrorInfo, ReactNode } from 'react'\n"
#         "\n"
#         "interface Props { children: ReactNode }\n"
#         "interface State { hasError: boolean; message: string }\n"
#         "\n"
#         "export default class ErrorBoundary extends Component<Props, State> {\n"
#         "  state: State = { hasError: false, message: '' }\n"
#         "\n"
#         "  static getDerivedStateFromError(err: Error): State {\n"
#         "    return { hasError: true, message: err.message }\n"
#         "  }\n"
#         "\n"
#         "  componentDidCatch(err: Error, info: ErrorInfo) {\n"
#         "    console.error('[ErrorBoundary]', err, info)\n"
#         "  }\n"
#         "\n"
#         "  render() {\n"
#         "    if (this.state.hasError) {\n"
#         "      return (\n"
#         "        <div className=\"min-h-screen center flex-col gap-4 text-center px-6\">\n"
#         "          <h1 className=\"text-3xl font-bold text-gray-900\">Something went wrong</h1>\n"
#         "          <p className=\"text-muted\">{this.state.message}</p>\n"
#         "          <button\n"
#         "            onClick={() => this.setState({ hasError: false, message: '' })}\n"
#         "            className=\"px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "          >\n"
#         "            Try again\n"
#         "          </button>\n"
#         "        </div>\n"
#         "      )\n"
#         "    }\n"
#         "    return this.props.children\n"
#         "  }\n"
#         "}\n"
#     )


# def _not_found_page() -> dict:
#     return _file("frontend/src/pages/NotFound.tsx",
#         "import { Link } from 'react-router-dom'\n"
#         "\n"
#         "export default function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen center flex-col gap-6 text-center px-6\">\n"
#         "      <span className=\"text-8xl font-black text-gray-100 select-none\">404</span>\n"
#         "      <div className=\"-mt-8\">\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
#         "        <Link\n"
#         "          to=\"/\"\n"
#         "          className=\"inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "        >\n"
#         "          Go home\n"
#         "        </Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _app_tsx_stub(pages: list) -> dict:
#     """
#     Minimal App.tsx stub — will be OVERWRITTEN by frontend_router_node
#     which generates the full version with Navbar, lazy loading, etc.
#     This stub exists only so the scaffold is self-contained.
#     """
#     imports = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in pages
#     )
#     routes = "".join(
#         "          <Route path=\"/" + ("" if i == 0 else p.lower()) + "\" element={<" + p + " />} />\n"
#         for i, p in enumerate(pages)
#     )
#     if not pages:
#         imports = ""
#         routes  = "          <Route path=\"/\" element={<div className=\"center min-h-screen text-2xl font-bold\">Welcome</div>} />\n"

#     return _file("frontend/src/App.tsx",
#         "import { BrowserRouter, Routes, Route } from 'react-router-dom'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         + imports
#         + "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + routes
#         + "          <Route path=\"*\" element={<NotFound />} />\n"
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )


# def _types() -> dict:
#     return _file("frontend/src/types/index.ts",
#         "// ---- API response wrapper ----\n"
#         "export interface ApiResponse<T> {\n"
#         "  data:    T\n"
#         "  message: string\n"
#         "  success: boolean\n"
#         "}\n"
#         "\n"
#         "// ---- Pagination ----\n"
#         "export interface PaginatedResponse<T> {\n"
#         "  items: T[]\n"
#         "  total: number\n"
#         "  page:  number\n"
#         "  size:  number\n"
#         "  pages: number\n"
#         "}\n"
#         "\n"
#         "// ---- Auth ----\n"
#         "export interface User {\n"
#         "  id:         string\n"
#         "  email:      string\n"
#         "  name:       string\n"
#         "  role:       'admin' | 'user'\n"
#         "  created_at: string\n"
#         "}\n"
#         "\n"
#         "export interface AuthTokens {\n"
#         "  access_token:  string\n"
#         "  refresh_token: string\n"
#         "  token_type:    string\n"
#         "}\n"
#     )


# def _gitignore() -> dict:
#     return _file("frontend/.gitignore",
#         "node_modules/\ndist/\n.env\n.env.local\n.env.*.local\n"
#         "*.log\n.DS_Store\n*.pem\n.vscode/\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_scaffold_node(state: AgentState) -> dict:
#     print("Generating frontend scaffold (ENTERPRISE MODE)")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     app_name    = site_plan.get("app_name",    requirements.get("app_name",    "AI Builder"))
#     description = site_plan.get("description", requirements.get("description", "AI Generated Application"))
#     pages       = site_plan.get("pages", [])
#     primary     = site_plan.get("primary_color",   requirements.get("primary_color",   "#4f46e5"))
#     secondary   = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

#     scaffold: list = [
#         _package_json(app_name, description),
#         _tsconfig(),
#         _tsconfig_node(),
#         _vite_config(),
#         *_env_files(),
#         _postcss_config(),
#         _tailwind_config(primary, secondary),
#         _index_html(app_name),
#         _main_tsx(app_name),
#         _index_css(),
#         _api_client(),
#         *_hooks(),
#         *_ui_components(),
#         _layout(app_name),
#         _error_boundary(),
#         _not_found_page(),
#         _app_tsx_stub(pages),   # stub — frontend_router_node overwrites with full version
#         _types(),
#         _gitignore(),
#     ]

#     print(f"Generated {len(scaffold)} scaffold files  |  app: {app_name}  |  pages: {pages}")

#     return {
#         "code_files": state.get("code_files", []) + scaffold,
#     }

# """
# frontend_scaffold_node.py  -  Generates all boilerplate frontend files.

# - Full TypeScript scaffold: .tsx/.ts files, tsconfig.json, tsconfig.node.json
# - vite.config.ts: path alias @/->src/, dev proxy /api->localhost:8000
# - Multi-env files: .env, .env.production, .env.example
# - Extended tailwind.config.js: custom colors, fonts, animations, shadows
# - UI components: Button, Card, Badge, Spinner, Input
# - Custom hooks: useApi<T>, useLocalStorage<T>
# - Axios client with request/response interceptors
# - ErrorBoundary, NotFound, Layout (pure <main> wrapper — NO navbar)
# - types/index.ts: ApiResponse<T>, PaginatedResponse<T>, User, AuthTokens
# - No LLM calls — pure Python template generation
# """

# import json
# from backend.state import AgentState


# # ==============================================================
# # Helpers
# # ==============================================================

# def _json(obj: object) -> str:
#     return json.dumps(obj, indent=2)


# def _file(filename: str, content: str) -> dict:
#     return {"filename": filename, "content": content}


# # ==============================================================
# # Individual file builders
# # ==============================================================

# def _package_json(app_name: str, description: str) -> dict:
#     return _file("frontend/package.json", _json({
#         "name": app_name.lower().replace(" ", "-") or "frontend",
#         "private": True,
#         "version": "0.1.0",
#         "type": "module",
#         "description": description,
#         "scripts": {
#             "dev":       "vite",
#             "build":     "tsc && vite build",
#             "preview":   "vite preview",
#             "lint":      "eslint src --ext ts,tsx --report-unused-disable-directives",
#             "typecheck": "tsc --noEmit",
#         },
#         "dependencies": {
#             "react":            "^18.3.0",
#             "react-dom":        "^18.3.0",
#             "react-router-dom": "^6.22.0",
#             "axios":            "^1.6.7",
#             "clsx":             "^2.1.0",
#             "react-hot-toast":  "^2.4.1",
#         },
#         "devDependencies": {
#             "@types/react":         "^18.3.0",
#             "@types/react-dom":     "^18.3.0",
#             "@vitejs/plugin-react": "^4.2.0",
#             "autoprefixer":         "^10.4.0",
#             "eslint":               "^8.57.0",
#             "postcss":              "^8.4.0",
#             "tailwindcss":          "^3.4.0",
#             "typescript":           "^5.4.0",
#             "vite":                 "^5.2.0",
#         },
#     }))


# def _tsconfig() -> dict:
#     return _file("frontend/tsconfig.json", _json({
#         "compilerOptions": {
#             "target":                     "ES2020",
#             "useDefineForClassFields":    True,
#             "lib":                        ["ES2020", "DOM", "DOM.Iterable"],
#             "module":                     "ESNext",
#             "skipLibCheck":               True,
#             "moduleResolution":           "bundler",
#             "allowImportingTsExtensions": True,
#             "resolveJsonModule":          True,
#             "isolatedModules":            True,
#             "noEmit":                     True,
#             "jsx":                        "react-jsx",
#             "strict":                     True,
#             "noUnusedLocals":             True,
#             "noUnusedParameters":         True,
#             "noFallthroughCasesInSwitch": True,
#             "baseUrl":                    ".",
#             "paths":                      {"@/*": ["src/*"]},
#         },
#         "include":    ["src"],
#         "references": [{"path": "./tsconfig.node.json"}],
#     }))


# def _tsconfig_node() -> dict:
#     return _file("frontend/tsconfig.node.json", _json({
#         "compilerOptions": {
#             "composite":                  True,
#             "skipLibCheck":               True,
#             "module":                     "ESNext",
#             "moduleResolution":           "bundler",
#             "allowSyntheticDefaultImports": True,
#         },
#         "include": ["vite.config.ts"],
#     }))


# def _vite_config() -> dict:
#     return _file("frontend/vite.config.ts",
#         "import { defineConfig } from 'vite'\n"
#         "import react from '@vitejs/plugin-react'\n"
#         "import path from 'path'\n"
#         "\n"
#         "export default defineConfig({\n"
#         "  plugins: [react()],\n"
#         "  resolve: {\n"
#         "    alias: { '@': path.resolve(__dirname, './src') },\n"
#         "  },\n"
#         "  server: {\n"
#         "    port: 5173,\n"
#         "    open: true,\n"
#         "    proxy: {\n"
#         "      '/api': {\n"
#         "        target: 'http://localhost:8000',\n"
#         "        changeOrigin: true,\n"
#         "        rewrite: (p) => p.replace(/^\\/api/, ''),\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  build: {\n"
#         "    sourcemap: true,\n"
#         "    rollupOptions: {\n"
#         "      output: {\n"
#         "        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "})\n"
#     )


# def _env_files() -> list:
#     return [
#         _file("frontend/.env",            "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.production", "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.example",    "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#     ]


# def _postcss_config() -> dict:
#     return _file("frontend/postcss.config.js",
#         "export default {\n"
#         "  plugins: { tailwindcss: {}, autoprefixer: {} },\n"
#         "}\n"
#     )


# def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
#     return _file("frontend/tailwind.config.js",
#         "/** @type {import('tailwindcss').Config} */\n"
#         "export default {\n"
#         "  darkMode: 'class',\n"
#         "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n"
#         "  theme: {\n"
#         "    extend: {\n"
#         "      colors: {\n"
#         "        primary:    { DEFAULT: '" + primary + "', hover: '" + primary + "dd' },\n"
#         "        secondary:  { DEFAULT: '" + secondary + "' },\n"
#         "        surface:    '#ffffff',\n"
#         "        background: '#f8fafc',\n"
#         "        muted:      '#64748b',\n"
#         "        border:     '#e2e8f0',\n"
#         "      },\n"
#         "      fontFamily: {\n"
#         "        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],\n"
#         "      },\n"
#         "      borderRadius: {\n"
#         "        xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem',\n"
#         "      },\n"
#         "      boxShadow: {\n"
#         "        card:  '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',\n"
#         "        modal: '0 20px 60px -10px rgb(0 0 0 / 0.25)',\n"
#         "      },\n"
#         "      animation: {\n"
#         "        'fade-in':   'fadeIn 0.3s ease-out',\n"
#         "        'slide-up':  'slideUp 0.4s ease-out',\n"
#         "        'spin-slow': 'spin 3s linear infinite',\n"
#         "      },\n"
#         "      keyframes: {\n"
#         "        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },\n"
#         "        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  plugins: [],\n"
#         "}\n"
#     )


# def _index_html(app_name: str) -> dict:
#     return _file("frontend/index.html",
#         "<!DOCTYPE html>\n"
#         '<html lang="en" class="scroll-smooth">\n'
#         "  <head>\n"
#         '    <meta charset="UTF-8" />\n'
#         '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
#         '    <meta name="description" content="' + app_name + ' - AI Generated Application" />\n'
#         '    <meta name="theme-color" content="#4f46e5" />\n'
#         '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
#         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
#         '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />\n'
#         "    <title>" + app_name + "</title>\n"
#         "  </head>\n"
#         '  <body class="bg-background text-gray-900 antialiased">\n'
#         '    <div id="root"></div>\n'
#         '    <script type="module" src="/src/main.tsx"></script>\n'
#         "  </body>\n"
#         "</html>\n"
#     )


# def _main_tsx(app_name: str) -> dict:
#     return _file("frontend/src/main.tsx",
#         "import React from 'react'\n"
#         "import ReactDOM from 'react-dom/client'\n"
#         "import App from './App'\n"
#         "import './index.css'\n"
#         "\n"
#         "ReactDOM.createRoot(document.getElementById('root')).render(\n"
#         "  <React.StrictMode>\n"
#         "    <App />\n"
#         "  </React.StrictMode>\n"
#         ")\n"
#     )


# def _index_css() -> dict:
#     return _file("frontend/src/index.css",
#         "@tailwind base;\n"
#         "@tailwind components;\n"
#         "@tailwind utilities;\n"
#         "\n"
#         "@layer base {\n"
#         "  *, *::before, *::after { box-sizing: border-box; }\n"
#         "  html { -webkit-font-smoothing: antialiased; }\n"
#         "  :root {\n"
#         "    --color-primary:   #4f46e5;\n"
#         "    --color-secondary: #0ea5e9;\n"
#         "    --radius:          0.75rem;\n"
#         "  }\n"
#         "}\n"
#         "\n"
#         "@layer utilities {\n"
#         "  .center { @apply flex items-center justify-center; }\n"
#         "  .section { @apply py-20 px-6; }\n"
#         "  .container-narrow { @apply max-w-4xl mx-auto; }\n"
#         "  .text-balance { text-wrap: balance; }\n"
#         "}\n"
#     )


# def _api_client() -> dict:
#     return _file("frontend/src/api/client.ts",
#         "import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'\n"
#         "\n"
#         "const api = axios.create({\n"
#         "  baseURL: import.meta.env.VITE_API_URL,\n"
#         "  timeout: 15_000,\n"
#         "  headers: { 'Content-Type': 'application/json' },\n"
#         "})\n"
#         "\n"
#         "// --- Request interceptor: attach auth token ---\n"
#         "api.interceptors.request.use((config: InternalAxiosRequestConfig) => {\n"
#         "  const token = localStorage.getItem('token')\n"
#         "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
#         "  return config\n"
#         "})\n"
#         "\n"
#         "// --- Response interceptor: global error handling ---\n"
#         "api.interceptors.response.use(\n"
#         "  (res: AxiosResponse) => res,\n"
#         "  (err: AxiosError) => {\n"
#         "    if (err.response?.status === 401) {\n"
#         "      localStorage.removeItem('token')\n"
#         "      window.location.href = '/login'\n"
#         "    }\n"
#         "    return Promise.reject(err)\n"
#         "  }\n"
#         ")\n"
#         "\n"
#         "export default api\n"
#     )


# def _hooks() -> list:
#     use_api = (
#         "import { useState, useCallback } from 'react'\n"
#         "import { AxiosError } from 'axios'\n"
#         "import toast from 'react-hot-toast'\n"
#         "import api from '@/api/client'\n"
#         "\n"
#         "interface UseApiState<T> {\n"
#         "  data: T | null\n"
#         "  loading: boolean\n"
#         "  error: string | null\n"
#         "}\n"
#         "\n"
#         "export function useApi<T>(url: string) {\n"
#         "  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })\n"
#         "\n"
#         "  const fetch = useCallback(async (params?: object) => {\n"
#         "    setState(s => ({ ...s, loading: true, error: null }))\n"
#         "    try {\n"
#         "      const { data } = await api.get<T>(url, { params })\n"
#         "      setState({ data, loading: false, error: null })\n"
#         "      return data\n"
#         "    } catch (err) {\n"
#         "      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'\n"
#         "      setState(s => ({ ...s, loading: false, error: msg }))\n"
#         "      toast.error(msg)\n"
#         "    }\n"
#         "  }, [url])\n"
#         "\n"
#         "  return { ...state, fetch }\n"
#         "}\n"
#     )

#     use_local_storage = (
#         "import { useState, useEffect } from 'react'\n"
#         "\n"
#         "export function useLocalStorage<T>(key: string, initialValue: T) {\n"
#         "  const [value, setValue] = useState<T>(() => {\n"
#         "    try {\n"
#         "      const item = window.localStorage.getItem(key)\n"
#         "      return item ? (JSON.parse(item) as T) : initialValue\n"
#         "    } catch { return initialValue }\n"
#         "  })\n"
#         "\n"
#         "  useEffect(() => {\n"
#         "    try { window.localStorage.setItem(key, JSON.stringify(value)) }\n"
#         "    catch { /* quota exceeded */ }\n"
#         "  }, [key, value])\n"
#         "\n"
#         "  return [value, setValue] as const\n"
#         "}\n"
#     )

#     return [
#         _file("frontend/src/hooks/useApi.ts",           use_api),
#         _file("frontend/src/hooks/useLocalStorage.ts",  use_local_storage),
#     ]


# def _ui_components() -> list:
#     button = (
#         "import { ButtonHTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'\n"
#         "type Size    = 'sm' | 'md' | 'lg'\n"
#         "\n"
#         "interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: Variant\n"
#         "  size?: Size\n"
#         "  loading?: boolean\n"
#         "  fullWidth?: boolean\n"
#         "}\n"
#         "\n"
#         "const variants: Record<Variant, string> = {\n"
#         "  primary:   'bg-primary text-white hover:bg-primary/90 shadow-sm',\n"
#         "  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',\n"
#         "  ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 border border-border',\n"
#         "  danger:    'bg-red-600 text-white hover:bg-red-700 shadow-sm',\n"
#         "}\n"
#         "\n"
#         "const sizes: Record<Size, string> = {\n"
#         "  sm: 'px-3 py-1.5 text-sm',\n"
#         "  md: 'px-5 py-2.5 text-sm',\n"
#         "  lg: 'px-7 py-3 text-base',\n"
#         "}\n"
#         "\n"
#         "export default function Button({\n"
#         "  children, variant = 'primary', size = 'md',\n"
#         "  loading = false, fullWidth = false, className, disabled, ...props\n"
#         "}: ButtonProps) {\n"
#         "  return (\n"
#         "    <button\n"
#         "      disabled={disabled || loading}\n"
#         "      className={clsx(\n"
#         "        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',\n"
#         "        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',\n"
#         "        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none',\n"
#         "        variants[variant], sizes[size],\n"
#         "        fullWidth && 'w-full',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {loading && (\n"
#         "        <svg className=\"animate-spin h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "          <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "          <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "        </svg>\n"
#         "      )}\n"
#         "      {children}\n"
#         "    </button>\n"
#         "  )\n"
#         "}\n"
#     )

#     card = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface CardProps extends HTMLAttributes<HTMLDivElement> {\n"
#         "  children: ReactNode\n"
#         "  padding?: 'none' | 'sm' | 'md' | 'lg'\n"
#         "  hoverable?: boolean\n"
#         "}\n"
#         "\n"
#         "const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }\n"
#         "\n"
#         "export default function Card({ children, padding = 'md', hoverable = false, className, ...props }: CardProps) {\n"
#         "  return (\n"
#         "    <div\n"
#         "      className={clsx(\n"
#         "        'bg-surface rounded-2xl border border-border shadow-card',\n"
#         "        paddings[padding],\n"
#         "        hoverable && 'transition-shadow duration-200 hover:shadow-md cursor-pointer',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )

#     badge = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'\n"
#         "\n"
#         "const styles: Record<BadgeVariant, string> = {\n"
#         "  default: 'bg-gray-100 text-gray-700',\n"
#         "  success: 'bg-green-100 text-green-700',\n"
#         "  warning: 'bg-yellow-100 text-yellow-800',\n"
#         "  danger:  'bg-red-100 text-red-700',\n"
#         "  info:    'bg-blue-100 text-blue-700',\n"
#         "}\n"
#         "\n"
#         "interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: BadgeVariant\n"
#         "}\n"
#         "\n"
#         "export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {\n"
#         "  return (\n"
#         "    <span\n"
#         "      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </span>\n"
#         "  )\n"
#         "}\n"
#     )

#     spinner = (
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "export default function Spinner({ className }: { className?: string }) {\n"
#         "  return (\n"
#         "    <svg\n"
#         "      className={clsx('animate-spin text-primary', className ?? 'h-6 w-6')}\n"
#         "      fill=\"none\" viewBox=\"0 0 24 24\"\n"
#         "    >\n"
#         "      <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "      <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "    </svg>\n"
#         "  )\n"
#         "}\n"
#     )

#     input_field = (
#         "import { InputHTMLAttributes, forwardRef } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface InputProps extends InputHTMLAttributes<HTMLInputElement> {\n"
#         "  label?: string\n"
#         "  error?: string\n"
#         "  hint?: string\n"
#         "}\n"
#         "\n"
#         "const Input = forwardRef<HTMLInputElement, InputProps>(function Input(\n"
#         "  { label, error, hint, className, id, ...props }, ref\n"
#         ") {\n"
#         "  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')\n"
#         "  return (\n"
#         "    <div className=\"flex flex-col gap-1\">\n"
#         "      {label && (\n"
#         "        <label htmlFor={inputId} className=\"text-sm font-medium text-gray-700\">\n"
#         "          {label}\n"
#         "        </label>\n"
#         "      )}\n"
#         "      <input\n"
#         "        ref={ref}\n"
#         "        id={inputId}\n"
#         "        className={clsx(\n"
#         "          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',\n"
#         "          'transition focus:ring-2 focus:ring-primary/40',\n"
#         "          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',\n"
#         "          'disabled:opacity-50 disabled:cursor-not-allowed',\n"
#         "          className,\n"
#         "        )}\n"
#         "        {...props}\n"
#         "      />\n"
#         "      {error && <p className=\"text-xs text-red-600\">{error}</p>}\n"
#         "      {hint && !error && <p className=\"text-xs text-muted\">{hint}</p>}\n"
#         "    </div>\n"
#         "  )\n"
#         "})\n"
#         "\n"
#         "export default Input\n"
#     )

#     return [
#         _file("frontend/src/components/ui/Button.tsx",  button),
#         _file("frontend/src/components/ui/Card.tsx",    card),
#         _file("frontend/src/components/ui/Badge.tsx",   badge),
#         _file("frontend/src/components/ui/Spinner.tsx", spinner),
#         _file("frontend/src/components/ui/Input.tsx",   input_field),
#     ]


# def _layout(app_name: str) -> dict:
#     # Layout is intentionally minimal — NO navbar, NO footer.
#     # Navbar lives in App.tsx (frontend_router_node).
#     # Each page owns its own footer/CTA section.
#     return _file("frontend/src/components/Layout.tsx",
#         "import { ReactNode } from 'react'\n"
#         "\n"
#         "export default function Layout({ children }: { children: ReactNode }) {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex flex-col bg-background\">\n"
#         "      <main className=\"flex-1\">{children}</main>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _error_boundary() -> dict:
#     return _file("frontend/src/components/ErrorBoundary.tsx",
#         "import { Component, ErrorInfo, ReactNode } from 'react'\n"
#         "\n"
#         "interface Props { children: ReactNode }\n"
#         "interface State { hasError: boolean; message: string }\n"
#         "\n"
#         "export default class ErrorBoundary extends Component<Props, State> {\n"
#         "  state: State = { hasError: false, message: '' }\n"
#         "\n"
#         "  static getDerivedStateFromError(err: Error): State {\n"
#         "    return { hasError: true, message: err.message }\n"
#         "  }\n"
#         "\n"
#         "  componentDidCatch(err: Error, info: ErrorInfo) {\n"
#         "    console.error('[ErrorBoundary]', err, info)\n"
#         "  }\n"
#         "\n"
#         "  render() {\n"
#         "    if (this.state.hasError) {\n"
#         "      return (\n"
#         "        <div className=\"min-h-screen center flex-col gap-4 text-center px-6\">\n"
#         "          <h1 className=\"text-3xl font-bold text-gray-900\">Something went wrong</h1>\n"
#         "          <p className=\"text-muted\">{this.state.message}</p>\n"
#         "          <button\n"
#         "            onClick={() => this.setState({ hasError: false, message: '' })}\n"
#         "            className=\"px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "          >\n"
#         "            Try again\n"
#         "          </button>\n"
#         "        </div>\n"
#         "      )\n"
#         "    }\n"
#         "    return this.props.children\n"
#         "  }\n"
#         "}\n"
#     )


# def _not_found_page() -> dict:
#     return _file("frontend/src/pages/NotFound.tsx",
#         "import { Link } from 'react-router-dom'\n"
#         "\n"
#         "export default function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen center flex-col gap-6 text-center px-6\">\n"
#         "      <span className=\"text-8xl font-black text-gray-100 select-none\">404</span>\n"
#         "      <div className=\"-mt-8\">\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
#         "        <Link\n"
#         "          to=\"/\"\n"
#         "          className=\"inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "        >\n"
#         "          Go home\n"
#         "        </Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _app_tsx_stub(pages: list) -> dict:
#     """
#     Minimal App.tsx stub — will be OVERWRITTEN by frontend_router_node
#     which generates the full version with Navbar, lazy loading, etc.
#     This stub exists only so the scaffold is self-contained.
#     """
#     imports = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in pages
#     )
#     routes = "".join(
#         "          <Route path=\"/" + ("" if i == 0 else p.lower()) + "\" element={<" + p + " />} />\n"
#         for i, p in enumerate(pages)
#     )
#     if not pages:
#         imports = ""
#         routes  = "          <Route path=\"/\" element={<div className=\"center min-h-screen text-2xl font-bold\">Welcome</div>} />\n"

#     return _file("frontend/src/App.tsx",
#         "import { BrowserRouter, Routes, Route } from 'react-router-dom'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         + imports
#         + "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + routes
#         + "          <Route path=\"*\" element={<NotFound />} />\n"
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )

# def merge_files(existing, new):
#     """
#     Merge code_files list by filename.
#     If same filename exists → overwrite with latest.
#     """
#     file_map = {f["filename"]: f for f in existing}

#     for f in new:
#         file_map[f["filename"]] = f  # overwrite

#     return list(file_map.values())

# def _types() -> dict:
#     return _file("frontend/src/types/index.ts",
#         "// ---- API response wrapper ----\n"
#         "export interface ApiResponse<T> {\n"
#         "  data:    T\n"
#         "  message: string\n"
#         "  success: boolean\n"
#         "}\n"
#         "\n"
#         "// ---- Pagination ----\n"
#         "export interface PaginatedResponse<T> {\n"
#         "  items: T[]\n"
#         "  total: number\n"
#         "  page:  number\n"
#         "  size:  number\n"
#         "  pages: number\n"
#         "}\n"
#         "\n"
#         "// ---- Auth ----\n"
#         "export interface User {\n"
#         "  id:         string\n"
#         "  email:      string\n"
#         "  name:       string\n"
#         "  role:       'admin' | 'user'\n"
#         "  created_at: string\n"
#         "}\n"
#         "\n"
#         "export interface AuthTokens {\n"
#         "  access_token:  string\n"
#         "  refresh_token: string\n"
#         "  token_type:    string\n"
#         "}\n"
#     )


# def _gitignore() -> dict:
#     return _file("frontend/.gitignore",
#         "node_modules/\ndist/\n.env\n.env.local\n.env.*.local\n"
#         "*.log\n.DS_Store\n*.pem\n.vscode/\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_scaffold_node(state: AgentState) -> dict:
#     print("Generating frontend scaffold (ENTERPRISE MODE)")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     app_name    = site_plan.get("app_name",    requirements.get("app_name",    "AI Builder"))
#     description = site_plan.get("description", requirements.get("description", "AI Generated Application"))
#     pages       = site_plan.get("pages", [])
#     primary     = site_plan.get("primary_color",   requirements.get("primary_color",   "#4f46e5"))
#     secondary   = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

#     scaffold: list = [
#         _package_json(app_name, description),
#         _tsconfig(),
#         _tsconfig_node(),
#         _vite_config(),
#         *_env_files(),
#         _postcss_config(),
#         _tailwind_config(primary, secondary),
#         _index_html(app_name),
#         _main_tsx(app_name),
#         _index_css(),
#         _api_client(),
#         *_hooks(),
#         *_ui_components(),
#         _layout(app_name),
#         _error_boundary(),
#         _not_found_page(),
#         _app_tsx_stub(pages),   # stub — frontend_router_node overwrites with full version
#         _types(),
#         _gitignore(),
#     ]

#     print(f"Generated {len(scaffold)} scaffold files  |  app: {app_name}  |  pages: {pages}")

#     return {
#     "code_files": merge_files(
#         state.get("code_files", []),
#         scaffold
#     )
# }



# """
# frontend_scaffold_node.py  -  Generates all boilerplate frontend files.

# - Full TypeScript scaffold: .tsx/.ts files, tsconfig.json, tsconfig.node.json
# - vite.config.ts: path alias @/->src/, dev proxy /api->localhost:8000
# - Multi-env files: .env, .env.production, .env.example
# - Extended tailwind.config.js: custom colors, fonts, animations, shadows
# - UI components: Button, Card, Badge, Spinner, Input
# - Custom hooks: useApi<T>, useLocalStorage<T>
# - Axios client with request/response interceptors
# - ErrorBoundary, NotFound, Layout (pure <main> wrapper — NO navbar)
# - types/index.ts: ApiResponse<T>, PaginatedResponse<T>, User, AuthTokens
# - No LLM calls — pure Python template generation
# """

# import json
# from backend.state import AgentState


# # ==============================================================
# # Helpers
# # ==============================================================

# def _json(obj: object) -> str:
#     return json.dumps(obj, indent=2)


# def _file(filename: str, content: str) -> dict:
#     return {"filename": filename, "content": content}


# # ==============================================================
# # Individual file builders
# # ==============================================================

# def _package_json(app_name: str, description: str) -> dict:
#     return _file("frontend/package.json", _json({
#         "name": app_name.lower().replace(" ", "-") or "frontend",
#         "private": True,
#         "version": "0.1.0",
#         "type": "module",
#         "description": description,
#         "scripts": {
#             "dev":       "vite",
#             "build":     "tsc && vite build",
#             "preview":   "vite preview",
#             "lint":      "eslint src --ext ts,tsx --report-unused-disable-directives",
#             "typecheck": "tsc --noEmit",
#         },
#         "dependencies": {
#             "react":            "^18.3.0",
#             "react-dom":        "^18.3.0",
#             "react-router-dom": "^6.22.0",
#             "axios":            "^1.6.7",
#             "clsx":             "^2.1.0",
#             "react-hot-toast":  "^2.4.1",
#         },
#         "devDependencies": {
#             "@types/react":         "^18.3.0",
#             "@types/react-dom":     "^18.3.0",
#             "@vitejs/plugin-react": "^4.2.0",
#             "autoprefixer":         "^10.4.0",
#             "eslint":               "^8.57.0",
#             "postcss":              "^8.4.0",
#             "tailwindcss":          "^3.4.0",
#             "typescript":           "^5.4.0",
#             "vite":                 "^5.2.0",
#         },
#     }))


# def _tsconfig() -> dict:
#     return _file("frontend/tsconfig.json", _json({
#         "compilerOptions": {
#             "target":                     "ES2020",
#             "useDefineForClassFields":    True,
#             "lib":                        ["ES2020", "DOM", "DOM.Iterable"],
#             "module":                     "ESNext",
#             "skipLibCheck":               True,
#             "moduleResolution":           "bundler",
#             "allowImportingTsExtensions": True,
#             "resolveJsonModule":          True,
#             "isolatedModules":            True,
#             "noEmit":                     True,
#             "jsx":                        "react-jsx",
#             "strict":                     True,
#             "noUnusedLocals":             True,
#             "noUnusedParameters":         True,
#             "noFallthroughCasesInSwitch": True,
#             "baseUrl":                    ".",
#             "paths":                      {"@/*": ["src/*"]},
#         },
#         "include":    ["src"],
#         "references": [{"path": "./tsconfig.node.json"}],
#     }))


# def _tsconfig_node() -> dict:
#     return _file("frontend/tsconfig.node.json", _json({
#         "compilerOptions": {
#             "composite":                  True,
#             "skipLibCheck":               True,
#             "module":                     "ESNext",
#             "moduleResolution":           "bundler",
#             "allowSyntheticDefaultImports": True,
#         },
#         "include": ["vite.config.ts"],
#     }))


# def _vite_config() -> dict:
#     return _file("frontend/vite.config.ts",
#         "import { defineConfig } from 'vite'\n"
#         "import react from '@vitejs/plugin-react'\n"
#         "import path from 'path'\n"
#         "\n"
#         "export default defineConfig({\n"
#         "  plugins: [react()],\n"
#         "  resolve: {\n"
#         "    alias: { '@': path.resolve(__dirname, './src') },\n"
#         "  },\n"
#         "  server: {\n"
#         "    port: 5173,\n"
#         "    open: true,\n"
#         "    proxy: {\n"
#         "      '/api': {\n"
#         "        target: 'http://localhost:8000',\n"
#         "        changeOrigin: true,\n"
#         "        rewrite: (p) => p.replace(/^\\/api/, ''),\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  build: {\n"
#         "    sourcemap: true,\n"
#         "    rollupOptions: {\n"
#         "      output: {\n"
#         "        manualChunks: { vendor: ['react', 'react-dom', 'react-router-dom'] },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "})\n"
#     )


# def _env_files() -> list:
#     return [
#         _file("frontend/.env",            "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.production", "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.example",    "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#     ]


# def _postcss_config() -> dict:
#     return _file("frontend/postcss.config.js",
#         "export default {\n"
#         "  plugins: { tailwindcss: {}, autoprefixer: {} },\n"
#         "}\n"
#     )


# def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
#     return _file("frontend/tailwind.config.js",
#         "/** @type {import('tailwindcss').Config} */\n"
#         "export default {\n"
#         "  darkMode: 'class',\n"
#         "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n"
#         "  theme: {\n"
#         "    extend: {\n"
#         "      colors: {\n"
#         "        primary:    { DEFAULT: '" + primary + "', hover: '" + primary + "dd' },\n"
#         "        secondary:  { DEFAULT: '" + secondary + "' },\n"
#         "        surface:    '#ffffff',\n"
#         "        background: '#f8fafc',\n"
#         "        muted:      '#64748b',\n"
#         "        border:     '#e2e8f0',\n"
#         "      },\n"
#         "      fontFamily: {\n"
#         "        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],\n"
#         "      },\n"
#         "      borderRadius: {\n"
#         "        xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem',\n"
#         "      },\n"
#         "      boxShadow: {\n"
#         "        card:  '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)',\n"
#         "        modal: '0 20px 60px -10px rgb(0 0 0 / 0.25)',\n"
#         "      },\n"
#         "      animation: {\n"
#         "        'fade-in':   'fadeIn 0.3s ease-out',\n"
#         "        'slide-up':  'slideUp 0.4s ease-out',\n"
#         "        'spin-slow': 'spin 3s linear infinite',\n"
#         "      },\n"
#         "      keyframes: {\n"
#         "        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },\n"
#         "        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  plugins: [],\n"
#         "}\n"
#     )


# def _index_html(app_name: str) -> dict:
#     return _file("frontend/index.html",
#         "<!DOCTYPE html>\n"
#         '<html lang="en" class="scroll-smooth">\n'
#         "  <head>\n"
#         '    <meta charset="UTF-8" />\n'
#         '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
#         '    <meta name="description" content="' + app_name + ' - AI Generated Application" />\n'
#         '    <meta name="theme-color" content="#4f46e5" />\n'
#         '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
#         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
#         '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />\n'
#         "    <title>" + app_name + "</title>\n"
#         "  </head>\n"
#         '  <body class="bg-background text-gray-900 antialiased">\n'
#         '    <div id="root"></div>\n'
#         '    <script type="module" src="/src/main.tsx"></script>\n'
#         "  </body>\n"
#         "</html>\n"
#     )


# def _main_tsx(app_name: str) -> dict:
#     return _file("frontend/src/main.tsx",
#         "import React from 'react'\n"
#         "import ReactDOM from 'react-dom/client'\n"
#         "import App from './App'\n"
#         "import './index.css'\n"
#         "\n"
#         "ReactDOM.createRoot(document.getElementById('root')).render(\n"
#         "  <React.StrictMode>\n"
#         "    <App />\n"
#         "  </React.StrictMode>\n"
#         ")\n"
#     )


# def _index_css() -> dict:
#     return _file("frontend/src/index.css",
#         "@tailwind base;\n"
#         "@tailwind components;\n"
#         "@tailwind utilities;\n"
#         "\n"
#         "@layer base {\n"
#         "  *, *::before, *::after { box-sizing: border-box; }\n"
#         "  html { -webkit-font-smoothing: antialiased; }\n"
#         "  :root {\n"
#         "    --color-primary:   #4f46e5;\n"
#         "    --color-secondary: #0ea5e9;\n"
#         "    --radius:          0.75rem;\n"
#         "  }\n"
#         "}\n"
#         "\n"
#         "@layer utilities {\n"
#         "  .center { @apply flex items-center justify-center; }\n"
#         "  .section { @apply py-20 px-6; }\n"
#         "  .container-narrow { @apply max-w-4xl mx-auto; }\n"
#         "  .text-balance { text-wrap: balance; }\n"
#         "}\n"
#     )


# def _api_client() -> dict:
#     return _file("frontend/src/api/client.ts",
#         "import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'\n"
#         "\n"
#         "const api = axios.create({\n"
#         "  baseURL: import.meta.env.VITE_API_URL,\n"
#         "  timeout: 15_000,\n"
#         "  headers: { 'Content-Type': 'application/json' },\n"
#         "})\n"
#         "\n"
#         "// --- Request interceptor: attach auth token ---\n"
#         "api.interceptors.request.use((config: InternalAxiosRequestConfig) => {\n"
#         "  const token = localStorage.getItem('token')\n"
#         "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
#         "  return config\n"
#         "})\n"
#         "\n"
#         "// --- Response interceptor: global error handling ---\n"
#         "api.interceptors.response.use(\n"
#         "  (res: AxiosResponse) => res,\n"
#         "  (err: AxiosError) => {\n"
#         "    if (err.response?.status === 401) {\n"
#         "      localStorage.removeItem('token')\n"
#         "      window.location.href = '/login'\n"
#         "    }\n"
#         "    return Promise.reject(err)\n"
#         "  }\n"
#         ")\n"
#         "\n"
#         "export default api\n"
#     )


# def _hooks() -> list:
#     use_api = (
#         "import { useState, useCallback } from 'react'\n"
#         "import { AxiosError } from 'axios'\n"
#         "import toast from 'react-hot-toast'\n"
#         "import api from '@/api/client'\n"
#         "\n"
#         "interface UseApiState<T> {\n"
#         "  data: T | null\n"
#         "  loading: boolean\n"
#         "  error: string | null\n"
#         "}\n"
#         "\n"
#         "export function useApi<T>(url: string) {\n"
#         "  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })\n"
#         "\n"
#         "  const fetch = useCallback(async (params?: object) => {\n"
#         "    setState(s => ({ ...s, loading: true, error: null }))\n"
#         "    try {\n"
#         "      const { data } = await api.get<T>(url, { params })\n"
#         "      setState({ data, loading: false, error: null })\n"
#         "      return data\n"
#         "    } catch (err) {\n"
#         "      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'\n"
#         "      setState(s => ({ ...s, loading: false, error: msg }))\n"
#         "      toast.error(msg)\n"
#         "    }\n"
#         "  }, [url])\n"
#         "\n"
#         "  return { ...state, fetch }\n"
#         "}\n"
#     )

#     use_local_storage = (
#         "import { useState, useEffect } from 'react'\n"
#         "\n"
#         "export function useLocalStorage<T>(key: string, initialValue: T) {\n"
#         "  const [value, setValue] = useState<T>(() => {\n"
#         "    try {\n"
#         "      const item = window.localStorage.getItem(key)\n"
#         "      return item ? (JSON.parse(item) as T) : initialValue\n"
#         "    } catch { return initialValue }\n"
#         "  })\n"
#         "\n"
#         "  useEffect(() => {\n"
#         "    try { window.localStorage.setItem(key, JSON.stringify(value)) }\n"
#         "    catch { /* quota exceeded */ }\n"
#         "  }, [key, value])\n"
#         "\n"
#         "  return [value, setValue] as const\n"
#         "}\n"
#     )

#     return [
#         _file("frontend/src/hooks/useApi.ts",           use_api),
#         _file("frontend/src/hooks/useLocalStorage.ts",  use_local_storage),
#     ]


# # def _ui_components() -> list:
#     button = (
#         "import { ButtonHTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'\n"
#         "type Size    = 'sm' | 'md' | 'lg'\n"
#         "\n"
#         "interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: Variant\n"
#         "  size?: Size\n"
#         "  loading?: boolean\n"
#         "  fullWidth?: boolean\n"
#         "}\n"
#         "\n"
#         "const variants: Record<Variant, string> = {\n"
#         "  primary:   'bg-primary text-white hover:bg-primary/90 shadow-sm',\n"
#         "  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',\n"
#         "  ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 border border-border',\n"
#         "  danger:    'bg-red-600 text-white hover:bg-red-700 shadow-sm',\n"
#         "}\n"
#         "\n"
#         "const sizes: Record<Size, string> = {\n"
#         "  sm: 'px-3 py-1.5 text-sm',\n"
#         "  md: 'px-5 py-2.5 text-sm',\n"
#         "  lg: 'px-7 py-3 text-base',\n"
#         "}\n"
#         "\n"
#         "export default function Button({\n"
#         "  children, variant = 'primary', size = 'md',\n"
#         "  loading = false, fullWidth = false, className, disabled, ...props\n"
#         "}: ButtonProps) {\n"
#         "  return (\n"
#         "    <button\n"
#         "      disabled={disabled || loading}\n"
#         "      className={clsx(\n"
#         "        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',\n"
#         "        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',\n"
#         "        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:pointer-events-none',\n"
#         "        variants[variant], sizes[size],\n"
#         "        fullWidth && 'w-full',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {loading && (\n"
#         "        <svg className=\"animate-spin h-4 w-4\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "          <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "          <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "        </svg>\n"
#         "      )}\n"
#         "      {children}\n"
#         "    </button>\n"
#         "  )\n"
#         "}\n"
#     )

#     card = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface CardProps extends HTMLAttributes<HTMLDivElement> {\n"
#         "  children: ReactNode\n"
#         "  padding?: 'none' | 'sm' | 'md' | 'lg'\n"
#         "  hoverable?: boolean\n"
#         "}\n"
#         "\n"
#         "const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }\n"
#         "\n"
#         "export default function Card({ children, padding = 'md', hoverable = false, className, ...props }: CardProps) {\n"
#         "  return (\n"
#         "    <div\n"
#         "      className={clsx(\n"
#         "        'bg-surface rounded-2xl border border-border shadow-card',\n"
#         "        paddings[padding],\n"
#         "        hoverable && 'transition-shadow duration-200 hover:shadow-md cursor-pointer',\n"
#         "        className,\n"
#         "      )}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )

#     badge = (
#         "import { HTMLAttributes, ReactNode } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'\n"
#         "\n"
#         "const styles: Record<BadgeVariant, string> = {\n"
#         "  default: 'bg-gray-100 text-gray-700',\n"
#         "  success: 'bg-green-100 text-green-700',\n"
#         "  warning: 'bg-yellow-100 text-yellow-800',\n"
#         "  danger:  'bg-red-100 text-red-700',\n"
#         "  info:    'bg-blue-100 text-blue-700',\n"
#         "}\n"
#         "\n"
#         "interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {\n"
#         "  children: ReactNode\n"
#         "  variant?: BadgeVariant\n"
#         "}\n"
#         "\n"
#         "export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {\n"
#         "  return (\n"
#         "    <span\n"
#         "      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}\n"
#         "      {...props}\n"
#         "    >\n"
#         "      {children}\n"
#         "    </span>\n"
#         "  )\n"
#         "}\n"
#     )

#     spinner = (
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "export default function Spinner({ className }: { className?: string }) {\n"
#         "  return (\n"
#         "    <svg\n"
#         "      className={clsx('animate-spin text-primary', className ?? 'h-6 w-6')}\n"
#         "      fill=\"none\" viewBox=\"0 0 24 24\"\n"
#         "    >\n"
#         "      <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "      <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "    </svg>\n"
#         "  )\n"
#         "}\n"
#     )

#     input_field = (
#         "import { InputHTMLAttributes, forwardRef } from 'react'\n"
#         "import { clsx } from 'clsx'\n"
#         "\n"
#         "interface InputProps extends InputHTMLAttributes<HTMLInputElement> {\n"
#         "  label?: string\n"
#         "  error?: string\n"
#         "  hint?: string\n"
#         "}\n"
#         "\n"
#         "const Input = forwardRef<HTMLInputElement, InputProps>(function Input(\n"
#         "  { label, error, hint, className, id, ...props }, ref\n"
#         ") {\n"
#         "  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')\n"
#         "  return (\n"
#         "    <div className=\"flex flex-col gap-1\">\n"
#         "      {label && (\n"
#         "        <label htmlFor={inputId} className=\"text-sm font-medium text-gray-700\">\n"
#         "          {label}\n"
#         "        </label>\n"
#         "      )}\n"
#         "      <input\n"
#         "        ref={ref}\n"
#         "        id={inputId}\n"
#         "        className={clsx(\n"
#         "          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',\n"
#         "          'transition focus:ring-2 focus:ring-primary/40',\n"
#         "          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',\n"
#         "          'disabled:opacity-50 disabled:cursor-not-allowed',\n"
#         "          className,\n"
#         "        )}\n"
#         "        {...props}\n"
#         "      />\n"
#         "      {error && <p className=\"text-xs text-red-600\">{error}</p>}\n"
#         "      {hint && !error && <p className=\"text-xs text-muted\">{hint}</p>}\n"
#         "    </div>\n"
#         "  )\n"
#         "})\n"
#         "\n"
#         "export default Input\n"
#     )

#     return [
#         _file("frontend/src/components/ui/Button.tsx",  button),
#         _file("frontend/src/components/ui/Card.tsx",    card),
#         _file("frontend/src/components/ui/Badge.tsx",   badge),
#         _file("frontend/src/components/ui/Spinner.tsx", spinner),
#         _file("frontend/src/components/ui/Input.tsx",   input_field),
#     ]

# def _ui_components() -> list:
#     # =========================
#     # BUTTON
#     # =========================
#     button = """
# import { ButtonHTMLAttributes, ReactNode } from 'react'
# import { clsx } from 'clsx'

# type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
# type Size = 'sm' | 'md' | 'lg'

# interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
#   children: ReactNode
#   variant?: Variant
#   size?: Size
#   loading?: boolean
#   fullWidth?: boolean
#   icon?: ReactNode
# }

# const variants: Record<Variant, string> = {
#   primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
#   secondary: 'bg-gray-800 text-white hover:bg-gray-900',
#   ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
#   danger: 'bg-red-600 text-white hover:bg-red-700',
# }

# const sizes: Record<Size, string> = {
#   sm: 'px-3 py-1.5 text-sm',
#   md: 'px-5 py-2.5 text-sm',
#   lg: 'px-7 py-3 text-base',
# }

# export default function Button({
#   children,
#   variant = 'primary',
#   size = 'md',
#   loading = false,
#   fullWidth = false,
#   icon,
#   className,
#   ...props
# }: ButtonProps) {
#   return (
#     <button
#       className={clsx(
#         'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition',
#         variants[variant],
#         sizes[size],
#         fullWidth && 'w-full',
#         className
#       )}
#       {...props}
#     >
#       {loading && <span className="animate-spin">⏳</span>}
#       {icon}
#       {children}
#     </button>
#   )
# }
# """

#     # =========================
#     # CARD
#     # =========================
#     card = """
# import { ReactNode } from 'react'
# import { clsx } from 'clsx'

# export default function Card({ children, className }: { children: ReactNode, className?: string }) {
#   return (
#     <div className={clsx("bg-white border rounded-2xl shadow-sm p-6", className)}>
#       {children}
#     </div>
#   )
# }
# """

#     # =========================
#     # MODAL
#     # =========================
#     modal = """
# import { ReactNode } from 'react'

# export default function Modal({ open, onClose, children }: {
#   open: boolean
#   onClose: () => void
#   children: ReactNode
# }) {
#   if (!open) return null

#   return (
#     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
#       <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
#         <button onClick={onClose} className="absolute top-2 right-2">✖</button>
#         {children}
#       </div>
#     </div>
#   )
# }
# """

#     # =========================
#     # INPUT
#     # =========================
#     input_field = """
# import { InputHTMLAttributes } from 'react'

# export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
#   return (
#     <input
#       {...props}
#       className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
#     />
#   )
# }
# """

#     # =========================
#     # NAVBAR
#     # =========================
#     navbar = """
# import { Link } from 'react-router-dom'

# export default function Navbar() {
#   return (
#     <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
#       <h1 className="font-bold text-lg">AI Builder</h1>
#       <div className="flex gap-4">
#         <Link to="/">Home</Link>
#         <Link to="/dashboard">Dashboard</Link>
#         <Link to="/login">Login</Link>
#       </div>
#     </nav>
#   )
# }
# """

#     # =========================
#     # SIDEBAR
#     # =========================
#     sidebar = """
# import { Link } from 'react-router-dom'

# export default function Sidebar() {
#   return (
#     <div className="w-64 bg-gray-900 text-white min-h-screen p-4 space-y-4">
#       <h2 className="text-xl font-bold">Dashboard</h2>
#       <Link to="/dashboard">Overview</Link>
#       <Link to="/users">Users</Link>
#       <Link to="/settings">Settings</Link>
#     </div>
#   )
# }
# """

#     # =========================
#     # TABLE
#     # =========================
#     table = """
# export default function Table({ data }: { data: any[] }) {
#   return (
#     <table className="w-full border rounded-xl overflow-hidden">
#       <thead className="bg-gray-100">
#         <tr>
#           {Object.keys(data[0] || {}).map((key) => (
#             <th key={key} className="p-2 text-left">{key}</th>
#           ))}
#         </tr>
#       </thead>
#       <tbody>
#         {data.map((row, i) => (
#           <tr key={i} className="border-t">
#             {Object.values(row).map((val, j) => (
#               <td key={j} className="p-2">{val as string}</td>
#             ))}
#           </tr>
#         ))}
#       </tbody>
#     </table>
#   )
# }
# """

#     # =========================
#     # TABS
#     # =========================
#     tabs = """
# import { useState } from 'react'

# export default function Tabs({ tabs }: { tabs: { label: string, content: any }[] }) {
#   const [active, setActive] = useState(0)

#   return (
#     <div>
#       <div className="flex gap-4 border-b mb-4">
#         {tabs.map((t, i) => (
#           <button key={i} onClick={() => setActive(i)}>
#             {t.label}
#           </button>
#         ))}
#       </div>
#       <div>{tabs[active].content}</div>
#     </div>
#   )
# }
# """

#     # =========================
#     # TOAST
#     # =========================
#     toast = """
# export default function Toast({ message }: { message: string }) {
#   return (
#     <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded">
#       {message}
#     </div>
#   )
# }
# """

#     # =========================
#     # RETURN FILES
#     # =========================
#     return [
#         _file("frontend/src/components/ui/Button.tsx", button),
#         _file("frontend/src/components/ui/Card.tsx", card),
#         _file("frontend/src/components/ui/Modal.tsx", modal),
#         _file("frontend/src/components/ui/Input.tsx", input_field),
#         _file("frontend/src/components/ui/Navbar.tsx", navbar),
#         _file("frontend/src/components/ui/Sidebar.tsx", sidebar),
#         _file("frontend/src/components/ui/Table.tsx", table),
#         _file("frontend/src/components/ui/Tabs.tsx", tabs),
#         _file("frontend/src/components/ui/Toast.tsx", toast),
#     ]
# def _layout(app_name: str) -> dict:
#     # Layout is intentionally minimal — NO navbar, NO footer.
#     # Navbar lives in App.tsx (frontend_router_node).
#     # Each page owns its own footer/CTA section.
#     return _file("frontend/src/components/Layout.tsx",
#         "import { ReactNode } from 'react'\n"
#         "\n"
#         "export default function Layout({ children }: { children: ReactNode }) {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex flex-col bg-background\">\n"
#         "      <main className=\"flex-1\">{children}</main>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _error_boundary() -> dict:
#     return _file("frontend/src/components/ErrorBoundary.tsx",
#         "import { Component, ErrorInfo, ReactNode } from 'react'\n"
#         "\n"
#         "interface Props { children: ReactNode }\n"
#         "interface State { hasError: boolean; message: string }\n"
#         "\n"
#         "export default class ErrorBoundary extends Component<Props, State> {\n"
#         "  state: State = { hasError: false, message: '' }\n"
#         "\n"
#         "  static getDerivedStateFromError(err: Error): State {\n"
#         "    return { hasError: true, message: err.message }\n"
#         "  }\n"
#         "\n"
#         "  componentDidCatch(err: Error, info: ErrorInfo) {\n"
#         "    console.error('[ErrorBoundary]', err, info)\n"
#         "  }\n"
#         "\n"
#         "  render() {\n"
#         "    if (this.state.hasError) {\n"
#         "      return (\n"
#         "        <div className=\"min-h-screen center flex-col gap-4 text-center px-6\">\n"
#         "          <h1 className=\"text-3xl font-bold text-gray-900\">Something went wrong</h1>\n"
#         "          <p className=\"text-muted\">{this.state.message}</p>\n"
#         "          <button\n"
#         "            onClick={() => this.setState({ hasError: false, message: '' })}\n"
#         "            className=\"px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "          >\n"
#         "            Try again\n"
#         "          </button>\n"
#         "        </div>\n"
#         "      )\n"
#         "    }\n"
#         "    return this.props.children\n"
#         "  }\n"
#         "}\n"
#     )


# def _not_found_page() -> dict:
#     return _file("frontend/src/pages/NotFound.tsx",
#         "import { Link } from 'react-router-dom'\n"
#         "\n"
#         "export default function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen center flex-col gap-6 text-center px-6\">\n"
#         "      <span className=\"text-8xl font-black text-gray-100 select-none\">404</span>\n"
#         "      <div className=\"-mt-8\">\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
#         "        <Link\n"
#         "          to=\"/\"\n"
#         "          className=\"inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "        >\n"
#         "          Go home\n"
#         "        </Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _app_tsx_stub(pages: list) -> dict:
#     """
#     Minimal App.tsx stub — will be OVERWRITTEN by frontend_router_node
#     which generates the full version with Navbar, lazy loading, etc.
#     This stub exists only so the scaffold is self-contained.
#     """
#     imports = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in pages
#     )
#     routes = "".join(
#         "          <Route path=\"/" + ("" if i == 0 else p.lower()) + "\" element={<" + p + " />} />\n"
#         for i, p in enumerate(pages)
#     )
#     if not pages:
#         imports = ""
#         routes  = "          <Route path=\"/\" element={<div className=\"center min-h-screen text-2xl font-bold\">Welcome</div>} />\n"

#     return _file("frontend/src/App.tsx",
#         "import { BrowserRouter, Routes, Route } from 'react-router-dom'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         + imports
#         + "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + routes
#         + "          <Route path=\"*\" element={<NotFound />} />\n"
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )


# def _types() -> dict:
#     return _file("frontend/src/types/index.ts",
#         "// ---- API response wrapper ----\n"
#         "export interface ApiResponse<T> {\n"
#         "  data:    T\n"
#         "  message: string\n"
#         "  success: boolean\n"
#         "}\n"
#         "\n"
#         "// ---- Pagination ----\n"
#         "export interface PaginatedResponse<T> {\n"
#         "  items: T[]\n"
#         "  total: number\n"
#         "  page:  number\n"
#         "  size:  number\n"
#         "  pages: number\n"
#         "}\n"
#         "\n"
#         "// ---- Auth ----\n"
#         "export interface User {\n"
#         "  id:         string\n"
#         "  email:      string\n"
#         "  name:       string\n"
#         "  role:       'admin' | 'user'\n"
#         "  created_at: string\n"
#         "}\n"
#         "\n"
#         "export interface AuthTokens {\n"
#         "  access_token:  string\n"
#         "  refresh_token: string\n"
#         "  token_type:    string\n"
#         "}\n"
#     )


# def _gitignore() -> dict:
#     return _file("frontend/.gitignore",
#         "node_modules/\ndist/\n.env\n.env.local\n.env.*.local\n"
#         "*.log\n.DS_Store\n*.pem\n.vscode/\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_scaffold_node(state: AgentState) -> dict:
#     print("Generating frontend scaffold (ENTERPRISE MODE)")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     app_name    = site_plan.get("app_name",    requirements.get("app_name",    "AI Builder"))
#     description = site_plan.get("description", requirements.get("description", "AI Generated Application"))
#     pages       = site_plan.get("pages", [])
#     primary     = site_plan.get("primary_color",   requirements.get("primary_color",   "#4f46e5"))
#     secondary   = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

#     scaffold: list = [
#         _package_json(app_name, description),
#         _tsconfig(),
#         _tsconfig_node(),
#         _vite_config(),
#         *_env_files(),
#         _postcss_config(),
#         _tailwind_config(primary, secondary),
#         _index_html(app_name),
#         _main_tsx(app_name),
#         _index_css(),
#         _api_client(),
#         *_hooks(),
#         *_ui_components(),
#         _layout(app_name),
#         _error_boundary(),
#         _not_found_page(),
#         _app_tsx_stub(pages),   # stub — frontend_router_node overwrites with full version
#         _types(),
#         _gitignore(),
#     ]

#     print(f"Generated {len(scaffold)} scaffold files  |  app: {app_name}  |  pages: {pages}")

#     return {
#         "code_files": state.get("code_files", []) + scaffold,
#     }


# import json
# from backend.state import AgentState
# from typing import List, Dict, Any

# # ==============================================================
# # Helpers
# # ==============================================================

# def _json(obj: object) -> str:
#     return json.dumps(obj, indent=2)


# def _file(filename: str, content: str) -> dict:
#     return {"filename": filename, "content": content}


# # ==============================================================
# # Component Index (for easy imports)
# # ==============================================================
# def _components_index() -> dict:
#     return _file("frontend/src/components/index.ts",
#         "// Export all components\n"
#         "export { default as Button } from './ui/Button'\n"
#         "export { default as Card } from './ui/Card'\n"
#         "export { default as Input } from './ui/Input'\n"
#         "export { default as Badge } from './ui/Badge'\n"
#         "export { default as Spinner } from './ui/Spinner'\n"
#         "export { default as Alert } from './ui/Alert'\n"
#         "export { default as Modal } from './ui/Modal'\n"
#         "export { default as Table } from './ui/Table'\n"
#         "export { default as Layout } from './layouts/Layout'\n"
#         "export { default as Navbar } from './layouts/Navbar'\n"
#         "export { default as Footer } from './layouts/Footer'\n"
#         "export { default as Sidebar } from './layouts/Sidebar'\n"
#     )



# # ==============================================================
# # Individual file builders
# # ==============================================================

# def _package_json(app_name: str, description: str) -> dict:
#     return _file("frontend/package.json", _json({
#         "name": app_name.lower().replace(" ", "-") or "frontend",
#         "private": True,
#         "version": "0.1.0",
#         "type": "module",
#         "description": description,
#         "scripts": {
#             "dev": "vite",
#             "build": "tsc && vite build",
#             "preview": "vite preview",
#             "typecheck": "tsc --noEmit",
#         },
#         "dependencies": {
#             "react": "^18.3.0",
#             "react-dom": "^18.3.0",
#             "react-router-dom": "^6.22.0",
#             "axios": "^1.6.7",
#             "clsx": "^2.1.0",
#             "react-hot-toast": "^2.4.1",
#         },
#         "devDependencies": {
#             "@types/react": "^18.3.0",
#             "@types/react-dom": "^18.3.0",
#             "@vitejs/plugin-react": "^4.2.0",
#             "autoprefixer": "^10.4.0",
#             "postcss": "^8.4.0",
#             "tailwindcss": "^3.4.0",
#             "typescript": "^5.4.0",
#             "vite": "^5.2.0",
#         },
#     }))


# def _tsconfig() -> dict:
#     return _file("frontend/tsconfig.json", _json({
#         "compilerOptions": {
#             "target": "ES2020",
#             "useDefineForClassFields": True,
#             "lib": ["ES2020", "DOM", "DOM.Iterable"],
#             "module": "ESNext",
#             "skipLibCheck": True,
#             "moduleResolution": "bundler",
#             "allowImportingTsExtensions": True,
#             "resolveJsonModule": True,
#             "isolatedModules": True,
#             "noEmit": True,
#             "jsx": "react-jsx",
#             "strict": True,
#             "noUnusedLocals": True,
#             "noUnusedParameters": True,
#             "noFallthroughCasesInSwitch": True,
#             "baseUrl": ".",
#             "paths": {"@/*": ["src/*"]},
#         },
#         "include": ["src"],
#         "references": [{"path": "./tsconfig.node.json"}],
#     }))


# def _tsconfig_node() -> dict:
#     return _file("frontend/tsconfig.node.json", _json({
#         "compilerOptions": {
#             "composite": True,
#             "skipLibCheck": True,
#             "module": "ESNext",
#             "moduleResolution": "bundler",
#             "allowSyntheticDefaultImports": True,
#         },
#         "include": ["vite.config.ts"],
#     }))


# def _vite_config() -> dict:
#     return _file("frontend/vite.config.ts",
#         "import { defineConfig } from 'vite'\n"
#         "import react from '@vitejs/plugin-react'\n"
#         "import path from 'path'\n"
#         "\n"
#         "export default defineConfig({\n"
#         "  plugins: [react()],\n"
#         "  resolve: {\n"
#         "    alias: { '@': path.resolve(__dirname, './src') },\n"
#         "  },\n"
#         "  server: {\n"
#         "    port: 5173,\n"
#         "    open: true,\n"
#         "    proxy: {\n"
#         "      '/api': {\n"
#         "        target: 'http://localhost:8000',\n"
#         "        changeOrigin: true,\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "})\n"
#     )


# def _env_files() -> list:
#     return [
#         _file("frontend/.env", "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.production", "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
#         _file("frontend/.env.example", "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
#     ]


# def _postcss_config() -> dict:
#     return _file("frontend/postcss.config.js",
#         "export default {\n"
#         "  plugins: {\n"
#         "    tailwindcss: {},\n"
#         "    autoprefixer: {},\n"
#         "  },\n"
#         "}\n"
#     )


# def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
#     return _file("frontend/tailwind.config.js",
#         "/** @type {import('tailwindcss').Config} */\n"
#         "export default {\n"
#         "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n"
#         "  theme: {\n"
#         "    extend: {\n"
#         "      colors: {\n"
#         "        primary: '" + primary + "',\n"
#         "        secondary: '" + secondary + "',\n"
#         "        surface: '#ffffff',\n"
#         "        background: '#f8fafc',\n"
#         "        muted: '#64748b',\n"
#         "        border: '#e2e8f0',\n"
#         "      },\n"
#         "      fontFamily: {\n"
#         "        sans: ['Inter', 'system-ui', 'sans-serif'],\n"
#         "      },\n"
#         "      borderRadius: {\n"
#         "        xl: '0.75rem',\n"
#         "      },\n"
#         "    },\n"
#         "  },\n"
#         "  plugins: [],\n"
#         "}\n"
#     )


# def _index_html(app_name: str) -> dict:
#     return _file("frontend/index.html",
#         "<!DOCTYPE html>\n"
#         '<html lang="en">\n'
#         "  <head>\n"
#         '    <meta charset="UTF-8" />\n'
#         '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
#         '    <meta name="description" content="' + app_name + ' - AI Generated Application" />\n'
#         '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
#         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
#         '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />\n'
#         "    <title>" + app_name + "</title>\n"
#         "  </head>\n"
#         '  <body class="bg-background">\n'
#         '    <div id="root"></div>\n'
#         '    <script type="module" src="/src/main.tsx"></script>\n'
#         "  </body>\n"
#         "</html>\n"
#     )


# def _main_tsx() -> dict:
#     return _file("frontend/src/main.tsx",
#         "import React from 'react'\n"
#         "import ReactDOM from 'react-dom/client'\n"
#         "import { Toaster } from 'react-hot-toast'\n"
#         "import App from './App'\n"
#         "import './index.css'\n"
#         "\n"
#         "ReactDOM.createRoot(document.getElementById('root')!).render(\n"
#         "  <React.StrictMode>\n"
#         "    <App />\n"
#         "    <Toaster position=\"top-right\" />\n"
#         "  </React.StrictMode>\n"
#         ")\n"
#     )


# def _index_css() -> dict:
#     return _file("frontend/src/index.css",
#         "@tailwind base;\n"
#         "@tailwind components;\n"
#         "@tailwind utilities;\n"
#         "\n"
#         "@layer base {\n"
#         "  * { box-sizing: border-box; }\n"
#         "  html { -webkit-font-smoothing: antialiased; }\n"
#         "}\n"
#         "\n"
#         "@layer components {\n"
#         "  .container-custom {\n"
#         "    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;\n"
#         "  }\n"
#         "}\n"
#     )


# def _api_client() -> dict:
#     return _file("frontend/src/api/client.ts",
#         "import axios from 'axios'\n"
#         "\n"
#         "const api = axios.create({\n"
#         "  baseURL: import.meta.env.VITE_API_URL,\n"
#         "  timeout: 15000,\n"
#         "  headers: { 'Content-Type': 'application/json' },\n"
#         "})\n"
#         "\n"
#         "api.interceptors.request.use((config) => {\n"
#         "  const token = localStorage.getItem('token')\n"
#         "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
#         "  return config\n"
#         "})\n"
#         "\n"
#         "export default api\n"
#     )


# def _hooks() -> list:
#     use_api = """import { useState, useCallback } from 'react'
# import { AxiosError } from 'axios'
# import toast from 'react-hot-toast'
# import api from '@/api/client'

# interface UseApiState<T> {
#   data: T | null
#   loading: boolean
#   error: string | null
# }

# export function useApi<T>(url: string) {
#   const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })

#   const fetch = useCallback(async (params?: object) => {
#     setState(s => ({ ...s, loading: true, error: null }))
#     try {
#       const { data } = await api.get<T>(url, { params })
#       setState({ data, loading: false, error: null })
#       return data
#     } catch (err) {
#       const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'
#       setState(s => ({ ...s, loading: false, error: msg }))
#       toast.error(msg)
#     }
#   }, [url])

#   return { ...state, fetch }
# }"""

#     use_local_storage = """import { useState, useEffect } from 'react'

# export function useLocalStorage<T>(key: string, initialValue: T) {
#   const [value, setValue] = useState<T>(() => {
#     try {
#       const item = window.localStorage.getItem(key)
#       return item ? (JSON.parse(item) as T) : initialValue
#     } catch { return initialValue }
#   })

#   useEffect(() => {
#     try { window.localStorage.setItem(key, JSON.stringify(value)) }
#     catch { /* quota exceeded */ }
#   }, [key, value])

#   return [value, setValue] as const
# }"""

#     return [
#         _file("frontend/src/hooks/useApi.ts", use_api),
#         _file("frontend/src/hooks/useLocalStorage.ts", use_local_storage),
#     ]


# # ==============================================================
# # UI Components
# # ==============================================================

# def _ui_components() -> list:
#     # Button Component
#     button = """import { ButtonHTMLAttributes, ReactNode } from 'react'
# import { clsx } from 'clsx'

# type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
# type Size = 'sm' | 'md' | 'lg'

# interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
#   children: ReactNode
#   variant?: Variant
#   size?: Size
#   loading?: boolean
#   fullWidth?: boolean
#   icon?: ReactNode
#   iconPosition?: 'left' | 'right'
# }

# const variants: Record<Variant, string> = {
#   primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
#   secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',
#   outline: 'border-2 border-primary text-primary hover:bg-primary/10',
#   ghost: 'text-gray-700 hover:bg-gray-100',
#   danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
# }

# const sizes: Record<Size, string> = {
#   sm: 'px-3 py-1.5 text-sm',
#   md: 'px-5 py-2.5 text-sm',
#   lg: 'px-7 py-3 text-base',
# }

# export default function Button({
#   children,
#   variant = 'primary',
#   size = 'md',
#   loading = false,
#   fullWidth = false,
#   icon,
#   iconPosition = 'left',
#   className,
#   disabled,
#   ...props
# }: ButtonProps) {
#   return (
#     <button
#       disabled={disabled || loading}
#       className={clsx(
#         'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
#         'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',
#         'focus-visible:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed',
#         variants[variant],
#         sizes[size],
#         fullWidth && 'w-full',
#         className,
#       )}
#       {...props}
#     >
#       {loading && (
#         <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
#           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
#           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
#         </svg>
#       )}
#       {icon && iconPosition === 'left' && !loading && icon}
#       {children}
#       {icon && iconPosition === 'right' && !loading && icon}
#     </button>
#   )
# }"""

#     # Card Component
#     card = """import { HTMLAttributes, ReactNode } from 'react'
# import { clsx } from 'clsx'

# interface CardProps extends HTMLAttributes<HTMLDivElement> {
#   children: ReactNode
#   padding?: 'none' | 'sm' | 'md' | 'lg'
#   hoverable?: boolean
# }

# const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }

# export default function Card({ 
#   children, 
#   padding = 'md', 
#   hoverable = false, 
#   className, 
#   ...props 
# }: CardProps) {
#   return (
#     <div
#       className={clsx(
#         'bg-surface rounded-2xl border border-border shadow-card',
#         paddings[padding],
#         hoverable && 'transition-all duration-200 hover:shadow-md hover:scale-[1.01] cursor-pointer',
#         className,
#       )}
#       {...props}
#     >
#       {children}
#     </div>
#   )
# }"""

#     # Input Component
#     input_field = """import { InputHTMLAttributes, forwardRef } from 'react'
# import { clsx } from 'clsx'

# interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
#   label?: string
#   error?: string
#   hint?: string
# }

# const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
#   { label, error, hint, className, id, ...props }, ref
# ) {
#   const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')
#   return (
#     <div className="flex flex-col gap-1">
#       {label && (
#         <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
#           {label}
#         </label>
#       )}
#       <input
#         ref={ref}
#         id={inputId}
#         className={clsx(
#           'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',
#           'transition focus:ring-2 focus:ring-primary/40',
#           error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',
#           'disabled:opacity-50 disabled:cursor-not-allowed',
#           className,
#         )}
#         {...props}
#       />
#       {error && <p className="text-xs text-red-600">{error}</p>}
#       {hint && !error && <p className="text-xs text-muted">{hint}</p>}
#     </div>
#   )
# })

# export default Input"""

#     # Badge Component
#     badge = """import { HTMLAttributes, ReactNode } from 'react'
# import { clsx } from 'clsx'

# type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

# const styles: Record<BadgeVariant, string> = {
#   default: 'bg-gray-100 text-gray-700',
#   success: 'bg-green-100 text-green-700',
#   warning: 'bg-yellow-100 text-yellow-800',
#   danger: 'bg-red-100 text-red-700',
#   info: 'bg-blue-100 text-blue-700',
# }

# interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
#   children: ReactNode
#   variant?: BadgeVariant
# }

# export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
#   return (
#     <span
#       className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}
#       {...props}
#     >
#       {children}
#     </span>
#   )
# }"""

#     # Spinner Component
#     spinner = """import { clsx } from 'clsx'

# interface SpinnerProps {
#   size?: 'sm' | 'md' | 'lg'
#   className?: string
# }

# const sizes = {
#   sm: 'h-4 w-4',
#   md: 'h-6 w-6',
#   lg: 'h-8 w-8',
# }

# export default function Spinner({ size = 'md', className }: SpinnerProps) {
#   return (
#     <svg
#       className={clsx('animate-spin text-primary', sizes[size], className)}
#       fill="none"
#       viewBox="0 0 24 24"
#     >
#       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
#       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
#     </svg>
#   )
# }"""

#     # Alert Component
#     alert = """import { ReactNode } from 'react'
# import { clsx } from 'clsx'

# type AlertVariant = 'success' | 'error' | 'warning' | 'info'

# interface AlertProps {
#   variant: AlertVariant
#   title?: string
#   message: string
#   onClose?: () => void
#   icon?: ReactNode
# }

# const variants: Record<AlertVariant, { bg: string; border: string; text: string }> = {
#   success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
#   error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
#   warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
#   info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
# }

# export default function Alert({ variant, title, message, onClose, icon }: AlertProps) {
#   const style = variants[variant]

#   return (
#     <div className={clsx('rounded-lg border p-4', style.bg, style.border)}>
#       <div className="flex items-start">
#         <div className={clsx('flex-shrink-0', style.text)}>
#           {icon || (
#             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
#               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
#             </svg>
#           )}
#         </div>
#         <div className="ml-3 flex-1">
#           {title && <h3 className={clsx('text-sm font-medium', style.text)}>{title}</h3>}
#           <div className={clsx('text-sm', style.text)}>{message}</div>
#         </div>
#         {onClose && (
#           <button
#             onClick={onClose}
#             className={clsx('ml-4 flex-shrink-0', style.text, 'hover:opacity-75')}
#           >
#             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
#               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
#             </svg>
#           </button>
#         )}
#       </div>
#     </div>
#   )
# }"""

#     return [
#         _file("frontend/src/components/ui/Button.tsx", button),
#         _file("frontend/src/components/ui/Card.tsx", card),
#         _file("frontend/src/components/ui/Input.tsx", input_field),
#         _file("frontend/src/components/ui/Badge.tsx", badge),
#         _file("frontend/src/components/ui/Spinner.tsx", spinner),
#         _file("frontend/src/components/ui/Alert.tsx", alert),
#     ]


# # ==============================================================
# # Layout Components
# # ==============================================================

# def _layout_components() -> list:
#     # Layout Component
#     layout = """import { ReactNode } from 'react'
# import Navbar from './Navbar'

# interface LayoutProps {
#   children: ReactNode
# }

# export default function Layout({ children }: LayoutProps) {
#   return (
#     <div className="min-h-screen flex flex-col bg-background">
#       <Navbar />
#       <main className="flex-1">{children}</main>
#     </div>
#   )
# }"""

#     # Navbar Component
#     navbar = """import { Link, useLocation } from 'react-router-dom'
# import Button from '../ui/Button'

# interface NavItem {
#   path: string
#   label: string
# }

# interface NavbarProps {
#   items?: NavItem[]
#   appName?: string
#   ctaText?: string
#   primaryColor?: string
# }

# export default function Navbar({ 
#   items = [], 
#   appName = 'App', 
#   ctaText = 'Get Started',
#   primaryColor = '#4f46e5'
# }: NavbarProps) {
#   const location = useLocation()
  
#   const defaultItems: NavItem[] = [
#     { path: '/', label: 'Home' },
#     { path: '/features', label: 'Features' },
#     { path: '/pricing', label: 'Pricing' },
#   ]
  
#   const navItems = items.length ? items : defaultItems
#   const isActive = (path: string): boolean => {
#     if (path === '/') return location.pathname === '/'
#     return location.pathname.startsWith(path)
#   }

#   return (
#     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
#       <div className="container-custom">
#         <div className="flex items-center justify-between h-16">
#           <Link to="/" className="text-xl font-bold" style={{ color: primaryColor }}>
#             {appName}
#           </Link>
          
#           <nav className="hidden md:flex items-center gap-1">
#             {navItems.map((item) => (
#               <Link
#                 key={item.path}
#                 to={item.path}
#                 className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
#                 style={{
#                   color: isActive(item.path) ? primaryColor : '#4b5563',
#                   background: isActive(item.path) ? `${primaryColor}10` : 'transparent'
#                 }}
#               >
#                 {item.label}
#               </Link>
#             ))}
#           </nav>
          
#           <Button variant="primary" size="sm">
#             {ctaText}
#           </Button>
#         </div>
#       </div>
#     </header>
#   )
# }"""

#     return [
#         _file("frontend/src/components/layouts/Layout.tsx", layout),
#         _file("frontend/src/components/layouts/Navbar.tsx", navbar),
#     ]


# def _error_boundary() -> dict:
#     return _file("frontend/src/components/ErrorBoundary.tsx",
#         "import { Component, ErrorInfo, ReactNode } from 'react'\n"
#         "\n"
#         "interface Props { children: ReactNode }\n"
#         "interface State { hasError: boolean; error: Error | null }\n"
#         "\n"
#         "export default class ErrorBoundary extends Component<Props, State> {\n"
#         "  constructor(props: Props) {\n"
#         "    super(props)\n"
#         "    this.state = { hasError: false, error: null }\n"
#         "  }\n"
#         "\n"
#         "  static getDerivedStateFromError(error: Error): State {\n"
#         "    return { hasError: true, error }\n"
#         "  }\n"
#         "\n"
#         "  componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n"
#         "    console.error('ErrorBoundary caught an error:', error, errorInfo)\n"
#         "  }\n"
#         "\n"
#         "  render() {\n"
#         "    if (this.state.hasError) {\n"
#         "      return (\n"
#         "        <div className=\"min-h-screen flex items-center justify-center p-6\">\n"
#         "          <div className=\"text-center\">\n"
#         "            <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Something went wrong</h1>\n"
#         "            <p className=\"text-muted mb-4\">{this.state.error?.message}</p>\n"
#         "            <button\n"
#         "              onClick={() => window.location.reload()}\n"
#         "              className=\"px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90\"\n"
#         "            >\n"
#         "              Reload Page\n"
#         "            </button>\n"
#         "          </div>\n"
#         "        </div>\n"
#         "      )\n"
#         "    }\n"
#         "\n"
#         "    return this.props.children\n"
#         "  }\n"
#         "}\n"
#     )


# def _not_found_page() -> dict:
#     return _file("frontend/src/pages/NotFound.tsx",
#         "import { Link } from 'react-router-dom'\n"
#         "\n"
#         "export default function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex items-center justify-center text-center p-6\">\n"
#         "      <div>\n"
#         "        <div className=\"text-6xl font-black text-gray-100 mb-4\">404</div>\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
#         "        <Link\n"
#         "          to=\"/\"\n"
#         "          className=\"inline-flex px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
#         "        >\n"
#         "          Go home\n"
#         "        </Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#     )


# def _types() -> dict:
#     return _file("frontend/src/types/index.ts",
#         "// API response wrapper\n"
#         "export interface ApiResponse<T> {\n"
#         "  data: T\n"
#         "  message: string\n"
#         "  success: boolean\n"
#         "}\n"
#         "\n"
#         "// User types\n"
#         "export interface User {\n"
#         "  id: string\n"
#         "  email: string\n"
#         "  name: string\n"
#         "  role: 'admin' | 'user'\n"
#         "  created_at: string\n"
#         "}\n"
#     )


# def _gitignore() -> dict:
#     return _file("frontend/.gitignore",
#         "node_modules/\n"
#         "dist/\n"
#         ".env\n"
#         ".env.local\n"
#         ".env.*.local\n"
#         "*.log\n"
#         ".DS_Store\n"
#         ".vscode/\n"
#     )


# # ==============================================================
# # Main Node
# # ==============================================================

# def frontend_scaffold_node(state: AgentState) -> dict:
#     print("🎨 Generating frontend scaffold...")

#     site_plan = state.get("site_plan", {})
#     requirements = state.get("requirements", {})

#     app_name = site_plan.get("app_name", requirements.get("app_name", "AI Builder"))
#     description = site_plan.get("description", requirements.get("description", "AI Generated Application"))
#     primary = site_plan.get("primary_color", requirements.get("primary_color", "#4f46e5"))
#     secondary = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

#     scaffold: List[Dict[str, str]] = [
#         _package_json(app_name, description),
#         _tsconfig(),
#         _tsconfig_node(),
#         _vite_config(),
#         *_env_files(),
#         _postcss_config(),
#         _tailwind_config(primary, secondary),
#         _index_html(app_name),
#         _main_tsx(),
#         _index_css(),
#         _api_client(),
#         *_hooks(),
#         *_ui_components(),
#         *_layout_components(),
#         _components_index(),
#         _error_boundary(),
#         _not_found_page(),
#         _types(),
#         _gitignore(),
#     ]

#     print(f"✅ Generated {len(scaffold)} scaffold files")
#     print(f"🎯 Components: Button, Card, Input, Badge, Spinner, Alert, Layout, Navbar, Footer")

#     return {
#         "code_files": state.get("code_files", []) + scaffold,
#     }



import json
from backend.state import AgentState
from typing import List, Dict, Any


def _json(obj: object) -> str:
    return json.dumps(obj, indent=2)


def _file(filename: str, content: str) -> dict:
    return {"filename": filename, "content": content}


def _components_index() -> dict:
    return _file("frontend/src/components/index.ts",
        "export { default as Button } from './ui/Button'\n"
        "export { default as Card } from './ui/Card'\n"
        "export { default as Input } from './ui/Input'\n"
        "export { default as Badge } from './ui/Badge'\n"
        "export { default as Spinner } from './ui/Spinner'\n"
        "export { default as Alert } from './ui/Alert'\n"
        "export { default as Modal } from './ui/Modal'\n"
        "export { default as Table } from './ui/Table'\n"
        "export { default as Layout } from './layouts/Layout'\n"
        "export { default as Navbar } from './layouts/Navbar'\n"
        "export { default as Footer } from './layouts/Footer'\n"
        "export { default as Sidebar } from './layouts/Sidebar'\n"
    )


def _package_json(app_name: str, description: str) -> dict:
    return _file("frontend/package.json", _json({
        "name": app_name.lower().replace(" ", "-") or "frontend",
        "private": True,
        "version": "0.1.0",
        "type": "module",
        "description": description,
        "scripts": {
            "dev": "vite",
            "build": "tsc && vite build",
            "preview": "vite preview",
            "typecheck": "tsc --noEmit",
        },
        "dependencies": {
            "react": "^18.3.0",
            "react-dom": "^18.3.0",
            "react-router-dom": "^6.22.0",
            "axios": "^1.6.7",
            "clsx": "^2.1.0",
            "react-hot-toast": "^2.4.1",
        },
        "devDependencies": {
            "@types/react": "^18.3.0",
            "@types/react-dom": "^18.3.0",
            "@vitejs/plugin-react": "^4.2.0",
            "autoprefixer": "^10.4.0",
            "postcss": "^8.4.0",
            "tailwindcss": "^3.4.0",
            "typescript": "^5.4.0",
            "vite": "^5.2.0",
        },
    }))


def _tsconfig() -> dict:
    return _file("frontend/tsconfig.json", _json({
        "compilerOptions": {
            "target": "ES2020",
            "useDefineForClassFields": True,
            "lib": ["ES2020", "DOM", "DOM.Iterable"],
            "module": "ESNext",
            "skipLibCheck": True,
            "moduleResolution": "bundler",
            "allowImportingTsExtensions": True,
            "resolveJsonModule": True,
            "isolatedModules": True,
            "noEmit": True,
            "jsx": "react-jsx",
            "strict": True,
            "noUnusedLocals": True,
            "noUnusedParameters": True,
            "noFallthroughCasesInSwitch": True,
            "baseUrl": ".",
            "paths": {"@/*": ["src/*"]},
        },
        "include": ["src"],
        "references": [{"path": "./tsconfig.node.json"}],
    }))


def _tsconfig_node() -> dict:
    return _file("frontend/tsconfig.node.json", _json({
        "compilerOptions": {
            "composite": True,
            "skipLibCheck": True,
            "module": "ESNext",
            "moduleResolution": "bundler",
            "allowSyntheticDefaultImports": True,
        },
        "include": ["vite.config.ts"],
    }))


def _vite_config() -> dict:
    return _file("frontend/vite.config.ts",
        "import { defineConfig } from 'vite'\n"
        "import react from '@vitejs/plugin-react'\n"
        "import path from 'path'\n"
        "\n"
        "export default defineConfig({\n"
        "  plugins: [react()],\n"
        "  resolve: {\n"
        "    alias: { '@': path.resolve(__dirname, './src') },\n"
        "  },\n"
        "  server: {\n"
        "    port: 5173,\n"
        "    open: true,\n"
        "    proxy: {\n"
        "      '/api': {\n"
        "        target: 'http://localhost:8000',\n"
        "        changeOrigin: true,\n"
        "      },\n"
        "    },\n"
        "  },\n"
        "})\n"
    )


def _env_files() -> list:
    return [
        _file("frontend/.env", "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
        _file("frontend/.env.production", "VITE_API_URL=https://api.yourdomain.com\nVITE_APP_NAME=AI Builder\n"),
        _file("frontend/.env.example", "VITE_API_URL=http://localhost:8000\nVITE_APP_NAME=AI Builder\n"),
    ]


def _postcss_config() -> dict:
    return _file("frontend/postcss.config.js",
        "export default {\n"
        "  plugins: {\n"
        "    tailwindcss: {},\n"
        "    autoprefixer: {},\n"
        "  },\n"
        "}\n"
    )


# Update the tailwind config to include .tsx files
def _tailwind_config(primary: str = "#4f46e5", secondary: str = "#0ea5e9") -> dict:
    return _file("frontend/tailwind.config.js",
        "/** @type {import('tailwindcss').Config} */\n"
        "export default {\n"
        "  content: [\n"
        "    './index.html',\n"
        "    './src/**/*.{ts,tsx}',\n"
        "  ],\n"
        "  theme: {\n"
        "    extend: {\n"
        "      colors: {\n"
        "        primary: '" + primary + "',\n"
        "        secondary: '" + secondary + "',\n"
        "        surface: '#ffffff',\n"
        "        background: '#f8fafc',\n"
        "        muted: '#64748b',\n"
        "        border: '#e2e8f0',\n"
        "      },\n"
        "      fontFamily: {\n"
        "        sans: ['Inter', 'system-ui', 'sans-serif'],\n"
        "      },\n"
        "      borderRadius: {\n"
        "        xl: '0.75rem',\n"
        "      },\n"
        "    },\n"
        "  },\n"
        "  plugins: [],\n"
        "}\n"
    )


def _index_html(app_name: str) -> dict:
    return _file("frontend/index.html",
        "<!DOCTYPE html>\n"
        '<html lang="en">\n'
        "  <head>\n"
        '    <meta charset="UTF-8" />\n'
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
        '    <meta name="description" content="' + app_name + ' - AI Generated Application" />\n'
        '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
        '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
        '    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />\n'
        "    <title>" + app_name + "</title>\n"
        "  </head>\n"
        '  <body class="bg-background">\n'
        '    <div id="root"></div>\n'
        '    <script type="module" src="/src/main.tsx"></script>\n'
        "  </body>\n"
        "</html>\n"
    )


def _main_tsx() -> dict:
    return _file("frontend/src/main.tsx",
        "import React from 'react'\n"
        "import ReactDOM from 'react-dom/client'\n"
        "import { Toaster } from 'react-hot-toast'\n"
        "import App from './App'\n"
        "import './index.css'\n"
        "\n"
        "ReactDOM.createRoot(document.getElementById('root')!).render(\n"
        "  <React.StrictMode>\n"
        "    <App />\n"
        "    <Toaster position=\"top-right\" />\n"
        "  </React.StrictMode>\n"
        ")\n"
    )


def _index_css() -> dict:
    return _file("frontend/src/index.css",
        "@tailwind base;\n"
        "@tailwind components;\n"
        "@tailwind utilities;\n"
        "\n"
        "@layer base {\n"
        "  * { box-sizing: border-box; }\n"
        "  html { -webkit-font-smoothing: antialiased; }\n"
        "}\n"
        "\n"
        "@layer components {\n"
        "  .container-custom {\n"
        "    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;\n"
        "  }\n"
        "}\n"
    )


def _api_client() -> dict:
    return _file("frontend/src/api/client.ts",
        "import axios from 'axios'\n"
        "\n"
        "const api = axios.create({\n"
        "  baseURL: import.meta.env.VITE_API_URL,\n"
        "  timeout: 15000,\n"
        "  headers: { 'Content-Type': 'application/json' },\n"
        "})\n"
        "\n"
        "api.interceptors.request.use((config) => {\n"
        "  const token = localStorage.getItem('token')\n"
        "  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`\n"
        "  return config\n"
        "})\n"
        "\n"
        "export default api\n"
    )


def _hooks() -> list:
    use_api = """import { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import api from '@/api/client'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useApi<T>(url: string) {
  const [state, setState] = useState<UseApiState<T>>({ data: null, loading: false, error: null })

  const fetch = useCallback(async (params?: object) => {
    setState(s => ({ ...s, loading: true, error: null }))
    try {
      const { data } = await api.get<T>(url, { params })
      setState({ data, loading: false, error: null })
      return data
    } catch (err) {
      const msg = (err as AxiosError<{ detail: string }>).response?.data?.detail ?? 'Something went wrong'
      setState(s => ({ ...s, loading: false, error: msg }))
      toast.error(msg)
    }
  }, [url])

  return { ...state, fetch }
}"""

    use_local_storage = """import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch { return initialValue }
  })

  useEffect(() => {
    try { window.localStorage.setItem(key, JSON.stringify(value)) }
    catch { /* quota exceeded */ }
  }, [key, value])

  return [value, setValue] as const
}"""

    return [
        _file("frontend/src/hooks/useApi.ts", use_api),
        _file("frontend/src/hooks/useLocalStorage.ts", use_local_storage),
    ]


def _ui_components() -> list:
    button = """import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  loading?: boolean
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm',
  outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  ghost: 'text-gray-700 hover:bg-gray-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold',
        'transition-all duration-150 focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && icon}
      {children}
      {icon && iconPosition === 'right' && !loading && icon}
    </button>
  )
}"""

    card = """import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

const paddings = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8' }

export default function Card({ 
  children, 
  padding = 'md', 
  hoverable = false, 
  className, 
  ...props 
}: CardProps) {
  return (
    <div
      className={clsx(
        'bg-surface rounded-2xl border border-border shadow-card',
        paddings[padding],
        hoverable && 'transition-all duration-200 hover:shadow-md hover:scale-[1.01] cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}"""

    input_field = """import { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, className, id, ...props }, ref
) {
  const inputId = id ?? label?.toLowerCase().replace(/\\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={clsx(
          'w-full rounded-xl border bg-white px-4 py-2.5 text-sm outline-none',
          'transition focus:ring-2 focus:ring-primary/40',
          error ? 'border-red-400 focus:ring-red-300' : 'border-border focus:border-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
    </div>
  )
})

export default Input"""

    badge = """import { HTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

const styles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
}

export default function Badge({ children, variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', styles[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}"""

    spinner = """import { clsx } from 'clsx'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <svg
      className={clsx('animate-spin text-primary', sizes[size], className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  )
}"""

    alert = """import { ReactNode } from 'react'
import { clsx } from 'clsx'

type AlertVariant = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  variant: AlertVariant
  title?: string
  message: string
  onClose?: () => void
  icon?: ReactNode
}

const variants: Record<AlertVariant, { bg: string; border: string; text: string }> = {
  success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800' },
  error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800' },
  warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800' },
  info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
}

export default function Alert({ variant, title, message, onClose, icon }: AlertProps) {
  const style = variants[variant]

  return (
    <div className={clsx('rounded-lg border p-4', style.bg, style.border)}>
      <div className="flex items-start">
        <div className={clsx('flex-shrink-0', style.text)}>
          {icon || (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="ml-3 flex-1">
          {title && <h3 className={clsx('text-sm font-medium', style.text)}>{title}</h3>}
          <div className={clsx('text-sm', style.text)}>{message}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={clsx('ml-4 flex-shrink-0', style.text, 'hover:opacity-75')}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}"""

    modal = """import { ReactNode, useEffect } from 'react'
import { clsx } from 'clsx'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
}

export default function Modal({ open, onClose, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={clsx('bg-surface rounded-2xl shadow-modal w-full', sizes[size])}>
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 transition"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}"""

    table = """import { useState } from 'react'
import { clsx } from 'clsx'

interface Column<T> {
  key: keyof T
  header: string
  sortable?: boolean
  render?: (value: T[keyof T], item: T) => React.ReactNode
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  onRowClick?: (item: T) => void
}

export default function Table<T>({ data, columns, onRowClick }: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const sortedData = [...data]
  if (sortKey) {
    sortedData.sort((a, b) => {
      const aVal = a[sortKey]
      const bVal = b[sortKey]
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-border">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                onClick={() => col.sortable && handleSort(col.key)}
                className={clsx(
                  'px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider',
                  col.sortable && 'cursor-pointer hover:bg-gray-100'
                )}
              >
                <div className="flex items-center gap-2">
                  {col.header}
                  {col.sortable && sortKey === col.key && (
                    <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sortedData.map((item, index) => (
            <tr
              key={index}
              onClick={() => onRowClick?.(item)}
              className={clsx('hover:bg-gray-50', onRowClick && 'cursor-pointer')}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-6 py-4 text-sm text-gray-900">
                  {col.render ? col.render(item[col.key], item) : String(item[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}"""

    return [
        _file("frontend/src/components/ui/Button.tsx", button),
        _file("frontend/src/components/ui/Card.tsx", card),
        _file("frontend/src/components/ui/Input.tsx", input_field),
        _file("frontend/src/components/ui/Badge.tsx", badge),
        _file("frontend/src/components/ui/Spinner.tsx", spinner),
        _file("frontend/src/components/ui/Alert.tsx", alert),
        _file("frontend/src/components/ui/Modal.tsx", modal),
        _file("frontend/src/components/ui/Table.tsx", table),
    ]


def _layout_components() -> list:
    layout = """import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  )
}"""

    navbar = """import { Link, useLocation } from 'react-router-dom'
import Button from '../ui/Button'

interface NavItem {
  path: string
  label: string
}

interface NavbarProps {
  items?: NavItem[]
  appName?: string
  ctaText?: string
  primaryColor?: string
}

export default function Navbar({ 
  items = [], 
  appName = 'App', 
  ctaText = 'Get Started',
  primaryColor = '#4f46e5'
}: NavbarProps) {
  const location = useLocation()
  
  const defaultItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
  ]
  
  const navItems = items.length ? items : defaultItems
  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold" style={{ color: primaryColor }}>
            {appName}
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.path) ? primaryColor : '#4b5563',
                  background: isActive(item.path) ? `${primaryColor}10` : 'transparent'
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <Button variant="primary" size="sm">
            {ctaText}
          </Button>
        </div>
      </div>
    </header>
  )
}"""

    footer = """import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border mt-auto">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/features" className="text-sm text-muted hover:text-primary">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-muted hover:text-primary">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted hover:text-primary">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted hover:text-primary">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-sm text-muted">Subscribe for updates</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border px-3 py-2 text-sm"
              />
              <Button variant="primary" size="sm">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          © {new Date().getFullYear()} AI Builder. All rights reserved.
        </div>
      </div>
    </footer>
  )
}"""

    sidebar = """import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'

interface SidebarItem {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: string | number
}

interface SidebarProps {
  items: SidebarItem[]
  title?: string
}

export default function Sidebar({ items, title = 'Menu' }: SidebarProps) {
  const location = useLocation()

  return (
    <div className="h-full py-6">
      {title && <h3 className="px-4 mb-4 text-sm font-semibold text-muted uppercase">{title}</h3>}
      <nav className="space-y-1">
        {items.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              className={clsx(
                'flex items-center justify-between px-4 py-2 mx-2 rounded-lg transition',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <div className="flex items-center gap-3">
                {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-200 text-gray-700">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}"""

    return [
        _file("frontend/src/components/layouts/Layout.tsx", layout),
        _file("frontend/src/components/layouts/Navbar.tsx", navbar),
        _file("frontend/src/components/layouts/Footer.tsx", footer),
        _file("frontend/src/components/layouts/Sidebar.tsx", sidebar),
    ]


def _error_boundary() -> dict:
    return _file("frontend/src/components/ErrorBoundary.tsx",
        "import { Component, ErrorInfo, ReactNode } from 'react'\n"
        "\n"
        "interface Props { children: ReactNode }\n"
        "interface State { hasError: boolean; error: Error | null }\n"
        "\n"
        "export default class ErrorBoundary extends Component<Props, State> {\n"
        "  constructor(props: Props) {\n"
        "    super(props)\n"
        "    this.state = { hasError: false, error: null }\n"
        "  }\n"
        "\n"
        "  static getDerivedStateFromError(error: Error): State {\n"
        "    return { hasError: true, error }\n"
        "  }\n"
        "\n"
        "  componentDidCatch(error: Error, errorInfo: ErrorInfo) {\n"
        "    console.error('ErrorBoundary caught an error:', error, errorInfo)\n"
        "  }\n"
        "\n"
        "  render() {\n"
        "    if (this.state.hasError) {\n"
        "      return (\n"
        "        <div className=\"min-h-screen flex items-center justify-center p-6\">\n"
        "          <div className=\"text-center\">\n"
        "            <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Something went wrong</h1>\n"
        "            <p className=\"text-muted mb-4\">{this.state.error?.message}</p>\n"
        "            <button\n"
        "              onClick={() => window.location.reload()}\n"
        "              className=\"px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90\"\n"
        "            >\n"
        "              Reload Page\n"
        "            </button>\n"
        "          </div>\n"
        "        </div>\n"
        "      )\n"
        "    }\n"
        "\n"
        "    return this.props.children\n"
        "  }\n"
        "}\n"
    )


def _not_found_page() -> dict:
    return _file("frontend/src/pages/NotFound.tsx",
        "import { Link } from 'react-router-dom'\n"
        "\n"
        "export default function NotFound() {\n"
        "  return (\n"
        "    <div className=\"min-h-screen flex items-center justify-center text-center p-6\">\n"
        "      <div>\n"
        "        <div className=\"text-6xl font-black text-gray-100 mb-4\">404</div>\n"
        "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
        "        <p className=\"text-muted mb-6\">The page you're looking for doesn't exist.</p>\n"
        "        <Link\n"
        "          to=\"/\"\n"
        "          className=\"inline-flex px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition\"\n"
        "        >\n"
        "          Go home\n"
        "        </Link>\n"
        "      </div>\n"
        "    </div>\n"
        "  )\n"
        "}\n"
    )


def _types() -> dict:
    return _file("frontend/src/types/index.ts",
        "export interface ApiResponse<T> {\n"
        "  data: T\n"
        "  message: string\n"
        "  success: boolean\n"
        "}\n"
        "\n"
        "export interface User {\n"
        "  id: string\n"
        "  email: string\n"
        "  name: string\n"
        "  role: 'admin' | 'user'\n"
        "  created_at: string\n"
        "}\n"
    )


def _gitignore() -> dict:
    return _file("frontend/.gitignore",
        "node_modules/\n"
        "dist/\n"
        ".env\n"
        ".env.local\n"
        ".env.*.local\n"
        "*.log\n"
        ".DS_Store\n"
        ".vscode/\n"
    )


def frontend_scaffold_node(state: AgentState) -> dict:
    print("Generating frontend scaffold...")

    site_plan = state.get("site_plan", {})
    requirements = state.get("requirements", {})

    app_name = site_plan.get("app_name", requirements.get("app_name", "AI Builder"))
    description = site_plan.get("description", requirements.get("description", "AI Generated Application"))
    primary = site_plan.get("primary_color", requirements.get("primary_color", "#4f46e5"))
    secondary = site_plan.get("secondary_color", requirements.get("secondary_color", "#0ea5e9"))

    scaffold = [
        _package_json(app_name, description),
        _tsconfig(),
        _tsconfig_node(),
        _vite_config(),
        *_env_files(),
        _postcss_config(),
        _tailwind_config(primary, secondary),
        _index_html(app_name),
        _main_tsx(),
        _index_css(),
        _api_client(),
        *_hooks(),
        *_ui_components(),
        *_layout_components(),
        _components_index(),
        _error_boundary(),
        _not_found_page(),
        _types(),
        _gitignore(),
    ]

    print(f"Generated {len(scaffold)} scaffold files")
    print("Components: Button, Card, Input, Badge, Spinner, Alert, Modal, Table, Layout, Navbar, Footer, Sidebar")

    return {
        "code_files": state.get("code_files", []) + scaffold,
    }