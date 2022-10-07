/// <reference types = "Cypress" />

describe('Place Order', function () {

    before(() => {
        cy.fixture('example').then(function(response) {
            // 'this' cannot be used in arrow function. That's why, I used normal function
            this.data = response
        })
    })

    it('Add cart to item and purchase', function () {
        cy.visit(Cypress.env('e_commerce_url'))

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)

        // Validating the name input field if it has min length 2
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', 2)

        // Validate disability of an element
        cy.get('#inlineRadio3').should('be.disabled')


        // Select an item and add to cart
        cy.get('a[href*="shop"]').click()
        cy.selectProduct("Blackberry")
    })    
  })