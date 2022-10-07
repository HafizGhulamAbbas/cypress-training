/// <reference types = "Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductsPage from '../../support/pageObjects/ProductsPage'
import CartPage from '../../support/pageObjects/CartPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

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
        const cartPage = new CartPage()
        const checkoutPage = new CheckoutPage()

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

        let totalPrice = 0
        cartPage.getProductsPrice().each((product) => {
            const productPrice = product.text().split(" ")[1].trim()
            totalPrice += Number(productPrice)
        })
        .then(() => {
            cy.log("Total Price Calculation: " + totalPrice)
        })
        
        cartPage.getTotalPrice()
        .then((element) => {
            const price = Number(element.text().split(" ")[1].trim())
            expect(price).to.equal(totalPrice)
        })

        cartPage.getCheckoutButton().click()

        checkoutPage.getDeliveryLocation().type('India')
        Cypress.config('defaultCommandTimeout', 8000)
        checkoutPage.getIndiaAsDeliveryLocation().click()

        checkoutPage.getTermsAndCondition().check({force: true}).should('be.checked')
        checkoutPage.getPurchaseButton().click()
        checkoutPage.getSuccessAlert().should('include.text', checkoutPage.getSuccessMessage())
    })    
  })