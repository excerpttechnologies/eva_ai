


# from __future__ import annotations

# import logging
# import re
# import json
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Callable

# from backend.llm_client import NvidiaLLM, get_fast_llm
# from backend.state import AgentState

# logger = logging.getLogger(__name__)

# MAX_WORKERS  = 3
# MODEL        = "mistralai/mistral-7b-instruct-v0.3"  # via NVIDIA API
# _FENCE_RE    = re.compile(r"```[a-zA-Z]*")
# _JSON_RE     = re.compile(r"\{.*\}", re.DOTALL)
# _ARRAY_RE    = re.compile(r"\[.*\]",  re.DOTALL)


# # ==============================================================
# # Page-type classifier
# # ==============================================================

# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index")):             return "landing"
#     if any(x in n for x in ("dashboard", "portal", "panel", "app")):  return "dashboard"
#     if any(x in n for x in ("analytic", "report", "insight", "metric", "stat")): return "analytics"
#     if any(x in n for x in ("pricing", "plan", "subscription")):      return "pricing"
#     if any(x in n for x in ("contact", "getintouch")):                return "contact"
#     if any(x in n for x in ("about", "team", "story", "mission")):    return "about"
#     if any(x in n for x in ("feature", "product", "solution")):       return "features"
#     if any(x in n for x in ("blog", "news", "article")):              return "blog"
#     if any(x in n for x in ("faq", "help", "support")):               return "faq"
#     if any(x in n for x in ("login", "signin")):                      return "auth_login"
#     if any(x in n for x in ("signup", "register")):                   return "auth_signup"
#     if any(x in n for x in ("menu", "food", "dish")):                 return "menu"
#     if any(x in n for x in ("reserv", "booking", "appointment")):     return "booking"
#     if any(x in n for x in ("gallery", "portfolio")):                 return "gallery"
#     if any(x in n for x in ("setting", "profile", "account")):       return "settings"
#     if any(x in n for x in ("shop", "store", "cart")):               return "ecommerce"
#     return "generic"


# # ==============================================================
# # LLM helpers
# # ==============================================================

# def _ask(llm: NvidiaLLM, prompt: str) -> str:
#     try:
#         r = llm.invoke(prompt)
#         raw = r.content if hasattr(r, "content") else str(r)
#         return _FENCE_RE.sub("", raw).replace("```", "").strip()
#     except Exception as e:
#         logger.warning("LLM call failed: %s", e)
#         return ""


# def _ask_json(llm: NvidiaLLM, prompt: str, fallback: dict | list) -> dict | list:
#     raw = _ask(llm, prompt)
#     for pattern in (_JSON_RE, _ARRAY_RE):
#         m = pattern.search(raw)
#         if m:
#             try:
#                 return json.loads(m.group())
#             except Exception:
#                 pass
#     return fallback


# # ==============================================================
# # Context builder passed to every section generator
# # ==============================================================

# class Ctx:
#     def __init__(self, page: str, page_type: str, user_prompt: str,
#                  industry: str, app_name: str, tone: str,
#                  primary: str, secondary: str, llm: NvidiaLLM):
#         self.page        = page
#         self.page_type   = page_type
#         self.user_prompt = user_prompt
#         self.industry    = industry
#         self.app_name    = app_name
#         self.tone        = tone
#         self.primary     = primary
#         self.secondary   = secondary
#         self.llm         = llm

#     def ask(self, prompt: str) -> str:
#         return _ask(self.llm, prompt)

#     def ask_json(self, prompt: str, fallback) -> dict | list:
#         return _ask_json(self.llm, prompt, fallback)

#     def base(self) -> str:
#         return (
#             "App: " + self.app_name + "\n"
#             "Industry: " + self.industry + "\n"
#             "Request: " + self.user_prompt + "\n"
#             "Tone: " + self.tone + "\n"
#         )


# # ==============================================================
# # Shared Tailwind helpers
# # ==============================================================

# def _gradient(primary: str) -> str:
#     # Map hex to tailwind gradient
#     p = primary.lstrip("#").lower()
#     mapping = {
#         "c2410c": "from-orange-700 to-red-800",
#         "92400e": "from-amber-800 to-orange-900",
#         "4f46e5": "from-indigo-600 to-purple-700",
#         "6366f1": "from-indigo-500 to-violet-600",
#         "0ea5e9": "from-sky-500 to-cyan-600",
#         "10b981": "from-emerald-500 to-teal-600",
#         "8b5cf6": "from-violet-500 to-purple-600",
#         "f97316": "from-orange-500 to-amber-600",
#         "ec4899": "from-pink-500 to-rose-600",
#         "ef4444": "from-red-500 to-rose-600",
#         "64748b": "from-slate-600 to-gray-700",
#     }
#     return mapping.get(p, "from-indigo-600 to-purple-700")


# def _accent(primary: str) -> str:
#     p = primary.lstrip("#").lower()
#     mapping = {
#         "c2410c": "orange-700", "92400e": "amber-800",
#         "4f46e5": "indigo-600", "6366f1": "indigo-500",
#         "0ea5e9": "sky-500",    "10b981": "emerald-500",
#         "8b5cf6": "violet-500", "f97316": "orange-500",
#         "ec4899": "pink-500",   "ef4444": "red-500",
#         "64748b": "slate-600",
#     }
#     return mapping.get(p, "indigo-600")


# # ==============================================================
# # Section generators — each returns a JSX string
# # ==============================================================

# # ---- HERO ----
# def _section_hero(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON only:\n"
#         '{"headline":"bold hero headline max 8 words","subtitle":"one value prop sentence",'
#         '"cta_primary":"button label","cta_secondary":"button label","badge":"short pill label or empty"}',
#         {"headline": ctx.app_name, "subtitle": ctx.user_prompt[:80],
#          "cta_primary": "Get Started", "cta_secondary": "Learn More", "badge": ""}
#     )
#     g   = _gradient(ctx.primary)
#     ac  = _accent(ctx.primary)
#     badge = (
#         '<span className="inline-block mb-5 px-4 py-1 text-xs font-bold uppercase tracking-widest '
#         'bg-white/20 text-white rounded-full border border-white/30">' + str(data.get("badge","")) + '</span>\n          '
#     ) if data.get("badge") else ""
#     return (
#         '      <section className="relative bg-gradient-to-br ' + g + ' text-white py-28 px-6 overflow-hidden">\n'
#         '        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#fff,_transparent)]" />\n'
#         '        <div className="relative container mx-auto text-center max-w-4xl">\n'
#         '          ' + badge +
#         '<h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">'
#         + str(data.get("headline","Welcome")) + '</h1>\n'
#         '          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">'
#         + str(data.get("subtitle","")) + '</p>\n'
#         '          <div className="flex flex-wrap justify-center gap-4">\n'
#         '            <button className="px-8 py-3.5 bg-white text-' + ac + ' font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">'
#         + str(data.get("cta_primary","Get Started")) + '</button>\n'
#         '            <button className="px-8 py-3.5 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition">'
#         + str(data.get("cta_secondary","Learn More")) + '</button>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#     )


# # ---- STATS ----
# def _section_stats(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 4 stats for this product. Format:\n"
#         '[{"value":"10k+","label":"Customers"},{"value":"99.9%","label":"Uptime"},'
#         '{"value":"50ms","label":"Response"},{"value":"24/7","label":"Support"}]',
#         [{"value":"10k+","label":"Customers"},{"value":"99.9%","label":"Uptime"},
#          {"value":"50ms","label":"Response"},{"value":"24/7","label":"Support"}]
#     )
#     if not isinstance(data, list): data = []
#     ac = _accent(ctx.primary)
#     items = "".join(
#         '\n          <div className="text-center">'
#         '\n            <div className="text-4xl font-black text-' + ac + '">' + str(s.get("value","")) + '</div>'
#         '\n            <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">' + str(s.get("label","")) + '</div>'
#         '\n          </div>'
#         for s in data
#     )
#     return (
#         '      <section className="bg-gray-50 border-y border-gray-100 py-12">\n'
#         '        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">'
#         + items + '\n        </div>\n      </section>\n'
#     )


# # ---- FEATURES GRID ----
# def _section_features(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 6 features specific to this product:\n"
#         '[{"icon":"emoji","title":"Feature Name","desc":"one sentence description"}]',
#         [{"icon":"⚡","title":"Fast","desc":"Built for speed."},
#          {"icon":"🔒","title":"Secure","desc":"Enterprise security."},
#          {"icon":"🔗","title":"Integrations","desc":"Connects everywhere."},
#          {"icon":"📊","title":"Analytics","desc":"Real-time insights."},
#          {"icon":"🎨","title":"Customizable","desc":"Tailor to your needs."},
#          {"icon":"💬","title":"Support","desc":"24/7 help available."}]
#     )
#     if not isinstance(data, list): data = []
#     ac = _accent(ctx.primary)
#     cards = "".join(
#         '\n          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow group">'
#         '\n            <div className="text-3xl mb-3">' + str(f.get("icon","✦")) + '</div>'
#         '\n            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-' + ac + ' transition-colors">' + str(f.get("title","")) + '</h3>'
#         '\n            <p className="text-gray-500 text-sm">' + str(f.get("desc","")) + '</p>'
#         '\n          </div>'
#         for f in data
#     )
#     return (
#         '      <section className="py-20 bg-white px-6">\n'
#         '        <div className="container mx-auto">\n'
#         '          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">Everything you need</h2>\n'
#         '          <p className="text-center text-gray-500 mb-12">Powerful features built for ' + ctx.industry + '</p>\n'
#         '          <div className="grid md:grid-cols-3 gap-6">' + cards + '\n          </div>\n        </div>\n      </section>\n'
#     )


# # ---- TESTIMONIAL ----
# def _section_testimonial(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON of one customer testimonial:\n"
#         '{"quote":"specific testimonial about this product","author":"Full Name","role":"Title, Company"}',
#         {"quote":"This product changed how we work completely.",
#          "author":"Alex Johnson","role":"CEO, TechCorp"}
#     )
#     g = _gradient(ctx.primary)
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-20 px-6">\n'
#         '        <div className="container mx-auto max-w-3xl text-center">\n'
#         '          <div className="text-5xl text-white/30 mb-4">&ldquo;</div>\n'
#         '          <p className="text-2xl text-white font-medium italic mb-8">' + str(data.get("quote","")) + '</p>\n'
#         '          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">'
#         + str(data.get("author","A"))[:1].upper() + str(data.get("author","B")).split()[-1][:1].upper() + '</div>\n'
#         '          <p className="text-white font-semibold">' + str(data.get("author","")) + '</p>\n'
#         '          <p className="text-white/60 text-sm">' + str(data.get("role","")) + '</p>\n'
#         '        </div>\n      </section>\n'
#     )


# # ---- DASHBOARD METRICS ----
# def _section_dash_metrics(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 4 dashboard metrics for this product:\n"
#         '[{"label":"Total Users","value":"12,430","change":"+8.2%","up":true,"icon":"👥","color":"blue"}]',
#         [{"label":"Total Users","value":"12,430","change":"+8.2%","up":True,"icon":"👥","color":"blue"},
#          {"label":"Revenue","value":"$48,290","change":"+12.5%","up":True,"icon":"💰","color":"green"},
#          {"label":"Orders","value":"3,842","change":"+5.1%","up":True,"icon":"📦","color":"purple"},
#          {"label":"Churn Rate","value":"2.4%","change":"-0.3%","up":False,"icon":"📉","color":"red"}]
#     )
#     if not isinstance(data, list): data = []
#     color_map = {"blue":"blue","green":"green","purple":"purple","red":"red","orange":"orange","pink":"pink"}
#     cards = "".join(
#         '\n      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">'
#         '\n        <div className="flex items-center justify-between mb-4">'
#         '\n          <span className="text-2xl">' + str(m.get("icon","📊")) + '</span>'
#         '\n          <span className="px-2 py-1 text-xs font-bold rounded-full ' +
#         ('bg-green-100 text-green-700' if m.get("up") else 'bg-red-100 text-red-700') + '">'
#         + str(m.get("change","")) + '</span>'
#         '\n        </div>'
#         '\n        <div className="text-2xl font-black text-gray-900 mb-1">' + str(m.get("value","")) + '</div>'
#         '\n        <div className="text-sm text-gray-500">' + str(m.get("label","")) + '</div>'
#         '\n      </div>'
#         for m in data
#     )
#     return (
#         '    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">\n'
#         + cards + '\n    </div>\n'
#     )


# # ---- DASHBOARD CHART ----
# def _section_dash_chart(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 7 daily data points for a chart:\n"
#         '[{"label":"Mon","value":65},{"label":"Tue","value":80}]',
#         [{"label":"Mon","value":45},{"label":"Tue","value":72},{"label":"Wed","value":60},
#          {"label":"Thu","value":88},{"label":"Fri","value":95},{"label":"Sat","value":50},{"label":"Sun","value":65}]
#     )
#     if not isinstance(data, list): data = []
#     ac = _accent(ctx.primary)
#     max_val = max((int(d.get("value",0)) for d in data), default=100)
#     bars = "".join(
#         '\n          <div className="flex flex-col items-center gap-2 flex-1">'
#         '\n            <div className="text-xs text-gray-500 font-medium">' + str(int(d.get("value",0))) + '</div>'
#         '\n            <div className="w-full bg-' + ac + ' rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{height: "' + str(int(int(d.get("value",0)) / max_val * 160)) + 'px"}}></div>'
#         '\n            <div className="text-xs text-gray-400">' + str(d.get("label","")) + '</div>'
#         '\n          </div>'
#         for d in data
#     )
#     return (
#         '    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">\n'
#         '      <h3 className="font-bold text-gray-900 mb-6">Weekly Overview</h3>\n'
#         '      <div className="flex items-end gap-3 h-48">' + bars + '\n      </div>\n    </div>\n'
#     )


# # ---- DASHBOARD TABLE ----
# def _section_dash_table(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 5 recent activity rows for a dashboard table:\n"
#         '[{"name":"John Doe","action":"Placed order #1042","time":"2 min ago","status":"Success"}]',
#         [{"name":"Alice Smith","action":"New signup","time":"1 min ago","status":"Active"},
#          {"name":"Bob Jones","action":"Made purchase","time":"5 min ago","status":"Success"},
#          {"name":"Carol White","action":"Submitted form","time":"12 min ago","status":"Pending"},
#          {"name":"Dave Brown","action":"Cancelled order","time":"1 hr ago","status":"Failed"},
#          {"name":"Eve Davis","action":"Upgraded plan","time":"2 hr ago","status":"Active"}]
#     )
#     if not isinstance(data, list): data = []
#     status_color = {
#         "Active":"bg-green-100 text-green-700","Success":"bg-blue-100 text-blue-700",
#         "Pending":"bg-yellow-100 text-yellow-700","Failed":"bg-red-100 text-red-700",
#     }
#     rows = "".join(
#         '\n          <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">'
#         '\n            <td className="py-3 px-4"><div className="flex items-center gap-3">'
#         '<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">'
#         + str(r.get("name","U"))[:1].upper() + '</div>'
#         '<span className="font-medium text-gray-900 text-sm">' + str(r.get("name","")) + '</span></div></td>'
#         '\n            <td className="py-3 px-4 text-gray-500 text-sm">' + str(r.get("action","")) + '</td>'
#         '\n            <td className="py-3 px-4 text-gray-400 text-xs">' + str(r.get("time","")) + '</td>'
#         '\n            <td className="py-3 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full '
#         + status_color.get(str(r.get("status","")),"bg-gray-100 text-gray-600") + '">'
#         + str(r.get("status","")) + '</span></td>'
#         '\n          </tr>'
#         for r in data
#     )
#     return (
#         '    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">\n'
#         '      <div className="px-6 py-4 border-b border-gray-100">\n'
#         '        <h3 className="font-bold text-gray-900">Recent Activity</h3>\n'
#         '      </div>\n'
#         '      <table className="w-full">\n'
#         '        <thead><tr className="bg-gray-50">'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">User</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Action</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Time</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>'
#         '</tr></thead>\n'
#         '        <tbody>' + rows + '\n        </tbody>\n      </table>\n    </div>\n'
#     )


# # ---- PRICING PLANS ----
# def _section_pricing_plans(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 3 pricing plans:\n"
#         '[{"name":"Starter","price":"$0","period":"mo","highlight":false,"features":["f1","f2","f3"],"cta":"Get Free"},'
#         '{"name":"Pro","price":"$29","period":"mo","highlight":true,"features":["f1","f2","f3","f4","f5"],"cta":"Start Trial"},'
#         '{"name":"Enterprise","price":"Custom","period":"","highlight":false,"features":["f1","f2","f3","f4","f5","f6"],"cta":"Contact Us"}]',
#         [{"name":"Starter","price":"$0","period":"mo","highlight":False,"features":["5 projects","1GB storage","Basic analytics","Email support"],"cta":"Get Free"},
#          {"name":"Pro","price":"$29","period":"mo","highlight":True,"features":["Unlimited projects","50GB storage","Advanced analytics","Priority support","Custom domains","API access"],"cta":"Start Trial"},
#          {"name":"Enterprise","price":"Custom","period":"","highlight":False,"features":["Everything in Pro","SSO","SLA guarantee","Dedicated manager","Custom integrations","White-label"],"cta":"Contact Us"}]
#     )
#     if not isinstance(data, list): data = []
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     cards = ""
#     for plan in data:
#         hi = bool(plan.get("highlight"))
#         feats = "".join(
#             '\n              <li className="flex items-center gap-2 text-sm">'
#             '<span className="' + ("text-white" if hi else "text-green-500") + ' font-bold">✓</span>'
#             + str(f) + '</li>'
#             for f in plan.get("features",[])
#         )
#         period = "/" + str(plan.get("period","")) if plan.get("period") else ""
#         if hi:
#             card_cls = "rounded-2xl p-8 flex flex-col border-2 border-white/30 shadow-2xl bg-gradient-to-br " + g + " text-white scale-105 z-10"
#             btn_cls  = "mt-auto w-full py-3 bg-white text-" + ac + " font-bold rounded-xl hover:opacity-90 transition text-center"
#             price_cls = "text-white"
#             sub_cls   = "text-white/70"
#             feat_cls  = "text-white/90"
#         else:
#             card_cls = "rounded-2xl p-8 flex flex-col border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
#             btn_cls  = "mt-auto w-full py-3 bg-" + ac + " text-white font-bold rounded-xl hover:opacity-90 transition text-center"
#             price_cls = "text-gray-900"
#             sub_cls   = "text-gray-400"
#             feat_cls  = "text-gray-600"
#         cards += (
#             '\n        <div className="' + card_cls + '">'
#             '\n          ' + ('<span className="self-start text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-4">Most Popular</span>' if hi else '') +
#             '\n          <h3 className="text-xl font-bold mb-2 ' + price_cls + '">' + str(plan.get("name","")) + '</h3>'
#             '\n          <div className="mb-6"><span className="text-4xl font-black ' + price_cls + '">' + str(plan.get("price","")) + '</span>'
#             '<span className="' + sub_cls + ' text-sm">' + period + '</span></div>'
#             '\n          <ul className="space-y-2 mb-8 flex-1 ' + feat_cls + '">' + feats + '\n          </ul>'
#             '\n          <a href="#" className="' + btn_cls + '">' + str(plan.get("cta","")) + '</a>'
#             '\n        </div>'
#         )
#     return (
#         '      <section className="pb-20 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6 items-center">'
#         + cards + '\n        </div>\n      </section>\n'
#     )


# # ---- CONTACT FORM ----
# def _section_contact_form(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with contact info:\n"
#         '{"email":"hello@example.com","phone":"+1 555 000 0000","address":"123 Main St, City","hours":"Mon-Fri 9am-6pm"}',
#         {"email":"hello@example.com","phone":"+1 555 000 0000",
#          "address":"123 Main St, City","hours":"Mon-Fri 9am-6pm"}
#     )
#     ac = _accent(ctx.primary)
#     return (
#         '      <section className="py-20 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">\n'
#         '          <div className="space-y-6">\n'
#         '            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>\n'
#         '            <div className="space-y-4">\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">📧</span><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-500 text-sm">' + str(data.get("email","")) + '</p></div></div>\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">📞</span><div><p className="font-semibold text-gray-900">Phone</p><p className="text-gray-500 text-sm">' + str(data.get("phone","")) + '</p></div></div>\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">📍</span><div><p className="font-semibold text-gray-900">Address</p><p className="text-gray-500 text-sm">' + str(data.get("address","")) + '</p></div></div>\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">🕐</span><div><p className="font-semibold text-gray-900">Hours</p><p className="text-gray-500 text-sm">' + str(data.get("hours","")) + '</p></div></div>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">\n'
#         '            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>\n'
#         '            <div className="space-y-4">\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>'
#         '<input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Your name" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="your@email.com" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-1">Message</label>'
#         '<textarea rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40 resize-none" placeholder="How can we help?" /></div>\n'
#         '              <button className="w-full py-3 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition">Send Message</button>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#     )


# # ---- ABOUT TEAM ----
# def _section_about_team(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with company info and team:\n"
#         '{"story":"2 sentences about company mission","team":['
#         '{"name":"Full Name","role":"Job Title","bio":"one sentence"}]}',
#         {"story":"We are building the future of " + ctx.industry + ".",
#          "team":[{"name":"Alex Johnson","role":"CEO & Co-founder","bio":"10 years building great products."},
#                  {"name":"Sara Lee","role":"CTO","bio":"Former engineer at top tech companies."},
#                  {"name":"Mike Chen","role":"Head of Design","bio":"Passionate about user-centered design."}]}
#     )
#     g = _gradient(ctx.primary)
#     team_cards = "".join(
#         '\n          <div className="text-center">'
#         '\n            <div className="w-20 h-20 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">'
#         + str(m.get("name","?"))[:1].upper() + (str(m.get("name","?")).split()[-1][:1].upper() if len(str(m.get("name","?")).split()) > 1 else "") + '</div>'
#         '\n            <h3 className="font-bold text-gray-900">' + str(m.get("name","")) + '</h3>'
#         '\n            <p className="text-sm font-medium text-indigo-600 mb-1">' + str(m.get("role","")) + '</p>'
#         '\n            <p className="text-gray-500 text-sm">' + str(m.get("bio","")) + '</p>'
#         '\n          </div>'
#         for m in (data.get("team",[]) if isinstance(data, dict) else [])
#     )
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-24 px-6 text-white text-center">\n'
#         '        <div className="container mx-auto max-w-3xl mb-20">\n'
#         '          <h1 className="text-5xl font-black mb-6">About Us</h1>\n'
#         '          <p className="text-white/80 text-xl leading-relaxed">' + str(data.get("story","") if isinstance(data,dict) else "") + '</p>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '      <section className="py-20 bg-white px-6">\n'
#         '        <div className="container mx-auto max-w-4xl">\n'
#         '          <h2 className="text-3xl font-black text-center text-gray-900 mb-14">Meet the Team</h2>\n'
#         '          <div className="grid md:grid-cols-3 gap-10">' + team_cards + '\n          </div>\n        </div>\n      </section>\n'
#     )


# # ---- MENU ----
# def _section_menu(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with restaurant menu:\n"
#         '{"categories":["Starters","Mains","Desserts","Drinks"],'
#         '"items":[{"name":"Dish Name","desc":"short description","price":"$12","category":"Starters","icon":"🍜","veg":true,"spicy":false,"special":false}]}',
#         {"categories":["Starters","Mains","Desserts","Drinks"],
#          "items":[
#              {"name":"Spring Rolls","desc":"Crispy golden rolls with vegetables","price":"$8","category":"Starters","icon":"🥟","veg":True,"spicy":False,"special":False},
#              {"name":"Grilled Salmon","desc":"Fresh Atlantic salmon with herbs","price":"$24","category":"Mains","icon":"🐟","veg":False,"spicy":False,"special":True},
#              {"name":"Spicy Ramen","desc":"Rich broth with noodles and egg","price":"$16","category":"Mains","icon":"🍜","veg":False,"spicy":True,"special":False},
#              {"name":"Tiramisu","desc":"Classic Italian dessert","price":"$9","category":"Desserts","icon":"🍰","veg":True,"spicy":False,"special":False},
#              {"name":"Fresh Juice","desc":"Seasonal fruit blend","price":"$6","category":"Drinks","icon":"🧃","veg":True,"spicy":False,"special":False},
#          ]}
#     )
#     if not isinstance(data, dict): data = {}
#     cats  = data.get("categories", ["Starters","Mains","Desserts","Drinks"])
#     items = data.get("items", [])
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)

#     item_cards = ""
#     for item in items:
#         badges = ""
#         if item.get("veg"):     badges += '<span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">🌱 Veg</span>'
#         if item.get("spicy"):   badges += '<span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded-full ml-1">🌶️ Spicy</span>'
#         if item.get("special"): badges += '<span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-700 rounded-full ml-1">⭐ Special</span>'
#         item_cards += (
#             '\n        <div className="menu-item bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow" data-category="' + str(item.get("category","")) + '">'
#             '\n          <div className="flex items-start gap-4">'
#             '\n            <div className="text-4xl flex-shrink-0">' + str(item.get("icon","🍽️")) + '</div>'
#             '\n            <div className="flex-1">'
#             '\n              <div className="flex justify-between items-start mb-1">'
#             '\n                <h3 className="font-bold text-gray-900">' + str(item.get("name","")) + '</h3>'
#             '\n                <span className="font-bold text-' + ac + '">' + str(item.get("price","")) + '</span>'
#             '\n              </div>'
#             '\n              <p className="text-gray-500 text-sm mb-2">' + str(item.get("desc","")) + '</p>'
#             '\n              <div className="flex flex-wrap gap-1">' + badges + '</div>'
#             '\n            </div>'
#             '\n          </div>'
#             '\n        </div>'
#         )

#     cat_buttons = "".join(
#         '<button className="px-5 py-2 rounded-full text-sm font-semibold bg-' + ac + ' text-white">' + str(c) + '</button>\n          '
#         for c in cats
#     )

#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-16 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-3">Our Menu</h1>\n'
#         '        <p className="text-white/80 text-lg">Fresh ingredients, authentic flavors</p>\n'
#         '      </section>\n'
#         '      <section className="py-10 bg-gray-50 sticky top-0 z-30 border-b border-gray-200 px-6">\n'
#         '        <div className="container mx-auto flex flex-wrap gap-3 justify-center">\n'
#         '          ' + cat_buttons +
#         '\n        </div>\n'
#         '      </section>\n'
#         '      <section className="py-12 px-6">\n'
#         '        <div className="container mx-auto grid md:grid-cols-2 gap-5">' + item_cards + '\n        </div>\n      </section>\n'
#     )


# # ---- BOOKING FORM ----
# def _section_booking(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with booking info:\n"
#         '{"name":"' + ctx.app_name + '","occasions":["Birthday","Anniversary","Business Dinner","Date Night","None"],"times":["6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"]}',
#         {"name":ctx.app_name,"occasions":["Birthday","Anniversary","Business Dinner","Date Night","None"],
#          "times":["6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"]}
#     )
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     times = data.get("times",["6:00 PM","7:00 PM","8:00 PM","9:00 PM"]) if isinstance(data,dict) else []
#     occasions = data.get("occasions",["Birthday","Anniversary","None"]) if isinstance(data,dict) else []
#     time_btns = "".join(
#         '<button className="px-4 py-2 rounded-xl border-2 border-gray-200 text-sm font-medium hover:border-' + ac + ' hover:text-' + ac + ' transition">' + str(t) + '</button>\n              '
#         for t in times
#     )
#     occasion_opts = "".join('<option>' + str(o) + '</option>\n                ' for o in occasions)
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-16 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-3">Make a Reservation</h1>\n'
#         '        <p className="text-white/80 text-lg">Book your table in seconds</p>\n'
#         '      </section>\n'
#         '      <section className="py-16 px-6">\n'
#         '        <div className="container mx-auto max-w-3xl">\n'
#         '          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-10">\n'
#         '            <div className="grid md:grid-cols-2 gap-6">\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Date</label>'
#         '<input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Party Size</label>'
#         '<div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2"><button className="w-8 h-8 rounded-lg bg-gray-100 font-bold">-</button><span className="flex-1 text-center font-semibold">2</span><button className="w-8 h-8 rounded-lg bg-gray-100 font-bold">+</button></div></div>\n'
#         '              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>'
#         '<div className="flex flex-wrap gap-2">' + time_btns + '</div></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>'
#         '<select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none">' + occasion_opts + '</select></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Name</label>'
#         '<input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Full name" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="your@email.com" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>'
#         '<input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="+1 555 000 0000" /></div>\n'
#         '              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>'
#         '<textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40 resize-none" placeholder="Allergies, celebrations, seating preferences..." /></div>\n'
#         '            </div>\n'
#         '            <button className="w-full mt-8 py-4 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition text-base">Confirm Reservation</button>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#     )


# # ---- FAQ ----
# def _section_faq(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 6 FAQs specific to this product:\n"
#         '[{"q":"Question?","a":"Answer."}]',
#         [{"q":"How do I get started?","a":"Sign up for a free account and follow the setup guide."},
#          {"q":"What payment methods are accepted?","a":"We accept all major credit cards and PayPal."},
#          {"q":"Can I cancel anytime?","a":"Yes, you can cancel your subscription at any time."},
#          {"q":"Is there a free trial?","a":"Yes, we offer a 14-day free trial with no credit card required."},
#          {"q":"How secure is my data?","a":"We use enterprise-grade encryption to protect all data."},
#          {"q":"Do you offer customer support?","a":"Yes, we offer 24/7 support via chat and email."}]
#     )
#     if not isinstance(data, list): data = []
#     g = _gradient(ctx.primary)
#     items = "".join(
#         '\n        <details className="border border-gray-200 rounded-2xl px-6 py-4 bg-white shadow-sm group">'
#         '\n          <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">'
#         + str(item.get("q","")) +
#         '<span className="text-gray-400 ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>'
#         '</summary>'
#         '\n          <p className="mt-3 text-gray-500 text-sm leading-relaxed">' + str(item.get("a","")) + '</p>'
#         '\n        </details>'
#         for item in data
#     )
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-20 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">Frequently Asked Questions</h1>\n'
#         '        <p className="text-white/80 text-lg">Everything you need to know</p>\n'
#         '      </section>\n'
#         '      <section className="py-16 bg-gray-50 px-6">\n'
#         '        <div className="container mx-auto max-w-2xl space-y-4">' + items + '\n        </div>\n      </section>\n'
#     )


# # ---- GENERIC SECTIONS ----
# def _section_generic(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page name: " + ctx.page + "\n"
#         "Return JSON for this page:\n"
#         '{"headline":"page headline","subheadline":"subtitle",'
#         '"sections":[{"icon":"emoji","title":"section title","body":"2 sentence description"}]}',
#         {"headline": ctx.page, "subheadline": "Coming soon",
#          "sections":[{"icon":"✦","title":"Section One","body":"Content here."},
#                      {"icon":"🔥","title":"Section Two","body":"More content here."}]}
#     )
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     secs = data.get("sections",[]) if isinstance(data,dict) else []
#     cards = "".join(
#         '\n        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">'
#         '\n          <div className="text-4xl mb-4">' + str(s.get("icon","✦")) + '</div>'
#         '\n          <h3 className="text-xl font-bold text-gray-900 mb-3">' + str(s.get("title","")) + '</h3>'
#         '\n          <p className="text-gray-500 leading-relaxed">' + str(s.get("body","")) + '</p>'
#         '\n        </div>'
#         for s in secs
#     )
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-24 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>\n'
#         '        <p className="text-white/80 text-lg max-w-xl mx-auto">' + str(data.get("subheadline","") if isinstance(data,dict) else "") + '</p>\n'
#         '      </section>\n'
#         '      <section className="py-20 bg-gray-50 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">' + cards + '\n        </div>\n      </section>\n'
#     )


# # ---- CTA SECTION ----
# def _section_cta(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         'Return JSON: {"headline":"action headline","button":"CTA label"}',
#         {"headline":"Ready to get started?","button":"Start for Free"}
#     )
#     ac = _accent(ctx.primary)
#     return (
#         '      <section className="py-20 bg-white text-center px-6">\n'
#         '        <div className="container mx-auto max-w-2xl">\n'
#         '          <h2 className="text-4xl font-black text-gray-900 mb-6">' + str(data.get("headline","") if isinstance(data,dict) else "") + '</h2>\n'
#         '          <a href="#" className="inline-block px-10 py-4 bg-' + ac + ' text-white font-bold rounded-2xl hover:opacity-90 transition text-lg shadow-lg">'
#         + str(data.get("button","Get Started") if isinstance(data,dict) else "Get Started") + '</a>\n'
#         '        </div>\n      </section>\n'
#     )


# # ==============================================================
# # Page assemblers
# # ==============================================================

# def _assemble(ctx: Ctx, sections_html: str) -> str:
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen">\n'
#         + sections_html +
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _assemble_dashboard(ctx: Ctx, sections_html: str) -> str:
#     g  = _gradient(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <h1 className="text-2xl font-black text-white">Dashboard</h1>\n'
#         '        <p className="text-white/70 text-sm">Welcome back — here\'s what\'s happening</p>\n'
#         '      </div>\n'
#         '      <div className="p-6">\n'
#         + sections_html +
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# # ==============================================================
# # Page builders — define section order per type
# # ==============================================================

# def _build_landing(ctx: Ctx) -> str:
#     return _assemble(ctx,
#         _section_hero(ctx) +
#         _section_stats(ctx) +
#         _section_features(ctx) +
#         _section_testimonial(ctx) +
#         _section_cta(ctx)
#     )


