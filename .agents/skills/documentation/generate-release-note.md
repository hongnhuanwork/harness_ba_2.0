---
name: Generate Release Note
description: Generate release notes detailing features, bug fixes, known issues, and deployment steps.
category: documentation
phase: Delivery
---

# Purpose

To document system updates and provide clear communication to stakeholders and users.

# When To Use

- Deployment planning starts
- Sprint demo completes
- Sprint/Release completion

# Inputs

- Completed User Stories list
- Bug tracking logs
- Deployment checklist drafts

# Process

1. Retrieve Release Note template from `knowledge/templates/`.
2. List newly delivered features with descriptions and business values.
3. List bugs fixed in this release.
4. Document known limitations, workarounds, or pending items.
5. Outline environment settings and dependencies (e.g. database migration scripts needed).
6. Format for stakeholder communication.

# Output

- Release Notes Document

# Quality Checklist

- [ ] Version number matches deployment manifest.
- [ ] All listed features match completed backlog items.
- [ ] Known bugs are explicitly listed with issue IDs.

# Human Review Required

Yes. Project Manager and Product Owner must sign off.
