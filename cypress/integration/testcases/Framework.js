/// <reference types = "Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductsPage from '../pageObjects/ProductsPage'

describe('Place Order', function () {

    before(() => {
        cy.fixture('example').then(function(response) {
            // 'this' cannot be used in arrow function. That's why, I used normal function
            this.data = response
        })
    })

    it('Add cart to item and purchase', function () {
        const homePage = new HomePage()
        const productsPage = new ProductsPage()

        cy.visit(Cypress.env('e_commerce_url'))

        homePage.getNameInput().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getBindedNameInput().should('have.value', this.data.name)

        // Validating the name input field if it has min length 2
        homePage.getNameInput().should('have.attr', 'minlength', 2)

        // Validate disability of an element
        homePage.getEmployeeStatusEntrepreneur().should('be.disabled')

        // Select multiple items and add to cart
        homePage.getShopPage().click()
        for(let product of this.data.productName){
            cy.selectProduct(product)
        }

        productsPage.getCheckOut().click()
    })    
  })