# UI Portal Source Code Template

## Purpose
This template provides a standard, responsive, and completely icon-free UI foundation for creating HarnessAI BA Web Portals. It uses a clean black-and-white minimalist color palette and supports multi-portal routing out of the box.

---

## 📂 Proposed Folder Structure

Any portal created from this template should be structured as follows:

```text
my-portal/
├── index.html          # Base layout system and entrypoint
├── css/
│   └── style.css       # Styling system (Black/White/Gray palette, Responsive rules)
└── js/
    ├── app.js          # App initialization and event bindings
    ├── components.js   # Reusable component rendering (Button, Input, Card, Table, Modal)
    └── router.js       # Text-based multi-portal routing logic
```

---

## 📑 Core Layout Source Code (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HarnessAI BA Portal</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="layout-wrapper">
        <!-- Minimal Header -->
        <header class="main-header">
            <div class="header-logo">HarnessAI BA</div>
            <button class="mobile-nav-toggle" id="menuToggle">MENU</button>
        </header>

        <div class="layout-body">
            <!-- Sidebar with text-based navigation -->
            <aside class="sidebar" id="sidebar">
                <nav class="nav-menu">
                    <a href="#/portal/main" class="nav-link active">Main Dashboard</a>
                    <a href="#/portal/project" class="nav-link">Project Details</a>
                    <a href="#/portal/mobile" class="nav-link">Mobile Sandbox</a>
                    <a href="#/portal/docs" class="nav-link">Documentation</a>
                    <a href="#/portal/analysis" class="nav-link">Analysis & Reports</a>
                </nav>
            </aside>

            <!-- Main Content Area -->
            <main class="content-area" id="contentView">
                <!-- Dynamic content will load here -->
            </main>
        </div>

        <footer class="main-footer">
            <span>© 2026 HarnessAI BA. All Rights Reserved.</span>
        </footer>
    </div>

    <!-- Modals Container -->
    <div id="modalContainer"></div>

    <script src="js/components.js"></script>
    <script src="js/router.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

---

## 🎨 Styling System (`css/style.css`)

```css
/* ==========================================================================
   1. Design System & CSS Variables (Monochrome Palette)
   ========================================================================== */
:root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray-dark: #1a1a1a;
    --color-gray-medium: #808080;
    --color-gray-light: #f2f2f2;
    --color-border: #e0e0e0;
    
    /* UX Highlight Colors (Success / Warning / Error States) */
    --color-success: #2e7d32;
    --color-warning: #ef6c00;
    --color-error: #c62828;

    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --sidebar-width: 240px;
    --header-height: 60px;
}

/* ==========================================================================
   2. Base Elements & Layout
   ========================================================================== */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-family);
    background-color: var(--color-white);
    color: var(--color-black);
    line-height: 1.6;
}

.layout-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* ==========================================================================
   3. Header & Sidebar Structure
   ========================================================================== */
.main-header {
    height: var(--header-height);
    background-color: var(--color-black);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-logo {
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.05em;
}

.mobile-nav-toggle {
    display: none;
    background: transparent;
    color: var(--color-white);
    border: 1px solid var(--color-white);
    padding: 6px 12px;
    font-size: 0.8rem;
    cursor: pointer;
}

.layout-body {
    display: flex;
    flex: 1;
}

.sidebar {
    width: var(--sidebar-width);
    border-right: 1px solid var(--color-border);
    background-color: var(--color-white);
    padding: 24px 0;
}

.nav-menu {
    display: flex;
    flex-direction: column;
}

.nav-link {
    color: var(--color-black);
    text-decoration: none;
    padding: 12px 24px;
    font-size: 0.95rem;
    border-left: 3px solid transparent;
}

.nav-link:hover {
    background-color: var(--color-gray-light);
}

.nav-link.active {
    font-weight: 700;
    border-left-color: var(--color-black);
    background-color: var(--color-gray-light);
}

.content-area {
    flex: 1;
    padding: 32px;
    max-width: 1200px;
}

.main-footer {
    padding: 16px 24px;
    border-top: 1px solid var(--color-border);
    font-size: 0.8rem;
    color: var(--color-gray-medium);
    text-align: center;
}

/* ==========================================================================
   4. Minimal Component Library Styles
   ========================================================================== */
/* Typography */
h1 { font-size: 2rem; font-weight: 700; margin-bottom: 24px; }
h2 { font-size: 1.5rem; font-weight: 700; margin: 24px 0 16px; }

/* Buttons */
.btn {
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid var(--color-black);
    background-color: var(--color-white);
    color: var(--color-black);
    cursor: pointer;
    font-weight: 500;
    font-size: 0.9rem;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.2s ease;
}
.btn:hover { background-color: var(--color-black); color: var(--color-white); }
.btn-primary { background-color: var(--color-black); color: var(--color-white); }
.btn-primary:hover { background-color: var(--color-white); color: var(--color-black); }

/* Inputs */
.input-field {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid var(--color-black);
    background-color: var(--color-white);
    color: var(--color-black);
    font-size: 0.95rem;
    margin-bottom: 16px;
}
.input-field:focus {
    outline: 2px solid var(--color-black);
}

/* Cards */
.card {
    border: 1px solid var(--color-black);
    padding: 24px;
    margin-bottom: 24px;
    background-color: var(--color-white);
}
.card-title { font-weight: 700; font-size: 1.15rem; margin-bottom: 12px; }

/* Tables */
.table-view {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
}
.table-view th, .table-view td {
    padding: 12px 16px;
    border: 1px solid var(--color-border);
    text-align: left;
}
.table-view th {
    background-color: var(--color-gray-light);
    font-weight: 700;
}

/* Modals */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-dialog {
    background: var(--color-white);
    border: 2px solid var(--color-black);
    width: 90%;
    max-width: 500px;
    padding: 24px;
}

/* UI Alert Badges */
.badge {
    display: inline-block;
    padding: 4px 8px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid var(--color-black);
}
.badge-success { color: var(--color-success); border-color: var(--color-success); }
.badge-warning { color: var(--color-warning); border-color: var(--color-warning); }
.badge-error { color: var(--color-error); border-color: var(--color-error); }

/* Grid Layout Utilities */
.grid-cols-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

/* ==========================================================================
   5. Mobile Responsive System (Mobile-First Override)
   ========================================================================== */
@media (max-width: 768px) {
    .mobile-nav-toggle {
        display: block;
    }
    .layout-body {
        flex-direction: column;
    }
    .sidebar {
        display: none;
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--color-border);
        padding: 12px 0;
    }
    .sidebar.open {
        display: block;
    }
    .content-area {
        padding: 20px;
    }
    .grid-cols-2 {
        grid-template-columns: 1fr;
    }
}
```

