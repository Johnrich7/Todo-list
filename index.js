let button = document.getElementById('addTaskBtn')
let todolist = document.getElementById('taskList')
let input = document.getElementById('taskInput');

let todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click', () => {
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos))
    addtodo(input.value)
    input.value = ''
});

function addtodo(todo) {
    let list = document.createElement('li')
    list.innerText = todo;
    todolist.appendChild(list)
    list.addEventListener('click', () => {
        list.style.textDecoration = 'line-through'
        remove(todo)
    })
    list.addEventListener('dblclick', () => {
        todolist.removeChild(list)
        remove(todo)
    })
}

function remove(todo) {
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}