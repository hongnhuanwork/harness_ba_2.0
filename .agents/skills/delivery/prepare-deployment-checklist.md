---
name: Prepare Deployment Checklist
description: Prepare step-by-step deployment instructions, server configurations, and rollback plans.
category: delivery
phase: Delivery
---

# Purpose

To ensure production deployments are executed safely, minimizing downtime and risk.

# When To Use

- Deployment scheduling
- Before production releases
- Deployment coordination meetings

# Inputs

- Release notes
- Logical architecture configurations
- Database scripts

# Process

1. Draft step-by-step deployment tasks (e.g. backup DB, apply scripts, deploy build).
2. Assign owners and estimated durations for each task.
3. Define validation steps post-deployment.
4. Write a detailed rollback plan with triggers (e.g. 'If validation fails at step 5, restore DB').
5. Format as a checklist log.

# Output

- Production Deployment Checklist Document

# Quality Checklist

- [ ] Rollback plan is documented step-by-step.
- [ ] Task durations and deployment window limits are realistic.
- [ ] Owners are assigned to every step.

# Human Review Required

Yes. Solution Architect and Lead DevOps Engineer must review.
