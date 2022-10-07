class HomePage {

    getNameInput() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getBindedNameInput() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getGender() {
        return cy.get('select')
    }

    getEmployeeStatusEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getShopPage() {
        return cy.get('a[href*="shop"]')
    }

}

export default HomePage;