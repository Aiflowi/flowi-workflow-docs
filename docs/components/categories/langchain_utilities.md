---
title: langchain_utilities Components
description: Audited Flowi Workflow built-in components in the langchain_utilities category.
---

# langchain_utilities components

Machine-readable reference: [`../../ai/components/langchain_utilities.json`](../../ai/components/langchain_utilities.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `langchain_utilities.CharacterTextSplitter` | Character Text Splitter | AVAILABLE | Split text by number of characters. |
| `langchain_utilities.CSVAgent` | CSV Agent | AVAILABLE | Construct a CSV agent from a CSV and tools. |
| `langchain_utilities.LangChainFakeEmbeddings` | Fake Embeddings | AVAILABLE | Generate fake embeddings, useful for initial testing and connecting components. |
| `langchain_utilities.HtmlLinkExtractor` | HTML Link Extractor | AVAILABLE | Extract hyperlinks from HTML content. |
| `langchain_utilities.LanguageRecursiveTextSplitter` | Language Recursive Text Splitter | AVAILABLE | Split text into chunks of a specified length based on language. |
| `langchain_utilities.NaturalLanguageTextSplitter` | Natural Language Text Splitter | AVAILABLE | Split text based on natural language boundaries, optimized for a specified language. |
| `langchain_utilities.OpenAIToolsAgent` | OpenAI Tools Agent | AVAILABLE | Agent that uses tools via openai-tools. |
| `langchain_utilities.OpenAPIAgent` | OpenAPI Agent | AVAILABLE | Agent to interact with OpenAPI API. |
| `langchain_utilities.RecursiveCharacterTextSplitter` | Recursive Character Text Splitter | AVAILABLE | Split text trying to keep all related text together. |
| `langchain_utilities.SpiderTool` | Spider Web Crawler & Scraper | AVAILABLE | Spider API for web crawling and scraping. |
| `langchain_utilities.SQLAgent` | SQLAgent | AVAILABLE | Construct an SQL agent from an LLM and tools. |
| `langchain_utilities.SQLDatabase` | SQLDatabase | AVAILABLE | SQL Database |
| `langchain_utilities.ToolCallingAgent` | Tool Calling Agent | AVAILABLE | An agent designed to utilize various tools seamlessly within workflows. |
| `langchain_utilities.LangChain Hub Prompt` | Prompt Hub | BETA | Prompt Component that uses LangChain Hub prompts |
| `langchain_utilities.RunnableExecutor` | Runnable Executor | BETA | Execute a runnable. It will try to guess the input and output keys. |
| `langchain_utilities.SemanticTextSplitter` | Semantic Text Splitter | BETA | Split text into semantically meaningful chunks using semantic similarity. |
| `langchain_utilities.XMLAgent` | XML Agent | BETA | Agent that uses tools formatting instructions as xml to the Language Model. |
| `langchain_utilities.ConversationChain` | ConversationChain | LEGACY | Chain to have a conversation and load context from memory. |
| `langchain_utilities.JsonAgent` | JsonAgent | LEGACY | Construct a json agent from an LLM and tools. |
| `langchain_utilities.LLMCheckerChain` | LLMCheckerChain | LEGACY | Chain for question-answering with self-verification. |
| `langchain_utilities.LLMMathChain` | LLMMathChain | LEGACY | Chain that interprets a prompt and executes python code to do math. |
| `langchain_utilities.SQLGenerator` | Natural Language to SQL | LEGACY | Generate SQL from natural language. |
| `langchain_utilities.RetrievalQA` | Retrieval QA | LEGACY | Chain for question-answering querying sources from a retriever. |
| `langchain_utilities.SelfQueryRetriever` | Self Query Retriever | LEGACY | Retriever that uses a vector store and an LLM to generate the vector store queries. |
| `langchain_utilities.VectorStoreInfo` | VectorStoreInfo | LEGACY | Information about a VectorStore |
| `langchain_utilities.VectorStoreRouterAgent` | VectorStoreRouterAgent | LEGACY | Construct an agent from a Vector Store Router. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
