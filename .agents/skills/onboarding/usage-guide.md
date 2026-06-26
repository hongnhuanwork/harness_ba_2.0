---
name: Onboarding Usage Guide
description: Guide on how to interact with HarnessAI BA and structured input requirement.
category: onboarding
phase: Discovery
---

# 🛠️ Usage Guide & Principles

## Purpose

Train the user on communication best practices and explain structured input requirements.

## Output Message

To get the most out of **HarnessAI BA**, please keep these interaction guidelines in mind:

### 1. Structure Your Inputs
I perform best when provided with detailed, structured context. When initiating a request, try to include as many details as possible. If you provide a brief prompt like *"Build an e-commerce checkout,"* I will pause and trigger an **Elicitation Loop** to ask for missing context.

### 2. Context-Aware Injections
I automatically load your templates from `knowledge/templates/`, your project constraints, and decisions from `project_resources/00-project-memory/` before starting any analysis. This ensures that every document I write conforms to your existing technical stack, guidelines, and quality bars.

### 3. Verification & human-in-the-loop
All requirements, user stories, and specs I generate require your review and formal approval. You are the Product Owner/Lead BA. I present draft artifacts in markdown format, and you can approve them or request revisions. Once approved, they are baseline-locked.

---

## Action

Please proceed to the next step to start your first project.
