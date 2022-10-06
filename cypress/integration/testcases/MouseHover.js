/// <reference types = "Cypress" />

describe('Mouse Hover', function () {

    it('Handling mouse hover in cypress', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click() // or simply use cypress command cy.contains('Top').click({force: true}) instead of jQuery
        cy.url().should('contain', 'top')
    })
  })