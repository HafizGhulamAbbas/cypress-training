/// <reference types = "Cypress" />

describe('Handle Dynamic Dropdown', function () {

    it('using check method provided by cypress', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((element) => {
            if(element.text()==="India") {
                cy.wrap(element).click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value','India')
    })
})