const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const TODO_FILE = 'todos.json';

function loadTodos() {
    if (fs.existsSync(TODO_FILE)) {
        const data = fs.readFileSync(TODO_FILE, 'utf-8');
        
        // Check if the file contains data
        if (data.trim()) {
            // If data is not an empty string, parse and return it
            return JSON.parse(data);
        }
    }
    // Return an empty array if the file doesn't exist or is empty
    return [];
}

function saveTodos(todos) {
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 4));
}

program
  .name('todo')
  .description('CLI to manage your todo list')
  .version('1.0.0');


  program.command('add')
  .description('Add a new todo')
  .argument('<task>', 'The todo to be added')
  .action((task) => {
    const todos = loadTodos();
    todos.push({ task, done : false});
    saveTodos(todos);
    console.log(`Added todo: "${task}"`);
  });


program.command('delete')
.description('Delete a todo')
.argument('<index>', 'Index of the todo to delete')
.action((index) => {
    const todos = loadTodos();
    const todoIndex = parseInt(index, 10) - 1;
    if (todoIndex >= 0 && todoIndex < todos.length) {
        const removed = todos.splice(todoIndex, 1);
        saveTodos(todos);
        console.log(`Deleted todo: "${removed[0].task}"`);
      } else {
        console.log('Invalid index');
      }
}); 
 

program.command('done')
  .description('Mark a todo as done')
  .argument('<index>', 'Index of the todo to mark as done')
  .action((index) => {
    const todos = loadTodos();
    const todoIndex = parseInt(index, 10) - 1;
    if (todoIndex >= 0 && todoIndex < todos.length) {
      todos[todoIndex].done = true;
      saveTodos(todos);
      console.log(`Marked todo as done: "${todos[todoIndex].task}"`);
    } else {
      console.log('Invalid index');
    }
  });

  program.command('list')
  .description('List all todos')
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('No todos found.');
    } else {
      todos.forEach((todo, index) => {
        const status = todo.done ? '[✔]' : '[ ]';
        console.log(`${index + 1}. ${status} ${todo.task}`);
      });
    }
  });


program.parse();
 

