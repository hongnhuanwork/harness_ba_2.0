---
name: Update Project Memory
description: Consolidate changes in supporting logs to refresh the master memory.md file.
category: project-memory
phase: Discovery
---

# Purpose

Keep memory.md synchronized with all active assumptions, risks, decisions, and lessons.

# When To Use

- Any supporting memory log (assumptions.md, decisions.md, risks.md, lessons-learned.md) has changed.

# Inputs

- Supporting memory logs
- Active memory.md file ([memory.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/memory.md))

# Process

1. Read all active entries from the supporting logs.
2. Filter out closed risks, verified assumptions, or superseded decisions.
3. Write the active lists into their respective sections in memory.md.
4. Update version metadata header.
5. Present changes to the user for approval.

# Output

- Refreshed memory.md file

# Quality Checklist

- [ ] Verify that there is no duplicate item with same ID.
- [ ] Strictly check that the information has been approved by the user before writing.

# Human Review Required

Mandatory. Project Manager must approve the refreshed memory.md update.
