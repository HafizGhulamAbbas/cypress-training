// Install iframe packaging using command --> npm install -D cypress-iframe

/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'

describe('Handle iframe', function () {

    it('Handle iframe in cypress after installing "cypress-iframe" package', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})