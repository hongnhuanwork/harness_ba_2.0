---
name: Review FRD
description: Review and audit Functional Requirements Documents (FRDs) for design feasibility, detail, and traceability.
category: review
phase: Analysis
---

# Purpose

To check that all functional capabilities are logically complete, trace back to the BRD, and are developer-ready.

# When To Use

- FRD draft completes
- Sprint grooming sessions
- QA planning kickoff

# Inputs

- Draft FRD
- Approved BRD
- Technical architecture blueprints

# Process

1. Check that all functional specifications map to at least one BRD requirement.
2. Verify alternative and exception flows in all use cases.
3. Ensure that wireframes and screen flows match the written specifications.
4. Check integration requirements for protocol definitions.
5. Compile FRD Review Notes.

# Output

- FRD Review Notes

# Quality Checklist

- [ ] 100% of functional requirements trace to the BRD.
- [ ] No contradictions exist between mockups and text descriptions.
- [ ] Logical flows have clear exit triggers.

# Human Review Required

Yes. Solution Architect and Lead QA must review findings.
