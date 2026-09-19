---
title: amazon Components
description: Audited Flowi Workflow built-in components in the amazon category.
---

# amazon components

Machine-readable reference: [`../../ai/components/amazon.json`](../../ai/components/amazon.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `amazon.AmazonBedrockEmbeddings` | Amazon Bedrock Embeddings | AVAILABLE | Generate embeddings using Amazon Bedrock models. |
| `amazon.s3bucketuploader` | S3 Bucket Uploader | AVAILABLE | Uploads files to S3 bucket. |
| `amazon.AmazonBedrockConverseModel` | Amazon Bedrock Converse | BETA | Generate text using Amazon Bedrock LLMs with the modern Converse API for improved conversation handling. |
| `amazon.AmazonBedrockModel` | Amazon Bedrock | LEGACY | Generate text using Amazon Bedrock LLMs with the legacy ChatBedrock API. This component is deprecated. Please use Amazon Bedrock Converse... |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
