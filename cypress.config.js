const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'sxmad1',
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/testcases/*.js',
    defaultCommandTimeout: 6000,
    reporter: 'mochawesome'
  },
  env: {
    url: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    e_commerce_url: 'https://rahulshettyacademy.com/angularpractice/'
  }
})
