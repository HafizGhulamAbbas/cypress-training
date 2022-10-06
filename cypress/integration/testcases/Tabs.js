/// <reference types = "Cypress" />

describe('Tabs and Browser navigation', function () {

    it('Handles tabs and window navigation', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Cypres, by default, doesn't handle target="_blank" which opens tab in new window. So, we need to remove the attribute using jQuery and click to open new tab in the same window
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    })
})