const MarkdownLoader = {
  async loadAndRender(filePath) {
    const mainViewport = document.getElementById('main-content');
    const metadataPanel = document.getElementById('meta-panel-content');
    const metaSidebar = document.getElementById('meta-sidebar');
    
    mainViewport.innerHTML = '<div class="loading">Loading document...</div>';
    metadataPanel.innerHTML = '<div class="loading">Loading metadata...</div>';
    if (metaSidebar) metaSidebar.classList.remove('active');

    try {
      // Fetch relative to workspace root (parent of portal directory)
      const response = await fetch('../' + filePath);
      if (!response.ok) {
        throw new Error(`Failed to load file. Status: ${response.status}`);
      }
      
      const rawText = await response.text();
      const { frontmatter, body } = this.parseFrontmatterAndMetadata(rawText);
      
      // Render GFM Markdown
      if (typeof marked === 'undefined') {
        throw new Error('Marked.js library is not loaded');
      }
      
      const htmlContent = marked.parse(body);
      mainViewport.innerHTML = `
        <div class="markdown-body">
          <div class="doc-path-header">${filePath}</div>
          ${htmlContent}
        </div>
      `;
      
      // Render Metadata Panel
      this.renderMetadata(frontmatter, filePath, metadataPanel, metaSidebar);
      
      // Render Mermaid Diagrams
      this.renderMermaidDiagrams();
      
    } catch (error) {
      console.error(error);
      mainViewport.innerHTML = `
        <div class="error-container">
          <h2>Error Loading Document</h2>
          <p>${error.message}</p>
          <p>Verify that the file path <code>${filePath}</code> is correct and exists on disk.</p>
        </div>
      `;
      metadataPanel.innerHTML = '<div class="error-text">No metadata available</div>';
    }
  },
  
  parseFrontmatterAndMetadata(text) {
    const metadata = {};
    let body = text;
    
    // 1. Match YAML frontmatter (starts with --- and ends with ---)
    const yamlMatch = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
    if (yamlMatch) {
      const yamlText = yamlMatch[1];
      body = text.substring(yamlMatch[0].length);
      
      yamlText.split('\n').forEach(line => {
        if (line.includes(':')) {
          const [k, ...vParts] = line.split(':');
          metadata[k.strip ? k.strip() : k.trim()] = vParts.join(':').trim();
        }
      });
    }
    
    // 2. Scan content for additional bullet list metadata (e.g. - Version: 1.0)
    const bulletMatches = body.match(/^-\s*([A-Za-z0-9\s_]+)\s*:\s*(.*?)\s*$/gm);
    if (bulletMatches) {
      bulletMatches.forEach(match => {
        const parts = match.substring(1).split(':');
        if (parts.length >= 2) {
          const k = parts[0].trim();
          const v = parts.slice(1).join(':').trim();
          metadata[k] = v;
        }
      });
    }
    
    return { frontmatter: metadata, body };
  },
  
  renderMetadata(meta, path, panelElement, sidebarElement) {
    const keys = Object.keys(meta);
    if (keys.length === 0) {
      panelElement.innerHTML = `
        <div class="meta-item">
          <span class="meta-label">Path</span>
          <span class="meta-value">${path}</span>
        </div>
        <div class="no-meta">No additional metadata found in file headers.</div>
      `;
      return;
    }
    
    let html = `
      <div class="meta-item">
        <span class="meta-label">System File Path</span>
        <span class="meta-value" style="word-break: break-all;">${path}</span>
      </div>
    `;
    
    keys.forEach(key => {
      // Skip redundant or internal keys if needed
      html += `
        <div class="meta-item">
          <span class="meta-label">${key}</span>
          <span class="meta-value">${meta[key]}</span>
        </div>
      `;
    });
    
    panelElement.innerHTML = html;
    if (sidebarElement) sidebarElement.classList.add('active');
  },
  
  renderMermaidDiagrams() {
    if (typeof mermaid === 'undefined') {
      console.warn('Mermaid.js is not loaded, skipping diagram rendering');
      return;
    }
    
    // Find all <pre><code class="language-mermaid"> blocks
    const codeBlocks = document.querySelectorAll('pre code.language-mermaid');
    codeBlocks.forEach((codeBlock, index) => {
      const preBlock = codeBlock.parentElement;
      const rawDiagram = codeBlock.textContent;
      
      const div = document.createElement('div');
      div.className = 'mermaid';
      div.id = `mermaid-chart-${index}`;
      div.textContent = rawDiagram;
      
      preBlock.replaceWith(div);
    });
    
    try {
      // Re-run mermaid parser
      mermaid.init(undefined, '.mermaid');
    } catch (e) {
      console.error('Mermaid render error: ', e);
    }
  }
};

window.MarkdownLoader = MarkdownLoader;
export default MarkdownLoader;
