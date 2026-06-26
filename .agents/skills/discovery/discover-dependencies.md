---
name: Discover Dependencies
description: Identify external and internal project dependencies, technical links, and third-party integrations.
category: discovery
phase: Discovery
---

# Purpose

To map critical paths, external APIs, team handoffs, and resource links that could create timeline bottlenecks.

# When To Use

- Sprint planning or roadmap drafting
- Architectural design kick-offs
- Integration strategy meetings

# Inputs

- Scope drafts
- Technical architecture blueprints
- Third-party system specs

# Process

1. List all systems, modules, data sources, and libraries required.
2. Identify external APIs, services, and hardware components.
3. Map internal team handoffs (e.g., Design to Dev, Dev to QA).
4. Map external project dependencies (e.g., compliance approvals, client delivery windows).
5. Draft a Dependency Map or sequence matrix.

# Output

- Dependency Register
- Dependency Relationship Map (Mermaid)

# Quality Checklist

- [ ] All third-party APIs and libraries are explicitly identified with version/provider.
- [ ] Critical path dependencies are flagged.
- [ ] Handoff owners are clearly assigned.

# Human Review Required

Yes. Lead Architect or Project Manager must validate the dependency mapping.
