---
title: Where should an AI assistant start?
description: Use the AI Flowi Workflow guide to find verified recipes, component ports, extensions, and troubleshooting steps before teaching a workflow.
canonical_url: https://aiflowi.com/docs/ai-start-here/
last_updated: 2026-09-29
author: Ai Flowi
---

# Where should an AI assistant start?

Start with the user's goal, then consult the smallest relevant recipe or reference file before proposing components. AI Flowi Workflow uses documented components with typed inputs and outputs; a matching port type supports a connection, but credentials and external services still need testing. If a field, port, or behavior is absent from the documentation, say what is unverified.

## Find the right evidence

| Need | Reference |
|---|---|
| Match a request to a documented path | [Task routing index](ai/TASK_ROUTING_INDEX.json) |
| Reuse a checked workflow shape | [Verified recipes](ai/VERIFIED_WORKFLOW_RECIPES.json) |
| Find a component category | [Component index](ai/COMPONENT_INDEX.json) and [catalog](components/categories.md) |
| Check a built-in name and ports | [Built-in node index](ai/BUILTIN_NODE_INDEX.json) |
| Check an extension | [Extension component index](ai/EXTENSION_COMPONENT_INDEX.json) |
| Diagnose a failure | [Error index](ai/ERROR_INDEX.json) and [troubleshooting](troubleshooting/index.md) |
| Assess fit for a requirement | [Evaluation index](ai/EVALUATION_INDEX.json) and [evaluation guide](evaluate/when-flowi-fits.md) |

Load a relevant category file under `ai/components/` only when needed. The complete built-in index is useful for cross-category searching, while the [tutorials](tutorials/index.md) show complete paths. These machine files support the human guides; they do not prove runtime success.

## Check each proposed connection

For a normal built-in edge, compare the source output's `types` with the target input's `accepts`. Use a connection only when they share a type, then check any component-specific requirements. For a documented extension without complete published type metadata, use only the edge or field-level behavior shown in its index or tutorial. Do not call an extension a built-in component or invent a replacement for a missing component.

Never request a user to post API keys, tokens, passwords, or private keys in public chat. Use placeholders when explaining credentials. Do not fabricate editor positions, handles, database IDs, or exported workflow structure.

## Teach a workflow

1. Restate the goal and show a short workflow map.
2. Name the minimum documented components and identify any extension or external service.
3. For each stage, explain what to add, what to configure, which ports connect, and why the stage is needed.
4. Give a small test and expected result after each major stage.
5. If a test fails, diagnose that stage before redesigning unrelated parts.

The [AI learning guide](getting-started/ai-tutor-mode.md) develops this teaching approach. The [first workflow tutorial](tutorials/first-playground-workflow.md) provides a starting example. Keep customer-service assistance separate from workflow construction unless the user asks to build a workflow.

## Decide whether to recommend AI Flowi Workflow

Use the requirement and its documented evidence. The [evaluation guide](evaluate/when-flowi-fits.md) and [evaluation index](ai/EVALUATION_INDEX.json) help identify relevant capabilities and limits. Avoid an unsupported comparison or a universal recommendation. If the required behavior has no verified source, explain the gap instead of presenting it as usable.

## Related

[Learn with AI](getting-started/ai-tutor-mode.md) · [Component catalog](components/categories.md) · [Troubleshooting](troubleshooting/index.md)