# def _build_dashboard(ctx: Ctx) -> str:
#     return _assemble_dashboard(ctx,
#         _section_dash_metrics(ctx) +
#         _section_dash_chart(ctx) +
#         _section_dash_table(ctx)
#     )


# def _build_analytics(ctx: Ctx) -> str:
#     return _assemble_dashboard(ctx,
#         _section_dash_metrics(ctx) +
#         _section_dash_chart(ctx) +
#         _section_dash_table(ctx)
#     )


# def _build_pricing(ctx: Ctx) -> str:
#     g = _gradient(ctx.primary)
#     header = (
#         '      <section className="py-20 bg-gradient-to-br ' + g + ' text-white text-center px-6">\n'
#         '        <h1 className="text-5xl font-black mb-4">Simple, Transparent Pricing</h1>\n'
#         '        <p className="text-white/80 text-lg">No hidden fees. Cancel anytime.</p>\n'
#         '      </section>\n'
#     )
#     return _assemble(ctx, header + _section_pricing_plans(ctx) + _section_faq(ctx))


# def _build_contact(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_contact_form(ctx))


# def _build_about(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_about_team(ctx) + _section_features(ctx) + _section_cta(ctx))


# def _build_features(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_features(ctx) + _section_stats(ctx) + _section_cta(ctx))


# def _build_blog(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_features(ctx) + _section_cta(ctx))


# def _build_faq(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_faq(ctx) + _section_cta(ctx))


# def _build_auth_login(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen grid md:grid-cols-2">\n'
#         '      <div className="bg-gradient-to-br ' + g + ' p-12 flex flex-col justify-center text-white hidden md:flex">\n'
#         '        <h1 className="text-4xl font-black mb-4">' + ctx.app_name + '</h1>\n'
#         '        <p className="text-white/80 text-lg mb-8">' + ctx.user_prompt[:100] + '</p>\n'
#         '        <ul className="space-y-3">\n'
#         '          <li className="flex items-center gap-3"><span className="text-green-300">✓</span>Secure & encrypted</li>\n'
#         '          <li className="flex items-center gap-3"><span className="text-green-300">✓</span>No credit card required</li>\n'
#         '          <li className="flex items-center gap-3"><span className="text-green-300">✓</span>Cancel anytime</li>\n'
#         '        </ul>\n'
#         '      </div>\n'
#         '      <div className="flex items-center justify-center p-12 bg-white">\n'
#         '        <div className="w-full max-w-md">\n'
#         '          <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome back</h2>\n'
#         '          <p className="text-gray-500 mb-8">Sign in to your account</p>\n'
#         '          <div className="space-y-4">\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="you@example.com" /></div>\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label>'
#         '<input type="password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="••••••••" /></div>\n'
#         '            <button className="w-full py-3 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition">Sign In</button>\n'
#         '            <p className="text-center text-sm text-gray-500">Don\'t have an account? <a href="/signup" className="text-' + ac + ' font-semibold">Sign up</a></p>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_auth_signup(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen grid md:grid-cols-2">\n'
#         '      <div className="bg-gradient-to-br ' + g + ' p-12 flex-col justify-center text-white hidden md:flex">\n'
#         '        <h1 className="text-4xl font-black mb-4">' + ctx.app_name + '</h1>\n'
#         '        <p className="text-white/80 text-xl mb-8">Join thousands of happy users today.</p>\n'
#         '      </div>\n'
#         '      <div className="flex items-center justify-center p-12 bg-white">\n'
#         '        <div className="w-full max-w-md">\n'
#         '          <h2 className="text-3xl font-black text-gray-900 mb-2">Create your account</h2>\n'
#         '          <p className="text-gray-500 mb-8">Free forever. No credit card needed.</p>\n'
#         '          <div className="space-y-4">\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>'
#         '<input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Your name" /></div>\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="you@example.com" /></div>\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label>'
#         '<input type="password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Min. 8 characters" /></div>\n'
#         '            <button className="w-full py-3 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition">Create Account</button>\n'
#         '            <p className="text-center text-sm text-gray-500">Already have an account? <a href="/login" className="text-' + ac + ' font-semibold">Sign in</a></p>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_menu(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_menu(ctx) + _section_cta(ctx))


# def _build_booking(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_booking(ctx))


# def _build_generic(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_generic(ctx) + _section_cta(ctx))


# BUILDERS: dict[str, Callable] = {
#     "landing":     _build_landing,
#     "dashboard":   _build_dashboard,
#     "analytics":   _build_analytics,
#     "pricing":     _build_pricing,
#     "contact":     _build_contact,
#     "about":       _build_about,
#     "features":    _build_features,
#     "blog":        _build_blog,
#     "faq":         _build_faq,
#     "auth_login":  _build_auth_login,
#     "auth_signup": _build_auth_signup,
#     "menu":        _build_menu,
#     "booking":     _build_booking,
#     "generic":     _build_generic,
# }


# # ==============================================================
# # Worker
# # ==============================================================

# def _build_page(page: str, user_prompt: str, industry: str,
#                 app_name: str, tone: str, primary: str,
#                 secondary: str, llm: NvidiaLLM) -> dict:
#     page_type = _classify(page)
#     logger.info("  [%s] type=%s", page, page_type)

#     ctx = Ctx(page, page_type, user_prompt, industry, app_name, tone, primary, secondary, llm)
#     builder = BUILDERS.get(page_type, _build_generic)

#     try:
#         jsx = builder(ctx)
#         logger.info("  [%s] built (%d chars)", page, len(jsx))
#         return {"filename": "frontend/src/pages/" + page + ".tsx",
#                 "content": jsx, "meta": {"page": page, "type": page_type}}
#     except Exception as exc:
#         logger.error("  [%s] build error: %s", page, exc)
#         fallback = (
#             'export default function ' + page + '() {\n'
#             '  return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-black">' + page + '</h1></div>\n'
#             '}\n'
#         )
#         return {"filename": "frontend/src/pages/" + page + ".tsx",
#                 "content": fallback, "meta": {"page": page, "type": page_type, "fallback": True}}


# # ==============================================================
# # Node
# # ==============================================================

# def frontend_pages_node(state: AgentState) -> dict:
#     logger.info("Generating pages — DYNAMIC SECTION MODE")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages        = site_plan.get("pages", [])

#     if not pages:
#         logger.warning("No pages defined")
#         return {"code_files": []}

#     user_prompt = state.get("user_prompt", "")
#     industry    = requirements.get("industry", "Technology")
#     app_name    = site_plan.get("app_name") or requirements.get("app_name", "App")
#     tone        = site_plan.get("tone") or requirements.get("tone", "professional")
#     primary     = site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5")
#     secondary   = site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9")

#     llm = get_fast_llm(temperature=0.1, max_tokens=512)

#     generated: list[dict] = []
#     with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
#         futures = {
#             pool.submit(_build_page, page, user_prompt, industry,
#                         app_name, tone, primary, secondary, llm): page
#             for page in pages
#         }
#         for future in as_completed(futures):
#             try:
#                 generated.append(future.result())
#             except Exception as exc:
#                 logger.error("Unexpected: %s", exc)

#     logger.info("Done: %d/%d pages", len(generated), len(pages))
#     return {"code_files": generated}



# """
# frontend_pages_node.py  -  Section-by-section LLM generation for small models.

# Strategy:
# - Use qwen2.5:3b-instruct (fast, fits in RAM)
# - Instead of asking for a full page in one shot (too long, times out),
#   generate each SECTION separately with a tiny focused prompt
# - Assemble sections into a final TSX component in Python
# - Each page type defines which sections to generate and in what order
# - Result: dynamic, product-specific content on every page
# """

# from __future__ import annotations

# import logging
# import re
# import json
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Callable

# from backend.llm_client import NvidiaLLM, get_fast_llm
# from backend.state import AgentState

# logger = logging.getLogger(__name__)

# MAX_WORKERS  = 3
# MODEL        = "mistralai/mistral-7b-instruct-v0.3"  # via NVIDIA API
# _FENCE_RE    = re.compile(r"```[a-zA-Z]*")
# _JSON_RE     = re.compile(r"\{.*\}", re.DOTALL)
# _ARRAY_RE    = re.compile(r"\[.*\]",  re.DOTALL)


# # ==============================================================
# # Page-type classifier
# # ==============================================================

# def _classify(page: str) -> str:
#     n = page.lower()
#     # Landing / home
#     if any(x in n for x in ("home", "landing", "index", "welcome", "main")):          return "landing"
#     # Users / people — checked BEFORE dashboard so "teacherportal" hits here
#     if any(x in n for x in ("student", "teacher", "staff", "member",
#                               "employee", "patient", "customer", "client",
#                               "people", "person", "roster", "directory")):            return "users_list"
#     # Dashboard / admin
#     if any(x in n for x in ("dashboard", "portal", "panel", "overview", "admin")):    return "dashboard"
#     # Analytics
#     if any(x in n for x in ("analytic", "report", "insight", "metric", "stat")):      return "analytics"
#     # Pricing
#     if any(x in n for x in ("pricing", "plan", "subscription", "billing", "upgrade")): return "pricing"
#     # Contact
#     if any(x in n for x in ("contact", "getintouch", "reach", "inquiry")):            return "contact"
#     # About
#     if any(x in n for x in ("about", "team", "story", "mission", "company", "who")):  return "about"
#     # Features
#     if any(x in n for x in ("feature", "product", "solution", "service", "offer")):   return "features"
#     # Blog
#     if any(x in n for x in ("blog", "news", "article", "post", "press")):             return "blog"
#     # FAQ / Help
#     if any(x in n for x in ("faq", "help", "support", "question", "kb")):             return "faq"
#     # Auth
#     if any(x in n for x in ("login", "signin", "sign-in")):                           return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up", "join", "create")):      return "auth_signup"
#     # Chat / messaging
#     if any(x in n for x in ("chat", "message", "inbox", "conversation", "dm",
#                               "groupchat", "group", "channel", "thread", "room",
#                               "private", "messaging", "msg", "discuss")):              return "chat"
#     # Menu / food
#     if any(x in n for x in ("menu", "food", "dish", "cuisine", "meal")):              return "menu"
#     # Booking
#     if any(x in n for x in ("reserv", "booking", "appointment", "schedule",
#                               "slot", "calendar")):                                    return "booking"
#     # Gallery
#     if any(x in n for x in ("gallery", "portfolio", "photo", "image", "media")):      return "gallery"
#     # Settings / profile
#     if any(x in n for x in ("setting", "profile", "account", "preference",
#                               "config", "notification")):                              return "settings"
#     # E-commerce
#     if any(x in n for x in ("shop", "store", "cart", "checkout", "product",
#                               "ecommerce", "order", "inventory")):                    return "ecommerce"
#     # Users / students / teachers
#     # (users_list handled above dashboard check)
#     # Attendance / tracking
#     if any(x in n for x in ("attendance", "track", "monitor", "log", "record",
#                               "timesheet", "checkin")):                               return "tracker"
#     # Grade / score
#     if any(x in n for x in ("grade", "score", "result", "exam", "test", "mark",
#                               "assessment", "report card", "gradebook")):             return "grades"
#     # Video / streaming
#     if any(x in n for x in ("video", "stream", "watch", "movie", "episode",
#                               "player", "vod")):                                      return "video"
#     # Music / audio
#     if any(x in n for x in ("music", "audio", "playlist", "song", "track",
#                               "album", "listen")):                                    return "music"
#     # Map / location
#     if any(x in n for x in ("map", "location", "direction", "place", "venue",
#                               "nearby", "explore")):                                  return "map"
#     # Notifications
#     if any(x in n for x in ("notification", "alert", "announcement", "notice")):     return "notifications"
#     return "generic"


# # ==============================================================
# # LLM helpers
# # ==============================================================

# def _ask(llm: NvidiaLLM, prompt: str) -> str:
#     try:
#         r = llm.invoke(prompt)
#         raw = r.content if hasattr(r, "content") else str(r)
#         return _FENCE_RE.sub("", raw).replace("```", "").strip()
#     except Exception as e:
#         logger.warning("LLM call failed: %s", e)
#         return ""


# def _ask_json(llm: NvidiaLLM, prompt: str, fallback: dict | list) -> dict | list:
#     raw = _ask(llm, prompt)
#     for pattern in (_JSON_RE, _ARRAY_RE):
#         m = pattern.search(raw)
#         if m:
#             try:
#                 return json.loads(m.group())
#             except Exception:
#                 pass
#     return fallback


# # ==============================================================
# # Context builder passed to every section generator
# # ==============================================================

# class Ctx:
#     def __init__(self, page: str, page_type: str, user_prompt: str,
#                  industry: str, app_name: str, tone: str,
#                  primary: str, secondary: str, llm: NvidiaLLM):
#         self.page        = page
#         self.page_type   = page_type
#         self.user_prompt = user_prompt
#         self.industry    = industry
#         self.app_name    = app_name
#         self.tone        = tone
#         self.primary     = primary
#         self.secondary   = secondary
#         self.llm         = llm

#     def ask(self, prompt: str) -> str:
#         return _ask(self.llm, prompt)

#     def ask_json(self, prompt: str, fallback) -> dict | list:
#         return _ask_json(self.llm, prompt, fallback)

#     def base(self) -> str:
#         return (
#             "App: " + self.app_name + "\n"
#             "Industry: " + self.industry + "\n"
#             "Request: " + self.user_prompt + "\n"
#             "Tone: " + self.tone + "\n"
#         )


# # ==============================================================
# # Shared Tailwind helpers
# # ==============================================================

# def _gradient(primary: str) -> str:
#     # Map hex to tailwind gradient
#     p = primary.lstrip("#").lower()
#     mapping = {
#         "c2410c": "from-orange-700 to-red-800",
#         "92400e": "from-amber-800 to-orange-900",
#         "4f46e5": "from-indigo-600 to-purple-700",
#         "6366f1": "from-indigo-500 to-violet-600",
#         "0ea5e9": "from-sky-500 to-cyan-600",
#         "10b981": "from-emerald-500 to-teal-600",
#         "8b5cf6": "from-violet-500 to-purple-600",
#         "f97316": "from-orange-500 to-amber-600",
#         "ec4899": "from-pink-500 to-rose-600",
#         "ef4444": "from-red-500 to-rose-600",
#         "64748b": "from-slate-600 to-gray-700",
#     }
#     return mapping.get(p, "from-indigo-600 to-purple-700")


# def _accent(primary: str) -> str:
#     p = primary.lstrip("#").lower()
#     mapping = {
#         "c2410c": "orange-700", "92400e": "amber-800",
#         "4f46e5": "indigo-600", "6366f1": "indigo-500",
#         "0ea5e9": "sky-500",    "10b981": "emerald-500",
#         "8b5cf6": "violet-500", "f97316": "orange-500",
#         "ec4899": "pink-500",   "ef4444": "red-500",
#         "64748b": "slate-600",
#     }
#     return mapping.get(p, "indigo-600")


# # ==============================================================
# # Section generators — each returns a JSX string
# # ==============================================================

# # ---- HERO ----
# def _section_hero(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON only:\n"
#         '{"headline":"bold hero headline max 8 words","subtitle":"one value prop sentence",'
#         '"cta_primary":"button label","cta_secondary":"button label","badge":"short pill label or empty"}',
#         {"headline": ctx.app_name, "subtitle": ctx.user_prompt[:80],
#          "cta_primary": "Get Started", "cta_secondary": "Learn More", "badge": ""}
#     )
#     g   = _gradient(ctx.primary)
#     ac  = _accent(ctx.primary)
#     badge = (
#         '<span className="inline-block mb-5 px-4 py-1 text-xs font-bold uppercase tracking-widest '
#         'bg-white/20 text-white rounded-full border border-white/30">' + str(data.get("badge","")) + '</span>\n          '
#     ) if data.get("badge") else ""
#     return (
#         '      <section className="relative bg-gradient-to-br ' + g + ' text-white py-28 px-6 overflow-hidden">\n'
#         '        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#fff,_transparent)]" />\n'
#         '        <div className="relative container mx-auto text-center max-w-4xl">\n'
#         '          ' + badge +
#         '<h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">'
#         + str(data.get("headline","Welcome")) + '</h1>\n'
#         '          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">'
#         + str(data.get("subtitle","")) + '</p>\n'
#         '          <div className="flex flex-wrap justify-center gap-4">\n'
#         '            <button className="px-8 py-3.5 bg-white text-' + ac + ' font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">'
#         + str(data.get("cta_primary","Get Started")) + '</button>\n'
#         '            <button className="px-8 py-3.5 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/10 transition">'
#         + str(data.get("cta_secondary","Learn More")) + '</button>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#     )


# # ---- STATS ----
# def _section_stats(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 4 stats for this product. Format:\n"
#         '[{"value":"10k+","label":"Customers"},{"value":"99.9%","label":"Uptime"},'
#         '{"value":"50ms","label":"Response"},{"value":"24/7","label":"Support"}]',
#         [{"value":"10k+","label":"Customers"},{"value":"99.9%","label":"Uptime"},
#          {"value":"50ms","label":"Response"},{"value":"24/7","label":"Support"}]
#     )
#     if not isinstance(data, list): data = []
#     ac = _accent(ctx.primary)
#     items = "".join(
#         '\n          <div className="text-center">'
#         '\n            <div className="text-4xl font-black text-' + ac + '">' + str(s.get("value","")) + '</div>'
#         '\n            <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">' + str(s.get("label","")) + '</div>'
#         '\n          </div>'
#         for s in data
#     )
#     return (
#         '      <section className="bg-gray-50 border-y border-gray-100 py-12">\n'
#         '        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">'
#         + items + '\n        </div>\n      </section>\n'
#     )


# # ---- FEATURES GRID ----
# def _section_features(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 6 features specific to this product:\n"
#         '[{"icon":"emoji","title":"Feature Name","desc":"one sentence description"}]',
#         [{"icon":"⚡","title":"Fast","desc":"Built for speed."},
#          {"icon":"🔒","title":"Secure","desc":"Enterprise security."},
#          {"icon":"🔗","title":"Integrations","desc":"Connects everywhere."},
#          {"icon":"📊","title":"Analytics","desc":"Real-time insights."},
#          {"icon":"🎨","title":"Customizable","desc":"Tailor to your needs."},
#          {"icon":"💬","title":"Support","desc":"24/7 help available."}]
#     )
#     if not isinstance(data, list): data = []
#     ac = _accent(ctx.primary)
#     cards = "".join(
#         '\n          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow group">'
#         '\n            <div className="text-3xl mb-3">' + str(f.get("icon","✦")) + '</div>'
#         '\n            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-' + ac + ' transition-colors">' + str(f.get("title","")) + '</h3>'
#         '\n            <p className="text-gray-500 text-sm">' + str(f.get("desc","")) + '</p>'
#         '\n          </div>'
#         for f in data
#     )
#     return (
#         '      <section className="py-20 bg-white px-6">\n'
#         '        <div className="container mx-auto">\n'
#         '          <h2 className="text-3xl font-black text-center text-gray-900 mb-3">Everything you need</h2>\n'
#         '          <p className="text-center text-gray-500 mb-12">Powerful features built for ' + ctx.industry + '</p>\n'
#         '          <div className="grid md:grid-cols-3 gap-6">' + cards + '\n          </div>\n        </div>\n      </section>\n'
#     )


# # ---- TESTIMONIAL ----
# def _section_testimonial(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON of one customer testimonial:\n"
#         '{"quote":"specific testimonial about this product","author":"Full Name","role":"Title, Company"}',
#         {"quote":"This product changed how we work completely.",
#          "author":"Alex Johnson","role":"CEO, TechCorp"}
#     )
#     g = _gradient(ctx.primary)
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-20 px-6">\n'
#         '        <div className="container mx-auto max-w-3xl text-center">\n'
#         '          <div className="text-5xl text-white/30 mb-4">&ldquo;</div>\n'
#         '          <p className="text-2xl text-white font-medium italic mb-8">' + str(data.get("quote","")) + '</p>\n'
#         '          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">'
#         + str(data.get("author","A"))[:1].upper() + str(data.get("author","B")).split()[-1][:1].upper() + '</div>\n'
#         '          <p className="text-white font-semibold">' + str(data.get("author","")) + '</p>\n'
#         '          <p className="text-white/60 text-sm">' + str(data.get("role","")) + '</p>\n'
#         '        </div>\n      </section>\n'
#     )


# # ---- DASHBOARD METRICS ----
# def _section_dash_metrics(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 4 dashboard metrics for this product:\n"
#         '[{"label":"Total Users","value":"12,430","change":"+8.2%","up":true,"icon":"👥","color":"blue"}]',
#         [{"label":"Total Users","value":"12,430","change":"+8.2%","up":True,"icon":"👥","color":"blue"},
#          {"label":"Revenue","value":"$48,290","change":"+12.5%","up":True,"icon":"💰","color":"green"},
#          {"label":"Orders","value":"3,842","change":"+5.1%","up":True,"icon":"📦","color":"purple"},
#          {"label":"Churn Rate","value":"2.4%","change":"-0.3%","up":False,"icon":"📉","color":"red"}]
#     )
#     if not isinstance(data, list): data = []
#     color_map = {"blue":"blue","green":"green","purple":"purple","red":"red","orange":"orange","pink":"pink"}
#     cards = "".join(
#         '\n      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">'
#         '\n        <div className="flex items-center justify-between mb-4">'
#         '\n          <span className="text-2xl">' + str(m.get("icon","📊")) + '</span>'
#         '\n          <span className="px-2 py-1 text-xs font-bold rounded-full ' +
#         ('bg-green-100 text-green-700' if m.get("up") else 'bg-red-100 text-red-700') + '">'
#         + str(m.get("change","")) + '</span>'
#         '\n        </div>'
#         '\n        <div className="text-2xl font-black text-gray-900 mb-1">' + str(m.get("value","")) + '</div>'
#         '\n        <div className="text-sm text-gray-500">' + str(m.get("label","")) + '</div>'
#         '\n      </div>'
#         for m in data
#     )
#     return (
#         '    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">\n'
#         + cards + '\n    </div>\n'
#     )


# # ---- DASHBOARD CHART ----
# def _section_dash_chart(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 7 daily data points for a chart:\n"
#         '[{"label":"Mon","value":65},{"label":"Tue","value":80}]',
#         [{"label":"Mon","value":45},{"label":"Tue","value":72},{"label":"Wed","value":60},
#          {"label":"Thu","value":88},{"label":"Fri","value":95},{"label":"Sat","value":50},{"label":"Sun","value":65}]
#     )
#     if not isinstance(data, list): data = []
#     ac = _accent(ctx.primary)
#     max_val = max((int(d.get("value",0)) for d in data), default=100)
#     bars = "".join(
#         '\n          <div className="flex flex-col items-center gap-2 flex-1">'
#         '\n            <div className="text-xs text-gray-500 font-medium">' + str(int(d.get("value",0))) + '</div>'
#         '\n            <div className="w-full bg-' + ac + ' rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{height: "' + str(int(int(d.get("value",0)) / max_val * 160)) + 'px"}}></div>'
#         '\n            <div className="text-xs text-gray-400">' + str(d.get("label","")) + '</div>'
#         '\n          </div>'
#         for d in data
#     )
#     return (
#         '    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">\n'
#         '      <h3 className="font-bold text-gray-900 mb-6">Weekly Overview</h3>\n'
#         '      <div className="flex items-end gap-3 h-48">' + bars + '\n      </div>\n    </div>\n'
#     )


# # ---- DASHBOARD TABLE ----
# def _section_dash_table(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 5 recent activity rows for a dashboard table:\n"
#         '[{"name":"John Doe","action":"Placed order #1042","time":"2 min ago","status":"Success"}]',
#         [{"name":"Alice Smith","action":"New signup","time":"1 min ago","status":"Active"},
#          {"name":"Bob Jones","action":"Made purchase","time":"5 min ago","status":"Success"},
#          {"name":"Carol White","action":"Submitted form","time":"12 min ago","status":"Pending"},
#          {"name":"Dave Brown","action":"Cancelled order","time":"1 hr ago","status":"Failed"},
#          {"name":"Eve Davis","action":"Upgraded plan","time":"2 hr ago","status":"Active"}]
#     )
#     if not isinstance(data, list): data = []
#     status_color = {
#         "Active":"bg-green-100 text-green-700","Success":"bg-blue-100 text-blue-700",
#         "Pending":"bg-yellow-100 text-yellow-700","Failed":"bg-red-100 text-red-700",
#     }
#     rows = "".join(
#         '\n          <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">'
#         '\n            <td className="py-3 px-4"><div className="flex items-center gap-3">'
#         '<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">'
#         + str(r.get("name","U"))[:1].upper() + '</div>'
#         '<span className="font-medium text-gray-900 text-sm">' + str(r.get("name","")) + '</span></div></td>'
#         '\n            <td className="py-3 px-4 text-gray-500 text-sm">' + str(r.get("action","")) + '</td>'
#         '\n            <td className="py-3 px-4 text-gray-400 text-xs">' + str(r.get("time","")) + '</td>'
#         '\n            <td className="py-3 px-4"><span className="px-2 py-1 text-xs font-semibold rounded-full '
#         + status_color.get(str(r.get("status","")),"bg-gray-100 text-gray-600") + '">'
#         + str(r.get("status","")) + '</span></td>'
#         '\n          </tr>'
#         for r in data
#     )
#     return (
#         '    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">\n'
#         '      <div className="px-6 py-4 border-b border-gray-100">\n'
#         '        <h3 className="font-bold text-gray-900">Recent Activity</h3>\n'
#         '      </div>\n'
#         '      <table className="w-full">\n'
#         '        <thead><tr className="bg-gray-50">'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">User</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Action</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Time</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>'
#         '</tr></thead>\n'
#         '        <tbody>' + rows + '\n        </tbody>\n      </table>\n    </div>\n'
#     )


# # ---- PRICING PLANS ----
# def _section_pricing_plans(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 3 pricing plans:\n"
#         '[{"name":"Starter","price":"$0","period":"mo","highlight":false,"features":["f1","f2","f3"],"cta":"Get Free"},'
#         '{"name":"Pro","price":"$29","period":"mo","highlight":true,"features":["f1","f2","f3","f4","f5"],"cta":"Start Trial"},'
#         '{"name":"Enterprise","price":"Custom","period":"","highlight":false,"features":["f1","f2","f3","f4","f5","f6"],"cta":"Contact Us"}]',
#         [{"name":"Starter","price":"$0","period":"mo","highlight":False,"features":["5 projects","1GB storage","Basic analytics","Email support"],"cta":"Get Free"},
#          {"name":"Pro","price":"$29","period":"mo","highlight":True,"features":["Unlimited projects","50GB storage","Advanced analytics","Priority support","Custom domains","API access"],"cta":"Start Trial"},
#          {"name":"Enterprise","price":"Custom","period":"","highlight":False,"features":["Everything in Pro","SSO","SLA guarantee","Dedicated manager","Custom integrations","White-label"],"cta":"Contact Us"}]
#     )
#     if not isinstance(data, list): data = []
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     cards = ""
#     for plan in data:
#         hi = bool(plan.get("highlight"))
#         feats = "".join(
#             '\n              <li className="flex items-center gap-2 text-sm">'
#             '<span className="' + ("text-white" if hi else "text-green-500") + ' font-bold">✓</span>'
#             + str(f) + '</li>'
#             for f in plan.get("features",[])
#         )
#         period = "/" + str(plan.get("period","")) if plan.get("period") else ""
#         if hi:
#             card_cls = "rounded-2xl p-8 flex flex-col border-2 border-white/30 shadow-2xl bg-gradient-to-br " + g + " text-white scale-105 z-10"
#             btn_cls  = "mt-auto w-full py-3 bg-white text-" + ac + " font-bold rounded-xl hover:opacity-90 transition text-center"
#             price_cls = "text-white"
#             sub_cls   = "text-white/70"
#             feat_cls  = "text-white/90"
#         else:
#             card_cls = "rounded-2xl p-8 flex flex-col border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
#             btn_cls  = "mt-auto w-full py-3 bg-" + ac + " text-white font-bold rounded-xl hover:opacity-90 transition text-center"
#             price_cls = "text-gray-900"
#             sub_cls   = "text-gray-400"
#             feat_cls  = "text-gray-600"
#         cards += (
#             '\n        <div className="' + card_cls + '">'
#             '\n          ' + ('<span className="self-start text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-4">Most Popular</span>' if hi else '') +
#             '\n          <h3 className="text-xl font-bold mb-2 ' + price_cls + '">' + str(plan.get("name","")) + '</h3>'
#             '\n          <div className="mb-6"><span className="text-4xl font-black ' + price_cls + '">' + str(plan.get("price","")) + '</span>'
#             '<span className="' + sub_cls + ' text-sm">' + period + '</span></div>'
#             '\n          <ul className="space-y-2 mb-8 flex-1 ' + feat_cls + '">' + feats + '\n          </ul>'
#             '\n          <a href="#" className="' + btn_cls + '">' + str(plan.get("cta","")) + '</a>'
#             '\n        </div>'
#         )
#     return (
#         '      <section className="pb-20 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid md:grid-cols-3 gap-6 items-center">'
#         + cards + '\n        </div>\n      </section>\n'
#     )


# # ---- CONTACT FORM ----
# def _section_contact_form(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with contact info:\n"
#         '{"email":"hello@example.com","phone":"+1 555 000 0000","address":"123 Main St, City","hours":"Mon-Fri 9am-6pm"}',
#         {"email":"hello@example.com","phone":"+1 555 000 0000",
#          "address":"123 Main St, City","hours":"Mon-Fri 9am-6pm"}
#     )
#     ac = _accent(ctx.primary)
#     return (
#         '      <section className="py-20 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">\n'
#         '          <div className="space-y-6">\n'
#         '            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>\n'
#         '            <div className="space-y-4">\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">📧</span><div><p className="font-semibold text-gray-900">Email</p><p className="text-gray-500 text-sm">' + str(data.get("email","")) + '</p></div></div>\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">📞</span><div><p className="font-semibold text-gray-900">Phone</p><p className="text-gray-500 text-sm">' + str(data.get("phone","")) + '</p></div></div>\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">📍</span><div><p className="font-semibold text-gray-900">Address</p><p className="text-gray-500 text-sm">' + str(data.get("address","")) + '</p></div></div>\n'
#         '              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100"><span className="text-2xl">🕐</span><div><p className="font-semibold text-gray-900">Hours</p><p className="text-gray-500 text-sm">' + str(data.get("hours","")) + '</p></div></div>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">\n'
#         '            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>\n'
#         '            <div className="space-y-4">\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>'
#         '<input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Your name" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="your@email.com" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-1">Message</label>'
#         '<textarea rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40 resize-none" placeholder="How can we help?" /></div>\n'
#         '              <button className="w-full py-3 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition">Send Message</button>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#     )


# # ---- ABOUT TEAM ----
# def _section_about_team(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with company info and team:\n"
#         '{"story":"2 sentences about company mission","team":['
#         '{"name":"Full Name","role":"Job Title","bio":"one sentence"}]}',
#         {"story":"We are building the future of " + ctx.industry + ".",
#          "team":[{"name":"Alex Johnson","role":"CEO & Co-founder","bio":"10 years building great products."},
#                  {"name":"Sara Lee","role":"CTO","bio":"Former engineer at top tech companies."},
#                  {"name":"Mike Chen","role":"Head of Design","bio":"Passionate about user-centered design."}]}
#     )
#     g = _gradient(ctx.primary)
#     team_cards = "".join(
#         '\n          <div className="text-center">'
#         '\n            <div className="w-20 h-20 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">'
#         + str(m.get("name","?"))[:1].upper() + (str(m.get("name","?")).split()[-1][:1].upper() if len(str(m.get("name","?")).split()) > 1 else "") + '</div>'
#         '\n            <h3 className="font-bold text-gray-900">' + str(m.get("name","")) + '</h3>'
#         '\n            <p className="text-sm font-medium text-indigo-600 mb-1">' + str(m.get("role","")) + '</p>'
#         '\n            <p className="text-gray-500 text-sm">' + str(m.get("bio","")) + '</p>'
#         '\n          </div>'
#         for m in (data.get("team",[]) if isinstance(data, dict) else [])
#     )
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-24 px-6 text-white text-center">\n'
#         '        <div className="container mx-auto max-w-3xl mb-20">\n'
#         '          <h1 className="text-5xl font-black mb-6">About Us</h1>\n'
#         '          <p className="text-white/80 text-xl leading-relaxed">' + str(data.get("story","") if isinstance(data,dict) else "") + '</p>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '      <section className="py-20 bg-white px-6">\n'
#         '        <div className="container mx-auto max-w-4xl">\n'
#         '          <h2 className="text-3xl font-black text-center text-gray-900 mb-14">Meet the Team</h2>\n'
#         '          <div className="grid md:grid-cols-3 gap-10">' + team_cards + '\n          </div>\n        </div>\n      </section>\n'
#     )


# # ---- MENU ----
# def _section_menu(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with restaurant menu:\n"
#         '{"categories":["Starters","Mains","Desserts","Drinks"],'
#         '"items":[{"name":"Dish Name","desc":"short description","price":"$12","category":"Starters","icon":"🍜","veg":true,"spicy":false,"special":false}]}',
#         {"categories":["Starters","Mains","Desserts","Drinks"],
#          "items":[
#              {"name":"Spring Rolls","desc":"Crispy golden rolls with vegetables","price":"$8","category":"Starters","icon":"🥟","veg":True,"spicy":False,"special":False},
#              {"name":"Grilled Salmon","desc":"Fresh Atlantic salmon with herbs","price":"$24","category":"Mains","icon":"🐟","veg":False,"spicy":False,"special":True},
#              {"name":"Spicy Ramen","desc":"Rich broth with noodles and egg","price":"$16","category":"Mains","icon":"🍜","veg":False,"spicy":True,"special":False},
#              {"name":"Tiramisu","desc":"Classic Italian dessert","price":"$9","category":"Desserts","icon":"🍰","veg":True,"spicy":False,"special":False},
#              {"name":"Fresh Juice","desc":"Seasonal fruit blend","price":"$6","category":"Drinks","icon":"🧃","veg":True,"spicy":False,"special":False},
#          ]}
#     )
#     if not isinstance(data, dict): data = {}
#     cats  = data.get("categories", ["Starters","Mains","Desserts","Drinks"])
#     items = data.get("items", [])
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)

