---
name: Design API Contracts
description: Design and document OpenAPI/REST API endpoints, request/response structures, and parameters.
category: design
phase: Design
---

# Purpose

To establish clear, versioned contracts between systems and services, enabling parallel frontend/backend development.

# When To Use

- Solution Design initialization
- API development task setup
- Integrations mapping active

# Inputs

- Integration Requirements Specification
- Data Models
- Security standards

# Process

1. Define endpoints, HTTP verbs, and query parameters.
2. Structure request and response payloads in JSON format.
3. Define response status codes (e.g., 200, 201, 400, 401, 404, 500).
4. Specify header fields, authentication protocols, and rate limits.
5. Draft API Specifications in OpenAPI/Swagger style.

# Output

- OpenAPI / Swagger Contract Specification
- API Request/Response Examples Log

# Quality Checklist

- [ ] API paths follow RESTful naming conventions (nouns, plurals).
- [ ] All status codes are mapped with corresponding payload examples.
- [ ] Security/authentication scopes are defined.

# Human Review Required

Yes. Technical Lead and Solution Architect must sign off.
