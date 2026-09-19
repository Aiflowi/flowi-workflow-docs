---
title: docling Components
description: Audited Flowi Workflow built-in components in the docling category.
---

# docling components

Machine-readable reference: [`../../ai/components/docling.json`](../../ai/components/docling.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `docling.ChunkDoclingDocument` | Chunk DoclingDocument | AVAILABLE | Use the DocumentDocument chunkers to split the document into chunks. |
| `docling.DoclingInline` | Docling | AVAILABLE | Uses Docling to process input documents running the Docling models locally. |
| `docling.DoclingRemote` | Docling Serve | AVAILABLE | Uses Docling to process input documents connecting to your instance of Docling Serve. |
| `docling.ExportDoclingDocument` | Export DoclingDocument | AVAILABLE | Export DoclingDocument to markdown, html or other formats. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
