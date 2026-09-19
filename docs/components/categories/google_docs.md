---
title: google_docs Components
description: Audited Flowi Workflow built-in components in the google_docs category.
---

# google_docs components

Machine-readable reference: [`../../ai/components/google_docs.json`](../../ai/components/google_docs.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `google_docs.GoogleDocsAppendText` | Append Text | AVAILABLE | Appends text to the end of a Google Doc or selected tab. |
| `google_docs.GoogleDocsCreateDocument` | Create Document | AVAILABLE | Creates a Google Doc and optionally inserts initial text. |
| `google_docs.GoogleDocsCreateFooter` | Create Footer | AVAILABLE | Creates the default document footer and optionally inserts text. |
| `google_docs.GoogleDocsCreateFootnote` | Create Footnote | AVAILABLE | Creates a footnote reference and optionally inserts footnote text. |
| `google_docs.GoogleDocsCreateHeader` | Create Header | AVAILABLE | Creates the default document header and optionally inserts text. |
| `google_docs.GoogleDocsCreateList` | Create List | AVAILABLE | Applies a bulleted or numbered list preset to paragraphs in a range. |
| `google_docs.GoogleDocsCreateNamedRange` | Create Named Range | AVAILABLE | Creates a named range over a Google Docs character range. |
| `google_docs.GoogleDocsDeleteContent` | Delete Content | AVAILABLE | Deletes document content between two Google Docs indexes. |
| `google_docs.GoogleDocsDeleteFooter` | Delete Footer | AVAILABLE | Deletes a Google Docs footer by its footer ID. |
| `google_docs.GoogleDocsDeleteHeader` | Delete Header | AVAILABLE | Deletes a Google Docs header by its header ID. |
| `google_docs.GoogleDocsDeleteNamedRange` | Delete Named Range | AVAILABLE | Deletes a named range by ID, or all ranges sharing a name. |
| `google_docs.GoogleDocsDeleteTable` | Delete Table | AVAILABLE | Deletes an entire Google Docs table by its 1-based Table Number. |
| `google_docs.GoogleDocsDeleteTableColumn` | Delete Table Column | AVAILABLE | Deletes the table column spanning a selected reference cell. |
| `google_docs.GoogleDocsDeleteTableRow` | Delete Table Row | AVAILABLE | Deletes the table row spanning a selected reference cell. |
| `google_docs.GoogleDocsFormatDocument` | Format Document | AVAILABLE | Updates common document-level page, margin, and background settings. |
| `google_docs.GoogleDocsFormatParagraph` | Format Paragraph | AVAILABLE | Applies paragraph style, alignment, and spacing to a range. |
| `google_docs.GoogleDocsFormatSection` | Format Section | AVAILABLE | Updates margins and page numbering for sections overlapping a range. |
| `google_docs.GoogleDocsFormatTableCells` | Format Table Cells | AVAILABLE | Sets fill color, vertical alignment, or padding for table cells. |
| `google_docs.GoogleDocsFormatText` | Format Text | AVAILABLE | Applies character-level formatting to a Google Docs range. |
| `google_docs.GoogleDocsGetDocument` | Get Document | AVAILABLE | Returns the Google Docs API representation of a document. |
| `google_docs.GoogleDocsGetText` | Get Text | AVAILABLE | Extracts plain text from all tabs in a Google Doc. |
| `google_docs.GoogleDocsInsertHeading` | Insert Heading | AVAILABLE | Inserts heading text and applies a Google Docs named heading style. |
| `google_docs.GoogleDocsInsertImage` | Insert Image | AVAILABLE | Inserts an inline image from a publicly accessible image URL. |
| `google_docs.GoogleDocsInsertPageBreak` | Insert Page Break | AVAILABLE | Inserts a page break at an index or at the end of the document. |
| `google_docs.GoogleDocsInsertSectionBreak` | Insert Section Break | AVAILABLE | Inserts a continuous or next-page section break. |
| `google_docs.GoogleDocsInsertTable` | Insert Table | AVAILABLE | Inserts an empty table at an index or at the end of a Google Doc. |
| `google_docs.GoogleDocsInsertTableColumn` | Insert Table Column | AVAILABLE | Inserts a table column left or right of a reference column. |
| `google_docs.GoogleDocsInsertTableRow` | Insert Table Row | AVAILABLE | Inserts a table row above or below a reference row. |
| `google_docs.GoogleDocsInsertText` | Insert Text | AVAILABLE | Inserts text at a specific Google Docs character index. |
| `google_docs.GoogleDocsListNamedRanges` | List Named Ranges | AVAILABLE | Lists Google Docs named ranges across all tabs or one selected tab. |
| `google_docs.GoogleDocsListTables` | List Tables | AVAILABLE | Lists tables in document order for the selected/default tab. |
| `google_docs.GoogleDocsMergeTableCells` | Merge Table Cells | AVAILABLE | Merges a rectangular table-cell range into its upper-left cell. |
| `google_docs.GoogleDocsPinTableHeaderRows` | Pin Table Header Rows | AVAILABLE | Sets how many leading table rows repeat as table headers. |
| `google_docs.GoogleDocsPopulateTable` | Populate Table | AVAILABLE | Populates an existing Google Docs table from object or array rows. |
| `google_docs.GoogleDocsRemoveList` | Remove List | AVAILABLE | Removes bullets or numbering from paragraphs overlapping a range. |
| `google_docs.GoogleDocsReplaceImage` | Replace Image | AVAILABLE | Replaces an existing Google Docs inline image by object ID. |
| `google_docs.GoogleDocsReplaceNamedRangeContent` | Replace Named Range Content | AVAILABLE | Replaces the content of a named range by ID or name. |
| `google_docs.GoogleDocsReplaceText` | Replace Text | AVAILABLE | Replaces every matching text occurrence in a Google Doc. |
| `google_docs.GoogleDocsSetTableCellText` | Set Table Cell Text | AVAILABLE | Replaces the text in one table cell using 1-based coordinates. |
| `google_docs.GoogleDocsSetTableColumnWidth` | Set Table Column Width | AVAILABLE | Sets a fixed width for one table column in points. |
| `google_docs.GoogleDocsSetTableRowHeight` | Set Table Row Height | AVAILABLE | Sets the minimum height of one table row in points. |
| `google_docs.GoogleDocsTemplateMerge` | Template Merge | AVAILABLE | Replaces multiple template placeholders in one Google Docs batch. |
| `google_docs.GoogleDocsUnmergeTableCells` | Unmerge Table Cells | AVAILABLE | Unmerges merged cells intersecting a rectangular table range. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
