---
title: files_and_knowledge Components
description: Audited Flowi Workflow built-in components in the files_and_knowledge category.
---

# files_and_knowledge components

Machine-readable reference: [`../../ai/components/files_and_knowledge.json`](../../ai/components/files_and_knowledge.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `files_and_knowledge.KnowledgeBase` | Knowledge Base | AVAILABLE | Search and retrieve data from knowledge. |
| `files_and_knowledge.KnowledgeIngestion` | Knowledge Ingestion | AVAILABLE | Create or update knowledge in AI Flowi Workflow. |
| `files_and_knowledge.File` | Read File | AVAILABLE | Loads and returns the content from uploaded files. |
| `files_and_knowledge.SaveToFile` | Write File | AVAILABLE | Save data to local file, AWS S3, or Google Drive in the selected format. |
| `files_and_knowledge.Directory` | Directory | LEGACY | Recursively load files from a directory. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
