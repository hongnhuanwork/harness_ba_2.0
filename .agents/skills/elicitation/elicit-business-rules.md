---
name: Elicit Business Rules
description: Elicit and document business policies, calculation algorithms, conditional constraints, and operational business rules.
category: elicitation
phase: Elicitation
---

# Purpose

To formalize and separate core business logic and policies from application code flow, ensuring business rule traceability.

# When To Use

- Business logic modeling starts
- Calculation engine design begins
- Policy changes require updates

# Inputs

- Company policy manuals
- Tax or accounting guidelines
- Subject matter expert interview notes

# Process

1. Identify policies, formulas, constraints, and validations in raw materials.
2. Categorize rules (e.g., Constraint, Derivation, Action Trigger, Fact).
3. Formulate rules using structured natural language or decision tables.
4. Link each rule to the business goals it enforces.
5. Log in the Business Rules Catalog.

# Output

- Business Rules Catalog
- Decision Tables / Logic Maps

# Quality Checklist

- [ ] Rules are written in a declarative format rather than procedural.
- [ ] Formulas and variables are mathematically defined.
- [ ] Rules are independent of specific database tables or software design.

# Human Review Required

Yes. Business Analyst Lead or Policy Owner must approve the business rules.
