/* eslint-disable no-undef */
/// <reference types = "Cypress" />

import TodoListsHelpers from '../utils/TodoListsHelpers'

describe('Todo Lists', function () {
  const todoListsHelpers = new TodoListsHelpers()

  this.beforeEach(() => {
    todoListsHelpers.pageSetup()
  })

  it('create new list', function () {
    todoListsHelpers.addNewList()
  })

  it('add a new list item', function () {
    todoListsHelpers.addNewListItem()
  })

  it('changes the status of list item', function () {
    todoListsHelpers.updateItemStatus()
  })

  it('delete a list item', function () {
    todoListsHelpers.deleteListItem()
  })

  it('delete a list', function () {
    todoListsHelpers.deleteList()
  })
})
