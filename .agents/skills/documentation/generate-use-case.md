---
name: Generate Use Case
description: Document individual system Use Cases using standard narrative templates.
category: documentation
phase: Design
---

# Purpose

To create detailed use case specifications that guide developers in coding and QA in testing specific interaction paths.

# When To Use

- Use cases design phase is active
- User story detailing
- Test scenario preparation

# Inputs

- Use Case Design specifications
- Functional specifications
- User Personas

# Process

1. Retrieve Use Case template from `knowledge/templates/`.
2. Define actors, triggers, preconditions, and postconditions.
3. Write the step-by-step main success scenario (happy path).
4. Document alternative flows and exception flows.
5. Integrate Mermaid use case flow diagram.
6. Ensure consistency with the glossary.

# Output

- Use Case Document

# Quality Checklist

- [ ] Preconditions and postconditions are realistic and verifiable.
- [ ] Every step has actor and system roles clearly identified.
- [ ] Exception paths handle potential errors cleanly.

# Human Review Required

No. Can be reviewed and approved by the QA Lead.
