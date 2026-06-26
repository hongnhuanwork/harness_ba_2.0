# Deployment Checklist Template

## Purpose
Lists step-by-step production setup tasks, rollback triggers, and validation routines.

## Traceability
Traces back to: Release Notes, Technical Designs. Traces forward to: Post-deploy smoke test.

## Metadata
- Release Version: [vX.Y.Z]
- Deployment Date: [YYYY-MM-DD]
- Deployment Lead: [Name]
- Environment: [Production]

## Required Sections
## 1. Pre-Deployment Check
- [ ] Database backup completed
- [ ] Server resources validated
- [ ] Notification banners active

## 2. Step-by-Step Deployment Runbook
| Step | Task Details | Executor | Duration | Status |
|---|---|---|---|---|
| 1 | [Apply database migration SQL] | [Name] | [Minutes] | [Pending/Done] |
| 2 | [Deploy application binaries] | [Name] | [Minutes] | [Pending/Done] |

## 3. Post-Deployment Validation & Smoke Testing
List verification actions (e.g. check login API, load site) to confirm successful deployment.

## 4. Rollback Plan
Detailed, step-by-step instructions to revert changes if validation fails at any point.

## Optional Sections
## 5. Support Contact Escalation Roster
List contact details of DevOps, Database, and QA leads.

## Completion Checklist
- [ ] Backup verification is completed before beginning setup.
- [ ] Rollback plan specifies clear trigger points and executor names.
- [ ] Checklist is fully marked before closing maintenance window.
