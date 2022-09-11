const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/testcases/*.js'
  },
  env : {
    "url": "http://localhost:3030/"
}
});