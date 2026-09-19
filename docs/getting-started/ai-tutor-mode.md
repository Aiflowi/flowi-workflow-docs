---
title: Learn Flowi Workflow with ChatGPT or DeepSeek
description: Paste the Flowi AI Start Here link into ChatGPT or DeepSeek and get step-by-step Flowi Workflow teaching using verified components, connections and debugging rules.
---

# Learn Flowi Workflow with an AI Tutor

The easiest way to use an AI assistant as a Flowi tutor is to give it the official **AI Start Here** page before asking it to design a workflow.

## One link to paste

GitHub:

`https://github.com/ai-flowi/flowi-docs/blob/main/docs/AI_START_HERE.md`

Canonical documentation:

`https://docs.aiflowi.com/AI_START_HERE/`

Then tell the assistant what you want to build.

## Recommended student prompt

> Read the Flowi Workflow documentation in the link first. Act as my Flowi Workflow tutor. Show me the full workflow map first, then teach me one stage at a time. Use only documented Flowi components or clearly labelled documented Flowi extensions. Check connection compatibility before telling me to connect nodes. Do not invent fields. I want to build: [your goal].

## What a good Flowi tutor should do

A good answer should not start by dumping hundreds of components. It should identify the smallest architecture that solves your goal, then teach the workflow in layers.

For example, if the goal is "receive a webhook, structure customer data, and save it to Google Sheets", the assistant can first show:

`Universal Webhook → Type Convert → Structured Output → Append Rows`

It should then verify each documented interface before asking you to connect it. If an AI model is required, it should explain where the model connects and why.

## Teaching sequence

The assistant should normally use this learning sequence:

1. **Goal** — what the workflow is supposed to achieve.
2. **Trigger** — where the data starts.
3. **Data shape** — whether the next component needs Message, JSON, Table, Data, LanguageModel, or another type.
4. **Logic** — deterministic rules such as If-Else where possible.
5. **AI** — use an LLM only where reasoning, extraction, generation, or semantic routing is useful.
6. **Action** — Google Sheets, API request, message send, storage, or another business action.
7. **Output** — what success should look like.
8. **Testing** — test one stage before adding the next.
9. **Debugging** — inspect the first failed node or connection instead of changing everything at once.

## If the AI is unsure

Ask it to quote the exact documented component ID and port types it used. If it cannot find the information in this repository, it should say **not documented** rather than guessing.

## Secrets

Do not paste real API keys, Telegram bot tokens, OAuth tokens, passwords, or private keys into a public AI conversation. Use masked placeholders in screenshots and examples.

## Why this page exists

Flowi contains a large component catalog. The AI entry files provide a smaller routing layer so an assistant can find the relevant components and tutorials without loading the whole catalog. This reduces hallucination risk and makes student teaching more consistent.
