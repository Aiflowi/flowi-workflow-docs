# Custom Components

Flowi supports Custom Components for requirements that are not cleanly covered by existing built-in components.

Custom Components can define:

- typed inputs;
- typed outputs;
- output methods;
- dynamic or conditional fields;
- tool-mode behavior;
- runtime error handling.

## Recommended order

1. Use an `AVAILABLE` built-in component where possible.
2. Use documented webhook/API connectivity when appropriate.
3. Use a Custom Component when the requirement cannot be represented safely and clearly with current built-ins.

A Custom Component is not automatically an official Flowi built-in component.
