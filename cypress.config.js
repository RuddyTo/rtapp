const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ruddyto.github.io/rtapp',
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
})
