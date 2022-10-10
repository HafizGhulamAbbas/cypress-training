describe('API testing using cypress', () => {
    
    // it('Intercept a request to return one record only', () => {
    //     cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    //     cy.intercept({
    //         method: 'GET',
    //         url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    //     },
    //     // []  force the response to be: []
    //     {
    //         statusCode: 200,
    //         body: [{
    //             "book_name": "Little hpuse on preiyi",
    //             "isbn": "RS908",
    //             "aisle": "220"
    //         }]
    //     }).as('bookRetriever')

    //     cy.get('button.btn.btn-primary').click()
    //     cy.wait('@bookRetriever').should(({request, response}) => {
    //         cy.get('tr').should('have.length', response.body.length+1)
    //     })
    //     cy.get('p').should('have.text', 'Oops only 1 Book available')

    // })

    // it('Fetch AuthorName "malhotra" books', () => {
    //     cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    //     cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (request) => {
    //         request.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
    //         request.continue((response) => {
    //             expect(response.statusCode).to.equal(403)
    //         })
    //     }).as('changedUrlResponse')
    //     cy.get('button.btn.btn-primary').click()
    //     cy.wait('@changedUrlResponse')
    // })

    // it('gives a response matching a fixture object', () => {
    //     cy.request('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty')
    //     .its('body')
    //     .then((body) => {
    //         cy.fixture('library.json').should('deep.equal', body)
    //     })
    // })

    // // Handling API call directly with out involving browser with cypress
    // it('gets response from server-only application (pure API testing)', () => {
    //     cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
    //         "name": "Learn Apium with Java",
    //         "isbn": "bsds",
    //         "aisle": "22s7",
    //         "author": "John doe"
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body).to.have.property('Msg', 'successfully added')
    //     })
    // })

    it('gets login and save save token', () => {
        cy.getLoginToken().then(() => {
            cy.visit('https://qa-hcc.mynisum.com', {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('Admin-Token', Cypress.env('Admin-Token'))
                }
            })
        })
    })
})

