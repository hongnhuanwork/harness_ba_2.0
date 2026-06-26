---
name: Generate Test Case
description: Generate detailed, step-by-step QA Test Cases based on test scenarios and acceptance criteria.
category: documentation
phase: Validation
---

# Purpose

To create detailed QA test scripts that specify preconditions, execution steps, test data, and expected results.

# When To Use

- Test Scenario log is approved
- Sprint active phase starts
- Preparation for UAT

# Inputs

- Test Scenarios Log
- Gherkin Acceptance Criteria
- Data Dictionary

# Process

1. Retrieve Test Case template from `knowledge/templates/`.
2. Write test case metadata (ID, Title, Preconditions, Priority, Linked Requirement).
3. Define specific test data inputs.
4. Write step-by-step execution actions.
5. Specify the exact expected results for each step.
6. Link test cases to corresponding automated test code paths if available.

# Output

- QA Test Cases Catalog

# Quality Checklist

- [ ] Preconditions are realistic and clear.
- [ ] Steps are unambiguous and reproducible by anyone.
- [ ] Expected results are concrete and verifiable.

# Human Review Required

No. Can be reviewed and approved by the QA Lead.
