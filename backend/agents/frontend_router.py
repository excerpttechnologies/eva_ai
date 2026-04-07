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


# import re

# def frontend_router_node(state):
#     print("🔀 Generating App.jsx (Dynamic Navbar Mode)")

#     pages = state.get("site_plan", {}).get("pages", [])

#     if not pages:
#         return {"validation_errors": ["No pages defined for routing"]}

#     def sanitize(name):
#         return re.sub(r'[^a-zA-Z0-9]', '', name)

#     def to_kebab(name):
#         name = re.sub(r'([a-z])([A-Z])', r'\1-\2', name)
#         return name.lower()

#     def pretty_label(name):
#         return re.sub(r'([a-z])([A-Z])', r'\1 \2', name)

#     import_lines = ""
#     route_lines = ""
#     nav_links = ""

#     unique_pages = list(dict.fromkeys(pages))

#     has_home = False

#     for page in unique_pages:
#         component = sanitize(page)
#         slug = to_kebab(page)
#         label = pretty_label(page)

#         if slug == "home":
#             path = "/"
#             has_home = True
#         else:
#             path = f"/{slug}"

#         import_lines += f'import {component} from "./pages/{component}.jsx"\n'
#         route_lines += f'            <Route path="{path}" element={{<{component} />}} />\n'
#         nav_links += f'              <Link to="{path}" className="hover:text-primary transition">{label}</Link>\n'

#     if not has_home and unique_pages:
#         first = sanitize(unique_pages[0])
#         route_lines += f'            <Route path="/" element={{<{first} />}} />\n'

#     app_content = f"""import {{ BrowserRouter, Routes, Route, Link }} from "react-router-dom"
# import Layout from "./components/Layout"
# {import_lines}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <Layout>

#         <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
#           <div className="container mx-auto px-6 py-4 flex justify-between items-center">
#             <h1 className="text-xl font-bold text-primary">AI Builder</h1>
#             <div className="flex gap-6 font-medium text-gray-700">
# {nav_links}
#             </div>
#           </div>
#         </nav>

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


# """
# frontend_router.py  -  App.tsx generator with animated navbar.

# Improvements over original:
# - Outputs TypeScript (.tsx) consistent with the advanced scaffold
# - Active-link highlighting via NavLink + clsx
# - Mobile hamburger menu (useState toggle, no external dep)
# - Reads app_name, nav_cta, primary_color from site_plan
# - Lazy-loads every page with React.lazy + Suspense (faster TTI)
# - Dedicated <Navbar> and <MobileMenu> sub-components kept in the
#   same file for simplicity — no extra files needed
# - Handles missing Home gracefully
# - Pure string concatenation — no f-strings with JSX, no unicode issues
# """

# from __future__ import annotations

# import logging
# import re

# logger = logging.getLogger(__name__)


# # ==============================================================
# # Helpers
# # ==============================================================

# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _to_kebab(name: str) -> str:
#     # HomeAbout -> home-about, AboutUs -> about-us
#     name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
#     return name.lower()


# def _pretty(name: str) -> str:
#     return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# # ==============================================================
# # Builder
# # ==============================================================

# def _build_app_tsx(
#     pages: list[str],
#     app_name: str,
#     nav_cta: str,
#     primary_color: str,
# ) -> str:
#     unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
#     if not unique:
#         unique = ["Home"]
#     if "Home" not in unique:
#         unique.insert(0, "Home")

#     # --- lazy imports ---
#     lazy_lines = "".join(
#         "const " + p + " = lazy(() => import('./pages/" + p + "'))\n"
#         for p in unique
#     )

#     # --- nav items array ---
#     nav_items = "[\n"
#     for p in unique:
#         slug   = _to_kebab(p)
#         path   = "/" if slug == "home" else "/" + slug
#         label  = _pretty(p)
#         nav_items += "  { path: '" + path + "', label: '" + label + "' },\n"
#     nav_items += "]"

#     # --- routes ---
#     route_lines = ""
#     has_home = False
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else "/" + slug
#         if slug == "home":
#             has_home = True
#         route_lines += (
#             "          <Route path=\"" + path + "\" element={"
#             + "<Suspense fallback={<PageLoader />}><" + p + " /></Suspense>"
#             + "} />\n"
#         )
#     if not has_home:
#         first = unique[0]
#         route_lines += (
#             "          <Route path=\"/\" element={"
#             + "<Suspense fallback={<PageLoader />}><" + first + " /></Suspense>"
#             + "} />\n"
#         )
#     route_lines += "          <Route path=\"*\" element={<NotFound />} />\n"

