const { defineConfig } = require('cypress')

const isCi = Boolean(process.env.CI)

module.exports = defineConfig({
  e2e: {
    baseUrl: isCi ? 'http://localhost:3000' : 'https://ruddyto.github.io/rtapp',
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    ...(isCi && {
      webServer: {
        command: 'npm start',
        url: 'http://localhost:3000',
        reuseExistingServer: false,
      },
    }),
  },
})