#     item_cards = ""
#     for item in items:
#         badges = ""
#         if item.get("veg"):     badges += '<span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">🌱 Veg</span>'
#         if item.get("spicy"):   badges += '<span className="px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded-full ml-1">🌶️ Spicy</span>'
#         if item.get("special"): badges += '<span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-700 rounded-full ml-1">⭐ Special</span>'
#         item_cards += (
#             '\n        <div className="menu-item bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow" data-category="' + str(item.get("category","")) + '">'
#             '\n          <div className="flex items-start gap-4">'
#             '\n            <div className="text-4xl flex-shrink-0">' + str(item.get("icon","🍽️")) + '</div>'
#             '\n            <div className="flex-1">'
#             '\n              <div className="flex justify-between items-start mb-1">'
#             '\n                <h3 className="font-bold text-gray-900">' + str(item.get("name","")) + '</h3>'
#             '\n                <span className="font-bold text-' + ac + '">' + str(item.get("price","")) + '</span>'
#             '\n              </div>'
#             '\n              <p className="text-gray-500 text-sm mb-2">' + str(item.get("desc","")) + '</p>'
#             '\n              <div className="flex flex-wrap gap-1">' + badges + '</div>'
#             '\n            </div>'
#             '\n          </div>'
#             '\n        </div>'
#         )

#     cat_buttons = "".join(
#         '<button className="px-5 py-2 rounded-full text-sm font-semibold bg-' + ac + ' text-white">' + str(c) + '</button>\n          '
#         for c in cats
#     )

#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-16 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-3">Our Menu</h1>\n'
#         '        <p className="text-white/80 text-lg">Fresh ingredients, authentic flavors</p>\n'
#         '      </section>\n'
#         '      <section className="py-10 bg-gray-50 sticky top-0 z-30 border-b border-gray-200 px-6">\n'
#         '        <div className="container mx-auto flex flex-wrap gap-3 justify-center">\n'
#         '          ' + cat_buttons +
#         '\n        </div>\n'
#         '      </section>\n'
#         '      <section className="py-12 px-6">\n'
#         '        <div className="container mx-auto grid md:grid-cols-2 gap-5">' + item_cards + '\n        </div>\n      </section>\n'
#     )


# # ---- BOOKING FORM ----
# def _section_booking(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON with booking info:\n"
#         '{"name":"' + ctx.app_name + '","occasions":["Birthday","Anniversary","Business Dinner","Date Night","None"],"times":["6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"]}',
#         {"name":ctx.app_name,"occasions":["Birthday","Anniversary","Business Dinner","Date Night","None"],
#          "times":["6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM"]}
#     )
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     times = data.get("times",["6:00 PM","7:00 PM","8:00 PM","9:00 PM"]) if isinstance(data,dict) else []
#     occasions = data.get("occasions",["Birthday","Anniversary","None"]) if isinstance(data,dict) else []
#     time_btns = "".join(
#         '<button className="px-4 py-2 rounded-xl border-2 border-gray-200 text-sm font-medium hover:border-' + ac + ' hover:text-' + ac + ' transition">' + str(t) + '</button>\n              '
#         for t in times
#     )
#     occasion_opts = "".join('<option>' + str(o) + '</option>\n                ' for o in occasions)
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-16 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-3">Make a Reservation</h1>\n'
#         '        <p className="text-white/80 text-lg">Book your table in seconds</p>\n'
#         '      </section>\n'
#         '      <section className="py-16 px-6">\n'
#         '        <div className="container mx-auto max-w-3xl">\n'
#         '          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-10">\n'
#         '            <div className="grid md:grid-cols-2 gap-6">\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Date</label>'
#         '<input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Party Size</label>'
#         '<div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2"><button className="w-8 h-8 rounded-lg bg-gray-100 font-bold">-</button><span className="flex-1 text-center font-semibold">2</span><button className="w-8 h-8 rounded-lg bg-gray-100 font-bold">+</button></div></div>\n'
#         '              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>'
#         '<div className="flex flex-wrap gap-2">' + time_btns + '</div></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>'
#         '<select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none">' + occasion_opts + '</select></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Name</label>'
#         '<input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Full name" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="your@email.com" /></div>\n'
#         '              <div><label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>'
#         '<input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="+1 555 000 0000" /></div>\n'
#         '              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>'
#         '<textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40 resize-none" placeholder="Allergies, celebrations, seating preferences..." /></div>\n'
#         '            </div>\n'
#         '            <button className="w-full mt-8 py-4 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition text-base">Confirm Reservation</button>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#     )


# # ---- FAQ ----
# def _section_faq(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Return JSON array of 6 FAQs specific to this product:\n"
#         '[{"q":"Question?","a":"Answer."}]',
#         [{"q":"How do I get started?","a":"Sign up for a free account and follow the setup guide."},
#          {"q":"What payment methods are accepted?","a":"We accept all major credit cards and PayPal."},
#          {"q":"Can I cancel anytime?","a":"Yes, you can cancel your subscription at any time."},
#          {"q":"Is there a free trial?","a":"Yes, we offer a 14-day free trial with no credit card required."},
#          {"q":"How secure is my data?","a":"We use enterprise-grade encryption to protect all data."},
#          {"q":"Do you offer customer support?","a":"Yes, we offer 24/7 support via chat and email."}]
#     )
#     if not isinstance(data, list): data = []
#     g = _gradient(ctx.primary)
#     items = "".join(
#         '\n        <details className="border border-gray-200 rounded-2xl px-6 py-4 bg-white shadow-sm group">'
#         '\n          <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">'
#         + str(item.get("q","")) +
#         '<span className="text-gray-400 ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>'
#         '</summary>'
#         '\n          <p className="mt-3 text-gray-500 text-sm leading-relaxed">' + str(item.get("a","")) + '</p>'
#         '\n        </details>'
#         for item in data
#     )
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-20 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">Frequently Asked Questions</h1>\n'
#         '        <p className="text-white/80 text-lg">Everything you need to know</p>\n'
#         '      </section>\n'
#         '      <section className="py-16 bg-gray-50 px-6">\n'
#         '        <div className="container mx-auto max-w-2xl space-y-4">' + items + '\n        </div>\n      </section>\n'
#     )


# # ---- GENERIC SECTIONS ----
# def _section_generic(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page name: " + ctx.page + "\n"
#         "Return JSON for this page:\n"
#         '{"headline":"page headline","subheadline":"subtitle",'
#         '"sections":[{"icon":"emoji","title":"section title","body":"2 sentence description"}]}',
#         {"headline": ctx.page, "subheadline": "Coming soon",
#          "sections":[{"icon":"✦","title":"Section One","body":"Content here."},
#                      {"icon":"🔥","title":"Section Two","body":"More content here."}]}
#     )
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     secs = data.get("sections",[]) if isinstance(data,dict) else []
#     cards = "".join(
#         '\n        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">'
#         '\n          <div className="text-4xl mb-4">' + str(s.get("icon","✦")) + '</div>'
#         '\n          <h3 className="text-xl font-bold text-gray-900 mb-3">' + str(s.get("title","")) + '</h3>'
#         '\n          <p className="text-gray-500 leading-relaxed">' + str(s.get("body","")) + '</p>'
#         '\n        </div>'
#         for s in secs
#     )
#     return (
#         '      <section className="bg-gradient-to-br ' + g + ' py-24 px-6 text-white text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>\n'
#         '        <p className="text-white/80 text-lg max-w-xl mx-auto">' + str(data.get("subheadline","") if isinstance(data,dict) else "") + '</p>\n'
#         '      </section>\n'
#         '      <section className="py-20 bg-gray-50 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">' + cards + '\n        </div>\n      </section>\n'
#     )


# # ---- CTA SECTION ----
# def _section_cta(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         'Return JSON: {"headline":"action headline","button":"CTA label"}',
#         {"headline":"Ready to get started?","button":"Start for Free"}
#     )
#     ac = _accent(ctx.primary)
#     return (
#         '      <section className="py-20 bg-white text-center px-6">\n'
#         '        <div className="container mx-auto max-w-2xl">\n'
#         '          <h2 className="text-4xl font-black text-gray-900 mb-6">' + str(data.get("headline","") if isinstance(data,dict) else "") + '</h2>\n'
#         '          <a href="#" className="inline-block px-10 py-4 bg-' + ac + ' text-white font-bold rounded-2xl hover:opacity-90 transition text-lg shadow-lg">'
#         + str(data.get("button","Get Started") if isinstance(data,dict) else "Get Started") + '</a>\n'
#         '        </div>\n      </section>\n'
#     )


# # ==============================================================
# # Page assemblers
# # ==============================================================

# def _assemble(ctx: Ctx, sections_html: str) -> str:
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen">\n'
#         + sections_html +
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _assemble_dashboard(ctx: Ctx, sections_html: str) -> str:
#     g  = _gradient(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <h1 className="text-2xl font-black text-white">Dashboard</h1>\n'
#         '        <p className="text-white/70 text-sm">Welcome back — here\'s what\'s happening</p>\n'
#         '      </div>\n'
#         '      <div className="p-6">\n'
#         + sections_html +
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# # ==============================================================
# # Page builders — define section order per type
# # ==============================================================

# def _build_landing(ctx: Ctx) -> str:
#     return _assemble(ctx,
#         _section_hero(ctx) +
#         _section_stats(ctx) +
#         _section_features(ctx) +
#         _section_testimonial(ctx) +
#         _section_cta(ctx)
#     )


# def _build_dashboard(ctx: Ctx) -> str:
#     return _assemble_dashboard(ctx,
#         _section_dash_metrics(ctx) +
#         _section_dash_chart(ctx) +
#         _section_dash_table(ctx)
#     )


# def _build_analytics(ctx: Ctx) -> str:
#     return _assemble_dashboard(ctx,
#         _section_dash_metrics(ctx) +
#         _section_dash_chart(ctx) +
#         _section_dash_table(ctx)
#     )


# def _build_pricing(ctx: Ctx) -> str:
#     g = _gradient(ctx.primary)
#     header = (
#         '      <section className="py-20 bg-gradient-to-br ' + g + ' text-white text-center px-6">\n'
#         '        <h1 className="text-5xl font-black mb-4">Simple, Transparent Pricing</h1>\n'
#         '        <p className="text-white/80 text-lg">No hidden fees. Cancel anytime.</p>\n'
#         '      </section>\n'
#     )
#     return _assemble(ctx, header + _section_pricing_plans(ctx) + _section_faq(ctx))


# def _build_contact(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_contact_form(ctx))


# def _build_about(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_about_team(ctx) + _section_features(ctx) + _section_cta(ctx))


# def _build_features(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_features(ctx) + _section_stats(ctx) + _section_cta(ctx))


# def _build_blog(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_features(ctx) + _section_cta(ctx))


# def _build_faq(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_faq(ctx) + _section_cta(ctx))


# def _build_auth_login(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen grid md:grid-cols-2">\n'
#         '      <div className="bg-gradient-to-br ' + g + ' p-12 flex flex-col justify-center text-white hidden md:flex">\n'
#         '        <h1 className="text-4xl font-black mb-4">' + ctx.app_name + '</h1>\n'
#         '        <p className="text-white/80 text-lg mb-8">' + ctx.user_prompt[:100] + '</p>\n'
#         '        <ul className="space-y-3">\n'
#         '          <li className="flex items-center gap-3"><span className="text-green-300">✓</span>Secure & encrypted</li>\n'
#         '          <li className="flex items-center gap-3"><span className="text-green-300">✓</span>No credit card required</li>\n'
#         '          <li className="flex items-center gap-3"><span className="text-green-300">✓</span>Cancel anytime</li>\n'
#         '        </ul>\n'
#         '      </div>\n'
#         '      <div className="flex items-center justify-center p-12 bg-white">\n'
#         '        <div className="w-full max-w-md">\n'
#         '          <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome back</h2>\n'
#         '          <p className="text-gray-500 mb-8">Sign in to your account</p>\n'
#         '          <div className="space-y-4">\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="you@example.com" /></div>\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label>'
#         '<input type="password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="••••••••" /></div>\n'
#         '            <button className="w-full py-3 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition">Sign In</button>\n'
#         '            <p className="text-center text-sm text-gray-500">Don\'t have an account? <a href="/signup" className="text-' + ac + ' font-semibold">Sign up</a></p>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_auth_signup(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen grid md:grid-cols-2">\n'
#         '      <div className="bg-gradient-to-br ' + g + ' p-12 flex-col justify-center text-white hidden md:flex">\n'
#         '        <h1 className="text-4xl font-black mb-4">' + ctx.app_name + '</h1>\n'
#         '        <p className="text-white/80 text-xl mb-8">Join thousands of happy users today.</p>\n'
#         '      </div>\n'
#         '      <div className="flex items-center justify-center p-12 bg-white">\n'
#         '        <div className="w-full max-w-md">\n'
#         '          <h2 className="text-3xl font-black text-gray-900 mb-2">Create your account</h2>\n'
#         '          <p className="text-gray-500 mb-8">Free forever. No credit card needed.</p>\n'
#         '          <div className="space-y-4">\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>'
#         '<input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Your name" /></div>\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label>'
#         '<input type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="you@example.com" /></div>\n'
#         '            <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label>'
#         '<input type="password" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40" placeholder="Min. 8 characters" /></div>\n'
#         '            <button className="w-full py-3 bg-' + ac + ' text-white font-bold rounded-xl hover:opacity-90 transition">Create Account</button>\n'
#         '            <p className="text-center text-sm text-gray-500">Already have an account? <a href="/login" className="text-' + ac + ' font-semibold">Sign in</a></p>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_menu(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_menu(ctx) + _section_cta(ctx))


# def _build_booking(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_booking(ctx))


# def _build_generic(ctx: Ctx) -> str:
#     return _assemble(ctx, _section_hero(ctx) + _section_generic(ctx) + _section_cta(ctx))


# # ==============================================================
# # New page builders for expanded classifier
# # ==============================================================

# def _build_chat(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for a chat/messaging page:\n"
#         '{"headline":"page headline","subtitle":"subtitle","features":['
#         '{"icon":"emoji","title":"feature","desc":"description"}],'
#         '"conversations":[{"name":"Group/User name","last":"last message preview","time":"time","unread":0}]}',
#         {"headline": ctx.page, "subtitle": "Connect with your community",
#          "features": [
#              {"icon": "💬", "title": "Group Chats", "desc": "Create rooms and invite your squad to chat in real-time."},
#              {"icon": "🔒", "title": "Private Messages", "desc": "One-on-one conversations, fully encrypted."},
#              {"icon": "📎", "title": "File Sharing", "desc": "Share photos, videos, and documents instantly."},
#              {"icon": "🔔", "title": "Smart Notifications", "desc": "Get notified when it matters, stay quiet when it doesn't."},
#              {"icon": "😄", "title": "Reactions & Emojis", "desc": "Express yourself with a full emoji keyboard."},
#              {"icon": "🌐", "title": "Works Everywhere", "desc": "Desktop, mobile, tablet — seamless across devices."},
#          ],
#          "conversations": [
#              {"name": "Design Team", "last": "Alice: Great work everyone! 🎉", "time": "2m", "unread": 3},
#              {"name": "Sarah Johnson", "last": "Are you free for a call?", "time": "15m", "unread": 1},
#              {"name": "Project Alpha", "last": "Bob: Deployment done ✅", "time": "1h", "unread": 0},
#              {"name": "Marketing", "last": "Campaign is live!", "time": "2h", "unread": 0},
#              {"name": "Mike Chen", "last": "Thanks for the help!", "time": "3h", "unread": 0},
#          ]}
#     )
#     g   = _gradient(ctx.primary)
#     ac  = _accent(ctx.primary)

#     convos = data.get("conversations", []) if isinstance(data, dict) else []
#     features = data.get("features", []) if isinstance(data, dict) else []

#     convo_items = "".join(
#         '\n              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">'
#         '\n                <div className="w-10 h-10 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white font-bold text-sm flex-shrink-0">'
#         + str(c.get("name", "G"))[:1].upper() + (str(c.get("name", "G")).split()[-1][:1].upper() if len(str(c.get("name","G")).split()) > 1 else "") +
#         '</div>'
#         '\n                <div className="flex-1 min-w-0">'
#         '\n                  <div className="flex justify-between items-center">'
#         '\n                    <span className="text-sm font-semibold text-gray-900 truncate">' + str(c.get("name","")) + '</span>'
#         '\n                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">' + str(c.get("time","")) + '</span>'
#         '\n                  </div>'
#         '\n                  <div className="flex justify-between items-center mt-0.5">'
#         '\n                    <p className="text-xs text-gray-500 truncate">' + str(c.get("last","")) + '</p>'
#         + ('\n                    <span className="w-5 h-5 rounded-full bg-' + ac + ' text-white text-xs flex items-center justify-center flex-shrink-0 ml-2 font-bold">' + str(c.get("unread",0)) + '</span>' if int(c.get("unread",0)) > 0 else '') +
#         '\n                  </div>'
#         '\n                </div>'
#         '\n              </div>'
#         for c in convos
#     )

#     feat_cards = "".join(
#         '\n          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">'
#         '\n            <div className="text-3xl mb-3">' + str(f.get("icon","💬")) + '</div>'
#         '\n            <h3 className="font-bold text-gray-900 mb-2">' + str(f.get("title","")) + '</h3>'
#         '\n            <p className="text-gray-500 text-sm leading-relaxed">' + str(f.get("desc","")) + '</p>'
#         '\n          </div>'
#         for f in features
#     )

#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen" style={{ background: "#f8fafb" }}>\n'
#         '\n'
#         '      {/* ── Hero ── */}\n'
#         '      <section className="bg-gradient-to-br ' + g + ' text-white py-20 px-6">\n'
#         '        <div className="container mx-auto max-w-4xl text-center">\n'
#         '          <h1 className="text-5xl font-black mb-4 tracking-tight">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>\n'
#         '          <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">' + str(data.get("subtitle","") if isinstance(data,dict) else "") + '</p>\n'
#         '          <button className="px-8 py-3.5 bg-white text-' + ac + ' font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">Start Chatting →</button>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '\n'
#         '      {/* ── Live chat preview + sidebar ── */}\n'
#         '      <section className="py-16 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl">\n'
#         '          <div className="grid lg:grid-cols-5 gap-6">\n'
#         '\n'
#         '            {/* Conversations sidebar */}\n'
#         '            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">\n'
#         '              <div className="p-4 border-b border-gray-100 flex items-center justify-between">\n'
#         '                <h2 className="font-bold text-gray-900">Messages</h2>\n'
#         '                <button className="w-8 h-8 rounded-lg bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-lg font-bold shadow">+</button>\n'
#         '              </div>\n'
#         '              <div className="p-2 space-y-0.5">' + convo_items + '\n              </div>\n'
#         '            </div>\n'
#         '\n'
#         '            {/* Chat window */}\n'
#         '            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden" style={{ minHeight: "480px" }}>\n'
#         '              {/* Chat header */}\n'
#         '              <div className="p-4 border-b border-gray-100 flex items-center gap-3">\n'
#         '                <div className="w-9 h-9 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white font-bold text-sm">DT</div>\n'
#         '                <div>\n'
#         '                  <p className="font-semibold text-gray-900 text-sm">Design Team</p>\n'
#         '                  <p className="text-xs text-green-500">● 5 online</p>\n'
#         '                </div>\n'
#         '                <div className="ml-auto flex gap-2">\n'
#         '                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition text-sm">📞</button>\n'
#         '                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition text-sm">📹</button>\n'
#         '                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition text-sm">⋯</button>\n'
#         '                </div>\n'
#         '              </div>\n'
#         '              {/* Messages */}\n'
#         '              <div className="flex-1 p-4 space-y-3 overflow-y-auto">\n'
#         '                <div className="flex gap-2 items-end">\n'
#         '                  <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">A</div>\n'
#         '                  <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">\n'
#         '                    <p className="text-sm text-gray-800">Hey team! How is the new design coming along?</p>\n'
#         '                    <p className="text-xs text-gray-400 mt-1">10:24 AM</p>\n'
#         '                  </div>\n'
#         '                </div>\n'
#         '                <div className="flex gap-2 items-end">\n'
#         '                  <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">B</div>\n'
#         '                  <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">\n'
#         '                    <p className="text-sm text-gray-800">Almost done! Just finalizing the color palette</p>\n'
#         '                    <p className="text-xs text-gray-400 mt-1">10:26 AM</p>\n'
#         '                  </div>\n'
#         '                </div>\n'
#         '                <div className="flex gap-2 items-end justify-end">\n'
#         '                  <div className="bg-gradient-to-br ' + g + ' rounded-2xl rounded-br-none px-4 py-2 max-w-xs">\n'
#         '                    <p className="text-sm text-white">Looks amazing! Great work everyone!</p>\n'
#         '                    <p className="text-xs text-white/60 mt-1">10:28 AM ✓✓</p>\n'
#         '                  </div>\n'
#         '                  <div className="w-7 h-7 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-xs font-bold">Y</div>\n'
#         '                </div>\n'
#         '                <div className="flex gap-2 items-end">\n'
#         '                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">C</div>\n'
#         '                  <div className="bg-gray-100 rounded-2xl rounded-bl-none px-4 py-2 max-w-xs">\n'
#         '                    <p className="text-sm text-gray-800">Sharing final files now!</p>\n'
#         '                    <p className="text-xs text-gray-400 mt-1">10:31 AM</p>\n'
#         '                  </div>\n'
#         '                </div>\n'
#         '              </div>\n'
#         '              {/* Input */}\n'
#         '              <div className="p-3 border-t border-gray-100 flex items-center gap-2">\n'
#         '                <button className="p-2 text-gray-400 hover:text-gray-600 transition text-lg">📎</button>\n'
#         '                <button className="p-2 text-gray-400 hover:text-gray-600 transition text-lg">😊</button>\n'
#         '                <input type="text" placeholder="Type a message…" className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/40 focus:border-' + ac + '" />\n'
#         '                <button className="w-9 h-9 rounded-xl bg-gradient-to-br ' + g + ' flex items-center justify-center text-white shadow hover:opacity-90 transition">→</button>\n'
#         '              </div>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '\n'
#         '      {/* ── Features ── */}\n'
#         '      <section className="py-16 bg-white px-6">\n'
#         '        <div className="container mx-auto max-w-5xl">\n'
#         '          <h2 className="text-3xl font-black text-gray-900 text-center mb-3">Everything you need to connect</h2>\n'
#         '          <p className="text-center text-gray-500 mb-12">Built for teams, friends, and communities</p>\n'
#         '          <div className="grid md:grid-cols-3 gap-5">' + feat_cards + '\n          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '\n'
#         '      {/* ── CTA ── */}\n'
#         '      <section className="py-20 bg-gradient-to-br ' + g + ' text-white text-center px-6">\n'
#         '        <div className="container mx-auto max-w-xl">\n'
#         '          <h2 className="text-4xl font-black mb-4">Ready to start chatting?</h2>\n'
#         '          <p className="text-white/80 mb-8">Join thousands of teams already communicating better</p>\n'
#         '          <button className="px-10 py-4 bg-white text-' + ac + ' font-bold rounded-2xl text-lg shadow-lg hover:scale-105 transition-transform">Get Started Free →</button>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_users_list(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for a users/people list page:\n"
#         '{"headline":"page title","subtitle":"subtitle",'
#         '"users":[{"name":"Full Name","role":"Role","dept":"Department","status":"Active","avatar":"initials"}],'
#         '"stats":[{"value":"100+","label":"Total"}]}',
#         {"headline": ctx.page, "subtitle": "Manage and view all members",
#          "stats": [{"value": "248", "label": "Total"}, {"value": "186", "label": "Active"},
#                    {"value": "12", "label": "New This Month"}, {"value": "98%", "label": "Retention"}],
#          "users": [
#              {"name": "Alice Thompson", "role": "Senior Developer", "dept": "Engineering", "status": "Active", "avatar": "AT"},
#              {"name": "Bob Martinez",   "role": "Product Manager",  "dept": "Product",     "status": "Active", "avatar": "BM"},
#              {"name": "Carol White",    "role": "UX Designer",      "dept": "Design",      "status": "Active", "avatar": "CW"},
#              {"name": "Dave Chen",      "role": "Data Analyst",     "dept": "Analytics",   "status": "Away",   "avatar": "DC"},
#              {"name": "Eve Davis",      "role": "Marketing Lead",   "dept": "Marketing",   "status": "Active", "avatar": "ED"},
#              {"name": "Frank Lee",      "role": "DevOps Engineer",  "dept": "Engineering", "status": "Offline","avatar": "FL"},
#          ]}
#     )
#     g   = _gradient(ctx.primary)
#     ac  = _accent(ctx.primary)
#     stats   = data.get("stats", []) if isinstance(data, dict) else []
#     users   = data.get("users", []) if isinstance(data, dict) else []

#     status_style = {"Active": "bg-emerald-100 text-emerald-700", "Away": "bg-yellow-100 text-yellow-700", "Offline": "bg-gray-100 text-gray-500"}

#     stat_cards = "".join(
#         '\n        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">'
#         '\n          <div className="text-3xl font-black text-gray-900">' + str(s.get("value","")) + '</div>'
#         '\n          <div className="text-sm text-gray-500 mt-1">' + str(s.get("label","")) + '</div>'
#         '\n        </div>'
#         for s in stats
#     )

#     user_rows = "".join(
#         '\n            <tr className="border-t border-gray-50 hover:bg-gray-50/60 transition-colors">'
#         '\n              <td className="py-3 px-6"><div className="flex items-center gap-3">'
#         '<div className="w-9 h-9 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-xs font-bold flex-shrink-0">' + str(u.get("avatar","?")) + '</div>'
#         '<div><p className="font-semibold text-gray-900 text-sm">' + str(u.get("name","")) + '</p>'
#         '<p className="text-xs text-gray-400">' + str(u.get("role","")) + '</p></div></div></td>'
#         '\n              <td className="py-3 px-6 text-sm text-gray-500 hidden md:table-cell">' + str(u.get("dept","")) + '</td>'
#         '\n              <td className="py-3 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-semibold ' + status_style.get(str(u.get("status","Active")), "bg-gray-100 text-gray-500") + '">' + str(u.get("status","")) + '</span></td>'
#         '\n              <td className="py-3 px-6"><button className="text-gray-400 hover:text-gray-700 text-lg">⋯</button></td>'
#         '\n            </tr>'
#         for u in users
#     )

