---
title: google_slides Components
description: Audited Flowi Workflow built-in components in the google_slides category.
---

# google_slides components

Machine-readable reference: [`../../ai/components/google_slides.json`](../../ai/components/google_slides.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `google_slides.GoogleSlidesAddSlide` | Add Slide | AVAILABLE | Adds a slide at the end or at a user-friendly 1-based position. |
| `google_slides.GoogleSlidesConnectShapes` | Connect Shapes | AVAILABLE | Connects an existing connector line between two shapes. |
| `google_slides.GoogleSlidesCreateLine` | Create Line | AVAILABLE | Creates a straight, bent, or curved connector line. |
| `google_slides.GoogleSlidesCreatePresentation` | Create Presentation | AVAILABLE | Creates a blank Google Slides presentation. |
| `google_slides.GoogleSlidesCreateShape` | Create Shape | AVAILABLE | Creates a common Google Slides shape at an X/Y position. |
| `google_slides.GoogleSlidesCreateTable` | Create Table | AVAILABLE | Creates a Google Slides table with the requested rows and columns. |
| `google_slides.GoogleSlidesCreateTextBox` | Create Text Box | AVAILABLE | Creates a positioned text box and optionally inserts initial text. |
| `google_slides.GoogleSlidesDeletePageElement` | Delete Page Element | AVAILABLE | Deletes a shape, image, table, line, video, chart, or other page element by Object ID. |
| `google_slides.GoogleSlidesDeleteSlide` | Delete Slide | AVAILABLE | Deletes a slide by Slide Object ID. |
| `google_slides.GoogleSlidesDeleteTableColumn` | Delete Table Column | AVAILABLE | Deletes one column. Merged reference cells spanning columns must be unmerged first. |
| `google_slides.GoogleSlidesDeleteTableRow` | Delete Table Row | AVAILABLE | Deletes one row. Merged reference cells spanning rows must be unmerged first. |
| `google_slides.GoogleSlidesDeleteText` | Delete Text | AVAILABLE | Deletes all text or one user-friendly 1-based text range. |
| `google_slides.GoogleSlidesDuplicateSlide` | Duplicate Slide | AVAILABLE | Duplicates a slide immediately after the source slide. |
| `google_slides.GoogleSlidesFormatLine` | Format Line | AVAILABLE | Formats line color, weight, dash style, and arrow ends. |
| `google_slides.GoogleSlidesFormatParagraph` | Format Paragraph | AVAILABLE | Formats paragraph alignment, spacing, and direction in a shape. |
| `google_slides.GoogleSlidesFormatTableBorders` | Format Table Borders | AVAILABLE | Formats selected table borders by position and optional table range. |
| `google_slides.GoogleSlidesFormatTableCells` | Format Table Cells | AVAILABLE | Formats cell background fill and vertical content alignment. |
| `google_slides.GoogleSlidesFormatText` | Format Text | AVAILABLE | Formats text in a Slides shape using range-aware text styles. |
| `google_slides.GoogleSlidesFormatVideo` | Format Video | AVAILABLE | Updates autoplay, mute, and start/end playback settings. |
| `google_slides.GoogleSlidesGetImageInfo` | Get Image Info | AVAILABLE | Gets image URLs, properties, grouping, and rendered geometry. |
| `google_slides.GoogleSlidesGetPresentation` | Get Presentation | AVAILABLE | Gets the latest Google Slides presentation resource. |
| `google_slides.GoogleSlidesGetSlide` | Get Slide | AVAILABLE | Gets one slide/page by Slide Object ID. |
| `google_slides.GoogleSlidesGetSpeakerNotes` | Get Speaker Notes | AVAILABLE | Gets the latest speaker notes text associated with one slide. |
| `google_slides.GoogleSlidesGetTableCellText` | Get Table Cell Text | AVAILABLE | Gets text and merged-cell metadata for one 1-based table cell. |
| `google_slides.GoogleSlidesGetText` | Get Text | AVAILABLE | Gets text and raw text-element metadata from one shape or text box. |
| `google_slides.GoogleSlidesGroupElements` | Group Elements | AVAILABLE | Groups at least two eligible top-level page elements on one slide. |
| `google_slides.GoogleSlidesInsertImage` | Insert Image | AVAILABLE | Inserts an image from a publicly accessible URL. |
| `google_slides.GoogleSlidesInsertSheetsChart` | Insert Sheets Chart | AVAILABLE | Embeds a Google Sheets chart as a linked chart or unlinked image. |
| `google_slides.GoogleSlidesInsertTableColumn` | Insert Table Column | AVAILABLE | Inserts one or more columns left or right of a reference column. |
| `google_slides.GoogleSlidesInsertTableRow` | Insert Table Row | AVAILABLE | Inserts one or more rows above or below a reference row. |
| `google_slides.GoogleSlidesInsertText` | Insert Text | AVAILABLE | Appends text or inserts it at a user-friendly 1-based text position. |
| `google_slides.GoogleSlidesInsertVideo` | Insert Video | AVAILABLE | Inserts a YouTube or Google Drive video. |
| `google_slides.GoogleSlidesListPageElements` | List Page Elements | AVAILABLE | Lists shapes, images, tables, lines, videos, charts, and grouped elements on one slide. |
| `google_slides.GoogleSlidesListSlides` | List Slides | AVAILABLE | Lists slides using user-friendly 1-based slide numbers. |
| `google_slides.GoogleSlidesListTables` | List Tables | AVAILABLE | Lists all tables on one slide, including cells, merged spans, and geometry. |
| `google_slides.GoogleSlidesMergeTableCells` | Merge Table Cells | AVAILABLE | Merges a rectangular range of table cells. |
| `google_slides.GoogleSlidesMovePageElement` | Move Page Element | AVAILABLE | Moves an ungrouped page element to absolute X/Y coordinates. |
| `google_slides.GoogleSlidesMoveSlide` | Move Slide | AVAILABLE | Moves one slide to a user-friendly final 1-based position. |
| `google_slides.GoogleSlidesPopulateTable` | Populate Table | AVAILABLE | Populates a Slides table from array-of-objects or array-of-arrays. |
| `google_slides.GoogleSlidesRefreshSheetsChart` | Refresh Sheets Chart | AVAILABLE | Refreshes a linked Sheets chart from its current spreadsheet source. |
| `google_slides.GoogleSlidesReplaceAllText` | Replace All Text | AVAILABLE | Replaces matching text across the presentation or selected slides. |
| `google_slides.GoogleSlidesReplaceImage` | Replace Image | AVAILABLE | Replaces an existing image while preserving its rendered bounds. |
| `google_slides.GoogleSlidesReplaceShapesWithImage` | Replace Shapes With Image | AVAILABLE | Replaces text-matching shapes with an image while preserving shape bounds. |
| `google_slides.GoogleSlidesReplaceShapesWithSheetsChart` | Replace Shapes With Sheets Chart | AVAILABLE | Replaces shapes containing matching text with a Google Sheets chart. |
| `google_slides.GoogleSlidesReplaceText` | Replace Text | AVAILABLE | Replaces matching text inside one selected shape or text box. |
| `google_slides.GoogleSlidesResizePageElement` | Resize Page Element | AVAILABLE | Resizes an ungrouped page element to rendered width/height in points. |
| `google_slides.GoogleSlidesRotatePageElement` | Rotate Page Element | AVAILABLE | Sets absolute rotation in degrees for an ungrouped page element. |
| `google_slides.GoogleSlidesSetElementAltText` | Set Element Alt Text | AVAILABLE | Updates accessibility title and/or description for a page element. |
| `google_slides.GoogleSlidesSetImageProperties` | Set Image Properties | AVAILABLE | Updates editable image outline and hyperlink properties. |
| `google_slides.GoogleSlidesSetSlideBackground` | Set Slide Background | AVAILABLE | Sets a slide background color, removes the fill, or restores inheritance. |
| `google_slides.GoogleSlidesSetTableCellText` | Set Table Cell Text | AVAILABLE | Replaces all editable text in one Slides table cell. |
| `google_slides.GoogleSlidesTemplateMerge` | Template Merge | AVAILABLE | Replaces many text placeholders from one Data object in a single Slides batch. |
| `google_slides.GoogleSlidesUngroupElements` | Ungroup Elements | AVAILABLE | Ungroups one or more top-level groups on the same slide. |
| `google_slides.GoogleSlidesUnmergeTableCells` | Unmerge Table Cells | AVAILABLE | Unmerges merged cells overlapping a rectangular range. |
| `google_slides.GoogleSlidesUpdateSpeakerNotes` | Update Speaker Notes | AVAILABLE | Replaces all speaker notes text for one slide. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
