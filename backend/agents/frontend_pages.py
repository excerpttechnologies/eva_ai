# """
# frontend_pages.py  —  V3 Premium Page Generator
# """
# from __future__ import annotations
# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Any, Dict, List

# from backend.llm_client import get_llm
# from backend.state import AgentState

# logger = logging.getLogger(__name__)
# MAX_WORKERS = 3
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")

# _JSX_ATTR_MAP = {
#     r'\bstroke-linecap\b': 'strokeLinecap',
#     r'\bstroke-linejoin\b': 'strokeLinejoin',
#     r'\bstroke-width\b': 'strokeWidth',
#     r'\bstroke-dasharray\b': 'strokeDasharray',
#     r'\bfill-rule\b': 'fillRule',
#     r'\bclip-rule\b': 'clipRule',
#     r'\bclip-path\b': 'clipPath',
#     r'\bstop-color\b': 'stopColor',
#     r'\bstop-opacity\b': 'stopOpacity',
#     r'\bfont-size\b': 'fontSize',
#     r'\bfont-family\b': 'fontFamily',
#     r'\bfont-weight\b': 'fontWeight',
#     r'\btext-anchor\b': 'textAnchor',
#     r'\bdominant-baseline\b': 'dominantBaseline',
#     r'\btransform-origin\b': 'transformOrigin',
#     r'\bclass=\b': 'className=',
#     r'\bfor=\b': 'htmlFor=',
#     r'\btabindex\b': 'tabIndex',
#     r'\breadonly\b': 'readOnly',
#     r'\bmaxlength\b': 'maxLength',
#     r'\bautocomplete\b': 'autoComplete',
#     r'\bautofocus\b': 'autoFocus',
# }

# def _fix_jsx_attrs(code: str) -> str:
#     for pattern, replacement in _JSX_ATTR_MAP.items():
#         code = re.sub(pattern, replacement, code)
#     return code

# def _clean_jsx(jsx: str) -> str:
#     jsx = _fix_jsx_attrs(jsx)
#     jsx = re.sub(r'<!--.*?-->', '', jsx, flags=re.DOTALL)
#     return jsx.strip()

# def _extract_jsx_body(raw: str) -> str:
#     raw = _FENCE_RE.sub('', raw).replace('```', '').strip()
#     raw = re.sub(r'^import\s+.*?;?\s*$', '', raw, flags=re.MULTILINE)
#     match = re.search(r'export\s+default\s+function\s+\w+\s*\([^)]*\)\s*\{', raw)
#     if match:
#         start = match.end()
#         ret_match = re.search(r'\breturn\s*\(', raw[start:])
#         if ret_match:
#             ret_start = start + ret_match.end()
#             depth = 1
#             idx = ret_start
#             while idx < len(raw) and depth > 0:
#                 if raw[idx] == '(':
#                     depth += 1
#                 elif raw[idx] == ')':
#                     depth -= 1
#                 idx += 1
#             body = raw[ret_start:idx-1].strip()
#             if body and len(body) > 50:
#                 return body
#     match = re.search(r'^\s*return\s*\(', raw, re.MULTILINE)
#     if match:
#         start = match.end()
#         raw_after = raw[start:]
#         depth = 1
#         idx = 0
#         while idx < len(raw_after) and depth > 0:
#             if raw_after[idx] == '(':
#                 depth += 1
#             elif raw_after[idx] == ')':
#                 depth -= 1
#             idx += 1
#         body = raw_after[:idx-1].strip()
#         if body and len(body) > 20:
#             return body
#     return raw.strip()

# def _classify(page: str) -> str:
#     n = page.lower().replace(' ', '').replace('-', '').replace('_', '')
#     if any(x in n for x in ('home', 'landing', 'index', 'welcome')): return 'landing'
#     if any(x in n for x in ('dashboard', 'portal', 'panel', 'overview', 'admin')): return 'dashboard'
#     if any(x in n for x in ('analytic', 'report', 'insight', 'metric', 'stat')): return 'analytics'
#     if any(x in n for x in ('pricing', 'plan', 'subscription', 'billing')): return 'pricing'
#     if any(x in n for x in ('contact', 'getintouch', 'reach')): return 'contact'
#     if any(x in n for x in ('about', 'team', 'story', 'mission', 'company')): return 'about'
#     if any(x in n for x in ('feature', 'product', 'solution', 'service')): return 'features'
#     if any(x in n for x in ('blog', 'news', 'article', 'post')): return 'blog'
#     if any(x in n for x in ('faq', 'help', 'question')): return 'faq'
#     if any(x in n for x in ('login', 'signin', 'auth')): return 'auth_login'
#     if any(x in n for x in ('signup', 'register', 'join')): return 'auth_signup'
#     if any(x in n for x in ('menu', 'food', 'dish')): return 'menu'
#     if any(x in n for x in ('reserv', 'booking', 'appointment', 'schedule')): return 'booking'
#     if any(x in n for x in ('gallery', 'portfolio', 'showcase')): return 'gallery'
#     if any(x in n for x in ('setting', 'profile', 'account')): return 'settings'
#     if any(x in n for x in ('shop', 'store', 'cart', 'catalog')): return 'ecommerce'
#     if any(x in n for x in ('doctor', 'medical', 'health', 'patient')): return 'healthcare'
#     if any(x in n for x in ('student', 'teacher', 'grade', 'course')): return 'education'
#     return 'generic'

# def _to_pascal(name: str) -> str:
#     parts = re.split(r'[-_ ]+', name.strip())
#     return ''.join(p.capitalize() for p in parts if p)

# def _get_imports_for_page(page_type: str) -> List[str]:
#     return [
#         "import React, { useState } from 'react'",
#         "import { Link } from 'react-router-dom'",
#         "import Layout from '../components/layouts/Layout'",
#         "import Button from '../components/ui/Button'",
#         "import Card from '../components/ui/Card'",
#         "import Badge from '../components/ui/Badge'",
#         "import Input from '../components/ui/Input'",
#     ]

# DESIGN_SYSTEM = """
# DESIGN SYSTEM RULES:
# - Buttons: px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200
# - Cards: bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow
# - Sections: py-20 px-6
# - Container: max-w-7xl mx-auto
# - Headings: text-4xl font-bold text-gray-900 (H1), text-3xl font-bold (H2), text-xl font-semibold (H3)
# - Body text: text-gray-600 leading-relaxed
# - Badges: inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700
# - Inputs: w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none
# - Gradients: bg-gradient-to-br from-indigo-600 to-purple-700
# - Use emoji icons freely for visual richness
# """

# PAGE_BLUEPRINTS = {
#     "landing": "Hero (dark gradient bg-gradient-to-br from-slate-900 to-indigo-900) with badge pill + bold headline + 2 CTA buttons + social proof. Then: social proof bar of company names, features 3-col grid (emoji icon + title + desc), how-it-works numbered steps, stats 4-col, testimonials 2-col, dark gradient CTA section",
#     "dashboard": "White header with greeting + user avatar. KPI cards row (4 cards with colored left border, icon, value, % change). Main chart area (bars using divs heights). 2-col row: activity table left, quick actions right. Bottom: progress bars section",
#     "pricing": "Center header with toggle. 3 pricing tiers (Starter/Pro/Enterprise) with Pro featured (gradient border + badge). Feature comparison table. FAQ accordion. Trust badges row (no credit card, cancel anytime, support)",
#     "contact": "2-col layout: left has form (name, email, subject, message, submit), right has contact info (address, email, phone, hours) with icons",
#     "about": "Hero with gradient bg-indigo-50 + mission statement. Values 3-card grid. Team grid 4-6 people with gradient avatar circles + name/title. Company stats. Timeline milestones",
#     "features": "Hero section. Alternating feature rows (image placeholder left/right). Integration grid 12 logos. Advanced features 2-col. CTA section",
#     "auth_login": "Split screen: left dark gradient with logo + testimonial, right white with email + password + remember me + Sign In button + Google SSO + signup link",
#     "auth_signup": "Split screen: left dark gradient, right white with first+last name row + email + password + strength indicator bars + terms checkbox + Create Account + Google SSO",
#     "analytics": "Date controls row. KPI summary 4 cards. Large bar chart (div heights). Two smaller charts row. Data table with status badges. Insights panel",
#     "ecommerce": "Hero banner. Filter bar (pills + sort). Product grid 6 cards (gradient placeholder + name + price + rating + Add to Cart). Pagination",
#     "healthcare": "Professional teal gradient hero with trust badges. Services 6-card grid. Doctor profile cards. 3-step booking process. Patient testimonials. Emergency CTA red section",
#     "education": "Inspiring gradient hero with student stats. Course cards grid (category badge + title + instructor + rating + price). Learning path steps. Instructor profiles. CTA",
#     "generic": "Gradient hero banner with page title. Main content with info cards. Action area. CTA section at bottom",
# }

