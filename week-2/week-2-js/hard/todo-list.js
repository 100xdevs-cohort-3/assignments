class Todo {
  constructor() {
    this.todos = [];
  }
  valid(index) {
    return Number.isInteger(index) && index >= 0 && index < this.todos.length;
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    if (this.valid(index)) this.todos.splice(index, 1);
  }
  update(index, todo) {
    if (this.valid(index)) this.todos[index] = todo;
  }
  get(index) {
    return this.valid(index) ? this.todos[index] : null;
  }
  getAll() {
    return [...this.todos];
  }
  clear() {
    this.todos = [];
  }
}
module.exports = Todo;
