# import re

# def frontend_router_node(state):
#     print("🔀 Generating dynamic App.jsx")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined for routing"]
#         }

#     def sanitize_component(name):
#         return re.sub(r'[^a-zA-Z0-9]', '', name)

#     def to_kebab_case(name):
#         name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
#         return name.replace(" ", "-").lower()

#     import_lines = ""
#     route_lines = ""
#     has_home = False

#     for page in pages:
#         component = sanitize_component(page)
#         slug = to_kebab_case(page)

#         if slug == "home":
#             path = "/"
#             has_home = True
#         else:
#             path = f"/{slug}"

#         import_lines += f'import {component} from "./pages/{component}.jsx"\n'

#         # 👇 IMPORTANT: double braces
#         route_lines += f'        <Route path="{path}" element={{<{component} />}} />\n'

#     if not has_home and pages:
#         first_component = sanitize_component(pages[0])
#         route_lines += f'        <Route path="/" element={{<{first_component} />}} />\n'

#     app_content = f"""import {{ BrowserRouter, Routes, Route }} from "react-router-dom"
# {import_lines}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <Routes>
# {route_lines}
#       </Routes>
#     </BrowserRouter>
#   )
# }}
# """

#     return {
#         "code_files": state.get("code_files", []) + [
#             {
#                 "filename": "frontend/src/App.jsx",
#                 "content": app_content
#             }
#         ]
#     }

# import re

# def frontend_router_node(state):
#     print("🔀 Generating dynamic App.jsx with Navbar")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined for routing"]
#         }

#     def sanitize_component(name):
#         return re.sub(r'[^a-zA-Z0-9]', '', name)

#     def to_kebab_case(name):
#         name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
#         return name.replace(" ", "-").lower()

#     import_lines = ""
#     route_lines = ""
#     nav_links = ""
#     has_home = False

#     for page in pages:
#         component = sanitize_component(page)
#         slug = to_kebab_case(page)

#         if slug == "home":
#             path = "/"
#             has_home = True
#         else:
#             path = f"/{slug}"

#         import_lines += f'import {component} from "./pages/{component}.jsx"\n'
#         route_lines += f'          <Route path="{path}" element={{<{component} />}} />\n'
#         nav_links += f'            <Link to="{path}" className="hover:text-blue-600 transition">{page}</Link>\n'

#     if not has_home and pages:
#         first_component = sanitize_component(pages[0])
#         route_lines += f'          <Route path="/" element={{<{first_component} />}} />\n'

#     app_content = f"""import {{ BrowserRouter, Routes, Route, Link }} from "react-router-dom"
# {import_lines}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <div className="min-h-screen bg-gray-50">

#         <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
#           <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
#           <div className="flex gap-6 font-medium text-gray-700">
# {nav_links}
#           </div>
#         </nav>

#         <main className="p-8">
#           <Routes>
# {route_lines}
#           </Routes>
#         </main>

#       </div>
#     </BrowserRouter>
#   )
# }}
# """

#     return {
#         "code_files": state.get("code_files", []) + [
#             {
#                 "filename": "frontend/src/App.jsx",
#                 "content": app_content
#             }
#         ]
#     }

# import re

# def frontend_router_node(state):
#     print("🔀 Generating dynamic App.jsx with CamelCase enforcement")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined for routing"]
#         }

#     def to_pascal_case(name):
#         # Remove special characters
#         name = re.sub(r'[^a-zA-Z0-9 ]', ' ', name)
#         words = name.replace("-", " ").replace("_", " ").split()
#         return "".join(word.capitalize() for word in words)

#     def to_kebab_case(name):
#         name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
#         return name.replace(" ", "-").lower()

#     import_lines = ""
#     route_lines = ""
#     nav_links = ""

#     for raw_page in pages:
#         component = to_pascal_case(raw_page)
#         slug = to_kebab_case(component)

#         path = "/" if slug == "home" else f"/{slug}"

#         import_lines += f'import {component} from "./pages/{component}.jsx"\n'
#         route_lines += f'          <Route path="{path}" element={{<{component} />}} />\n'
#         nav_links += f'            <Link to="{path}" className="hover:text-blue-600 transition">{component}</Link>\n'

#     app_content = f"""import {{ BrowserRouter, Routes, Route, Link }} from "react-router-dom"
# {import_lines}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <div className="min-h-screen bg-gray-50">

#         <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
#           <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
#           <div className="flex gap-6 font-medium text-gray-700">
# {nav_links}
#           </div>
#         </nav>

#         <main className="p-8">
#           <Routes>
# {route_lines}
#           </Routes>
#         </main>

#       </div>
#     </BrowserRouter>
#   )
# }}
# """

#     return {
#         "code_files": state.get("code_files", []) + [
#             {
#                 "filename": "frontend/src/App.jsx",
#                 "content": app_content
#             }
#         ]
#     }


# import re

# def frontend_router_node(state):
#     print("🔀 Generating dynamic App.jsx with Navbar")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {
#             "validation_errors": ["No pages defined for routing"]
#         }

