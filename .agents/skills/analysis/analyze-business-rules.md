---
name: Analyze Business Rules
description: Analyze, optimize, and test business rule logic, identifying overlaps or deadlocks.
category: analysis
phase: Analysis
---

# Purpose

To ensure business logic is mathematically sound, logically consistent, and free of contradictions.

# When To Use

- Business Rules Catalog is updated
- Logic conflicts in system tests
- New policy implementation checks

# Inputs

- Business Rules Catalog
- Logical decision trees
- Policy source docs

# Process

1. Translate business rules into structured decision tables or logic trees.
2. Run permutation testing across input ranges to detect rule overlap or gaps.
3. Look for deadlocks or mutually exclusive rule paths.
4. Optimize logic pathways to reduce computation steps.
5. Update Rules Catalog with verified decision maps.

# Output

- Logic Verification Report
- Optimized Decision Tables

# Quality Checklist

- [ ] All inputs generate a valid, defined outcome (no gaps).
- [ ] Rules contain no conflicting definitions.
- [ ] Rule logic is documented in business-readable layouts.

# Human Review Required

No. Subject Matter Expert review is recommended, but analysis can be validated programmatically.
