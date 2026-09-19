---
title: datastax Components
description: Audited Flowi Workflow built-in components in the datastax category.
---

# datastax components

Machine-readable reference: [`../../ai/components/datastax.json`](../../ai/components/datastax.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `datastax.AstraDB` | Astra DB | AVAILABLE | Ingest and search documents in Astra DB |
| `datastax.AstraDBChatMemory` | Astra DB Chat Memory | AVAILABLE | Retrieves and stores chat messages from Astra DB. |
| `datastax.AstraDBCQLToolComponent` | Astra DB CQL | AVAILABLE | Create a tool to get transactional data from DataStax Astra DB CQL Table |
| `datastax.GraphRAG` | Graph RAG | AVAILABLE | Graph RAG traversal for vector store. |
| `datastax.HCD` | Hyper-Converged Database | AVAILABLE | Implementation of Vector Store using Hyper-Converged Database (HCD) with search capabilities |
| `datastax.AstraDBGraph` | Astra DB Graph | LEGACY | Implementation of Graph Vector Store using Astra DB |
| `datastax.AstraDBTool` | Astra DB Tool | LEGACY | Tool to run hybrid vector and metadata search on DataStax Astra DB Collection |
| `datastax.AstraVectorize` | Astra Vectorize | LEGACY | Configuration options for Astra Vectorize server-side embeddings.  |
| `datastax.Dotenv` | Dotenv | LEGACY | Load .env file into env vars |
| `datastax.GetEnvVar` | Get Environment Variable | LEGACY | Gets the value of an environment variable from the system. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
