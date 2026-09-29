---
title: 怎样把 Flowi GitHub 链接贴给 ChatGPT 学 Workflow
description: 学生使用 Flowi 官方 GitHub AI Start Here 链接，让 ChatGPT 或 DeepSeek 依据真实节点与连接逐步教 Flowi Workflow。
---

# 怎样用 ChatGPT 学 Flowi Workflow

把以下 GitHub 链接贴给 ChatGPT 或 DeepSeek：

`https://github.com/ai-flowi/flowi-docs/blob/main/docs/AI_START_HERE.md`

然后输入：

> 先读这个官方 Flowi Workflow 文档。请当我的导师，先画整个 Workflow 架构，再一步一步教我 Add 什么 Node、Set 什么重要参数、哪个 Output 连哪个 Input、怎样 Test，以及成功时应该看到什么。我想做：[你的目标]。

AI 应该先查 Task Routing、Verified Recipe 和相关 Component metadata，而不是一次读取全部 500+ Nodes。这样比较容易得到稳定、可验证的教学答案。

如果 AI 讲了一个你在 Flowi 找不到的 Node，可以要求它提供该 Node 的官方 Component ID 和文档来源；找不到就应该标记为 `not documented`，而不是继续猜。
