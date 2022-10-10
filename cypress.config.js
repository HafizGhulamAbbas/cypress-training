const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'sxmad1',
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    // specPattern: ['cypress/integration/testcases/*.js', 'cypress/integration/purchase/*.js'],
    specPattern: 'cypress/integration/testcases/BDD/*.feature',
    defaultCommandTimeout: 6000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: 'report',
      // disable overwrite to generate many JSON reports
      overwrite: false,
      // do not generate intermediate HTML reports
      html: true,
      // generate intermediate JSON reports
      json: true,
      charts: true
    },
    video: false
  },
  env: {
    url: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    e_commerce_url: 'https://rahulshettyacademy.com/angularpractice/'
  },
  retries: {
    // Configure retry attempts for `cypress run`. Default is 0
    "runMode": 1,
    // Configure retry attempts for `cypress open`. Default is 0
    "openMode": 0
  }
})
