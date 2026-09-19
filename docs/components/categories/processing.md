---
title: processing Components
description: Audited Flowi Workflow built-in components in the processing category.
---

# processing components

Machine-readable reference: [`../../ai/components/processing.json`](../../ai/components/processing.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `processing.AudioURLExtractor` | Audio URL Extractor | AVAILABLE | Extracts recognized audio URLs from an incoming message and returns one URL per line. |
| `processing.DynamicCreateData` | Dynamic Create Data | AVAILABLE | Dynamically create a Data with a specified number of fields. |
| `processing.ExcelRowQuery` | Excel Row Query | AVAILABLE | Finds the first matching Excel row using a pandas query expression and optional dynamic variables. |
| `processing.ExcelRowUpsert` | Excel Row Upsert | AVAILABLE | Finds one Excel row using a pandas query, then updates it or appends a new row. Without Write Data, returns the first match. |
| `processing.ImageURLExtractor` | Image URL Extractor | AVAILABLE | Extracts recognized image URLs from an incoming message and returns one URL per line. |
| `processing.JSONArrayExtractor` | JSON Array Extractor | AVAILABLE | Extracts a top-level array from a JSON object and returns its objects as Langflow Data items. |
| `processing.JSONKeyExtractor` | JSON Key Extractor | AVAILABLE | Extracts selected top-level keys from a JSON object. Objects and arrays retain their JSON structure; a single scalar is returned as a Mes... |
| `processing.JSONObjectBuilder` | JSON Object Builder | AVAILABLE | Creates a JSON object from configurable keys. Each key becomes a separate connectable input. |
| `processing.DataOperations` | JSON Operations | AVAILABLE | Perform various operations on a JSON object. |
| `processing.JSONStringParser` | JSON String Parser | AVAILABLE | Parses a string containing a JSON object into Langflow Data. Invalid JSON raises an exception. |
| `processing.MediaURLCleaner` | Media URL Cleaner | AVAILABLE | Removes recognized image and audio URLs from an incoming message and returns the remaining clean text. |
| `processing.MetaWebhookSignatureVerification` | Meta Webhook Signature Verification | AVAILABLE | Validates Meta X-Hub-Signature-256 using the App Secret and the exact Universal Webhook raw_body. Returns one JSON object containing the ... |
| `processing.MetaWebhookVerification` | Meta Webhook Verification | AVAILABLE | Validates Meta webhook verification requests for WhatsApp, Instagram, and Facebook. Connect its Response Definition output to Webhook Res... |
| `processing.ParserComponent` | Parser | AVAILABLE | Extracts text using a template. |
| `processing.SplitText` | Split Text | AVAILABLE | Split text into chunks based on specified criteria. |
| `processing.DataFrameOperations` | Table Operations | AVAILABLE | Perform various operations on a Table. |
| `processing.TextOperations` | Text Operations | AVAILABLE | Perform various text processing operations including text-to-DataFrame conversion. |
| `processing.TypeConverterComponent` | Type Convert | AVAILABLE | Convert between different types (Message, JSON, Table) |
| `processing.AlterMetadata` | Alter Metadata | LEGACY | Adds/Removes Metadata Dictionary on inputs |
| `processing.MergeDataComponent` | Combine Data | LEGACY | Combines data using different operations |
| `processing.CombineText` | Combine Text | LEGACY | Concatenate two text sources into a single text chunk using a specified delimiter. |
| `processing.CreateData` | Create Data | LEGACY | Dynamically create a Data with a specified number of fields. |
| `processing.CreateList` | Create List | LEGACY | Creates a list of texts. |
| `processing.ParseData` | Data to Message | LEGACY | Convert Data objects into Messages using any {field_name} from input data. |
| `processing.DataToDataFrame` | Data → DataFrame | LEGACY | Converts one or multiple Data objects into a DataFrame. Each Data object corresponds to one row. Fields from `.data` become columns, and ... |
| `processing.ExtractaKey` | Extract Key | LEGACY | Extract a specific key from a Data object or a list of Data objects and return the extracted value(s) as Data object(s). |
| `processing.FilterData` | Filter Data | LEGACY | Filters a Data object based on a list of keys. |
| `processing.FilterDataValues` | Filter Values | LEGACY | Filter a list of data items based on a specified key, filter value, and comparison operator. Check advanced options to select match compa... |
| `processing.JSONCleaner` | JSON Cleaner | LEGACY | Cleans the messy and sometimes incorrect JSON strings produced by LLMs so that they are fully compliant with the JSON spec. |
| `processing.StoreMessage` | Message Store | LEGACY | Stores a chat message or text into AI Flowi Workflow tables or an external memory. |
| `processing.MessagetoData` | Message to Data | LEGACY | Convert a Message object to a Data object |
| `processing.OutputParser` | Output Parser | LEGACY | Transforms the output of an LLM into a specified format. |
| `processing.ParseDataFrame` | Parse DataFrame | LEGACY | Convert a DataFrame into plain text following a specified template. Each column in the DataFrame is treated as a possible template key, e... |
| `processing.ParseJSONData` | Parse JSON | LEGACY | Convert and extract JSON fields. |
| `processing.RegexExtractorComponent` | Regex Extractor | LEGACY | Extract patterns from text using regular expressions. |
| `processing.SelectData` | Select Data | LEGACY | Select a single data from a list of data. |
| `processing.UpdateData` | Update Data | LEGACY | Dynamically update or append data with the specified fields. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
