---
name: Generate Test Scenario
description: Generate system and functional Test Scenarios based on requirements and process flows.
category: documentation
phase: Validation
---

# Purpose

To create a high-level test suite outline representing all system functions and user paths that must be validated.

# When To Use

- QA planning phase is active
- Functional designs baseline completed
- User stories are finalized

# Inputs

- Functional Requirements Document (FRD)
- Use Case specs
- User Stories

# Process

1. Identify the test domains (Functional, Integration, Security, Performance).
2. For each functional capability, outline test scenarios (e.g. 'Verify login with valid credentials').
3. Ensure scenarios cover both positive (happy path) and negative (error handling) states.
4. Structure scenarios with clear IDs and map them to requirement IDs.
5. Review with Lead QA Engineer.

# Output

- Test Scenarios Log

# Quality Checklist

- [ ] Every functional requirement has at least one associated test scenario.
- [ ] Scenarios cover security validations and validation limits.
- [ ] IDs follow standard conventions.

# Human Review Required

Yes. Lead QA Engineer must validate test scenarios.
