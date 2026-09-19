---
title: llm_operations Components
description: Audited Flowi Workflow built-in components in the llm_operations category.
---

# llm_operations components

Machine-readable reference: [`../../ai/components/llm_operations.json`](../../ai/components/llm_operations.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `llm_operations.BatchRunComponent` | Batch Run | AVAILABLE | Runs an LLM on each row of a DataFrame column. If no column is specified, all columns are used. |
| `llm_operations.GuardrailValidator` | Guardrails | AVAILABLE | Validates input text against multiple security and safety guardrails using LLM-based detection. |
| `llm_operations.LLMSelectorComponent` | LLM Selector | AVAILABLE | Routes the input to the most appropriate LLM based on OpenRouter model specifications |
| `llm_operations.SmartRouter` | Smart Router | AVAILABLE | Routes an input message using LLM-based categorization. |
| `llm_operations.Smart Transform` | Smart Transform | AVAILABLE | Uses an LLM to generate a function for filtering or transforming structured data and messages. |
| `llm_operations.StructuredOutput` | Structured Output | AVAILABLE | Uses an LLM to generate structured data. Ideal for extraction and consistency. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
