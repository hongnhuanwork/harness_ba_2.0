---
name: Validate Traceability
description: Audit the Requirements Traceability Matrix (RTM) for orphan requirements, design gaps, and test omissions.
category: validation
phase: Validation
---

# Purpose

To ensure full alignment across the project lifecycle, verifying that every requirement is designed and tested.

# When To Use

- RTM updates completed
- Pre-release audits
- Sprint validation gates

# Inputs

- Requirements Traceability Matrix (RTM)
- Active backlog

# Process

1. Audit the RTM for empty cells (orphans).
2. Flag requirements that lack design mapping.
3. Flag requirements that lack test case mapping.
4. Investigate and resolve tracing gaps.
5. Draft Traceability Validation Report.

# Output

- Traceability Validation Audit

# Quality Checklist

- [ ] 100% of requirements have corresponding design and test maps.
- [ ] All tracing paths are validated.

# Human Review Required

No. Can be executed programmatically but findings must be shared with the PM.