# def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
#     blueprint = PAGE_BLUEPRINTS.get(page_type, PAGE_BLUEPRINTS["generic"])
#     return f"""You are a senior React engineer building a PREMIUM, production-quality UI. Generate complete, rich JSX.

# APP: {ctx['app_name']} | INDUSTRY: {ctx['industry']} | PAGE: {page_name} | TONE: {ctx.get('tone','professional')}
# USER REQUEST: {ctx['user_prompt']}

# {DESIGN_SYSTEM}

# PAGE BLUEPRINT: {blueprint}

# CRITICAL RULES:
# 1. Output ONLY raw JSX — NO imports, NO exports, NO function wrapper, NO return statement
# 2. Start directly with a <div> or <section>
# 3. className="..." only (never class=)
# 4. ALL SVG attrs camelCase: strokeLinecap, strokeWidth, fillRule, clipRule, strokeLinejoin
# 5. Content 100% specific to "{ctx['app_name']}" in {ctx['industry']} — NO Lorem ipsum
# 6. Generate 120+ lines of JSX with all sections from the blueprint
# 7. Use realistic mock data and meaningful copy
# 8. Include emoji icons freely for visual richness
# 9. Use Tailwind classes only — no inline styles except for dynamic height values like style={{{{height:'75%'}}}}
# 10. Balance ALL tags properly

# AVAILABLE IMPORTS (already imported):
# - <Button className="..."> — for action buttons
# - <Card className="..."> — for content cards
# - <Badge className="..."> — for labels/tags
# - <Input label="..." placeholder="..." type="..." /> — for form fields
# - <Link to="/path"> — for navigation

# Generate the COMPLETE {page_name} page JSX now, with all blueprint sections:"""

# def _get_premium_fallback(page_name: str, page_type: str, ctx: Dict[str, Any]) -> str:
#     app = ctx.get('app_name', 'App')
#     industry = ctx.get('industry', 'Technology')

#     if page_type == 'landing':
#         return f'''<div className="min-h-screen bg-white">
#   <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden py-28 px-6">
#     <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_#6366f1,_transparent_60%)]" />
#     <div className="relative max-w-5xl mx-auto text-center">
#       <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8">
#         🚀 Introducing {app} for {industry}
#       </span>
#       <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 leading-none">
#         The Modern Platform<br/>
#         <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">for {industry}</span>
#       </h1>
#       <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
#         {app} helps {industry.lower()} teams automate workflows, gain real-time insights, and scale operations 10x faster.
#       </p>
#       <div className="flex flex-wrap justify-center gap-4 mb-12">
#         <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg hover:scale-105">
#           Start Free Trial
#         </button>
#         <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-200">
#           See Demo →
#         </button>
#       </div>
#       <div className="flex items-center justify-center gap-3 text-sm text-white/50">
#         <div className="flex -space-x-2">
#           {"{"}['bg-indigo-400','bg-purple-400','bg-pink-400','bg-blue-400','bg-teal-400'].map((c,i) => (
#             <div key={{i}} className={{`w-8 h-8 rounded-full border-2 border-white/30 ${{c}}`}} />
#           )){"}"}
#         </div>
#         <span>Trusted by <strong className="text-white">10,000+</strong> teams worldwide</span>
#       </div>
#     </div>
#   </section>
#   <section className="bg-gray-50 border-y border-gray-100 py-12 px-6">
#     <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
#     <div className="flex flex-wrap justify-center gap-8 md:gap-16">
#       {"{"}['Acme Corp','TechFlow','DataSphere','CloudBase','Innovate Inc'].map(n => (
#         <span key={{n}} className="text-xl font-bold text-gray-300">{"{"}n{"}"}</span>
#       )){"}"}
#     </div>
#   </section>
#   <section className="py-24 px-6">
#     <div className="max-w-7xl mx-auto">
#       <div className="text-center mb-16">
#         <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">Features</span>
#         <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything your team needs</h2>
#         <p className="text-lg text-gray-500 max-w-2xl mx-auto">Built for {industry.lower()} professionals who demand excellence.</p>
#       </div>
#       <div className="grid md:grid-cols-3 gap-8">
#         {"{"}[
#           {{icon:'⚡',title:'Lightning Fast',desc:'Process thousands of operations instantly with our optimized engine.',color:'from-yellow-50 to-orange-50 border-orange-100'}},
#           {{icon:'🔒',title:'Enterprise Security',desc:'SOC 2 Type II certified. End-to-end encryption. Your data stays safe.',color:'from-blue-50 to-indigo-50 border-indigo-100'}},
#           {{icon:'📊',title:'Real-time Analytics',desc:'Make data-driven decisions with live dashboards and AI insights.',color:'from-green-50 to-emerald-50 border-emerald-100'}},
#           {{icon:'🤝',title:'Team Collaboration',desc:'Invite unlimited members. Collaborate in real-time with smart permissions.',color:'from-purple-50 to-pink-50 border-pink-100'}},
#           {{icon:'🔌',title:'200+ Integrations',desc:'Connect Slack, GitHub, Salesforce and 200+ other tools seamlessly.',color:'from-teal-50 to-cyan-50 border-cyan-100'}},
#           {{icon:'🚀',title:'Auto-scaling',desc:'Grow without limits. Infrastructure scales automatically with your needs.',color:'from-red-50 to-rose-50 border-rose-100'}},
#         ].map(f => (
#           <div key={{f.title}} className={{`bg-gradient-to-br ${{f.color}} border rounded-2xl p-8 hover:shadow-md transition-shadow`}}>
#             <span className="text-4xl mb-4 block">{"{"}f.icon{"}"}</span>
#             <h3 className="text-xl font-semibold text-gray-900 mb-2">{"{"}f.title{"}"}</h3>
#             <p className="text-gray-600 leading-relaxed">{"{"}f.desc{"}"}</p>
#           </div>
#         )){"}"}
#       </div>
#     </div>
#   </section>
#   <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
#     <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center text-white">
#       {"{"}[{{v:'10K+',l:'Active Users'}},{{v:'99.9%',l:'Uptime SLA'}},{{v:'200+',l:'Integrations'}},{{v:'24/7',l:'Support'}}].map(s => (
#         <div key={{s.l}}>
#           <div className="text-5xl font-black mb-2">{"{"}s.v{"}"}</div>
#           <div className="text-indigo-200">{"{"}s.l{"}"}</div>
#         </div>
#       )){"}"}
#     </div>
#   </section>
#   <section className="py-24 px-6">
#     <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white">
#       <h2 className="text-4xl font-bold mb-4">Ready to transform your {industry.lower()}?</h2>
#       <p className="text-indigo-200 text-lg mb-8">Join thousands already using {app}. Free 14-day trial, no credit card required.</p>
#       <div className="flex flex-wrap justify-center gap-4">
#         <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-colors">Start Free Trial</button>
#         <button className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors">Schedule Demo</button>
#       </div>
#       <p className="text-indigo-300 text-sm mt-6">✓ Free 14-day trial  ✓ No credit card  ✓ Cancel anytime</p>
#     </div>
#   </section>
# </div>'''

