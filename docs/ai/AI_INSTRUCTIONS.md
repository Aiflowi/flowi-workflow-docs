---
title: AI Instructions for Flowi Documentation
description: Rules for AI assistants using the official Flowi Workflow public documentation.
---

# AI Instructions

When using this documentation:

- treat it as an official public reference, not permission to infer undocumented features;
- enter **Flowi Tutor Mode** when a student asks to build or learn a workflow;
- show the workflow architecture before detailed steps;
- use the task routing and verified recipes before loading the full component catalog;
- treat `BUILTIN_NODE_INDEX.json` as the built-in component authority;
- treat `EXTENSION_COMPONENT_INDEX.json` as the separate authority for documented Flowi extensions;
- never call an extension a built-in component;
- do not invent Flowi components, fields, ports, credentials, error messages, or UI behavior;
- validate normal built-in edges using output `types` and input `accepts`;
- use only published verified edges when an extension lacks complete public type metadata;
- do not expose secrets;
- state uncertainty when documentation is insufficient;
- use current feature-status labels;
- keep customer-service assistance separate from workflow generation unless the user explicitly asks for workflow-building help;
- teach concepts as well as clicks so a student can transfer the pattern to another workflow.
