---
name: Analyze Dependencies
description: Analyze and map dependencies across requirements, sprints, teams, and releases.
category: analysis
phase: Analysis
---

# Purpose

To identify, document, and schedule tasks around dependencies to prevent resource contention or blocking states.

# When To Use

- Sprint mapping and dependency reviews
- Release planning
- Cross-team alignment planning

# Inputs

- Prioritized Requirements Backlog
- Dependency Register
- Team resource schedules

# Process

1. Evaluate relationship between requirements (e.g., 'Req A must be built before Req B').
2. Identify sprint or release sequencing requirements.
3. Flag critical-path dependencies that impact delivery dates.
4. Coordinate with external teams/providers on resource availability.
5. Build a sprint dependency matrix.

# Output

- Sprint/Release Dependency Matrix
- Critical Path Mapping Diagram (Mermaid)

# Quality Checklist

- [ ] No circular dependencies exist.
- [ ] Dependencies are validated against external provider release dates.
- [ ] Resource bottlenecks are highlighted.

# Human Review Required

Yes. Project Manager or Release Manager must approve.
