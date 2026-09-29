---
title: How do I import, export, or update a workflow?
description: Learn the documented JSON import and export paths, credential sanitization limit, and checks for component updates in AI Flowi Workflow.
canonical_url: https://aiflowi.com/docs/workflows/
last_updated: 2026-09-29
author: Ai Flowi
---

# How do I import, export, or update a workflow?

AI Flowi Workflow can import and export workflow JSON and update component definitions in a saved flow. The normal export path removes credential fields before download, but ordinary text fields may still contain secrets you entered. When an update changes component structure, review the proposed change, inspect connections, and retest the workflow.

## Prerequisites

- Have a workflow open for export or component updates, or a JSON file for import.
- Keep a copy of a workflow before making a change you may need to reverse.
- Remove real credentials from ordinary text fields before sharing an exported example. Use placeholders such as `YOUR_API_KEY_VARIABLE`.

## Import or export JSON

1. To export, use the normal workflow export action and download the JSON file. Inspect it before sharing: credential sanitization is not a complete data loss prevention check.
2. To import, select a valid workflow JSON file. The importer accepts a single flow object or a container with multiple flows.
3. Review imported components and connections. Some older edge and output formats have compatibility handling; other historical formats may need additional handling and may not load.
4. Test the imported flow with the required credentials and services configured for your environment.

## Update a component

1. Review the current component structure against the saved one when an update is offered.
2. Read any breaking-change warning before confirming. The update path can preserve input values when their names and types remain compatible and uses the current component code and structure.
3. Inspect every affected edge after the update. An incompatible edge may be lost rather than remapped automatically.
4. Retest the workflow, including any external connection on the changed path.

## Expected result

An import loads a workflow for inspection; an export downloads workflow JSON through the sanitization path. A component update applies the current component structure while preserving compatible values where possible. None of these actions establishes that an external credential or service will work at runtime.

## Common errors

- **JSON upload is rejected:** Check that the file contains valid JSON. If the browser reports a non-JSON MIME type, retry a standard JSON export.
- **An imported component is missing or differs:** Check component availability and compatibility handling for older formats. See [common errors](../troubleshooting/common-errors.md).
- **A connection disappears after an update:** Review the breaking-change warning, inspect edges, and reconnect or revise the affected path before retesting.

## Related

[Workflow basics](../concepts/workflow-basics.md) · [First workflow](../tutorials/first-playground-workflow.md) · [Common errors](../troubleshooting/common-errors.md)