#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <div className="container mx-auto max-w-7xl flex items-center justify-between">\n'
#         '          <div>\n'
#         '            <h1 className="text-2xl font-black text-white">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>\n'
#         '            <p className="text-white/60 text-sm mt-1">' + str(data.get("subtitle","") if isinstance(data,dict) else "") + '</p>\n'
#         '          </div>\n'
#         '          <button className="px-5 py-2.5 bg-white text-' + ac + ' font-bold rounded-xl text-sm shadow hover:scale-105 transition-transform">+ Add New</button>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '      <div className="container mx-auto max-w-7xl px-6 py-6">\n'
#         '        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">' + stat_cards + '\n        </div>\n'
#         '        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">\n'
#         '          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">\n'
#         '            <h3 className="font-bold text-gray-900">All Members</h3>\n'
#         '            <input type="text" placeholder="Search…" className="border border-gray-200 rounded-xl px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/30 w-48" />\n'
#         '          </div>\n'
#         '          <table className="w-full">\n'
#         '            <thead><tr className="bg-gray-50">'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase">Name</th>'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase hidden md:table-cell">Department</th>'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase">Status</th>'
#         '<th className="py-3 px-6 w-10"></th>'
#         '</tr></thead>\n'
#         '            <tbody>' + user_rows + '\n            </tbody>\n'
#         '          </table>\n'
#         '          <div className="px-6 py-3 border-t border-gray-50 flex items-center justify-between">\n'
#         '            <p className="text-sm text-gray-400">Showing ' + str(len(users)) + ' members</p>\n'
#         '            <div className="flex gap-1">' +
#         "".join('<button className="w-8 h-8 rounded-lg text-sm font-semibold ' + ('bg-' + ac + ' text-white' if i==0 else 'text-gray-500 hover:bg-gray-100') + '">' + str(i+1) + '</button>' for i in range(3)) +
#         '</div>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_tracker(ctx: Ctx) -> str:
#     """Attendance / tracking page."""
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for an attendance/tracking page:\n"
#         '{"headline":"page title","subtitle":"subtitle",'
#         '"records":[{"name":"Name","id":"ID","date":"date","status":"Present","time":"09:00","dept":"Dept"}],'
#         '"stats":[{"value":"95%","label":"Attendance Rate"}]}',
#         {"headline": ctx.page, "subtitle": "Track and manage attendance records",
#          "stats": [{"value":"95%","label":"Attendance Rate"},{"value":"248","label":"Total Students"},
#                    {"value":"12","label":"Absent Today"},{"value":"236","label":"Present Today"}],
#          "records": [
#              {"name":"Alice Thompson","id":"STU001","date":"2026-03-14","status":"Present","time":"08:55","dept":"Grade 10A"},
#              {"name":"Bob Martinez",  "id":"STU002","date":"2026-03-14","status":"Present","time":"09:01","dept":"Grade 10A"},
#              {"name":"Carol White",   "id":"STU003","date":"2026-03-14","status":"Absent", "time":"—",    "dept":"Grade 10B"},
#              {"name":"Dave Chen",     "id":"STU004","date":"2026-03-14","status":"Late",   "time":"09:22","dept":"Grade 10B"},
#              {"name":"Eve Davis",     "id":"STU005","date":"2026-03-14","status":"Present","time":"08:48","dept":"Grade 11A"},
#          ]}
#     )
#     g   = _gradient(ctx.primary)
#     ac  = _accent(ctx.primary)
#     stats   = data.get("stats", []) if isinstance(data, dict) else []
#     records = data.get("records", []) if isinstance(data, dict) else []
#     status_style = {
#         "Present": "bg-emerald-100 text-emerald-700",
#         "Absent":  "bg-red-100 text-red-700",
#         "Late":    "bg-yellow-100 text-yellow-700",
#     }
#     stat_cards = "".join(
#         '\n        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">'
#         '<div className="text-2xl font-black text-gray-900 mb-1">' + str(s.get("value","")) + '</div>'
#         '<div className="text-sm text-gray-500">' + str(s.get("label","")) + '</div></div>'
#         for s in stats
#     )
#     rows = "".join(
#         '\n            <tr className="border-t border-gray-50 hover:bg-gray-50/60 transition-colors">'
#         '<td className="py-3 px-6"><div className="flex items-center gap-3">'
#         '<div className="w-8 h-8 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-xs font-bold">' + str(r.get("name","?"))[:1].upper() + (str(r.get("name","?")).split()[-1][:1].upper() if len(str(r.get("name","?")).split()) > 1 else "") + '</div>'
#         '<div><p className="font-semibold text-gray-900 text-sm">' + str(r.get("name","")) + '</p>'
#         '<p className="text-xs text-gray-400">' + str(r.get("id","")) + '</p></div></div></td>'
#         '<td className="py-3 px-6 text-sm text-gray-500 hidden md:table-cell">' + str(r.get("dept","")) + '</td>'
#         '<td className="py-3 px-6 text-sm text-gray-500 hidden lg:table-cell">' + str(r.get("date","")) + '</td>'
#         '<td className="py-3 px-6 text-sm font-mono text-gray-600">' + str(r.get("time","—")) + '</td>'
#         '<td className="py-3 px-6"><span className="px-2.5 py-1 rounded-full text-xs font-semibold ' + status_style.get(str(r.get("status","Present")), "bg-gray-100 text-gray-500") + '">' + str(r.get("status","")) + '</span></td>'
#         '</tr>'
#         for r in records
#     )
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <div className="container mx-auto max-w-7xl flex items-center justify-between">\n'
#         '          <div><h1 className="text-2xl font-black text-white">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>'
#         '<p className="text-white/60 text-sm mt-1">' + str(data.get("subtitle","") if isinstance(data,dict) else "") + '</p></div>\n'
#         '          <div className="flex gap-2">'
#         '<input type="date" className="border-0 bg-white/20 text-white rounded-xl px-3 py-2 text-sm outline-none" />'
#         '<button className="px-4 py-2 bg-white text-' + ac + ' font-bold rounded-xl text-sm shadow">Export</button>'
#         '</div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '      <div className="container mx-auto max-w-7xl px-6 py-6">\n'
#         '        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">' + stat_cards + '\n        </div>\n'
#         '        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">\n'
#         '          <div className="px-6 py-4 border-b border-gray-100"><h3 className="font-bold text-gray-900">Attendance Records</h3></div>\n'
#         '          <table className="w-full"><thead><tr className="bg-gray-50">'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase">Name</th>'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase hidden md:table-cell">Class</th>'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase hidden lg:table-cell">Date</th>'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase">Time</th>'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase">Status</th>'
#         '</tr></thead>\n'
#         '          <tbody>' + rows + '\n          </tbody></table>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_grades(ctx: Ctx) -> str:
#     """Gradebook page."""
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for a gradebook page:\n"
#         '{"headline":"page title","subtitle":"subtitle",'
#         '"subjects":["Math","Science","English","History","PE"],'
#         '"students":[{"name":"Name","id":"ID","grades":{"Math":92,"Science":88,"English":95,"History":79,"PE":100},"avg":91,"grade":"A"}]}',
#         {"headline": ctx.page, "subtitle": "View and manage student grades",
#          "subjects": ["Mathematics","Science","English","History","Physical Ed"],
#          "students": [
#              {"name":"Alice Thompson","id":"STU001","grades":{"Mathematics":94,"Science":89,"English":97,"History":82,"Physical Ed":100},"avg":92.4,"grade":"A"},
#              {"name":"Bob Martinez",  "id":"STU002","grades":{"Mathematics":78,"Science":85,"English":72,"History":88,"Physical Ed":95},"avg":83.6,"grade":"B"},
#              {"name":"Carol White",   "id":"STU003","grades":{"Mathematics":96,"Science":94,"English":91,"History":90,"Physical Ed":88},"avg":91.8,"grade":"A"},
#              {"name":"Dave Chen",     "id":"STU004","grades":{"Mathematics":65,"Science":70,"English":68,"History":72,"Physical Ed":80},"avg":71.0,"grade":"C"},
#          ]}
#     )
#     g        = _gradient(ctx.primary)
#     ac       = _accent(ctx.primary)
#     subjects = data.get("subjects", []) if isinstance(data, dict) else []
#     students = data.get("students", []) if isinstance(data, dict) else []
#     grade_color = {"A":"bg-emerald-100 text-emerald-700","B":"bg-blue-100 text-blue-700",
#                    "C":"bg-yellow-100 text-yellow-700","D":"bg-orange-100 text-orange-700","F":"bg-red-100 text-red-700"}
#     th_cells = "".join('<th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">' + str(s) + '</th>' for s in subjects)
#     rows = "".join(
#         '\n            <tr className="border-t border-gray-50 hover:bg-gray-50/60 transition-colors">'
#         '<td className="py-3 px-6"><div className="flex items-center gap-3">'
#         '<div className="w-8 h-8 rounded-full bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-xs font-bold">' + str(st.get("name","?"))[:1].upper() + (str(st.get("name","?")).split()[-1][:1].upper() if len(str(st.get("name","?")).split()) > 1 else "") + '</div>'
#         '<div><p className="font-semibold text-gray-900 text-sm">' + str(st.get("name","")) + '</p>'
#         '<p className="text-xs text-gray-400">' + str(st.get("id","")) + '</p></div></div></td>' +
#         "".join('<td className="py-3 px-4 text-sm font-semibold text-gray-700">' + str(st.get("grades",{}).get(s,"—")) + '</td>' for s in subjects) +
#         '<td className="py-3 px-4 font-bold text-gray-900">' + str(st.get("avg","")) + '</td>'
#         '<td className="py-3 px-4"><span className="px-2.5 py-1 rounded-full text-xs font-bold ' + grade_color.get(str(st.get("grade","C")), "bg-gray-100 text-gray-600") + '">' + str(st.get("grade","")) + '</span></td>'
#         '</tr>'
#         for st in students
#     )
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <div className="container mx-auto max-w-7xl flex items-center justify-between">\n'
#         '          <div><h1 className="text-2xl font-black text-white">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>'
#         '<p className="text-white/60 text-sm mt-1">' + str(data.get("subtitle","") if isinstance(data,dict) else "") + '</p></div>\n'
#         '          <button className="px-5 py-2.5 bg-white text-' + ac + ' font-bold rounded-xl text-sm shadow">Export PDF</button>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '      <div className="container mx-auto max-w-7xl px-6 py-6">\n'
#         '        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden overflow-x-auto">\n'
#         '          <div className="px-6 py-4 border-b border-gray-100"><h3 className="font-bold text-gray-900">Grade Book</h3></div>\n'
#         '          <table className="w-full min-w-max"><thead><tr className="bg-gray-50">'
#         '<th className="py-3 px-6 text-left text-xs font-semibold text-gray-400 uppercase">Student</th>'
#         + th_cells +
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">Avg</th>'
#         '<th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">Grade</th>'
#         '</tr></thead><tbody>' + rows + '\n          </tbody></table>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_video(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for a video streaming page:\n"
#         '{"headline":"title","subtitle":"subtitle","videos":[{"title":"Video Title","views":"1.2k","duration":"12:34","thumb":"emoji","category":"Category"}]}',
#         {"headline": ctx.page, "subtitle": "Watch, share, and discover",
#          "videos": [
#              {"title": "Getting Started Guide", "views": "12.4k", "duration": "8:32",  "thumb": "🎬", "category": "Tutorial"},
#              {"title": "Advanced Techniques",   "views": "8.1k",  "duration": "15:44", "thumb": "🎥", "category": "Tutorial"},
#              {"title": "Live Q&A Session",      "views": "3.2k",  "duration": "45:20", "thumb": "📹", "category": "Live"},
#              {"title": "Community Highlights",  "views": "6.7k",  "duration": "5:12",  "thumb": "🌟", "category": "Community"},
#              {"title": "Product Deep Dive",     "views": "9.3k",  "duration": "22:08", "thumb": "🔍", "category": "Product"},
#              {"title": "Tips & Tricks",         "views": "15.2k", "duration": "11:55", "thumb": "💡", "category": "Tips"},
#          ]}
#     )
#     g    = _gradient(ctx.primary)
#     ac   = _accent(ctx.primary)
#     videos = data.get("videos",[]) if isinstance(data,dict) else []
#     cards = "".join(
#         '\n          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">'
#         '\n            <div className="h-36 bg-gradient-to-br ' + g + ' flex items-center justify-center text-5xl relative">'
#         + str(v.get("thumb","🎬")) +
#         '\n              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono">' + str(v.get("duration","")) + '</div>'
#         '\n              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">'
#         '\n                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">▶</div>'
#         '\n              </div>'
#         '\n            </div>'
#         '\n            <div className="p-4">'
#         '\n              <span className="text-xs font-semibold text-' + ac + ' bg-' + ac + '/10 px-2 py-0.5 rounded-full">' + str(v.get("category","")) + '</span>'
#         '\n              <h3 className="font-bold text-gray-900 mt-2 mb-1 text-sm leading-snug">' + str(v.get("title","")) + '</h3>'
#         '\n              <p className="text-xs text-gray-400">' + str(v.get("views","")) + ' views</p>'
#         '\n            </div>'
#         '\n          </div>'
#         for v in videos
#     )
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <section className="bg-gradient-to-br ' + g + ' text-white py-20 px-6 text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">' + str(data.get("headline", ctx.page) if isinstance(data,dict) else ctx.page) + '</h1>\n'
#         '        <p className="text-white/80 text-lg mb-8">' + str(data.get("subtitle","") if isinstance(data,dict) else "") + '</p>\n'
#         '        <div className="flex flex-wrap justify-center gap-2">\n'
#         '          {["All","Tutorial","Live","Community","Product","Tips"].map(cat => ('
#         '<button key={cat} className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 hover:bg-white/30 transition">{cat}</button>'
#         '))}\n        </div>\n'
#         '      </section>\n'
#         '      <section className="py-12 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">' + cards + '\n        </div>\n'
#         '      </section>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_notifications(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <div className="container mx-auto max-w-3xl flex items-center justify-between">\n'
#         '          <div><h1 className="text-2xl font-black text-white">Notifications</h1>'
#         '<p className="text-white/60 text-sm mt-1">Stay up to date with the latest updates</p></div>\n'
#         '          <button className="px-4 py-2 bg-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/30 transition">Mark all read</button>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '      <div className="container mx-auto max-w-3xl px-6 py-6 space-y-3">\n' +
#         "".join(
#             '        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-start gap-4' + (' border-l-4' if i < 3 else '') + '" style={' + ('{ borderLeftColor: "' + "#10B981" + '" }' if i < 3 else '{}') + '}>'
#             '<div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 ' + ('bg-blue-100' if i%3==0 else 'bg-green-100' if i%3==1 else 'bg-purple-100') + '">' + (["📬","✅","💬","📊","🔔","⭐"][i%6]) + '</div>'
#             '<div className="flex-1"><div className="flex items-center justify-between"><p className="font-semibold text-gray-900 text-sm">' + (["New message from Alice","Task completed","Comment on your post","Weekly report ready","System update","Achievement unlocked"][i%6]) + '</p><span className="text-xs text-gray-400">' + (["2m","15m","1h","3h","5h","1d"][i%6]) + '</span></div>'
#             '<p className="text-gray-500 text-xs mt-0.5">' + (["Alice sent you a message in Design Team","Your export task has been completed successfully","Bob commented on your latest post","Your weekly analytics report is ready to view","System maintenance scheduled for tonight","You earned the Early Adopter badge"][i%6]) + '</p></div>'
#             + ('<div className="w-2.5 h-2.5 rounded-full bg-' + ac + ' mt-1 flex-shrink-0"></div>' if i < 3 else '') +
#             '</div>\n'
#             for i in range(6)
#         ) +
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_map(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <section className="bg-gradient-to-br ' + g + ' text-white py-20 px-6 text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">Explore Locations</h1>\n'
#         '        <p className="text-white/80 text-lg mb-8">Find places near you</p>\n'
#         '        <div className="max-w-md mx-auto flex gap-2">'
#         '<input type="text" placeholder="Search location…" className="flex-1 px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none focus:bg-white/30" />'
#         '<button className="px-6 py-3 bg-white text-' + ac + ' font-bold rounded-xl shadow hover:scale-105 transition-transform">Search</button>'
#         '</div>\n'
#         '      </section>\n'
#         '      <section className="py-12 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl">\n'
#         '          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6" style={{ height: "400px" }}>\n'
#         '            <div className="h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center flex-col gap-4">\n'
#         '              <div className="text-6xl">🗺️</div>\n'
#         '              <p className="text-gray-500 font-semibold">Interactive Map</p>\n'
#         '              <p className="text-gray-400 text-sm">Integrate with Google Maps or Leaflet</p>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '          <div className="grid md:grid-cols-3 gap-4">\n' +
#         "".join(
#             '            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-3 hover:shadow-md transition-shadow cursor-pointer">'
#             '<div className="text-2xl flex-shrink-0">' + e + '</div>'
#             '<div><h3 className="font-bold text-gray-900 text-sm">' + n + '</h3>'
#             '<p className="text-gray-400 text-xs mt-0.5">' + a + '</p>'
#             '<p className="text-xs mt-1 font-semibold text-' + ac + '">' + d + '</p></div></div>\n'
#             for e,n,a,d in [("📍","Central Hub","123 Main St, Downtown","0.2 miles away"),
#                             ("🏪","East Branch","456 Oak Ave, Eastside","1.4 miles away"),
#                             ("🌟","West Center","789 Pine Rd, Westside","2.1 miles away")]
#         ) +
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_music(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     tracks = [
#         ("Midnight Dreams","Artist One","3:42","🎵"),
#         ("Golden Hour",    "Artist Two","4:15","🎶"),
#         ("Electric Soul",  "Artist Three","2:58","🎸"),
#         ("Ocean Waves",    "Artist Four","5:01","🌊"),
#         ("City Lights",    "Artist Five","3:33","🌃"),
#         ("Sunrise",        "Artist Six","4:44","🌅"),
#     ]
#     track_rows = "".join(
#         '\n          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 group cursor-pointer transition-colors">'
#         '<div className="w-8 h-8 rounded-lg bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-sm flex-shrink-0">' + th + '</div>'
#         '<div className="flex-1 min-w-0"><p className="font-semibold text-gray-900 text-sm truncate">' + title + '</p>'
#         '<p className="text-xs text-gray-400 truncate">' + artist + '</p></div>'
#         '<span className="text-xs text-gray-400 font-mono">' + dur + '</span>'
#         '<button className="ml-2 w-7 h-7 rounded-full bg-gradient-to-br ' + g + ' text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs">▶</button>'
#         '</div>'
#         for title,artist,dur,th in tracks
#     )
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <section className="bg-gradient-to-br ' + g + ' text-white py-20 px-6 text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">Your Music</h1>\n'
#         '        <p className="text-white/80 text-lg">Listen, discover, and enjoy</p>\n'
#         '      </section>\n'
#         '      <section className="py-12 px-6">\n'
#         '        <div className="container mx-auto max-w-3xl grid lg:grid-cols-5 gap-6">\n'
#         '          {/* Now Playing */}\n'
#         '          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center">\n'
#         '            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br ' + g + ' flex items-center justify-center text-5xl shadow-lg mb-4">🎵</div>\n'
#         '            <h3 className="font-bold text-gray-900 text-lg">Midnight Dreams</h3>\n'
#         '            <p className="text-gray-400 text-sm mb-4">Artist One</p>\n'
#         '            <div className="w-full h-1 bg-gray-100 rounded-full mb-2"><div className="h-1 bg-gradient-to-r ' + g + ' rounded-full" style={{ width: "38%" }}></div></div>\n'
#         '            <div className="flex justify-between w-full text-xs text-gray-400 mb-4"><span>1:24</span><span>3:42</span></div>\n'
#         '            <div className="flex items-center gap-4 text-2xl">'
#         '<button className="text-gray-400 hover:text-gray-700 transition">⏮</button>'
#         '<button className="w-12 h-12 rounded-full bg-gradient-to-br ' + g + ' text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-xl">▶</button>'
#         '<button className="text-gray-400 hover:text-gray-700 transition">⏭</button>'
#         '</div>\n'
#         '          </div>\n'
#         '          {/* Playlist */}\n'
#         '          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">\n'
#         '            <h3 className="font-bold text-gray-900 mb-4">Up Next</h3>\n'
#         '            <div className="space-y-1">' + track_rows + '\n            </div>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </section>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# # ==============================================================
# # Previously missing builders: gallery, settings, ecommerce
# # ==============================================================

# def _build_gallery(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for a gallery/portfolio page:\n"
#         '{"headline":"title","subtitle":"subtitle","categories":["All","Photos","Videos","Design"],'
#         '"items":[{"title":"Item","category":"Photos","desc":"Short description","icon":"emoji"}]}',
#         {"headline": ctx.page, "subtitle": "Explore our collection",
#          "categories": ["All", "Photography", "Design", "Videos", "Events"],
#          "items": [
#              {"title": "Brand Identity",     "category": "Design",       "desc": "Complete brand overhaul for a tech startup", "icon": "🎨"},
#              {"title": "Product Launch",     "category": "Photography",  "desc": "High-energy launch event coverage",           "icon": "📸"},
#              {"title": "Annual Report",      "category": "Design",       "desc": "Clean, data-driven annual report layout",     "icon": "📊"},
#              {"title": "Team Retreat",       "category": "Events",       "desc": "2-day offsite team building retreat",         "icon": "🏕️"},
#              {"title": "Promo Reel",         "category": "Videos",       "desc": "60-second product highlight video",           "icon": "🎬"},
#              {"title": "Office Tour",        "category": "Photography",  "desc": "Behind the scenes office walkthrough",        "icon": "🏢"},
#              {"title": "UI Kit",             "category": "Design",       "desc": "Complete component library for web apps",     "icon": "🧩"},
#              {"title": "Keynote Recap",      "category": "Videos",       "desc": "Highlights from the annual conference",       "icon": "🎤"},
#          ]}
#     )
#     g    = _gradient(ctx.primary)
#     ac   = _accent(ctx.primary)
#     cats = data.get("categories", []) if isinstance(data, dict) else []
#     items = data.get("items", []) if isinstance(data, dict) else []

#     cat_btns = "".join(
#         '<button className="px-4 py-1.5 rounded-full text-sm font-semibold ' +
#         ('bg-' + ac + ' text-white' if i == 0 else 'bg-gray-100 text-gray-600 hover:bg-gray-200') +
#         ' transition">' + str(c) + '</button>\n          '
#         for i, c in enumerate(cats)
#     )

#     grid_items = "".join(
#         '\n          <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all cursor-pointer">'
#         '\n            <div className="h-44 bg-gradient-to-br ' + g + ' flex items-center justify-center text-5xl relative">'
#         + str(item.get("icon", "🖼")) +
#         '\n              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">'
#         '\n                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-bold px-3 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm">View</span>'
#         '\n              </div>'
#         '\n            </div>'
#         '\n            <div className="p-4">'
#         '\n              <span className="text-xs font-semibold text-' + ac + ' bg-' + ac + '/10 px-2 py-0.5 rounded-full">' + str(item.get("category", "")) + '</span>'
#         '\n              <h3 className="font-bold text-gray-900 mt-2 mb-1 text-sm">' + str(item.get("title", "")) + '</h3>'
#         '\n              <p className="text-xs text-gray-400 leading-relaxed">' + str(item.get("desc", "")) + '</p>'
#         '\n            </div>'
#         '\n          </div>'
#         for item in items
#     )

#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <section className="bg-gradient-to-br ' + g + ' text-white py-20 px-6 text-center">\n'
#         '        <h1 className="text-5xl font-black mb-4">' + str(data.get("headline", ctx.page) if isinstance(data, dict) else ctx.page) + '</h1>\n'
#         '        <p className="text-white/80 text-lg">' + str(data.get("subtitle", "") if isinstance(data, dict) else "") + '</p>\n'
#         '      </section>\n'
#         '      <section className="py-10 bg-white border-b border-gray-100 sticky top-0 z-20">\n'
#         '        <div className="container mx-auto px-6 flex flex-wrap gap-2 justify-center">\n'
#         '          ' + cat_btns +
#         '\n        </div>\n'
#         '      </section>\n'
#         '      <section className="py-12 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-5">' + grid_items + '\n        </div>\n'
#         '      </section>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_settings(ctx: Ctx) -> str:
#     g  = _gradient(ctx.primary)
#     ac = _accent(ctx.primary)
#     tabs = ["Profile", "Security", "Notifications", "Billing", "Integrations"]
#     tab_btns = "".join(
#         '<button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ' +
#         ('bg-' + ac + ' text-white shadow' if i == 0 else 'text-gray-600 hover:bg-gray-100') +
#         '">' + t + '</button>\n              '
#         for i, t in enumerate(tabs)
#     )
#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <div className="bg-gradient-to-r ' + g + ' px-6 py-8">\n'
#         '        <div className="container mx-auto max-w-5xl">\n'
#         '          <h1 className="text-2xl font-black text-white">Settings</h1>\n'
#         '          <p className="text-white/60 text-sm mt-1">Manage your account and preferences</p>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '      <div className="container mx-auto max-w-5xl px-6 py-8">\n'
#         '        <div className="grid lg:grid-cols-4 gap-6">\n'
#         '          {/* Sidebar nav */}\n'
#         '          <div className="lg:col-span-1">\n'
#         '            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 space-y-1">\n'
#         '              ' + tab_btns +
#         '\n            </div>\n'
#         '          </div>\n'
#         '          {/* Content panel */}\n'
#         '          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">\n'
#         '            <h2 className="text-lg font-bold text-gray-900 mb-6">Profile Settings</h2>\n'
#         '            <div className="flex items-center gap-5 mb-8 pb-8 border-b border-gray-100">\n'
#         '              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br ' + g + ' flex items-center justify-center text-white text-2xl font-black shadow-lg">JD</div>\n'
#         '              <div>\n'
#         '                <p className="font-bold text-gray-900">John Doe</p>\n'
#         '                <p className="text-sm text-gray-400">john@example.com</p>\n'
#         '                <button className="mt-2 text-xs font-semibold text-' + ac + ' hover:underline">Change avatar</button>\n'
#         '              </div>\n'
#         '            </div>\n'
#         '            <div className="space-y-5">\n' +
#         "".join(
#             '              <div>\n'
#             '                <label className="block text-sm font-semibold text-gray-700 mb-1">' + lbl + '</label>\n'
#             '                <input type="' + typ + '" defaultValue="' + val + '" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-' + ac + '/30 focus:border-' + ac + '" />\n'
#             '              </div>\n'
#             for lbl, typ, val in [
#                 ("Full Name", "text", "John Doe"),
#                 ("Email Address", "email", "john@example.com"),
#                 ("Username", "text", "@johndoe"),
#                 ("Phone Number", "tel", "+1 555 000 0000"),
#             ]
#         ) +
#         '            </div>\n'
#         '            <div className="mt-8 flex gap-3">\n'
#         '              <button className="px-6 py-2.5 bg-' + ac + ' text-white font-bold rounded-xl text-sm hover:opacity-90 transition shadow">Save Changes</button>\n'
#         '              <button className="px-6 py-2.5 border border-gray-200 text-gray-600 font-semibold rounded-xl text-sm hover:bg-gray-50 transition">Cancel</button>\n'
#         '            </div>\n'
#         '          </div>\n'
#         '        </div>\n'
#         '      </div>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# def _build_ecommerce(ctx: Ctx) -> str:
#     data = ctx.ask_json(
#         ctx.base() +
#         "Page: " + ctx.page + "\n"
#         "Return JSON for an e-commerce/shop page:\n"
#         '{"headline":"title","subtitle":"subtitle","categories":["All","Electronics","Clothing","Books"],'
#         '"products":[{"name":"Product","price":"$29","original":"$49","badge":"Sale","icon":"emoji","category":"Electronics","rating":4.5}]}',
#         {"headline": ctx.page, "subtitle": "Find everything you need",
#          "categories": ["All", "Electronics", "Clothing", "Books", "Home", "Sports"],
#          "products": [
#              {"name": "Wireless Headphones", "price": "$79",  "original": "$129", "badge": "Sale",    "icon": "🎧", "category": "Electronics", "rating": 4.8},
#              {"name": "Running Shoes",       "price": "$59",  "original": "$89",  "badge": "20% off", "icon": "👟", "category": "Sports",      "rating": 4.6},
#              {"name": "Smart Watch",         "price": "$149", "original": "$199", "badge": "New",     "icon": "⌚", "category": "Electronics", "rating": 4.9},
#              {"name": "Coffee Table Book",   "price": "$24",  "original": "$35",  "badge": "Sale",    "icon": "📚", "category": "Books",       "rating": 4.3},
#              {"name": "Desk Lamp LED",       "price": "$34",  "original": "$49",  "badge": "",        "icon": "💡", "category": "Home",        "rating": 4.5},
#              {"name": "Yoga Mat Pro",        "price": "$45",  "original": "$65",  "badge": "Popular", "icon": "🧘", "category": "Sports",      "rating": 4.7},
#          ]}
#     )
#     g    = _gradient(ctx.primary)
#     ac   = _accent(ctx.primary)
#     cats = data.get("categories", []) if isinstance(data, dict) else []
#     products = data.get("products", []) if isinstance(data, dict) else []

#     cat_btns = "".join(
#         '<button className="px-4 py-1.5 rounded-full text-sm font-semibold ' +
#         ('bg-' + ac + ' text-white' if i == 0 else 'bg-gray-100 text-gray-600 hover:bg-gray-200') +
#         ' transition whitespace-nowrap">' + str(c) + '</button>\n          '
#         for i, c in enumerate(cats)
#     )

#     def stars(r):
#         full  = int(r)
#         empty = 5 - full
#         return "★" * full + "☆" * empty

#     prod_cards = "".join(
#         '\n          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all group">'
#         '\n            <div className="relative h-40 bg-gradient-to-br ' + g + ' flex items-center justify-center text-5xl">'
#         + str(p.get("icon", "🛍")) +
#         ('\n              <span className="absolute top-3 left-3 bg-' + ac + ' text-white text-xs font-bold px-2 py-0.5 rounded-full">' + str(p.get("badge", "")) + '</span>' if p.get("badge") else '') +
#         '\n              <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition opacity-0 group-hover:opacity-100 shadow">♡</button>'
#         '\n            </div>'
#         '\n            <div className="p-4">'
#         '\n              <span className="text-xs text-gray-400">' + str(p.get("category", "")) + '</span>'
#         '\n              <h3 className="font-bold text-gray-900 mt-0.5 mb-1 text-sm">' + str(p.get("name", "")) + '</h3>'
#         '\n              <div className="text-xs text-yellow-500 mb-2">' + stars(p.get("rating", 4)) + ' <span className="text-gray-400">(' + str(p.get("rating", "")) + ')</span></div>'
#         '\n              <div className="flex items-center justify-between">'
#         '\n                <div><span className="font-black text-gray-900">' + str(p.get("price", "")) + '</span>'
#         + (' <span className="text-xs text-gray-400 line-through ml-1">' + str(p.get("original", "")) + '</span>' if p.get("original") else '') +
#         '</div>'
#         '\n                <button className="px-3 py-1.5 bg-' + ac + ' text-white text-xs font-bold rounded-lg hover:opacity-90 transition">Add to Cart</button>'
#         '\n              </div>'
#         '\n            </div>'
#         '\n          </div>'
#         for p in products
#     )

#     return (
#         'export default function ' + ctx.page + '() {\n'
#         '  return (\n'
#         '    <div className="min-h-screen bg-gray-50">\n'
#         '      <section className="bg-gradient-to-br ' + g + ' text-white py-16 px-6 text-center">\n'
#         '        <h1 className="text-5xl font-black mb-3">' + str(data.get("headline", ctx.page) if isinstance(data, dict) else ctx.page) + '</h1>\n'
#         '        <p className="text-white/80 text-lg mb-8">' + str(data.get("subtitle", "") if isinstance(data, dict) else "") + '</p>\n'
#         '        <div className="max-w-md mx-auto flex gap-2">'
#         '<input type="text" placeholder="Search products…" className="flex-1 px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none focus:bg-white/30" />'
#         '<button className="px-6 py-3 bg-white text-' + ac + ' font-bold rounded-xl shadow hover:scale-105 transition-transform">Search</button>'
#         '</div>\n'
#         '      </section>\n'
#         '      <section className="py-6 bg-white border-b border-gray-100 sticky top-0 z-20">\n'
#         '        <div className="container mx-auto px-6 flex gap-2 overflow-x-auto pb-1">\n'
#         '          ' + cat_btns +
#         '\n        </div>\n'
#         '      </section>\n'
#         '      <section className="py-10 px-6">\n'
#         '        <div className="container mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">' + prod_cards + '\n        </div>\n'
#         '      </section>\n'
#         '    </div>\n'
#         '  )\n'
#         '}\n'
#     )


# BUILDERS: dict[str, Callable] = {
#     "landing":      _build_landing,
#     "dashboard":    _build_dashboard,
#     "analytics":    _build_analytics,
#     "pricing":      _build_pricing,
#     "contact":      _build_contact,
#     "about":        _build_about,
#     "features":     _build_features,
#     "blog":         _build_blog,
#     "faq":          _build_faq,
#     "auth_login":   _build_auth_login,
#     "auth_signup":  _build_auth_signup,
#     "chat":         _build_chat,
#     "menu":         _build_menu,
#     "booking":      _build_booking,
#     "gallery":      _build_gallery,
#     "settings":     _build_settings,
#     "ecommerce":    _build_ecommerce,
#     "users_list":   _build_users_list,
#     "tracker":      _build_tracker,
#     "grades":       _build_grades,
#     "video":        _build_video,
#     "music":        _build_music,
#     "map":          _build_map,
#     "notifications":_build_notifications,
#     "notifications":_build_notifications,
#     "generic":      _build_generic,
# }


# # ==============================================================
# # Worker
# # ==============================================================

# def _build_page(page: str, user_prompt: str, industry: str,
#                 app_name: str, tone: str, primary: str,
#                 secondary: str, llm: NvidiaLLM) -> dict:
#     page_type = _classify(page)
#     logger.info("  [%s] type=%s", page, page_type)

#     ctx = Ctx(page, page_type, user_prompt, industry, app_name, tone, primary, secondary, llm)
#     builder = BUILDERS.get(page_type, _build_generic)

#     try:
#         jsx = builder(ctx)
#         logger.info("  [%s] built (%d chars)", page, len(jsx))
#         return {"filename": "frontend/src/pages/" + page + ".tsx",
#                 "content": jsx, "meta": {"page": page, "type": page_type}}
#     except Exception as exc:
#         logger.error("  [%s] build error: %s", page, exc)
#         fallback = (
#             'export default function ' + page + '() {\n'
#             '  return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-black">' + page + '</h1></div>\n'
#             '}\n'
#         )
#         return {"filename": "frontend/src/pages/" + page + ".tsx",
#                 "content": fallback, "meta": {"page": page, "type": page_type, "fallback": True}}

# def merge_files(existing, new):
#     """
#     Merge code_files list by filename.
#     If same filename exists → overwrite with latest.
#     """
#     file_map = {f["filename"]: f for f in existing}

#     for f in new:
#         file_map[f["filename"]] = f  # overwrite

#     return list(file_map.values())
# # ==============================================================
# # Node
# # ==============================================================

# def frontend_pages_node(state: AgentState) -> dict:
#     logger.info("Generating pages — DYNAMIC SECTION MODE")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages        = site_plan.get("pages", [])

#     if not pages:
#         logger.warning("No pages defined")
#         return {"code_files": []}

#     user_prompt = state.get("user_prompt", "")
#     industry    = requirements.get("industry", "Technology")
#     app_name    = site_plan.get("app_name") or requirements.get("app_name", "App")
#     tone        = site_plan.get("tone") or requirements.get("tone", "professional")
#     primary     = site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5")
#     secondary   = site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9")

#     llm = get_fast_llm(temperature=0.1, max_tokens=512)

#     generated: list[dict] = []
#     with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
#         futures = {
#             pool.submit(_build_page, page, user_prompt, industry,
#                         app_name, tone, primary, secondary, llm): page
#             for page in pages
#         }
#         for future in as_completed(futures):
#             try:
#                 generated.append(future.result())
#             except Exception as exc:
#                 logger.error("Unexpected: %s", exc)

#     logger.info("Done: %d/%d pages", len(generated), len(pages))
#     return {
#     "code_files": merge_files(
#         state.get("code_files", []),
#         generated
#     )
# }



# """
# frontend_pages_node.py  —  Dynamic LLM-driven page generation.

# Architecture change vs previous version:
#   OLD: LLM fills tiny JSON blobs → Python assembles hardcoded JSX templates
#        Result: every project looks identical, only text labels differ

#   NEW: LLM generates actual JSX sections based on page type + full user context
#        Python only provides: structure guidance, Tailwind constraints, fallback
#        Result: layout, sections, and content are all tailored to the user's project

# Strategy per page:
#   1. Classify the page (landing / dashboard / ecommerce / chat / etc.)
#   2. Build a rich context-aware system prompt for that page type
#   3. Ask LLM to write real JSX for each major section separately (parallel)
#   4. Assemble sections + minimal Python wrapper → final .tsx file
#   5. Fallback to a styled stub if LLM fails
# """

# from __future__ import annotations

# import logging
# import re
# import json
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Callable

# from backend.llm_client import NvidiaLLM, get_llm, get_fast_llm
# from backend.state import AgentState

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 4
# MODEL = "mistralai/mistral-7b-instruct-v0.3"
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")


# # ═══════════════════════════════════════════════════════════════
# # PAGE CLASSIFIER
# # ═══════════════════════════════════════════════════════════════

# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index", "welcome", "main")):           return "landing"
#     if any(x in n for x in ("student", "teacher", "staff", "member", "employee",
#                               "patient", "customer", "client", "people", "person",
#                               "roster", "directory")):                                  return "users_list"
#     if any(x in n for x in ("dashboard", "portal", "panel", "overview", "admin")):     return "dashboard"
#     if any(x in n for x in ("analytic", "report", "insight", "metric", "stat")):       return "analytics"
#     if any(x in n for x in ("pricing", "plan", "subscription", "billing", "upgrade")): return "pricing"
#     if any(x in n for x in ("contact", "getintouch", "reach", "inquiry")):             return "contact"
#     if any(x in n for x in ("about", "team", "story", "mission", "company", "who")):   return "about"
#     if any(x in n for x in ("feature", "solution", "service", "offer")):               return "features"
#     if any(x in n for x in ("blog", "news", "article", "post", "press")):              return "blog"
#     if any(x in n for x in ("faq", "help", "support", "question", "kb")):              return "faq"
#     if any(x in n for x in ("login", "signin", "sign-in")):                            return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up", "join", "create")):       return "auth_signup"
#     if any(x in n for x in ("chat", "message", "inbox", "conversation", "dm",
#                               "groupchat", "group", "channel", "thread", "room",
#                               "private", "messaging")):                                 return "chat"
#     if any(x in n for x in ("menu", "food", "dish", "cuisine", "meal")):               return "menu"
#     if any(x in n for x in ("reserv", "booking", "appointment", "schedule",
#                               "slot", "calendar")):                                     return "booking"
#     if any(x in n for x in ("gallery", "portfolio", "photo", "image", "media")):       return "gallery"
#     if any(x in n for x in ("setting", "profile", "account", "preference", "config")): return "settings"
#     if any(x in n for x in ("shop", "store", "cart", "checkout", "product",
#                               "ecommerce", "order", "inventory")):                      return "ecommerce"
#     if any(x in n for x in ("attendance", "track", "monitor", "log", "record",
#                               "timesheet", "checkin")):                                 return "tracker"
#     if any(x in n for x in ("grade", "score", "result", "exam", "test", "mark",
#                               "assessment", "gradebook")):                              return "grades"
#     if any(x in n for x in ("video", "stream", "watch", "movie", "episode",
#                               "player", "vod")):                                        return "video"
#     if any(x in n for x in ("music", "audio", "playlist", "song", "track",
#                               "album", "listen")):                                      return "music"
#     if any(x in n for x in ("map", "location", "direction", "place", "venue",
#                               "nearby", "explore")):                                    return "map"
#     if any(x in n for x in ("notification", "alert", "announcement", "notice")):       return "notifications"
#     return "generic"


# # ═══════════════════════════════════════════════════════════════
# # LLM CALL HELPERS
# # ═══════════════════════════════════════════════════════════════

# def _call(llm: NvidiaLLM, prompt: str) -> str:
#     """Call the LLM and return cleaned text (no fences)."""
#     try:
#         r = llm.invoke(prompt)
#         raw = r.content if hasattr(r, "content") else str(r)
#         return _FENCE_RE.sub("", raw).replace("```", "").strip()
#     except Exception as e:
#         logger.warning("LLM call failed: %s", e)
#         return ""


# def _call_jsx(llm, prompt):
#     """Call LLM expecting JSX fragment. Strips preamble and component wrappers."""
#     raw = _call(llm, prompt)
#     if not raw:
#         return ""

#     # If LLM returned a full component, extract just the JSX inside return()
#     if "export default function" in raw:
#         ret_idx = raw.find("return (")
#         if ret_idx == -1:
#             ret_idx = raw.find("return(")
#         if ret_idx != -1:
#             after = raw[ret_idx:]
#             for anchor in ("<section", "<div", "<header", "<main", "<aside"):
#                 ji = after.find(anchor)
#                 if ji != -1:
#                     fragment = after[ji:]
#                     # Remove trailing ) } that close the component
#                     lines = fragment.rstrip().split("\n")
#                     while lines and lines[-1].strip() in (")", "}", ");", "};"):
#                         lines.pop()
#                     return "\n".join(lines).strip()

#     # Find first JSX element
#     for anchor in ("return (", "return(", "<section", "<div", "<header",
#                    "<main", "<aside", "<nav", "<article", "<ul", "<table"):
#         idx = raw.find(anchor)
#         if idx != -1:
#             fragment = raw[idx:]
#             if fragment.startswith("return"):
#                 pi = fragment.find("(")
#                 if pi != -1:
#                     fragment = fragment[pi+1:].lstrip()
#                     lines = fragment.rstrip().split("\n")
#                     while lines and lines[-1].strip() in (")", "};", ");"):
#                         lines.pop()
#                     fragment = "\n".join(lines)
#             return fragment.strip()

#     return raw.strip()


# # ═══════════════════════════════════════════════════════════════
# # CONTEXT OBJECT
# # ═══════════════════════════════════════════════════════════════

# class Ctx:
#     def __init__(self, page: str, page_type: str, user_prompt: str,
#                  industry: str, app_name: str, tone: str,
#                  primary: str, secondary: str, llm: NvidiaLLM):
#         self.page = page
#         self.page_type = page_type
#         self.user_prompt = user_prompt
#         self.industry = industry
#         self.app_name = app_name
#         self.tone = tone
#         self.primary = primary
#         self.secondary = secondary
#         self.llm = llm

#     def project_context(self) -> str:
#         return (
#             f"Application: {self.app_name}\n"
#             f"Industry: {self.industry}\n"
#             f"User request: {self.user_prompt}\n"
#             f"Tone/style: {self.tone}\n"
#             f"Primary color: {self.primary}\n"
#             f"Secondary color: {self.secondary}\n"
#             f"Current page: {self.page}\n"
#         )

#     def jsx_rules(self) -> str:
#         return (
#             "\nSTRICT JSX RULES (follow ALL of these exactly):\n"
#             "1. Return ONLY a single JSX element starting with <section>, <div>, <header>, etc.\n"
#             "   DO NOT wrap in: export default function, return (, or any JavaScript.\n"
#             "   WRONG: export default function Hero() { return ( <section>...</section> ) }\n"
#             "   RIGHT: <section className=\"...\" > ... </section>\n"
#             "2. CLOSE EVERY TAG YOU OPEN. Every <div> needs </div>. Every <h1> needs </h1>.\n"
#             "   Count your opening and closing tags — they must balance exactly.\n"
#             "3. Use Tailwind CSS utility classes exclusively — no inline styles except for dynamic hex values.\n"
#             "4. No TypeScript — plain JSX only (no type annotations, interfaces, or generics).\n"
#             "5. No imports — this is a JSX fragment, not a full component file.\n"
#             "6. All content MUST be specific to the user's project — zero Lorem Ipsum, zero placeholder text.\n"
#             "7. Use realistic, domain-appropriate data (names, numbers, labels) for the user's industry.\n"
#             "8. Make it visually rich: gradients, shadows, rounded corners, hover effects.\n"
#             f"9. Primary color hint: use classes like bg-indigo-600, text-indigo-600 (adapt to {self.primary}).\n"
#             "10. If generating a list/grid, write at least 3 complete items with real content — not just 1 example.\n"
#         )

#     def ask_jsx(self, section_name: str, instructions: str) -> str:
#         """Ask LLM to generate a JSX section fragment."""
#         prompt = (
#             f"You are writing the '{section_name}' section of the '{self.page}' page.\n\n"
#             f"PROJECT CONTEXT:\n{self.project_context()}\n"
#             f"SECTION REQUIREMENTS:\n{instructions}\n"
#             f"{self.jsx_rules()}\n"
#             f"START your response with the opening JSX tag (e.g., <section ...>).\n"
#             f"END your response with the matching closing tag (e.g., </section>).\n"
#             f"Do NOT include: export default, function declarations, return(), imports, or markdown.\n"
#             f"Close EVERY tag you open — mismatched tags will break the preview."
#         )
#         result = _call_jsx(self.llm, prompt)
#         return result if result else ""

#     def ask_json(self, prompt: str, fallback) -> dict | list:
#         """Ask LLM for JSON data."""
#         full = (
#             f"PROJECT CONTEXT:\n{self.project_context()}\n"
#             f"{prompt}\n"
#             "Return ONLY valid JSON. No markdown, no explanation."
#         )
#         raw = _call(self.llm, full)
#         for pat in (re.compile(r"\{.*\}", re.DOTALL), re.compile(r"\[.*\]", re.DOTALL)):
#             m = pat.search(raw)
#             if m:
#                 try:
#                     return json.loads(m.group())
#                 except Exception:
#                     pass
#         return fallback


# # ═══════════════════════════════════════════════════════════════
# # SECTION GENERATORS — LLM writes actual JSX, not just data
# # ═══════════════════════════════════════════════════════════════

# def _hero(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Hero", f"""
# Create a full-width hero section for {ctx.app_name}.

# Requirements:
# - Bold gradient background using the primary color ({ctx.primary})
# - Large headline (4-6 words) that captures the UNIQUE value of {ctx.app_name} for the {ctx.industry} industry
# - Subtitle (1-2 sentences) explaining what makes {ctx.app_name} different
# - 2 CTA buttons: one solid (primary action) and one ghost/outline (secondary action)
# - The text, labels, and messaging MUST be specific to: {ctx.user_prompt}
# - Optional: a badge/pill label above the headline
# - Add a decorative radial gradient overlay for depth
# - Use bold typography: text-5xl md:text-6xl font-black
# """)


# def _stats_bar(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Stats Bar", f"""
# Create a stats/social-proof bar for {ctx.app_name} in the {ctx.industry} industry.

# Requirements:
# - 4 stats that are SPECIFIC and realistic for this type of product: {ctx.user_prompt}
# - Examples for different industries:
#   - Education: "2,400+ Students", "98% Pass Rate", "150+ Courses", "4.9 Rating"
#   - E-commerce: "$2.4M Sales", "50k+ Orders", "99.8% Delivered", "4.8 Reviews"
#   - Healthcare: "10k+ Patients", "500+ Doctors", "24/7 Support", "HIPAA Compliant"
# - Use big bold numbers with descriptive labels underneath
# - Light gray/white background, centered layout, 4-column grid on desktop
# - The stat VALUES and LABELS must make sense for: {ctx.user_prompt}
# """)


# def _features_grid(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Features Grid", f"""
# Create a 6-feature grid section for {ctx.app_name}.

# Requirements:
# - 6 features that are UNIQUE to this product: {ctx.user_prompt}
# - Each feature card: emoji icon, bold title, 1-sentence description
# - The features must be SPECIFIC to the {ctx.industry} domain — not generic ("Fast", "Secure")
# - Examples of specific features:
#   - For an LMS: "AI Lesson Generator", "Live Class Recording", "Parent Progress Reports"
#   - For a Hospital system: "Electronic Health Records", "Prescription Management", "Lab Results Portal"
#   - For Food delivery: "Real-time Driver Tracking", "Dietary Filter Engine", "Restaurant Analytics Dashboard"
# - White cards with subtle borders, hover shadow effect
# - 3-column grid on desktop, 2 on tablet, 1 on mobile
# """)


# def _testimonials(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Testimonials", f"""
# Create a testimonials section for {ctx.app_name}.

# Requirements:
# - 3 customer testimonials from REALISTIC users of this specific product
# - Testimonials must mention specific features/outcomes relevant to: {ctx.user_prompt}
# - Each testimonial: quote text, avatar initials, full name, job title, company name
# - The names, roles, and companies should be realistic for the {ctx.industry} industry
# - Gradient background using primary color, card layout
# - Quote marks decoration, star ratings (5 stars)
# - Example: if the app is a school management system, testimonials from "Principal Sarah K.", "Math Teacher James R.", "Parent Committee Chair"
# """)


# def _cta_banner(ctx: Ctx) -> str:
#     return ctx.ask_jsx("CTA Banner", f"""
# Create a call-to-action banner section for {ctx.app_name}.

# Requirements:
# - Compelling headline specific to what {ctx.app_name} offers in {ctx.industry}
# - 1-line subtext explaining the immediate benefit
# - Primary CTA button with action-oriented label (specific to this product, not generic "Get Started")
# - Secondary link (e.g., "Watch demo", "See pricing", "Talk to sales")
# - Gradient or solid background using primary color
# - The messaging MUST be tailored to: {ctx.user_prompt}
# """)


# def _dashboard_header(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Dashboard Header", f"""
# Create a dashboard header/banner for {ctx.app_name}.

# Requirements:
# - Gradient top bar using primary color ({ctx.primary})
# - Welcome message with placeholder user name
# - Page title specific to what this dashboard does for: {ctx.user_prompt}
# - Quick stats in the header (2-3 inline metrics relevant to this domain)
# - Action buttons relevant to the primary dashboard task
# - The labels, stats, and actions MUST be specific to {ctx.industry}: {ctx.user_prompt}
# """)


# def _dashboard_metrics(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Metric Cards", f"""
# Create 4 metric/KPI cards for the {ctx.app_name} dashboard.

# Requirements:
# - 4 cards in a grid (2x2 on mobile, 4x1 on desktop)
# - Each card: icon (emoji), metric label, current value, change % badge (up/down)
# - The metrics MUST be specific to this product's domain: {ctx.user_prompt}
# - Examples by domain:
#   - School: "Total Students (248)", "Attendance Rate (94.2%)", "Assignments Due (12)", "Average Grade (B+)"
#   - Hospital: "Patients Today (47)", "Appointments (23)", "Bed Occupancy (78%)", "Emergency Cases (3)"
#   - E-commerce: "Revenue ($12,430)", "Orders (284)", "Conversion Rate (3.2%)", "Avg Order Value ($43)"
#   - Restaurant: "Reservations (34)", "Table Turnover (4.2x)", "Avg Bill ($67)", "5-Star Reviews (89%)"
# - White cards, subtle shadow, colored icon backgrounds
# """)


# def _dashboard_chart(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Chart", f"""
# Create a bar chart visualization for {ctx.app_name} dashboard.

# Requirements:
# - Simulate a bar chart using Tailwind CSS divs (no chart library)
# - 7 data points (e.g., Mon-Sun, or last 7 weeks, or 7 months)
# - The metric being charted must be the MOST RELEVANT metric for this product: {ctx.user_prompt}
# - Chart title should name the specific metric (e.g., "Daily Student Logins", "Weekly Revenue", "Appointment Volume")
# - X-axis labels below each bar, Y-axis values above bars
# - Bars use gradient colors matching primary color
# - White card container with shadow
# """)


# def _dashboard_table(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Recent Activity Table", f"""
# Create a recent activity data table for {ctx.app_name} dashboard.

# Requirements:
# - Table with 5 rows of REALISTIC recent activity
# - Column headers and row data must be SPECIFIC to: {ctx.user_prompt}
# - Examples:
#   - School dashboard: columns = Student, Class, Assignment, Submitted, Status (Graded/Pending/Late)
#   - Hospital: columns = Patient, Doctor, Appointment Type, Time, Status
#   - E-commerce: columns = Order ID, Customer, Items, Total, Status (Shipped/Pending/Delivered)
#   - Restaurant: columns = Table, Party Size, Order Time, Items, Status (Waiting/Served/Paid)
# - Avatar circle with initials, colored status badges
# - Hover effect on rows
# """)


# def _pricing_header(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Pricing Header", f"""
# Create a pricing page header for {ctx.app_name}.

# Requirements:
# - Gradient hero section
# - Headline that emphasizes VALUE, not just "pricing" — specific to this product: {ctx.user_prompt}
# - Monthly/Annual toggle hint (visually suggest toggle exists)
# - Subtext that mentions key selling point (e.g., "No setup fees", "Cancel anytime", "Free migration")
# """)


# def _pricing_cards(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Pricing Cards", f"""
# Create 3 pricing plan cards for {ctx.app_name} in the {ctx.industry} industry.

# Requirements:
# - Plan names should be RELEVANT to this domain (not just "Starter/Pro/Enterprise"):
#   - Education: "Classroom / School / District"
#   - Hospital: "Clinic / Hospital / Network"
#   - SaaS: "Solo / Team / Business"
#   - Restaurant: "Single Location / Chain / Franchise"
# - Each card: plan name, price, billing period, 5-6 feature checkmarks
# - Features must be SPECIFIC to the product: {ctx.user_prompt}
# - Middle card: highlighted with gradient, "Most Popular" badge, slightly larger
# - Bottom CTA button on each card with action label
# - 3-column grid, items-center alignment
# """)


# def _auth_split(ctx: Ctx, is_login: bool) -> str:
#     action = "Sign In" if is_login else "Create Account"
#     opposite_text = "Don't have an account? Sign up" if is_login else "Already have an account? Sign in"
#     return ctx.ask_jsx(f"Auth {action} Form", f"""
# Create a {'login' if is_login else 'signup'} page for {ctx.app_name}.

# Requirements:
# - Split 50/50 layout: LEFT = brand panel, RIGHT = form
# - LEFT PANEL (gradient background using {ctx.primary}):
#   - App name/logo
#   - Tagline specific to what {ctx.app_name} does: {ctx.user_prompt}
#   - 3 bullet points highlighting key benefits specific to this product
#   - A short testimonial quote from a realistic user of this type of app
# - RIGHT PANEL (white):
#   - Form title: "{action}"
#   - {'Email + Password fields' if is_login else 'Name + Email + Password fields'}
#   - Submit button: "{action}"
#   - Link: "{opposite_text}"
#   - The field labels and placeholder text should match the domain (e.g., "School Email" for education apps)
# - Fully styled with Tailwind, rounded inputs with focus rings
# """)


# def _contact_split(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Contact Page", f"""
# Create a contact page for {ctx.app_name}.

# Requirements:
# - Hero section with gradient, headline specific to this product: {ctx.user_prompt}
# - Split layout: LEFT = contact info cards, RIGHT = contact form
# - LEFT: 4 contact info cards (email, phone, address, hours) with emoji icons
#   - The content should be realistic for a {ctx.industry} business
# - RIGHT: Contact form with fields specific to this business type:
#   - For hospitals: Name, Phone, Department, Appointment Type, Message
#   - For schools: Name, Email, Role (Parent/Student/Teacher), Subject, Message
#   - For restaurants: Name, Email, Party Size, Event Type, Message
#   - Default: Name, Email, Subject (select dropdown), Message
# - Send button with domain-appropriate label ("Book Appointment", "Get Quote", "Send Message")
# """)


# def _about_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("About Page", f"""
# Create a complete about page for {ctx.app_name}.

# Requirements:
# - Hero: gradient section, company name, founding story (2-3 sentences) specific to {ctx.user_prompt}
# - Mission statement that is UNIQUE to this company's domain and values
# - Team section: 3-4 team members with initials avatar, name, role, 1-line bio
#   - Names and roles should be REALISTIC for a {ctx.industry} company
#   - Examples: for EdTech "Chief Learning Officer", "Curriculum Designer"; for HealthTech "Medical Director", "Chief Compliance Officer"
# - Company values: 3 values with emoji icons, specific to the company's domain
# - Timeline: 4-5 company milestones that make sense for this type of company
# """)


# def _features_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Features Page", f"""
# Create a comprehensive features showcase for {ctx.app_name}.

# Requirements:
# - Hero with gradient
# - Feature tabs: 3-4 categories SPECIFIC to this product's feature set: {ctx.user_prompt}
#   - Example tabs for School ERP: "Student Management", "Academic Tools", "Communication", "Analytics"
#   - Example tabs for E-commerce: "Storefront", "Inventory", "Orders", "Marketing"
# - For the first tab (shown by default): detailed alternating layout with icon visual + description
# - Comparison table: "{ctx.app_name} vs Competitors" — the features compared must be relevant to {ctx.industry}
# - Integration logos grid: 8 tools/platforms this type of product integrates with (realistic for the industry)
# """)


# def _menu_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Menu Page", f"""
# Create a restaurant/food menu page for {ctx.app_name}.

# Requirements:
# - Hero with restaurant name and cuisine type derived from: {ctx.user_prompt}
# - Category tabs that match this restaurant's cuisine: {ctx.user_prompt}
#   - Italian: Antipasti, Pasta, Pizza, Dolci, Drinks
#   - Indian: Starters, Mains, Breads, Desserts, Beverages
#   - Default: Starters, Mains, Desserts, Drinks
# - Menu item cards: 6-8 items specific to the cuisine type
#   - Each card: emoji icon, dish name (authentic to cuisine), description, price
#   - Dietary badges: Veg, Spicy, Chef's Special
#   - Dish names and descriptions must be AUTHENTIC to the restaurant type
# - Floating cart indicator
# """)


# def _booking_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Booking/Reservation Page", f"""
# Create a booking/reservation page for {ctx.app_name}.

# Requirements:
# - Hero with gradient, headline specific to: {ctx.user_prompt}
# - Booking form tailored to what is being booked:
#   - Restaurant: Date, Time slots (specific dinner times), Party size selector, Occasion dropdown, Special requests
#   - Medical: Date, Doctor selection, Appointment type, Patient name/DOB, Insurance info
#   - Salon/Spa: Date, Service type, Stylist preference, Duration, Notes
#   - Default: Date picker, time slots, contact info, notes
# - Live booking summary card (aside panel) showing selected details
# - Policy cards (cancellation, what to bring, etc.) relevant to this business type
# - Submit button with domain-appropriate label
# """)


# def _ecommerce_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("E-commerce Shop Page", f"""
# Create a shop/product listing page for {ctx.app_name}.

# Requirements:
# - Hero banner with promotion specific to this store: {ctx.user_prompt}
# - Filter sidebar (left):
#   - Categories specific to what this store sells
#   - Price range
#   - Rating filter
#   - Other filters relevant to this product type (e.g., Size for clothing, RAM for electronics)
# - Product grid (6-9 products):
#   - Products must be SPECIFIC to what this store sells: {ctx.user_prompt}
#   - Each: product name (realistic for this category), price, rating stars, "Add to Cart" button, badge (Sale/New/Popular)
#   - Gradient image placeholder, hover effects
# - Sort dropdown (Price, Rating, Newest, Popularity)
# - Cart count badge in top-right area
# """)


# def _users_list_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Users/People List Page", f"""
# Create a user/people management page for {ctx.app_name}.

# Requirements:
# - The type of "users" must match the context: {ctx.user_prompt}
#   - School: Students (with Grade, Class, Roll Number, Attendance %)
#   - Hospital: Patients (with Age, Doctor, Ward, Admission Date, Status)
#   - Company HR: Employees (with Department, Position, Join Date, Status)
#   - Gym: Members (with Membership Type, Join Date, Trainer, Status)
# - Header with gradient and "Add New [entity]" button
# - Stats row: 4 relevant metrics (total, active, new this month, etc.)
# - Search/filter bar
# - Data table with columns SPECIFIC to the entity type (not generic Name/Email/Status)
# - Status badges in appropriate colors
# - Pagination
# """)


# def _tracker_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Tracker/Attendance Page", f"""
# Create an attendance/tracking page for {ctx.app_name}.

# Requirements:
# - Determine what is being tracked from context: {ctx.user_prompt}
#   - School: Student attendance (Present/Absent/Late by class and date)
#   - Gym: Member check-ins (date, time, duration)
#   - Work: Employee clock-in/out (department, hours worked, overtime)
#   - Event: Attendee check-in (registration, arrival time, badge status)
# - Header with gradient, date picker, export button
# - 4 stat cards relevant to what's being tracked
# - Data table with columns specific to the tracking domain
# - Status badges with appropriate color coding
# - Color-coded rows for quick status scanning
# """)


# def _grades_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Grades/Results Page", f"""
# Create a grades/results/scores page for {ctx.app_name}.

# Requirements:
# - Determine the grading context from: {ctx.user_prompt}
#   - School: Student gradebook with subjects, scores, letter grades, GPA
#   - Certification platform: Course completion, quiz scores, certificate status
#   - Sports/Competition: Team rankings, points, wins/losses
#   - Medical: Lab results, test values, reference ranges, status (Normal/High/Low)
# - Header with gradient, export button
# - Subject/category columns specific to the domain
# - Color-coded grade badges (A=green, B=blue, C=yellow, D=orange, F=red)
# - Class average row at the bottom
# - Overflow-x-auto for horizontal scroll on mobile
# """)


# def _chat_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Chat/Messaging Page", f"""
# Create a chat/messaging interface for {ctx.app_name}.

# Requirements:
# - Determine the chat context from: {ctx.user_prompt}
#   - School: Class group chats, teacher-student messaging, parent notifications
#   - Hospital: Doctor-patient messaging, department channels, emergency alerts
#   - Business: Team channels, project rooms, direct messages
#   - Social: Friend chats, group rooms, public channels
# - Left sidebar: conversation list with 5 entries SPECIFIC to the context
#   - Names, last messages, and unread counts should be realistic for: {ctx.user_prompt}
#   - Example for school: "Grade 10A", "Math Teacher", "Sports Committee", "Parent Group"
# - Right panel: active chat window with:
#   - 4 chat messages (realistic dialog for this context)
#   - Chat header with status indicator
#   - Message input with emoji and file attachment buttons
# - Feature highlights section below (3-4 features specific to this chat type)
# """)


# def _gallery_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Gallery/Portfolio Page", f"""
# Create a gallery/portfolio page for {ctx.app_name}.

# Requirements:
# - Determine the gallery type from context: {ctx.user_prompt}
#   - Restaurant: Food photography, ambiance shots, events, kitchen
#   - Creative agency: Brand work, web design, photography, video
#   - School: Events, graduations, sports, campus
#   - Architecture: Residential, commercial, interior, exterior
# - Category filter tabs SPECIFIC to this gallery type (not generic "All/Photos/Videos")
# - 8 gallery items with:
#   - Gradient placeholder with emoji icon relevant to category
#   - Category badge, item title, short description
#   - Hover overlay with "View" button
# - Item titles and descriptions must make sense for: {ctx.user_prompt}
# """)


# def _settings_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Settings Page", f"""
# Create a settings/profile page for {ctx.app_name}.

# Requirements:
# - Sidebar with tabs SPECIFIC to this product type: {ctx.user_prompt}
#   - For school systems: Profile, Notifications, Academic Preferences, Privacy, Help
#   - For medical systems: Profile, Clinical Settings, Notifications, Security, Compliance
#   - For e-commerce: Profile, Store Settings, Payment Methods, Notifications, Integrations
#   - Default: Profile, Security, Notifications, Billing, Integrations
# - Profile tab (shown by default):
#   - Avatar with change button
#   - Form fields relevant to the domain (e.g., for school: Name, Student ID, Grade Level, Parent Contact)
#   - Save button
# - One additional tab content (Security or domain-equivalent) that makes sense for: {ctx.user_prompt}
# """)


# def _video_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Video/Media Page", f"""
# Create a video/media listing page for {ctx.app_name}.

# Requirements:
# - Determine the video content type from: {ctx.user_prompt}
#   - Online learning: Course videos, tutorials, recorded lectures
#   - Entertainment: Movies, shows, clips
#   - Corporate: Training videos, product demos, webinars
#   - Medical: Patient education, procedure explainers, doctor talks
# - Hero with category filter tabs SPECIFIC to this content type
# - 6 video cards:
#   - Thumbnail placeholder (gradient + relevant emoji)
#   - Video title SPECIFIC to the domain (e.g., for medical: "Understanding Type 2 Diabetes")
#   - Duration, view count
#   - Category badge
#   - Hover play button overlay
# """)


# def _music_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Music/Audio Page", f"""
# Create a music/audio player page for {ctx.app_name}.

# Requirements:
# - Determine the audio context from: {ctx.user_prompt}
#   - Music streaming: Songs, artists, albums, playlists
#   - Podcast platform: Episodes, shows, hosts
#   - Meditation app: Guided sessions, ambient sounds, sleep tracks
#   - Audiobook: Book titles, authors, chapters
# - Now-playing card (left): album art (gradient), track title, artist, progress bar, playback controls
# - Playlist/queue (right): 6 tracks with titles and info SPECIFIC to the audio type
# - Track/episode titles must be realistic for: {ctx.user_prompt}
# """)


# def _map_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Map/Location Page", f"""
# Create a map/location page for {ctx.app_name}.

# Requirements:
# - Hero with search bar, headline specific to the location context: {ctx.user_prompt}
#   - Delivery: "Find Restaurants Near You"
#   - Real estate: "Explore Properties in Your Area"
#   - Healthcare: "Find Doctors and Clinics Nearby"
#   - Retail: "Locate Our Stores"
# - Map placeholder (styled div with gradient and map icon)
# - Location list: 3 specific locations with:
#   - Name and type relevant to: {ctx.user_prompt}
#   - Address, distance, key info (hours, rating, availability)
#   - Relevant action button (Order, Book, Visit, Call)
# """)


# def _notifications_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Notifications Page", f"""
# Create a notifications page for {ctx.app_name}.

# Requirements:
# - Header with gradient, "Mark all read" button
# - 6 notification items SPECIFIC to what {ctx.app_name} does: {ctx.user_prompt}
#   - For school: "Assignment due reminder", "Grade posted", "Parent meeting scheduled", "School event", "Fee payment due", "New message from teacher"
#   - For hospital: "Appointment reminder", "Lab results ready", "Prescription refill due", "Doctor message", "Billing update", "Health tip"
#   - For e-commerce: "Order shipped", "Price drop alert", "Review request", "Cart abandonment", "Sale starts tomorrow", "Loyalty points earned"
# - Each notification: icon, title, description, time, read/unread indicator
# - First 3 notifications unread (highlighted with left border)
# - Realistic notification content specific to: {ctx.user_prompt}
# """)


# def _generic_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Custom Page", f"""
# Create a complete, professional page for "{ctx.page}" in {ctx.app_name}.

# Requirements:
# - Carefully analyze the page name "{ctx.page}" in the context of: {ctx.user_prompt}
# - Build sections that make logical sense for this page name and app context
# - Include: compelling hero, 2-3 content sections with realistic data, CTA
# - All content must be SPECIFIC to this app and page purpose
# - Make it visually distinct from a generic template — tailor the layout to the page purpose
# - The page should feel like it genuinely belongs to {ctx.app_name} ({ctx.industry})
# """)


# def _faq_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("FAQ Page", f"""
# Create an FAQ / help center page for {ctx.app_name}.

# Requirements:
# - Hero with gradient, search bar
# - 6-8 questions and answers that are SPECIFIC to this product: {ctx.user_prompt}
#   - Questions should address real concerns users of this type of app would have
#   - For school ERP: "How do I track student attendance?", "Can parents view grades online?"
#   - For hospital: "How do I book an appointment?", "Are my health records secure?"
#   - For e-commerce: "What is your return policy?", "How do I track my order?"
# - details accordion for each question with rotate-arrow indicator
# - "Contact Support" card at the bottom with relevant support channels
# """)


# def _blog_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Blog/News Page", f"""
# Create a blog/news page for {ctx.app_name}.

# Requirements:
# - Hero with gradient, search bar
# - Category filter pills SPECIFIC to this domain: {ctx.user_prompt}
#   - EdTech blog: "Teaching Tips", "EdTech News", "Student Success", "Policy Updates"
#   - Health blog: "Wellness", "Medical News", "Patient Stories", "Research"
#   - Business blog: "Industry News", "Case Studies", "How-to Guides", "Company Updates"
# - Featured post: realistic title for this domain, large card
# - 4 post cards:
#   - Post titles must be REALISTIC and specific to: {ctx.user_prompt}
#   - Author names appropriate for the industry (teacher, doctor, founder, etc.)
#   - Categories, dates, read time
# - Newsletter signup section
# """)


# def _analytics_page(ctx: Ctx) -> str:
#     return ctx.ask_jsx("Analytics Dashboard", f"""
# Create an analytics/reports page for {ctx.app_name}.

# Requirements:
# - Date range tabs (Today / 7 Days / 30 Days)
# - 6 KPI metric cards SPECIFIC to what this product measures: {ctx.user_prompt}
#   - School: Daily logins, Assignment completion %, Average grade, Parent engagement, New enrollments, Absent rate
#   - E-commerce: Revenue, Conversion rate, Average order value, Cart abandonment, New customers, Return rate
#   - Hospital: Patients seen, Avg wait time, Bed occupancy, Prescription volume, Patient satisfaction, Revenue
# - Bar chart (CSS divs): metric title and axis labels specific to the domain
# - Breakdown table: top items relevant to this context (top products, top classes, top doctors, etc.)
# - 3 insight callout cards with specific recommendations for: {ctx.user_prompt}
# """)


# # ═══════════════════════════════════════════════════════════════
# # ASSEMBLY HELPERS
# # ═══════════════════════════════════════════════════════════════

# def _wrap_page(page_name: str, body: str) -> str:
#     return (
#         f"export default function {page_name}() {{\n"
#         f"  return (\n"
#         f"    <div className=\"min-h-screen\">\n"
#         f"{body}"
#         f"    </div>\n"
#         f"  )\n"
#         f"}}\n"
#     )


# def _wrap_dashboard(page_name: str, body: str) -> str:
#     return (
#         f"export default function {page_name}() {{\n"
#         f"  return (\n"
#         f"    <div className=\"min-h-screen bg-gray-50\">\n"
#         f"{body}"
#         f"    </div>\n"
#         f"  )\n"
#         f"}}\n"
#     )


# def _indent(jsx: str, spaces: int = 6) -> str:
#     if not jsx:
#         return ""
#     pad = " " * spaces
#     lines = jsx.split("\n")
#     return "\n".join(pad + line if line.strip() else line for line in lines) + "\n"


# def _fallback_stub(page: str) -> str:
#     return (
#         f"export default function {page}() {{\n"
#         f"  return (\n"
#         f"    <div className=\"min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700\">\n"
#         f"      <div className=\"text-center text-white px-6\">\n"
#         f"        <div className=\"text-6xl mb-6\">🚀</div>\n"
#         f"        <h1 className=\"text-4xl font-black mb-4\">{page}</h1>\n"
#         f"        <p className=\"text-white/70 text-lg\">This page is being generated...</p>\n"
#         f"      </div>\n"
#         f"    </div>\n"
#         f"  )\n"
#         f"}}\n"
#     )


# # ═══════════════════════════════════════════════════════════════
# # PAGE BUILDERS
# # ═══════════════════════════════════════════════════════════════

# def _parallel_sections(ctx: Ctx, section_fns: list) -> list:
#     results = [""] * len(section_fns)
#     with ThreadPoolExecutor(max_workers=4) as pool:
#         future_to_idx = {pool.submit(fn, ctx): i for i, fn in enumerate(section_fns)}
#         for future in as_completed(future_to_idx):
#             idx = future_to_idx[future]
#             try:
#                 results[idx] = future.result() or ""
#             except Exception as e:
#                 logger.warning("Section %d failed: %s", idx, e)
#     return results


# def _build_landing(ctx: Ctx) -> str:
#     sections = _parallel_sections(ctx, [_hero, _stats_bar, _features_grid, _testimonials, _cta_banner])
#     body = "".join(_indent(s) for s in sections if s)
#     return _wrap_page(ctx.page, body) if body.strip() else _fallback_stub(ctx.page)


# def _build_dashboard(ctx: Ctx) -> str:
#     sections = _parallel_sections(ctx, [_dashboard_header, _dashboard_metrics, _dashboard_chart, _dashboard_table])
#     body = "".join(_indent(s) for s in sections if s)
#     return _wrap_dashboard(ctx.page, body) if body.strip() else _fallback_stub(ctx.page)


# def _build_analytics(ctx: Ctx) -> str:
#     jsx = _analytics_page(ctx)
#     body = _indent(jsx)
#     return _wrap_dashboard(ctx.page, body) if body.strip() else _fallback_stub(ctx.page)


# def _build_pricing(ctx: Ctx) -> str:
#     sections = _parallel_sections(ctx, [_pricing_header, _pricing_cards, _faq_page])
#     body = "".join(_indent(s) for s in sections if s)
#     return _wrap_page(ctx.page, body) if body.strip() else _fallback_stub(ctx.page)


# def _build_contact(ctx: Ctx) -> str:
#     jsx = _contact_split(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_about(ctx: Ctx) -> str:
#     jsx = _about_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_features(ctx: Ctx) -> str:
#     jsx = _features_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_blog(ctx: Ctx) -> str:
#     jsx = _blog_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_faq(ctx: Ctx) -> str:
#     jsx = _faq_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_auth_login(ctx: Ctx) -> str:
#     jsx = _auth_split(ctx, is_login=True)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_auth_signup(ctx: Ctx) -> str:
#     jsx = _auth_split(ctx, is_login=False)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_menu(ctx: Ctx) -> str:
#     jsx = _menu_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_booking(ctx: Ctx) -> str:
#     jsx = _booking_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_gallery(ctx: Ctx) -> str:
#     jsx = _gallery_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_settings(ctx: Ctx) -> str:
#     jsx = _settings_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_ecommerce(ctx: Ctx) -> str:
#     jsx = _ecommerce_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_users_list(ctx: Ctx) -> str:
#     jsx = _users_list_page(ctx)
#     return _wrap_dashboard(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_tracker(ctx: Ctx) -> str:
#     jsx = _tracker_page(ctx)
#     return _wrap_dashboard(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_grades(ctx: Ctx) -> str:
#     jsx = _grades_page(ctx)
#     return _wrap_dashboard(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_video(ctx: Ctx) -> str:
#     jsx = _video_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_music(ctx: Ctx) -> str:
#     jsx = _music_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_map(ctx: Ctx) -> str:
#     jsx = _map_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_notifications(ctx: Ctx) -> str:
#     jsx = _notifications_page(ctx)
#     return _wrap_dashboard(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_chat(ctx: Ctx) -> str:
#     jsx = _chat_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# def _build_generic(ctx: Ctx) -> str:
#     jsx = _generic_page(ctx)
#     return _wrap_page(ctx.page, _indent(jsx)) if jsx.strip() else _fallback_stub(ctx.page)


# # ═══════════════════════════════════════════════════════════════
# # BUILDER DISPATCH TABLE
# # ═══════════════════════════════════════════════════════════════

# BUILDERS: dict[str, Callable] = {
#     "landing":       _build_landing,
#     "dashboard":     _build_dashboard,
#     "analytics":     _build_analytics,
#     "pricing":       _build_pricing,
#     "contact":       _build_contact,
#     "about":         _build_about,
#     "features":      _build_features,
#     "blog":          _build_blog,
#     "faq":           _build_faq,
#     "auth_login":    _build_auth_login,
#     "auth_signup":   _build_auth_signup,
#     "chat":          _build_chat,
#     "menu":          _build_menu,
#     "booking":       _build_booking,
#     "gallery":       _build_gallery,
#     "settings":      _build_settings,
#     "ecommerce":     _build_ecommerce,
#     "users_list":    _build_users_list,
#     "tracker":       _build_tracker,
#     "grades":        _build_grades,
#     "video":         _build_video,
#     "music":         _build_music,
#     "map":           _build_map,
#     "notifications": _build_notifications,
#     "generic":       _build_generic,
# }


# # ═══════════════════════════════════════════════════════════════
# # FILE MERGE UTILITY
# # ═══════════════════════════════════════════════════════════════

# def merge_files(existing: list, new: list) -> list:
#     """Merge code_files lists — last writer wins on filename conflicts."""
#     file_map = {f["filename"]: f for f in existing}
#     for f in new:
#         file_map[f["filename"]] = f
#     return list(file_map.values())


# # ═══════════════════════════════════════════════════════════════
# # PAGE WORKER
# # ═══════════════════════════════════════════════════════════════

# def _build_page(page: str, user_prompt: str, industry: str,
#                 app_name: str, tone: str, primary: str,
#                 secondary: str, llm: NvidiaLLM) -> dict:
#     page_type = _classify(page)
#     logger.info("  [%s] type=%s", page, page_type)

#     ctx = Ctx(page, page_type, user_prompt, industry, app_name, tone, primary, secondary, llm)
#     builder = BUILDERS.get(page_type, _build_generic)

#     try:
#         jsx = builder(ctx)
#         if not jsx or "export default" not in jsx:
#             raise ValueError("Builder returned empty or invalid JSX")
#         logger.info("  [%s] built (%d chars)", page, len(jsx))
#         return {
#             "filename": f"frontend/src/pages/{page}.tsx",
#             "content": jsx,
#             "meta": {"page": page, "type": page_type},
#         }
#     except Exception as exc:
#         logger.error("  [%s] build error: %s", page, exc)
#         return {
#             "filename": f"frontend/src/pages/{page}.tsx",
#             "content": _fallback_stub(page),
#             "meta": {"page": page, "type": page_type, "fallback": True},
#         }


# # ═══════════════════════════════════════════════════════════════
# # LANGGRAPH NODE
# # ═══════════════════════════════════════════════════════════════

# def frontend_pages_node(state: AgentState) -> dict:
#     logger.info("Generating pages — DYNAMIC LLM JSX MODE")

#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages        = site_plan.get("pages", [])

#     if not pages:
#         logger.warning("No pages defined")
#         return {"code_files": []}

#     user_prompt = state.get("user_prompt", "")
#     industry    = requirements.get("industry", "Technology")
#     app_name    = site_plan.get("app_name") or requirements.get("app_name", "App")
#     tone        = site_plan.get("tone") or requirements.get("tone", "professional")
#     primary     = site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5")
#     secondary   = site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9")

#     llm = get_llm(temperature=0.3, max_tokens=2048)

#     generated: list[dict] = []
#     with ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
#         futures = {
#             pool.submit(
#                 _build_page, page, user_prompt, industry,
#                 app_name, tone, primary, secondary, llm
#             ): page
#             for page in pages
#         }
#         for future in as_completed(futures):
#             try:
#                 generated.append(future.result())
#             except Exception as exc:
#                 logger.error("Unexpected: %s", exc)

#     logger.info("Done: %d/%d pages", len(generated), len(pages))
#     return {"code_files": generated}


# """
# frontend_pages_node.py  —  Fast parallel page generation.

# SPEED ARCHITECTURE:
#   - ONE LLM call per page (not 4-5 section calls)
#   - ALL pages generated in parallel (MAX_WORKERS = number of pages)
#   - Faster model (mistral-7b) for simple pages, stronger for complex
#   - max_tokens=1800 — enough for a complete page, not wasteful

# This reduces generation from 15-35 minutes → 1-3 minutes for 10 pages.

# Each page builder writes a complete, rich system prompt that includes:
#   - Page structure (which sections to include)
#   - Domain-specific content requirements
#   - JSX rules (no wrappers, close every tag)
#   - Tailwind + color guidance

# The LLM generates the entire page body in one shot.
# Python wraps it in the export default function.
# """

# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Callable

# from backend.llm_client import get_llm, get_fast_llm, FallbackLLM
# from backend.state import AgentState

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 12   # all pages fully parallel
# _FENCE_RE   = re.compile(r"```[a-zA-Z]*")


# # ──────────────────────────────────────────────────────────────
# # Page classifier
# # ──────────────────────────────────────────────────────────────

# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home","landing","index","welcome","main")):             return "landing"
#     if any(x in n for x in ("dashboard","portal","panel","overview","admin")):       return "dashboard"
#     if any(x in n for x in ("analytic","report","insight","metric","stat")):         return "analytics"
#     if any(x in n for x in ("pricing","plan","subscription","billing","upgrade")):   return "pricing"
#     if any(x in n for x in ("contact","getintouch","reach","inquiry")):              return "contact"
#     if any(x in n for x in ("about","team","story","mission","company","who")):      return "about"
#     if any(x in n for x in ("feature","solution","service","offer")):                return "features"
#     if any(x in n for x in ("blog","news","article","post","press")):                return "blog"
#     if any(x in n for x in ("faq","help","support","question","kb")):                return "faq"
#     if any(x in n for x in ("login","signin","sign-in")):                            return "auth_login"
#     if any(x in n for x in ("signup","register","sign-up","join","create")):         return "auth_signup"
#     if any(x in n for x in ("student","teacher","staff","member","employee",
#                               "patient","customer","client","people","roster")):      return "users_list"
#     if any(x in n for x in ("chat","message","inbox","conversation","dm")):          return "chat"
#     if any(x in n for x in ("menu","food","dish","cuisine","meal")):                 return "menu"
#     if any(x in n for x in ("reserv","booking","appointment","schedule","slot")):    return "booking"
#     if any(x in n for x in ("gallery","portfolio","photo","image","media")):         return "gallery"
#     if any(x in n for x in ("setting","profile","account","preference","config")):   return "settings"
#     if any(x in n for x in ("shop","store","cart","checkout","product","ecommerce")): return "ecommerce"
#     if any(x in n for x in ("attendance","track","monitor","log","checkin")):        return "tracker"
#     if any(x in n for x in ("grade","score","result","exam","mark","gradebook")):    return "grades"
#     if any(x in n for x in ("video","stream","watch","movie","player")):             return "video"
#     if any(x in n for x in ("music","audio","playlist","song","album")):             return "music"
#     if any(x in n for x in ("map","location","direction","place","venue")):          return "map"
#     if any(x in n for x in ("notification","alert","announcement","notice")):        return "notifications"
#     return "generic"


# # ──────────────────────────────────────────────────────────────
# # LLM call helper
# # ──────────────────────────────────────────────────────────────

# def _call_llm(llm, prompt: str) -> str:
#     """Invoke LLM and return cleaned text."""
#     try:
#         r = llm.invoke(prompt)
#         raw = r.content if hasattr(r, "content") else str(r)
#         # Strip markdown fences
#         raw = _FENCE_RE.sub("", raw).replace("```", "")
#         return raw.strip()
#     except Exception as e:
#         logger.warning("LLM call failed: %s", e)
#         return ""


# def _extract_jsx_body(raw: str) -> str:
#     """
#     Extract just the JSX body from LLM output.
#     Handles cases where LLM returns full component wrapper.
#     """
#     if not raw:
#         return ""

#     # If LLM wrapped in export default function, extract the return body
#     if "export default function" in raw or "export default (" in raw:
#         for anchor in ("<section", "<div", "<header", "<main", "<aside", "<nav"):
#             ji = raw.find(anchor)
#             if ji != -1:
#                 fragment = raw[ji:]
#                 # Strip trailing ) } that close the component wrapper
#                 lines = fragment.rstrip().split("\n")
#                 while lines and lines[-1].strip() in (")", "}", ");", "};", "})"):
#                     lines.pop()
#                 return "\n".join(lines).strip()

#     # Find first JSX element
#     for anchor in ("<section", "<div", "<header", "<main", "<aside",
#                    "<nav", "<article", "<ul", "<table", "<form"):
#         idx = raw.find(anchor)
#         if idx != -1:
#             return raw[idx:].strip()

#     return raw.strip()


# # ──────────────────────────────────────────────────────────────
# # JSX rules (included in every prompt)
# # ──────────────────────────────────────────────────────────────

# _JSX_RULES = """
# CRITICAL JSX RULES — follow ALL exactly:
# 1. Output ONLY JSX elements. No export, no function, no return(), no imports.
#    START with the first opening tag. END with its matching closing tag.
# 2. CLOSE EVERY TAG YOU OPEN. Count opens vs closes — they MUST match.
#    <div> needs </div>. <h1> needs </h1>. <section> needs </section>.
# 3. Self-close void elements: <input />, <br />, <img />, <hr />
# 4. Use Tailwind CSS classes only — no <style> tags, no CSS files.
# 5. No TypeScript — plain JSX (no types, no interfaces, no generics).
# 6. Make content SPECIFIC to the app described — no Lorem Ipsum.
# 7. Include at least 3 complete items in any list/grid/table.
# 8. Use gradient backgrounds, shadows, rounded corners, hover effects.
# """


# # ──────────────────────────────────────────────────────────────
# # Page prompt builders — one prompt per page type
# # ──────────────────────────────────────────────────────────────

# def _prompt_landing(ctx: dict) -> str:
#     return f"""Generate a complete landing page body for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}  Tone: {ctx['tone']}

# Include ALL these sections in order:
# 1. HERO: Full-width gradient hero using primary color. Bold headline (5-7 words specific to this app).
#    Subtitle (1-2 sentences). Two CTA buttons (primary + ghost). Optional badge above headline.
# 2. STATS BAR: 4 real metrics specific to this domain (e.g., "10k+ Users", "99.9% Uptime").
#    Light background, centered, 4-column grid on desktop.
# 3. FEATURES GRID: 6 feature cards in 3-column grid. Each: emoji icon, bold title, 1-sentence description.
#    Features must be SPECIFIC to {ctx['app_name']} — not generic.
# 4. TESTIMONIALS: 3 customer quotes from realistic users of this type of app.
#    Gradient background, star ratings, avatar initials, name, job title.
# 5. CTA BANNER: Final call-to-action section. Compelling headline + button.
#    Use primary color gradient background.

# {_JSX_RULES}
# Output the complete page body starting with <div className="min-h-screen">"""


# def _prompt_dashboard(ctx: dict) -> str:
#     return f"""Generate a complete dashboard page body for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include ALL these sections:
# 1. HEADER BAR: Gradient top bar using primary color. Welcome message + page title.
#    2-3 quick stat badges in the header. Action button (Add/Create/Export).
# 2. METRIC CARDS: 4 KPI cards in a row. Each: emoji icon, metric name, bold value, trend badge (+/-%).
#    Metrics MUST be specific to this domain (e.g., for school: Students, Attendance, Assignments, GPA).
# 3. CHART SECTION: Bar chart using CSS divs (no library). 7 data points (Mon-Sun or last 7 items).
#    Chart title names the specific metric. Bars use gradient matching primary color.
# 4. RECENT ACTIVITY TABLE: 5 rows of realistic recent data with:
#    - Avatar circle + name column
#    - 3-4 data columns specific to this domain
#    - Status badge column (colored: green/yellow/red)
#    Hover effect on rows.

# {_JSX_RULES}
# Output the complete page body starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_analytics(ctx: dict) -> str:
#     return f"""Generate a complete analytics/reports page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HEADER: Gradient, date range tabs (Today / 7 Days / 30 Days / Custom).
# 2. KPI GRID: 6 metric cards specific to what this app measures.
#    Each: icon, label, value, change % (up/down arrow + color).
# 3. BAR CHART: CSS-only chart with 7 data points. Metric title + labeled axes.
# 4. BREAKDOWN TABLE: Top 5 items with progress bars (top products/pages/users/etc).
# 5. INSIGHT CARDS: 3 actionable insights specific to this domain.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_pricing(ctx: dict) -> str:
#     return f"""Generate a complete pricing page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient header. Headline emphasizing VALUE not just "pricing".
#    Monthly/Annual toggle (visual). "No credit card required" badge.
# 2. PRICING CARDS: 3 plan cards side by side.
#    Plan names relevant to the domain (NOT generic Starter/Pro/Enterprise).
#    Each card: plan name, price, billing period, 5-6 feature checkmarks, CTA button.
#    Middle card: "Most Popular" badge, gradient highlight, slightly elevated.
# 3. FAQ: 5 common pricing questions with accordion-style answers.
#    Questions must be SPECIFIC to this product's pricing concerns.
# 4. TRUST BAR: Logos or trust badges (money-back guarantee, security, etc.)

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_auth(ctx: dict, is_login: bool) -> str:
#     action = "Sign In" if is_login else "Create Account"
#     fields = "Email + Password" if is_login else "Full Name + Email + Password + Confirm Password"
#     return f"""Generate a complete {action} page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Layout: 50/50 split screen.
# LEFT PANEL (gradient background using primary color):
#   - App name/logo (large, white)
#   - Tagline specific to what this app does
#   - 3 bullet benefits (specific to this product, with checkmarks)
#   - One testimonial quote from a realistic user

# RIGHT PANEL (white background):
#   - Form title: "{action}"
#   - Fields: {fields}
#   - Each field: label + styled input with focus ring
#   - Submit button (full width, primary color)
#   - Link to opposite auth page
#   - "Forgot password?" link if login

# Field labels should match domain (e.g., "School Email" for education apps).

# {_JSX_RULES}
# Output starting with <div className="min-h-screen flex">"""


# def _prompt_contact(ctx: dict) -> str:
#     return f"""Generate a complete contact page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, headline specific to this business type.
# 2. SPLIT LAYOUT (left + right):
#    LEFT: 4 contact info cards (email, phone, address, hours) with emoji icons.
#          Content realistic for a {ctx['industry']} business.
#    RIGHT: Contact form with fields appropriate to this business:
#          - For hospital: Name, Phone, Department, Type of inquiry, Message
#          - For school: Name, Email, Role (Parent/Student/Teacher), Subject, Message
#          - Default: Name, Email, Subject (dropdown), Message
#          Submit button with domain-appropriate label.
# 3. MAP PLACEHOLDER: Styled div representing a map with address overlay.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_about(ctx: dict) -> str:
#     return f"""Generate a complete about page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, company name, founding story (2-3 sentences specific to this app).
# 2. MISSION: Mission statement unique to this company's domain.
# 3. TEAM: 4 team members. Avatar (initials circle), name, role, 1-line bio.
#    Names and roles realistic for a {ctx['industry']} company.
# 4. VALUES: 3 company values with emoji icons, specific to the domain.
# 5. TIMELINE: 4 company milestones with years, realistic for this type of company.
# 6. STATS: 3-4 company metrics (employees, cities, years, customers).

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_features(ctx: dict) -> str:
#     return f"""Generate a complete features page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, headline about what makes this product powerful.
# 2. FEATURE TABS: 3 category tabs specific to this product's feature areas.
#    First tab shown by default: alternating layout (icon + description, full-width cards).
# 3. FULL FEATURE GRID: 6-8 features in 3-column grid. Each: icon, bold title, description.
#    Features must be SPECIFIC to {ctx['app_name']} — not generic buzzwords.
# 4. COMPARISON: "Why {ctx['app_name']} vs alternatives" — 3-column comparison table.
# 5. INTEGRATIONS: 8 integration logos (gradient placeholders with tool names).

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_blog(ctx: dict) -> str:
#     return f"""Generate a complete blog/news page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, search bar.
# 2. CATEGORY TABS: 4-5 categories specific to this domain.
# 3. FEATURED POST: Large card with gradient thumbnail, realistic title, author, date, excerpt.
# 4. POST GRID: 4 post cards. Titles REALISTIC for this domain.
#    Each: thumbnail, category badge, title, author (realistic role), date, read time.
# 5. NEWSLETTER: Email signup section with primary color background.

# Post titles must make sense for {ctx['industry']} (e.g., for EdTech: "5 Ways AI is Changing Homework").

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_faq(ctx: dict) -> str:
#     return f"""Generate a complete FAQ / help center page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, "Frequently Asked Questions", search bar.
# 2. FAQ ACCORDION: 8 questions + answers SPECIFIC to this product.
#    Use <details> and <summary> tags for accordion effect.
#    Questions must address real concerns users of this app would have.
# 3. CONTACT SUPPORT: Card at bottom with support channels (email, chat, docs).
#    Use primary color styling.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_users_list(ctx: dict) -> str:
#     return f"""Generate a complete user/people management page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Determine entity type from context (students/patients/employees/members/customers).

# Include:
# 1. HEADER: Gradient + "Add New [Entity]" button. Page title.
# 2. STATS ROW: 4 relevant metrics (total, active, new this month, etc.)
# 3. SEARCH + FILTERS: Search input + 2-3 filter dropdowns relevant to this entity.
# 4. DATA TABLE: 6 rows with columns SPECIFIC to this entity type.
#    - School students: Name, Grade, Class, Roll No., Attendance %, Status
#    - Hospital patients: Name, Age, Doctor, Ward, Admission Date, Status
#    - Employees: Name, Department, Position, Join Date, Status
#    Avatar initials circle + colored status badges. Row hover effect.
# 5. PAGINATION: Previous/Next + page number pills.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_ecommerce(ctx: dict) -> str:
#     return f"""Generate a complete shop/product listing page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO BANNER: Promotional banner with discount/offer specific to this store.
# 2. LAYOUT (sidebar + main grid):
#    LEFT SIDEBAR: Category filters, price range slider (CSS), rating filter, other relevant filters.
#    MAIN GRID: 6 product cards specific to what this store sells.
#      Each card: gradient image placeholder + emoji, product name, price, star rating,
#      "Add to Cart" button, badge (Sale/New/Popular).
# 3. SORT BAR above grid: sort dropdown + results count.
# 4. CART INDICATOR: Fixed cart button bottom-right with item count badge.

# Product names must match what this store actually sells based on: {ctx['user_prompt']}

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_chat(ctx: dict) -> str:
#     return f"""Generate a complete chat/messaging interface for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. SPLIT LAYOUT:
#    LEFT SIDEBAR (conversation list):
#      - Search bar
#      - 5 conversation items with avatar, name, last message preview, time, unread badge
#      - Names/messages realistic for this context
#    RIGHT PANEL (active chat):
#      - Chat header: name, online status, action buttons
#      - Messages area: 4 chat messages alternating left/right, realistic dialog
#      - Message input bar with emoji + attachment buttons + send button
# 2. FEATURES ROW below: 3-4 feature highlights specific to this chat type.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen flex" style={{height: '100vh'}}>"""


# def _prompt_settings(ctx: dict) -> str:
#     return f"""Generate a complete settings/profile page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. LAYOUT: Left sidebar (settings categories) + right content panel.
#    Sidebar tabs specific to this product type.
# 2. PROFILE TAB (default shown):
#    - Avatar with change button
#    - Form fields relevant to this domain
#    - Save button
# 3. SECURITY TAB content visible:
#    - Change password form
#    - 2FA toggle
#    - Active sessions list
# 4. NOTIFICATION PREFERENCES: Toggle switches for relevant notification types.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_tracker(ctx: dict) -> str:
#     return f"""Generate a complete attendance/tracking page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HEADER: Gradient, date picker, export button.
# 2. STAT CARDS: 4 relevant metrics (present/absent/late/total or equivalent).
# 3. DATA TABLE: 8 rows specific to tracking context.
#    Color-coded rows (green=present, red=absent, yellow=late).
#    Quick action buttons (Mark Present / Mark Absent).
# 4. SUMMARY CHART: Simple CSS bar/donut chart showing attendance breakdown.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_grades(ctx: dict) -> str:
#     return f"""Generate a complete grades/results page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HEADER: Gradient, export button, term/period selector.
# 2. SUMMARY CARDS: GPA/average + pass rate + highest + lowest.
# 3. GRADES TABLE: 6 rows (students or subjects). Columns specific to grading context.
#    Color-coded grade badges: A=green, B=blue, C=yellow, D=orange, F=red.
#    Subject scores in individual columns.
# 4. CLASS AVERAGE ROW: Highlighted bottom row showing averages.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_menu(ctx: dict) -> str:
#     return f"""Generate a complete restaurant menu page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Restaurant name, cuisine type, ambiance description.
# 2. CATEGORY TABS: 4-5 menu categories matching the cuisine type.
# 3. MENU ITEMS GRID: 8 items with:
#    - Emoji food icon + gradient placeholder
#    - Dish name (authentic to cuisine)
#    - Description (ingredients/preparation)
#    - Price
#    - Dietary badges (Veg 🌱, Spicy 🌶️, Chef's Special ⭐)
#    - "Add to Cart" button
# 4. FLOATING CART: Cart button with item count.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_booking(ctx: dict) -> str:
#     return f"""Generate a complete booking/reservation page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, headline specific to what is being booked.
# 2. BOOKING FORM (left side):
#    Fields appropriate to what is being booked:
#    - Restaurant: Date, Time slot buttons, Party size, Occasion, Special requests
#    - Medical: Date, Doctor selection, Appointment type, Patient info
#    - Default: Date picker, time slots, service type, contact info
# 3. BOOKING SUMMARY CARD (right side):
#    Live summary showing selected options, total, policy info.
# 4. CONFIRM BUTTON: Full-width, primary color, with icon.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_gallery(ctx: dict) -> str:
#     return f"""Generate a complete gallery/portfolio page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Gradient, gallery title.
# 2. CATEGORY FILTER TABS: 4-5 categories specific to this gallery type.
# 3. GALLERY GRID: 9 items (3x3) with:
#    - Gradient placeholder with relevant emoji
#    - Category badge
#    - Title + short description
#    - Hover overlay with "View" button
# 4. LOAD MORE button at bottom.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_notifications(ctx: dict) -> str:
#     return f"""Generate a complete notifications page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HEADER: Gradient, "Notifications", "Mark all read" button, filter tabs (All/Unread/Important).
# 2. NOTIFICATION LIST: 8 notifications SPECIFIC to this app's domain.
#    First 3 unread (highlighted with colored left border + background tint).
#    Each: icon/emoji, bold title, description, time ago, read/unread dot.
# 3. NOTIFICATION SETTINGS CARD: Toggle preferences for notification types.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-50">"""


# def _prompt_video(ctx: dict) -> str:
#     return f"""Generate a complete video/media page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. HERO: Category filter tabs specific to content type.
# 2. FEATURED VIDEO: Large card with play button overlay, title, duration, views.
# 3. VIDEO GRID: 6 video cards with thumbnail (gradient+emoji), title, duration, views, category.
#    Titles specific to this domain (e.g., for education: "Introduction to Algebra").
# 4. SIDEBAR: Popular videos list with thumbnails.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_map(ctx: dict) -> str:
#     return f"""Generate a complete map/location page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. SEARCH BAR: With location input + search button + filter chips.
# 2. SPLIT LAYOUT:
#    LEFT: Map placeholder (large gradient div with 📍 icon and grid lines).
#    RIGHT: 4 location cards with name, address, distance, hours, rating, action button.
# 3. CATEGORIES: Filter buttons for location types.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# def _prompt_music(ctx: dict) -> str:
#     return f"""Generate a complete music/audio player page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Include:
# 1. NOW PLAYING CARD (left): Large album art (gradient), track title, artist,
#    progress bar, playback controls (prev/play/next/shuffle/repeat), volume.
# 2. PLAYLIST (right): 8 tracks with number, title, artist, duration, play button.
#    Currently playing track highlighted.
# 3. FEATURED SECTION: 4 playlist/album cards below.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen bg-gray-900 text-white">"""


# def _prompt_generic(ctx: dict) -> str:
#     return f"""Generate a complete, professional "{ctx['page']}" page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}

# Analyze the page name "{ctx['page']}" in context of: {ctx['user_prompt']}
# Build the most logical sections for this page.

# Include:
# 1. HERO: Gradient section with page title and relevant subtitle.
# 2. MAIN CONTENT: 2-3 content sections with real, specific data for this page.
# 3. CTA: Call-to-action relevant to this page's purpose.

# All content must be specific to {ctx['app_name']} — no generic placeholders.

# {_JSX_RULES}
# Output starting with <div className="min-h-screen">"""


# # ──────────────────────────────────────────────────────────────
# # Prompt dispatch table
# # ──────────────────────────────────────────────────────────────

# def _get_prompt(page_type: str, ctx: dict) -> str:
#     if page_type == "landing":      return _prompt_landing(ctx)
#     if page_type == "dashboard":    return _prompt_dashboard(ctx)
#     if page_type == "analytics":    return _prompt_analytics(ctx)
#     if page_type == "pricing":      return _prompt_pricing(ctx)
#     if page_type == "contact":      return _prompt_contact(ctx)
#     if page_type == "about":        return _prompt_about(ctx)
#     if page_type == "features":     return _prompt_features(ctx)
#     if page_type == "blog":         return _prompt_blog(ctx)
#     if page_type == "faq":          return _prompt_faq(ctx)
#     if page_type == "auth_login":   return _prompt_auth(ctx, True)
#     if page_type == "auth_signup":  return _prompt_auth(ctx, False)
#     if page_type == "users_list":   return _prompt_users_list(ctx)
#     if page_type == "ecommerce":    return _prompt_ecommerce(ctx)
#     if page_type == "chat":         return _prompt_chat(ctx)
#     if page_type == "settings":     return _prompt_settings(ctx)
#     if page_type == "tracker":      return _prompt_tracker(ctx)
#     if page_type == "grades":       return _prompt_grades(ctx)
#     if page_type == "menu":         return _prompt_menu(ctx)
#     if page_type == "booking":      return _prompt_booking(ctx)
#     if page_type == "gallery":      return _prompt_gallery(ctx)
#     if page_type == "notifications": return _prompt_notifications(ctx)
#     if page_type == "video":        return _prompt_video(ctx)
#     if page_type == "map":          return _prompt_map(ctx)
#     if page_type == "music":        return _prompt_music(ctx)
#     return _prompt_generic(ctx)


# # ──────────────────────────────────────────────────────────────
# # Wrappers
# # ──────────────────────────────────────────────────────────────

# def _wrap(page_name: str, body: str, bg: str = "min-h-screen") -> str:
#     return (
#         f"import React from 'react'\n\n"
#         f"export default function {page_name}() {{\n"
#         f"  return (\n"
#         f"    {body}\n"
#         f"  )\n"
#         f"}}\n"
#     )


# def _fallback(page: str) -> str:
#     return (
#         f"import React from 'react'\n\n"
#         f"export default function {page}() {{\n"
#         f"  return (\n"
#         f"    <div className=\"min-h-screen flex flex-col items-center justify-center "
#         f"bg-gradient-to-br from-indigo-600 to-purple-700\">\n"
#         f"      <div className=\"text-center text-white px-6\">\n"
#         f"        <div className=\"text-6xl mb-6\">🚀</div>\n"
#         f"        <h1 className=\"text-4xl font-black mb-4\">{page}</h1>\n"
#         f"        <p className=\"text-white/70 text-lg\">Content coming soon</p>\n"
#         f"      </div>\n"
#         f"    </div>\n"
#         f"  )\n"
#         f"}}\n"
#     )


# # ──────────────────────────────────────────────────────────────
# # Single page builder — ONE LLM call
# # ──────────────────────────────────────────────────────────────

# def _build_page(page: str, ctx: dict, llm) -> dict:
#     page_type = _classify(page)
#     ctx = {**ctx, "page": page, "page_type": page_type}

#     logger.info("  [%s] type=%s — generating (1 LLM call)...", page, page_type)

#     prompt = _get_prompt(page_type, ctx)
#     raw    = _call_llm(llm, prompt)
#     body   = _extract_jsx_body(raw)

#     if not body or len(body) < 100:
#         logger.warning("  [%s] LLM returned insufficient content, using fallback", page)
#         return {
#             "filename": f"frontend/src/pages/{page}.tsx",
#             "content":  _fallback(page),
#             "meta":     {"page": page, "type": page_type, "fallback": True},
#         }

#     # Wrap in React component
#     content = _wrap(page, body)

#     # Verify it has export default (sanity check)
#     if "export default" not in content:
#         content = _fallback(page)
#         logger.warning("  [%s] wrap failed, using fallback", page)

#     logger.info("  [%s] done (%d chars)", page, len(content))
#     return {
#         "filename": f"frontend/src/pages/{page}.tsx",
#         "content":  content,
#         "meta":     {"page": page, "type": page_type},
#     }


# # ──────────────────────────────────────────────────────────────
# # LangGraph node
# # ──────────────────────────────────────────────────────────────

# def frontend_pages_node(state: AgentState) -> dict:
#     site_plan    = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages        = site_plan.get("pages", [])

#     if not pages:
#         logger.warning("No pages defined")
#         return {"code_files": []}

#     ctx = {
#         "user_prompt": state.get("user_prompt", ""),
#         "industry":    requirements.get("industry", "Technology"),
#         "app_name":    site_plan.get("app_name") or requirements.get("app_name", "App"),
#         "tone":        site_plan.get("tone") or requirements.get("tone", "professional"),
#         "primary":     site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5"),
#         "secondary":   site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
#     }

#     # One LLM instance shared across all parallel calls (thread-safe, shares connection pool)
#     llm = get_llm(temperature=0.4, max_tokens=2000)

#     logger.info("Generating %d pages in parallel (1 LLM call each)...", len(pages))

#     generated: list = []
#     workers = min(MAX_WORKERS, len(pages))

#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {pool.submit(_build_page, page, ctx, llm): page for page in pages}
#         for future in as_completed(futures):
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info("  ✓ %s", result["filename"])
#             except Exception as exc:
#                 page = futures[future]
#                 logger.error("  ✗ %s: %s", page, exc)
#                 generated.append({
#                     "filename": f"frontend/src/pages/{page}.tsx",
#                     "content":  _fallback(page),
#                     "meta":     {"page": page, "fallback": True},
#                 })

#     logger.info("Pages done: %d/%d", len(generated), len(pages))
#     return {"code_files": generated}


# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Dict, Any, List

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 8
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index", "main")): 
#         return "landing"
#     if any(x in n for x in ("dashboard", "portal", "admin")): 
#         return "dashboard"
#     if any(x in n for x in ("pricing", "plan", "subscription")): 
#         return "pricing"
#     if any(x in n for x in ("contact", "getintouch", "support")): 
#         return "contact"
#     if any(x in n for x in ("about", "team", "company")): 
#         return "about"
#     if any(x in n for x in ("feature", "solution", "service")): 
#         return "features"
#     if any(x in n for x in ("faq", "help", "questions")): 
#         return "faq"
#     if any(x in n for x in ("login", "signin", "sign-in")): 
#         return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up")): 
#         return "auth_signup"
#     return "generic"


# def _get_component_imports(page_type: str) -> str:
#     """Return only the imports needed for this page type using relative paths"""
    
#     # Base imports always needed - using relative paths
#     base_imports = "import Layout from '../components/layouts/Layout'\n"
    
#     if page_type == "landing":
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\nimport Badge from '../components/ui/Badge'\n"
    
#     elif page_type == "dashboard":
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\nimport Badge from '../components/ui/Badge'\nimport Spinner from '../components/ui/Spinner'\n"
    
#     elif page_type == "pricing":
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\nimport Badge from '../components/ui/Badge'\n"
    
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\nimport Input from '../components/ui/Input'\n"
    
#     elif page_type == "features":
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\n"
    
#     elif page_type == "faq":
#         return base_imports + "import Card from '../components/ui/Card'\n"
    
#     elif page_type == "about":
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\nimport Badge from '../components/ui/Badge'\n"
    
#     else:
#         return base_imports + "import Button from '../components/ui/Button'\nimport Card from '../components/ui/Card'\n"


# def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
#     """Generate a single page with component imports"""
    
#     page_type = _classify(page)
#     page_name = _to_pascal(page)
    
#     logger.info(f"  Generating {page_name} (type: {page_type})...")
    
#     # Build prompt based on page type
#     prompt = _build_prompt(page_type, page, ctx)
    
#     # Call LLM
#     try:
#         response = llm.invoke(prompt)
#         raw = response.content if hasattr(response, "content") else str(response)
#         raw = _FENCE_RE.sub("", raw).replace("```", "").strip()
        
#         # Extract JSX
#         jsx = _extract_jsx(raw)
        
#         if not jsx or len(jsx) < 100:
#             logger.warning(f"  {page_name}: insufficient content, using fallback")
#             return _fallback_page(page_name, ctx)
        
#         # Get component imports for this page type
#         imports = _get_component_imports(page_type)
        
#         # Clean up JSX to ensure proper syntax
#         jsx = _clean_jsx(jsx, ctx['primary'])
        
#         # Build the full page with correct TypeScript syntax
#         content = f"""import React from 'react'
# {imports}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx}
#     </Layout>
#   )
# }}
# """
        
#         return {
#             "filename": f"frontend/src/pages/{page_name}.tsx",
#             "content": content,
#         }
        
#     except Exception as e:
#         logger.error(f"  {page_name}: error - {e}")
#         return _fallback_page(page_name, ctx)


# def _clean_jsx(jsx: str, primary_color: str) -> str:
#     """Clean and fix JSX syntax"""
#     # Fix style attributes (add missing double braces)
#     jsx = re.sub(r'style=\{([^}]+)\}', r'style={{\1}}', jsx)
    
#     # Fix self-closing tags
#     jsx = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*[^/])>', r'<\1 \2 />', jsx)
    
#     # Ensure proper className usage
#     jsx = re.sub(r'class=', r'className=', jsx)
    
#     # Replace placeholder colors with actual primary color
#     jsx = jsx.replace('primary-600', primary_color.lstrip('#'))
#     jsx = jsx.replace('indigo-600', primary_color.lstrip('#'))
    
#     return jsx


# def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
#     """Build prompt for specific page type"""
    
#     base = f"""Generate a complete {page_name} page for {ctx['app_name']} ({ctx['industry']}).

# App description: {ctx['user_prompt']}
# Primary color: {ctx['primary']}
# Tone: {ctx['tone']}

# CRITICAL RULES:
# 1. Output ONLY JSX - no export, no function wrapper
# 2. Use Tailwind CSS classes only
# 3. Content must be SPECIFIC to {ctx['app_name']}
# 4. Use realistic data, not placeholders
# 5. Include hover effects, shadows, rounded corners
# 6. Use className instead of class
# 7. For style attributes, use double braces: style={{{{ color: 'red' }}}}
# 8. Self-close void elements: <input />, <br />, <img />
# 9. Close all HTML tags properly
# 10. Use the primary color {ctx['primary']} for buttons and accents

# Generate the JSX for the main content area (inside Layout component):
# """
    
#     if page_type == "landing":
#         return base + """
# Create a landing page with:
# - Hero section: gradient background, headline, subtitle, two buttons (primary and outline)
# - Features section: 3 cards with icons, titles, descriptions
# - CTA section: background with primary color, headline, button
# - Use realistic content specific to the app
# """
    
#     elif page_type == "dashboard":
#         return base + """
# Create a dashboard page with:
# - Header: Welcome message, page title, date selector
# - Stats grid: 4 metric cards with numbers, labels, trends
# - Recent activity: Table with 5 rows of recent data (name, action, date, status)
# - Use realistic data specific to the app domain
# """
    
#     elif page_type == "pricing":
#         return base + """
# Create a pricing page with:
# - Header: Title, subtitle
# - Pricing cards: 3 plans (Basic, Pro, Enterprise) with:
#   - Plan name
#   - Price
#   - Features list (5-6 items)
#   - CTA button
#   - Highlight the most popular plan
# - FAQ section: 3-4 questions with answers using <details> and <summary>
# """
    
#     elif page_type == "auth_login":
#         return base + """
# Create a login page with split layout:
# - Left side: Gradient background with app name, tagline, features list
# - Right side: Login form with:
#   - Email input
#   - Password input
#   - "Remember me" checkbox
#   - Submit button
#   - Link to signup page
# """
    
#     elif page_type == "auth_signup":
#         return base + """
# Create a signup page with split layout:
# - Left side: Gradient background with app name, tagline, features list
# - Right side: Signup form with:
#   - Name input
#   - Email input
#   - Password input
#   - Confirm password input
#   - Submit button
#   - Link to login page
# """
    
#     elif page_type == "contact":
#         return base + """
# Create a contact page with split layout:
# - Left side: Contact information with:
#   - Address
#   - Phone
#   - Email
#   - Hours
# - Right side: Contact form with:
#   - Name
#   - Email
#   - Subject
#   - Message
#   - Submit button
# """
    
#     elif page_type == "about":
#         return base + """
# Create an about page with:
# - Hero: Company name, mission statement
# - Team section: 4 team member cards (name, role, bio, avatar placeholder)
# - Values section: 3 core values with icons and descriptions
# - Stats section: 3 company metrics
# """
    
#     elif page_type == "features":
#         return base + """
# Create a features page with:
# - Hero: Main headline about features
# - Features grid: 6 feature cards with:
#   - Icon
#   - Title
#   - Description
#   - Optional badge
# - CTA section at bottom
# """
    
#     elif page_type == "faq":
#         return base + """
# Create an FAQ page with:
# - Hero: Title, subtitle, search bar placeholder
# - FAQ accordion: 6 questions with answers using <details> and <summary>
# - Contact support section: Card with support options
# """
    
#     else:
#         return base + """
# Create a well-structured page with:
# - Hero section: Title, subtitle, optional CTA button
# - Main content: 2-3 relevant sections with specific content
# - CTA section at bottom
# - Make all content specific to the app's purpose
# """


# def _extract_jsx(raw: str) -> str:
#     """Extract JSX from LLM output"""
    
#     # Remove any markdown code blocks
#     raw = re.sub(r'```jsx?\s*', '', raw)
#     raw = re.sub(r'```\s*$', '', raw)
    
#     # Find first JSX element
#     for tag in ["<div", "<section", "<header", "<main", "<form", "<div className=", "<section className="]:
#         idx = raw.find(tag)
#         if idx != -1:
#             jsx = raw[idx:]
#             # Remove trailing backticks
#             jsx = re.sub(r"`+\s*$", "", jsx)
#             # Remove any trailing export statements
#             jsx = re.sub(r'\s*export\s+default\s+\w+\s*;?\s*$', '', jsx)
#             return jsx.strip()
    
#     return raw.strip()


# def _fallback_page(page_name: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
#     """Generate fallback page when LLM fails"""
    
#     imports = _get_component_imports("generic")
#     primary = ctx['primary']
    
#     content = f"""import React from 'react'
# {imports}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       <div className="container-custom py-20 text-center">
#         <div className="max-w-2xl mx-auto">
#           <div className="text-6xl mb-6">🚀</div>
#           <h1 className="text-4xl font-bold mb-4">{page_name}</h1>
#           <p className="text-muted text-lg mb-8">
#             This page is being generated with AI. Content will appear soon.
#           </p>
#           <Button 
#             variant="primary" 
#             onClick={{() => window.location.href = '/'}}
#           >
#             Go Home
#           </Button>
#         </div>
#       </div>
#     </Layout>
#   )
# }}
# """
    
#     return {
#         "filename": f"frontend/src/pages/{page_name}.tsx",
#         "content": content,
#     }


# def frontend_pages_node(state: Dict[str, Any]) -> Dict[str, Any]:
#     """Generate all pages with shared components"""
    
#     site_plan = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages = site_plan.get("pages", [])
    
#     if not pages:
#         logger.warning("No pages to generate")
#         return {"code_files": []}
    
#     # Context for LLM
#     ctx = {
#         "user_prompt": state.get("user_prompt", ""),
#         "industry": requirements.get("industry", "Technology"),
#         "app_name": site_plan.get("app_name") or requirements.get("app_name", "App"),
#         "tone": site_plan.get("tone") or requirements.get("tone", "professional"),
#         "primary": site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5"),
#         "secondary": site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
#     }
    
#     # Initialize LLM
#     try:
#         from backend.llm_client import get_llm
#         llm = get_llm(temperature=0.4, max_tokens=2000)
#     except Exception as e:
#         logger.error(f"Failed to initialize LLM: {e}")
#         # Return fallback pages if LLM unavailable
#         generated = []
#         for page in pages:
#             page_name = _to_pascal(page)
#             generated.append(_fallback_page(page_name, ctx))
#         return {"code_files": generated}
    
#     logger.info(f"🎨 Generating {len(pages)} pages with shared components...")
    
#     generated = []
#     workers = min(MAX_WORKERS, len(pages))
    
#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {
#             pool.submit(_generate_page, page, ctx, llm): page 
#             for page in pages
#         }
        
#         for future in as_completed(futures):
#             page = futures[future]
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info(f"  ✅ {result['filename']}")
#             except Exception as e:
#                 logger.error(f"  ❌ {page}: {e}")
#                 page_name = _to_pascal(page)
#                 generated.append(_fallback_page(page_name, ctx))
    
#     logger.info(f"✅ Generated {len(generated)} pages")
    
#     return {"code_files": generated}


# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Dict, Any, List

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 8
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index", "main")): 
#         return "landing"
#     if any(x in n for x in ("dashboard", "portal", "admin")): 
#         return "dashboard"
#     if any(x in n for x in ("pricing", "plan", "subscription")): 
#         return "pricing"
#     if any(x in n for x in ("contact", "getintouch", "support")): 
#         return "contact"
#     if any(x in n for x in ("about", "team", "company")): 
#         return "about"
#     if any(x in n for x in ("feature", "solution", "service")): 
#         return "features"
#     if any(x in n for x in ("faq", "help", "questions")): 
#         return "faq"
#     if any(x in n for x in ("login", "signin", "sign-in")): 
#         return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up")): 
#         return "auth_signup"
#     return "generic"


# def _get_component_imports(page_type: str) -> str:
#     """Return only the imports needed for this page type using correct relative paths"""
    
#     # All imports use relative paths from src/pages to src/components
#     imports = []
    
#     # Always import Layout
#     imports.append("import Layout from '../components/layouts/Layout'")
    
#     if page_type == "landing":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
    
#     elif page_type == "dashboard":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
#         imports.append("import Spinner from '../components/ui/Spinner'")
    
#     elif page_type == "pricing":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
    
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Input from '../components/ui/Input'")
    
#     elif page_type == "features":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
    
#     elif page_type == "faq":
#         imports.append("import Card from '../components/ui/Card'")
    
#     elif page_type == "about":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
    
#     else:  # generic
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
    
#     return "\n".join(imports)


# def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
#     """Generate a single page with correct component imports"""
    
#     page_type = _classify(page)
#     page_name = _to_pascal(page)
    
#     logger.info(f"  Generating {page_name} (type: {page_type})...")
    
#     # Build prompt based on page type
#     prompt = _build_prompt(page_type, page, ctx)
    
#     # Call LLM
#     try:
#         response = llm.invoke(prompt)
#         raw = response.content if hasattr(response, "content") else str(response)
#         raw = _FENCE_RE.sub("", raw).replace("```", "").strip()
        
#         # Extract JSX
#         jsx = _extract_jsx(raw)
        
#         if not jsx or len(jsx) < 100:
#             logger.warning(f"  {page_name}: insufficient content, using fallback")
#             return _fallback_page(page_name, ctx)
        
#         # Get component imports for this page type
#         imports = _get_component_imports(page_type)
        
#         # Clean up JSX to ensure proper syntax
#         jsx = _clean_jsx(jsx, ctx['primary'])
        
#         # Build the full page with correct structure
#         content = f"""import React from 'react'
# {imports}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx}
#     </Layout>
#   )
# }}
# """
        
#         return {
#             "filename": f"frontend/src/pages/{page_name}.tsx",
#             "content": content,
#         }
        
#     except Exception as e:
#         logger.error(f"  {page_name}: error - {e}")
#         return _fallback_page(page_name, ctx)


# def _clean_jsx(jsx: str, primary_color: str) -> str:
#     """Clean and fix JSX syntax"""
#     # Fix style attributes (add missing double braces)
#     jsx = re.sub(r'style=\{([^}]+)\}', r'style={{\1}}', jsx)
    
#     # Fix self-closing tags
#     jsx = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*[^/])>', r'<\1 \2 />', jsx)
    
#     # Ensure proper className usage
#     jsx = re.sub(r'class=', r'className=', jsx)
    
#     # Replace placeholder colors with actual primary color
#     jsx = jsx.replace('primary-600', primary_color.lstrip('#'))
#     jsx = jsx.replace('indigo-600', primary_color.lstrip('#'))
    
#     # Fix any potential import statements in JSX
#     jsx = re.sub(r'import\s+.*?;', '', jsx)
    
#     return jsx


# def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
#     """Build prompt for specific page type"""
    
#     # Get the actual component names for the prompt
#     components = _get_component_names_for_prompt(page_type)
    
#     base = f"""Generate the JSX content for a {page_name} page.

# App Name: {ctx['app_name']}
# Industry: {ctx['industry']}
# Description: {ctx['user_prompt']}
# Primary Color: {ctx['primary']}
# Tone: {ctx['tone']}

# IMPORTANT RULES:
# 1. Output ONLY the JSX content (what goes inside the Layout component)
# 2. Use Tailwind CSS classes for styling
# 3. Use the following imported components: {components}
# 4. Content must be SPECIFIC to {ctx['app_name']} in the {ctx['industry']} industry
# 5. Use realistic data, not placeholder text like "Lorem ipsum"
# 6. Include hover effects, shadows, rounded corners
# 7. For inline styles, use double braces: style={{{{ color: '{ctx['primary']}' }}}}
# 8. Use className instead of class
# 9. Self-close void elements: <input />, <br />, <img />
# 10. Close all HTML tags properly

# Generate the JSX content:
# """
    
#     if page_type == "landing":
#         return base + """
# Create a landing page with:
# - Hero section: gradient background, headline (5-7 words), subtitle, two buttons (primary and outline)
# - Features section: 3 cards with emoji icons, titles, descriptions
# - CTA section: background with primary color, headline, button
# - Stats section: 3 metrics with numbers (e.g., "10k+ Users", "99.9% Uptime")
# """
    
#     elif page_type == "dashboard":
#         return base + """
# Create a dashboard page with:
# - Header: Welcome message, page title, date selector
# - Stats grid: 4 metric cards with numbers, labels, trends (up/down)
# - Recent activity: Table with 5 rows of realistic data (name, action, date, status)
# - Chart placeholder: Simple bar chart using CSS divs (7 data points)
# """
    
#     elif page_type == "pricing":
#         return base + """
# Create a pricing page with:
# - Header: Title, subtitle
# - Pricing cards: 3 plans with:
#   - Plan name (specific to this industry)
#   - Price
#   - Features list (5-6 items)
#   - CTA button
#   - Highlight the most popular plan
# - FAQ section: 4 questions with answers using <details> and <summary>
# """
    
#     elif page_type == "auth_login":
#         return base + """
# Create a login page with split layout:
# - Left side: Gradient background with app name, tagline, 3 bullet points
# - Right side: Login form with:
#   - Email input
#   - Password input
#   - "Remember me" checkbox
#   - Submit button
#   - Link to signup page
# """
    
#     elif page_type == "auth_signup":
#         return base + """
# Create a signup page with split layout:
# - Left side: Gradient background with app name, tagline, 3 bullet points
# - Right side: Signup form with:
#   - Full name input
#   - Email input
#   - Password input
#   - Confirm password input
#   - Submit button
#   - Link to login page
# """
    
#     elif page_type == "contact":
#         return base + """
# Create a contact page with split layout:
# - Left side: Contact information with:
#   - Address
#   - Phone
#   - Email
#   - Hours of operation
# - Right side: Contact form with:
#   - Name
#   - Email
#   - Subject
#   - Message
#   - Submit button
# """
    
#     elif page_type == "about":
#         return base + """
# Create an about page with:
# - Hero: Company name, mission statement (2-3 sentences)
# - Team section: 4 team member cards with:
#   - Avatar (initials in circle)
#   - Name
#   - Role
#   - Short bio
# - Values section: 3 core values with emoji icons and descriptions
# - Stats section: 3 company metrics (years, customers, team size)
# """
    
#     elif page_type == "features":
#         return base + """
# Create a features page with:
# - Hero: Headline about features, subtitle
# - Features grid: 6 feature cards with:
#   - Emoji icon
#   - Title
#   - Description
# - CTA section at bottom with primary color background
# """
    
#     elif page_type == "faq":
#         return base + """
# Create an FAQ page with:
# - Hero: Title, subtitle, search bar placeholder
# - FAQ accordion: 6 questions with answers using <details> and <summary>
# - Contact support section: Card with support options
# """
    
#     else:
#         return base + """
# Create a well-structured page with:
# - Hero section: Title, subtitle, optional CTA button
# - Main content: 2-3 relevant sections with specific content for this app
# - CTA section at bottom
# - Make all content specific to the app's purpose
# """


# def _get_component_names_for_prompt(page_type: str) -> str:
#     """Get component names to include in prompt"""
#     if page_type == "landing":
#         return "Button, Card, Badge"
#     elif page_type == "dashboard":
#         return "Button, Card, Badge, Spinner"
#     elif page_type == "pricing":
#         return "Button, Card, Badge"
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         return "Button, Card, Input"
#     elif page_type == "features":
#         return "Button, Card"
#     elif page_type == "faq":
#         return "Card"
#     elif page_type == "about":
#         return "Button, Card, Badge"
#     else:
#         return "Button, Card"


# def _extract_jsx(raw: str) -> str:
#     """Extract JSX from LLM output"""
    
#     # Remove any markdown code blocks
#     raw = re.sub(r'```jsx?\s*', '', raw)
#     raw = re.sub(r'```\s*$', '', raw)
    
#     # Remove any import statements that might have leaked
#     raw = re.sub(r'import\s+.*?;?\n', '', raw)
    
#     # Remove any export statements
#     raw = re.sub(r'export\s+default\s+\w+\s*;?\s*$', '', raw)
    
#     # Find first JSX element
#     for tag in ["<div", "<section", "<header", "<main", "<form"]:
#         idx = raw.find(tag)
#         if idx != -1:
#             jsx = raw[idx:]
#             # Remove trailing backticks and whitespace
#             jsx = re.sub(r"`+\s*$", "", jsx)
#             # Ensure proper nesting (simple balance check)
#             open_count = jsx.count('<') - jsx.count('/>')
#             close_count = jsx.count('>') - jsx.count('/>')
#             if open_count > close_count:
#                 # Add missing closing tags if needed
#                 jsx += '\n</div>' * (open_count - close_count)
#             return jsx.strip()
    
#     return raw.strip()


# def _fallback_page(page_name: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
#     """Generate fallback page when LLM fails"""
    
#     imports = _get_component_imports("generic")
#     primary = ctx['primary']
    
#     content = f"""import React from 'react'
# {imports}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       <div className="container-custom py-20">
#         <div className="max-w-2xl mx-auto text-center">
#           <div className="text-6xl mb-6">🚀</div>
#           <h1 className="text-4xl font-bold text-gray-900 mb-4">{page_name}</h1>
#           <p className="text-lg text-muted mb-8">
#             Welcome to the {page_name} page. Content is being prepared.
#           </p>
#           <Button 
#             variant="primary" 
#             onClick={{() => window.location.href = '/'}}
#           >
#             Return Home
#           </Button>
#         </div>
#       </div>
#     </Layout>
#   )
# }}
# """
    
#     return {
#         "filename": f"frontend/src/pages/{page_name}.tsx",
#         "content": content,
#     }


# def frontend_pages_node(state: Dict[str, Any]) -> Dict[str, Any]:
#     """Generate all pages with correct component imports"""
    
#     site_plan = state.get("site_plan", {})
#     requirements = state.get("requirements", {})
#     pages = site_plan.get("pages", [])
    
#     if not pages:
#         logger.warning("No pages to generate")
#         return {"code_files": []}
    
#     # Context for LLM
#     ctx = {
#         "user_prompt": state.get("user_prompt", ""),
#         "industry": requirements.get("industry", "Technology"),
#         "app_name": site_plan.get("app_name") or requirements.get("app_name", "App"),
#         "tone": site_plan.get("tone") or requirements.get("tone", "professional"),
#         "primary": site_plan.get("primary_color") or requirements.get("primary_color", "#4f46e5"),
#         "secondary": site_plan.get("secondary_color") or requirements.get("secondary_color", "#0ea5e9"),
#     }
    
#     # Initialize LLM
#     try:
#         from backend.llm_client import get_llm
#         llm = get_llm(temperature=0.4, max_tokens=2500)
#     except Exception as e:
#         logger.error(f"Failed to initialize LLM: {e}")
#         # Return fallback pages if LLM unavailable
#         generated = []
#         for page in pages:
#             page_name = _to_pascal(page)
#             generated.append(_fallback_page(page_name, ctx))
#         return {"code_files": generated}
    
#     logger.info(f"🎨 Generating {len(pages)} pages with shared components...")
    
#     generated = []
#     workers = min(MAX_WORKERS, len(pages))
    
#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {
#             pool.submit(_generate_page, page, ctx, llm): page 
#             for page in pages
#         }
        
#         for future in as_completed(futures):
#             page = futures[future]
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info(f"  ✅ {result['filename']}")
#             except Exception as e:
#                 logger.error(f"  ❌ {page}: {e}")
#                 page_name = _to_pascal(page)
#                 generated.append(_fallback_page(page_name, ctx))
    
#     # Sort by filename to maintain consistent order
#     generated.sort(key=lambda x: x['filename'])
    
#     logger.info(f"✅ Generated {len(generated)} pages")
    
#     return {"code_files": generated}


# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Dict, Any, List

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 8
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index", "main")): 
#         return "landing"
#     if any(x in n for x in ("dashboard", "portal", "admin")): 
#         return "dashboard"
#     if any(x in n for x in ("pricing", "plan", "subscription")): 
#         return "pricing"
#     if any(x in n for x in ("contact", "getintouch", "support")): 
#         return "contact"
#     if any(x in n for x in ("about", "team", "company")): 
#         return "about"
#     if any(x in n for x in ("feature", "solution", "service")): 
#         return "features"
#     if any(x in n for x in ("faq", "help", "questions")): 
#         return "faq"
#     if any(x in n for x in ("login", "signin", "sign-in")): 
#         return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up")): 
#         return "auth_signup"
#     return "generic"


# def _get_component_imports(page_type: str) -> str:
#     imports = ["import Layout from '../components/layouts/Layout'"]
    
#     if page_type == "landing":
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'",
#             "import Badge from '../components/ui/Badge'"
#         ])
#     elif page_type == "dashboard":
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'",
#             "import Badge from '../components/ui/Badge'",
#             "import Spinner from '../components/ui/Spinner'"
#         ])
#     elif page_type == "pricing":
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'",
#             "import Badge from '../components/ui/Badge'"
#         ])
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'",
#             "import Input from '../components/ui/Input'"
#         ])
#     elif page_type == "features":
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'"
#         ])
#     elif page_type == "faq":
#         imports.append("import Card from '../components/ui/Card'")
#     elif page_type == "about":
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'",
#             "import Badge from '../components/ui/Badge'"
#         ])
#     else:
#         imports.extend([
#             "import Button from '../components/ui/Button'",
#             "import Card from '../components/ui/Card'"
#         ])
    
#     return "\n".join(imports)


# def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
#     page_type = _classify(page)
#     page_name = _to_pascal(page)
    
#     logger.info(f"  Generating {page_name} (type: {page_type})...")
    
#     try:
#         prompt = _build_prompt(page_type, page, ctx)
#         response = llm.invoke(prompt)
#         raw = response.content if hasattr(response, "content") else str(response)
#         raw = _FENCE_RE.sub("", raw).replace("```", "").strip()
        
#         jsx = _extract_jsx(raw)
        
#         if not jsx or len(jsx) < 100:
#             logger.warning(f"  {page_name}: insufficient content, using fallback")
#             return _fallback_page(page_name, ctx)
        
#         imports = _get_component_imports(page_type)
#         jsx = _clean_jsx(jsx, ctx['primary'])
        
#         content = f"""import React from 'react'
# {imports}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx}
#     </Layout>
#   )
# }}
# """
        
#         return {
#             "filename": f"frontend/src/pages/{page_name}.tsx",
#             "content": content,
#         }
        
#     except Exception as e:
#         logger.error(f"  {page_name}: error - {e}")
#         return _fallback_page(page_name, ctx)


# def _clean_jsx(jsx: str, primary_color: str) -> str:
#     jsx = re.sub(r'style=\{([^}]+)\}', r'style={{\1}}', jsx)
#     jsx = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*[^/])>', r'<\1 \2 />', jsx)
#     jsx = re.sub(r'class=', r'className=', jsx)
#     jsx = re.sub(r'import\s+.*?;', '', jsx)
#     return jsx


# def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
#     components = _get_component_names_for_prompt(page_type)
    
#     base = f"""Generate JSX content for a {page_name} page.

# App: {ctx['app_name']}
# Industry: {ctx['industry']}
# Description: {ctx['user_prompt']}
# Primary Color: {ctx['primary']}

# RULES:
# 1. Output ONLY JSX content
# 2. Use Tailwind CSS classes
# 3. Use components: {components}
# 4. Use double braces for styles: style={{{{ color: 'red' }}}}
# 5. Use className not class
# 6. Self-close void elements: <input />
# 7. Close all tags properly
# 8. Content must be specific to {ctx['app_name']}

# Generate JSX:
# """
    
#     if page_type == "landing":
#         return base + """
# Create landing page with:
# - Hero: gradient background, headline, subtitle, two buttons
# - Features: 3 cards with icons, titles, descriptions
# - CTA: primary color background, headline, button
# - Stats: 3 metrics with numbers
# """
    
#     elif page_type == "dashboard":
#         return base + """
# Create dashboard with:
# - Header: welcome message, title, date selector
# - Stats: 4 metric cards with numbers, labels, trends
# - Recent activity: table with 5 rows of realistic data
# """
    
#     elif page_type == "pricing":
#         return base + """
# Create pricing with:
# - Header: title, subtitle
# - Pricing cards: 3 plans with name, price, features, button
# - FAQ: 4 questions with answers using details/summary
# """
    
#     elif page_type == "auth_login":
#         return base + """
# Create login page with split layout:
# - Left: gradient background with app name, tagline, features
# - Right: form with email, password, remember me, submit button, signup link
# """
    
#     elif page_type == "auth_signup":
#         return base + """
# Create signup page with split layout:
# - Left: gradient background with app name, tagline, features
# - Right: form with name, email, password, confirm password, submit button, login link
# """
    
#     elif page_type == "contact":
#         return base + """
# Create contact page with split layout:
# - Left: contact info (address, phone, email, hours)
# - Right: form with name, email, subject, message, submit button
# """
    
#     elif page_type == "about":
#         return base + """
# Create about page with:
# - Hero: company name, mission statement
# - Team: 4 member cards with name, role, bio
# - Values: 3 core values with descriptions
# - Stats: 3 company metrics
# """
    
#     elif page_type == "features":
#         return base + """
# Create features page with:
# - Hero: headline about features
# - Features grid: 6 cards with icon, title, description
# - CTA section at bottom
# """
    
#     elif page_type == "faq":
#         return base + """
# Create FAQ page with:
# - Hero: title, subtitle
# - FAQ accordion: 6 questions with answers using details/summary
# - Support section with contact options
# """
    
#     else:
#         return base + """
# Create well-structured page with:
# - Hero section: title, subtitle, optional CTA
# - Main content: 2-3 relevant sections
# - CTA section at bottom
# """


# def _get_component_names_for_prompt(page_type: str) -> str:
#     if page_type == "landing":
#         return "Button, Card, Badge"
#     elif page_type == "dashboard":
#         return "Button, Card, Badge, Spinner"
#     elif page_type == "pricing":
#         return "Button, Card, Badge"
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         return "Button, Card, Input"
#     elif page_type == "features":
#         return "Button, Card"
#     elif page_type == "faq":
#         return "Card"
#     elif page_type == "about":
#         return "Button, Card, Badge"
#     else:
#         return "Button, Card"


# def _extract_jsx(raw: str) -> str:
#     raw = re.sub(r'```jsx?\s*', '', raw)
#     raw = re.sub(r'```\s*$', '', raw)
#     raw = re.sub(r'import\s+.*?;?\n', '', raw)
#     raw = re.sub(r'export\s+default\s+\w+\s*;?\s*$', '', raw)
    
#     for tag in ["<div", "<section", "<header", "<main", "<form"]:
#         idx = raw.find(tag)
#         if idx != -1:
#             jsx = raw[idx:]
#             jsx = re.sub(r"`+\s*$", "", jsx)
#             return jsx.strip()
    
#     return raw.strip()


# def _fallback_page(page_name: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
#     imports = _get_component_imports("generic")
    
#     content = f"""import React from 'react'
# {imports}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       <div className="container-custom py-20">
#         <div className="max-w-2xl mx-auto text-center">
#           <div className="text-6xl mb-6">🚀</div>
#           <h1 className="text-4xl font-bold text-gray-900 mb-4">{page_name}</h1>
#           <p className="text-lg text-muted mb-8">
#             Welcome to the {page_name} page.
#           </p>
#           <Button 
#             variant="primary" 
#             onClick={{() => window.location.href = '/'}}
#           >
#             Return Home
#           </Button>
#         </div>
#       </div>
#     </Layout>
#   )
# }}
# """
    
#     return {
#         "filename": f"frontend/src/pages/{page_name}.tsx",
#         "content": content,
#     }


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
#         llm = get_llm(temperature=0.4, max_tokens=2500)
#     except Exception as e:
#         logger.error(f"Failed to initialize LLM: {e}")
#         generated = []
#         for page in pages:
#             page_name = _to_pascal(page)
#             generated.append(_fallback_page(page_name, ctx))
#         return {"code_files": generated}
    
#     logger.info(f"Generating {len(pages)} pages...")
    
#     generated = []
#     workers = min(MAX_WORKERS, len(pages))
    
#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {
#             pool.submit(_generate_page, page, ctx, llm): page 
#             for page in pages
#         }
        
#         for future in as_completed(futures):
#             page = futures[future]
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info(f"  Generated {result['filename']}")
#             except Exception as e:
#                 logger.error(f"  Failed {page}: {e}")
#                 page_name = _to_pascal(page)
#                 generated.append(_fallback_page(page_name, ctx))
    
#     generated.sort(key=lambda x: x['filename'])
#     logger.info(f"Generated {len(generated)} pages")
    
#     return {"code_files": generated}


# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Dict, Any, List

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 8
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index", "main")): 
#         return "landing"
#     if any(x in n for x in ("dashboard", "portal", "admin")): 
#         return "dashboard"
#     if any(x in n for x in ("pricing", "plan", "subscription")): 
#         return "pricing"
#     if any(x in n for x in ("contact", "getintouch", "support")): 
#         return "contact"
#     if any(x in n for x in ("about", "team", "company")): 
#         return "about"
#     if any(x in n for x in ("feature", "solution", "service")): 
#         return "features"
#     if any(x in n for x in ("faq", "help", "questions")): 
#         return "faq"
#     if any(x in n for x in ("login", "signin", "sign-in")): 
#         return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up")): 
#         return "auth_signup"
#     return "generic"


# def _get_component_imports(page_type: str) -> List[str]:
#     """Return list of imports for the page"""
#     imports = ["import Layout from '../components/layouts/Layout"]
    
#     if page_type == "landing":
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
#         imports.append("import Badge from '../components/ui/Badge")
#     elif page_type == "dashboard":
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
#         imports.append("import Badge from '../components/ui/Badge")
#         imports.append("import Spinner from '../components/ui/Spinner")
#     elif page_type == "pricing":
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
#         imports.append("import Badge from '../components/ui/Badge")
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
#         imports.append("import Input from '../components/ui/Input")
#     elif page_type == "features":
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
#     elif page_type == "faq":
#         imports.append("import Card from '../components/ui/Card")
#     elif page_type == "about":
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
#         imports.append("import Badge from '../components/ui/Badge")
#     else:
#         imports.append("import Button from '../components/ui/Button")
#         imports.append("import Card from '../components/ui/Card")
    
#     return imports


# def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
#     page_type = _classify(page)
#     page_name = _to_pascal(page)
    
#     logger.info(f"  Generating {page_name} (type: {page_type})...")
    
#     try:
#         prompt = _build_prompt(page_type, page_name, ctx)
#         response = llm.invoke(prompt)
#         raw = response.content if hasattr(response, "content") else str(response)
#         raw = _FENCE_RE.sub("", raw).replace("```", "").strip()
        
#         # Clean the JSX
#         jsx = _clean_jsx(raw, ctx['primary'])
        
#         # Get imports
#         imports = _get_component_imports(page_type)
        
#         # Build the full page content
#         content = f"""import React from 'react'
# {chr(10).join(imports)}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx}
#     </Layout>
#   )
# }}
# """
        
#         return {
#             "filename": f"frontend/src/pages/{page_name}.tsx",
#             "content": content,
#         }
        
#     except Exception as e:
#         logger.error(f"  {page_name}: error - {e}")
#         return _fallback_page(page_name, ctx)


# def _clean_jsx(jsx: str, primary_color: str) -> str:
#     """Clean and fix JSX syntax"""
#     # Remove any import statements
#     jsx = re.sub(r'import\s+.*?;?\n', '', jsx)
    
#     # Remove any export statements
#     jsx = re.sub(r'export\s+default\s+\w+\s*;?\s*$', '', jsx)
    
#     # Fix style attributes - add double braces
#     jsx = re.sub(r'style=\{([^}]+)\}', r'style={{\1}}', jsx)
    
#     # Fix style objects that might be missing braces
#     jsx = re.sub(r'style=\{\s*color:\s*([^}]+)\s*\}', r'style={{\n          color: \1\n        }}', jsx)
    
#     # Convert class to className
#     jsx = re.sub(r'class=', r'className=', jsx)
    
#     # Fix self-closing tags
#     jsx = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*[^/])>', r'<\1 \2 />', jsx)
    
#     # Ensure proper nesting - add missing closing divs if needed
#     open_divs = jsx.count('<div') - jsx.count('</div>')
#     if open_divs > 0:
#         jsx += '\n' + '  ' * open_divs + '</div>' * open_divs
    
#     return jsx.strip()


# def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
#     """Build prompt for the LLM"""
    
#     base = f"""Generate the JSX content for a {page_name} page.

# App Name: {ctx['app_name']}
# Industry: {ctx['industry']}
# Description: {ctx['user_prompt']}
# Primary Color: {ctx['primary']}

# CRITICAL RULES:
# 1. Output ONLY the JSX content (what goes inside the Layout component)
# 2. Use Tailwind CSS classes for styling
# 3. Use className NOT class
# 4. For inline styles, format like this: style={{{{ color: '{ctx['primary']}' }}}}
# 5. Self-close void elements: <input />, <br />, <img />
# 6. Close all HTML tags properly
# 7. Use realistic data specific to the app
# 8. DO NOT include import statements
# 9. DO NOT include export statements
# 10. Start directly with a div or section element

# Generate the JSX content:
# """
    
#     if page_type == "landing":
#         return base + """
# Create a landing page with:
# - Hero section with gradient background, headline, subtitle, and two buttons
# - Features section with 3 cards showing key features
# - Call to action section with primary color background
# - Stats section with 3 metrics
# """
    
#     elif page_type == "dashboard":
#         return base + """
# Create a dashboard with:
# - Header with welcome message and date picker
# - 4 metric cards showing key stats
# - Recent activity table with 5 rows of data
# - Chart placeholder using divs
# """
    
#     elif page_type == "pricing":
#         return base + """
# Create a pricing page with:
# - Header with title and subtitle
# - 3 pricing cards with name, price, features list, and button
# - FAQ section with 4 questions and answers
# """
    
#     elif page_type == "auth_login":
#         return base + """
# Create a login page with split layout:
# - Left side with gradient background, app name, and features
# - Right side with login form (email, password, remember me, submit button, signup link)
# """
    
#     elif page_type == "auth_signup":
#         return base + """
# Create a signup page with split layout:
# - Left side with gradient background, app name, and features
# - Right side with signup form (name, email, password, confirm password, submit button, login link)
# """
    
#     elif page_type == "contact":
#         return base + """
# Create a contact page with split layout:
# - Left side with contact info (address, phone, email, hours)
# - Right side with contact form (name, email, subject, message, submit button)
# """
    
#     elif page_type == "about":
#         return base + """
# Create an about page with:
# - Hero section with company name and mission
# - Team section with 4 member cards (name, role, bio)
# - Values section with 3 core values
# """
    
#     elif page_type == "features":
#         return base + """
# Create a features page with:
# - Hero section with headline about features
# - Features grid with 6 cards (icon, title, description)
# - Call to action section
# """
    
#     elif page_type == "faq":
#         return base + """
# Create an FAQ page with:
# - Hero section with title and subtitle
# - FAQ accordion with 6 questions and answers using <details> and <summary>
# - Support section with contact options
# """
    
#     else:
#         return base + """
# Create a well-structured page with:
# - Hero section with title, subtitle, and optional button
# - 2-3 main content sections with relevant information
# - Call to action section at the bottom
# """


# def _fallback_page(page_name: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
#     """Generate a fallback page when LLM fails"""
#     imports = _get_component_imports("generic")
    
#     content = f"""import React from 'react'
# {chr(10).join(imports)}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       <div className="container-custom py-20">
#         <div className="max-w-2xl mx-auto text-center">
#           <div className="text-6xl mb-6">🚀</div>
#           <h1 className="text-4xl font-bold text-gray-900 mb-4">{page_name}</h1>
#           <p className="text-lg text-muted mb-8">
#             Welcome to the {page_name} page. Content is being generated.
#           </p>
#           <Button 
#             variant="primary" 
#             onClick={{() => window.location.href = '/'}}
#           >
#             Return Home
#           </Button>
#         </div>
#       </div>
#     </Layout>
#   )
# }}
# """
    
#     return {
#         "filename": f"frontend/src/pages/{page_name}.tsx",
#         "content": content,
#     }


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
#         llm = get_llm(temperature=0.4, max_tokens=2500)
#     except Exception as e:
#         logger.error(f"Failed to initialize LLM: {e}")
#         generated = []
#         for page in pages:
#             page_name = _to_pascal(page)
#             generated.append(_fallback_page(page_name, ctx))
#         return {"code_files": generated}
    
#     logger.info(f"Generating {len(pages)} pages...")
    
#     generated = []
#     workers = min(MAX_WORKERS, len(pages))
    
#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {
#             pool.submit(_generate_page, page, ctx, llm): page 
#             for page in pages
#         }
        
#         for future in as_completed(futures):
#             page = futures[future]
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info(f"  Generated {result['filename']}")
#             except Exception as e:
#                 logger.error(f"  Failed {page}: {e}")
#                 page_name = _to_pascal(page)
#                 generated.append(_fallback_page(page_name, ctx))
    
#     generated.sort(key=lambda x: x['filename'])
#     logger.info(f"Generated {len(generated)} pages")
    
#     return {"code_files": generated}


# from __future__ import annotations

# import logging
# import re
# from concurrent.futures import ThreadPoolExecutor, as_completed
# from typing import Dict, Any, List

# logger = logging.getLogger(__name__)

# MAX_WORKERS = 8
# _FENCE_RE = re.compile(r"```[a-zA-Z]*")


# def _to_pascal(name: str) -> str:
#     name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
#     return "".join(w.capitalize() for w in name.split()) or name


# def _classify(page: str) -> str:
#     n = page.lower()
#     if any(x in n for x in ("home", "landing", "index", "main")): 
#         return "landing"
#     if any(x in n for x in ("dashboard", "portal", "admin")): 
#         return "dashboard"
#     if any(x in n for x in ("pricing", "plan", "subscription")): 
#         return "pricing"
#     if any(x in n for x in ("contact", "getintouch", "support")): 
#         return "contact"
#     if any(x in n for x in ("about", "team", "company")): 
#         return "about"
#     if any(x in n for x in ("feature", "solution", "service")): 
#         return "features"
#     if any(x in n for x in ("faq", "help", "questions")): 
#         return "faq"
#     if any(x in n for x in ("login", "signin", "sign-in")): 
#         return "auth_login"
#     if any(x in n for x in ("signup", "register", "sign-up")): 
#         return "auth_signup"
#     return "generic"


# def _get_component_imports(page_type: str) -> List[str]:
#     """Return list of imports for the page"""
#     imports = ["import Layout from '../components/layouts/Layout'"]
    
#     if page_type == "landing":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
#     elif page_type == "dashboard":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
#         imports.append("import Spinner from '../components/ui/Spinner'")
#     elif page_type == "pricing":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
#     elif page_type in ("contact", "auth_login", "auth_signup"):
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Input from '../components/ui/Input'")
#     elif page_type == "features":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#     elif page_type == "faq":
#         imports.append("import Card from '../components/ui/Card'")
#     elif page_type == "about":
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
#         imports.append("import Badge from '../components/ui/Badge'")
#     else:
#         imports.append("import Button from '../components/ui/Button'")
#         imports.append("import Card from '../components/ui/Card'")
    
#     return imports


# def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
#     page_type = _classify(page)
#     page_name = _to_pascal(page)
    
#     logger.info(f"  Generating {page_name} (type: {page_type})...")
    
#     # Always start with a complete template
#     imports = _get_component_imports(page_type)
    
#     try:
#         prompt = _build_prompt(page_type, page_name, ctx)
#         response = llm.invoke(prompt)
#         raw = response.content if hasattr(response, "content") else str(response)
#         raw = _FENCE_RE.sub("", raw).replace("```", "").strip()
        
#         # Extract and clean the JSX content
#         jsx = _extract_jsx(raw)
        
#         if not jsx or len(jsx) < 50:
#             logger.warning(f"  {page_name}: insufficient content, using template")
#             jsx = _get_default_jsx(page_name, page_type, ctx)
        
#         # Clean the JSX
#         jsx = _clean_jsx(jsx, ctx['primary'])
        
#         # Build the complete page with imports
#         content = f"""import React from 'react'
# {chr(10).join(imports)}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx}
#     </Layout>
#   )
# }}
# """
        
#         return {
#             "filename": f"frontend/src/pages/{page_name}.tsx",
#             "content": content,
#         }
        
#     except Exception as e:
#         logger.error(f"  {page_name}: error - {e}")
#         return _fallback_page(page_name, ctx, page_type)


# def _get_default_jsx(page_name: str, page_type: str, ctx: Dict[str, Any]) -> str:
#     """Get default JSX template for a page type"""
#     primary = ctx['primary']
    
#     templates = {
#         "landing": f'''<div className="min-h-screen">
#   <section className="bg-gradient-to-r from-{primary.replace('#', '')} to-purple-600 text-white py-20">
#     <div className="container-custom text-center">
#       <h1 className="text-5xl font-bold mb-4">Welcome to {ctx['app_name']}</h1>
#       <p className="text-xl mb-8">Your solution for {ctx['industry']}</p>
#       <div className="flex gap-4 justify-center">
#         <Button variant="primary" size="lg">Get Started</Button>
#         <Button variant="outline" size="lg">Learn More</Button>
#       </div>
#     </div>
#   </section>
#   <section className="py-20">
#     <div className="container-custom">
#       <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
#       <div className="grid md:grid-cols-3 gap-8">
#         <Card hoverable padding="lg">
#           <div className="text-4xl mb-4">🚀</div>
#           <h3 className="text-xl font-semibold mb-2">Feature One</h3>
#           <p className="text-muted">Description of feature one</p>
#         </Card>
#         <Card hoverable padding="lg">
#           <div className="text-4xl mb-4">⚡</div>
#           <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
#           <p className="text-muted">Description of feature two</p>
#         </Card>
#         <Card hoverable padding="lg">
#           <div className="text-4xl mb-4">🔒</div>
#           <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
#           <p className="text-muted">Description of feature three</p>
#         </Card>
#       </div>
#     </div>
#   </section>
#   <section className="bg-gray-50 py-20">
#     <div className="container-custom text-center">
#       <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
#       <p className="text-lg text-muted mb-8">Join thousands of satisfied customers</p>
#       <Button variant="primary" size="lg">Get Started Now</Button>
#     </div>
#   </section>
# </div>''',
        
#         "dashboard": f'''<div className="p-6">
#   <div className="mb-8">
#     <h1 className="text-3xl font-bold">Dashboard</h1>
#     <p className="text-muted">Welcome back to {ctx['app_name']}</p>
#   </div>
#   <div className="grid md:grid-cols-4 gap-6 mb-8">
#     <Card padding="md">
#       <div className="text-2xl font-bold text-primary">1,234</div>
#       <div className="text-muted">Total Users</div>
#     </Card>
#     <Card padding="md">
#       <div className="text-2xl font-bold text-primary">$12,345</div>
#       <div className="text-muted">Revenue</div>
#     </Card>
#     <Card padding="md">
#       <div className="text-2xl font-bold text-primary">89%</div>
#       <div className="text-muted">Engagement</div>
#     </Card>
#     <Card padding="md">
#       <div className="text-2xl font-bold text-primary">24/7</div>
#       <div className="text-muted">Support</div>
#     </Card>
#   </div>
#   <Card padding="lg">
#     <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
#     <div className="space-y-3">
#       <div className="flex justify-between items-center py-2 border-b">
#         <span>User joined</span>
#         <span className="text-muted">2 minutes ago</span>
#       </div>
#       <div className="flex justify-between items-center py-2 border-b">
#         <span>New purchase</span>
#         <span className="text-muted">1 hour ago</span>
#       </div>
#       <div className="flex justify-between items-center py-2 border-b">
#         <span>Report generated</span>
#         <span className="text-muted">3 hours ago</span>
#       </div>
#     </div>
#   </Card>
# </div>''',
        
#         "pricing": f'''<div className="py-20">
#   <div className="container-custom">
#     <div className="text-center mb-12">
#       <h1 className="text-4xl font-bold mb-4">Simple Pricing</h1>
#       <p className="text-lg text-muted">Choose the plan that works for you</p>
#     </div>
#     <div className="grid md:grid-cols-3 gap-8">
#       <Card padding="lg">
#         <h3 className="text-2xl font-bold mb-2">Basic</h3>
#         <div className="text-4xl font-bold mb-4">$19<span className="text-lg text-muted">/month</span></div>
#         <ul className="space-y-2 mb-6">
#           <li>✓ Feature 1</li>
#           <li>✓ Feature 2</li>
#           <li>✓ Feature 3</li>
#         </ul>
#         <Button variant="outline" fullWidth>Get Started</Button>
#       </Card>
#       <Card padding="lg" className="border-primary shadow-lg">
#         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
#           <Badge variant="success">Popular</Badge>
#         </div>
#         <h3 className="text-2xl font-bold mb-2">Pro</h3>
#         <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-muted">/month</span></div>
#         <ul className="space-y-2 mb-6">
#           <li>✓ All Basic features</li>
#           <li>✓ Feature 4</li>
#           <li>✓ Feature 5</li>
#         </ul>
#         <Button variant="primary" fullWidth>Get Started</Button>
#       </Card>
#       <Card padding="lg">
#         <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
#         <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-muted">/month</span></div>
#         <ul className="space-y-2 mb-6">
#           <li>✓ All Pro features</li>
#           <li>✓ Feature 6</li>
#           <li>✓ Priority support</li>
#         </ul>
#         <Button variant="outline" fullWidth>Contact Sales</Button>
#       </Card>
#     </div>
#   </div>
# </div>''',
#     }
    
#     return templates.get(page_type, f'''<div className="container-custom py-20">
#   <div className="max-w-2xl mx-auto text-center">
#     <h1 className="text-4xl font-bold mb-4">{page_name}</h1>
#     <p className="text-lg text-muted mb-8">Welcome to the {page_name} page.</p>
#     <Button variant="primary" onClick={{() => window.location.href = '/'}}>Return Home</Button>
#   </div>
# </div>''')


# def _clean_jsx(jsx: str, primary_color: str) -> str:
#     """Clean and fix JSX syntax"""
#     # Remove any import statements
#     jsx = re.sub(r'import\s+.*?;?\n', '', jsx)
    
#     # Remove any export statements
#     jsx = re.sub(r'export\s+default\s+\w+\s*;?\s*$', '', jsx)
    
#     # Remove HTML comments
#     jsx = re.sub(r'<!--.*?-->', '', jsx)
    
#     # Fix style attributes - add double braces
#     jsx = re.sub(r'style=\{([^}]+)\}', r'style={{\1}}', jsx)
    
#     # Convert class to className
#     jsx = re.sub(r'class=', r'className=', jsx)
    
#     # Fix self-closing tags
#     jsx = re.sub(r'<([a-zA-Z][a-zA-Z0-9]*)\s+([^>]*[^/])>', r'<\1 \2 />', jsx)
    
#     return jsx.strip()


# def _extract_jsx(raw: str) -> str:
#     """Extract JSX from LLM output"""
#     # Remove markdown code blocks
#     raw = re.sub(r'```jsx?\s*', '', raw)
#     raw = re.sub(r'```\s*$', '', raw)
    
#     # Find the first JSX element
#     for tag in ["<div", "<section", "<header", "<main", "<form"]:
#         idx = raw.find(tag)
#         if idx != -1:
#             jsx = raw[idx:]
#             # Remove trailing backticks
#             jsx = re.sub(r"`+\s*$", "", jsx)
#             return jsx.strip()
    
#     return raw.strip()


# def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
#     """Build prompt for the LLM"""
#     return f"""Generate JSX content for a {page_name} page.

# App: {ctx['app_name']}
# Industry: {ctx['industry']}
# Description: {ctx['user_prompt']}

# RULES:
# 1. Output ONLY JSX - NO imports, NO exports
# 2. Use Tailwind CSS classes
# 3. Use className not class
# 4. Start with a div or section element
# 5. Use realistic content specific to the app

# Generate JSX:"""


# def _fallback_page(page_name: str, ctx: Dict[str, Any], page_type: str = "generic") -> Dict[str, Any]:
#     """Generate a fallback page"""
#     imports = _get_component_imports(page_type)
#     jsx = _get_default_jsx(page_name, page_type, ctx)
    
#     content = f"""import React from 'react'
# {chr(10).join(imports)}

# export default function {page_name}() {{
#   return (
#     <Layout>
#       {jsx}
#     </Layout>
#   )
# }}
# """
    
#     return {
#         "filename": f"frontend/src/pages/{page_name}.tsx",
#         "content": content,
#     }


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
#         llm = get_llm(temperature=0.4, max_tokens=2000)
#     except Exception as e:
#         logger.error(f"Failed to initialize LLM: {e}")
#         generated = []
#         for page in pages:
#             page_name = _to_pascal(page)
#             page_type = _classify(page)
#             generated.append(_fallback_page(page_name, ctx, page_type))
#         return {"code_files": generated}
    
#     logger.info(f"Generating {len(pages)} pages...")
    
#     generated = []
#     workers = min(MAX_WORKERS, len(pages))
    
#     with ThreadPoolExecutor(max_workers=workers) as pool:
#         futures = {
#             pool.submit(_generate_page, page, ctx, llm): page 
#             for page in pages
#         }
        
#         for future in as_completed(futures):
#             page = futures[future]
#             try:
#                 result = future.result()
#                 generated.append(result)
#                 logger.info(f"  Generated {result['filename']}")
#             except Exception as e:
#                 logger.error(f"  Failed {page}: {e}")
#                 page_name = _to_pascal(page)
#                 page_type = _classify(page)
#                 generated.append(_fallback_page(page_name, ctx, page_type))
    
#     generated.sort(key=lambda x: x['filename'])
#     logger.info(f"Generated {len(generated)} pages")
    
#     return {"code_files": generated}


"""
frontend_pages_node_fixed.py - Generate pages with PROPER imports

FIX: Pages were getting generated without imports because:
1. LLM response was overwriting the import block
2. JSX extraction was removing import statements
3. No fallback for missing imports

SOLUTION:
1. Always ensure imports are present
2. Extract only JSX body (no imports from LLM)
3. Validate imports before returning
"""

from __future__ import annotations

import logging
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import Dict, Any, List

logger = logging.getLogger(__name__)

MAX_WORKERS = 8
_FENCE_RE = re.compile(r"```[a-zA-Z]*")


def _to_pascal(name: str) -> str:
    name = re.sub(r"[^a-zA-Z0-9 ]", "", name)
    return "".join(w.capitalize() for w in name.split()) or name


def _classify(page: str) -> str:
    n = page.lower()
    if any(x in n for x in ("home", "landing", "index", "main")): 
        return "landing"
    if any(x in n for x in ("dashboard", "portal", "admin")): 
        return "dashboard"
    if any(x in n for x in ("pricing", "plan", "subscription")): 
        return "pricing"
    if any(x in n for x in ("contact", "getintouch", "support")): 
        return "contact"
    if any(x in n for x in ("about", "team", "company")): 
        return "about"
    if any(x in n for x in ("feature", "solution", "service")): 
        return "features"
    if any(x in n for x in ("faq", "help", "questions")): 
        return "faq"
    if any(x in n for x in ("login", "signin", "sign-in", "Login")): 
        return "auth_login"
    if any(x in n for x in ("signup", "register", "sign-up", "Signup")): 
        return "auth_signup"
    return "generic"


# ============================================================================
# COMPONENT IMPORTS BY PAGE TYPE
# ============================================================================

def _get_imports_for_page(page_type: str) -> List[str]:
    """Return required imports for each page type"""
    
    base_imports = [
        "import React from 'react'",
        "import Layout from '../components/layouts/Layout'",
    ]
    
    imports_map = {
        "landing": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Badge from '../components/ui/Badge'",
        ],
        "dashboard": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Badge from '../components/ui/Badge'",
            "import Spinner from '../components/ui/Spinner'",
        ],
        "pricing": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Badge from '../components/ui/Badge'",
        ],
        "contact": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Input from '../components/ui/Input'",
        ],
        "auth_login": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Input from '../components/ui/Input'",
        ],
        "auth_signup": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Input from '../components/ui/Input'",
        ],
        "features": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
        ],
        "faq": [
            "import Card from '../components/ui/Card'",
        ],
        "about": [
            "import Button from '../components/ui/Button'",
            "import Card from '../components/ui/Card'",
            "import Badge from '../components/ui/Badge'",
        ],
    }
    
    page_imports = imports_map.get(page_type, [
        "import Button from '../components/ui/Button'",
        "import Card from '../components/ui/Card'",
    ])
    
    return base_imports + page_imports


