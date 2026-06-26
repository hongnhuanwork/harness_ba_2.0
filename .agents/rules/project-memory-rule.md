# Project Memory Rule

## Purpose
This rule standardizes the capturing, classification, validation, auditing, and updating of project knowledge (Assumptions, Decisions, Risks, Lessons Learned - DARL) in the BA Harness. It ensures that the project memory remains accurate, traceably linked, and acts as the single source of truth for the AI agent and human team members.

## Principles
1. **Single Source of Truth**: The `memory.md` file is the master index. All supporting logs (`assumptions.md`, `decisions.md`, `risks.md`, `lessons-learned.md`) must sync with it.
2. **Mandatory Human Confirmation**: No project memory file may be written to or modified on disk without explicit user approval.
3. **Traceability**: Every entry in the project memory must link back to a user statement, requirement, or meeting record.
4. **Active Validation**: Assumptions and risks must have clear validation paths and expiry dates.

## Rules
1. **Elicitation & Detection Trigger**:
   - **Assumptions**: Capture when a requirement or design choice relies on unverified external interfaces, resource availability, or system states (e.g. "We assume API X will be ready by Q3").
   - **Decisions**: Capture when an architectural, technical, or scoping choice is accepted over other options (e.g. "We will use Postgres instead of MySQL").
   - **Risks**: Capture when an uncertainty could affect schedule, scope, compliance, or security (e.g. "Staff training delays could affect launch").
   - **Lessons Learned**: Capture during phase reviews, sprint retros, or when process improvements are identified (e.g. "Weekly reviews reduce alignment errors").
2. **Mandatory Review Gate**:
   - The agent must present the classified item, its proposed ID, and metadata to the user in the chat before modifying any file.
   - The user must explicitly approve the write action (e.g. by typing "Approve" or clicking Proceed).
3. **Repository Synchronisation**:
   - Whenever `assumptions.md`, `decisions.md`, `risks.md`, or `lessons-learned.md` is modified, the agent must immediately refresh `memory.md` to reflect the updated active lists.
4. **Conflict Resolution**:
   - If a new decision or assumption contradicts an existing active decision or assumption, the agent must halt execution, highlight the contradiction, and request human-in-the-loop resolution.

## Exceptions
- **Pre-Initialization Drafts**: Early-stage exploratory brainstorming drafts can be kept in `/scratch/` without formal ADR tracking.
- **Urgent PMO Hot-Edits**: Spelling and formatting corrections in registers do not require a full conflict review, but still require human confirmation before saving.

## Success Criteria
- **100% Sync**: All items in `memory.md` match their supporting log files.
- **Traceability**: Every log entry has a unique, sequentially numbered ID.
- **Audit Trails**: Validated assumptions and closed risks are archived correctly rather than deleted.
