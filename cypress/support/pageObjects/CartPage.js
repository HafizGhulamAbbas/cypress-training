class CartPage {

    getProductsPrice() {
        return cy.get('tr > td:nth-child(4) strong')
    }

    getTotalPrice() {
        return cy.get('td.text-right strong')
    }

    getCheckoutButton() {
        return cy.get('button.btn.btn-success')
    }
}

export default CartPage