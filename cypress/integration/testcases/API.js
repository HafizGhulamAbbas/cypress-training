describe('API testing using cypress', () => {
    
    it('Intercept a request to return one record only', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        // []  force the response to be: []
        {
            statusCode: 200,
            body: [{
                "book_name": "Little hpuse on preiyi",
                "isbn": "RS908",
                "aisle": "220"
            }]
        }).as('bookRetriever')

        cy.get('button.btn.btn-primary').click()
        cy.wait('@bookRetriever').should(({request, response}) => {
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })

    it('Fetch AuthorName "malhotra" books', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (request) => {
            request.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            request.continue((response) => {
                expect(response.statusCode).to.equal(403)
            })
        }).as('changedUrlResponse')
        cy.get('button.btn.btn-primary').click()
        cy.wait('@changedUrlResponse')
    })

    it('gives a response matching a fixture object', () => {
        // cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        // // we set the response to be the activites.json fixture
        // cy.intercept('GET', 'https://rahulshettyacademy.com/angularAppdemo/', { fixture: 'library.json' }).as('testing')
        // cy.get('button.btn.btn-primary').click()
        // cy.wait('@testing').should(({request, response}) => {
        //     cy.get('tr').should('have.length', response.body.length+1)
        // })
        // cy.get('p').should('have.text', 'Oops only 1 Book available')



        cy.request('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty')
        .its('body')
        .then((body) => {
            cy.fixture('library.json').should('deep.equal', body)
        })
    })
})

