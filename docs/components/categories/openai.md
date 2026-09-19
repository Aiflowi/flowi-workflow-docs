---
title: openai Components
description: Audited Flowi Workflow built-in components in the openai category.
---

# openai components

Machine-readable reference: [`../../ai/components/openai.json`](../../ai/components/openai.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `openai.OpenAIModel` | OpenAI | AVAILABLE | Generates text using OpenAI LLMs. |
| `openai.OpenAIEmbeddings` | OpenAI Embeddings | AVAILABLE | Generate embeddings using OpenAI models. |
| `openai.OpenAIResponsesAPI` | OpenAI Responses API | AVAILABLE | Sends data strictly through the OpenAI Responses API. Provides both the generated OpenAI answer and the complete API response. |
| `openai.OpenAIVisionAnalyzer` | OpenAI Vision Analyzer | AVAILABLE | Downloads one image, converts it to Base64, and analyzes it with a GPT-4 model through the OpenAI Responses API. |
| `openai.OpenAIVoiceTranscriber` | OpenAI Voice Transcriber | AVAILABLE | Downloads one voice recording and transcribes it through the OpenAI Audio Transcriptions API. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