#     return (
#         "import { lazy, Suspense, useState } from 'react'\n"
#         "import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'\n"
#         "import { clsx } from 'clsx'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         "\n"
#         + lazy_lines
#         + "\n"
#         "// ---------- shared types ----------\n"
#         "interface NavItem { path: string; label: string }\n"
#         "\n"
#         "const NAV_ITEMS: NavItem[] = " + nav_items + "\n"
#         "\n"
#         "const APP_NAME  = '" + app_name.replace("'", "\\'") + "'\n"
#         "const NAV_CTA   = '" + nav_cta.replace("'", "\\'")  + "'\n"
#         "const PRIMARY   = '" + primary_color + "'\n"
#         "\n"
#         "// ---------- page loader ----------\n"
#         "function PageLoader() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-[60vh] flex items-center justify-center\">\n"
#         "      <svg className=\"animate-spin h-8 w-8 text-primary\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "        <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "        <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "      </svg>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "// ---------- navbar ----------\n"
#         "function Navbar() {\n"
#         "  const [open, setOpen] = useState(false)\n"
#         "\n"
#         "  const linkClass = ({ isActive }: { isActive: boolean }) =>\n"
#         "    clsx(\n"
#         "      'text-sm font-medium transition-colors duration-150',\n"
#         "      isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-gray-900',\n"
#         "    )\n"
#         "\n"
#         "  return (\n"
#         "    <header className=\"sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm\">\n"
#         "      <div className=\"container mx-auto px-6 h-16 flex items-center justify-between\">\n"
#         "\n"
#         "        {/* Brand */}\n"
#         "        <NavLink to=\"/\" className=\"text-xl font-extrabold tracking-tight text-gray-900\">\n"
#         "          <span style={{ color: PRIMARY }}>{APP_NAME}</span>\n"
#         "        </NavLink>\n"
#         "\n"
#         "        {/* Desktop links */}\n"
#         "        <nav className=\"hidden md:flex items-center gap-7\">\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <NavLink key={path} to={path} className={linkClass}>{label}</NavLink>\n"
#         "          ))}\n"
#         "        </nav>\n"
#         "\n"
#         "        {/* CTA */}\n"
#         "        <div className=\"hidden md:block\">\n"
#         "          <a\n"
#         "            href=\"#cta\"\n"
#         "            className=\"inline-flex items-center px-5 py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90\"\n"
#         "            style={{ backgroundColor: PRIMARY }}\n"
#         "          >\n"
#         "            {NAV_CTA}\n"
#         "          </a>\n"
#         "        </div>\n"
#         "\n"
#         "        {/* Mobile toggle */}\n"
#         "        <button\n"
#         "          className=\"md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition\"\n"
#         "          onClick={() => setOpen(o => !o)}\n"
#         "          aria-label=\"Toggle menu\"\n"
#         "        >\n"
#         "          {open ? (\n"
#         "            <svg className=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n"
#         "              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M6 18L18 6M6 6l12 12\" />\n"
#         "            </svg>\n"
#         "          ) : (\n"
#         "            <svg className=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n"
#         "              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M4 6h16M4 12h16M4 18h16\" />\n"
#         "            </svg>\n"
#         "          )}\n"
#         "        </button>\n"
#         "      </div>\n"
#         "\n"
#         "      {/* Mobile menu */}\n"
#         "      {open && (\n"
#         "        <div className=\"md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 animate-fade-in\">\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <NavLink\n"
#         "              key={path} to={path}\n"
#         "              className={linkClass}\n"
#         "              onClick={() => setOpen(false)}\n"
#         "            >\n"
#         "              {label}\n"
#         "            </NavLink>\n"
#         "          ))}\n"
#         "          <a\n"
#         "            href=\"#cta\"\n"
#         "            className=\"mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white\"\n"
#         "            style={{ backgroundColor: PRIMARY }}\n"
#         "            onClick={() => setOpen(false)}\n"
#         "          >\n"
#         "            {NAV_CTA}\n"
#         "          </a>\n"
#         "        </div>\n"
#         "      )}\n"
#         "    </header>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "// ---------- root ----------\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Navbar />\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + route_lines
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_router_node(state: dict) -> dict:
#     logger.info("Generating App.tsx (router + navbar)")

#     site_plan: dict = state.get("site_plan", {})
#     pages     = site_plan.get("pages", [])

#     if not pages:
#         logger.error("No pages in site_plan")
#         return {"validation_errors": ["No pages defined for routing"]}

#     app_name      = site_plan.get("app_name",        "AI Builder")
#     nav_cta       = site_plan.get("nav_cta",          state.get("requirements", {}).get("nav_cta", "Get Started"))
#     primary_color = site_plan.get("primary_color",   "#4f46e5")

#     content = _build_app_tsx(pages, app_name, nav_cta, primary_color)

#     logger.info("Router generated: %d pages", len(pages))

#     return {
#         "code_files": state.get("code_files", []) + [
#             {"filename": "frontend/src/App.tsx", "content": content}
#         ]
#     }



# """
# frontend_router.py  -  App.tsx generator with animated navbar.

# - Outputs TypeScript (.tsx) consistent with the advanced scaffold
# - Active-link highlighting via NavLink + clsx
# - Mobile hamburger menu (useState toggle, no external dep)
# - Reads app_name, nav_cta, primary_color from site_plan
# - Lazy-loads every page with React.lazy + Suspense (faster TTI)
# - Dedicated <Navbar> sub-component in same file
# - Handles missing Home gracefully
# - Pure string concatenation — no f-strings with JSX
# - No LLM calls needed — pure Python template
# """

# from __future__ import annotations

# import logging
# import re

# logger = logging.getLogger(__name__)


# # ==============================================================
# # Helpers
# # ==============================================================

# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _to_kebab(name: str) -> str:
#     name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
#     return name.lower()


# def _pretty(name: str) -> str:
#     return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# # ==============================================================
# # Builder
# # ==============================================================

# def _build_app_tsx(
#     pages: list,
#     app_name: str,
#     nav_cta: str,
#     primary_color: str,
# ) -> str:
#     unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
#     if not unique:
#         unique = ["Home"]
#     if "Home" not in unique:
#         unique.insert(0, "Home")

#     # --- lazy imports ---
#     lazy_lines = "".join(
#         "const " + p + " = lazy(() => import('./pages/" + p + "'))\n"
#         for p in unique
#     )

#     # --- nav items array ---
#     nav_items = "[\n"
#     for p in unique:
#         slug  = _to_kebab(p)
#         path  = "/" if slug == "home" else "/" + slug
#         label = _pretty(p)
#         nav_items += "  { path: '" + path + "', label: '" + label + "' },\n"
#     nav_items += "]"

#     # --- routes ---
#     route_lines = ""
#     has_home = False
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else "/" + slug
#         if slug == "home":
#             has_home = True
#         route_lines += (
#             "          <Route path=\"" + path + "\" element={"
#             + "<Suspense fallback={<PageLoader />}><" + p + " /></Suspense>"
#             + "} />\n"
#         )
#     if not has_home:
#         first = unique[0]
#         route_lines += (
#             "          <Route path=\"/\" element={"
#             + "<Suspense fallback={<PageLoader />}><" + first + " /></Suspense>"
#             + "} />\n"
#         )
#     route_lines += "          <Route path=\"*\" element={<NotFound />} />\n"

