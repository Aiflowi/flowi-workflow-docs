# Flowi Workflow Documentation

Official public documentation and AI-readable reference for **Flowi Workflow by AI Flowi**.

This repository is deliberately designed for two audiences at the same time:

1. **people** learning and building Flowi workflows; and
2. **AI assistants** such as ChatGPT and DeepSeek that need a reliable, structured source before teaching a student how to build a workflow.

## Students: paste this into ChatGPT

Use this file as the entry point:

**GitHub:** `https://github.com/ai-flowi/flowi-docs/blob/main/docs/AI_START_HERE.md`

Then ask:

> Read the Flowi Workflow documentation at this link first. Act as my Flowi Workflow tutor. Show me the workflow map, use only documented components, check connection compatibility, then teach me step by step. I want to build: [describe your workflow].

The AI entry file tells the assistant how to find the audited component catalog, verified recipes, integrations, extension components, troubleshooting guidance, and the student-tutor protocol.

## Fast links

- **AI entry point:** [`docs/AI_START_HERE.md`](docs/AI_START_HERE.md)
- **Student AI tutor guide:** [`docs/getting-started/ai-tutor-mode.md`](docs/getting-started/ai-tutor-mode.md)
- **Verified workflow recipes:** [`docs/ai/VERIFIED_WORKFLOW_RECIPES.json`](docs/ai/VERIFIED_WORKFLOW_RECIPES.json)
- **Task routing index:** [`docs/ai/TASK_ROUTING_INDEX.json`](docs/ai/TASK_ROUTING_INDEX.json)
- **Built-in component truth:** [`docs/ai/BUILTIN_NODE_INDEX.json`](docs/ai/BUILTIN_NODE_INDEX.json)
- **Documented Flowi extensions:** [`docs/ai/EXTENSION_COMPONENT_INDEX.json`](docs/ai/EXTENSION_COMPONENT_INDEX.json)
- **Telegram Bot integration:** [`docs/integrations/telegram/index.md`](docs/integrations/telegram/index.md)
- **Feature status:** [`docs/reference/feature-status.md`](docs/reference/feature-status.md)
- **Canonical documentation website:** https://docs.aiflowi.com/

## What is public here

This repository contains documentation, examples, public-safe metadata, integration interfaces, workflow recipes, and documentation deployment configuration.

It does **not** contain Flowi product implementation source code, private credentials, API keys, private component Python source, or customer data.

## Brand naming

- **AI Flowi** — company/brand
- **Flowi Workflow** — workflow automation product
- **Flowi** — preferred short product name

Recommended first mention: **Flowi Workflow by AI Flowi**.

## Documentation quality rules

- Built-in component names come from the audited public component catalog.
- `AVAILABLE` components are preferred for new workflows.
- `BETA` components must be labelled Beta.
- `LEGACY` components should not be recommended for new workflows.
- Documented Flowi extensions are clearly separated from built-in components.
- Examples never contain real credentials.
- Undocumented behavior must not be invented.
- Comparison pages describe documented capabilities rather than declaring a universal winner.

Last audited: **2026-09-18**
