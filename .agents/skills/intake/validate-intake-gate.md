---
name: Validate Intake Gate
description: Parse user inputs, load context, assess completeness, and handle elicitation loop or routing.
category: intake
phase: Discovery
---

# Validate Intake Gate Skill

## Purpose

Implement the validation rules defined in `intake-gate-rule.md` to structure incoming user requests, calculate input completeness, load references, and block/allow workflows.

---

## When To Use

- A user requests to start a new project.
- A user triggers any analysis, design, or elicitation workflow.

---

## Inputs

- `user_input`: Raw description of project idea or feature.
- Reference resources:
  - `knowledge/templates/`
  - `project_resources/00-project-memory/`

---

## Process

1. **Parse Raw Input**: Extract and identify key parameters:
   - Domain (industry vertical)
   - Scope (in-scope vs out-of-scope)
   - Stakeholders (actors, sponsors)
   - Objectives (business value, goals)
2. **Inject Resource Context**:
   - Identify which templates are required (e.g., if it's a software project, load `srs-template.md` and `use-case-template.md`).
   - Read existing project memory files (`assumptions.md`, `decisions.md`).
   - Reference the active rules in `.agents/rules/`.
3. **Calculate Completeness Score**:
   - Assign points (0.0 to 0.25) to each of the four core dimensions.
   - Aggregate points to compute the `completeness_score`.
4. **Determine State & Gate**:
   - If `completeness_score >= 0.8`: Set status to `ready` and prepare payload.
   - If `completeness_score < 0.8`: Set status to `incomplete` and extract missing fields.
5. **Formulate Elicitation Questions**:
   - For each missing field, draft one clear, context-aware question.
6. **Return Output Contract**:
   - Return structured JSON response conforming to `intake-schema.json`.

---

## Output

A JSON payload conforming to the Intake Gate Contract:
- Ready or Incomplete state payload.

---

## Quality Checklist

- [ ] Every injected resource is documented under `resource_context`.
- [ ] No assumptions are made on missing fields; they are explicitly flagged in `missing_fields`.
- [ ] Completeness score is calculated strictly according to the 4-dimension rules.
- [ ] Questions generated are clear and directly address the missing information.