#     if page_type == 'dashboard':
#         return f'''<div className="min-h-screen bg-gray-50">
#   <div className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
#     <div>
#       <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
#       <p className="text-sm text-gray-500">Welcome back! Here's your {app} overview.</p>
#     </div>
#     <div className="flex items-center gap-3">
#       <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">🔔</button>
#       <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">JD</div>
#     </div>
#   </div>
#   <div className="max-w-7xl mx-auto px-6 py-8">
#     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
#       {"{"}[
#         {{label:'Total Revenue',value:'$47,382',change:'+12.5%',up:true,icon:'💰',color:'border-l-emerald-500'}},
#         {{label:'Active Users',value:'2,847',change:'+8.2%',up:true,icon:'👥',color:'border-l-blue-500'}},
#         {{label:'Conversions',value:'18.4%',change:'+3.1%',up:true,icon:'📈',color:'border-l-purple-500'}},
#         {{label:'Avg. Session',value:'4m 32s',change:'+0.8%',up:true,icon:'⏱️',color:'border-l-orange-500'}},
#       ].map(kpi => (
#         <div key={{kpi.label}} className={{`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${{kpi.color}}`}}>
#           <div className="flex justify-between items-start mb-3">
#             <span className="text-2xl">{"{"}kpi.icon{"}"}</span>
#             <span className={{`text-xs font-semibold px-2 py-1 rounded-full ${{kpi.up?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}}`}}>{"{"}kpi.change{"}"}</span>
#           </div>
#           <div className="text-2xl font-bold text-gray-900">{"{"}kpi.value{"}"}</div>
#           <div className="text-sm text-gray-500 mt-1">{"{"}kpi.label{"}"}</div>
#         </div>
#       )){"}"}
#     </div>
#     <div className="grid md:grid-cols-3 gap-6 mb-6">
#       <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
#         <div className="flex justify-between items-center mb-6">
#           <div><h3 className="font-semibold text-gray-900">Revenue Overview</h3><p className="text-sm text-gray-500">2024 Monthly Performance</p></div>
#           <div className="flex gap-2">
#             {"{"}['7D','30D','90D','1Y'].map(p => (
#               <button key={{p}} className={{`px-3 py-1 text-xs rounded-lg font-medium ${{p==='30D'?'bg-indigo-600 text-white':'bg-gray-100 text-gray-600'}}`}}>{"{"}p{"}"}</button>
#             )){"}"}
#           </div>
#         </div>
#         <div className="flex items-end justify-between gap-2 h-40">
#           {"{"}[40,65,45,80,55,90,70,85,60,95,75,100].map((h,i) => (
#             <div key={{i}} className="flex-1 flex flex-col items-center gap-1">
#               <div className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400 opacity-80 hover:opacity-100 transition-opacity" style={{{{height:`${{h}}%`}}}} />
#               <span className="text-xs text-gray-400">{"{"}['J','F','M','A','M','J','J','A','S','O','N','D'][i]{"}"}</span>
#             </div>
#           )){"}"}
#         </div>
#       </div>
#       <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
#         <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
#         <div className="space-y-4">
#           {"{"}[
#             {{name:'Sarah K.',action:'Completed onboarding',time:'2m ago'}},
#             {{name:'Mike R.',action:'Upgraded to Pro',time:'18m ago'}},
#             {{name:'Alex T.',action:'Submitted report',time:'1h ago'}},
#             {{name:'Lisa M.',action:'New integration added',time:'3h ago'}},
#           ].map(a => (
#             <div key={{a.name}} className="flex items-center gap-3">
#               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{"{"}a.name[0]{"}"}</div>
#               <div className="flex-1 min-w-0">
#                 <p className="text-sm font-medium text-gray-900">{"{"}a.name{"}"}</p>
#                 <p className="text-xs text-gray-500 truncate">{"{"}a.action{"}"}</p>
#               </div>
#               <span className="text-xs text-gray-400">{"{"}a.time{"}"}</span>
#             </div>
#           )){"}"}
#         </div>
#       </div>
#     </div>
#     <div className="grid md:grid-cols-2 gap-6">
#       <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
#         <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics</h3>
#         <div className="space-y-4">
#           {"{"}[{{label:'User Engagement',value:87}},{{label:'Goal Completion',value:72}},{{label:'Customer Satisfaction',value:94}}].map(m => (
#             <div key={{m.label}}>
#               <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{"{"}m.label{"}"}</span><span className="font-medium">{"{"}m.value{"}"}%</span></div>
#               <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{{{width:`${{m.value}}%`}}}} /></div>
#             </div>
#           )){"}"}
#         </div>
#       </div>
#       <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
#         <h3 className="font-semibold mb-2">🎯 Monthly Goal</h3>
#         <p className="text-indigo-200 text-sm mb-4">You're 78% of the way to your target</p>
#         <div className="text-4xl font-black mb-2">78%</div>
#         <div className="w-full bg-white/20 rounded-full h-3 mb-3"><div className="bg-white h-3 rounded-full" style={{{{width:'78%'}}}} /></div>
#         <p className="text-indigo-200 text-xs">$3,200 more to reach $15,000 goal</p>
#       </div>
#     </div>
#   </div>
# </div>'''

#     if page_type in ('auth_login', 'auth_signup'):
#         action = 'Sign In' if page_type == 'auth_login' else 'Create Account'
#         alt_text = "Don't have an account?" if page_type == 'auth_login' else 'Already have an account?'
#         alt_link = '/signup' if page_type == 'auth_login' else '/login'
#         alt_action = 'Sign up free' if page_type == 'auth_login' else 'Sign in'
#         return f'''<div className="min-h-screen flex">
#   <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-12 flex-col justify-between">
#     <div>
#       <div className="flex items-center gap-3 mb-12">
#         <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center font-black text-lg">{"{"}('{app}')[0]{"}"}</div>
#         <span className="text-xl font-bold">{app}</span>
#       </div>
#       <h2 className="text-4xl font-black mb-4 leading-tight">The smarter way to manage {industry.lower()}</h2>
#       <p className="text-indigo-200 text-lg mb-10">Join thousands who trust {app} to power their work.</p>
#       <div className="space-y-3">
#         {"{"}['✓ 14-day free trial, no credit card','✓ Set up in under 5 minutes','✓ Enterprise-grade security'].map(p => (
#           <div key={{p}} className="text-indigo-100">{"{"}p{"}"}</div>
#         )){"}"}
#       </div>
#     </div>
#     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
#       <p className="text-indigo-100 italic mb-3">"Since switching to {app}, our team productivity increased 40%."</p>
#       <div className="flex items-center gap-3">
#         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500" />
#         <div><p className="font-semibold text-sm">Sarah Johnson</p><p className="text-indigo-300 text-xs">Director of Operations, TechCorp</p></div>
#       </div>
#     </div>
#   </div>
#   <div className="flex-1 flex items-center justify-center p-6 bg-white">
#     <div className="w-full max-w-md">
#       <h1 className="text-3xl font-bold text-gray-900 mb-2">{'Welcome back' if page_type == 'auth_login' else 'Create your account'}</h1>
#       <p className="text-gray-500 mb-8">{'Sign in to your ' + app + ' account' if page_type == 'auth_login' else 'Start your 14-day free trial'}</p>
#       <div className="space-y-4">
#         {'<div><label className="block text-sm font-medium text-gray-700 mb-2">Email address</label><input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div>' if page_type == 'auth_login' else '<div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-2">First name</label><input placeholder="John" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Last name</label><input placeholder="Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Email address</label><input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div>'}
#         <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">{action} →</button>
#         <div className="relative flex items-center gap-4"><div className="flex-1 border-t border-gray-200" /><span className="text-xs text-gray-400">OR</span><div className="flex-1 border-t border-gray-200" /></div>
#         <button className="w-full py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl flex items-center justify-center gap-3 transition-colors">
#           <span className="font-bold text-blue-500">G</span> Continue with Google
#         </button>
#       </div>
#       <p className="text-center text-sm text-gray-500 mt-8">{alt_text} <Link to="{alt_link}" className="text-indigo-600 font-medium">{alt_action}</Link></p>
#     </div>
#   </div>
# </div>'''

#     if page_type == 'pricing':
#         return f'''<div className="min-h-screen bg-gray-50 py-20 px-6">
#   <div className="max-w-6xl mx-auto">
#     <div className="text-center mb-16">
#       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">Pricing</span>
#       <h1 className="text-5xl font-black text-gray-900 mb-4">Simple, transparent pricing</h1>
#       <p className="text-xl text-gray-500 max-w-2xl mx-auto">Choose the plan that works for your {industry.lower()} team. Upgrade or downgrade anytime.</p>
#       <div className="flex items-center justify-center gap-3 mt-8">
#         <span className="text-sm text-gray-600">Monthly</span>
#         <div className="w-14 h-7 bg-indigo-600 rounded-full flex items-center cursor-pointer px-1">
#           <div className="w-5 h-5 bg-white rounded-full ml-auto shadow-sm" />
#         </div>
#         <span className="text-sm font-semibold text-indigo-600">Annual <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Save 20%</span></span>
#       </div>
#     </div>
#     <div className="grid md:grid-cols-3 gap-8 mb-20">
#       <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
#         <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
#         <p className="text-gray-500 text-sm mb-6">Perfect for individuals and small teams</p>
#         <div className="mb-8"><span className="text-5xl font-black text-gray-900">$19</span><span className="text-gray-500 ml-1">/month</span></div>
#         <ul className="space-y-3 mb-8">
#           {"{"}['Up to 3 users','5 GB storage','Basic analytics','Email support','API access'].map(f => (
#             <li key={{f}} className="flex items-center gap-3 text-sm text-gray-600"><span className="text-green-500 font-bold">✓</span>{"{"}f{"}"}</li>
#           )){"}"}
#         </ul>
#         <button className="w-full py-3 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 font-semibold rounded-xl transition-colors">Get started free</button>
#       </div>
#       <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-500 relative">
#         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">MOST POPULAR</div>
#         <h3 className="text-xl font-bold text-gray-900 mb-1">Pro</h3>
#         <p className="text-gray-500 text-sm mb-6">For growing {industry.lower()} teams</p>
#         <div className="mb-8"><span className="text-5xl font-black text-gray-900">$49</span><span className="text-gray-500 ml-1">/month</span></div>
#         <ul className="space-y-3 mb-8">
#           {"{"}['Up to 25 users','50 GB storage','Advanced analytics','Priority support','Custom integrations','Team dashboards','API & webhooks'].map(f => (
#             <li key={{f}} className="flex items-center gap-3 text-sm text-gray-600"><span className="text-indigo-500 font-bold">✓</span>{"{"}f{"}"}</li>
#           )){"}"}
#         </ul>
#         <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">Start 14-day trial</button>
#       </div>
#       <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
#         <h3 className="text-xl font-bold mb-1">Enterprise</h3>
#         <p className="text-slate-400 text-sm mb-6">For large organizations</p>
#         <div className="mb-8"><span className="text-5xl font-black">Custom</span></div>
#         <ul className="space-y-3 mb-8">
#           {"{"}['Unlimited users','Unlimited storage','Custom analytics','24/7 dedicated support','SSO & advanced security','Custom SLA','Dedicated success manager'].map(f => (
#             <li key={{f}} className="flex items-center gap-3 text-sm text-slate-300"><span className="text-purple-400 font-bold">✓</span>{"{"}f{"}"}</li>
#           )){"}"}
#         </ul>
#         <button className="w-full py-3 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">Contact sales →</button>
#       </div>
#     </div>
#     <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
#       {"{"}['✓ No credit card required','✓ Cancel anytime','✓ 99.9% uptime SLA','✓ SOC 2 Type II certified'].map(b => (
#         <span key={{b}} className="font-medium">{"{"}b{"}"}</span>
#       )){"}"}
#     </div>
#   </div>
# </div>'''

