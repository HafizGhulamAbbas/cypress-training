/// <reference types="Cypress" />
 
describe('Handle tables', function() {
    it('Handle multiple tables and extract values of siblings',function() {
        const tableLocator = 'table[id="product"][name="courses"] tr td:nth-child(2)'
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get(tableLocator).each((element, index) => {
            const text = element.text()
            if(text.includes("Python")) {
                cy.get(tableLocator).eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})