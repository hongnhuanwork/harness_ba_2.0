---
name: Build Design System
description: Build or update global design tokens, CSS variables, and layout guidelines.
category: development
phase: Design
---

# Purpose

To code the core CSS files, typography classes, colors, and layout patterns used across systems.

# When To Use

- Project design initialization
- Branding updates required
- CSS refactoring tasks

# Inputs

- Design guidelines / brand guidelines
- UI design elements specification
- Target CSS templates

# Process

1. Define global CSS variables (`:root`) for colors (primary, secondary, gradients), spacing, and font families.
2. Create utility classes for layout (flex, grid, margins, padding).
3. Define global rules for typography headings (`h1` to `h6`), links, and body text.
4. Create reusable style classes for core elements (buttons, inputs, cards).
5. Verify browser display.

# Output

- Global Design System CSS (`index.css` / `variables.css`)

# Quality Checklist

- [ ] Design matches branding guidelines exactly.
- [ ] Variable naming is consistent and clean.
- [ ] Fonts render correctly.

# Human Review Required

Yes. UX/UI Designer and Frontend Tech Lead must approve variables.
