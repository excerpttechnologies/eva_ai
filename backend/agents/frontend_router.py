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

from __future__ import annotations

import logging
import re

logger = logging.getLogger(__name__)


# ==============================================================
# Helpers
# ==============================================================

def _to_pascal(name: str) -> str:
    name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
    return "".join(w.capitalize() for w in name.split()) or name


def _to_kebab(name: str) -> str:
    # HomeAbout -> home-about, AboutUs -> about-us
    name = re.sub(r"([a-z])([A-Z])", r"\1-\2", name)
    return name.lower()


def _pretty(name: str) -> str:
    return re.sub(r"([a-z])([A-Z])", r"\1 \2", name)


# ==============================================================
# Builder
# ==============================================================

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
    auth_pages = {"login", "signup", "register", "signin"}
    for p in unique:
        slug = _to_kebab(p)
        if slug in auth_pages:
            continue
        path = "/" if slug == "home" else f"/{slug}"
        label = _pretty(p)
        nav_items.append(f'  {{ path: "{path}", label: "{label}" }}')
    
    nav_items_js = "[\n" + ",\n".join(nav_items) + "\n]"
    
    return f"""import React, {{ Suspense, useState }} from 'react'
import {{ BrowserRouter, Routes, Route, Link, useLocation }} from 'react-router-dom'
import Spinner from './components/ui/Spinner'

{lazy_imports}

function LoadingFallback() {{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 mb-4">
          <Spinner size="lg" />
        </div>
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  )
}}

const NAV_ITEMS = {nav_items_js}

function Navbar() {{
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const primaryColor = '{primary_color}'
  
  const isActive = (path: string): boolean => {{
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }}
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{{{ backgroundColor: primaryColor }}}}
            >
             
            </div>
            <span className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {app_name}
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {{NAV_ITEMS.map((item: {{ path: string; label: string }}) => (
              <Link
                key={{item.path}}
                to={{item.path}}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                style={{{{ 
                  color: isActive(item.path) ? primaryColor : '#4b5563',
                  background: isActive(item.path) ? `${{primaryColor}}15` : 'transparent'
                }}}}
              >
                {{item.label}}
              </Link>
            ))}}
          </nav>
          
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-150 hover:opacity-90 hover:scale-105 shadow-sm"
              style={{{{ backgroundColor: primaryColor }}}}
            >
              {nav_cta}
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={{() => setMenuOpen(!menuOpen)}}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={{2}}>
                {{menuOpen 
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }}
              </svg>
            </button>
          </div>
        </div>
        
        {{menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {{NAV_ITEMS.map((item: {{ path: string; label: string }}) => (
              <Link
                key={{item.path}}
                to={{item.path}}
                onClick={{() => setMenuOpen(false)}}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {{item.label}}
              </Link>
            ))}}
          </div>
        )}}
      </div>
    </header>
  )
}}

function Footer() {{
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black" style={{{{ backgroundColor: '{primary_color}' }}}}>
                
              </div>
              <span className="text-white font-bold text-sm">{app_name}</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Building the future, one line of code at a time.</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {{new Date().getFullYear()}} {app_name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}}

function NotFound() {{
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <div className="text-[120px] font-black text-gray-100 leading-none mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
          ← Go back home
        </Link>
      </div>
    </div>
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
        <Footer />
      </div>
    </BrowserRouter>
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