#     return (
#         "import { lazy, Suspense, useState } from 'react'\n"
#         "import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'\n"
#         "import { clsx } from 'clsx'\n"
#         "import ErrorBoundary from './components/ErrorBoundary'\n"
#         "import Layout from './components/Layout'\n"
#         "import NotFound from './pages/NotFound'\n"
#         "\n"
#         + lazy_lines
#         + "\n"
#         "// ---------- shared types ----------\n"
#         "interface NavItem { path: string; label: string }\n"
#         "\n"
#         "const NAV_ITEMS: NavItem[] = " + nav_items + "\n"
#         "\n"
#         "const APP_NAME = '" + app_name.replace("'", "\\'") + "'\n"
#         "const NAV_CTA  = '" + nav_cta.replace("'", "\\'") + "'\n"
#         "const PRIMARY  = '" + primary_color + "'\n"
#         "\n"
#         "// ---------- page loader ----------\n"
#         "function PageLoader() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-[60vh] flex items-center justify-center\">\n"
#         "      <svg className=\"animate-spin h-8 w-8 text-primary\" fill=\"none\" viewBox=\"0 0 24 24\">\n"
#         "        <circle className=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" strokeWidth=\"4\" />\n"
#         "        <path className=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8v8H4z\" />\n"
#         "      </svg>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "// ---------- navbar ----------\n"
#         "function Navbar() {\n"
#         "  const [open, setOpen] = useState(false)\n"
#         "\n"
#         "  const linkClass = ({ isActive }: { isActive: boolean }) =>\n"
#         "    clsx(\n"
#         "      'text-sm font-medium transition-colors duration-150',\n"
#         "      isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-gray-900',\n"
#         "    )\n"
#         "\n"
#         "  return (\n"
#         "    <header className=\"sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm\">\n"
#         "      <div className=\"container mx-auto px-6 h-16 flex items-center justify-between\">\n"
#         "\n"
#         "        {/* Brand */}\n"
#         "        <NavLink to=\"/\" className=\"text-xl font-extrabold tracking-tight text-gray-900\">\n"
#         "          <span style={{ color: PRIMARY }}>{APP_NAME}</span>\n"
#         "        </NavLink>\n"
#         "\n"
#         "        {/* Desktop links */}\n"
#         "        <nav className=\"hidden md:flex items-center gap-7\">\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <NavLink key={path} to={path} className={linkClass}>{label}</NavLink>\n"
#         "          ))}\n"
#         "        </nav>\n"
#         "\n"
#         "        {/* CTA */}\n"
#         "        <div className=\"hidden md:block\">\n"
#         "          <a\n"
#         "            href=\"#cta\"\n"
#         "            className=\"inline-flex items-center px-5 py-2 rounded-xl text-sm font-semibold text-white transition hover:opacity-90\"\n"
#         "            style={{ backgroundColor: PRIMARY }}\n"
#         "          >\n"
#         "            {NAV_CTA}\n"
#         "          </a>\n"
#         "        </div>\n"
#         "\n"
#         "        {/* Mobile toggle */}\n"
#         "        <button\n"
#         "          className=\"md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition\"\n"
#         "          onClick={() => setOpen(o => !o)}\n"
#         "          aria-label=\"Toggle menu\"\n"
#         "        >\n"
#         "          {open ? (\n"
#         "            <svg className=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n"
#         "              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M6 18L18 6M6 6l12 12\" />\n"
#         "            </svg>\n"
#         "          ) : (\n"
#         "            <svg className=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n"
#         "              <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M4 6h16M4 12h16M4 18h16\" />\n"
#         "            </svg>\n"
#         "          )}\n"
#         "        </button>\n"
#         "      </div>\n"
#         "\n"
#         "      {/* Mobile menu */}\n"
#         "      {open && (\n"
#         "        <div className=\"md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 animate-fade-in\">\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <NavLink\n"
#         "              key={path} to={path}\n"
#         "              className={linkClass}\n"
#         "              onClick={() => setOpen(false)}\n"
#         "            >\n"
#         "              {label}\n"
#         "            </NavLink>\n"
#         "          ))}\n"
#         "          <a\n"
#         "            href=\"#cta\"\n"
#         "            className=\"mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white\"\n"
#         "            style={{ backgroundColor: PRIMARY }}\n"
#         "            onClick={() => setOpen(false)}\n"
#         "          >\n"
#         "            {NAV_CTA}\n"
#         "          </a>\n"
#         "        </div>\n"
#         "      )}\n"
#         "    </header>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "// ---------- root ----------\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <ErrorBoundary>\n"
#         "      <BrowserRouter>\n"
#         "        <Navbar />\n"
#         "        <Layout>\n"
#         "          <Routes>\n"
#         + route_lines
#         + "          </Routes>\n"
#         + "        </Layout>\n"
#         + "      </BrowserRouter>\n"
#         + "    </ErrorBoundary>\n"
#         + "  )\n"
#         + "}\n"
#     )


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_router_node(state: dict) -> dict:
#     logger.info("Generating App.tsx (router + navbar)")

#     site_plan = state.get("site_plan", {})
#     pages     = site_plan.get("pages", [])

#     if not pages:
#         logger.error("No pages in site_plan")
#         return {"validation_errors": ["No pages defined for routing"]}

#     app_name      = site_plan.get("app_name", "AI Builder")
#     nav_cta       = site_plan.get("nav_cta", state.get("requirements", {}).get("nav_cta", "Get Started"))
#     primary_color = site_plan.get("primary_color", "#4f46e5")

#     content = _build_app_tsx(pages, app_name, nav_cta, primary_color)

#     logger.info("Router generated: %d pages", len(pages))

#     return {
#         "code_files": state.get("code_files", []) + [
#             {"filename": "frontend/src/App.tsx", "content": content}
#         ]
#     }