# ============================================================================
# JSX EXTRACTION & CLEANING
# ============================================================================

def _extract_jsx_body(raw: str) -> str:
    """
    Extract ONLY the JSX body, not imports/exports
    """
    if not raw:
        return ""
    
    # Remove markdown code fences
    raw = re.sub(r'```jsx?\s*', '', raw)
    raw = re.sub(r'```\s*$', '', raw)
    
    # Remove import statements
    raw = re.sub(r'^import\s+.*?(?:;|\n)', '', raw, flags=re.MULTILINE)
    
    # Remove export statements
    raw = re.sub(r'^export\s+default\s+function\s+\w+\s*\(\)\s*\{', '', raw, flags=re.MULTILINE)
    raw = re.sub(r'^export\s+default\s+function\s+\w+\s*\(\)\s*return\s*\(', '', raw, flags=re.MULTILINE)
    
    # Find first JSX element
    jsx_start = None
    for tag in ['<div', '<section', '<header', '<main', '<article', '<form']:
        idx = raw.find(tag)
        if idx != -1 and (jsx_start is None or idx < jsx_start):
            jsx_start = idx
    
    if jsx_start is not None:
        jsx = raw[jsx_start:]
        # Remove trailing closing braces/parens that might be from component wrapper
        jsx = re.sub(r'[\)}\s]*$', '', jsx)
        return jsx.strip()
    
    return raw.strip()


