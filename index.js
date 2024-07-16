function removeTodo(obj) {
    let toRemoveLi = obj.parentNode
    let todoList = document.getElementById("todo-list")
    todoList.removeChild(toRemoveLi)
}

function getNewLiElement(text) {
    // create new li element
    let newLi = document.createElement("li")
    newLi.className = "todo-list-item"

    let textP = document.createElement("p")
    textP.className = "statement"
    textP.textContent = text

    let closeButton = document.createElement("button")
    closeButton.className = "delete-todo-icon"
    closeButton.innerHTML = "x"
    closeButton.addEventListener('click', ()=>removeTodo(closeButton))
    // append text and button elements
    newLi.appendChild(textP)
    newLi.appendChild(closeButton)
    return newLi
}

function createTodo() {
    // get the text from the text box
    let inputTextElement = document.getElementById("input-todo")
    let text = inputTextElement.value
    // trim and validate
    if (text == "") {
        alert("Todo Can't be empty")
        return
    }

    // create new li element
    let newElement = getNewLiElement(text)

    // append the child to the list
    let todoList = document.getElementById("todo-list")
    todoList.appendChild(newElement)

    inputTextElement.value = ""
}