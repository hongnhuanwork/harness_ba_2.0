---
name: Generate Data Dictionary
description: Generate and maintain a Data Dictionary mapping database tables, fields, data types, and validation rules.
category: documentation
phase: Design
---

# Purpose

To create a centralized data reference, ensuring schema consistency across development, analytics, and testing.

# When To Use

- Database design baseline starts
- Integrations mapping active
- Analytics pipeline design

# Inputs

- Logical Data Model specifications
- Database schema drafts
- Data requirementsSpecification

# Process

1. Retrieve Data Dictionary template from `knowledge/templates/`.
2. List tables, primary keys, and description of entities.
3. For each field, define name, data type, length, nullability, validation constraints, and business description.
4. Annotate fields containing sensitive data (PII, PCI) with privacy tags.
5. Format as a clean markdown table.

# Output

- System Data Dictionary

# Quality Checklist

- [ ] No field definitions are missing data types or validation rules.
- [ ] Primary and foreign keys are explicitly marked.
- [ ] Sensitive data is flagged with appropriate privacy labels.

# Human Review Required

Yes. Solution Architect or Lead Database Architect must review.
