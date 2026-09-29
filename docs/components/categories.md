---
title: Which components are documented?
description: Browse the AI Flowi Workflow component catalog by category, with documented component names and a short guide to each group.
canonical_url: https://aiflowi.com/docs/components/catalog/
last_updated: 2026-09-29
author: Ai Flowi
---

# Which components are documented?

The AI Flowi Workflow catalog groups components by the job or service they support. Find a category below, then look for the component name used in the editor. A listed component may still require its own configuration, credential, or external service before it runs.

## Browse by group

- [Workflow building and processing](#workflow-building-and-processing)
- [Google Workspace](#google-workspace)
- [Models and AI services](#models-and-ai-services)
- [Data stores and memory](#data-stores-and-memory)
- [Search, web, and documents](#search-web-and-documents)
- [Other services and developer tools](#other-services-and-developer-tools)

Each row links to its retained category JSON, which supplies the exact component ID, fields, and port types. The names below come from the documented category indexes. For a workflow example, see the [first workflow](../tutorials/first-playground-workflow.md). For saved credentials, see [connections](../connections/index.md).

## Workflow building and processing

Use these categories for workflow inputs, outputs, control, transformation, and custom behavior.

### Custom Component

Define typed Python behavior from a template.

- [Custom Component](../ai/components/custom_component.json) — `custom_component.CustomComponent`

### Data Source

Bring API and other data into a workflow.

- [API Request](../ai/components/data_source.json) — `data_source.APIRequest`
- [Mock Data](../ai/components/data_source.json) — `data_source.MockDataGenerator`
- [SQL Database](../ai/components/data_source.json) — `data_source.SQLComponent`
- [URL](../ai/components/data_source.json) — `data_source.URLComponent`
- [Web Search](../ai/components/data_source.json) — `data_source.UnifiedWebSearch`
- [Load CSV](../ai/components/data_source.json) — `data_source.CSVtoData`
- [Load JSON](../ai/components/data_source.json) — `data_source.JSONtoData`
- [News Search](../ai/components/data_source.json) — `data_source.NewsSearch`
- [RSS Reader](../ai/components/data_source.json) — `data_source.RSSReaderSimple`

### Embeddings

Work with embedding vectors.

- [Embedding Similarity](../ai/components/embeddings.json) — `embeddings.EmbeddingSimilarityComponent`
- [Text Embedder](../ai/components/embeddings.json) — `embeddings.TextEmbedderComponent`

### Files And Knowledge

Load and retrieve knowledge or files.

- [Knowledge Base](../ai/components/files_and_knowledge.json) — `files_and_knowledge.KnowledgeBase`
- [Knowledge Ingestion](../ai/components/files_and_knowledge.json) — `files_and_knowledge.KnowledgeIngestion`
- [Read File](../ai/components/files_and_knowledge.json) — `files_and_knowledge.File`
- [Write File](../ai/components/files_and_knowledge.json) — `files_and_knowledge.SaveToFile`
- [Directory](../ai/components/files_and_knowledge.json) — `files_and_knowledge.Directory`

### Flow Controls

Route or control workflow paths.

- [HTTP Method Router](../ai/components/flow_controls.json) — `flow_controls.HTTPMethodRouter`
- [If-Else](../ai/components/flow_controls.json) — `flow_controls.ConditionalRouter`
- [Loop](../ai/components/flow_controls.json) — `flow_controls.LoopComponent`
- [Verification Router](../ai/components/flow_controls.json) — `flow_controls.VerificationRouter`
- [Listen](../ai/components/flow_controls.json) — `flow_controls.Listen`
- [Notify](../ai/components/flow_controls.json) — `flow_controls.Notify`
- [Run Flow](../ai/components/flow_controls.json) — `flow_controls.RunFlow`
- [Condition](../ai/components/flow_controls.json) — `flow_controls.DataConditionalRouter`
- [Flow as Tool](../ai/components/flow_controls.json) — `flow_controls.FlowTool`
- [Pass](../ai/components/flow_controls.json) — `flow_controls.Pass`
- [Sub Flow](../ai/components/flow_controls.json) — `flow_controls.SubFlow`

### Input Output

Supply or display workflow data.

- [Chat Input](../ai/components/input_output.json) — `input_output.ChatInput`
- [Chat Output](../ai/components/input_output.json) — `input_output.ChatOutput`
- [Meta Instagram Send Message](../ai/components/input_output.json) — `input_output.MetaInstagramSendMessage`
- [Meta Messenger Send Message](../ai/components/input_output.json) — `input_output.MetaMessengerSendMessage`
- [Meta WhatsApp Send Message](../ai/components/input_output.json) — `input_output.MetaWhatsAppSendMessage`
- [POST Webhook](../ai/components/input_output.json) — `input_output.Webhook2`
- [Schedule Trigger](../ai/components/input_output.json) — `input_output.ScheduleTrigger`
- [Text Input](../ai/components/input_output.json) — `input_output.TextInput`
- [Text Output](../ai/components/input_output.json) — `input_output.TextOutput`
- [UChat Sub-Flow Trigger](../ai/components/input_output.json) — `input_output.UChatSubFlowTrigger`
- [UChat User Fields Setter](../ai/components/input_output.json) — `input_output.UChatUserFieldsSetter`
- [Universal Webhook](../ai/components/input_output.json) — `input_output.UniversalWebhook`
- [Webhook](../ai/components/input_output.json) — `input_output.Webhook`
- [Webhook Response](../ai/components/input_output.json) — `input_output.WebhookResponse`

### Langchain Utilities

Split and process text.

- [Character Text Splitter](../ai/components/langchain_utilities.json) — `langchain_utilities.CharacterTextSplitter`
- [CSV Agent](../ai/components/langchain_utilities.json) — `langchain_utilities.CSVAgent`
- [Fake Embeddings](../ai/components/langchain_utilities.json) — `langchain_utilities.LangChainFakeEmbeddings`
- [HTML Link Extractor](../ai/components/langchain_utilities.json) — `langchain_utilities.HtmlLinkExtractor`
- [Language Recursive Text Splitter](../ai/components/langchain_utilities.json) — `langchain_utilities.LanguageRecursiveTextSplitter`
- [Natural Language Text Splitter](../ai/components/langchain_utilities.json) — `langchain_utilities.NaturalLanguageTextSplitter`
- [OpenAI Tools Agent](../ai/components/langchain_utilities.json) — `langchain_utilities.OpenAIToolsAgent`
- [OpenAPI Agent](../ai/components/langchain_utilities.json) — `langchain_utilities.OpenAPIAgent`
- [Recursive Character Text Splitter](../ai/components/langchain_utilities.json) — `langchain_utilities.RecursiveCharacterTextSplitter`
- [Spider Web Crawler & Scraper](../ai/components/langchain_utilities.json) — `langchain_utilities.SpiderTool`
- [SQLAgent](../ai/components/langchain_utilities.json) — `langchain_utilities.SQLAgent`
- [SQLDatabase](../ai/components/langchain_utilities.json) — `langchain_utilities.SQLDatabase`
- [Tool Calling Agent](../ai/components/langchain_utilities.json) — `langchain_utilities.ToolCallingAgent`
- [Prompt Hub](../ai/components/langchain_utilities.json) — `langchain_utilities.LangChain Hub Prompt`
- [Runnable Executor](../ai/components/langchain_utilities.json) — `langchain_utilities.RunnableExecutor`
- [Semantic Text Splitter](../ai/components/langchain_utilities.json) — `langchain_utilities.SemanticTextSplitter`
- [XML Agent](../ai/components/langchain_utilities.json) — `langchain_utilities.XMLAgent`
- [ConversationChain](../ai/components/langchain_utilities.json) — `langchain_utilities.ConversationChain`
- [JsonAgent](../ai/components/langchain_utilities.json) — `langchain_utilities.JsonAgent`
- [LLMCheckerChain](../ai/components/langchain_utilities.json) — `langchain_utilities.LLMCheckerChain`
- [LLMMathChain](../ai/components/langchain_utilities.json) — `langchain_utilities.LLMMathChain`
- [Natural Language to SQL](../ai/components/langchain_utilities.json) — `langchain_utilities.SQLGenerator`
- [Retrieval QA](../ai/components/langchain_utilities.json) — `langchain_utilities.RetrievalQA`
- [Self Query Retriever](../ai/components/langchain_utilities.json) — `langchain_utilities.SelfQueryRetriever`
- [VectorStoreInfo](../ai/components/langchain_utilities.json) — `langchain_utilities.VectorStoreInfo`
- [VectorStoreRouterAgent](../ai/components/langchain_utilities.json) — `langchain_utilities.VectorStoreRouterAgent`

### Llm Operations

Process and structure model output.

- [Batch Run](../ai/components/llm_operations.json) — `llm_operations.BatchRunComponent`
- [Guardrails](../ai/components/llm_operations.json) — `llm_operations.GuardrailValidator`
- [LLM Selector](../ai/components/llm_operations.json) — `llm_operations.LLMSelectorComponent`
- [Smart Router](../ai/components/llm_operations.json) — `llm_operations.SmartRouter`
- [Smart Transform](../ai/components/llm_operations.json) — `llm_operations.Smart Transform`
- [Structured Output](../ai/components/llm_operations.json) — `llm_operations.StructuredOutput`

### Models And Agents

Build model and agent steps.

- [Agent](../ai/components/models_and_agents.json) — `models_and_agents.Agent`
- [Embedding Model](../ai/components/models_and_agents.json) — `models_and_agents.EmbeddingModel`
- [Language Model](../ai/components/models_and_agents.json) — `models_and_agents.LanguageModelComponent`
- [MCP Tools](../ai/components/models_and_agents.json) — `models_and_agents.MCPTools`
- [Message History](../ai/components/models_and_agents.json) — `models_and_agents.Memory`
- [Prompt Template](../ai/components/models_and_agents.json) — `models_and_agents.Prompt Template`
- [Policies](../ai/components/models_and_agents.json) — `models_and_agents.policies`

### Processing

Transform text, audio, and other data.

- [Audio URL Extractor](../ai/components/processing.json) — `processing.AudioURLExtractor`
- [Dynamic Create Data](../ai/components/processing.json) — `processing.DynamicCreateData`
- [Excel Row Query](../ai/components/processing.json) — `processing.ExcelRowQuery`
- [Excel Row Upsert](../ai/components/processing.json) — `processing.ExcelRowUpsert`
- [Image URL Extractor](../ai/components/processing.json) — `processing.ImageURLExtractor`
- [JSON Array Extractor](../ai/components/processing.json) — `processing.JSONArrayExtractor`
- [JSON Key Extractor](../ai/components/processing.json) — `processing.JSONKeyExtractor`
- [JSON Object Builder](../ai/components/processing.json) — `processing.JSONObjectBuilder`
- [JSON Operations](../ai/components/processing.json) — `processing.DataOperations`
- [JSON String Parser](../ai/components/processing.json) — `processing.JSONStringParser`
- [Media URL Cleaner](../ai/components/processing.json) — `processing.MediaURLCleaner`
- [Meta Webhook Signature Verification](../ai/components/processing.json) — `processing.MetaWebhookSignatureVerification`
- [Meta Webhook Verification](../ai/components/processing.json) — `processing.MetaWebhookVerification`
- [Parser](../ai/components/processing.json) — `processing.ParserComponent`
- [Split Text](../ai/components/processing.json) — `processing.SplitText`
- [Table Operations](../ai/components/processing.json) — `processing.DataFrameOperations`
- [Text Operations](../ai/components/processing.json) — `processing.TextOperations`
- [Type Convert](../ai/components/processing.json) — `processing.TypeConverterComponent`
- [Alter Metadata](../ai/components/processing.json) — `processing.AlterMetadata`
- [Combine Data](../ai/components/processing.json) — `processing.MergeDataComponent`
- [Combine Text](../ai/components/processing.json) — `processing.CombineText`
- [Create Data](../ai/components/processing.json) — `processing.CreateData`
- [Create List](../ai/components/processing.json) — `processing.CreateList`
- [Data to Message](../ai/components/processing.json) — `processing.ParseData`
- [Data → DataFrame](../ai/components/processing.json) — `processing.DataToDataFrame`
- [Extract Key](../ai/components/processing.json) — `processing.ExtractaKey`
- [Filter Data](../ai/components/processing.json) — `processing.FilterData`
- [Filter Values](../ai/components/processing.json) — `processing.FilterDataValues`
- [JSON Cleaner](../ai/components/processing.json) — `processing.JSONCleaner`
- [Message Store](../ai/components/processing.json) — `processing.StoreMessage`
- [Message to Data](../ai/components/processing.json) — `processing.MessagetoData`
- [Output Parser](../ai/components/processing.json) — `processing.OutputParser`
- [Parse DataFrame](../ai/components/processing.json) — `processing.ParseDataFrame`
- [Parse JSON](../ai/components/processing.json) — `processing.ParseJSONData`
- [Regex Extractor](../ai/components/processing.json) — `processing.RegexExtractorComponent`
- [Select Data](../ai/components/processing.json) — `processing.SelectData`
- [Update Data](../ai/components/processing.json) — `processing.UpdateData`

### Prototypes

Define a Python function step.

- [Python Function](../ai/components/prototypes.json) — `prototypes.PythonFunction`

### Tools

Use calculation and other tools.

- [Calculator](../ai/components/tools.json) — `tools.CalculatorTool`
- [Python Code Structured](../ai/components/tools.json) — `tools.PythonCodeStructuredTool`
- [Python REPL](../ai/components/tools.json) — `tools.PythonREPLTool`
- [Search API](../ai/components/tools.json) — `tools.SearchAPI`
- [SearXNG Search](../ai/components/tools.json) — `tools.SearXNGTool`
- [Serp Search API](../ai/components/tools.json) — `tools.SerpAPI`
- [Tavily Search API](../ai/components/tools.json) — `tools.TavilyAISearch`
- [Wikidata API](../ai/components/tools.json) — `tools.WikidataAPI`
- [Wikipedia API](../ai/components/tools.json) — `tools.WikipediaAPI`
- [Yahoo! Finance](../ai/components/tools.json) — `tools.YahooFinanceTool`

### Utilities

Use general workflow utilities.

- [Calculator](../ai/components/utilities.json) — `utilities.CalculatorComponent`
- [Current Date](../ai/components/utilities.json) — `utilities.CurrentDate`
- [Python Interpreter](../ai/components/utilities.json) — `utilities.PythonREPLComponent`
- [ID Generator](../ai/components/utilities.json) — `utilities.IDGenerator`

## Google Workspace

Choose the component family for the Google service used by your workflow.

### Google Docs

Read or change Google Docs content.

- [Append Text](../ai/components/google_docs.json) — `google_docs.GoogleDocsAppendText`
- [Create Document](../ai/components/google_docs.json) — `google_docs.GoogleDocsCreateDocument`
- [Create Footer](../ai/components/google_docs.json) — `google_docs.GoogleDocsCreateFooter`
- [Create Footnote](../ai/components/google_docs.json) — `google_docs.GoogleDocsCreateFootnote`
- [Create Header](../ai/components/google_docs.json) — `google_docs.GoogleDocsCreateHeader`
- [Create List](../ai/components/google_docs.json) — `google_docs.GoogleDocsCreateList`
- [Create Named Range](../ai/components/google_docs.json) — `google_docs.GoogleDocsCreateNamedRange`
- [Delete Content](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteContent`
- [Delete Footer](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteFooter`
- [Delete Header](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteHeader`
- [Delete Named Range](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteNamedRange`
- [Delete Table](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteTable`
- [Delete Table Column](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteTableColumn`
- [Delete Table Row](../ai/components/google_docs.json) — `google_docs.GoogleDocsDeleteTableRow`
- [Format Document](../ai/components/google_docs.json) — `google_docs.GoogleDocsFormatDocument`
- [Format Paragraph](../ai/components/google_docs.json) — `google_docs.GoogleDocsFormatParagraph`
- [Format Section](../ai/components/google_docs.json) — `google_docs.GoogleDocsFormatSection`
- [Format Table Cells](../ai/components/google_docs.json) — `google_docs.GoogleDocsFormatTableCells`
- [Format Text](../ai/components/google_docs.json) — `google_docs.GoogleDocsFormatText`
- [Get Document](../ai/components/google_docs.json) — `google_docs.GoogleDocsGetDocument`
- [Get Text](../ai/components/google_docs.json) — `google_docs.GoogleDocsGetText`
- [Insert Heading](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertHeading`
- [Insert Image](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertImage`
- [Insert Page Break](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertPageBreak`
- [Insert Section Break](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertSectionBreak`
- [Insert Table](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertTable`
- [Insert Table Column](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertTableColumn`
- [Insert Table Row](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertTableRow`
- [Insert Text](../ai/components/google_docs.json) — `google_docs.GoogleDocsInsertText`
- [List Named Ranges](../ai/components/google_docs.json) — `google_docs.GoogleDocsListNamedRanges`
- [List Tables](../ai/components/google_docs.json) — `google_docs.GoogleDocsListTables`
- [Merge Table Cells](../ai/components/google_docs.json) — `google_docs.GoogleDocsMergeTableCells`
- [Pin Table Header Rows](../ai/components/google_docs.json) — `google_docs.GoogleDocsPinTableHeaderRows`
- [Populate Table](../ai/components/google_docs.json) — `google_docs.GoogleDocsPopulateTable`
- [Remove List](../ai/components/google_docs.json) — `google_docs.GoogleDocsRemoveList`
- [Replace Image](../ai/components/google_docs.json) — `google_docs.GoogleDocsReplaceImage`
- [Replace Named Range Content](../ai/components/google_docs.json) — `google_docs.GoogleDocsReplaceNamedRangeContent`
- [Replace Text](../ai/components/google_docs.json) — `google_docs.GoogleDocsReplaceText`
- [Set Table Cell Text](../ai/components/google_docs.json) — `google_docs.GoogleDocsSetTableCellText`
- [Set Table Column Width](../ai/components/google_docs.json) — `google_docs.GoogleDocsSetTableColumnWidth`
- [Set Table Row Height](../ai/components/google_docs.json) — `google_docs.GoogleDocsSetTableRowHeight`
- [Template Merge](../ai/components/google_docs.json) — `google_docs.GoogleDocsTemplateMerge`
- [Unmerge Table Cells](../ai/components/google_docs.json) — `google_docs.GoogleDocsUnmergeTableCells`

### Google Drive

Work with Google Drive files.

- [Copy File](../ai/components/google_drive.json) — `google_drive.GoogleDriveCopyFile`
- [Create Folder](../ai/components/google_drive.json) — `google_drive.GoogleDriveCreateFolder`
- [Delete Permanently](../ai/components/google_drive.json) — `google_drive.GoogleDriveDeleteFile`
- [Download File](../ai/components/google_drive.json) — `google_drive.GoogleDriveDownloadFile`
- [Export File](../ai/components/google_drive.json) — `google_drive.GoogleDriveExportFile`
- [Get File](../ai/components/google_drive.json) — `google_drive.GoogleDriveGetFile`
- [List Files](../ai/components/google_drive.json) — `google_drive.GoogleDriveListFiles`
- [Move File](../ai/components/google_drive.json) — `google_drive.GoogleDriveMoveFile`
- [Rename File](../ai/components/google_drive.json) — `google_drive.GoogleDriveRenameFile`
- [Restore File](../ai/components/google_drive.json) — `google_drive.GoogleDriveRestoreFile`
- [Trash File](../ai/components/google_drive.json) — `google_drive.GoogleDriveTrashFile`
- [Upload File](../ai/components/google_drive.json) — `google_drive.GoogleDriveUploadFile`
- [Workspace API Request](../ai/components/google_drive.json) — `google_drive.GoogleDriveWorkspaceApiRequest`
- [Google Drive Loader](../ai/components/google_drive.json) — `google_drive.GoogleDriveComponent`
- [Google Drive Search](../ai/components/google_drive.json) — `google_drive.GoogleDriveSearchComponent`

### Google Sheets

Read or change Google Sheets data.

- [Add Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsAddSheet`
- [Append Rows](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsAppendRows`
- [Bulk Upsert Rows](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsBulkUpsertRows`
- [Clear Range](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsClearRange`
- [Clear Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsClearSheet`
- [Copy Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsCopySheet`
- [Create Spreadsheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsCreateSpreadsheet`
- [Delete Columns](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsDeleteColumns`
- [Delete Rows](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsDeleteRows`
- [Delete Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsDeleteSheet`
- [Duplicate Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsDuplicateSheet`
- [Find & Replace](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsFindReplace`
- [Get Spreadsheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsGetSpreadsheet`
- [Insert Columns](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsInsertColumns`
- [Insert Rows](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsInsertRows`
- [List Sheets](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsListSheets`
- [Read Range](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsReadRange`
- [Rename Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsRenameSheet`
- [Resize Sheet](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsResizeSheet`
- [Search & Delete Row](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsSearchDeleteRow`
- [Search Row](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsSearchRow`
- [Update Range](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsUpdateRange`
- [Upsert Row](../ai/components/google_sheets.json) — `google_sheets.GoogleSheetsUpsertRow`

### Google Slides

Create or change Google Slides content.

- [Add Slide](../ai/components/google_slides.json) — `google_slides.GoogleSlidesAddSlide`
- [Connect Shapes](../ai/components/google_slides.json) — `google_slides.GoogleSlidesConnectShapes`
- [Create Line](../ai/components/google_slides.json) — `google_slides.GoogleSlidesCreateLine`
- [Create Presentation](../ai/components/google_slides.json) — `google_slides.GoogleSlidesCreatePresentation`
- [Create Shape](../ai/components/google_slides.json) — `google_slides.GoogleSlidesCreateShape`
- [Create Table](../ai/components/google_slides.json) — `google_slides.GoogleSlidesCreateTable`
- [Create Text Box](../ai/components/google_slides.json) — `google_slides.GoogleSlidesCreateTextBox`
- [Delete Page Element](../ai/components/google_slides.json) — `google_slides.GoogleSlidesDeletePageElement`
- [Delete Slide](../ai/components/google_slides.json) — `google_slides.GoogleSlidesDeleteSlide`
- [Delete Table Column](../ai/components/google_slides.json) — `google_slides.GoogleSlidesDeleteTableColumn`
- [Delete Table Row](../ai/components/google_slides.json) — `google_slides.GoogleSlidesDeleteTableRow`
- [Delete Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesDeleteText`
- [Duplicate Slide](../ai/components/google_slides.json) — `google_slides.GoogleSlidesDuplicateSlide`
- [Format Line](../ai/components/google_slides.json) — `google_slides.GoogleSlidesFormatLine`
- [Format Paragraph](../ai/components/google_slides.json) — `google_slides.GoogleSlidesFormatParagraph`
- [Format Table Borders](../ai/components/google_slides.json) — `google_slides.GoogleSlidesFormatTableBorders`
- [Format Table Cells](../ai/components/google_slides.json) — `google_slides.GoogleSlidesFormatTableCells`
- [Format Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesFormatText`
- [Format Video](../ai/components/google_slides.json) — `google_slides.GoogleSlidesFormatVideo`
- [Get Image Info](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGetImageInfo`
- [Get Presentation](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGetPresentation`
- [Get Slide](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGetSlide`
- [Get Speaker Notes](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGetSpeakerNotes`
- [Get Table Cell Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGetTableCellText`
- [Get Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGetText`
- [Group Elements](../ai/components/google_slides.json) — `google_slides.GoogleSlidesGroupElements`
- [Insert Image](../ai/components/google_slides.json) — `google_slides.GoogleSlidesInsertImage`
- [Insert Sheets Chart](../ai/components/google_slides.json) — `google_slides.GoogleSlidesInsertSheetsChart`
- [Insert Table Column](../ai/components/google_slides.json) — `google_slides.GoogleSlidesInsertTableColumn`
- [Insert Table Row](../ai/components/google_slides.json) — `google_slides.GoogleSlidesInsertTableRow`
- [Insert Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesInsertText`
- [Insert Video](../ai/components/google_slides.json) — `google_slides.GoogleSlidesInsertVideo`
- [List Page Elements](../ai/components/google_slides.json) — `google_slides.GoogleSlidesListPageElements`
- [List Slides](../ai/components/google_slides.json) — `google_slides.GoogleSlidesListSlides`
- [List Tables](../ai/components/google_slides.json) — `google_slides.GoogleSlidesListTables`
- [Merge Table Cells](../ai/components/google_slides.json) — `google_slides.GoogleSlidesMergeTableCells`
- [Move Page Element](../ai/components/google_slides.json) — `google_slides.GoogleSlidesMovePageElement`
- [Move Slide](../ai/components/google_slides.json) — `google_slides.GoogleSlidesMoveSlide`
- [Populate Table](../ai/components/google_slides.json) — `google_slides.GoogleSlidesPopulateTable`
- [Refresh Sheets Chart](../ai/components/google_slides.json) — `google_slides.GoogleSlidesRefreshSheetsChart`
- [Replace All Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesReplaceAllText`
- [Replace Image](../ai/components/google_slides.json) — `google_slides.GoogleSlidesReplaceImage`
- [Replace Shapes With Image](../ai/components/google_slides.json) — `google_slides.GoogleSlidesReplaceShapesWithImage`
- [Replace Shapes With Sheets Chart](../ai/components/google_slides.json) — `google_slides.GoogleSlidesReplaceShapesWithSheetsChart`
- [Replace Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesReplaceText`
- [Resize Page Element](../ai/components/google_slides.json) — `google_slides.GoogleSlidesResizePageElement`
- [Rotate Page Element](../ai/components/google_slides.json) — `google_slides.GoogleSlidesRotatePageElement`
- [Set Element Alt Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesSetElementAltText`
- [Set Image Properties](../ai/components/google_slides.json) — `google_slides.GoogleSlidesSetImageProperties`
- [Set Slide Background](../ai/components/google_slides.json) — `google_slides.GoogleSlidesSetSlideBackground`
- [Set Table Cell Text](../ai/components/google_slides.json) — `google_slides.GoogleSlidesSetTableCellText`
- [Template Merge](../ai/components/google_slides.json) — `google_slides.GoogleSlidesTemplateMerge`
- [Ungroup Elements](../ai/components/google_slides.json) — `google_slides.GoogleSlidesUngroupElements`
- [Unmerge Table Cells](../ai/components/google_slides.json) — `google_slides.GoogleSlidesUnmergeTableCells`
- [Update Speaker Notes](../ai/components/google_slides.json) — `google_slides.GoogleSlidesUpdateSpeakerNotes`

## Models and AI services

These categories provide model, embedding, agent, or evaluation components for their named services.

### Agentics

Use Agentics model or AI tools.

- [aGenerate](../ai/components/agentics.json) — `agentics.AgenerateComponent`
- [aMap](../ai/components/agentics.json) — `agentics.AMapComponent`
- [aReduce](../ai/components/agentics.json) — `agentics.AreduceComponent`

### Aiml

Use Aiml model or AI tools.

- [AI/ML API](../ai/components/aiml.json) — `aiml.AIMLModel`
- [AI/ML API Embeddings](../ai/components/aiml.json) — `aiml.AIMLEmbeddings`

### Altk

Use Altk model or AI tools.

- [ALTK Agent](../ai/components/altk.json) — `altk.ALTK Agent`

### Amazon

Use Amazon model or AI tools.

- [Amazon Bedrock Embeddings](../ai/components/amazon.json) — `amazon.AmazonBedrockEmbeddings`
- [S3 Bucket Uploader](../ai/components/amazon.json) — `amazon.s3bucketuploader`
- [Amazon Bedrock Converse](../ai/components/amazon.json) — `amazon.AmazonBedrockConverseModel`
- [Amazon Bedrock](../ai/components/amazon.json) — `amazon.AmazonBedrockModel`

### Anthropic

Use Anthropic model or AI tools.

- [Anthropic](../ai/components/anthropic.json) — `anthropic.AnthropicModel`

### Azure

Use Azure model or AI tools.

- [Azure OpenAI](../ai/components/azure.json) — `azure.AzureOpenAIModel`
- [Azure OpenAI Embeddings](../ai/components/azure.json) — `azure.AzureOpenAIEmbeddings`

### Baidu

Use Baidu model or AI tools.

- [Qianfan](../ai/components/baidu.json) — `baidu.BaiduQianfanChatModel`

### Cleanlab

Use Cleanlab model or AI tools.

- [Cleanlab Evaluator](../ai/components/cleanlab.json) — `cleanlab.CleanlabEvaluator`
- [Cleanlab RAG Evaluator](../ai/components/cleanlab.json) — `cleanlab.CleanlabRAGEvaluator`
- [Cleanlab Remediator](../ai/components/cleanlab.json) — `cleanlab.CleanlabRemediator`

### Cohere

Use Cohere model or AI tools.

- [Cohere Embeddings](../ai/components/cohere.json) — `cohere.CohereEmbeddings`
- [Cohere Language Models](../ai/components/cohere.json) — `cohere.CohereModel`
- [Cohere Rerank](../ai/components/cohere.json) — `cohere.CohereRerank`

### Cometapi

Use Cometapi model or AI tools.

- [CometAPI](../ai/components/cometapi.json) — `cometapi.CometAPIModel`

### Crewai

Use Crewai model or AI tools.

- [CrewAI Agent](../ai/components/crewai.json) — `crewai.CrewAIAgentComponent`
- [Hierarchical Crew](../ai/components/crewai.json) — `crewai.HierarchicalCrewComponent`
- [Hierarchical Task](../ai/components/crewai.json) — `crewai.HierarchicalTaskComponent`
- [Sequential Crew](../ai/components/crewai.json) — `crewai.SequentialCrewComponent`
- [Sequential Task](../ai/components/crewai.json) — `crewai.SequentialTaskComponent`
- [Sequential Task Agent](../ai/components/crewai.json) — `crewai.SequentialTaskAgentComponent`

### Cuga

Use Cuga model or AI tools.

- [Cuga](../ai/components/cuga.json) — `cuga.Cuga`

### Deepseek

Use Deepseek model or AI tools.

- [DeepSeek](../ai/components/deepseek.json) — `deepseek.DeepSeekModelComponent`

### Google

Use Google model or AI tools.

- [Google Generative AI](../ai/components/google.json) — `google.GoogleGenerativeAIModel`
- [Google Generative AI Embeddings](../ai/components/google.json) — `google.Google Generative AI Embeddings`
- [Google Search API](../ai/components/google.json) — `google.GoogleSearchAPICore`
- [Google Serper API](../ai/components/google.json) — `google.GoogleSerperAPICore`
- [BigQuery](../ai/components/google.json) — `google.BigQueryExecutor`
- [Gmail Loader](../ai/components/google.json) — `google.GmailLoaderComponent`
- [Google OAuth Token](../ai/components/google.json) — `google.GoogleOAuthToken`

### Groq

Use Groq model or AI tools.

- [Groq](../ai/components/groq.json) — `groq.GroqModel`

### Huggingface

Use Huggingface model or AI tools.

- [Hugging Face](../ai/components/huggingface.json) — `huggingface.HuggingFaceModel`
- [Hugging Face Embeddings Inference](../ai/components/huggingface.json) — `huggingface.HuggingFaceInferenceAPIEmbeddings`

### Ibm

Use Ibm model or AI tools.

- [IBM watsonx.ai](../ai/components/ibm.json) — `ibm.IBMwatsonxModel`
- [IBM watsonx.ai Embeddings](../ai/components/ibm.json) — `ibm.WatsonxEmbeddingsComponent`

### Icosacomputing

Use Icosacomputing model or AI tools.

- [Combinatorial Reasoner](../ai/components/icosacomputing.json) — `icosacomputing.Combinatorial Reasoner`

### Langwatch

Use Langwatch model or AI tools.

- [LangWatch Evaluator](../ai/components/langwatch.json) — `langwatch.LangWatchEvaluator`

### Litellm

Use Litellm model or AI tools.

- [LiteLLM Proxy](../ai/components/litellm.json) — `litellm.LiteLLMProxyModel`

### Lmstudio

Use Lmstudio model or AI tools.

- [LM Studio](../ai/components/lmstudio.json) — `lmstudio.LMStudioModel`
- [LM Studio Embeddings](../ai/components/lmstudio.json) — `lmstudio.LMStudioEmbeddingsComponent`

### Maritalk

Use Maritalk model or AI tools.

- [MariTalk](../ai/components/maritalk.json) — `maritalk.Maritalk`

### Mistral

Use Mistral model or AI tools.

- [MistralAI](../ai/components/mistral.json) — `mistral.MistralModel`
- [MistralAI Embeddings](../ai/components/mistral.json) — `mistral.MistalAIEmbeddings`

### Notdiamond

Use Notdiamond model or AI tools.

- [Not Diamond Router](../ai/components/notdiamond.json) — `notdiamond.NotDiamond`

### Novita

Use Novita model or AI tools.

- [Novita AI](../ai/components/novita.json) — `novita.NovitaModel`

### Nvidia

Use Nvidia model or AI tools.

- [NVIDIA](../ai/components/nvidia.json) — `nvidia.NVIDIAModelComponent`
- [NVIDIA Embeddings](../ai/components/nvidia.json) — `nvidia.NVIDIAEmbeddingsComponent`
- [NVIDIA Rerank](../ai/components/nvidia.json) — `nvidia.NvidiaRerankComponent`
- [NVIDIA System-Assist](../ai/components/nvidia.json) — `nvidia.NvidiaSystemAssistComponent`
- [NVIDIA Retriever Extraction](../ai/components/nvidia.json) — `nvidia.NvidiaIngestComponent`

### Ollama

Use Ollama model or AI tools.

- [Ollama](../ai/components/ollama.json) — `ollama.OllamaModel`
- [Ollama Embeddings](../ai/components/ollama.json) — `ollama.OllamaEmbeddings`

### Openai

Use Openai model or AI tools.

- [OpenAI](../ai/components/openai.json) — `openai.OpenAIModel`
- [OpenAI Embeddings](../ai/components/openai.json) — `openai.OpenAIEmbeddings`
- [OpenAI Responses API](../ai/components/openai.json) — `openai.OpenAIResponsesAPI`
- [OpenAI Vision Analyzer](../ai/components/openai.json) — `openai.OpenAIVisionAnalyzer`
- [OpenAI Voice Transcriber](../ai/components/openai.json) — `openai.OpenAIVoiceTranscriber`

### Openrouter

Use Openrouter model or AI tools.

- [OpenRouter](../ai/components/openrouter.json) — `openrouter.OpenRouterComponent`

### Perplexity

Use Perplexity model or AI tools.

- [Perplexity](../ai/components/perplexity.json) — `perplexity.PerplexityModel`

### Sambanova

Use Sambanova model or AI tools.

- [SambaNova](../ai/components/sambanova.json) — `sambanova.SambaNovaModel`

### Vertexai

Use Vertexai model or AI tools.

- [Vertex AI](../ai/components/vertexai.json) — `vertexai.VertexAiModel`
- [Vertex AI Embeddings](../ai/components/vertexai.json) — `vertexai.VertexAIEmbeddings`

### Vllm

Use Vllm model or AI tools.

- [vLLM](../ai/components/vllm.json) — `vllm.vLLMModel`
- [vLLM Embeddings](../ai/components/vllm.json) — `vllm.vLLMEmbeddings`

### Vlmrun

Use Vlmrun model or AI tools.

- [VLM Run Transcription](../ai/components/vlmrun.json) — `vlmrun.VLMRunTranscription`

### Xai

Use Xai model or AI tools.

- [xAI](../ai/components/xai.json) — `xai.xAIModel`

## Data stores and memory

Use these categories to store, retrieve, or search data and vector records.

### Cassandra

Store or retrieve data with Cassandra.

- [Cassandra](../ai/components/cassandra.json) — `cassandra.Cassandra`
- [Cassandra Chat Memory](../ai/components/cassandra.json) — `cassandra.CassandraChatMemory`
- [Cassandra Graph](../ai/components/cassandra.json) — `cassandra.CassandraGraph`

### Chroma

Store or retrieve data with Chroma.

- [Chroma DB](../ai/components/chroma.json) — `chroma.Chroma`

### Clickhouse

Store or retrieve data with Clickhouse.

- [ClickHouse](../ai/components/clickhouse.json) — `clickhouse.Clickhouse`

### Couchbase

Store or retrieve data with Couchbase.

- [Couchbase](../ai/components/couchbase.json) — `couchbase.Couchbase`

### Datastax

Store or retrieve data with Datastax.

- [Astra DB](../ai/components/datastax.json) — `datastax.AstraDB`
- [Astra DB Chat Memory](../ai/components/datastax.json) — `datastax.AstraDBChatMemory`
- [Astra DB CQL](../ai/components/datastax.json) — `datastax.AstraDBCQLToolComponent`
- [Graph RAG](../ai/components/datastax.json) — `datastax.GraphRAG`
- [Hyper-Converged Database](../ai/components/datastax.json) — `datastax.HCD`
- [Astra DB Graph](../ai/components/datastax.json) — `datastax.AstraDBGraph`
- [Astra DB Tool](../ai/components/datastax.json) — `datastax.AstraDBTool`
- [Astra Vectorize](../ai/components/datastax.json) — `datastax.AstraVectorize`
- [Dotenv](../ai/components/datastax.json) — `datastax.Dotenv`
- [Get Environment Variable](../ai/components/datastax.json) — `datastax.GetEnvVar`

### Elastic

Store or retrieve data with Elastic.

- [Elasticsearch](../ai/components/elastic.json) — `elastic.Elasticsearch`
- [OpenSearch](../ai/components/elastic.json) — `elastic.OpenSearchVectorStoreComponent`
- [OpenSearch (Multi-Model Multi-Embedding)](../ai/components/elastic.json) — `elastic.OpenSearchVectorStoreComponentMultimodalMultiEmbedding`

### FAISS

Store or retrieve data with FAISS.

- [FAISS](../ai/components/FAISS.json) — `FAISS.FAISS`

### Mem0

Store or retrieve data with Mem0.

- [Mem0 Chat Memory](../ai/components/mem0.json) — `mem0.mem0_chat_memory`

### Milvus

Store or retrieve data with Milvus.

- [Milvus](../ai/components/milvus.json) — `milvus.Milvus`

### Mongodb

Store or retrieve data with Mongodb.

- [MongoDB Atlas](../ai/components/mongodb.json) — `mongodb.MongoDBAtlasVector`

### Needle

Store or retrieve data with Needle.

- [Needle Retriever](../ai/components/needle.json) — `needle.needle`

### Pgvector

Store or retrieve data with Pgvector.

- [PGVector](../ai/components/pgvector.json) — `pgvector.pgvector`

### Pinecone

Store or retrieve data with Pinecone.

- [Pinecone](../ai/components/pinecone.json) — `pinecone.Pinecone`

### Qdrant

Store or retrieve data with Qdrant.

- [Qdrant](../ai/components/qdrant.json) — `qdrant.QdrantVectorStoreComponent`

### Redis

Store or retrieve data with Redis.

- [Redis](../ai/components/redis.json) — `redis.Redis`
- [Redis Chat Memory](../ai/components/redis.json) — `redis.RedisChatMemory`

### Supabase

Store or retrieve data with Supabase.

- [Supabase](../ai/components/supabase.json) — `supabase.SupabaseVectorStore`

### Upstash

Store or retrieve data with Upstash.

- [Upstash](../ai/components/upstash.json) — `upstash.Upstash`

### Vectara

Store or retrieve data with Vectara.

- [Vectara](../ai/components/vectara.json) — `vectara.Vectara`
- [Vectara RAG](../ai/components/vectara.json) — `vectara.VectaraRAG`

### Vectorstores

Store or retrieve data with Vectorstores.

- [Local DB](../ai/components/vectorstores.json) — `vectorstores.LocalDB`

### Weaviate

Store or retrieve data with Weaviate.

- [Weaviate](../ai/components/weaviate.json) — `weaviate.Weaviate`

### Zep

Store or retrieve data with Zep.

- [Zep Chat Memory](../ai/components/zep.json) — `zep.ZepChatMemory`

## Search, web, and documents

These categories retrieve, extract, or process information from websites, documents, media, and search services.

### Agentql

Retrieve or process content with Agentql.

- [Extract Web Data](../ai/components/agentql.json) — `agentql.AgentQL`

### Apify

Retrieve or process content with Apify.

- [Apify Actors](../ai/components/apify.json) — `apify.ApifyActors`

### Arxiv

Retrieve or process content with Arxiv.

- [arXiv](../ai/components/arxiv.json) — `arxiv.ArXivComponent`

### Assemblyai

Retrieve or process content with Assemblyai.

- [AssemblyAI Get Subtitles](../ai/components/assemblyai.json) — `assemblyai.AssemblyAIGetSubtitles`
- [AssemblyAI LeMUR](../ai/components/assemblyai.json) — `assemblyai.AssemblyAILeMUR`
- [AssemblyAI List Transcripts](../ai/components/assemblyai.json) — `assemblyai.AssemblyAIListTranscripts`
- [AssemblyAI Poll Transcript](../ai/components/assemblyai.json) — `assemblyai.AssemblyAITranscriptionJobPoller`
- [AssemblyAI Start Transcript](../ai/components/assemblyai.json) — `assemblyai.AssemblyAITranscriptionJobCreator`

### Bing

Retrieve or process content with Bing.

- [Bing Search API](../ai/components/bing.json) — `bing.BingSearchAPI`

### Cloudflare

Retrieve or process content with Cloudflare.

- [Cloudflare Workers AI Embeddings](../ai/components/cloudflare.json) — `cloudflare.CloudflareWorkersAIEmbeddings`

### Confluence

Retrieve or process content with Confluence.

- [Confluence](../ai/components/confluence.json) — `confluence.Confluence`

### Docling

Retrieve or process content with Docling.

- [Chunk DoclingDocument](../ai/components/docling.json) — `docling.ChunkDoclingDocument`
- [Docling](../ai/components/docling.json) — `docling.DoclingInline`
- [Docling Serve](../ai/components/docling.json) — `docling.DoclingRemote`
- [Export DoclingDocument](../ai/components/docling.json) — `docling.ExportDoclingDocument`

### Duckduckgo

Retrieve or process content with Duckduckgo.

- [DuckDuckGo Search](../ai/components/duckduckgo.json) — `duckduckgo.DuckDuckGoSearchComponent`

### Exa

Retrieve or process content with Exa.

- [Exa Search](../ai/components/exa.json) — `exa.ExaSearch`

### Firecrawl

Retrieve or process content with Firecrawl.

- [Firecrawl Crawl API](../ai/components/firecrawl.json) — `firecrawl.FirecrawlCrawlApi`
- [Firecrawl Extract API](../ai/components/firecrawl.json) — `firecrawl.FirecrawlExtractApi`
- [Firecrawl Map API](../ai/components/firecrawl.json) — `firecrawl.FirecrawlMapApi`
- [Firecrawl Scrape API](../ai/components/firecrawl.json) — `firecrawl.FirecrawlScrapeApi`

### Glean

Retrieve or process content with Glean.

- [Glean Search API](../ai/components/glean.json) — `glean.GleanSearchAPIComponent`

### Jigsawstack

Retrieve or process content with Jigsawstack.

- [AI Scraper](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackAIScraper`
- [AI Web Search](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackAISearch`
- [File Read](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackFileRead`
- [File Upload](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackFileUpload`
- [Image Generation](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackImageGeneration`
- [NSFW Detection](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackNSFW`
- [Object Detection](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackObjectDetection`
- [Sentiment Analysis](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackSentiment`
- [Text to SQL](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackTextToSQL`
- [Text Translate](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackTextTranslate`
- [VOCR](../ai/components/jigsawstack.json) — `jigsawstack.JigsawStackVOCR`

### Scrapegraph

Retrieve or process content with Scrapegraph.

- [ScrapeGraph Markdownify API](../ai/components/scrapegraph.json) — `scrapegraph.ScrapeGraphMarkdownifyApi`
- [ScrapeGraph Search API](../ai/components/scrapegraph.json) — `scrapegraph.ScrapeGraphSearchApi`
- [ScrapeGraph Smart Scraper API](../ai/components/scrapegraph.json) — `scrapegraph.ScrapeGraphSmartScraperApi`

### Searchapi

Retrieve or process content with Searchapi.

- [SearchApi](../ai/components/searchapi.json) — `searchapi.SearchComponent`

### Serpapi

Retrieve or process content with Serpapi.

- [Serp Search API](../ai/components/serpapi.json) — `serpapi.Serp`

### Tavily

Retrieve or process content with Tavily.

- [Tavily Extract API](../ai/components/tavily.json) — `tavily.TavilyExtractComponent`
- [Tavily Search API](../ai/components/tavily.json) — `tavily.TavilySearchComponent`

### Twelvelabs

Retrieve or process content with Twelvelabs.

- [Convert Astra DB to Pegasus Input](../ai/components/twelvelabs.json) — `twelvelabs.ConvertAstraToTwelveLabs`
- [Split Video](../ai/components/twelvelabs.json) — `twelvelabs.SplitVideo`
- [TwelveLabs Pegasus](../ai/components/twelvelabs.json) — `twelvelabs.TwelveLabsPegasus`
- [TwelveLabs Pegasus Index Video](../ai/components/twelvelabs.json) — `twelvelabs.TwelveLabsPegasusIndexVideo`
- [TwelveLabs Text Embeddings](../ai/components/twelvelabs.json) — `twelvelabs.TwelveLabsTextEmbeddings`
- [TwelveLabs Video Embeddings](../ai/components/twelvelabs.json) — `twelvelabs.TwelveLabsVideoEmbeddings`
- [Video File](../ai/components/twelvelabs.json) — `twelvelabs.VideoFile`

### Unstructured

Retrieve or process content with Unstructured.

- [Unstructured API](../ai/components/unstructured.json) — `unstructured.Unstructured`

### Wikipedia

Retrieve or process content with Wikipedia.

- [Wikidata](../ai/components/wikipedia.json) — `wikipedia.WikidataComponent`
- [Wikipedia](../ai/components/wikipedia.json) — `wikipedia.WikipediaComponent`

### Wolframalpha

Retrieve or process content with Wolframalpha.

- [WolframAlpha API](../ai/components/wolframalpha.json) — `wolframalpha.WolframAlphaAPI`

### Yahoosearch

Retrieve or process content with Yahoosearch.

- [Yahoo! Finance](../ai/components/yahoosearch.json) — `yahoosearch.YfinanceComponent`

### Youtube

Retrieve or process content with Youtube.

- [YouTube Channel](../ai/components/youtube.json) — `youtube.YouTubeChannelComponent`
- [YouTube Comments](../ai/components/youtube.json) — `youtube.YouTubeCommentsComponent`
- [YouTube Playlist](../ai/components/youtube.json) — `youtube.YouTubePlaylistComponent`
- [YouTube Search](../ai/components/youtube.json) — `youtube.YouTubeSearchComponent`
- [YouTube Transcripts](../ai/components/youtube.json) — `youtube.YouTubeTranscripts`
- [YouTube Trending](../ai/components/youtube.json) — `youtube.YouTubeTrendingComponent`
- [YouTube Video Details](../ai/components/youtube.json) — `youtube.YouTubeVideoDetailsComponent`

## Other services and developer tools

These categories connect to their named services or provide specialist workflow utilities.

### Composio

Use the documented Composio tool components.

- [AgentQL](../ai/components/composio.json) — `composio.ComposioAgentQLAPIComponent`
- [Agiled](../ai/components/composio.json) — `composio.ComposioAgiledAPIComponent`
- [Airtable](../ai/components/composio.json) — `composio.ComposioAirtableAPIComponent`
- [Apollo](../ai/components/composio.json) — `composio.ComposioApolloAPIComponent`
- [Asana](../ai/components/composio.json) — `composio.ComposioAsanaAPIComponent`
- [Attio](../ai/components/composio.json) — `composio.ComposioAttioAPIComponent`
- [Bitbucket](../ai/components/composio.json) — `composio.ComposioBitbucketAPIComponent`
- [Bolna](../ai/components/composio.json) — `composio.ComposioBolnaAPIComponent`
- [Brightdata](../ai/components/composio.json) — `composio.ComposioBrightdataAPIComponent`
- [Calendly](../ai/components/composio.json) — `composio.ComposioCalendlyAPIComponent`
- [Canva](../ai/components/composio.json) — `composio.ComposioCanvaAPIComponent`
- [Canvas](../ai/components/composio.json) — `composio.ComposioCanvasAPIComponent`
- [Coda](../ai/components/composio.json) — `composio.ComposioCodaAPIComponent`
- [Composio Tools](../ai/components/composio.json) — `composio.ComposioAPI`
- [Contentful](../ai/components/composio.json) — `composio.ComposioContentfulAPIComponent`
- [Digicert](../ai/components/composio.json) — `composio.ComposioDigicertAPIComponent`
- [Discord](../ai/components/composio.json) — `composio.ComposioDiscordAPIComponent`
- [Dropbox](../ai/components/composio.json) — `composio.ComposioDropboxAPIComponent`
- [ElevenLabs](../ai/components/composio.json) — `composio.ComposioElevenLabsAPIComponent`
- [Exa](../ai/components/composio.json) — `composio.ComposioExaAPIComponent`
- [Figma](../ai/components/composio.json) — `composio.ComposioFigmaAPIComponent`
- [Finage](../ai/components/composio.json) — `composio.ComposioFinageAPIComponent`
- [Firecrawl](../ai/components/composio.json) — `composio.ComposioFirecrawlAPIComponent`
- [Fireflies](../ai/components/composio.json) — `composio.ComposioFirefliesAPIComponent`
- [Fixer](../ai/components/composio.json) — `composio.ComposioFixerAPIComponent`
- [Flexisign](../ai/components/composio.json) — `composio.ComposioFlexisignAPIComponent`
- [Freshdesk](../ai/components/composio.json) — `composio.ComposioFreshdeskAPIComponent`
- [GitHub](../ai/components/composio.json) — `composio.ComposioGitHubAPIComponent`
- [Gmail](../ai/components/composio.json) — `composio.ComposioGmailAPIComponent`
- [Google Classroom](../ai/components/composio.json) — `composio.ComposioGoogleclassroomAPIComponent`
- [GoogleBigQuery](../ai/components/composio.json) — `composio.ComposioGoogleBigQueryAPIComponent`
- [GoogleCalendar](../ai/components/composio.json) — `composio.ComposioGoogleCalendarAPIComponent`
- [GoogleDocs](../ai/components/composio.json) — `composio.ComposioGoogleDocsAPIComponent`
- [GoogleMeet](../ai/components/composio.json) — `composio.ComposioGooglemeetAPIComponent`
- [GoogleSheets](../ai/components/composio.json) — `composio.ComposioGoogleSheetsAPIComponent`
- [GoogleTasks](../ai/components/composio.json) — `composio.ComposioGoogleTasksAPIComponent`
- [Heygen](../ai/components/composio.json) — `composio.ComposioHeygenAPIComponent`
- [Instagram](../ai/components/composio.json) — `composio.ComposioInstagramAPIComponent`
- [Jira](../ai/components/composio.json) — `composio.ComposioJiraAPIComponent`
- [Jotform](../ai/components/composio.json) — `composio.ComposioJotformAPIComponent`
- [Klaviyo](../ai/components/composio.json) — `composio.ComposioKlaviyoAPIComponent`
- [Linear](../ai/components/composio.json) — `composio.ComposioLinearAPIComponent`
- [Listennotes](../ai/components/composio.json) — `composio.ComposioListennotesAPIComponent`
- [Mem0](../ai/components/composio.json) — `composio.ComposioMem0APIComponent`
- [Miro](../ai/components/composio.json) — `composio.ComposioMiroAPIComponent`
- [Missive](../ai/components/composio.json) — `composio.ComposioMissiveAPIComponent`
- [Notion](../ai/components/composio.json) — `composio.ComposioNotionAPIComponent`
- [OneDrive](../ai/components/composio.json) — `composio.ComposioOneDriveAPIComponent`
- [Outlook](../ai/components/composio.json) — `composio.ComposioOutlookAPIComponent`
- [Pandadoc](../ai/components/composio.json) — `composio.ComposioPandadocAPIComponent`
- [PeopleDataLabs](../ai/components/composio.json) — `composio.ComposioPeopleDataLabsAPIComponent`
- [PerplexityAI](../ai/components/composio.json) — `composio.ComposioPerplexityAIAPIComponent`
- [Reddit](../ai/components/composio.json) — `composio.ComposioRedditAPIComponent`
- [SerpAPI](../ai/components/composio.json) — `composio.ComposioSerpAPIComponent`
- [Slack](../ai/components/composio.json) — `composio.ComposioSlackAPIComponent`
- [Slackbot](../ai/components/composio.json) — `composio.ComposioSlackbotAPIComponent`
- [Snowflake](../ai/components/composio.json) — `composio.ComposioSnowflakeAPIComponent`
- [Supabase](../ai/components/composio.json) — `composio.ComposioSupabaseAPIComponent`
- [Tavily](../ai/components/composio.json) — `composio.ComposioTavilyAPIComponent`
- [TimelinesAI](../ai/components/composio.json) — `composio.ComposioTimelinesAIAPIComponent`
- [Todoist](../ai/components/composio.json) — `composio.ComposioTodoistAPIComponent`
- [Wrike](../ai/components/composio.json) — `composio.ComposioWrikeAPIComponent`
- [YouTube](../ai/components/composio.json) — `composio.ComposioYoutubeAPIComponent`

### Git

Load documents from a Git repository.

- [Git](../ai/components/git.json) — `git.GitLoaderComponent`
- [GitExtractor](../ai/components/git.json) — `git.GitExtractorComponent`

### Homeassistant

Control Home Assistant devices.

- [Home Assistant Control](../ai/components/homeassistant.json) — `homeassistant.HomeAssistantControl`
- [List Home Assistant States](../ai/components/homeassistant.json) — `homeassistant.ListHomeAssistantStates`

### Notion

Work with Notion pages.

- [Add Content to Page](../ai/components/Notion.json) — `Notion.AddContentToPage`
- [Create Page](../ai/components/Notion.json) — `Notion.NotionPageCreator`
- [List Database Properties](../ai/components/Notion.json) — `Notion.NotionDatabaseProperties`
- [List Pages](../ai/components/Notion.json) — `Notion.NotionListPages`
- [List Users](../ai/components/Notion.json) — `Notion.NotionUserList`
- [Page Content Viewer](../ai/components/Notion.json) — `Notion.NotionPageContent`
- [Search](../ai/components/Notion.json) — `Notion.NotionSearch`
- [Update Page Property](../ai/components/Notion.json) — `Notion.NotionPageUpdate`

### Olivya

Create an outbound call request.

- [Place Call](../ai/components/olivya.json) — `olivya.OlivyaComponent`

## Related

[Components](index.md) · [Custom components](custom-components.md) · [Connections](../connections/index.md)
