# Intake Gate Rule

## Purpose

This rule establishes the mandatory pre-processing and validation standards for all inputs entered into the HarnessAI BA system. The Intake Gate acts as a quality checkpoint that blocks execution until project context is injected and input completeness is verified.

---

## Hard Constraints

All operations within HarnessAI BA MUST adhere to the following constraints:
1. **No Direct Execution**: Never execute a downstream analysis or modeling workflow directly from raw user input without passing the Intake Gate.
2. **Clarification Over Inference**: Always prioritize asking the user clarifying questions before inferring or guessing missing business-critical details.
3. **Eager Context Injection**: Always load and inject all reference guidelines, templates, rules, and memory context *before* starting any analysis task.
4. **Mandatory Gating**: Block any workflow if `completeness_score` is less than `0.8` or if status is not `ready`.
5. **No Skipping Elicitation**: Do not bypass the elicitation loop if core fields (Domain, Stakeholders, Scope, Objectives) are missing.

---

## Architectural Pipeline

```
USER INPUT
   ↓
INPUT PARSING (Parse raw text into structured parameters)
   ↓
RESOURCE CONTEXT LOADING (Load templates, standards, project memory, rules)
   ↓
MISSING FIELD DETECTION (Identify missing domain, stakeholders, scope, objectives)
   ↓
CLARIFICATION ENGINE (Trigger elicitation loop if completeness < 0.8)
   ↓
COMPLETENESS EVALUATION (Compute completeness score)
   ↓
WORKFLOW ROUTING (Block or route to next workflow)
```

---

## Completeness Evaluation Logic

The completeness score represents a mathematical rating between `0.0` and `1.0`. It is calculated as the sum of four criteria, each worth up to `0.25`:

| Dimension | Description | Points |
| :--- | :--- | :--- |
| **Context & Domain (25%)** | The industry domain, business problem, and basic background context are clear. | `0.0` - `0.25` |
| **Scope & Boundaries (25%)** | High-level in-scope features and out-of-scope boundaries are specified. | `0.0` - `0.25` |
| **Stakeholders & Actors (25%)**| Primary sponsors, user groups, and key actors are identified. | `0.0` - `0.25` |
| **Objectives & Target KPIs (25%)** | The business objectives, target metrics, or expected business value are stated. | `0.0` - `0.25` |

---

## Resource Injection Mechanism

Before starting any analysis, the Agent must inject resources into `resource_context`. These files are treated as hard reference rules:
* **Templates**: Inject files from [knowledge/templates/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/templates) (e.g. `brd-template.md`, `user-story-template.md`).
* **Standards**: Inject [BABOK Guide](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/knowledge/library/babok_raw.md).
* **Project Memory**: Inject assumptions, decisions log, and risks from [00-project-memory/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/project_resources/00-project-memory).
* **Operational Rules**: Inject files from [.agents/rules/](file:///d:/03_Projects/Personal/260624_HarnessAI_BA/260625_harnessBA_ver2.0/.agents/rules).

---

## Clarification Engine (Elicitation Loop)

If the completeness score is `< 0.8`:
1. **Identify Gaps**: Flag the missing dimensions explicitly.
2. **Generate Questions**: Format clear, professional BA questions (max 4) requesting the missing information.
3. **No Hallucinations**: Do not fill in missing stakeholders or scope boundaries with default values. Ask the user.
4. **Pause & Recalculate**: Await user reply, update `clarified_input`, and re-evaluate the completeness score.

---

## Output Contract

### Incomplete Input State
When input validation fails:
```json
{
  "status": "incomplete",
  "missing_fields": ["stakeholders", "scope"],
  "questions": [
    "Ai là nhóm người dùng chính cho tính năng này?",
    "Các chức năng nào nằm ngoài phạm vi triển khai?"
  ],
  "next_action": "clarification_required"
}
```

### Ready Input State
When validation succeeds (completeness >= 0.8):
```json
{
  "status": "ready",
  "payload": {
    "domain": "FinTech",
    "scope": {
      "in_scope": ["Online payment", "Transaction history"],
      "out_scope": ["Physical POS integration"]
    },
    "stakeholders": ["End-user", "Merchant", "Admin"],
    "objectives": ["Reduce checkout time by 30%"]
  },
  "next_action": "proceed_to_workflow"
}
```
