/// <reference types = "Cypress" />

describe('My first test suite', function () {

    it('My first test case', function () {
        cy.visit(Cypress.env('url'))
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)

        // Parent children chaining
        cy.get('.products').find('.product').should('have.length', 4)

        // Another easy way
        cy.get('.products').children().should('have.length', 4)

        // Click Add to cart for the third product after verifying the button test
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })
  })