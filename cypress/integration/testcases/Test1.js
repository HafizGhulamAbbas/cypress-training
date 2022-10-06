/// <reference types = "Cypress" />

describe('My first test suite', function () {

    it('My first test case', function () {
        cy.visit(Cypress.env('url'))
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        // cy.get('.products').children().should('have.length', 4)
    })
  })