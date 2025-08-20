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
    add(task) {
        this.todo.push(task);
    }
    remove(indexOfTodo) {
        this.todo = this.todo.filter((task) => task !== this.todo[indexOfTodo]);
    }
    update(index, task) {
        if (index >= 0 && index < this.todo.length) {
            this.todo[index] = task;
        }
    }
    getAll() {
        return this.todo;
    }
    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
            return this.todo[indexOfTodo];
        }else{
            return null
        }
    }
    clear() {
        this.todo = [];
    }
}

const todo = new Todo();

//add
todo.add("Complete Week 3 assignment");
todo.add("Complete Week 4 assignment");
todo.add("Complete Week 5 assignment");
todo.add("Complete Week 6 assignment");
console.log(todo.getAll());

//remove
todo.remove(1);
console.log(todo.getAll());

//update
todo.update(2, "Watch Cohort videos");
console.log(todo.getAll());

//get task
console.log(todo.get(2));

//clear todo
todo.clear();
console.log(todo.getAll());

module.exports = Todo;
