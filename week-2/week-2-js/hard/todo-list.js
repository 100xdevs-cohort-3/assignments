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
    this.todos = []
  }
  add(task){
    this.todos.push(task)
  }
  remove(idx){
    this.todos = this.todos.filter((todo, index) => index != idx)
  }
  update(idx, newTask){
    if(idx < this.todos.length){
      this.todos[idx] = newTask; 
    }
  }
  getAll(){
    return this.todos;
  }
  get(index){
    if(index < this.todos.length){
      return this.todos[index];
    }
    return null;
  }
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
