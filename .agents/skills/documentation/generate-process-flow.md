---
name: Generate Process Flow
description: Generate process flow diagrams mapping software workflows and user actions.
category: documentation
phase: Design
---

# Purpose

To map procedural steps, decision rules, and loops within software features.

# When To Use

- Functional requirements modeling
- Logical design planning
- User journey detailing

# Inputs

- Use Case specs
- Business Rules Catalog
- User Stories

# Process

1. Define start trigger and exit criteria of the software process.
2. Map chronological sequence of screen transitions, API calls, and validation checks.
3. Draw process diagram using Mermaid flowcharts.
4. Annotate decision nodes with rules from the Business Rules Catalog.
5. Cross-link diagram to related User Stories.

# Output

- Software Process Flow Diagram (Mermaid)

# Quality Checklist

- [ ] All validation paths (pass/fail) are mapped.
- [ ] Decision labels match business rules.
- [ ] The flowchart is logical and has no dead-ends.

# Human Review Required

No. Can be reviewed and approved by Tech Lead.
