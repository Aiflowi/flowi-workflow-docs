---
title: google_sheets Components
description: Audited Flowi Workflow built-in components in the google_sheets category.
---

# google_sheets components

Machine-readable reference: [`../../ai/components/google_sheets.json`](../../ai/components/google_sheets.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `google_sheets.GoogleSheetsAddSheet` | Add Sheet | AVAILABLE | Adds a worksheet tab to an existing Google spreadsheet. |
| `google_sheets.GoogleSheetsAppendRows` | Append Rows | AVAILABLE | Appends one or more rows to a Google Sheet. |
| `google_sheets.GoogleSheetsBulkUpsertRows` | Bulk Upsert Rows | AVAILABLE | Updates existing rows by a key column and appends rows whose keys do not yet exist. |
| `google_sheets.GoogleSheetsClearRange` | Clear Range | AVAILABLE | Clears values from a Google Sheets range without deleting the cells themselves. |
| `google_sheets.GoogleSheetsClearSheet` | Clear Sheet | AVAILABLE | Clears all values from a worksheet while preserving the sheet itself. |
| `google_sheets.GoogleSheetsCopySheet` | Copy Sheet | AVAILABLE | Copies a worksheet tab from one spreadsheet into another. |
| `google_sheets.GoogleSheetsCreateSpreadsheet` | Create Spreadsheet | AVAILABLE | Creates a new Google Sheets spreadsheet using a connected Google account. |
| `google_sheets.GoogleSheetsDeleteColumns` | Delete Columns | AVAILABLE | Deletes physical columns and shifts following columns left. |
| `google_sheets.GoogleSheetsDeleteRows` | Delete Rows | AVAILABLE | Deletes physical rows and shifts following rows upward. |
| `google_sheets.GoogleSheetsDeleteSheet` | Delete Sheet | AVAILABLE | Permanently deletes a worksheet tab from a Google spreadsheet. |
| `google_sheets.GoogleSheetsDuplicateSheet` | Duplicate Sheet | AVAILABLE | Duplicates a worksheet tab inside the same spreadsheet. |
| `google_sheets.GoogleSheetsFindReplace` | Find & Replace | AVAILABLE | Finds and replaces values within one sheet or across the entire spreadsheet. |
| `google_sheets.GoogleSheetsGetSpreadsheet` | Get Spreadsheet | AVAILABLE | Gets spreadsheet metadata, sheet names and properties. |
| `google_sheets.GoogleSheetsInsertColumns` | Insert Columns | AVAILABLE | Inserts blank columns at an exact position and shifts existing columns to the right. |
| `google_sheets.GoogleSheetsInsertRows` | Insert Rows | AVAILABLE | Inserts blank rows at an exact position and shifts existing rows downward. |
| `google_sheets.GoogleSheetsListSheets` | List Sheets | AVAILABLE | Lists all worksheet tabs inside a Google spreadsheet. |
| `google_sheets.GoogleSheetsReadRange` | Read Range | AVAILABLE | Reads values from a Google Sheets range. |
| `google_sheets.GoogleSheetsRenameSheet` | Rename Sheet | AVAILABLE | Renames a worksheet tab inside a Google spreadsheet. |
| `google_sheets.GoogleSheetsResizeSheet` | Resize Sheet | AVAILABLE | Changes the number of rows and/or columns in a worksheet. |
| `google_sheets.GoogleSheetsSearchDeleteRow` | Search & Delete Row | AVAILABLE | Finds the first row matching a key value and deletes it. |
| `google_sheets.GoogleSheetsSearchRow` | Search Row | AVAILABLE | Finds the first row matching a key value. |
| `google_sheets.GoogleSheetsUpdateRange` | Update Range | AVAILABLE | Writes values to an exact Google Sheets range. |
| `google_sheets.GoogleSheetsUpsertRow` | Upsert Row | AVAILABLE | Updates the first row matching a key value, or appends the row when no match exists. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
