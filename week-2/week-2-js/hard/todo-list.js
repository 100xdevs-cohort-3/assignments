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
    this.arr = [];
  }

  add(todo) {
    this.arr.push(todo);
  }
  remove(index) {
    if (index < 0 || index >= this.arr.length) {
      console.warn("Invalid index");
      return this;
    }
    this.arr = this.arr.filter((_, ind) => ind !== index);
  }
  update(index, task) {
    if (index < 0 || index >= this.arr.length) {
      console.warn("Invalid index");
      return this;
    }
    this.arr[index] = task;
  }
  getAll() {
    return this.arr;
  }
  get(index) {
    if (index < 0 || index >= this.arr.length) {
      console.warn("Invalid index");
      return null;
    }
    return this.arr[index];
  }
  clear() {
    this.arr = [];
  }
}

module.exports = Todo;
