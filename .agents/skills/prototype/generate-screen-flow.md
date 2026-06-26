---
name: Generate Screen Flow
description: Generate visual screen flows mapping screens to transition logic.
category: prototype
phase: Design
---

# Purpose

To visualize user path transitions and screen sequences for a complete module.

# When To Use

- Screen design completes
- User journey verification
- Developer walkthroughs

# Inputs

- Completed Wireframes / Mockups
- Screen Transition specs
- Use Case specifications

# Process

1. Assemble all screen mockups chronologically.
2. Connect screens with trigger arrows indicating actions (clicks, API responses).
3. Generate visual sequence chart (using Mermaid or UI flow diagrams).
4. Check for isolated screens or dead ends.
5. Share with development team.

# Output

- Visual Screen Flow Diagram (Mermaid)

# Quality Checklist

- [ ] All screens are reachable through defined user paths.
- [ ] Diagram paths match the Use Case happy and exception flows exactly.

# Human Review Required

No. Can be reviewed and approved by the QA Lead.