# """
# frontend_router.py  -  App.tsx generator.

# Sandpack-compatible version:
# - NO React.lazy / Suspense  (Sandpack can't resolve dynamic imports)
# - NO clsx import            (not always available in sandbox)
# - Direct static imports of all pages
# - Inline active-link detection via useLocation
# - Sticky responsive navbar
# - No external dependencies beyond react-router-dom
# """

# from __future__ import annotations

# import logging
# import re

# logger = logging.getLogger(__name__)


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _to_kebab(name: str) -> str:
#     name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
#     return name.lower()


# def _pretty(name: str) -> str:
#     # Insert space before capitals: "ShoppingCart" -> "Shopping Cart"
#     return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# def _build_app_tsx(pages: list, app_name: str, nav_cta: str, primary_color: str) -> str:
#     unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
#     if not unique:
#         unique = ["Home"]
#     if "Home" not in unique:
#         unique.insert(0, "Home")

#     # Static imports (Sandpack compatible)
#     import_lines = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in unique
#     )

#     # Nav items
#     nav_items_js = "[\n"
#     for p in unique:
#         slug  = _to_kebab(p)
#         path  = "/" if slug == "home" else "/" + slug
#         label = _pretty(p)
#         nav_items_js += "  { path: '" + path + "', label: '" + label + "' },\n"
#     nav_items_js += "]"

#     # Routes
#     route_lines = ""
#     has_home = False
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else "/" + slug
#         if slug == "home":
#             has_home = True
#         route_lines += "          <Route path=\"" + path + "\" element={<" + p + " />} />\n"
#     if not has_home:
#         route_lines += "          <Route path=\"/\" element={<" + unique[0] + " />} />\n"
#     route_lines += "          <Route path=\"*\" element={<NotFound />} />\n"

#     # Safe app name (escape quotes)
#     safe_name = app_name.replace("'", "\\'")
#     safe_cta  = nav_cta.replace("'", "\\'")

#     return (
#         "import { useState } from 'react'\n"
#         "import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'\n"
#         + import_lines +
#         "\n"
#         "function NotFound() {\n"
#         "  return (\n"
#         "    <div className=\"min-h-screen flex items-center justify-center text-center px-6\">\n"
#         "      <div>\n"
#         "        <div className=\"text-8xl font-black text-gray-100 mb-4\">404</div>\n"
#         "        <h1 className=\"text-2xl font-bold text-gray-900 mb-2\">Page not found</h1>\n"
#         "        <Link to=\"/\" className=\"text-indigo-600 font-semibold hover:underline\">Go home</Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "const NAV_ITEMS = " + nav_items_js + "\n"
#         "\n"
#         "function Navbar() {\n"
#         "  const location = useLocation()\n"
#         "  const [open, setOpen] = useState(false)\n"
#         "\n"
#         "  const isActive = (path) => {\n"
#         "    if (path === '/') return location.pathname === '/'\n"
#         "    return location.pathname.startsWith(path)\n"
#         "  }\n"
#         "\n"
#         "  return (\n"
#         "    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>\n"
#         "      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>\n"
#         "        \n"
#         "        {/* Brand */}\n"
#         "        <Link to=\"/\" style={{ fontSize: '1.2rem', fontWeight: 900, textDecoration: 'none', color: '" + primary_color + "', letterSpacing: '-0.02em' }}>\n"
#         "          " + safe_name + "\n"
#         "        </Link>\n"
#         "\n"
#         "        {/* Desktop nav */}\n"
#         "        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className=\"hidden md:flex\">\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <Link\n"
#         "              key={path}\n"
#         "              to={path}\n"
#         "              style={{\n"
#         "                padding: '6px 14px',\n"
#         "                borderRadius: '8px',\n"
#         "                fontSize: '0.875rem',\n"
#         "                fontWeight: isActive(path) ? 700 : 500,\n"
#         "                textDecoration: 'none',\n"
#         "                color: isActive(path) ? '" + primary_color + "' : '#374151',\n"
#         "                background: isActive(path) ? '" + primary_color + "15' : 'transparent',\n"
#         "                transition: 'all 0.15s',\n"
#         "              }}\n"
#         "            >\n"
#         "              {label}\n"
#         "            </Link>\n"
#         "          ))}\n"
#         "        </nav>\n"
#         "\n"
#         "        {/* CTA + mobile toggle */}\n"
#         "        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>\n"
#         "          <a href=\"#cta\" className=\"hidden md:inline-flex\" style={{ padding: '8px 20px', borderRadius: '10px', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none', color: 'white', background: '" + primary_color + "', transition: 'opacity 0.15s' }}>\n"
#         "            " + safe_cta + "\n"
#         "          </a>\n"
#         "          <button className=\"md:hidden\" onClick={() => setOpen(o => !o)}\n"
#         "            style={{ padding: '8px', borderRadius: '8px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '1.2rem' }}>\n"
#         "            {open ? '✕' : '☰'}\n"
#         "          </button>\n"
#         "        </div>\n"
#         "      </div>\n"
#         "\n"
#         "      {/* Mobile menu */}\n"
#         "      {open && (\n"
#         "        <div style={{ borderTop: '1px solid #e5e7eb', background: 'white', padding: '12px 24px 16px' }} className=\"md:hidden\">\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <Link\n"
#         "              key={path}\n"
#         "              to={path}\n"
#         "              onClick={() => setOpen(false)}\n"
#         "              style={{\n"
#         "                display: 'block',\n"
#         "                padding: '10px 12px',\n"
#         "                borderRadius: '8px',\n"
#         "                fontSize: '0.9rem',\n"
#         "                fontWeight: isActive(path) ? 700 : 500,\n"
#         "                textDecoration: 'none',\n"
#         "                color: isActive(path) ? '" + primary_color + "' : '#374151',\n"
#         "                background: isActive(path) ? '" + primary_color + "15' : 'transparent',\n"
#         "                marginBottom: '2px',\n"
#         "              }}\n"
#         "            >\n"
#         "              {label}\n"
#         "            </Link>\n"
#         "          ))}\n"
#         "          <a href=\"#cta\" style={{ display: 'block', marginTop: '8px', padding: '10px 12px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', color: 'white', background: '" + primary_color + "', textAlign: 'center' }}>\n"
#         "            " + safe_cta + "\n"
#         "          </a>\n"
#         "        </div>\n"
#         "      )}\n"
#         "    </header>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <BrowserRouter>\n"
#         "      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>\n"
#         "        <Navbar />\n"
#         "        <main style={{ flex: 1 }}>\n"
#         "          <Routes>\n"
#         + route_lines
#         + "          </Routes>\n"
#         "        </main>\n"
#         "      </div>\n"
#         "    </BrowserRouter>\n"
#         "  )\n"
#         "}\n"
#     )


