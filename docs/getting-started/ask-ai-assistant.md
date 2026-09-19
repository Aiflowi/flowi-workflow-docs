---
title: Ask ChatGPT or DeepSeek to Build a Flowi Workflow
description: Give ChatGPT or DeepSeek the official Flowi AI Start Here link so it can teach a Flowi workflow step by step using verified components, ports and extension rules.
---

# Ask ChatGPT or DeepSeek for Flowi Help

## Recommended method

1. Open the public GitHub file `docs/AI_START_HERE.md`.
2. Copy its URL.
3. Paste that URL into a web-capable AI assistant.
4. Describe the workflow you want to build.
5. Ask the assistant to show the workflow map before the detailed instructions.

GitHub entry URL:

`https://github.com/ai-flowi/flowi-docs/blob/main/docs/AI_START_HERE.md`

## Copy-paste prompt

> Read this official Flowi Workflow documentation first. Act as my Flowi Workflow tutor. Show the workflow architecture first, then teach me node by node. Use only documented built-in components or clearly labelled documented Flowi extensions. Avoid Legacy components for new workflows, identify Beta components, check output/input compatibility before connecting nodes, and tell me when something is not documented. I want to build: [describe the workflow].

## Example

> I want to receive JSON from a webhook, extract customer name, email and request type with AI, then append the result to Google Sheets. Teach me one stage at a time and give me a test after each stage.

A strong answer should use the documented workflow recipe, verify real component IDs, validate connection types, explain where credentials are required without asking you to reveal them, and debug the first failing stage rather than replacing the entire workflow.

For more detail, see [AI Tutor Mode](ai-tutor-mode.md).
