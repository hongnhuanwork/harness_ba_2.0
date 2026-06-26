---
name: Generate User Story
description: Draft, document, and refine user stories with Gherkin acceptance criteria in the repository.
category: documentation
phase: Analysis
---

# Purpose

To create detailed, developer-ready user stories with verifiable validation rules.

# When To Use

- Backlog grooming
- Sprint planning preparation
- Requirement mapping tasks

# Inputs

- Functional specifications
- Gherkin Acceptance Criteria
- User Personas

# Process

1. Retrieve User Story template from `knowledge/templates/`.
2. Write core user story statement (`As a... I want to... so that...`).
3. Detail preconditions, functional triggers, and business logic rules.
4. Add the Gherkin Acceptance Criteria scenarios (`Given-When-Then`).
5. Link story to parent Epic and design wireframes.
6. Verify formatting meets the Documentation Rule.

# Output

- User Story Markdown Document

# Quality Checklist

- [ ] Story fits the INVEST criteria.
- [ ] Gherkin scenarios cover happy path and edge cases.
- [ ] No technical implementation directives are mandated in the description.

# Human Review Required

Yes. Product Owner must review and approve before sprint allocation.
