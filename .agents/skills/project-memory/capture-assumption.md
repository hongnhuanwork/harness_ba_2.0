---
name: Capture Assumption
description: Analyze user inputs or documents to detect, format, and queue new assumptions for the Project Memory.
category: project-memory
phase: Discovery
---

# Purpose

Identify unverified statements, format them into the standard assumptions schema, and queue them for user approval.

# When To Use

- A user statement contains uncertainty.
- A requirement document relies on unverified third-party deliverables.

# Inputs

- User statement
- Existing assumptions log ([assumptions.md](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory/assumptions.md))

# Process

1. Analyze text for assumption patterns ('assuming', 'should be available', 'expected').
2. Extract Description, Reason, Owner, and proposed Validation Date.
3. Assign a unique ID (e.g., ASM-001).
4. Format the entry as a markdown table row.
5. Present the draft entry to the user for confirmation.

# Output

- Formatted Assumption entry (queued for validation)

# Quality Checklist

- [ ] Verify that there is no duplicate item with same ID.
- [ ] Strictly check that the information has been approved by the user before writing.

# Human Review Required

Mandatory. The user must review the assumption description, owner, and date before writing to assumptions.md.
