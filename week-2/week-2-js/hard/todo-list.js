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
    this.todo = [];
  }
  add(todo){
    this.todo.push(todo)
    return this;
  }

  remove(indexOfTodo){
    this.todo.splice(indexOfTodo,1)
    return this;
  }

  update(index, updatedTodo){
    if (index < 0 || index >= this.todo.length) {
        return;
    }
    this.todo[index] = updatedTodo;
    return this;
  }

  getAll(){
    return this.todo;
    // console.log(this.todo)
  }
  get(indexOfTodo){
    if (indexOfTodo < 0 || indexOfTodo >= this.todo.length) {
        return null;
    }
    return this.todo[indexOfTodo]
    // console.log(this.todo[indexOfTodo])
  }
  clear(){
    this.todo = [];
    return this;
  }
}

// const task = new Todo()
// task.add('grocery')
// task.getAll()
// task.update(0,'laundry')
// task.getAll()
// task.get(0)
// task.remove(0)
// task.getAll()







module.exports = Todo;
