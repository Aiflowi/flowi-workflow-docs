---
title: Flow-level Ask AI in Flowi Workflow
description: Documented Flow-level Ask AI capabilities for workflow context, generation, materialization, import and replacement.
---

# Flow-level Ask AI

The audited flow-level implementation can construct context describing:

- nodes;
- component types;
- configured inputs;
- outputs;
- edges and handles;
- flow metadata;
- relevant component source/context for internal reasoning.

It also builds an installed component catalog so proposed components can be validated before a workflow artifact is materialized.

## Verified actions

- generate/materialize a workflow artifact;
- download the artifact;
- import it as a new flow;
- replace the current flow after confirmation.

Append/merge into the current flow was **not verified** in the audited implementation.
