# cypress-training

To Make the project working, follow below steps:

1. Make a new folder at appropriate location
2. Git clone using: git clone https://github.com/HafizGhulamAbbas/cypress-training.git
3. Open terminal and go into the folder 'cypress-training'
4. Install cypress: npm cypress install (You may need to fix some issues related to npm as well)
5. Execute test using: npm run todo
6. For Cypress dashboard recording --> ./node_modules/cypress/bin/cypress run --record --key 51de9b0e-e3d8-45a8-a25c-c7941c17344d
7. Implement reporting via 'https://www.npmjs.com/package/mochawesome'. Run via --reporter mochawesome

Update for mochawesome reporting:
- We need three packages for effective reporting: mochawesome, mochawesome-merge, and mochawesome-report-generator.

LINKS:
1. https://www.npmjs.com/package/mochawesome
2. https://www.npmjs.com/package/mochawesome-merge
3. https://www.npmjs.com/package/mochawesome-report-generator


Cucumber setup:
1. Install plugin: cypress-cucumber-preprocessor --> https://www.npmjs.com/package/cypress-cucumber-preprocessor
2. Configure plugin (cypress.config.js)
3. Create a configuration for plugin (package.json)
4. Update specPattern to pick .feature specs
5. Install extension for gherkin syntax --> Cucumber (Gherkin) Full Support

USEFUL link for API testing and verifying response from fixture: https://glebbahmutov.com/blog/fixture-and-request/