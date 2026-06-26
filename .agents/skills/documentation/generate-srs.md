---
name: Generate SRS
description: Compile, format, and generate a Software Requirements Specification (SRS) document.
category: documentation
phase: Analysis
---

# Purpose

To consolidate functional and non-functional requirements, data standards, and system behaviors into an engineering-grade SRS.

# When To Use

- Software engineering planning active
- Baseline FRS and NFRS completed
- Formal client sign-off requested

# Inputs

- Functional Requirements Specification (FRS)
- Non-Functional Requirements Specification (NFRS)
- Data Models and Constraints

# Process

1. Retrieve SRS template from `knowledge/templates/`.
2. Define system scope, components, and logical interfaces.
3. Detail functional, non-functional, security, and integration specifications.
4. Add logical data models and database requirements.
5. Incorporate compliance, hosting, and operational parameters.
6. Validate against markdown and terminology rules.

# Output

- Software Requirements Specification (SRS)

# Quality Checklist

- [ ] Both functional and non-functional specs are complete.
- [ ] External system interfaces are mapped.
- [ ] Meets all regulatory and security compliance criteria.

# Human Review Required

Yes. Solution Architect and Lead QA Engineer must sign off.
