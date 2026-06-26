---
name: Design System Interactions
description: Design and map interaction sequences between frontends, backends, databases, and APIs.
category: design
phase: Design
---

# Purpose

To model sequence diagrams showing timeline-based data exchange and event execution across system boundaries.

# When To Use

- Solution Design initialization
- Integration setup tasks
- Performance/Concurrency reviews

# Inputs

- API Contracts
- Data Models
- Logical Architecture blueprints

# Process

1. Identify the lifecycle actors and components (Frontend, Gateway, Service, DB, Queue).
2. Trace chronological interactions required to fulfill a use case.
3. Detail synchronous API calls vs. asynchronous message queues.
4. Specify message payloads, authentication keys, and database commit gates.
5. Generate Interaction Sequence Diagrams.

# Output

- Sequence Diagrams (Mermaid)
- Component Interaction Specification

# Quality Checklist

- [ ] All components mapped exist in the architecture blueprint.
- [ ] Sync vs. async behaviors are clearly marked.
- [ ] Database save steps and transaction boundaries are defined.

# Human Review Required

Yes. Solution Architect and Tech Lead must approve.