# def frontend_router_node(state: dict) -> dict:
#     logger.info("Generating App.tsx (router + navbar)")

#     site_plan = state.get("site_plan", {})
#     pages     = site_plan.get("pages", [])

#     if not pages:
#         logger.error("No pages in site_plan")
#         return {"validation_errors": ["No pages defined for routing"]}

#     app_name      = site_plan.get("app_name", "App")
#     nav_cta       = site_plan.get("nav_cta", state.get("requirements", {}).get("nav_cta", "Get Started"))
#     primary_color = site_plan.get("primary_color", "#4f46e5")

#     content = _build_app_tsx(pages, app_name, nav_cta, primary_color)

#     logger.info("Router generated: %d pages", len(pages))

#     return {
#         "code_files": state.get("code_files", []) + [
#             {"filename": "frontend/src/App.tsx", "content": content}
#         ]
#     }



# """
# frontend_router.py  -  App.tsx generator.

# Sandpack-compatible:
# - Static imports (no React.lazy)
# - No clsx dependency
# - Navbar always visible at ALL widths (Sandpack iframe is narrow)
# - useLocation for active link highlighting
# - Mobile hamburger hidden in favor of always-shown compact nav
# """

# from __future__ import annotations

# import logging
# import re

# logger = logging.getLogger(__name__)


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _to_kebab(name: str) -> str:
#     name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
#     return name.lower()


# def _pretty(name: str) -> str:
#     return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# def _build_app_tsx(pages: list, app_name: str, nav_cta: str, primary_color: str) -> str:
#     unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
#     if not unique:
#         unique = ["Home"]
#     if "Home" not in unique:
#         unique.insert(0, "Home")

#     # Static imports
#     import_lines = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in unique
#     )

#     # Nav items JS array
#     nav_items_js = "[\n"
#     for p in unique:
#         slug  = _to_kebab(p)
#         path  = "/" if slug == "home" else "/" + slug
#         label = _pretty(p)
#         nav_items_js += "  { path: '" + path + "', label: '" + label + "' },\n"
#     nav_items_js += "]"

#     # Routes
#     route_lines = ""
#     has_home = False
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else "/" + slug
#         if slug == "home":
#             has_home = True
#         route_lines += "          <Route path=\"" + path + "\" element={<" + p + " />} />\n"
#     if not has_home:
#         route_lines += "          <Route path=\"/\" element={<" + unique[0] + " />} />\n"
#     route_lines += "          <Route path=\"*\" element={<NotFound />} />\n"

#     safe_name = app_name.replace("'", "\\'")
#     safe_cta  = nav_cta.replace("'", "\\'")
#     pc        = primary_color

#     return (
#         "import { useState } from 'react'\n"
#         "import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'\n"
#         + import_lines +
#         "\n"
#         "function NotFound() {\n"
#         "  return (\n"
#         "    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>\n"
#         "      <div>\n"
#         "        <div style={{ fontSize: '6rem', fontWeight: 900, color: '#f3f4f6', lineHeight: 1 }}>404</div>\n"
#         "        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Page not found</h1>\n"
#         "        <Link to=\"/\" style={{ color: '" + pc + "', fontWeight: 600, textDecoration: 'none' }}>Go home</Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "const NAV_ITEMS = " + nav_items_js + "\n"
#         "\n"
#         "function Navbar() {\n"
#         "  const location = useLocation()\n"
#         "  const [mobileOpen, setMobileOpen] = useState(false)\n"
#         "\n"
#         "  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)\n"
#         "\n"
#         "  const linkStyle = (path) => ({\n"
#         "    padding: '5px 10px',\n"
#         "    borderRadius: '6px',\n"
#         "    fontSize: '0.8rem',\n"
#         "    fontWeight: isActive(path) ? 700 : 500,\n"
#         "    textDecoration: 'none',\n"
#         "    color: isActive(path) ? '" + pc + "' : '#4b5563',\n"
#         "    background: isActive(path) ? '" + pc + "18' : 'transparent',\n"
#         "    whiteSpace: 'nowrap',\n"
#         "  })\n"
#         "\n"
#         "  return (\n"
#         "    <header style={{\n"
#         "      position: 'sticky', top: 0, zIndex: 100,\n"
#         "      background: 'rgba(255,255,255,0.97)',\n"
#         "      borderBottom: '1px solid #e5e7eb',\n"
#         "      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',\n"
#         "    }}>\n"
#         "      {/* Main nav row */}\n"
#         "      <div style={{\n"
#         "        maxWidth: '1200px', margin: '0 auto',\n"
#         "        padding: '0 16px', height: '56px',\n"
#         "        display: 'flex', alignItems: 'center', gap: '8px',\n"
#         "      }}>\n"
#         "        {/* Brand */}\n"
#         "        <Link to=\"/\" style={{\n"
#         "          fontSize: '1rem', fontWeight: 900, textDecoration: 'none',\n"
#         "          color: '" + pc + "', letterSpacing: '-0.02em',\n"
#         "          marginRight: '8px', flexShrink: 0,\n"
#         "        }}>" + safe_name + "</Link>\n"
#         "\n"
#         "        {/* Nav links — always visible, wraps on tiny screens */}\n"
#         "        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px', flexWrap: 'wrap', flex: 1 }}>\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <Link key={path} to={path} style={linkStyle(path)}>{label}</Link>\n"
#         "          ))}\n"
#         "        </nav>\n"
#         "\n"
#         "        {/* CTA */}\n"
#         "        <a href=\"#cta\" style={{\n"
#         "          padding: '6px 14px', borderRadius: '8px',\n"
#         "          fontSize: '0.8rem', fontWeight: 700,\n"
#         "          textDecoration: 'none', color: 'white',\n"
#         "          background: '" + pc + "', flexShrink: 0,\n"
#         "          whiteSpace: 'nowrap',\n"
#         "        }}>" + safe_cta + "</a>\n"
#         "      </div>\n"
#         "    </header>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <BrowserRouter>\n"
#         "      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>\n"
#         "        <Navbar />\n"
#         "        <main style={{ flex: 1 }}>\n"
#         "          <Routes>\n"
#         + route_lines
#         + "          </Routes>\n"
#         "        </main>\n"
#         "      </div>\n"
#         "    </BrowserRouter>\n"
#         "  )\n"
#         "}\n"
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

