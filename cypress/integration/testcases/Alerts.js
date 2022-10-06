/// <reference types = "Cypress" />

describe('Alerts and confirm alerts', function () {

    it('check for alerts and confirm alerts', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(response)=>{
            //Mocha
            expect(response).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(response)=>{
            //Mocha
            expect(response).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})