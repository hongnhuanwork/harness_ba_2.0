---
name: Prepare UAT Package
description: Prepare UAT scripts, test data, user login credentials, and defect logs for UAT execution.
category: delivery
phase: Delivery
---

# Purpose

To prepare the UAT testing environment and materials for client review.

# When To Use

- Pre-UAT preparation
- UAT environment setup completed
- Sprint verification passes

# Inputs

- UAT Scripts
- QA Test Cases catalog
- UAT Environment configs

# Process

1. Generate test credentials and profiles in UAT database.
2. Populate mock data required for scenarios (orders, catalogs).
3. Create UAT Instruction Sheet with URLs and credentials.
4. Establish feedback and defect-logging channels.
5. Deliver package to Product Owner.

# Output

- UAT Package Manifest / Guide
- UAT User Credentials Log

# Quality Checklist

- [ ] UAT environment is validated as online and running.
- [ ] Test credentials are functional.
- [ ] Data is populated and reset for testing start.

# Human Review Required

Yes. Product Owner or PM must approve package before client distribution.
