---
name: Review Use Cases
description: Review and audit Use Case descriptions for completeness, flow logic, and exception mapping.
category: review
phase: Design
---

# Purpose

To verify that use case specs accurately map actor actions, system checks, and all error conditions.

# When To Use

- Use Case specs completed
- Test scenario mapping begins
- Prior to UI mockup design

# Inputs

- Use Case Specifications
- Functional specifications
- Process flows

# Process

1. Verify that preconditions and postconditions are mathematically and statefully sound.
2. Check that happy path steps are sequentially correct.
3. Confirm that every validation failure step has an associated exception flow.
4. Verify that actors align with Personas.
5. Compile Use Case Review notes.

# Output

- Use Case Review Notes

# Quality Checklist

- [ ] All validation points have failure flows mapped.
- [ ] Actor actions are active and clear.
- [ ] Flow contains no implementation code.

# Human Review Required

No. Can be reviewed and approved by Lead QA.
