class ProductsPage {
    getProductTitle() {
    }

    getAddToCart() {
    }

    getCheckOut() {
        return cy.get('a.nav-link.btn.btn-primary')
    }
}

export default ProductsPage