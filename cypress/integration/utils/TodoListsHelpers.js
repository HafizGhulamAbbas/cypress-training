/* eslint-disable no-undef */
/// <reference types = "Cypress"/>
import TodoLists from '../pageObjects/TodoLists'

class TodoListsHelpers {
  pageSetup () {
    cy.visit(Cypress.env('url'))
    cy.viewport(1280, 720)
  }

  addNewList () {
    const todoLists = new TodoLists()
    todoLists.getNewListInput().type('Weekend Plan')
    todoLists.getNewListAddButton().click()
  }

  addNewListItem () {
    const todoLists = new TodoLists()
    todoLists.getNewItemInput().type('Code Review')
    todoLists.getNewListAddButton().click()
  }

  updateItemStatus () {
    const todoLists = new TodoLists()
    todoLists.getUpdateItem().click().then(function (element) {
      cy.get('.form-check-input').check().should('be.checked')
    })
  }

  deleteListItem () {
    const todoLists = new TodoLists()
    todoLists.getItemDeleteText().click()
  }

  deleteList () {
    const todoLists = new TodoLists()
    todoLists.getListDeleteButton().click()
  }
}

export default TodoListsHelpers