#     # Generic premium fallback
#     return f'''<div className="min-h-screen bg-gray-50">
#   <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 px-6">
#     <div className="max-w-4xl mx-auto">
#       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-4">{app}</span>
#       <h1 className="text-4xl font-bold mb-4">{page_name}</h1>
#       <p className="text-indigo-200 text-lg">Manage your {industry.lower()} operations with {app}</p>
#     </div>
#   </div>
#   <div className="max-w-7xl mx-auto px-6 py-12">
#     <div className="grid md:grid-cols-3 gap-6 mb-8">
#       {"{"}[{{icon:'📊',title:'Overview',value:'1,284'}},{{icon:'✅',title:'Completed',value:'892'}},{{icon:'🚀',title:'In Progress',value:'234'}}].map(s => (
#         <div key={{s.title}} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
#           <span className="text-3xl mb-3 block">{"{"}s.icon{"}"}</span>
#           <div className="text-2xl font-bold text-gray-900">{"{"}s.value{"}"}</div>
#           <div className="text-sm text-gray-500">{"{"}s.title{"}"}</div>
#         </div>
#       )){"}"}
#     </div>
#     <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
#       <div className="flex justify-between items-center mb-6">
#         <h2 className="text-xl font-semibold text-gray-900">{page_name} Management</h2>
#         <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors">+ Add New</button>
#       </div>
#       <div className="space-y-3">
#         {"{"}[...Array(4)].map((_,i) => (
#           <div key={{i}} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
#             <div className={{`w-10 h-10 rounded-full bg-gradient-to-br ${{['from-indigo-400 to-purple-500','from-emerald-400 to-teal-500','from-orange-400 to-red-500','from-pink-400 to-rose-500'][i]}}`}} />
#             <div className="flex-1">
#               <div className="font-medium text-gray-900">Item {"{"}i+1{"}"}</div>
#               <div className="text-sm text-gray-500">Last updated 2 hours ago</div>
#             </div>
#             <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">Active</span>
#           </div>
#         )){"}"}
#       </div>
#     </div>
#   </div>
# </div>'''

# def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
#     page_name = _to_pascal(page)
#     page_type = _classify(page)
#     logger.info(f"  Generating {page_name} ({page_type})...")
#     try:
#         prompt = _build_prompt(page_type, page_name, ctx)
#         response = llm.invoke(prompt)
#         raw = response.content if hasattr(response, "content") else str(response)
#         raw = _FENCE_RE.sub('', raw).replace('```', '').strip()
#         jsx_body = _extract_jsx_body(raw)
#         jsx_body = _clean_jsx(jsx_body)
#         if not jsx_body or len(jsx_body) < 100:
#             logger.warning(f"  {page_name}: Insufficient LLM output, using premium template")
#             jsx_body = _get_premium_fallback(page_name, page_type, ctx)
#         imports = _get_imports_for_page(page_type)
#         imports_str = '\n'.join(imports)
#         content = f"""{imports_str}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx_body}
#     </Layout>
#   )
# }}
# """
#         if "import Layout" not in content:
#             raise ValueError("Layout import missing")
#         return {"filename": f"frontend/src/pages/{page_name}.tsx", "content": content}
#     except Exception as e:
#         logger.error(f"  {page_name}: {e}")
#         return _build_fallback_page(page_name, page_type, ctx)

# def _build_fallback_page(page_name: str, page_type: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
#     imports = _get_imports_for_page(page_type)
#     imports_str = '\n'.join(imports)
#     jsx_body = _get_premium_fallback(page_name, page_type, ctx)
#     content = f"""{imports_str}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx_body}
#     </Layout>
#   )
# }}
# """
#     return {"filename": f"frontend/src/pages/{page_name}.tsx", "content": content}

# def frontend_pages_node(state: Dict[str, Any]) -> Dict[str, Any]:
#     site_plan = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages = site_plan.get("pages", [])
#     if not pages:
#         logger.warning("No pages to generate")
#         return {"code_files": []}
#     ctx = {
#         "user_prompt": state.get("user_prompt", ""),
#         "industry": requirements.get("industry", "Technology"),
#         "app_name": site_plan.get("app_name") or requirements.get("app_name", "App"),
#         "tone": site_plan.get("tone") or requirements.get("tone", "professional"),
#         "primary": site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5"),
#         "secondary": site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
#     }
#     try:
#         from backend.llm_client import get_llm
#         llm = get_llm(temperature=0.3, max_tokens=4000)
#     except Exception as e:
#         logger.warning(f"LLM init failed: {e}, using premium templates")
#         generated = []
#         for page in pages:
#             page_name = _to_pascal(page)
#             page_type = _classify(page)
#             generated.append(_build_fallback_page(page_name, page_type, ctx))
#         return {"code_files": generated}
#     logger.info(f"V3: Generating {len(pages)} premium pages...")
#     generated = []
#     workers = min(MAX_WORKERS, len(pages))
#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {pool.submit(_generate_page, page, ctx, llm): page for page in pages}
#         for future in as_completed(futures):
#             page = futures[future]
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info(f"  ✓ {result['filename']}")
#             except Exception as e:
#                 logger.error(f"  ✗ {page}: {e}")
#                 page_name = _to_pascal(page)
#                 page_type = _classify(page)
#                 generated.append(_build_fallback_page(page_name, page_type, ctx))
#     generated.sort(key=lambda x: x['filename'])
#     logger.info(f"✓ V3 generated {len(generated)} premium pages")
#     return {"code_files": generated}


# new code

"""
frontend_pages.py  —  V3 Premium Page Generator
"""
from __future__ import annotations
import logging
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Any, Dict, List

from backend.llm_client import get_llm
from backend.state import AgentState

logger = logging.getLogger(__name__)
MAX_WORKERS = 3
_FENCE_RE = re.compile(r"```[a-zA-Z]*")

_JSX_ATTR_MAP = {
    r'\bstroke-linecap\b': 'strokeLinecap',
    r'\bstroke-linejoin\b': 'strokeLinejoin',
    r'\bstroke-width\b': 'strokeWidth',
    r'\bstroke-dasharray\b': 'strokeDasharray',
    r'\bfill-rule\b': 'fillRule',
    r'\bclip-rule\b': 'clipRule',
    r'\bclip-path\b': 'clipPath',
    r'\bstop-color\b': 'stopColor',
    r'\bstop-opacity\b': 'stopOpacity',
    r'\bfont-size\b': 'fontSize',
    r'\bfont-family\b': 'fontFamily',
    r'\bfont-weight\b': 'fontWeight',
    r'\btext-anchor\b': 'textAnchor',
    r'\bdominant-baseline\b': 'dominantBaseline',
    r'\btransform-origin\b': 'transformOrigin',
    r'\bclass=\b': 'className=',
    r'\bfor=\b': 'htmlFor=',
    r'\btabindex\b': 'tabIndex',
    r'\breadonly\b': 'readOnly',
    r'\bmaxlength\b': 'maxLength',
    r'\bautocomplete\b': 'autoComplete',
    r'\bautofocus\b': 'autoFocus',
}

