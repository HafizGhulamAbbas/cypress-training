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

    })    
  })