/// <reference types = "Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductsPage from '../../../../support/pageObjects/ProductsPage'
import CartPage from '../../../../support/pageObjects/CartPage'
import CheckoutPage from '../../../../support/pageObjects/CheckoutPage'

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const productsPage = new ProductsPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

// const url = 'https://google.com'
Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('e_commerce_url'))
})

When('I add items to cart', function() {
    // Select multiple items and add to cart
    homePage.getShopPage().click()
    for(let product of this.data.productName){
        cy.selectProduct(product)
    }
    productsPage.getCheckOut().click()
})

And('Validates the total prices', ()=> {
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
})

Then('Select the country, checkout and verify thankyou', () => {
    cartPage.getCheckoutButton().click()

    checkoutPage.getDeliveryLocation().type('India')
    Cypress.config('defaultCommandTimeout', 8000)
    checkoutPage.getIndiaAsDeliveryLocation().click()
    checkoutPage.getTermsAndCondition().check({force: true}).should('be.checked')
    checkoutPage.getPurchaseButton().click()
    checkoutPage.getSuccessAlert().should('include.text', checkoutPage.getSuccessMessage())
})


// Using cypress fixture
// When('I fill the form details', function() {
//     homePage.getNameInput().type(this.data.name)
//     homePage.getGender().select(this.data.gender)
// })

// Using cucumber
When('I fill the form details', function(dataTable) {
    homePage.getNameInput().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})
Then('Validates the form behavior', function() {
    homePage.getBindedNameInput().should('have.value', this.data.name)
    // Validating the name input field if it has min length 2
    homePage.getNameInput().should('have.attr', 'minlength', 2)
    // Validate disability of an element
    homePage.getEmployeeStatusEntrepreneur().should('be.disabled')
})
And('Selects the shop page', () => {
    homePage.getShopPage().click()
})