---

## 🧱 Component System Library (`js/components.js`)

```javascript
/**
 * HarnessAI BA Component Library (Vanilla Javascript)
 * Generates structured, compliant UI components without frameworks.
 */
const UI = {
    button: (text, onClickHandler, isPrimary = false) => {
        const btn = document.createElement('button');
        btn.className = `btn ${isPrimary ? 'btn-primary' : ''}`;
        btn.textContent = text;
        btn.addEventListener('click', onClickHandler);
        return btn;
    },

    input: (placeholder, id, type = 'text', value = '') => {
        const input = document.createElement('input');
        input.type = type;
        input.className = 'input-field';
        input.placeholder = placeholder;
        input.id = id;
        input.value = value;
        return input;
    },

    card: (title, contentNodeOrText) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;
        card.appendChild(cardTitle);

        const cardBody = document.createElement('div');
        if (typeof contentNodeOrText === 'string') {
            cardBody.textContent = contentNodeOrText;
        } else {
            cardBody.appendChild(contentNodeOrText);
        }
        card.appendChild(cardBody);
        return card;
    },

    table: (headers, rows) => {
        const table = document.createElement('table');
        table.className = 'table-view';

        const thead = document.createElement('thead');
        const trHeader = document.createElement('tr');
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            trHeader.appendChild(th);
        });
        thead.appendChild(trHeader);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        rows.forEach(rowData => {
            const trRow = document.createElement('tr');
            rowData.forEach(cellData => {
                const td = document.createElement('td');
                if (cellData instanceof HTMLElement) {
                    td.appendChild(cellData);
                } else {
                    td.textContent = cellData;
                }
                trRow.appendChild(td);
            });
            tbody.appendChild(trRow);
        });
        table.appendChild(tbody);
        return table;
    },

    badge: (text, state = 'success') => {
        const span = document.createElement('span');
        span.className = `badge badge-${state}`;
        span.textContent = text;
        return span;
    },

    modal: (title, contentNode, onClose) => {
        const container = document.getElementById('modalContainer');
        container.innerHTML = '';

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'modal-dialog';

        const modalTitle = document.createElement('h3');
        modalTitle.className = 'card-title';
        modalTitle.textContent = title;
        dialog.appendChild(modalTitle);

        const body = document.createElement('div');
        body.style.marginBottom = '20px';
        body.appendChild(contentNode);
        dialog.appendChild(body);

        const closeBtn = UI.button('Close', () => {
            overlay.remove();
            if (onClose) onClose();
        }, true);
        dialog.appendChild(closeBtn);

        overlay.appendChild(dialog);
        container.appendChild(overlay);
    }
};
```