# def frontend_router_node(state: dict) -> dict:
#     logger.info("Generating App.tsx (router + navbar)")

#     site_plan = state.get("site_plan", {})
#     pages     = site_plan.get("pages", [])

#     if not pages:
#         logger.error("No pages in site_plan")
#         return {"validation_errors": ["No pages defined for routing"]}

#     app_name      = site_plan.get("app_name", "App")
#     nav_cta       = site_plan.get("nav_cta", state.get("requirements", {}).get("nav_cta", "Get Started"))
#     primary_color = site_plan.get("primary_color", "#4f46e5")

#     content = _build_app_tsx(pages, app_name, nav_cta, primary_color)

#     logger.info("Router generated: %d pages", len(pages))

#     return {
#     "code_files": merge_files(
#         state.get("code_files", []),
#         [{"filename": "frontend/src/App.tsx", "content": content}]
#     )
# }


# """
# frontend_router.py  -  App.tsx generator.

# Sandpack-compatible:
# - Static imports (no React.lazy)
# - No clsx dependency
# - Navbar always visible at ALL widths (Sandpack iframe is narrow)
# - useLocation for active link highlighting
# - Mobile hamburger hidden in favor of always-shown compact nav
# """

# from __future__ import annotations

# import logging
# import re

# logger = logging.getLogger(__name__)


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _to_kebab(name: str) -> str:
#     name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
#     return name.lower()


# def _pretty(name: str) -> str:
#     return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# def _build_app_tsx(pages: list, app_name: str, nav_cta: str, primary_color: str) -> str:
#     unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
#     if not unique:
#         unique = ["Home"]
#     if "Home" not in unique:
#         unique.insert(0, "Home")

#     # Static imports
#     import_lines = "".join(
#         "import " + p + " from './pages/" + p + "'\n"
#         for p in unique
#     )

#     # Nav items JS array
#     nav_items_js = "[\n"
#     for p in unique:
#         slug  = _to_kebab(p)
#         path  = "/" if slug == "home" else "/" + slug
#         label = _pretty(p)
#         nav_items_js += "  { path: '" + path + "', label: '" + label + "' },\n"
#     nav_items_js += "]"

#     # Routes
#     route_lines = ""
#     has_home = False
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else "/" + slug
#         if slug == "home":
#             has_home = True
#         route_lines += "          <Route path=\"" + path + "\" element={<" + p + " />} />\n"
#     if not has_home:
#         route_lines += "          <Route path=\"/\" element={<" + unique[0] + " />} />\n"
#     route_lines += "          <Route path=\"*\" element={<NotFound />} />\n"

#     safe_name = app_name.replace("'", "\\'")
#     safe_cta  = nav_cta.replace("'", "\\'")
#     pc        = primary_color

