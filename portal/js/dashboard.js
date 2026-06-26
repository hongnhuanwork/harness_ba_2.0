const Dashboard = {
  async render() {
    const mainViewport = document.getElementById('main-content');
    const metadataPanel = document.getElementById('meta-panel-content');
    const metaSidebar = document.getElementById('meta-sidebar');
    
    if (metaSidebar) metaSidebar.classList.remove('active');
    mainViewport.innerHTML = '<div class="loading">Loading workspace dashboard...</div>';
    
    try {
      // 1. Fetch config details
      const [projectRes, mapRes, phaseRes] = await Promise.all([
        fetch('config/project.json'),
        fetch('config/content-map.json'),
        fetch('config/phase-map.json')
      ]);
      
      const project = await projectRes.json();
      const contentMap = await mapRes.json();
      const phases = await phaseRes.json();
      
      // 2. Calculate dynamic metrics by parsing supporting memory logs
      const metrics = await this.fetchMetrics();
      
      // Count total files in content-map
      let totalDocs = 0;
      Object.keys(contentMap).forEach(key => {
        totalDocs += contentMap[key].length;
      });
      
      // 3. Render Dashboard HTML
      this.drawUI(project, totalDocs, metrics, phases, mainViewport);
      
      // Update meta panel with project overview
      metadataPanel.innerHTML = `
        <div class="meta-item">
          <span class="meta-label">Project Status</span>
          <span class="meta-value status-badge active">${project.status}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Current Phase</span>
          <span class="meta-value">${project.currentPhase}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Last Synchronized</span>
          <span class="meta-value">${project.lastUpdate}</span>
        </div>
      `;
      
    } catch (error) {
      console.error(error);
      mainViewport.innerHTML = `
        <div class="error-container">
          <h2>Error Loading Dashboard</h2>
          <p>${error.message}</p>
        </div>
      `;
    }
  },
  
  async fetchMetrics() {
    const metrics = {
      assumptions: 0,
      decisions: 0,
      risks: 0,
      lessons: 0
    };
    
    try {
      // Fetch supporting registers to scan counts
      const [assumptionsText, decisionsText, risksText, lessonsText] = await Promise.all([
        fetch('../project_resources/00-project-memory/assumptions.md').then(r => r.ok ? r.text() : ''),
        fetch('../project_resources/00-project-memory/decisions.md').then(r => r.ok ? r.text() : ''),
        fetch('../project_resources/00-project-memory/risks.md').then(r => r.ok ? r.text() : ''),
        fetch('../project_resources/00-project-memory/lessons-learned.md').then(r => r.ok ? r.text() : '')
      ]);
      
      // Regex parsing of IDs
      metrics.assumptions = (assumptionsText.match(/\|\s*ASM-\d+/g) || []).length;
      metrics.decisions = (decisionsText.match(/Decision ID:\s*DEC-\d+/gi) || decisionsText.match(/###\s*DEC-\d+/g) || []).length;
      metrics.risks = (risksText.match(/\|\s*RSK-\d+/g) || []).length;
      metrics.lessons = (lessonsText.match(/\|\s*LSN-\d+/g) || []).length;
      
    } catch (e) {
      console.error('Error fetching metrics from memory files:', e);
    }
    
    return metrics;
  },
  
  drawUI(project, docCount, metrics, phases, container) {
    let phasesHtml = '';
    phases.forEach(p => {
      const statusClass = p.status.toLowerCase().replace(' ', '-');
      phasesHtml += `
        <div class="phase-card">
          <div class="phase-header">
            <h3>${p.phase}</h3>
            <span class="phase-status status-${statusClass}">${p.status}</span>
          </div>
          <p class="phase-desc">${p.description}</p>
          <div class="phase-link">
            <a href="#/doc/${p.folder}" class="btn-text">Explore Deliverables &rarr;</a>
          </div>
        </div>
      `;
    });
    
    container.innerHTML = `
      <div class="dashboard-container">
        <header class="dashboard-header">
          <h1>${project.projectName}</h1>
          <p class="project-subtitle">${project.description}</p>
        </header>
        
        <!-- Metrics Grid -->
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="material-icons metric-icon color-blue">description</span>
            <div class="metric-info">
              <span class="metric-value">${docCount}</span>
              <span class="metric-label">Workspace Files</span>
            </div>
          </div>
          <div class="metric-card">
            <span class="material-icons metric-icon color-green">gavel</span>
            <div class="metric-info">
              <span class="metric-value">${metrics.decisions}</span>
              <span class="metric-label">Approved Decisions</span>
            </div>
          </div>
          <div class="metric-card">
            <span class="material-icons metric-icon color-yellow">warning</span>
            <div class="metric-info">
              <span class="metric-value">${metrics.risks}</span>
              <span class="metric-label">Active Risks</span>
            </div>
          </div>
          <div class="metric-card">
            <span class="material-icons metric-icon color-purple">help_outline</span>
            <div class="metric-info">
              <span class="metric-value">${metrics.assumptions}</span>
              <span class="metric-label">Assumptions</span>
            </div>
          </div>
          <div class="metric-card">
            <span class="material-icons metric-icon color-red">psychology</span>
            <div class="metric-info">
              <span class="metric-value">${metrics.lessons}</span>
              <span class="metric-label">Lessons Learned</span>
            </div>
          </div>
        </div>
        
        <!-- Phases Timeline Grid -->
        <h2 class="section-title">Project Execution Phases</h2>
        <div class="phases-grid">
          ${phasesHtml}
        </div>
      </div>
    `;
  }
};

window.Dashboard = Dashboard;
export default Dashboard;
