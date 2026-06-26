const Search = {
  filesIndex: [],
  
  async init() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    if (!searchInput || !searchResults) return;
    
    try {
      const response = await fetch('config/content-map.json');
      if (!response.ok) throw new Error('Failed to load search content map.');
      
      const contentMap = await response.json();
      
      // Flatten all files into a single search index list
      this.filesIndex = [];
      Object.keys(contentMap).forEach(folder => {
        contentMap[folder].forEach(file => {
          this.filesIndex.push(file);
        });
      });
      
      searchInput.addEventListener('input', (e) => this.performSearch(e.target.value, searchResults));
      
      // Hide results when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
          searchResults.style.display = 'none';
        }
      });
      
      searchInput.addEventListener('focus', (e) => {
        if (e.target.value.trim().length > 0) {
          searchResults.style.display = 'block';
        }
      });
      
    } catch (error) {
      console.error('Search init error:', error);
    }
  },
  
  performSearch(query, resultsContainer) {
    const cleanQuery = query.toLowerCase().trim();
    if (cleanQuery.length === 0) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }
    
    // Filter index for matches in title, filename, path, or metadata values
    const matches = this.filesIndex.filter(file => {
      const titleMatch = file.title && file.title.toLowerCase().includes(cleanQuery);
      const nameMatch = file.name && file.name.toLowerCase().includes(cleanQuery);
      const pathMatch = file.path && file.path.toLowerCase().includes(cleanQuery);
      
      // Check metadata values
      const metaMatch = file.metadata && Object.keys(file.metadata).some(key => {
        return file.metadata[key].toLowerCase().includes(cleanQuery);
      });
      
      return titleMatch || nameMatch || pathMatch || metaMatch;
    });
    
    if (matches.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">No matching documents found</div>';
    } else {
      let html = '';
      matches.slice(0, 8).forEach(file => {
        const displayTitle = file.title || file.name;
        html += `
          <div class="search-result-item" data-path="${file.path}">
            <span class="material-icons search-item-icon">description</span>
            <div class="search-item-info">
              <span class="search-item-title">${displayTitle}</span>
              <span class="search-item-path">${file.path}</span>
            </div>
          </div>
        `;
      });
      resultsContainer.innerHTML = html;
      
      // Bind click handlers
      resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', (e) => {
          const path = e.currentTarget.getAttribute('data-path');
          window.location.hash = `#/doc/${path}`;
          resultsContainer.style.display = 'none';
          document.getElementById('search-input').value = '';
        });
      });
    }
    
    resultsContainer.style.display = 'block';
  }
};

window.Search = Search;
export default Search;
