beforeEach(function() {
    cy.fixture('example').then(function(response) {
        // 'this' cannot be used in arrow function. That's why, I used normal function
        this.data = response
    })
})