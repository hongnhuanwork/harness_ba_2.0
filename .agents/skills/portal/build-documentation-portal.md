---
name: Build Documentation Portal
description: Build or update the documentation portal page, organizing generated artifacts.
category: portal
phase: Analysis
---

# Purpose

To create a clean, navigable documentation index that maps all output artifacts to active phases.

# When To Use

- Documentation phase active
- New major artifacts generated
- Resource audits

# Inputs

- Output directory list
- Requirements Traceability Matrix
- Project artifacts catalog

# Process

1. Analyze current files in `output/phase-[1-6]/`.
2. Create a structured index page showing artifact names, phases, versions, and descriptions.
3. Group artifacts by category (e.g., Requirements, Design, Testing).
4. Link each artifact to its corresponding business goals.
5. Verify all links use relative paths.

# Output

- Documentation Portal Page (docs-portal.md)

# Quality Checklist

- [ ] All active files in `output/` are listed in the index.
- [ ] No broken links exist.
- [ ] Version numbers match the files on disk.

# Human Review Required

No. Can be updated dynamically by the agent and verified during sprints.
