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

  add(todo){
    this.todos.push(todo)
  }

  remove(indexOfTodo){

    try{
      if(indexOfTodo < 0 || indexOfTodo >= this.todos.length){
        throw new Error('Invalid Index');
      }
      this.todos.splice(indexOfTodo, 1)
    }catch(e){
      console.log(e.message);
    }
   
  }

  update(index, updatedTodo){

    try{
      if(index < 0 || index >= this.todos.length){
        throw new Error('Invalid Index');
      }
      this.todos[index] = updatedTodo;
    }catch(e){
      console.log(e.message);
    }

  }

  getAll(){
    return this.todos;
  }

  get(indexOfTodo){
    return this.todos[indexOfTodo] || null;
    //Short circuit
  }

  clear(){
    this.todos.splice(0, this.todos.length)
  }
  
}


// class Todo {
//   constructor() {
//       this.todos = [];
//   }

//   add(todo) {
//       this.todos.push(todo);
//   }

//   remove(indexOfTodo) {
//     this.todos.splice(indexOfTodo, 1);
//   }

//   update(index, updatedTodo) {
//       if (index < 0 || index >= this.todos.length) {
//           return;
//       }
//       this.todos[index] = updatedTodo;
//   }

//   getAll() {
//       return this.todos;
//   }

//   get(indexOfTodo) {
//       if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
//           return null;
//       }
//       return this.todos[indexOfTodo];
//   }

//   clear() {
//       this.todos = [];
//   }
// }



const myTodo = new Todo();

// myTodo.add('task1')
// myTodo.add('task2')
// myTodo.add('task3')
// myTodo.add('task4')
// myTodo.add('task5')
// console.log(myTodo.getAll());
// console.log(myTodo.remove(13));
// console.log(myTodo.getAll());
// console.log(myTodo.update(2, 'newtask'))
// console.log(myTodo.getAll());
console.log(myTodo.get(3));






module.exports = Todo;
