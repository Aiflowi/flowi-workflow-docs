---
title: agentics Components
description: Audited Flowi Workflow built-in components in the agentics category.
---

# agentics components

Machine-readable reference: [`../../ai/components/agentics.json`](../../ai/components/agentics.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `agentics.AgenerateComponent` | aGenerate | AVAILABLE | Generate mock data for user defined schema. If a dataframe is provided, the component will generate similar rows. |
| `agentics.AMapComponent` | aMap | AVAILABLE | Augment the input dataframe adding new columns defined in the input schema. Rows are processed independently and in parallel using LLMs. |
| `agentics.AreduceComponent` | aReduce | AVAILABLE | Analyze the entire input dataframe at once and generate a new dataframe following the instruction and the required schema |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
