---
name: Elicit Integration Requirements
description: Elicit third-party and internal system integration specifications, protocols, and data sync frequencies.
category: elicitation
phase: Elicitation
---

# Purpose

To define integration rules, technical protocols, data structures, and schedules between systems.

# When To Use

- Integration design kickoff
- API design preparation
- Third-party system onboarding

# Inputs

- Dependency Register
- Technical architecture blueprints
- API documentation of external systems

# Process

1. Identify systems involved in data exchange.
2. Define data directionality (One-way, Bi-directional).
3. Determine sync frequency (Real-time, Scheduled, Batch).
4. Document technical protocols (REST, SOAP, Webhooks, SFTP).
5. Draft Integration requirements in a formal interface log.

# Output

- Integration Requirements Specification
- System Interface Log

# Quality Checklist

- [ ] Protocols, ports, and payload formats are defined.
- [ ] Authentication models are specified.
- [ ] Error handling and failure scenarios are mapped.

# Human Review Required

Yes. Tech Lead or Solution Architect must approve integration requirements.
