---
name: Design Acceptance Criteria
description: Draft concrete, Gherkin-formatted acceptance criteria for user stories.
category: design
phase: Design
---

# Purpose

To define clear boundaries for story completion, ensuring testers can write automated test scripts directly.

# When To Use

- User stories are drafted
- Test scenario preparation begins
- Definition of Ready (DoR) audit

# Inputs

- User Stories
- Business Rules
- Mockups or UI wireframes

# Process

1. Review user story goals and related business rules.
2. Identify happy paths, edge cases, validation limits, and error flows.
3. Formulate criteria using Gherkin notation (`Given-When-Then`).
4. Specify test data parameters and expected database changes.
5. Append criteria directly to the corresponding user story.

# Output

- Gherkin Acceptance Criteria Documents
- Story Verification Checklists

# Quality Checklist

- [ ] Acceptance criteria are binary (pass/fail).
- [ ] No vague terms (e.g., 'fast response') are used.
- [ ] Gherkin scenarios cover both positive and negative validations.

# Human Review Required

Yes. Product Owner and QA Lead must validate acceptance criteria.