def _clean_jsx(jsx: str) -> str:
    """Clean JSX syntax"""
    if not jsx:
        return ""
    
    # Remove leftover closing braces from export
    jsx = re.sub(r'^\s*}\s*$', '', jsx, flags=re.MULTILINE)
    
    # Convert class to className
    jsx = re.sub(r'\bclass=', 'className=', jsx)
    
    # Fix unclosed tags for common elements
    for void_tag in ['img', 'input', 'hr', 'br']:
        jsx = re.sub(rf'<{void_tag}([^>]*)(?<!/)>', rf'<{void_tag}\1 />', jsx)
    
    # Balance braces/brackets/parens
    open_braces = jsx.count('{') - jsx.count('}')
    open_parens = jsx.count('(') - jsx.count(')')
    open_brackets = jsx.count('[') - jsx.count(']')
    
    if open_braces > 0:
        jsx += '\n' + '}' * open_braces
    if open_parens > 0:
        jsx += ')' * open_parens
    if open_brackets > 0:
        jsx += ']' * open_brackets
    
    return jsx.strip()


# ============================================================================
# PAGE GENERATION
# ============================================================================

def _generate_page(page: str, ctx: Dict[str, Any], llm) -> Dict[str, Any]:
    """Generate a single page with proper imports"""
    
    page_name = _to_pascal(page)
    page_type = _classify(page)
    
    logger.info(f"  Generating {page_name} ({page_type})...")
    
    try:
        # Build the prompt
        prompt = _build_prompt(page_type, page_name, ctx)
        
        # Call LLM
        response = llm.invoke(prompt)
        raw = response.content if hasattr(response, "content") else str(response)
        raw = _FENCE_RE.sub("", raw).replace("```", "").strip()
        
        # Extract ONLY the JSX body
        jsx_body = _extract_jsx_body(raw)
        
        # Clean the JSX
        jsx_body = _clean_jsx(jsx_body)
        
        # Validate we have content
        if not jsx_body or len(jsx_body) < 50:
            logger.warning(f"  {page_name}: insufficient content, using template")
            jsx_body = _get_default_jsx(page_name, page_type, ctx)
        
        # Build complete page with GUARANTEED imports
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
        
        # Verify imports are present
        if "import Layout" not in content or "Layout>" not in content:
            logger.error(f"  {page_name}: IMPORT VALIDATION FAILED")
            return _fallback_page(page_name, page_type, ctx)
        
        return {
            "filename": f"frontend/src/pages/{page_name}.tsx",
            "content": content,
        }
        
    except Exception as e:
        logger.error(f"  {page_name}: {e}")
        return _fallback_page(page_name, page_type, ctx)