#     return (
#         "import { useState } from 'react'\n"
#         "import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'\n"
#         + import_lines +
#         "\n"
#         "function NotFound() {\n"
#         "  return (\n"
#         "    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>\n"
#         "      <div>\n"
#         "        <div style={{ fontSize: '6rem', fontWeight: 900, color: '#f3f4f6', lineHeight: 1 }}>404</div>\n"
#         "        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>Page not found</h1>\n"
#         "        <Link to=\"/\" style={{ color: '" + pc + "', fontWeight: 600, textDecoration: 'none' }}>Go home</Link>\n"
#         "      </div>\n"
#         "    </div>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "const NAV_ITEMS = " + nav_items_js + "\n"
#         "\n"
#         "function Navbar() {\n"
#         "  const location = useLocation()\n"
#         "  const [mobileOpen, setMobileOpen] = useState(false)\n"
#         "\n"
#         "  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)\n"
#         "\n"
#         "  const linkStyle = (path) => ({\n"
#         "    padding: '5px 10px',\n"
#         "    borderRadius: '6px',\n"
#         "    fontSize: '0.8rem',\n"
#         "    fontWeight: isActive(path) ? 700 : 500,\n"
#         "    textDecoration: 'none',\n"
#         "    color: isActive(path) ? '" + pc + "' : '#4b5563',\n"
#         "    background: isActive(path) ? '" + pc + "18' : 'transparent',\n"
#         "    whiteSpace: 'nowrap',\n"
#         "  })\n"
#         "\n"
#         "  return (\n"
#         "    <header style={{\n"
#         "      position: 'sticky', top: 0, zIndex: 100,\n"
#         "      background: 'rgba(255,255,255,0.97)',\n"
#         "      borderBottom: '1px solid #e5e7eb',\n"
#         "      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',\n"
#         "    }}>\n"
#         "      {/* Main nav row */}\n"
#         "      <div style={{\n"
#         "        maxWidth: '1200px', margin: '0 auto',\n"
#         "        padding: '0 16px', height: '56px',\n"
#         "        display: 'flex', alignItems: 'center', gap: '8px',\n"
#         "      }}>\n"
#         "        {/* Brand */}\n"
#         "        <Link to=\"/\" style={{\n"
#         "          fontSize: '1rem', fontWeight: 900, textDecoration: 'none',\n"
#         "          color: '" + pc + "', letterSpacing: '-0.02em',\n"
#         "          marginRight: '8px', flexShrink: 0,\n"
#         "        }}>" + safe_name + "</Link>\n"
#         "\n"
#         "        {/* Nav links — always visible, wraps on tiny screens */}\n"
#         "        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px', flexWrap: 'wrap', flex: 1 }}>\n"
#         "          {NAV_ITEMS.map(({ path, label }) => (\n"
#         "            <Link key={path} to={path} style={linkStyle(path)}>{label}</Link>\n"
#         "          ))}\n"
#         "        </nav>\n"
#         "\n"
#         "        {/* CTA */}\n"
#         "        <a href=\"#cta\" style={{\n"
#         "          padding: '6px 14px', borderRadius: '8px',\n"
#         "          fontSize: '0.8rem', fontWeight: 700,\n"
#         "          textDecoration: 'none', color: 'white',\n"
#         "          background: '" + pc + "', flexShrink: 0,\n"
#         "          whiteSpace: 'nowrap',\n"
#         "        }}>" + safe_cta + "</a>\n"
#         "      </div>\n"
#         "    </header>\n"
#         "  )\n"
#         "}\n"
#         "\n"
#         "export default function App() {\n"
#         "  return (\n"
#         "    <BrowserRouter>\n"
#         "      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>\n"
#         "        <Navbar />\n"
#         "        <main style={{ flex: 1 }}>\n"
#         "          <Routes>\n"
#         + route_lines
#         + "          </Routes>\n"
#         "        </main>\n"
#         "      </div>\n"
#         "    </BrowserRouter>\n"
#         "  )\n"
#         "}\n"
#     )


# def frontend_router_node(state: dict) -> dict:
#     logger.info("Generating App.tsx (router + navbar)")

#     site_plan = state.get("site_plan", {})
#     pages     = site_plan.get("pages", [])

#     if not pages:
#         logger.error("No pages in site_plan")
#         return {"validation_errors": ["No pages defined for routing"]}

#     app_name      = site_plan.get("app_name", "App")
#     nav_cta       = site_plan.get("nav_cta", state.get("requirements", {}).get("nav_cta", "Get Started"))
#     primary_color = site_plan.get("primary_color", "#4f46e5")

#     content = _build_app_tsx(pages, app_name, nav_cta, primary_color)

#     logger.info("Router generated: %d pages", len(pages))

#     return {
#         "code_files": state.get("code_files", []) + [
#             {"filename": "frontend/src/App.tsx", "content": content}
#         ]
#     }

# from __future__ import annotations

# import logging
# import re

# logger = logging.getLogger(__name__)


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _to_kebab(name: str) -> str:
#     name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
#     return name.lower()


# def _pretty(name: str) -> str:
#     return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# def _build_app_tsx(pages: list, app_name: str, nav_cta: str, primary_color: str) -> str:
#     """Build App.tsx with correct TypeScript syntax"""
    
#     # Unique page names
#     unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
#     if not unique:
#         unique = ["Home"]
#     if "Home" not in unique:
#         unique.insert(0, "Home")
    
#     # Lazy imports
#     lazy_imports = "\n".join(
#         f"const {p} = React.lazy(() => import('./pages/{p}'))"
#         for p in unique
#     )
    
#     # Build routes as separate strings
#     route_lines = []
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else f"/{slug}"
#         route_lines.append(f'          <Route path="{path}" element={{<{p} />}} />')
    
#     routes_str = "\n".join(route_lines)
    
#     # Build nav items
#     nav_items = []
#     for p in unique:
#         slug = _to_kebab(p)
#         path = "/" if slug == "home" else f"/{slug}"
#         label = _pretty(p)
#         nav_items.append(f'  {{ path: "{path}", label: "{label}" }}')
    
#     nav_items_js = "[\n" + ",\n".join(nav_items) + "\n]"
    
#     # Build the final content with correct syntax
#     return f"""import React, {{ Suspense }} from 'react'
# import {{ BrowserRouter, Routes, Route, Link, useLocation }} from 'react-router-dom'
# import Layout from './components/layouts/Layout'
# import Spinner from './components/ui/Spinner'

# {lazy_imports}

# function LoadingFallback() {{
#   return (
#     <div className="min-h-screen flex items-center justify-center">
#       <Spinner size="lg" />
#     </div>
#   )
# }}

# const NAV_ITEMS = {nav_items_js}

# function Navbar() {{
#   const location = useLocation()
#   const primaryColor = '{primary_color}'
  
#   const isActive = (path: string): boolean => {{
#     if (path === '/') return location.pathname === '/'
#     return location.pathname.startsWith(path)
#   }}
  
#   return (
#     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
#       <div className="container-custom">
#         <div className="flex items-center justify-between h-16">
#           <Link to="/" className="text-xl font-bold" style={{{{ color: primaryColor }}}}>
#             {app_name}
#           </Link>
          
#           <nav className="hidden md:flex items-center gap-1">
#             {{NAV_ITEMS.map((item: {{ path: string; label: string }}) => (
#               <Link
#                 key={{item.path}}
#                 to={{item.path}}
#                 className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
#                 style={{
#                   color: isActive(item.path) ? primaryColor : '#4b5563',
#                   background: isActive(item.path) ? `${{primaryColor}}10` : 'transparent'
#                 }}
#               >
#                 {{item.label}}
#               </Link>
#             ))}}
#           </nav>
          
#           <Link
#             to="#cta"
#             className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition"
#             style={{{{ backgroundColor: primaryColor }}}}
#           >
#             {nav_cta}
#           </Link>
#         </div>
#       </div>
#     </header>
#   )
# }}

