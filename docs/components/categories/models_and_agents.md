---
title: models_and_agents Components
description: Audited Flowi Workflow built-in components in the models_and_agents category.
---

# models_and_agents components

Machine-readable reference: [`../../ai/components/models_and_agents.json`](../../ai/components/models_and_agents.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `models_and_agents.Agent` | Agent | AVAILABLE | Define the agent's instructions, then enter a task to complete using tools. |
| `models_and_agents.EmbeddingModel` | Embedding Model | AVAILABLE | Generate embeddings using a specified provider. |
| `models_and_agents.LanguageModelComponent` | Language Model | AVAILABLE | Runs a language model given a specified provider. |
| `models_and_agents.MCPTools` | MCP Tools | AVAILABLE | Connect to an MCP server to use its tools. |
| `models_and_agents.Memory` | Message History | AVAILABLE | Stores or retrieves stored chat messages from AI Flowi Workflow tables or an external memory. |
| `models_and_agents.Prompt Template` | Prompt Template | AVAILABLE | Create a prompt template with dynamic variables. |
| `models_and_agents.policies` | Policies | BETA | Component for building tool protection code from textual business policies and instructions. Powered by [ALTK ToolGuard](https://github.c... |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
