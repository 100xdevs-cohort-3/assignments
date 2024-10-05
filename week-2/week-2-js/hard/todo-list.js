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
    this.todos = []
  }
  add(todo) {
    this.todos.push(todo);
  }

  remove(idxOfTodo) {
    if (idxOfTodo >= 0 && idxOfTodo < this.todos.length) {
      this.todos.splice(idxOfTodo, 1)
    }
  }

  update(idx, updatedTodo) {
    if (idx >= 0 && idx < this.todos.length) {
      this.todos[idx] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(idxOfTodo) {
    if (idxOfTodo >= 0 && idxOfTodo < this.todos.length) {
      return this.todos[idxOfTodo];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