def _build_prompt(page_type: str, page_name: str, ctx: Dict[str, Any]) -> str:
    """Build LLM prompt for page generation"""
    return f"""Generate JSX content for a {page_name} page.

App: {ctx['app_name']}
Industry: {ctx['industry']}
Type: {page_type}

CRITICAL RULES:
1. Output ONLY JSX elements - NO imports, NO exports, NO function wrapper
2. Start with a <div>, <section>, or <header> tag
3. Use Tailwind CSS classes (className, not class)
4. Make content specific to {ctx['app_name']}
5. Include real, meaningful content (not Lorem Ipsum)
6. Balance all tags: open and close every element

DO NOT include:
- import statements
- export default
- function wrapper
- return statement
- Comments

GENERATE ONLY JSX:"""


def _get_default_jsx(page_name: str, page_type: str, ctx: Dict[str, Any]) -> str:
    """Fallback JSX templates"""
    
    templates = {
        "landing": f'''<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
  <section className="py-20 text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-4">{ctx['app_name']}</h1>
    <p className="text-xl text-gray-600 mb-8">Your solution for {ctx['industry']}</p>
    <div className="flex gap-4 justify-center">
      <Button variant="primary" size="lg">Get Started</Button>
      <Button variant="outline" size="lg">Learn More</Button>
    </div>
  </section>
  <section className="py-20">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card hoverable padding="lg">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-muted">Lightning quick performance</p>
        </Card>
        <Card hoverable padding="lg">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-muted">Enterprise-grade security</p>
        </Card>
        <Card hoverable padding="lg">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Reliable</h3>
          <p className="text-muted">99.9% uptime guaranteed</p>
        </Card>
      </div>
    </div>
  </section>
</div>''',

        "dashboard": f'''<div className="p-6">
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
    <p className="text-muted">Welcome back to {ctx['app_name']}</p>
  </div>
  <div className="grid md:grid-cols-4 gap-6 mb-8">
    <Card padding="md">
      <div className="text-2xl font-bold text-blue-600">1,234</div>
      <div className="text-sm text-muted">Total Users</div>
    </Card>
    <Card padding="md">
      <div className="text-2xl font-bold text-green-600">$45,678</div>
      <div className="text-sm text-muted">Revenue</div>
    </Card>
    <Card padding="md">
      <div className="text-2xl font-bold text-purple-600">89%</div>
      <div className="text-sm text-muted">Growth</div>
    </Card>
    <Card padding="md">
      <div className="text-2xl font-bold text-orange-600">24/7</div>
      <div className="text-sm text-muted">Support</div>
    </Card>
  </div>
  <Card padding="lg">
    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
    <div className="space-y-3">
      <div className="flex justify-between py-2 border-b">
        <span className="text-gray-900">New user registered</span>
        <span className="text-sm text-muted">2 min ago</span>
      </div>
      <div className="flex justify-between py-2 border-b">
        <span className="text-gray-900">Payment received</span>
        <span className="text-sm text-muted">1 hour ago</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-gray-900">Report generated</span>
        <span className="text-sm text-muted">3 hours ago</span>
      </div>
    </div>
  </Card>
</div>''',

        "pricing": f'''<div className="py-20">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h1>
      <p className="text-lg text-gray-600">Choose the plan that works for you</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <Card padding="lg">
        <h3 className="text-2xl font-bold mb-2">Basic</h3>
        <div className="text-4xl font-bold mb-4">$19<span className="text-lg text-muted">/mo</span></div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center"><span className="mr-2">✓</span> Feature 1</li>
          <li className="flex items-center"><span className="mr-2">✓</span> Feature 2</li>
          <li className="flex items-center"><span className="mr-2">✓</span> Feature 3</li>
        </ul>
        <Button variant="outline" fullWidth>Get Started</Button>
      </Card>
      <Card padding="lg" className="border-2 border-blue-600">
        <Badge variant="success" className="mb-4">Popular</Badge>
        <h3 className="text-2xl font-bold mb-2">Pro</h3>
        <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-muted">/mo</span></div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center"><span className="mr-2">✓</span> All Basic features</li>
          <li className="flex items-center"><span className="mr-2">✓</span> Feature 4</li>
          <li className="flex items-center"><span className="mr-2">✓</span> Feature 5</li>
        </ul>
        <Button variant="primary" fullWidth>Get Started</Button>
      </Card>
      <Card padding="lg">
        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
        <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-muted">/mo</span></div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center"><span className="mr-2">✓</span> All Pro features</li>
          <li className="flex items-center"><span className="mr-2">✓</span> Feature 6</li>
          <li className="flex items-center"><span className="mr-2">✓</span> Priority support</li>
        </ul>
        <Button variant="outline" fullWidth>Contact Sales</Button>
      </Card>
    </div>
  </div>
</div>''',

        "contact": f'''<div className="py-20">
  <div className="container-custom max-w-2xl">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600">We'd love to hear from you</p>
    </div>
    <Card padding="lg">
      <form className="space-y-6">
        <Input label="Name" placeholder="Your name" />
        <Input label="Email" type="email" placeholder="your@email.com" />
        <Input label="Subject" placeholder="How can we help?" />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" rows={4} />
        </div>
        <Button variant="primary" fullWidth>Send Message</Button>
      </form>
    </Card>
  </div>
</div>''',

        "auth_login": f'''<div className="min-h-screen flex">
  <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-12 flex-col justify-between">
    <div>
      <h1 className="text-4xl font-bold mb-4">{ctx['app_name']}</h1>
      <p className="text-lg opacity-90">Sign in to your account</p>
    </div>
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <div>
          <p className="font-semibold">Fast</p>
          <p className="text-sm opacity-75">Lightning quick performance</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-2xl">✓</span>
        <div>
          <p className="font-semibold">Secure</p>
          <p className="text-sm opacity-75">Enterprise security</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-1 flex items-center justify-center p-6">
    <Card padding="lg" className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <form className="space-y-4">
        <Input label="Email" type="email" placeholder="your@email.com" />
        <Input label="Password" type="password" placeholder="••••••••" />
        <Button variant="primary" fullWidth>Sign In</Button>
      </form>
      <p className="text-center text-sm text-muted mt-4">
        Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
      </p>
    </Card>
  </div>
</div>''',
    }
    
    return templates.get(page_type, f'''<div className="container-custom py-20">
  <div className="max-w-2xl mx-auto text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">{page_name}</h1>
    <p className="text-lg text-gray-600 mb-8">Welcome to {page_name}</p>
    <Button variant="primary">Get Started</Button>
  </div>
</div>''')


