/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
constructor() {
    this.todos = [];
  }

  add(todo) {
    if (typeof todo !== 'string') {
      throw new Error('Todo must be a string');
    }
    this.todos.push(todo);
    return this.todos;
  }

  remove(index) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error('Invalid index');
    }
    return this.todos.splice(index, 1)[0]; 
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error('Invalid index');
    }
    if (typeof updatedTodo !== 'string') {
      throw new Error('Updated todo must be a string');
    }
    this.todos[index] = updatedTodo;
    return this.todos[index];
  }

  getAll() {
    return [...this.todos]; 
  }

  get(index) {
    if (index < 0 || index >= this.todos.length) {
      throw new Error('Invalid index');
    }
    return this.todos[index];
  }

  clear() {
    this.todos = [];
    return this.todos;
  }
}

module.exports = Todo;
