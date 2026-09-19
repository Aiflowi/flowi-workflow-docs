---
title: twelvelabs Components
description: Audited Flowi Workflow built-in components in the twelvelabs category.
---

# twelvelabs components

Machine-readable reference: [`../../ai/components/twelvelabs.json`](../../ai/components/twelvelabs.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `twelvelabs.ConvertAstraToTwelveLabs` | Convert Astra DB to Pegasus Input | AVAILABLE | Converts Astra DB search results to inputs compatible with TwelveLabs Pegasus. |
| `twelvelabs.SplitVideo` | Split Video | AVAILABLE | Split a video into multiple clips of specified duration. |
| `twelvelabs.TwelveLabsPegasus` | TwelveLabs Pegasus | AVAILABLE | Chat with videos using TwelveLabs Pegasus API. |
| `twelvelabs.TwelveLabsPegasusIndexVideo` | TwelveLabs Pegasus Index Video | AVAILABLE | Index videos using TwelveLabs and add the video_id to metadata. |
| `twelvelabs.TwelveLabsTextEmbeddings` | TwelveLabs Text Embeddings | AVAILABLE | Generate embeddings using TwelveLabs text embedding models. |
| `twelvelabs.TwelveLabsVideoEmbeddings` | TwelveLabs Video Embeddings | AVAILABLE | Generate embeddings from videos using TwelveLabs video embedding models. |
| `twelvelabs.VideoFile` | Video File | AVAILABLE | Load a video file in common video formats. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
