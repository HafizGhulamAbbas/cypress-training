class CheckoutPage {

    getDeliveryLocation() {
        return cy.get('#country')
    }

    getIndiaAsDeliveryLocation(){
        return cy.get('.suggestions > ul > li > a')
    }

    getTermsAndCondition() {
        return cy.get('#checkbox2')
    }

    getPurchaseButton() {
        return cy.get('input[value="Purchase"]')
    }

    getSuccessAlert() {
        return cy.get('.alert')
    }

    getSuccessMessage() {
        return "Success! Thank you! Your order will be delivered in next few weeks :-)."
    }
}

export default CheckoutPage