# export default function App() {{
#   return (
#     <BrowserRouter>
#       <div className="min-h-screen flex flex-col">
#         <Navbar />
#         <main className="flex-1">
#           <Suspense fallback={{<LoadingFallback />}}>
#             <Routes>
# {routes_str}
#               <Route path="*" element={{<NotFound />}} />
#             </Routes>
#           </Suspense>
#         </main>
#       </div>
#     </BrowserRouter>
#   )
# }}

# function NotFound() {{
#   return (
#     <div className="min-h-screen flex items-center justify-center text-center p-6">
#       <div>
#         <div className="text-6xl font-black text-gray-100 mb-4">404</div>
#         <h1 className="text-2xl font-bold mb-2">Page not found</h1>
#         <Link to="/" className="text-primary font-semibold hover:underline">
#           Go home
#         </Link>
#       </div>
#     </div>
#   )
# }}
# """


# def frontend_router_node(state: dict) -> dict:
#     """Generate App.tsx with lazy loading and component imports"""
    
#     logger.info("🏗️ Generating App.tsx with lazy loading...")
    
#     site_plan = state.get("site_plan", {})
#     pages = site_plan.get("pages", [])
    
#     if not pages:
#         logger.error("No pages in site_plan")
#         return {"validation_errors": ["No pages defined for routing"]}
    
#     app_name = site_plan.get("app_name", "App")
#     nav_cta = site_plan.get("nav_cta", state.get("requirements", {}).get("nav_cta", "Get Started"))
#     primary_color = site_plan.get("primary_color", "#4f46e5")
    
#     content = _build_app_tsx(pages, app_name, nav_cta, primary_color)
    
#     logger.info(f"✅ Router generated with {len(pages)} pages")
    
#     return {
#         "code_files": state.get("code_files", []) + [
#             {"filename": "frontend/src/App.tsx", "content": content}
#         ]
#     }

from __future__ import annotations

import logging
import re

logger = logging.getLogger(__name__)


def _to_pascal(name: str) -> str:
    name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
    return "".join(w.capitalize() for w in name.split()) or name


def _to_kebab(name: str) -> str:
    name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
    return name.lower()


def _pretty(name: str) -> str:
    return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


def _build_app_tsx(pages: list, app_name: str, nav_cta: str, primary_color: str) -> str:
    unique = list(dict.fromkeys(_to_pascal(p) for p in pages if p.strip()))
    if not unique:
        unique = ["Home"]
    if "Home" not in unique:
        unique.insert(0, "Home")
    
    lazy_imports = "\n".join(
        f"const {p} = React.lazy(() => import('./pages/{p}'))"
        for p in unique
    )
    
    route_lines = []
    for p in unique:
        slug = _to_kebab(p)
        path = "/" if slug == "home" else f"/{slug}"
        route_lines.append(f'          <Route path="{path}" element={{<{p} />}} />')
    
    routes_str = "\n".join(route_lines)
    
    nav_items = []
    for p in unique:
        slug = _to_kebab(p)
        path = "/" if slug == "home" else f"/{slug}"
        label = _pretty(p)
        nav_items.append(f'  {{ path: "{path}", label: "{label}" }}')
    
    nav_items_js = "[\n" + ",\n".join(nav_items) + "\n]"
    
    return f"""import React, {{ Suspense }} from 'react'
import {{ BrowserRouter, Routes, Route, Link, useLocation }} from 'react-router-dom'
import Layout from './components/layouts/Layout'
import Spinner from './components/ui/Spinner'

{lazy_imports}

function LoadingFallback() {{
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  )
}}

const NAV_ITEMS = {nav_items_js}

function Navbar() {{
  const location = useLocation()
  const primaryColor = '{primary_color}'
  
  const isActive = (path: string): boolean => {{
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }}
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold" style={{{{ color: primaryColor }}}}>
            {app_name}
          </Link>
            <nav className="hidden md:flex items-center gap-1">
            {{NAV_ITEMS.map((item: {{ path: string; label: string }}) => (
              <Link
                key={{item.path}}
                to={{item.path}}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{{{ 
                  color: isActive(item.path) ? primaryColor : '#4b5563',
                  background: isActive(item.path) ? `${{primaryColor}}10` : 'transparent'
                }}}}
              >
                {{item.label}}
              </Link>
            ))}}
          </nav>
          
          <Link
            to="#cta"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition"
            style={{{{ backgroundColor: primaryColor }}}}
          >
            {nav_cta}
          </Link>
        </div>
      </div>
    </header>
  )
}}

export default function App() {{
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={{<LoadingFallback />}}>
            <Routes>
{routes_str}
              <Route path="*" element={{<NotFound />}} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}}

function NotFound() {{
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <div className="text-6xl font-black text-gray-100 mb-4">404</div>
        <h1 className="text-2xl font-bold mb-2">Page not found</h1>
        <Link to="/" className="text-primary font-semibold hover:underline">
          Go home
        </Link>
      </div>
    </div>
  )
}}
"""


def frontend_router_node(state: dict) -> dict:
    logger.info("Generating App.tsx...")
    
    site_plan = state.get("site_plan", {})
    pages = site_plan.get("pages", [])
    
    if not pages:
        logger.error("No pages in site_plan")
        return {"validation_errors": ["No pages defined for routing"]}
    
    app_name = site_plan.get("app_name", "App")
    nav_cta = site_plan.get("nav_cta", state.get("requirements", {}).get("nav_cta", "Get Started"))
    primary_color = site_plan.get("primary_color", "#4f46e5")
    
    content = _build_app_tsx(pages, app_name, nav_cta, primary_color)
    
    logger.info(f"Router generated with {len(pages)} pages")
    
    return {
        "code_files": state.get("code_files", []) + [
            {"filename": "frontend/src/App.tsx", "content": content}
        ]
    }