def _fix_jsx_attrs(code: str) -> str:
    for pattern, replacement in _JSX_ATTR_MAP.items():
        code = re.sub(pattern, replacement, code)
    return code

def _clean_jsx(jsx: str) -> str:
    jsx = _fix_jsx_attrs(jsx)
    jsx = re.sub(r'<!--.*?-->', '', jsx, flags=re.DOTALL)
    return jsx.strip()

def _extract_jsx_body(raw: str) -> str:
    raw = _FENCE_RE.sub('', raw).replace('```', '').strip()
    raw = re.sub(r'^import\s+.*?;?\s*$', '', raw, flags=re.MULTILINE)
    match = re.search(r'export\s+default\s+function\s+\w+\s*\([^)]*\)\s*\{', raw)
    if match:
        start = match.end()
        ret_match = re.search(r'\breturn\s*\(', raw[start:])
        if ret_match:
            ret_start = start + ret_match.end()
            depth = 1
            idx = ret_start
            while idx < len(raw) and depth > 0:
                if raw[idx] == '(':
                    depth += 1
                elif raw[idx] == ')':
                    depth -= 1
                idx += 1
            body = raw[ret_start:idx-1].strip()
            if body and len(body) > 50:
                return body
    match = re.search(r'^\s*return\s*\(', raw, re.MULTILINE)
    if match:
        start = match.end()
        raw_after = raw[start:]
        depth = 1
        idx = 0
        while idx < len(raw_after) and depth > 0:
            if raw_after[idx] == '(':
                depth += 1
            elif raw_after[idx] == ')':
                depth -= 1
            idx += 1
        body = raw_after[:idx-1].strip()
        if body and len(body) > 20:
            return body
    return raw.strip()

def _classify(page: str) -> str:
    n = page.lower().replace(' ', '').replace('-', '').replace('_', '')
    if any(x in n for x in ('home', 'landing', 'index', 'welcome')): return 'landing'
    if any(x in n for x in ('dashboard', 'portal', 'panel', 'overview', 'admin')): return 'dashboard'
    if any(x in n for x in ('analytic', 'report', 'insight', 'metric', 'stat')): return 'analytics'
    if any(x in n for x in ('pricing', 'plan', 'subscription', 'billing')): return 'pricing'
    if any(x in n for x in ('contact', 'getintouch', 'reach')): return 'contact'
    if any(x in n for x in ('about', 'team', 'story', 'mission', 'company')): return 'about'
    if any(x in n for x in ('feature', 'product', 'solution', 'service')): return 'features'
    if any(x in n for x in ('blog', 'news', 'article', 'post')): return 'blog'
    if any(x in n for x in ('faq', 'help', 'question')): return 'faq'
    if any(x in n for x in ('login', 'signin', 'auth')): return 'auth_login'
    if any(x in n for x in ('signup', 'register', 'join')): return 'auth_signup'
    if any(x in n for x in ('menu', 'food', 'dish')): return 'menu'
    if any(x in n for x in ('reserv', 'booking', 'appointment', 'schedule')): return 'booking'
    if any(x in n for x in ('gallery', 'portfolio', 'showcase')): return 'gallery'
    if any(x in n for x in ('setting', 'profile', 'account')): return 'settings'
    if any(x in n for x in ('shop', 'store', 'cart', 'catalog')): return 'ecommerce'
    if any(x in n for x in ('doctor', 'medical', 'health', 'patient')): return 'healthcare'
    if any(x in n for x in ('student', 'teacher', 'grade', 'course')): return 'education'
    return 'generic'

def _to_pascal(name: str) -> str:
    parts = re.split(r'[-_ ]+', name.strip())
    return ''.join(p.capitalize() for p in parts if p)

def _get_imports_for_page(page_type: str) -> List[str]:
    return [
        "import React, { useState } from 'react'",
        "import { Link } from 'react-router-dom'",
        "import Layout from '../components/layouts/Layout'",
        "import Button from '../components/ui/Button'",
        "import Card from '../components/ui/Card'",
        "import Badge from '../components/ui/Badge'",
        "import Input from '../components/ui/Input'",
    ]

# ---------------------------------------------------------------------------
# Unsplash image helpers
# ---------------------------------------------------------------------------
# Each returns a no-signup CDN URL via Unsplash Source (free, no API key).
# Using fixed photo IDs keeps results deterministic and relevant.

UNSPLASH_IMAGES = {
    "hero_tech":       "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    "hero_team":       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    "hero_office":     "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    "hero_healthcare": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    "hero_education":  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    "hero_food":       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    "hero_ecommerce":  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    "feature_1":       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "feature_2":       "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    "feature_3":       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    "team_1":          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    "team_2":          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    "team_3":          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    "team_4":          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    "product_1":       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    "product_2":       "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    "product_3":       "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
    "blog_1":          "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=600&q=80",
    "blog_2":          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    "blog_3":          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    "dashboard_chart": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    "about_story":     "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
}

def _hero_image_for_industry(industry: str) -> str:
    """Pick a relevant hero image URL based on the industry string."""
    n = industry.lower()
    if any(x in n for x in ('health', 'medical', 'clinic')): return UNSPLASH_IMAGES["hero_healthcare"]
    if any(x in n for x in ('education', 'school', 'learn')): return UNSPLASH_IMAGES["hero_education"]
    if any(x in n for x in ('food', 'restaurant', 'cafe')): return UNSPLASH_IMAGES["hero_food"]
    if any(x in n for x in ('retail', 'fashion', 'shop', 'ecommerce')): return UNSPLASH_IMAGES["hero_ecommerce"]
    if any(x in n for x in ('team', 'hr', 'people')): return UNSPLASH_IMAGES["hero_team"]
    return UNSPLASH_IMAGES["hero_tech"]

DESIGN_SYSTEM = """
DESIGN SYSTEM RULES:
- Buttons: px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200
- Cards: bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow
- Sections: py-20 px-6
- Container: max-w-7xl mx-auto
- Headings: text-4xl font-bold text-gray-900 (H1), text-3xl font-bold (H2), text-xl font-semibold (H3)
- Body text: text-gray-600 leading-relaxed
- Badges: inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700
- Inputs: w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none
- Gradients: bg-gradient-to-br from-indigo-600 to-purple-700
- Use emoji icons freely for visual richness
- Images: use <img> tags with object-cover and rounded corners — NEVER use placeholder background divs for hero/feature images
"""

PAGE_BLUEPRINTS = {
    "landing": "Hero (dark gradient bg-gradient-to-br from-slate-900 to-indigo-900) with a FULL-WIDTH hero image (object-cover, h-[520px]) behind an overlay, badge pill + bold headline + 2 CTA buttons + social proof. Then: social proof bar of company names, features 3-col grid (real <img> thumbnails + title + desc), how-it-works numbered steps with a side image, stats 4-col, testimonials 2-col with avatar photos, dark gradient CTA section. DO NOT include a <footer> tag — the Layout component renders the footer.",
    "dashboard": "White header with greeting + user avatar. KPI cards row (4 cards with colored left border, icon, value, % change). Main chart area (bars using divs heights). 2-col row: activity table left, quick actions right. Bottom: progress bars section. DO NOT include a <footer> tag.",
    "pricing": "Center header with toggle. 3 pricing tiers (Starter/Pro/Enterprise) with Pro featured (gradient border + badge). Feature comparison table. FAQ accordion. Trust badges row (no credit card, cancel anytime, support). DO NOT include a <footer> tag.",
    "contact": "2-col layout: left has form (name, email, subject, message, submit), right has contact info (address, email, phone, hours) with icons and a map placeholder image. DO NOT include a <footer> tag.",
    "about": "Hero with full-width image overlay + mission statement. Values 3-card grid. Team grid 4-6 people with real <img> avatar photos + name/title. Company stats. Timeline milestones. DO NOT include a <footer> tag.",
    "features": "Hero section with a large product screenshot image. Alternating feature rows (real <img> left/right, 400px height, object-cover rounded-2xl). Integration grid 12 logos. Advanced features 2-col. CTA section. DO NOT include a <footer> tag.",
    "auth_login": "Split screen: left dark gradient with logo + testimonial, right white with email + password + remember me + Sign In button + Google SSO + signup link. DO NOT include a <footer> tag.",
    "auth_signup": "Split screen: left dark gradient, right white with first+last name row + email + password + strength indicator bars + terms checkbox + Create Account + Google SSO. DO NOT include a <footer> tag.",
    "analytics": "Date controls row. KPI summary 4 cards. Large bar chart (div heights). Two smaller charts row. Data table with status badges. Insights panel. DO NOT include a <footer> tag.",
    "ecommerce": "Hero banner with a full-width <img>. Filter bar (pills + sort). Product grid 6 cards (real <img> product photo + name + price + rating + Add to Cart). Pagination. DO NOT include a <footer> tag.",
    "healthcare": "Professional teal gradient hero with a background <img> and trust badges. Services 6-card grid. Doctor profile cards with real <img> photos. 3-step booking process. Patient testimonials. Emergency CTA red section. DO NOT include a <footer> tag.",
    "education": "Inspiring gradient hero with a background <img> and student stats. Course cards grid (real <img> cover + category badge + title + instructor + rating + price). Learning path steps. Instructor profiles with photos. CTA. DO NOT include a <footer> tag.",
    "generic": "Gradient hero banner with a background <img> and page title. Main content with info cards (each has a small <img>). Action area. CTA section at bottom. DO NOT include a <footer> tag.",
}

