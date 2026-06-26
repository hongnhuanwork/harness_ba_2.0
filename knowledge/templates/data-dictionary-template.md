# Data Dictionary Template

## Purpose
Maintains database field specifications, formats, types, and privacy rules.

## Traceability
Traces back to: SRS, Data Flow diagrams. Traces forward to: DB Schemas, API payloads.

## Metadata
- Project ID: [ID]
- Database Name: [Name]
- Last Updated: [YYYY-MM-DD]

## Required Sections
## 1. Table: [Table Name]
Description of the table's purpose and primary key.

| Field Name | Data Type | Length | Nullable | Key (PK/FK) | Validation Rules | Data Privacy (PII/PCI/Conf) | Description |
|---|---|---|---|---|---|---|---|
| [FieldName] | [Type] | [Len] | [Y/N] | [PK/FK] | [Constraints] | [PII/PCI/Public] | [Description] |

## Optional Sections
## 2. Data Lifecycle & Archiving Rules
Detail how long tables are retained and backup schedules.

## Completion Checklist
- [ ] Primary and foreign keys are explicitly mapped.
- [ ] PII, CCPA, and GDPR sensitive columns are flagged.
- [ ] Data types align with technical database specifications.
