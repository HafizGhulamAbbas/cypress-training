/// <reference types = "Cypress" />

describe('My first test suite', function () {

    it('My first test case', function () {
        cy.visit(Cypress.env('url'))
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
    })
  })