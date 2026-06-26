---
name: Elicit Non-Functional Requirements
description: Elicit and document quality of service attributes, performance, security, scaling, and compliance requirements.
category: elicitation
phase: Elicitation
---

# Purpose

To define system operational constraints, ensuring performance, reliability, and security goals are met.

# When To Use

- System architecture planning begins
- Security audits or performance reviews are scheduled
- Non-functional criteria refinement

# Inputs

- Technical constraints documentation
- SLA/SOW agreements
- Compliance guidelines

# Process

1. Analyze business context for scaling, loading, and uptime expectations.
2. Define specific non-functional requirements (NFRs) across categories (Performance, Reliability, Security, Usability, Accessibility, Scalability).
3. Translate NFRs into measurable metrics (e.g., 'Response time <= 1s under peak load').
4. Align NFRs with regulatory compliance standards.
5. Consolidate in an NFR Specification log.

# Output

- Non-Functional Requirements Specification (NFRS)
- SLA and Metric Target Matrix

# Quality Checklist

- [ ] All NFRs have measurable validation criteria.
- [ ] Performance targets are specific to defined loads.
- [ ] Security policies align with enterprise standards.

# Human Review Required

Yes. Lead Architect and Security Officer must review and approve NFRs.
