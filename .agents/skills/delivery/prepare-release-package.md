---
name: Prepare Release Package
description: Compile deployment binaries, database scripts, configuration parameters, and release notes.
category: delivery
phase: Delivery
---

# Purpose

To package all build deliverables and code settings for deployment to production.

# When To Use

- Sprint/Release completion
- Deployment window active
- Release approval received

# Inputs

- Release notes
- Repository build outputs
- Database migration scripts

# Process

1. Verify all code builds pass integration checks.
2. Compile database migration scripts (SQL/DDL).
3. Package binaries, configs, and dependencies into release archives.
4. Add Release Notes and deployment checklist.
5. Deliver to deployment team.

# Output

- Release Package Manifest
- Deployment Package Archive

# Quality Checklist

- [ ] All database scripts are versioned.
- [ ] Release notes match build contents.
- [ ] Build is verified in staging environment.

# Human Review Required

Yes. Release Manager and Lead Architect must sign off.
