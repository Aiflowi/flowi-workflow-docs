---
title: Flowi AI Reference Files
description: Machine-readable Flowi Workflow reference files for component selection, verified recipes, task routing, extensions, capabilities, triggers, errors and entity identity.
---

# AI Reference Files

AI assistants should begin with [`../AI_START_HERE.md`](../AI_START_HERE.md) rather than loading every file.

## Routing and teaching

- `ai/TASK_ROUTING_INDEX.json` — maps common user intentions to the smallest relevant docs and categories.
- `ai/VERIFIED_WORKFLOW_RECIPES.json` — verified workflow architectures and typed edges.
- `ai/EVALUATION_INDEX.json` — evidence map for when Flowi is relevant to a user's requirements.
- `ai/WORKFLOW_SPEC.md` — component, connection, credential, extension, and teaching rules.
- `ai/AI_INSTRUCTIONS.md` — compact behavior rules.

## Components and extensions

- `ai/COMPONENT_INDEX.json` — category-level built-in index.
- `ai/components/*.json` — per-category built-in component metadata.
- `ai/BUILTIN_NODE_INDEX.json` — complete audited built-in catalog.
- `ai/EXTENSION_COMPONENT_INDEX.json` — documented Flowi extensions that are not core built-ins.

## Product truth

- `ai/ENTITY.json` — canonical product identity and disambiguation.
- `ai/FEATURE_STATUS.json` — feature-state metadata.
- `ai/CAPABILITY_TRUTH_MAP.json` — capability verification map.
- `ai/CONNECTION_INDEX.json` — documented connection information.
- `ai/INTEGRATION_INDEX.json` — built-in integration categories and extension pointer.
- `ai/TRIGGER_INDEX.json` — trigger-related components and integration notes.
- `ai/ERROR_INDEX.json` — public error/troubleshooting reference.

Machine-readable files support reliable retrieval but do not replace the human tutorials, feature-status pages, or runtime testing.
