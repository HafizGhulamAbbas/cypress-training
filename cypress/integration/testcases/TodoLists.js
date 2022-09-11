/// <reference types = "Cypress" />

import TodoListsHelpers from "../utils/TodoListsHelpers";

describe('Todo Lists', function(){
    
    const todoListsHelpers = new TodoListsHelpers()

    this.beforeEach(() => {
        
        todoListsHelpers.pageSetup()
    });

    it('Create New List', function(){
        todoListsHelpers.addNewList()
    })

    it('Delete a List', function(){
        todoListsHelpers.deleteList()
    })

    it('counts the lists', function(){
        
        cy.get('.ListsWrapper').find('.ToDoList').should('have.length', 2)
    })

    it('add a new list item', function(){
        cy.get("input[placeholder='New item']").first().type('my new task')
        cy.get("button[class='btn btn-outline-secondary']").eq(1).click()
    })

    it('counts the list items', function(){
        cy.get('.ListsWrapper').find('.ToDoList').eq(0).find('.ToDoListItem').should('have.length',3)
    })

    it('changes the status of list item', function(){
        cy.get('.ListsWrapper').find('.ToDoList').eq(0).find('.ToDoListItem').last().find('.form-check-input').click().then(function(element){
            cy.get(".form-check-input").check().should('be.checked')
        })
    })

    it('delete a list item', function(){
        cy.get('.ListsWrapper').find('.ToDoList').eq(0).find('.ToDoListItem').last().find('.DeleteItem').click()
    })
})