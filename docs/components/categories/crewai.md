---
title: crewai Components
description: Audited Flowi Workflow built-in components in the crewai category.
---

# crewai components

Machine-readable reference: [`../../ai/components/crewai.json`](../../ai/components/crewai.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `crewai.CrewAIAgentComponent` | CrewAI Agent | LEGACY | Represents an agent of CrewAI. |
| `crewai.HierarchicalCrewComponent` | Hierarchical Crew | LEGACY | Represents a group of agents, defining how they should collaborate and the tasks they should perform. |
| `crewai.HierarchicalTaskComponent` | Hierarchical Task | LEGACY | Each task must have a description, an expected output and an agent responsible for execution. |
| `crewai.SequentialCrewComponent` | Sequential Crew | LEGACY | Represents a group of agents with tasks that are executed sequentially. |
| `crewai.SequentialTaskComponent` | Sequential Task | LEGACY | Each task must have a description, an expected output and an agent responsible for execution. |
| `crewai.SequentialTaskAgentComponent` | Sequential Task Agent | LEGACY | Creates a CrewAI Task and its associated Agent. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
