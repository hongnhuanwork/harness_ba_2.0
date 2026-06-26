# Test Case Template

## Purpose
Specifies detailed, reproducible actions, test data, and expected results for system validation.

## Traceability
Traces back to: Test Scenario, Gherkin Acceptance Criteria. Traces forward to: Bug Reports.

## Metadata
- Test Case ID: [TC-01]
- Test Scenario Link: [TS-01]
- Associated Requirement: [US-01]
- Priority: [High/Medium/Low]
- Execution Type: [Manual/Automated]

## Required Sections
## 1. Preconditions
Detail system states, permissions, and test data configurations required before execution.

## 2. Test Data Inputs
List specific inputs (e.g. usernames, values, file uploads) used in the script.

## 3. Test Steps & Expected Results
| Step | Action Details | Expected System Response | Status (Pass/Fail) |
|---|---|---|---|
| 1 | [Navigate to URL] | [Login page displays] | [Pass/Fail] |
| 2 | [Enter valid email and password, click submit] | [User is redirected to dashboard] | [Pass/Fail] |

## Optional Sections
## 4. Post-Execution Cleanup
Outline steps to revert database changes or reset environment parameters.

## Completion Checklist
- [ ] Steps are unambiguous and reproducible by anyone.
- [ ] Expected results are concrete (avoid vague outcomes).
- [ ] Actual results are documented in case of failure.
