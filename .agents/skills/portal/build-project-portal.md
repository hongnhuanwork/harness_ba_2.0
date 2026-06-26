---
name: Build Project Portal
description: Build or update the project portal homepage, incorporating context links, and indexes.
category: portal
phase: Discovery
---

# Purpose

To create a centralized entry point for project resources, memory logs, and rule files.

# When To Use

- Project initialization starts
- Project Portal update requests
- Portal page creation tasks

# Inputs

- Project resources list
- AGENT.md configuration
- Rule files list

# Process

1. Design the main portal HTML or markdown homepage structure.
2. Incorporate links to the project charter, PMO resources, and active memory logs.
3. Add navigation to rules (.agents/rules/) and skills (.agents/skills/).
4. Integrate phase dashboards and current status flags.
5. Verify styling and link responsiveness.

# Output

- Project Portal Homepage (index.html/portal.md)
- Portal Site Map

# Quality Checklist

- [ ] Homepage style is professional and clean.
- [ ] All navigation links are relative and functional.
- [ ] The active project phase is highlighted.

# Human Review Required

Yes. Product Owner or PM must review and approve portal layout.
