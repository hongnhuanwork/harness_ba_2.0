---
name: Analyze Integrations
description: Map and analyze API request/response payloads, authentication, and error-handling paths.
category: analysis
phase: Analysis
---

# Purpose

To model integration touchpoints between systems, detailing endpoints, formats, and API contracts.

# When To Use

- Interface analysis requirements
- API design and contract negotiation
- Integrations debugging active

# Inputs

- Integration Requirements Specification
- API specs (OpenAPI/Swagger)
- Payload templates

# Process

1. Review OpenAPI/JSON contracts of integrated platforms.
2. Map source-to-target field mappings including formats.
3. Define request-response payload structures.
4. Design error-handling routines and retry policies.
5. Draft Integration Payload Specs.

# Output

- API Integration Specification Mapping
- Error and Exception Matrix

# Quality Checklist

- [ ] Payload mapping is documented field-by-field.
- [ ] Data types, validation rules, and mandatory fields are specified.
- [ ] Authentication mechanisms (OAuth, API Key) are detailed.

# Human Review Required

Yes. Lead Developer or Integrations Architect must approve contracts.
