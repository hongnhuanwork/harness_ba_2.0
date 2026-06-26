---
name: Validate Test Coverage
description: Validate that QA test cases cover all acceptance criteria and edge cases.
category: validation
phase: Validation
---

# Purpose

To audit the testing suite, ensuring no functional requirements escape validation.

# When To Use

- Test planning active
- Before UAT start
- Sprint review gates

# Inputs

- QA Test Cases
- Acceptance Criteria
- Functional specifications

# Process

1. Map test cases to functional specifications.
2. Ensure test cases exist for every Gherkin scenario.
3. Check for integration and database verification steps.
4. Flag gaps in validation coverage.
5. Draft Test Coverage Report.

# Output

- Test Coverage Report

# Quality Checklist

- [ ] 100% of acceptance criteria have matching test cases.
- [ ] Critical transaction paths have regression tests.

# Human Review Required

Yes. Lead QA Engineer must validate coverage.
