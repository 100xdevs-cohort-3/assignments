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
  constructor(){
    this.todos = [];
  }

  add(todo){
    this.todos = [...this.todos, todo];
  }

  remove(indexOfTodo){
    this.todos = this.todos.filter((index) => index != indexOfTodo);
  }

  update(index, updatedTodo){
    this.todos[index] = updatedTodo;
  }

  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    return this.todos[indexOfTodo];
  }

  clear(){
    this.todos = [];
  }
}

const todos = new Todo();

todos.add({
  task: "Exercise",
  deadline: "Before 6"
})

const todo = todos.getAll();
console.log(todo);

module.exports = Todo;
