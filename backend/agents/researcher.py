# import os
# from firecrawl import FirecrawlApp
# from backend.state import AgentState


# def research_node(state: AgentState):
#     """
#     Step 2: Research / Inspiration Agent
#     Firecrawl-version-safe implementation.
#     """

#     industry = state.get("requirements", {}).get("industry")
#     if not industry:
#         return {"research_context": ""}

#     api_key = os.getenv("FIRECRAWL_API_KEY")
#     if not api_key:
#         return {"research_context": ""}

#     app = FirecrawlApp(api_key=api_key)

#     query = f"modern {industry} landing page UI UX patterns 2026"

#     try:
#         search_result = app.search(
#             query=query,
#             limit=2,
#             scrape_options={"formats": ["markdown"]}
#         )
#     except Exception as e:
#         print("Firecrawl error:", e)
#         return {"research_context": ""}

#     context = ""

#     # 🔥 VERSION-SAFE RESULT HANDLING
#     # Firecrawl SDK differs by version
#     if hasattr(search_result, "results"):
#         items = search_result.results
#     elif hasattr(search_result, "data"):
#         items = search_result.data
#     else:
#         # Most common in newer SDKs: iterable object
#         items = search_result

#     for item in items:
#         markdown = getattr(item, "markdown", None)
#         if markdown:
#             context += markdown[:2000] + "\n\n"
#             # context += markdown + "\n\n"

#     return {"research_context": context.strip()}
