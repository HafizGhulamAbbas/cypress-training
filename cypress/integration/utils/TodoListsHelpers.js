/// <reference types = "Cypress"/>
import TodoLists from "../pageObjects/TodoLists";

class TodoListsHelpers{

    pageSetup(){
        cy.visit(Cypress.env('url'))
    }

    addNewList(){
        const todoLists = new TodoLists()
        todoLists.getNewListInput().type("Carrot")
        todoLists.getNewListAddButton().click()
    }

    deleteList(){
        const todoLists = new TodoLists()
        todoLists.getListDeleteButton().click()
    }
}

export default TodoListsHelpers