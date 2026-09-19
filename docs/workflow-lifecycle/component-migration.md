# Component Updates and Migration

Flowi includes controlled component update behavior.

When a component definition changes, the audited path can:

- compare saved and current component structure;
- detect certain breaking changes;
- preserve compatible same-name/same-type input values;
- use the current component code/structure;
- warn when edges may be lost;
- require confirmation for breaking changes.

Do not assume every breaking edge can be automatically remapped. Retest upgraded workflows.
