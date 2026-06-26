---
name: Audit Project Memory
description: Perform validation and audit checks across the Project Memory files.
category: project-memory
phase: Validation
---

# Purpose

Verify file sync, formatting, and detect orphaned decisions or expired assumptions.

# When To Use

- Prior to milestone reviews or weekly status updates.

# Inputs

- All project memory files

# Process

1. Run checks mapping memory.md active items to their supporting logs.
2. Identify expired assumptions (Validation Date < current date).
3. Flag unmitigated risks or unapproved decisions.
4. Compile findings into an Audit Report.
5. Present findings to the user.

# Output

- Audit report detailing synchronization status and gaps

# Quality Checklist

- [ ] Verify that there is no duplicate item with same ID.
- [ ] Strictly check that the information has been approved by the user before writing.

# Human Review Required

No. Audit can run programmatically but report must be delivered to the Scrum Master.
