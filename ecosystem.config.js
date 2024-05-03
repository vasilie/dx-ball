module.exports = {
  apps : [{
    name: "dx-clone",
    script: "serve",
    env: {
      PM2_SERVE_PATH: './',   // Path to the files you want to serve
      PM2_SERVE_PORT: 1123,         // Port you want to use
      PM2_SERVE_SPA: 'true',        // Serve Single Page Application
      PM2_SERVE_HOMEPAGE: '/index.html' // Default file to serve
    }
  }]
};