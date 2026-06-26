---
name: Onboarding System Overview
description: Explain system components (skills, workflows, knowledge base, phases).
category: onboarding
phase: Discovery
---

# 📊 System Overview

## Purpose

Introduce the user to the HarnessAI BA framework components and the project lifecycle phases.

## Output Message

Here is how the **HarnessAI BA** environment is structured to manage your project:

### 🧩 Core Components

1. **Workflows (`.agents/workflows/`)**: Orchestrated, step-by-step processes designed for specific phases of the lifecycle. They coordinate multiple skills to produce formal deliverables.
2. **Skills (`.agents/skills/`)**: Modular capability blocks used to perform specific analysis tasks (e.g., extracting user stories, analyzing data dictionary, reviewing gaps).
3. **Knowledge Base (`knowledge/`)**: Reference libraries and pre-defined industry templates (like BABOK Guide v3, BRD templates) that act as constraints and quality rules for my outputs.
4. **Project Resources (`project_resources/`)**: The shared repository containing your project's baseline context, decisions log, PMO files, and memory. This is my "Single Source of Truth."
5. **Output (`output/`)**: The formal, phase-by-phase deliverables produced by workflows. These files are scanned and rendered directly on the project's **Portal UI Dashboard**.

---

### 🔄 Project Lifecycle Phases (0-6)

Our analysis process follows 7 distinct phases:
* **Phase 0: Project Initiation** – Establish initial scope, objectives, and stakeholder registry.
* **Phase 1: Discovery** – Research the business domain, state assumptions, identify pain points.
* **Phase 2: Elicitation** – Conduct interviews, map processes, gather user stories.
* **Phase 3: Analysis** – Groom the backlog, map gaps (As-Is vs To-Be), model business rules.
* **Phase 4: Design** – Outline system architecture, model data flows, define APIs.
* **Phase 5: Validation** – Review quality metrics, trace requirements, run UAT dry-runs.
* **Phase 6: Delivery** – Prepare release packages, write guides, finalize handover.

---

## Action

Please proceed to the next step to learn how we interact.
