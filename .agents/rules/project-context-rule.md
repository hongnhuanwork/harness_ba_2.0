# Project Context Rule

## Purpose
This rule establishes the mandatory procedures for establishing, ingesting, and maintaining project-specific context. It ensures that the AI Business Analyst Agent never operates in a vacuum, avoids making invalid assumptions, utilizes existing repository knowledge, and maintains strict alignment with current project states and objectives.

## Principles
1. **Context-First**: Always research, read, and verify existing context files before generating any new artifacts or code.
2. **Zero-Assumption**: Do not fabricate project parameters, stakeholder goals, or system constraints. When information is missing, it must be flagged as a gap or query.
3. **Repository Reuse**: Prioritize updating, extending, and aligning with existing documentation rather than generating duplicate or isolated content.
4. **Historical Alignment**: Ensure all new definitions, requirements, and designs conform to previously documented decisions, risks, and assumptions.

## Rules
1. **Context Ingestion Workflow**:
   - Before executing any analytical task, the agent must inspect the contents of `project_resources/` (e.g., PMO documents, design sheets, development logs) to build the baseline context.
   - Scan `memory/decisions/` to identify active architectural or business decisions that limit the solution space.
   - Consult `knowledge/glossary/` to ensure term consistency.
2. **Active Phase Alignment**:
   - Determine the active project phase (from Discovery to Delivery) based on the repository state or explicit user instruction.
   - Tailor artifact outputs to only match the deliverables expected in the active phase (e.g., do not generate detailed test cases during Discovery).
3. **Traceability of Context**:
   - Every requirement or design artifact must trace back to a validated contextual document or business objective stored in `project_resources/`.
4. **Context Gaps Handling**:
   - If a user request references project components, systems, or goals that are not documented in the repository, the agent must document this as an "Information Gap" and seek clarification.
5. **Project Initialization Guard**:
   - **CRITICAL**: No downstream lifecycle or document generation workflows (e.g., discovery, elicitation, analysis) are permitted to execute if the project has not been initialized.
   - Project initialization is deemed complete only when the Project Profile (`project_resources/01-pmo/project-profile.md`) exists, is populated, and its status is set to "Approved" or "Baselined".
   - If this file is missing or in "Draft" status, the agent must halt execution of the requested workflow and immediately redirect the user to run the `initialize-project` workflow.

## Exceptions
- **Greenfield Setup**: During initial project boot-up, when the repository contains no context files, the agent is authorized to generate placeholder structural documents and draft templates to bootstrap the context environment.
- **Hypothetical Sandbox Tasks**: When explicitly instructed by the user to perform sandbox/mock analysis (e.g., "Draft a mock requirement for testing purposes"), the agent may bypass context checks.

## Success Criteria
- **Traceability Matrix**: All artifacts generated can be mapped to at least one file in `project_resources/` or `memory/`.
- **Zero Hallucinations**: No parameters, stakeholder names, or system names are used that cannot be found in the repository context or the user prompt.
- **No Artifact Duplication**: A search of the workspace yields no overlapping or conflicting files covering the same topic.
