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
      this.todos = []; // Initialize an empty array to store todos
  }

  // Adds a new todo to the list
  add(todo) {
      this.todos.push(todo);
  }

  // Removes a todo from the list by index
  remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          this.todos.splice(indexOfTodo, 1); // Remove the todo at the given index
      } else {
          console.log('Invalid index');
      }
  }

  // Updates a todo at the given index
  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      } else {
          console.log('Invalid index');
      }
  }

  // Returns all todos
  getAll() {
      return this.todos;
  }

  // Returns a todo at the given index
  get(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          return this.todos[indexOfTodo];
      } else {
          console.log('Invalid index');
          return null;
      }
  }

  // Clears all todos
  clear() {
      this.todos = [];
  }
}

module.exports = Todo;
