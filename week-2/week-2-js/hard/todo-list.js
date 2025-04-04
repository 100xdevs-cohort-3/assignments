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
    if (index < this.arr.length && index >= 0 && this.arr.length > 0) {
      this.arr = this.arr.filter((item) => item != this.arr[index]);
    }
  }
  update(index, todo) {
    if (index >= 0 && index < this.arr.length) {
      this.arr[index] = todo;
    }
  }
  get(index) {
    if (index >= 0 && index < this.arr.length) {
      return this.arr[index];
    } else return null;
  }
  getAll() {
    return this.arr;
  }
  clear() {
    this.arr = [];
  }
}

module.exports = Todo;
