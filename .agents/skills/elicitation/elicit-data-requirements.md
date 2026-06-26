---
name: Elicit Data Requirements
description: Elicit data storage, retention, volume, privacy, and reporting needs from stakeholders.
category: elicitation
phase: Elicitation
---

# Purpose

To establish the specifications for data elements, retention periods, data privacy classifications, and transaction volumes.

# When To Use

- Database design preparation starts
- Data migration planning begins
- Compliance audits active

# Inputs

- Business process flows
- Regulatory compliance guidelines
- Legacy data reports

# Process

1. Identify all data objects (e.g., User, Order, Transaction) and fields needed.
2. Elicit data retention requirements (e.g., 'retain orders for 7 years').
3. Define data privacy and security classifications (PII, PCI, Public, Confidential).
4. Estimate data volume, growth rates, and peak ingestion rates.
5. Compile data requirements into a specification log.

# Output

- Data Requirements Specification Log
- Data Classification Table

# Quality Checklist

- [ ] PII and sensitive data are explicitly highlighted.
- [ ] Retention rules match legal and regulatory timelines.
- [ ] Volume estimates cover at least 3 years of growth.

# Human Review Required

Yes. Data Governance Officer or Lead Database Architect must review.
