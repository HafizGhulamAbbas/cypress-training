describe('API testing using cypress', () => {
    it('Intercept a request to return one record only', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
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
})

