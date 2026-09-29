---
title: Flowi Feature Status
description: Audited availability status for Flowi Workflow features.
---

# Feature Status

| Feature | Status | Notes |
|---|---|---|
| Visual workflow editor | **AVAILABLE** | Build workflows from reusable components and typed connections. |
| Built-in component catalog | **AVAILABLE** | 514 built-in components across 101 categories in the current audited catalog. |
| Custom Components | **AVAILABLE** | Custom Python components can define typed inputs, outputs and runtime behavior. |
| Telegram Bot webhook integration | **AVAILABLE — DOCUMENTED EXTENSION** | Uses built-in Webhook plus documented Telegram Webhook Setup and Telegram Update Parser extensions. These are not part of the built-in component catalog. |
| Universal Webhook | **AVAILABLE** | Verified methods: GET, POST, PUT, PATCH and DELETE; supports test/production behavior and multiple response modes. |
| Schedule Trigger | **AVAILABLE** | Schedule Trigger exists as a built-in trigger component. |
| Webhook Response | **AVAILABLE** | Used for flow-controlled webhook responses. |
| Google Connections — Docs | **AVAILABLE** | Verified shared Google OAuth Connection support. |
| Google Connections — Drive | **AVAILABLE** | Verified shared Google OAuth Connection support. |
| Google Connections — Sheets | **AVAILABLE** | Verified shared Google OAuth Connection support. |
| Google Connections — Slides | **AVAILABLE** | Verified shared Google OAuth Connection support. |
| Gmail through shared Google Connections | **NOT_VERIFIED** | The audited Gmail component uses a separate credential path; do not claim shared Google Connections support yet. |
| Flow-level Ask AI — analyze/context | **AVAILABLE** | Builds structured flow/component context for AI assistance. |
| Flow-level Ask AI — generate/materialize flow | **AVAILABLE** | Validates proposed components against the installed catalog and materializes workflow artifacts. |
| Flow-level Ask AI — import as new flow | **AVAILABLE** | Verified. |
| Flow-level Ask AI — replace current flow | **AVAILABLE** | Verified with confirmation and locked-flow protection. |
| Flow-level Ask AI — append/merge current flow | **NOT_VERIFIED** | No append/merge implementation was verified in the audited path. |
| Node-level Ask AI — explain/diagnose/configure/improve | **AVAILABLE** | Uses supplied component/flow context and source; should not claim execution or modification unless it occurred. |
| Node-level Ask AI — automatic node modification | **PLANNED** | Do not advertise as released until implementation is shipped and re-audited. |
| Store / Marketplace page | **BETA** | A Store interface exists and is marked Beta in the audited frontend. |
| Marketplace bundles | **COMING_SOON** | The Store UI labels Bundles as coming soon. |
| Import workflow JSON | **AVAILABLE** | Includes compatibility handling for legacy edge/output formats. |
| Export workflow JSON | **AVAILABLE** | Default export path applies credential sanitization; users should still avoid putting secrets in ordinary text fields. |
| Controlled component update/migration | **AVAILABLE** | Can update component structure while preserving compatible values; breaking updates can require confirmation. |

Last audited: **2026-09-18**.
