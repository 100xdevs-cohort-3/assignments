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
    this.todos.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      console.log("Invalid index");
    }
  }
  update(indexOfTodo, updatedTodo) {
    if(indexOfTodo >= 0 && indexOfTodo < this.todos.length){
      this.todos[indexOfTodo] = updatedTodo;
    }
    else{
      console.log("Invalid Index");
    }
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todos.length){
      return this.todos[indexOfTodo];
    }
    else{
      console.log("Invalid Index");
    }
  }
  clear() {
    this.todos = [];
  }
}

const obj = new Todo();

obj.add("Complete Assignments");
console.log(obj.getAll());
obj.add("Learn Lesson");
console.log(obj.getAll());
obj.add("Self Study");
console.log(obj.getAll());
obj.add("Practice");
console.log(obj.getAll());

obj.remove(1);
console.log(obj.getAll());

obj.update(2 , "Play Time");
console.log(obj.getAll());

console.log("Getting all todos");
console.log(obj.getAll()); 



console.log(obj.get(0));

obj.clear();
console.log(obj.getAll());


module.exports = Todo;
