---
name: Design Screen Flow
description: Design sequential screen layouts, UI path transitions, and interaction triggers.
category: design
phase: Design
---

# Purpose

To model transitions between user screens based on system events, validations, and user actions.

# When To Use

- Navigation Flow design completed
- User story grooming for UI/UX
- Prototype preparation

# Inputs

- Use Case specs
- User Stories
- Navigation Flow Spec

# Process

1. Identify all screens needed for a target use case.
2. Map transitions between screens based on user clicks, validation passes, or validation failures.
3. Map system-level redirects (e.g. timeout redirection, logout paths).
4. Draw Screen Flow diagrams showing connections.
5. Document interaction rules for every transition.

# Output

- Screen Flow Diagram (Mermaid)
- Screen Transition Specification Table

# Quality Checklist

- [ ] All paths in the target use case have a corresponding screen transition.
- [ ] Redirection triggers are clearly defined.
- [ ] Diagram is easily readable.

# Human Review Required

Yes. Product Owner and UX Lead must validate screen flows.
