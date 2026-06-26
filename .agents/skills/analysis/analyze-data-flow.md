---
name: Analyze Data Flow
description: Map and analyze data transformations, ingestion points, and storage flows across systems.
category: analysis
phase: Analysis
---

# Purpose

To design logical data flows (DFDs) ensuring data integrity, security, and performance across system channels.

# When To Use

- Data ingestion pipeline setup
- System integration designs
- Data warehouse mapping starts

# Inputs

- Data Requirements Specification Log
- Interface specifications
- As-Is system schemas

# Process

1. Identify data sources, sinks, transformations, and stores.
2. Map flow of data using DFD Level 0 and Level 1 syntax.
3. Document schema mappings and conversion logic.
4. Analyze data privacy protection points during transit and storage.
5. Generate Data Flow Diagrams.

# Output

- Data Flow Diagrams (Mermaid)
- Data Transformation Mapping Document

# Quality Checklist

- [ ] Data sources and destinations match system inventories.
- [ ] Data encryption levels (transit/at-rest) are specified.
- [ ] Data schema types are mapped for all steps.

# Human Review Required

Yes. Solution Architect or Data Architect must validate.
