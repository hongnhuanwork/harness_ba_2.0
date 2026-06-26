---
name: Generate Traceability Matrix
description: Generate and maintain a Requirements Traceability Matrix (RTM).
category: documentation
phase: Design
---

# Purpose

To ensure every requirement traces back to a business objective and forward to a design element and test case.

# When To Use

- Design phase is active
- Sprint planning completes
- Pre-release audit starts

# Inputs

- Business Objectives List
- Functional specifications
- Solution Designs
- Test Cases list

# Process

1. Retrieve RTM template from `knowledge/templates/`.
2. Map Business Goal IDs to Functional Requirement IDs.
3. Link Functional Requirement IDs to User Story IDs.
4. Link User Story IDs to Solution Design/API contract sections.
5. Link User Story IDs to QA Test Case IDs.
6. Review and flag any orphans (requirements without test cases or goals).

# Output

- Requirements Traceability Matrix (RTM)

# Quality Checklist

- [ ] No requirement is without a mapping to a business goal.
- [ ] Every active requirement has a corresponding design and test case mapped.
- [ ] All ID links resolve to valid artifacts.

# Human Review Required

Yes. Project Manager and Product Owner must sign off.
