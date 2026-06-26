---
name: Generate FRD
description: Compile, format, and generate a Functional Requirements Document (FRD) detailing system behavior.
category: documentation
phase: Analysis
---

# Purpose

To create the primary technical contract detailing what system features must be built for the development team.

# When To Use

- Analysis phase is active
- BRD is signed off
- Sprint backlog planning begins

# Inputs

- Business Requirements Document (BRD)
- Functional Requirements Specification (FRS)
- System Action-Response Table

# Process

1. Retrieve FRD template from `knowledge/templates/`.
2. Document system context, actor definitions, and high-level architecture.
3. Detail all functional requirements, use cases, and process flows.
4. Integrate wireframes, screen flows, and API specifications.
5. Cross-reference requirements to the BRD for traceability.
6. Perform documentation validation checks.

# Output

- Functional Requirements Document (FRD)

# Quality Checklist

- [ ] All requirements trace back to BRD business goals.
- [ ] Functional specs are written clearly with 'shall' or standard modal verbs.
- [ ] Use cases are detailed and logically sound.

# Human Review Required

Yes. Product Owner and Technical Lead must approve the FRD.
