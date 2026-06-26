# 🧠 INTELLIGENT INTAKE GATE CREATION SKILL

## 🎯 Objective

The agent is responsible for designing and implementing an **Intake Gate layer** for the HarnessAI BA system.

The Intake Gate is a mandatory pre-processing layer before any workflow execution. It ensures:

- Structured collection of user input
- Clarification of missing or ambiguous information (elicitation loop)
- Injection of contextual knowledge from `project_resources` and `knowledge`
- Normalization of all inputs into a structured payload
- Validation of input completeness before workflow execution

---

## 🧩 Expected Output

The agent MUST produce a complete Intake Gate design consisting of:

---

## 1. Input Schema (JSON)

Define a standardized input structure:

- user_input
- clarified_input
- resource_context
- inferred_context
- completeness_score
- status

The schema must represent a unified data model for all incoming requests.

---

## 2. Completeness Engine

The agent MUST design a mechanism to evaluate input completeness.

Requirements:

- Identify required fields based on BA domain context
- Assign a completeness score from 0.0 to 1.0
- Define a minimum threshold for execution:
  - `completeness_score >= 0.8`

If the threshold is not met, workflow execution must be blocked.

---

## 3. Clarification Engine (Elicitation Loop)

If required information is missing, the system MUST:

- Identify missing fields explicitly
- Generate clear and context-aware clarification questions
- Categorize missing data by type (business, scope, stakeholders, constraints, etc.)
- Avoid any assumptions or hallucinated data
- Pause execution until user responses are received
- Recalculate completeness score after each user response

---

## 4. Resource Injection Layer

The Intake Gate MUST include automatic loading of contextual resources from:

- `knowledge/templates/`
- `knowledge/library/`
- `project_resources/00-project-memory/`
- `.agents/rules/`

These resources must be treated as:

- Constraints
- Standards
- Reference knowledge

NOT as optional or secondary information.

---

## 5. Workflow Gate Rule

The system MUST enforce strict execution gating rules:

```text
IF status != "ready" OR completeness_score < 0.8
THEN:
    - Block workflow execution
    - Trigger clarification mode