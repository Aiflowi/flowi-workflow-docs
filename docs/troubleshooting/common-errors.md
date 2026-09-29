---
title: What do common workflow errors mean?
description: Diagnose missing components, incompatible connections, model setup, JSON imports, and component update errors in AI Flowi Workflow.
canonical_url: https://aiflowi.com/docs/troubleshooting/common-errors/
last_updated: 2026-09-29
author: Ai Flowi
---

# What do common workflow errors mean?

Common workflow errors point to a component, connection, or configuration step. Match the symptom below, check the documented cause, and retest that stage. The [error index](../ai/ERROR_INDEX.json) records the checks behind this guide.

## Why can't I find a suggested component?

Search the [built-in node index](../ai/BUILTIN_NODE_INDEX.json) for its name. A missing name might refer to a Custom or Published component rather than a built-in one. If the component is absent from the documentation, ask for its details instead of guessing a replacement.

## Why won't two components connect?

Compare the source output `types` with the target input `accepts`. A normal typed connection needs a shared type. If none matches, choose a documented processing or conversion component that produces the accepted type. See [workflow basics](../concepts/workflow-basics.md).

## Why isn't the model or Ask AI responding?

Confirm the selected model is enabled and its credential is configured. Check the error details for a timeout or provider failure. A valid port connection alone does not establish that the external model can run. Do not paste credentials into a support message.

## Why is a workflow JSON import rejected?

Check that the file is valid JSON and that its components are present. If the browser reports an unexpected file type, retry with a standard JSON export. Older exports may need compatibility handling and may not load. See [import and export](../workflow-lifecycle/index.md).

## What should I check after a component update?

Review any breaking-change confirmation, inspect the component's inputs, outputs, and connected edges, then retest the workflow. An old edge may not map to a changed port automatically.

## Related

[Troubleshooting](index.md) · [Workflow basics](../concepts/workflow-basics.md) · [Google connection errors](google-connections.md)