def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
    blueprint = PAGE_BLUEPRINTS.get(page_type, PAGE_BLUEPRINTS["generic"])
    hero_img   = _hero_image_for_industry(ctx.get("industry", ""))
    feat_imgs  = f"{UNSPLASH_IMAGES['feature_1']}, {UNSPLASH_IMAGES['feature_2']}, {UNSPLASH_IMAGES['feature_3']}"
    team_imgs  = f"{UNSPLASH_IMAGES['team_1']}, {UNSPLASH_IMAGES['team_2']}, {UNSPLASH_IMAGES['team_3']}, {UNSPLASH_IMAGES['team_4']}"
    product_imgs = f"{UNSPLASH_IMAGES['product_1']}, {UNSPLASH_IMAGES['product_2']}, {UNSPLASH_IMAGES['product_3']}"
    blog_imgs  = f"{UNSPLASH_IMAGES['blog_1']}, {UNSPLASH_IMAGES['blog_2']}, {UNSPLASH_IMAGES['blog_3']}"

    return f"""You are a senior React engineer building a PREMIUM, production-quality UI. Generate complete, rich JSX.

APP: {ctx['app_name']} | INDUSTRY: {ctx['industry']} | PAGE: {page_name} | TONE: {ctx.get('tone','professional')}
USER REQUEST: {ctx['user_prompt']}

{DESIGN_SYSTEM}

PAGE BLUEPRINT: {blueprint}

REAL IMAGES TO USE (Unsplash CDN — no API key needed):
  Hero / banner : {hero_img}
  Feature imgs  : {feat_imgs}
  Team avatars  : {team_imgs}
  Product photos: {product_imgs}
  Blog covers   : {blog_imgs}

IMAGE RULES:
- Use <img src="..." alt="..." className="w-full h-64 object-cover rounded-2xl" /> for cards
- Use <img src="..." alt="..." className="w-full h-[520px] object-cover absolute inset-0" /> + an overlay div for hero banners
- Never use gradient placeholder divs in place of images — use the Unsplash URLs above
- Vary which image you use per card/section; cycle through the lists above

CRITICAL RULES:
1. Output ONLY raw JSX — NO imports, NO exports, NO function wrapper, NO return statement
2. Start directly with a <div> or <section>
3. className="..." only (never class=)
4. ALL SVG attrs camelCase: strokeLinecap, strokeWidth, fillRule, clipRule, strokeLinejoin
5. Content 100% specific to "{ctx['app_name']}" in {ctx['industry']} — NO Lorem ipsum
6. Generate 120+ lines of JSX with all sections from the blueprint
7. Use realistic mock data and meaningful copy
8. Include emoji icons freely for visual richness
9. Use Tailwind classes only — no inline styles except for dynamic height values like style={{{{height:'75%'}}}}
10. Balance ALL tags properly
11. DO NOT render a <footer> element anywhere — the Layout wrapper already provides one

AVAILABLE IMPORTS (already imported):
- <Button className="..."> — for action buttons
- <Card className="..."> — for content cards
- <Badge className="..."> — for labels/tags
- <Input label="..." placeholder="..." type="..." /> — for form fields
- <Link to="/path"> — for navigation

Generate the COMPLETE {page_name} page JSX now, with all blueprint sections:"""