#     def sanitize_component(name):
#         return re.sub(r'[^a-zA-Z0-9]', '', name)

#     def to_kebab_case(name):
#         name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
#         return name.replace(" ", "-").lower()

#     import_lines = ""
#     route_lines = ""
#     nav_links = ""
#     has_home = False

#     for page in pages:
#         component = sanitize_component(page)
#         slug = to_kebab_case(page)

#         if slug == "home":
#             path = "/"
#             has_home = True
#         else:
#             path = f"/{slug}"

#         import_lines += f'import {component} from "./pages/{component}.jsx"\n'
#         route_lines += f'          <Route path="{path}" element={{<{component} />}} />\n'
#         nav_links += f'            <Link to="{path}" className="hover:text-blue-600 transition">{page}</Link>\n'

#     if not has_home and pages:
#         first_component = sanitize_component(pages[0])
#         route_lines += f'          <Route path="/" element={{<{first_component} />}} />\n'

#     app_content = f"""import {{ BrowserRouter, Routes, Route, Link }} from "react-router-dom"
# {import_lines}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <div className="min-h-screen bg-gray-50">

#         <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
#           <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
#           <div className="flex gap-6 font-medium text-gray-700">
# {nav_links}
#           </div>
#         </nav>

#         <main className="p-8">
#           <Routes>
# {route_lines}
#           </Routes>
#         </main>

#       </div>
#     </BrowserRouter>
#   )
# }}
# """

#     return {
#         "code_files": state.get("code_files", []) + [
#             {
#                 "filename": "frontend/src/App.jsx",
#                 "content": app_content
#             }
#         ]
#     }


# import re

# def frontend_router_node(state):
#     print("🔀 Generating App.jsx (Layout Mode)")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {"validation_errors": ["No pages defined for routing"]}

#     def sanitize(name):
#         return re.sub(r'[^a-zA-Z0-9]', '', name)

#     def to_kebab(name):
#         name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
#         return name.lower()

#     import_lines = ""
#     route_lines = ""

#     unique_pages = list(dict.fromkeys(pages))

#     has_home = False

#     for page in unique_pages:
#         component = sanitize(page)
#         slug = to_kebab(page)

#         if slug == "home":
#             path = "/"
#             has_home = True
#         else:
#             path = f"/{slug}"

#         import_lines += f'import {component} from "./pages/{component}.jsx"\n'
#         route_lines += f'            <Route path="{path}" element={{<{component} />}} />\n'

#     if not has_home and unique_pages:
#         first = sanitize(unique_pages[0])
#         route_lines += f'            <Route path="/" element={{<{first} />}} />\n'

#     app_content = f"""import {{ BrowserRouter, Routes, Route }} from "react-router-dom"
# import Layout from "./components/Layout"
# {import_lines}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <Layout>
#         <Routes>
# {route_lines}
#         </Routes>
#       </Layout>
#     </BrowserRouter>
#   )
# }}
# """

#     return {
#         "code_files": state.get("code_files", []) + [
#             {
#                 "filename": "frontend/src/App.jsx",
#                 "content": app_content
#             }
#         ]
#     }


import re

def frontend_router_node(state):
    print("🔀 Generating App.jsx (Dynamic Navbar Mode)")

    pages = state.get("site_plan", {}).get("pages", [])

    if not pages:
        return {"validation_errors": ["No pages defined for routing"]}

    def sanitize(name):
        return re.sub(r'[^a-zA-Z0-9]', '', name)

    def to_kebab(name):
        name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
        return name.lower()

    def pretty_label(name):
        return re.sub(r'([a-z])([A-Z])', r'\1 \2', name)

    import_lines = ""
    route_lines = ""
    nav_links = ""

    unique_pages = list(dict.fromkeys(pages))

    has_home = False

    for page in unique_pages:
        component = sanitize(page)
        slug = to_kebab(page)
        label = pretty_label(page)

        if slug == "home":
            path = "/"
            has_home = True
        else:
            path = f"/{slug}"

        import_lines += f'import {component} from "./pages/{component}.jsx"\n'
        route_lines += f'            <Route path="{path}" element={{<{component} />}} />\n'
        nav_links += f'              <Link to="{path}" className="hover:text-primary transition">{label}</Link>\n'

    if not has_home and unique_pages:
        first = sanitize(unique_pages[0])
        route_lines += f'            <Route path="/" element={{<{first} />}} />\n'

    app_content = f"""import {{ BrowserRouter, Routes, Route, Link }} from "react-router-dom"
import Layout from "./components/Layout"
{import_lines}

export default function App() {{
  return (
    <BrowserRouter>
      <Layout>

        <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AI Builder</h1>
            <div className="flex gap-6 font-medium text-gray-700">
{nav_links}
            </div>
          </div>
        </nav>

        <Routes>
{route_lines}
        </Routes>

      </Layout>
    </BrowserRouter>
  )
}}
"""

    return {
        "code_files": state.get("code_files", []) + [
            {
                "filename": "frontend/src/App.jsx",
                "content": app_content
            }
        ]
    }