/// <reference types = "Cypress" />

describe('Handle Check Boxes', function () {

    it('using check method provided by cypress', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', "option1")
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // Check multiple checkboxes using value
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption3').check().should('be.checked')
    })
  })