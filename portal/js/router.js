const Router = {
  routes: {},
  
  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    // Initial route load
    this.handleRoute();
  },
  
  register(route, callback) {
    this.routes[route] = callback;
  },
  
  handleRoute() {
    const hash = window.location.hash || '#/dashboard';
    
    // Check for document route pattern: #/doc/path/to/file.md
    if (hash.startsWith('#/doc/')) {
      const filePath = hash.replace('#/doc/', '');
      if (this.routes['#/doc']) {
        this.routes['#/doc'](filePath);
      }
      return;
    }
    
    // Check direct matching routes
    const callback = this.routes[hash];
    if (callback) {
      callback();
    } else {
      console.warn(`Route not found: ${hash}. Redirecting to dashboard.`);
      window.location.hash = '#/dashboard';
    }
  }
};

window.Router = Router;
export default Router;
