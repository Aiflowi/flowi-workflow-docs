---
title: How do I use Ask AI in a workflow?
description: Use Ask AI to generate a workflow from flow context or get node-level explanations and suggestions, then review changes before applying them.
canonical_url: https://aiflowi.com/docs/ask-ai/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I use Ask AI in a workflow?

Ask AI assists inside AI Flowi Workflow at the flow and node levels. At flow level, it can use the current workflow context to generate a workflow artifact that you can download, import as a new flow, or use to replace the current flow after confirmation. At node level, it can explain, diagnose, and suggest configuration or improvements using the context you supply. Review its output and test the resulting workflow yourself.

## Prerequisites

- Open a workflow in the AI Flowi Workflow editor.
- Configure credentials for the selected Ask AI model provider. Keep credentials out of prompts and shared examples.
- For flow generation, know whether you want a separate imported flow or a confirmed replacement of the current one.

## Use flow-level Ask AI

1. Open Ask AI for the flow and describe the workflow you want help building.
2. Review the generated artifact against your intended components and connections. Ask AI builds context from nodes, component types, configured inputs, outputs, edges, handles, and flow metadata, and validates proposed components against the installed catalog before materializing an artifact.
3. Download the artifact if you need a copy, or import it as a new flow.
4. If you choose to replace the current flow, review the replacement and confirm it. The replacement path includes locked-flow protection.
5. Inspect the resulting connections and run a test appropriate to the flow. Structural validation does not confirm external credentials or runtime results.

## Use node-level Ask AI

Select a component and supply the relevant node or flow context. Ask AI can explain that component, help diagnose an error, suggest configuration, or suggest improvements. Treat the response as guidance: the service does not establish that it executed, tested, saved, or changed a node. Make and test any intended configuration changes in the editor.

## Expected result

Flow-level assistance yields a workflow artifact for review and a documented import or confirmed replacement path. Node-level assistance yields an explanation or suggestion tied to the supplied component and flow context. The [first workflow tutorial](../tutorials/first-playground-workflow.md) shows how to test a simple flow after connecting components.

## Common errors

- **Ask AI cannot call the selected model:** Check that provider credentials exist and validate, that the model is enabled, and any timeout or provider error details. Do not paste credentials into a prompt.
- **A proposed component or connection does not fit:** Check the [component catalog](../components/index.md) and the accepted input and output types before applying the artifact.
- **The current flow cannot be replaced:** Check whether it is locked, then review the confirmation path. Importing as a new flow is a separate documented action.

## Related

[First workflow](../tutorials/first-playground-workflow.md) · [Workflow basics](../concepts/workflow-basics.md) · [Common errors](../troubleshooting/common-errors.md)
