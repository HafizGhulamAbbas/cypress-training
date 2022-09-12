const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/testcases/*.js',
    defaultCommandTimeout: 6000
  },
  env: {
    url: 'http://localhost:3030/'
  }
})
