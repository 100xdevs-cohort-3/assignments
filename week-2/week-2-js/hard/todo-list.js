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
    this.todo = [];
  }

  add(item) {
    this.todo.push(item);
  }

  remove(index) {
    this.todo.splice(index, 1);
  }

  update(index, item) {
    if (index < 0 || index > this.todo.length - 1) return;
    this.todo.splice(index, 1, item);
  }

  getAll() {
    return this.todo;
  }

  get(index) {
    if (index < 0 || index > this.todo.length - 1) return null;
    return this.todo[index];
  }

  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
