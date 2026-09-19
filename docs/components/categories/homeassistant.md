---
title: homeassistant Components
description: Audited Flowi Workflow built-in components in the homeassistant category.
---

# homeassistant components

Machine-readable reference: [`../../ai/components/homeassistant.json`](../../ai/components/homeassistant.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `homeassistant.HomeAssistantControl` | Home Assistant Control | AVAILABLE | A very simple tool to control Home Assistant devices. Only action (turn_on, turn_off, toggle) and entity_id need to be provided. |
| `homeassistant.ListHomeAssistantStates` | List Home Assistant States | AVAILABLE | Retrieve states from Home Assistant. The agent only needs to specify 'filter_domain' (optional). Token and base_url are not exposed to th... |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
