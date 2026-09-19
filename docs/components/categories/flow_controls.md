---
title: flow_controls Components
description: Audited Flowi Workflow built-in components in the flow_controls category.
---

# flow_controls components

Machine-readable reference: [`../../ai/components/flow_controls.json`](../../ai/components/flow_controls.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `flow_controls.HTTPMethodRouter` | HTTP Method Router | AVAILABLE | Routes complete webhook Request Data to GET, POST, PUT, PATCH, or DELETE without removing any request fields. |
| `flow_controls.ConditionalRouter` | If-Else | AVAILABLE | Routes an input message to a corresponding output based on text comparison. |
| `flow_controls.LoopComponent` | Loop | AVAILABLE | Iterates through Data or Message objects, processing items individually and aggregating results from loop inputs. |
| `flow_controls.VerificationRouter` | Verification Router | AVAILABLE | Routes a complete verification result to Verified or Rejected without removing or changing any fields. |
| `flow_controls.Listen` | Listen | BETA | A component to listen for a notification. |
| `flow_controls.Notify` | Notify | BETA | A component to generate a notification to Get Notified component. |
| `flow_controls.RunFlow` | Run Flow | BETA | Executes another flow from within the same project. Can also be used as a tool for agents.   **Select a Flow to use the tool mode** |
| `flow_controls.DataConditionalRouter` | Condition | LEGACY | Route Data object(s) based on a condition applied to a specified key, including boolean validation. |
| `flow_controls.FlowTool` | Flow as Tool | LEGACY | Construct a Tool from a function that runs the loaded Flow. |
| `flow_controls.Pass` | Pass | LEGACY | Forwards the input message, unchanged. |
| `flow_controls.SubFlow` | Sub Flow | LEGACY | Generates a Component from a Flow, with all of its inputs, and  |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