---

## 🔄 Multi-Portal Routing (`js/router.js`)

```javascript
/**
 * Simple hash-based client-side router for multi-portal structure.
 */
class PortalRouter {
    constructor(routes, contentContainerId) {
        this.routes = routes;
        this.container = document.getElementById(contentContainerId);
        window.addEventListener('hashchange', () => this.route());
        window.addEventListener('load', () => this.route());
    }

    route() {
        let hash = window.location.hash || '#/portal/main';
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });

        const handler = this.routes[hash];
        if (handler) {
            this.container.innerHTML = '';
            this.container.appendChild(handler());
        } else {
            this.container.innerHTML = '<h1>404</h1><p>Portal page not found.</p>';
        }
    }
}
```

---

## ⚡ App Integration & Initialization (`js/app.js`)

```javascript
// Define custom layouts and payloads for the multiple portals
const routes = {
    '#/portal/main': () => {
        const container = document.createElement('div');
        
        const h1 = document.createElement('h1');
        h1.textContent = 'Main Dashboard Portal';
        container.appendChild(h1);

        const grid = document.createElement('div');
        grid.className = 'grid-cols-2';

        const c1 = UI.card('System Status', 'All background AI analysis agents are online and running.');
        const c2 = UI.card('Quick Stats', 'Active Projects: 4 | Ingested Artifacts: 23 | Approved Baselines: 8');
        
        grid.appendChild(c1);
        grid.appendChild(c2);
        container.appendChild(grid);

        return container;
    },

    '#/portal/project': () => {
        const container = document.createElement('div');
        
        const h1 = document.createElement('h1');
        h1.textContent = 'Project Management Portal';
        container.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = 'Select and view active project resources and business analysis scope logs.';
        p.style.marginBottom = '20px';
        container.appendChild(p);

        const headers = ['Project Name', 'Stage', 'Completeness', 'Status'];
        const rows = [
            ['Warehouse Management ERP', 'Discovery', '85%', UI.badge('READY', 'success')],
            ['E-Commerce Checkout Revamp', 'Elicitation', '50%', UI.badge('INCOMPLETE', 'warning')],
            ['HR Onboarding Automation', 'Design', '95%', UI.badge('READY', 'success')]
        ];

        const table = UI.table(headers, rows);
        container.appendChild(table);

        return container;
    },

    '#/portal/mobile': () => {
        const container = document.createElement('div');
        
        const h1 = document.createElement('h1');
        h1.textContent = 'Mobile Sandbox Preview';
        container.appendChild(h1);

        const desc = document.createElement('p');
        desc.textContent = 'Testing responsive adapters and layout controls.';
        desc.style.marginBottom = '20px';
        container.appendChild(desc);

        const btnOpenModal = UI.button('Trigger Mobile Dialog', () => {
            const info = document.createElement('p');
            info.textContent = 'This is a responsive, framework-less modal view designed for mobile screen limits.';
            UI.modal('Notification', info);
        }, true);
        
        container.appendChild(btnOpenModal);
        return container;
    },

    '#/portal/docs': () => {
        const container = document.createElement('div');
        
        const h1 = document.createElement('h1');
        h1.textContent = 'Documentation Portal';
        container.appendChild(h1);

        const c1 = UI.card('BABOK Guide v3 Standards', 'Refer to knowledge/library/ for structural business rules and mapping criteria.');
        container.appendChild(c1);

        return container;
    },

    '#/portal/analysis': () => {
        const container = document.createElement('div');
        
        const h1 = document.createElement('h1');
        h1.textContent = 'Analysis & Reports Portal';
        container.appendChild(h1);

        const c1 = UI.card('Report Output Directory', 'Generated Phase-based deliverables will be compiled here.');
        container.appendChild(c1);

        return container;
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Router
    new PortalRouter(routes, 'contentView');

    // 2. Mobile Responsive Nav Toggle logic
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            menuToggle.textContent = sidebar.classList.contains('open') ? 'CLOSE' : 'MENU';
        });
    }
});
```

---

## 🎯 Verification & Usage Checklist

- [ ] **Zero Icons**: No SVG pathing, external font files, or image link tags used in components.
- [ ] **No External UI frameworks**: Only native CSS/JS.
- [ ] **Monochrome Styling**: Adheres to `#000000`, `#ffffff`, and gray boundaries.
- [ ] **Responsive check**: Supports grid wrap and toggling drawer actions on viewport width <= 768px.
