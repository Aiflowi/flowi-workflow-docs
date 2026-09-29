---
title: How does the Schedule Trigger work?
description: See the documented schedule settings for starting an AI Flowi Workflow flow by interval, day, week, month, or cron expression.
canonical_url: https://aiflowi.com/docs/triggers/schedule/
last_updated: 2026-09-29
author: Ai Flowi
---

# How does the Schedule Trigger work?

Schedule Trigger starts an AI Flowi Workflow flow according to its configured time rule. It offers interval, daily, weekly, monthly, and cron schedule types, interpreted with the selected timezone. Use it when the flow should begin on a schedule instead of waiting for an incoming request.

## Schedule settings

| Setting | What it controls |
|---|---|
| Schedule Type | Choose Interval, Daily, Weekly, Monthly, or Cron. |
| Timezone | The IANA timezone used to interpret the rule. |
| Enabled | Turns automatic scheduled execution for the flow on or off. |
| Interval | Set an interval value in minutes, hours, or days. |
| Daily and weekly | Set execution times; weekly schedules also select days of the week. |
| Monthly | Choose calendar days or a weekday occurrence rule. A selected calendar day that does not exist in a month is skipped for that month. |
| Cron | Add a standard five field cron expression evaluated in the selected timezone. |

The component exposes **Schedule Data** as a JSON output. Connect it to a component that accepts JSON if the scheduled flow needs that data. For a first example of typed connections and testing a flow, follow the [first workflow tutorial](../tutorials/first-playground-workflow.md).

Check the timezone and rule together when a run happens at an unexpected time. For monthly calendar days, account for months that do not contain the selected date. A structurally compatible connection does not confirm that the rest of the flow is configured correctly; inspect its downstream components and credentials if execution fails.

## Related

[Triggers](index.md) · [Workflow basics](../concepts/workflow-basics.md) · [First workflow](../tutorials/first-playground-workflow.md)
