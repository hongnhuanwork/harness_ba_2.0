---
name: Generate BPMN
description: Generate BPMN-compatible process workflows using visual markdown frameworks.
category: documentation
phase: Design
---

# Purpose

To create standard Business Process Model and Notation (BPMN) diagrams representing organizational workflows.

# When To Use

- Process modeling tasks are assigned
- Workflow automation designs
- To-Be process finalization

# Inputs

- To-Be Process descriptions
- User persona definitions
- Integration specifications

# Process

1. Map workflow actors to swimlanes.
2. Define start, intermediate, and end events.
3. Draw tasks, subprocesses, and gateway nodes.
4. Verify BPMN syntax compatibility (using Mermaid sequence/flow charts or XML outputs).
5. Format layout for maximum visual clarity.

# Output

- BPMN Flow Document / Mermaid Flowchart

# Quality Checklist

- [ ] Swimlanes represent valid stakeholders or systems.
- [ ] Gateways have clear conditional pathways.
- [ ] The process starts and terminates with valid events.

# Human Review Required

Yes. Process Owner must validate the mapped flow.
