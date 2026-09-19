---
title: tools Components
description: Audited Flowi Workflow built-in components in the tools category.
---

# tools components

Machine-readable reference: [`../../ai/components/tools.json`](../../ai/components/tools.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `tools.CalculatorTool` | Calculator | LEGACY | Perform basic arithmetic operations on a given expression. |
| `tools.GoogleSearchAPI` | Google Search API [DEPRECATED] | LEGACY | Call Google Search API. |
| `tools.GoogleSerperAPI` | Google Serper API [DEPRECATED] | LEGACY | Call the Serper.dev Google Search API. |
| `tools.PythonCodeStructuredTool` | Python Code Structured | LEGACY | structuredtool dataclass code to tool |
| `tools.PythonREPLTool` | Python REPL | LEGACY | A tool for running Python code in a REPL environment. |
| `tools.SearchAPI` | Search API | LEGACY | Call the searchapi.io API with result limiting |
| `tools.SearXNGTool` | SearXNG Search | LEGACY | A component that searches for tools using SearXNG. |
| `tools.SerpAPI` | Serp Search API | LEGACY | Call Serp Search API with result limiting |
| `tools.TavilyAISearch` | Tavily Search API | LEGACY | **Tavily Search API** is a search engine optimized for LLMs and RAG,         aimed at efficient, quick, and persistent search results. It... |
| `tools.WikidataAPI` | Wikidata API | LEGACY | Performs a search using the Wikidata API. |
| `tools.WikipediaAPI` | Wikipedia API | LEGACY | Call Wikipedia API. |
| `tools.YahooFinanceTool` | Yahoo! Finance | LEGACY | Uses [yfinance](https://pypi.org/project/yfinance/) (unofficial package) to access financial data and market information from Yahoo! Fina... |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
