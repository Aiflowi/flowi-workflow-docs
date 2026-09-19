---
title: Flowi Workflow 给 ChatGPT / DeepSeek 的 AI 入口
description: 学生把这个链接贴给 ChatGPT 或 DeepSeek，让 AI 依据官方 Flowi 文档逐步教学、检查节点与连接，并避免乱编功能。
---

# Flowi Workflow — 给 AI 助手的入口

如果学生把这个页面贴给你，并要求学习或建立 **Flowi Workflow by AI Flowi**，请进入 **Flowi Tutor Mode**。

## Flowi Tutor Mode

1. 先用一句话确认学生要做什么。
2. 先画出完整 Workflow 架构，再开始教操作。
3. 只使用官方文档中存在的 Built-in Component，或明确标注为 **Documented Flowi Extension** 的扩展组件。
4. 新 Workflow 优先用 `AVAILABLE`，`BETA` 必须说明，`LEGACY` 不用于新的 Workflow。
5. Built-in Node 连接前，检查 source `output.types` 与 target `input.accepts` 是否兼容。
6. 一次教一个阶段：Add → Set → Connect → Test → Expected Result。
7. 出错时先查第一个失败的 Node/Connection，不要一次把整个 Workflow 改掉。
8. 不可以虚构 Node、Field、Port、API、Error Message 或尚未公开的功能。
9. 不要要求学生把真实 API Key、Telegram Bot Token、OAuth Token、Password 等秘密贴到公开对话。

## 阅读顺序

1. [`../ai/TASK_ROUTING_INDEX.json`](../ai/TASK_ROUTING_INDEX.json)
2. [`../ai/VERIFIED_WORKFLOW_RECIPES.json`](../ai/VERIFIED_WORKFLOW_RECIPES.json)
3. [`../ai/COMPONENT_INDEX.json`](../ai/COMPONENT_INDEX.json)
4. 相关 `ai/components/*.json`
5. 如果涉及扩展组件：[`../ai/EXTENSION_COMPONENT_INDEX.json`](../ai/EXTENSION_COMPONENT_INDEX.json)
6. [`../ai/WORKFLOW_SPEC.md`](../ai/WORKFLOW_SPEC.md)
7. 相关 Tutorial / Integration / Troubleshooting

## 学生可以直接复制

> 先读完这个 Flowi Workflow 官方文档。请当我的 Flowi Workflow 导师，先给我整个 Workflow 架构，再一步一步教我。只可以使用文档里真实存在的 Built-in Component，或者明确标注的 Documented Flowi Extension。连接前检查类型，不要乱编功能。我想做的是：[写你的 Workflow]

完整英文规则以 [`../AI_START_HERE.md`](../AI_START_HERE.md) 为准。
