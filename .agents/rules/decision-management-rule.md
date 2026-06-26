# Decision Management Rule

## Purpose
This rule standardizes the capture, documentation, tracking, and validation of decisions, assumptions, risks, and lessons learned (DARL) throughout the project lifecycle. It ensures that the rationale behind product and design requirements is fully archived, auditable, and traceable, preventing the loss of institutional memory.

## Principles
1. **Traceability**: Link every decision, risk, and assumption back to the specific business objective or requirement it affects.
2. **Transparency of Rationale**: Document not just *what* was decided, but *why*, including the options considered and rejected.
3. **Proactive Mitigation**: Identify risks and validate assumptions early to avoid project delays or design re-work.
4. **Continuous Learning**: Document lessons learned at the end of each project phase to drive continuous improvement in agent and team workflows.

## Rules
1. **Decision Tracking (ADRs)**:
   - Save all architectural, design, or business-logic decisions under `memory/decisions/`.
   - Format decisions using the Architecture Decision Record (ADR) template:
     - **ID & Title**: E.g., `DEC-001: Payment Gateway Provider`
     - **Status**: Proposed / Accepted / Superseded / Rejected
     - **Context**: The problem statement, background, and constraints.
     - **Decision**: The chosen path and the rationale behind it.
     - **Consequences**: What becomes easier, what becomes harder, and downstream impacts.
2. **Risk Management**:
   - Save identified risks under `memory/risks/`.
   - Each risk file must include: Description, Probability (Low/Medium/High), Impact (Low/Medium/High), Mitigation Strategy, and Owner.
3. **Assumptions Tracking**:
   - Save all business or technical assumptions under `memory/assumptions/`.
   - Every assumption must include a Validation Owner, target validation date, and current status (Unverified / Verified / Invalidated).
4. **Lessons Learned**:
   - Upon the completion of any phase, compile a summary of lessons learned under `memory/lessons-learned/`.
   - Focus on process improvements, documentation bottlenecks, and tool integration issues.

## Exceptions
- **Micro-decisions**: Minor code styling, local script structure, or formatting choices that do not impact business logic or architectural patterns do not require an ADR.
- **Informal Risks**: Early-stage brainstorming where risks are mentioned casually do not need full logging until the requirements phase.

## Success Criteria
- **Zero Orphan Decisions**: Every requirement with architectural impact points to a corresponding ADR in `memory/decisions/`.
- **Fully Mitigated Risks**: 100% of risks categorized as "High Impact" have a documented mitigation strategy.
- **Verified Assumptions**: All assumptions linked to active development requirements are marked as "Verified" before delivery.
- **History Auditability**: Anyone looking at a requirement in `output/` can trace it back to the decisions and assumptions in `memory/` that led to its creation.
