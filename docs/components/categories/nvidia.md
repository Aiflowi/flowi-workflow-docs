---
title: nvidia Components
description: Audited Flowi Workflow built-in components in the nvidia category.
---

# nvidia components

Machine-readable reference: [`../../ai/components/nvidia.json`](../../ai/components/nvidia.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `nvidia.NVIDIAModelComponent` | NVIDIA | AVAILABLE | Generates text using NVIDIA LLMs. |
| `nvidia.NVIDIAEmbeddingsComponent` | NVIDIA Embeddings | AVAILABLE | Generate embeddings using NVIDIA models. |
| `nvidia.NvidiaRerankComponent` | NVIDIA Rerank | AVAILABLE | Rerank documents using the NVIDIA API. |
| `nvidia.NvidiaSystemAssistComponent` | NVIDIA System-Assist | AVAILABLE | (Windows only) Prompts NVIDIA System-Assist to interact with the NVIDIA GPU Driver. The user may query GPU specifications, state, and ask... |
| `nvidia.NvidiaIngestComponent` | NVIDIA Retriever Extraction | BETA | Multi-modal data extraction from documents using NVIDIA's NeMo API. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
