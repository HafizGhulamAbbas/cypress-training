
class TodoList{

    getNewListInput(){
        return cy.get("input[placeholder='New list']")
    }

    getNewListAddButton(){
        return cy.get("button[class='btn btn-outline-secondary']").first()
    }

    getListDeleteButton(){
        return cy.get("button[class='btn btn-danger btn-sm']").first()
    }

    getNewItemInput(){
        return cy.get("input[placeholder='New item']").first()
    }

    getNewItemAddButton(){
        return cy.get("button[class='btn btn-outline-secondary']").eq(1)
    }

    getItemDeleteText(){
        return cy.get("button[class='btn btn-danger btn-sm']").first()
    }

    getUpdateItem(){
        return cy.get("button[class='btn btn-danger btn-sm']").first()
    }

}

export default TodoList;