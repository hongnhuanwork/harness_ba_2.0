---
name: Review SRS
description: Review and audit Software Requirements Specifications (SRS) for engineering completeness and technical constraints.
category: review
phase: Analysis
---

# Purpose

To verify that the SRS matches architectural guidelines, NFR metrics, and security compliance.

# When To Use

- SRS draft completes
- Technical feasibility review
- Regulatory compliance audit

# Inputs

- Draft SRS
- Security standards documentation
- Engineering stack constraints

# Process

1. Verify that non-functional requirements have quantifiable metrics.
2. Audit interface and integration parameters against API contracts.
3. Ensure data residency and privacy rules conform to compliance requirements.
4. Check schemas and data dictionary completeness.
5. Generate SRS Review Report.

# Output

- SRS Review Report

# Quality Checklist

- [ ] All security and performance thresholds are quantified.
- [ ] External system contracts are valid.
- [ ] Data models are normalized and fully documented.

# Human Review Required

Yes. Solution Architect and Tech Lead must approve the review findings.
