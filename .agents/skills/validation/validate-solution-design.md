---
name: Validate Solution Design
description: Validate the Solution Design against functional requirements and non-functional requirements.
category: validation
phase: Validation
---

# Purpose

To ensure that the designed system is capable of delivering the requested functionality and performance.

# When To Use

- Solution Design completed
- Prior to development start
- Design review boards

# Inputs

- Solution Design Document
- Functional Requirements Document (FRD)
- Non-Functional Requirements Specification

# Process

1. Perform architectural review against FRS requirements.
2. Verify that infrastructure can support NFR load and speed targets.
3. Audit data models for performance and scaling constraints.
4. Document findings in a Design Validation Report.

# Output

- Design Validation Report

# Quality Checklist

- [ ] Design satisfies all performance, security, and hosting NFRs.
- [ ] Database designs support all data flow scenarios.

# Human Review Required

Yes. Solution Architect and Lead Architect must sign off.
