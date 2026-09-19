---
title: data_source Components
description: Audited Flowi Workflow built-in components in the data_source category.
---

# data_source components

Machine-readable reference: [`../../ai/components/data_source.json`](../../ai/components/data_source.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `data_source.APIRequest` | API Request | AVAILABLE | Make HTTP requests using URL or cURL commands. |
| `data_source.MockDataGenerator` | Mock Data | AVAILABLE | Generate mock data for testing and development. |
| `data_source.SQLComponent` | SQL Database | AVAILABLE | Executes SQL queries on SQLAlchemy-compatible databases. |
| `data_source.URLComponent` | URL | AVAILABLE | Fetch content from one or more web pages, following links recursively. |
| `data_source.UnifiedWebSearch` | Web Search | AVAILABLE | Search the web, news, or RSS feeds. |
| `data_source.CSVtoData` | Load CSV | LEGACY | Load a CSV file, CSV from a file path, or a valid CSV string and convert it to a list of Data |
| `data_source.JSONtoData` | Load JSON | LEGACY | Convert a JSON file, JSON from a file path, or a JSON string to a Data object or a list of Data objects |
| `data_source.NewsSearch` | News Search | LEGACY | Searches Google News via RSS. Returns clean article data. |
| `data_source.RSSReaderSimple` | RSS Reader | LEGACY | Fetches and parses an RSS feed. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
