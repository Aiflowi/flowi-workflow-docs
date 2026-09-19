---
title: Notion Components
description: Audited Flowi Workflow built-in components in the Notion category.
---

# Notion components

Machine-readable reference: [`../../ai/components/Notion.json`](../../ai/components/Notion.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `Notion.AddContentToPage` | Add Content to Page  | AVAILABLE | Convert markdown text to Notion blocks and append them to a Notion page. |
| `Notion.NotionPageCreator` | Create Page  | AVAILABLE | A component for creating Notion pages. |
| `Notion.NotionDatabaseProperties` | List Database Properties  | AVAILABLE | Retrieve properties of a Notion database. |
| `Notion.NotionListPages` | List Pages  | AVAILABLE | Query a Notion database with filtering and sorting. The input should be a JSON string containing the 'filter' and 'sorts' objects. Exampl... |
| `Notion.NotionUserList` | List Users  | AVAILABLE | Retrieve users from Notion. |
| `Notion.NotionPageContent` | Page Content Viewer  | AVAILABLE | Retrieve the content of a Notion page as plain text. |
| `Notion.NotionSearch` | Search  | AVAILABLE | Searches all pages and databases that have been shared with an integration. |
| `Notion.NotionPageUpdate` | Update Page Property  | AVAILABLE | Update the properties of a Notion page. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
