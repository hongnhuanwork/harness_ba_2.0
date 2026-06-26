import Router from './router.js';
import Navigation from './navigation.js';
import Search from './search.js';
import Dashboard from './dashboard.js';
import MarkdownLoader from './markdown-loader.js';

// Initialize the SPA when DOM is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing Business Analysis Workspace Portal...');
  
  // Register Routes
  Router.register('#/dashboard', () => Dashboard.render());
  Router.register('#/doc', (filePath) => MarkdownLoader.loadAndRender(filePath));
  
  // Initialize Sub-Systems
  await Navigation.init();
  await Search.init();
  Router.init();
  
  // Connect toggle UI panel events if they exist
  setupUIPanels();
});

function setupUIPanels() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
}
