// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each((element, index) => {
        if(element.text().includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add('getLoginToken', () => {
    cy.request('POST', 'https://qa-hcc.mynisum.com/api/v1/auth/login', 
    {username: "mwaqaryb@nisum.com12", password: "nisum123"})
    .then((response) => {
        expect(response.status).to.eq(200)
        Cypress.env('Admin-Token', response.body.objectData["accessToken"])
    })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })