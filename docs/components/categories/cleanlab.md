---
title: cleanlab Components
description: Audited Flowi Workflow built-in components in the cleanlab category.
---

# cleanlab components

Machine-readable reference: [`../../ai/components/cleanlab.json`](../../ai/components/cleanlab.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `cleanlab.CleanlabEvaluator` | Cleanlab Evaluator | AVAILABLE | Evaluates any LLM response using Cleanlab and outputs trust score and explanation. |
| `cleanlab.CleanlabRAGEvaluator` | Cleanlab RAG Evaluator | AVAILABLE | Evaluates context, query, and response from a RAG pipeline using Cleanlab and outputs trust metrics. |
| `cleanlab.CleanlabRemediator` | Cleanlab Remediator | AVAILABLE | Remediates an untrustworthy response based on trust score from the Cleanlab Evaluator, score threshold, and message handling settings. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
