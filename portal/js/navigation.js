const Navigation = {
  async init() {
    const navContainer = document.getElementById('sidebar-nav');
    if (!navContainer) return;
    
    navContainer.innerHTML = '<div class="loading">Loading navigation...</div>';
    
    try {
      const [navResponse, mapResponse] = await Promise.all([
        fetch('config/navigation.json'),
        fetch('config/content-map.json')
      ]);
      
      if (!navResponse.ok || !mapResponse.ok) {
        throw new Error('Failed to load portal configuration JSON files.');
      }
      
      const navConfig = await navResponse.json();
      const contentMap = await mapResponse.json();
      
      this.renderNav(navConfig, contentMap, navContainer);
      this.bindEvents();
      this.highlightActiveNode();
      
      // Listen for routes to adjust node highlights
      window.addEventListener('hashchange', () => this.highlightActiveNode());
      
    } catch (error) {
      console.error(error);
      navContainer.innerHTML = `<div class="error-text">Failed to build navigation: ${error.message}</div>`;
    }
  },
  
  renderNav(navConfig, contentMap, container) {
    let html = '<ul class="nav-tree">';
    
    navConfig.forEach(item => {
      if (item.type === 'link') {
        html += `
          <li class="nav-item-link" data-route="${item.route}">
            <a href="${item.route}">
              <span class="material-icons">${item.icon}</span>
              <span class="nav-label">${item.title}</span>
            </a>
          </li>
        `;
      } else if (item.type === 'folder') {
        // Find matching scanned files for this directory
        // Example path matches folder root name e.g. "output" or specific subfolder path
        const matches = this.findMatchingFiles(item.path, contentMap);
        
        html += `
          <li class="nav-folder-node closed" data-id="${item.id}">
            <div class="folder-header">
              <span class="material-icons chevron">chevron_right</span>
              <span class="material-icons folder-icon">${item.icon}</span>
              <span class="nav-label">${item.title}</span>
              <span class="badge">${matches.length}</span>
            </div>
            <ul class="folder-children">
        `;
        
        if (matches.length === 0) {
          html += '<li class="nav-file-empty">No artifacts found</li>';
        } else {
          matches.forEach(file => {
            // Trim folder name from file.title if it exists or use default
            const displayTitle = file.title || file.name;
            html += `
              <li class="nav-file-node" data-path="${file.path}">
                <a href="#/doc/${file.path}" title="${file.path}">
                  <span class="material-icons file-icon">description</span>
                  <span class="file-label">${displayTitle}</span>
                </a>
              </li>
            `;
          });
        }
        
        html += `
            </ul>
          </li>
        `;
      }
    });
    
    html += '</ul>';
    container.innerHTML = html;
  },
  
  findMatchingFiles(path, contentMap) {
    // Determine which top-level scanner folder this path belongs to
    // e.g. "output/phase-1-discovery" -> starts with "output"
    const topFolder = path.split('/')[0];
    const folderFiles = contentMap[topFolder] || [];
    
    // Filter files that are inside the targeted subpath
    return folderFiles.filter(file => file.path.startsWith(path));
  },
  
  bindEvents() {
    const folders = document.querySelectorAll('.nav-folder-node .folder-header');
    folders.forEach(header => {
      header.addEventListener('click', (e) => {
        const folderNode = e.currentTarget.parentElement;
        const chevron = e.currentTarget.querySelector('.chevron');
        
        folderNode.classList.toggle('closed');
        
        if (folderNode.classList.contains('closed')) {
          chevron.textContent = 'chevron_right';
        } else {
          chevron.textContent = 'expand_more';
        }
      });
    });
  },
  
  highlightActiveNode() {
    const hash = window.location.hash || '#/dashboard';
    
    // Reset all highlights
    document.querySelectorAll('.sidebar li').forEach(li => {
      li.classList.remove('active');
    });
    
    if (hash.startsWith('#/doc/')) {
      const filePath = hash.replace('#/doc/', '');
      const activeFile = document.querySelector(`.nav-file-node[data-path="${filePath}"]`);
      if (activeFile) {
        activeFile.classList.add('active');
        
        // Open parent folders recursively
        let parent = activeFile.parentElement;
        while (parent && !parent.classList.contains('sidebar')) {
          if (parent.classList.contains('nav-folder-node')) {
            parent.classList.remove('closed');
            const chevron = parent.querySelector('.chevron');
            if (chevron) chevron.textContent = 'expand_more';
          }
          parent = parent.parentElement;
        }
      }
    } else {
      const activeLink = document.querySelector(`.nav-item-link[data-route="${hash}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
};

window.Navigation = Navigation;
export default Navigation;