def _fallback_page(page_name: str, page_type: str, ctx: Dict[str, Any]) -> Dict[str, Any]:
    """Generate fallback page with guaranteed imports"""
    
    imports = _get_imports_for_page(page_type)
    imports_str = '\n'.join(imports)
    
    jsx_body = _get_default_jsx(page_name, page_type, ctx)
    
    content = f"""{imports_str}

export default function {page_name}() {{
  return (
    <Layout>
      {jsx_body}
    </Layout>
  )
}}
"""
    
    return {
        "filename": f"frontend/src/pages/{page_name}.tsx",
        "content": content,
    }


# ============================================================================
# MAIN NODE
# ============================================================================

def frontend_pages_node(state: Dict[str, Any]) -> Dict[str, Any]:
    """Generate frontend pages with proper component imports"""
    
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
    
    # Get LLM
    try:
        from backend.llm_client import get_llm
        llm = get_llm(temperature=0.4, max_tokens=2000)
    except Exception as e:
        logger.warning(f"LLM init failed: {e}, using fallbacks")
        generated = []
        for page in pages:
            page_name = _to_pascal(page)
            page_type = _classify(page)
            generated.append(_fallback_page(page_name, page_type, ctx))
        return {"code_files": generated}
    
    logger.info(f"Generating {len(pages)} pages with proper imports...")
    
    generated = []
    workers = min(MAX_WORKERS, len(pages))
    
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {
            pool.submit(_generate_page, page, ctx, llm): page 
            for page in pages
        }
        
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
                generated.append(_fallback_page(page_name, page_type, ctx))
    
    generated.sort(key=lambda x: x['filename'])
    logger.info(f"✓ Generated {len(generated)} pages with imports")
    
    return {"code_files": generated}