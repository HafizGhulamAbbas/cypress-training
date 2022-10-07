/* eslint-disable no-undef */
const selectors = require('../../integration/utils/selectors.json')

class TodoLists {
  getNewListInput () {
    return cy.get(selectors.landingPage.newListInput)
  }

  getNewListAddButton () {
    return cy.get(selectors.landingPage.newListAddButton)
  }

  getListDeleteButton () {
    return cy.get(selectors.landingPage.deleteListButton).first()
  }

  getNewItemInput () {
    return cy.get(selectors.landingPage.newListItemInput).first()
  }

  getNewItemAddButton () {
    return cy.get(selectors.landingPage.newListItemAddButton).eq(1)
  }

  getUpdateItem () {
    return cy.get(selectors.landingPage.itemStatusCheckbox)
  }

  getItemDeleteText () {
    return cy.get(selectors.landingPage.itemDeleteText)
  }

  getListsCount () {
    return cy.get('.ListsWrapper>.ToDoList')
      .each(($li, index, $lis) => {
      })
      .then(($lis) => {
        // cy.log($lis)
      })
  }
}

export default TodoLists
