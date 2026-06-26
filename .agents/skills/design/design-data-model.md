---
name: Design Data Model
description: Design logical data models, Entity-Relationship Diagrams (ERDs), and database schema maps.
category: design
phase: Design
---

# Purpose

To define the data structures, tables, relationships, and constraints required to support application logic.

# When To Use

- Solution Design initialization
- Database migrations planning
- Data flow analysis completed

# Inputs

- Data Requirements Specification Log
- Data flow diagrams
- Technical constraints

# Process

1. Identify all logical entities, attributes, and keys (Primary Keys, Foreign Keys).
2. Define cardinality and ordinality relationships between entities.
3. Normalize database schema to at least 3NF (Third Normal Form).
4. Draft Entity-Relationship Diagrams.
5. Create database schema maps and field definition tables.

# Output

- Logical Data Model / Schema Spec
- Entity-Relationship Diagram (Mermaid)

# Quality Checklist

- [ ] All primary and foreign keys are explicitly mapped.
- [ ] Data types, nullability, and index recommendations are specified.
- [ ] No orphan entities exist.

# Human Review Required

Yes. Lead Database Architect or Solution Architect must approve.
