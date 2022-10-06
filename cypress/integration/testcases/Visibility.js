/// <reference types = "Cypress" />

describe('Check element visibility and radio button check', function () {

    it('illustrates element visible or not and radio button check example', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})