# Documentation Rule

## Purpose
This rule governs the creation, formatting, structure, and lifecycle of all business analysis documentation and artifacts. It ensures all generated outputs meet enterprise quality standards, maintain professional aesthetics, adhere to standardized templates, and remain readable and consistent across the entire project repository.

## Principles
1. **Consistency**: Adhere to standardized structures, naming conventions, and terminology across all project artifacts.
2. **Clarity & Readability**: Maintain a clear document hierarchy, use concise language, and embed visual diagrams (e.g., Mermaid) to represent complex relationships.
3. **Template Compliance**: Leverage pre-defined templates in `knowledge/templates/` to instantiate new documents.
4. **Modularity**: Design documentation so that sections can be read, updated, and referenced independently.

## Rules
1. **Markdown Formatting**:
   - Write all documentation in standard GitHub Flavored Markdown (GFM).
   - Maintain a strict heading hierarchy (e.g., do not jump from `#` directly to `###`).
   - Use list structures (bulleted or numbered) and tables to present structured data.
2. **Document Metadata Header**:
   - Every formal document must begin with a standardized markdown or YAML metadata block containing:
     - **Title**: Document Title
     - **Author**: AI BA Harness Agent / User
     - **Date**: YYYY-MM-DD
     - **Version**: X.Y.Z
     - **Status**: Draft / Under Review / Approved
     - **Description**: Brief summary of the document's purpose.
3. **Glossary & Terminology**:
   - All domain terms and system acronyms must align with definition files in `knowledge/glossary/`.
   - Brand new terms introduced during analysis must be defined inline and queued for addition to the glossary.
4. **Visual Aids**:
   - Use Mermaid syntax to embed flowcharts, sequence diagrams, state diagrams, and entity-relationship diagrams (ERDs) where text alone is complex to digest.
   - Do not use raw image placeholders; generate diagrams or actual mockup representations.
5. **Cross-Referencing**:
   - Link related documents using relative file URLs (`file:///...` or relative paths depending on platform).
   - Ensure target link paths use forward slashes (`/`) even on Windows environments.

## Exceptions
- **Scratch Files**: Unstructured scratchpads, notes, or raw console logs created under the `/scratch/` directory do not need to follow strict formatting or metadata rules.
- **Direct Chat Answers**: Responses provided directly within the chat interface that do not generate repository files are exempt from metadata headers.

## Success Criteria
- **Formatting Validation**: The markdown file compiles correctly without syntax or rendering errors.
- **Metadata Completeness**: The header contains all 6 required fields populated with valid data.
- **Visual Clarity**: Highly complex processes are backed by at least one visual flow diagram (e.g. Mermaid flowchart).
- **Broken Link Check**: All embedded file links resolve to active and existing files within the workspace.
