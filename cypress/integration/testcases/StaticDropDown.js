/// <reference types = "Cypress" />

describe('Handle Static Dropdown', function () {

    it('using check method provided by cypress', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option2').should('have.value', 'option2')
    })
  })