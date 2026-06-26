---
name: Capture Decision
description: Record architectural, technical, or scoping decisions in Architecture Decision Record (ADR) format.
category: project-memory
phase: Discovery
---

# Purpose

Formalize project decisions, outlining context, alternatives considered, and consequences.

# When To Use

- A key design, database, framework, or scope boundary choice is selected.

# Inputs

- Design discussion notes
- Existing decisions log ([decisions.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/decisions.md))

# Process

1. Extract decision context, alternatives considered, and rationale.
2. Assign a unique ID (e.g., DEC-001).
3. Draft ADR detailing Context, Rationale, and Consequences.
4. Format as markdown and present to the user.

# Output

- Formatted ADR entry (queued for approval)

# Quality Checklist

- [ ] Verify that there is no duplicate item with same ID.
- [ ] Strictly check that the information has been approved by the user before writing.

# Human Review Required

Mandatory. Lead Architect or PO must confirm the decision logic before writing to decisions.md.
