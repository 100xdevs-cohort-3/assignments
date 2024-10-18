const API_URL = 'http://localhost:3001/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();
});

// Fetch todos from the backend
function fetchTodos() {
    fetch(API_URL)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => addTodoToDOM(todo));
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    const todoList = document.getElementById('todo-list');

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.setAttribute('data-id', todo.id);

    const title = document.createElement('span');
    title.textContent = todo.task; 

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));

    todoItem.appendChild(title);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    const titleInput = document.getElementById('todo-input'); 

    if (!titleInput) {
        console.error('Input not found');
        return;
    }

    const newTodo = { task: titleInput.value };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    })
        .then(response => response.json())
        .then(todo => {
            addTodoToDOM(todo);
            titleInput.value = ''; 
        })
        .catch(error => console.error('Error adding todo:', error));
});
// Delete a todo
function deleteTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
        .then(() => {
            const todoItem = document.querySelector(`[data-id='${id}']`);
            todoItem.remove();
        })
        .catch(error => console.error('Error deleting todo:', error));
}