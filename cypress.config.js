const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'sxmad1',
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/testcases/*.js',
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
  }
})
