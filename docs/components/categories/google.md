---
title: google Components
description: Audited Flowi Workflow built-in components in the google category.
---

# google components

Machine-readable reference: [`../../ai/components/google.json`](../../ai/components/google.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `google.GoogleGenerativeAIModel` | Google Generative AI | AVAILABLE | Generate text using Google Generative AI. |
| `google.Google Generative AI Embeddings` | Google Generative AI Embeddings | AVAILABLE | Connect to Google's generative AI embeddings service using the GoogleGenerativeAIEmbeddings class, found in the langchain-google-genai pa... |
| `google.GoogleSearchAPICore` | Google Search API | AVAILABLE | Call Google Search API and return results as a DataFrame. |
| `google.GoogleSerperAPICore` | Google Serper API | AVAILABLE | Call the Serper.dev Google Search API. |
| `google.BigQueryExecutor` | BigQuery | BETA | Execute SQL queries on Google BigQuery. |
| `google.GmailLoaderComponent` | Gmail Loader | LEGACY | Loads emails from Gmail using provided credentials. |
| `google.GoogleOAuthToken` | Google OAuth Token | LEGACY | Generates a JSON string with your Google OAuth token. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