def _get_premium_fallback(page_name: str, page_type: str, ctx: Dict[str, Any]) -> str:
    app = ctx.get('app_name', 'App')
    industry = ctx.get('industry', 'Technology')
    hero_img = _hero_image_for_industry(industry)

    if page_type == 'landing':
        return f'''<div className="min-h-screen bg-white">
  {{/* ── Hero ── */}}
  <section className="relative overflow-hidden h-[600px] flex items-center">
    <img
      src="{hero_img}"
      alt="{app} hero"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/70 to-purple-900/60" />
    <div className="relative max-w-5xl mx-auto px-6 text-center text-white w-full">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8">
        🚀 Introducing {app} for {industry}
      </span>
      <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 leading-none">
        The Modern Platform<br/>
        <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">for {industry}</span>
      </h1>
      <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
        {app} helps {industry.lower()} teams automate workflows, gain real-time insights, and scale operations 10x faster.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg hover:scale-105">
          Start Free Trial
        </button>
        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-200">
          See Demo →
        </button>
      </div>
      <div className="flex items-center justify-center gap-3 text-sm text-white/50">
        <div className="flex -space-x-2">
          {"{"}['bg-indigo-400','bg-purple-400','bg-pink-400','bg-blue-400','bg-teal-400'].map((c,i) => (
            <div key={{i}} className={{`w-8 h-8 rounded-full border-2 border-white/30 ${{c}}`}} />
          )){"}"}
        </div>
        <span>Trusted by <strong className="text-white">10,000+</strong> teams worldwide</span>
      </div>
    </div>
  </section>

  {{/* ── Social proof bar ── */}}
  <section className="bg-gray-50 border-y border-gray-100 py-12 px-6">
    <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {"{"}['Acme Corp','TechFlow','DataSphere','CloudBase','Innovate Inc'].map(n => (
        <span key={{n}} className="text-xl font-bold text-gray-300">{"{"}n{"}"}</span>
      )){"}"}
    </div>
  </section>

  {{/* ── Features ── */}}
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">Features</span>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything your team needs</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">Built for {industry.lower()} professionals who demand excellence.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {"{"}[
          {{icon:'⚡',title:'Lightning Fast',desc:'Process thousands of operations instantly with our optimized engine.',img:'{UNSPLASH_IMAGES["feature_1"]}'}},
          {{icon:'🔒',title:'Enterprise Security',desc:'SOC 2 Type II certified. End-to-end encryption. Your data stays safe.',img:'{UNSPLASH_IMAGES["feature_2"]}'}},
          {{icon:'📊',title:'Real-time Analytics',desc:'Make data-driven decisions with live dashboards and AI insights.',img:'{UNSPLASH_IMAGES["feature_3"]}'}},
        ].map(f => (
          <div key={{f.title}} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <img src={{f.img}} alt={{f.title}} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-3xl mb-3 block">{"{"}f.icon{"}"}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{"{"}f.title{"}"}</h3>
              <p className="text-gray-600 leading-relaxed">{"{"}f.desc{"}"}</p>
            </div>
          </div>
        )){"}"}
      </div>
    </div>
  </section>

  {{/* ── Stats ── */}}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center text-white">
      {"{"}[{{v:'10K+',l:'Active Users'}},{{v:'99.9%',l:'Uptime SLA'}},{{v:'200+',l:'Integrations'}},{{v:'24/7',l:'Support'}}].map(s => (
        <div key={{s.l}}>
          <div className="text-5xl font-black mb-2">{"{"}s.v{"}"}</div>
          <div className="text-indigo-200">{"{"}s.l{"}"}</div>
        </div>
      )){"}"}
    </div>
  </section>

  {{/* ── Testimonials ── */}}
  <section className="py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What our customers say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {"{"}[
          {{name:'Sarah Johnson',role:'Director of Ops, TechCorp',text:`Since switching to {app}, our team productivity increased 40%. The analytics alone are worth it.`,img:'{UNSPLASH_IMAGES["team_1"]}'}},
          {{name:'Marcus Lee',role:'CTO, DataSphere',text:`{app} cut our workflow time in half. The integrations are seamless and the support team is incredible.`,img:'{UNSPLASH_IMAGES["team_2"]}'}},
        ].map(t => (
          <div key={{t.name}} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-700 italic mb-6">{"{{t.text}}"}</p>
            <div className="flex items-center gap-4">
              <img src={{t.img}} alt={{t.name}} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">{"{"}t.name{"}"}</p>
                <p className="text-sm text-gray-500">{"{"}t.role{"}"}</p>
              </div>
            </div>
          </div>
        )){"}"}
      </div>
    </div>
  </section>

  {{/* ── CTA ── */}}
  <section className="py-24 px-6 bg-gray-50">
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Ready to transform your {industry.lower()}?</h2>
      <p className="text-indigo-200 text-lg mb-8">Join thousands already using {app}. Free 14-day trial, no credit card required.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-colors">Start Free Trial</button>
        <button className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors">Schedule Demo</button>
      </div>
      <p className="text-indigo-300 text-sm mt-6">✓ Free 14-day trial  ✓ No credit card  ✓ Cancel anytime</p>
    </div>
  </section>
</div>'''

    if page_type == 'dashboard':
        return f'''<div className="min-h-screen bg-gray-50">
  <div className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="text-sm text-gray-500">Welcome back! Here's your {app} overview.</p>
    </div>
    <div className="flex items-center gap-3">
      <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">🔔</button>
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">JD</div>
    </div>
  </div>
  <div className="max-w-7xl mx-auto px-6 py-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {"{"}[
        {{label:'Total Revenue',value:'$47,382',change:'+12.5%',up:true,icon:'💰',color:'border-l-emerald-500'}},
        {{label:'Active Users',value:'2,847',change:'+8.2%',up:true,icon:'👥',color:'border-l-blue-500'}},
        {{label:'Conversions',value:'18.4%',change:'+3.1%',up:true,icon:'📈',color:'border-l-purple-500'}},
        {{label:'Avg. Session',value:'4m 32s',change:'+0.8%',up:true,icon:'⏱️',color:'border-l-orange-500'}},
      ].map(kpi => (
        <div key={{kpi.label}} className={{`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${{kpi.color}}`}}>
          <div className="flex justify-between items-start mb-3">
            <span className="text-2xl">{"{"}kpi.icon{"}"}</span>
            <span className={{`text-xs font-semibold px-2 py-1 rounded-full ${{kpi.up?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}}`}}>{"{"}kpi.change{"}"}</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{"{"}kpi.value{"}"}</div>
          <div className="text-sm text-gray-500 mt-1">{"{"}kpi.label{"}"}</div>
        </div>
      )){"}"}
    </div>
    <div className="grid md:grid-cols-3 gap-6 mb-6">
      <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div><h3 className="font-semibold text-gray-900">Revenue Overview</h3><p className="text-sm text-gray-500">2024 Monthly Performance</p></div>
          <div className="flex gap-2">
            {"{"}['7D','30D','90D','1Y'].map(p => (
              <button key={{p}} className={{`px-3 py-1 text-xs rounded-lg font-medium ${{p==='30D'?'bg-indigo-600 text-white':'bg-gray-100 text-gray-600'}}`}}>{"{"}p{"}"}</button>
            )){"}"}
          </div>
        </div>
        <div className="flex items-end justify-between gap-2 h-40">
          {"{"}[40,65,45,80,55,90,70,85,60,95,75,100].map((h,i) => (
            <div key={{i}} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400 opacity-80 hover:opacity-100 transition-opacity" style={{{{height:`${{h}}%`}}}} />
              <span className="text-xs text-gray-400">{"{"}['J','F','M','A','M','J','J','A','S','O','N','D'][i]{"}"}</span>
            </div>
          )){"}"}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {"{"}[
            {{name:'Sarah K.',action:'Completed onboarding',time:'2m ago',img:'{UNSPLASH_IMAGES["team_2"]}'}},
            {{name:'Mike R.',action:'Upgraded to Pro',time:'18m ago',img:'{UNSPLASH_IMAGES["team_1"]}'}},
            {{name:'Alex T.',action:'Submitted report',time:'1h ago',img:'{UNSPLASH_IMAGES["team_3"]}'}},
            {{name:'Lisa M.',action:'New integration added',time:'3h ago',img:'{UNSPLASH_IMAGES["team_4"]}'}},
          ].map(a => (
            <div key={{a.name}} className="flex items-center gap-3">
              <img src={{a.img}} alt={{a.name}} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{"{"}a.name{"}"}</p>
                <p className="text-xs text-gray-500 truncate">{"{"}a.action{"}"}</p>
              </div>
              <span className="text-xs text-gray-400">{"{"}a.time{"}"}</span>
            </div>
          )){"}"}
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Performance Metrics</h3>
        <div className="space-y-4">
          {"{"}[{{label:'User Engagement',value:87}},{{label:'Goal Completion',value:72}},{{label:'Customer Satisfaction',value:94}}].map(m => (
            <div key={{m.label}}>
              <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{"{"}m.label{"}"}</span><span className="font-medium">{"{"}m.value{"}"}%</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{{{width:`${{m.value}}%`}}}} /></div>
            </div>
          )){"}"}
        </div>
      </div>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
        <h3 className="font-semibold mb-2">🎯 Monthly Goal</h3>
        <p className="text-indigo-200 text-sm mb-4">You're 78% of the way to your target</p>
        <div className="text-4xl font-black mb-2">78%</div>
        <div className="w-full bg-white/20 rounded-full h-3 mb-3"><div className="bg-white h-3 rounded-full" style={{{{width:'78%'}}}} /></div>
        <p className="text-indigo-200 text-xs">$3,200 more to reach $15,000 goal</p>
      </div>
    </div>
  </div>
</div>'''

    if page_type in ('auth_login', 'auth_signup'):
        action = 'Sign In' if page_type == 'auth_login' else 'Create Account'
        alt_text = "Don't have an account?" if page_type == 'auth_login' else 'Already have an account?'
        alt_link = '/signup' if page_type == 'auth_login' else '/login'
        alt_action = 'Sign up free' if page_type == 'auth_login' else 'Sign in'
        return f'''<div className="min-h-screen flex">
  <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-12 flex-col justify-between relative overflow-hidden">
    <img src="{hero_img}" alt="background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center font-black text-lg">{"{"}('{app}')[0]{"}"}</div>
        <span className="text-xl font-bold">{app}</span>
      </div>
      <h2 className="text-4xl font-black mb-4 leading-tight">The smarter way to manage {industry.lower()}</h2>
      <p className="text-indigo-200 text-lg mb-10">Join thousands who trust {app} to power their work.</p>
      <div className="space-y-3">
        {"{"}['✓ 14-day free trial, no credit card','✓ Set up in under 5 minutes','✓ Enterprise-grade security'].map(p => (
          <div key={{p}} className="text-indigo-100">{"{"}p{"}"}</div>
        )){"}"}
      </div>
    </div>
    <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <p className="text-indigo-100 italic mb-3">"Since switching to {app}, our team productivity increased 40%."</p>
      <div className="flex items-center gap-3">
        <img src="{UNSPLASH_IMAGES['team_2']}" alt="Sarah Johnson" className="w-10 h-10 rounded-full object-cover" />
        <div><p className="font-semibold text-sm">Sarah Johnson</p><p className="text-indigo-300 text-xs">Director of Operations, TechCorp</p></div>
      </div>
    </div>
  </div>
  <div className="flex-1 flex items-center justify-center p-6 bg-white">
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{'Welcome back' if page_type == 'auth_login' else 'Create your account'}</h1>
      <p className="text-gray-500 mb-8">{'Sign in to your ' + app + ' account' if page_type == 'auth_login' else 'Start your 14-day free trial'}</p>
      <div className="space-y-4">
        {'<div><label className="block text-sm font-medium text-gray-700 mb-2">Email address</label><input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div>' if page_type == 'auth_login' else '<div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-gray-700 mb-2">First name</label><input placeholder="John" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Last name</label><input placeholder="Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Email address</label><input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div><div><label className="block text-sm font-medium text-gray-700 mb-2">Password</label><input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div>'}
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">{action} →</button>
        <div className="relative flex items-center gap-4"><div className="flex-1 border-t border-gray-200" /><span className="text-xs text-gray-400">OR</span><div className="flex-1 border-t border-gray-200" /></div>
        <button className="w-full py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl flex items-center justify-center gap-3 transition-colors">
          <span className="font-bold text-blue-500">G</span> Continue with Google
        </button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">{alt_text} <Link to="{alt_link}" className="text-indigo-600 font-medium">{alt_action}</Link></p>
    </div>
  </div>
</div>'''

    if page_type == 'pricing':
        return f'''<div className="min-h-screen bg-gray-50 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">Pricing</span>
      <h1 className="text-5xl font-black text-gray-900 mb-4">Simple, transparent pricing</h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto">Choose the plan that works for your {industry.lower()} team. Upgrade or downgrade anytime.</p>
      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="text-sm text-gray-600">Monthly</span>
        <div className="w-14 h-7 bg-indigo-600 rounded-full flex items-center cursor-pointer px-1">
          <div className="w-5 h-5 bg-white rounded-full ml-auto shadow-sm" />
        </div>
        <span className="text-sm font-semibold text-indigo-600">Annual <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Save 20%</span></span>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
        <p className="text-gray-500 text-sm mb-6">Perfect for individuals and small teams</p>
        <div className="mb-8"><span className="text-5xl font-black text-gray-900">$19</span><span className="text-gray-500 ml-1">/month</span></div>
        <ul className="space-y-3 mb-8">
          {"{"}['Up to 3 users','5 GB storage','Basic analytics','Email support','API access'].map(f => (
            <li key={{f}} className="flex items-center gap-3 text-sm text-gray-600"><span className="text-green-500 font-bold">✓</span>{"{"}f{"}"}</li>
          )){"}"}
        </ul>
        <button className="w-full py-3 border-2 border-gray-200 hover:border-indigo-300 text-gray-700 font-semibold rounded-xl transition-colors">Get started free</button>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-500 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">MOST POPULAR</div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">Pro</h3>
        <p className="text-gray-500 text-sm mb-6">For growing {industry.lower()} teams</p>
        <div className="mb-8"><span className="text-5xl font-black text-gray-900">$49</span><span className="text-gray-500 ml-1">/month</span></div>
        <ul className="space-y-3 mb-8">
          {"{"}['Up to 25 users','50 GB storage','Advanced analytics','Priority support','Custom integrations','Team dashboards','API & webhooks'].map(f => (
            <li key={{f}} className="flex items-center gap-3 text-sm text-gray-600"><span className="text-indigo-500 font-bold">✓</span>{"{"}f{"}"}</li>
          )){"}"}
        </ul>
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">Start 14-day trial</button>
      </div>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
        <h3 className="text-xl font-bold mb-1">Enterprise</h3>
        <p className="text-slate-400 text-sm mb-6">For large organizations</p>
        <div className="mb-8"><span className="text-5xl font-black">Custom</span></div>
        <ul className="space-y-3 mb-8">
          {"{"}['Unlimited users','Unlimited storage','Custom analytics','24/7 dedicated support','SSO & advanced security','Custom SLA','Dedicated success manager'].map(f => (
            <li key={{f}} className="flex items-center gap-3 text-sm text-slate-300"><span className="text-purple-400 font-bold">✓</span>{"{"}f{"}"}</li>
          )){"}"}
        </ul>
        <button className="w-full py-3 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors">Contact sales →</button>
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
      {"{"}['✓ No credit card required','✓ Cancel anytime','✓ 99.9% uptime SLA','✓ SOC 2 Type II certified'].map(b => (
        <span key={{b}} className="font-medium">{"{"}b{"}"}</span>
      )){"}"}
    </div>
  </div>
</div>'''

    # Generic premium fallback
    return f'''<div className="min-h-screen bg-gray-50">
  <div className="relative overflow-hidden h-64 flex items-center">
    <img src="{hero_img}" alt="{page_name}" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-700/80" />
    <div className="relative max-w-4xl mx-auto px-6 text-white">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-4">{app}</span>
      <h1 className="text-4xl font-bold mb-2">{page_name}</h1>
      <p className="text-indigo-200 text-lg">Manage your {industry.lower()} operations with {app}</p>
    </div>
  </div>
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {"{"}[
        {{icon:'📊',title:'Overview',value:'1,284',img:'{UNSPLASH_IMAGES["feature_1"]}'}},
        {{icon:'✅',title:'Completed',value:'892',img:'{UNSPLASH_IMAGES["feature_2"]}'}},
        {{icon:'🚀',title:'In Progress',value:'234',img:'{UNSPLASH_IMAGES["feature_3"]}'}},
      ].map(s => (
        <div key={{s.title}} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <img src={{s.img}} alt={{s.title}} className="w-full h-36 object-cover" />
          <div className="p-6">
            <span className="text-3xl mb-3 block">{"{"}s.icon{"}"}</span>
            <div className="text-2xl font-bold text-gray-900">{"{"}s.value{"}"}</div>
            <div className="text-sm text-gray-500">{"{"}s.title{"}"}</div>
          </div>
        </div>
      )){"}"}
    </div>
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{page_name} Management</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors">+ Add New</button>
      </div>
      <div className="space-y-3">
        {"{"}[...Array(4)].map((_,i) => (
          <div key={{i}} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
            <img
              src={{['{UNSPLASH_IMAGES["team_1"]}','{UNSPLASH_IMAGES["team_2"]}','{UNSPLASH_IMAGES["team_3"]}','{UNSPLASH_IMAGES["team_4"]}'][i]}}
              alt={{`Item ${{i+1}}`}}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">Item {"{"}i+1{"}"}</div>
              <div className="text-sm text-gray-500">Last updated 2 hours ago</div>
            </div>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">Active</span>
          </div>
        )){"}"}
      </div>
    </div>
  </div>
</div>'''

# ---------------------------------------------------------------------------
# Post-processing: strip any rogue <footer> the LLM might have added
# ---------------------------------------------------------------------------
_FOOTER_RE = re.compile(r'<footer[\s\S]*?</footer>', re.IGNORECASE)

def _strip_footer(jsx: str) -> str:
    """Remove any <footer>…</footer> block from generated JSX.
    The Layout component owns the footer; rendering one inside the page
    body causes it to appear mid-page instead of at the bottom.
    """
    return _FOOTER_RE.sub('', jsx).strip()


def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
    page_name = _to_pascal(page)
    page_type = _classify(page)
    logger.info(f"  Generating {page_name} ({page_type})...")
    try:
        prompt = _build_prompt(page_type, page_name, ctx)
        response = llm.invoke(prompt)
        raw = response.content if hasattr(response, "content") else str(response)
        raw = _FENCE_RE.sub('', raw).replace('```', '').strip()
        jsx_body = _extract_jsx_body(raw)
        jsx_body = _clean_jsx(jsx_body)
        jsx_body = _strip_footer(jsx_body)          # ← footer fix
        if not jsx_body or len(jsx_body) < 100:
            logger.warning(f"  {page_name}: Insufficient LLM output, using premium template")
            jsx_body = _get_premium_fallback(page_name, page_type, ctx)
        imports = _get_imports_for_page(page_type)
        imports_str = '\n'.join(imports)
        content = f"""{imports_str}

export default function {page_name}() {{
  return (
    <Layout>
      {jsx_body}
    </Layout>
  )
}}
"""
        if "import Layout" not in content:
            raise ValueError("Layout import missing")
        return {"filename": f"frontend/src/pages/{page_name}.tsx", "content": content}
    except Exception as e:
        logger.error(f"  {page_name}: {e}")
        return _build_fallback_page(page_name, page_type, ctx)

def _build_fallback_page(page_name: str, page_type: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
    imports = _get_imports_for_page(page_type)
    imports_str = '\n'.join(imports)
    jsx_body = _get_premium_fallback(page_name, page_type, ctx)
    content = f"""{imports_str}

export default function {page_name}() {{
  return (
    <Layout>
      {jsx_body}
    </Layout>
  )
}}
"""
    return {"filename": f"frontend/src/pages/{page_name}.tsx", "content": content}

def frontend_pages_node(state: Dict[str, Any]) -> Dict[str, Any]:
    site_plan = state.get("site_plan", {})
    requirements = state.get("requirements", {})
    pages = site_plan.get("pages", [])
    if not pages:
        logger.warning("No pages to generate")
        return {"code_files": []}
    ctx = {
        "user_prompt": state.get("user_prompt", ""),
        "industry": requirements.get("industry", "Technology"),
        "app_name": site_plan.get("app_name") or requirements.get("app_name", "App"),
        "tone": site_plan.get("tone") or requirements.get("tone", "professional"),
        "primary": site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5"),
        "secondary": site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
    }
    try:
        from backend.llm_client import get_llm
        llm = get_llm(temperature=0.3, max_tokens=4000)
    except Exception as e:
        logger.warning(f"LLM init failed: {e}, using premium templates")
        generated = []
        for page in pages:
            page_name = _to_pascal(page)
            page_type = _classify(page)
            generated.append(_build_fallback_page(page_name, page_type, ctx))
        return {"code_files": generated}
    logger.info(f"V3: Generating {len(pages)} premium pages...")
    generated = []
    workers = min(MAX_WORKERS, len(pages))
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(_generate_page, page, ctx, llm): page for page in pages}
        for future in as_completed(futures):
            page = futures[future]
            try:
                result = future.result()
                generated.append(result)
                logger.info(f"  ✓ {result['filename']}")
            except Exception as e:
                logger.error(f"  ✗ {page}: {e}")
                page_name = _to_pascal(page)
                page_type = _classify(page)
                generated.append(_build_fallback_page(page_name, page_type, ctx))
    generated.sort(key=lambda x: x['filename'])
    logger.info(f"✓ V3 generated {len(generated)} premium pages")
    return {"code_files": generated}