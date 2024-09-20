const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

const TODO_FILE = "todo.json";

function loadTodos() {
  const data = fs.readFileSync(TODO_FILE, "utf8");
  if (data.length > 0) {
    return JSON.parse(data);
  }
  return [];
}

function saveTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}
program
  .command("add <task>")
  .description("add a new todo")
  .action((task) => {
    const todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(`Added todo:${task}`);
  });
program
  .command("delete <index>")
  .description("deletes a todo")
  .action((index) => {
    const todos = loadTodos();
    if (index >= 0 && index < todos.length) {
      const removed = todos.splice(index, 1);
      saveTodos(todos);
      console.log(`Deleted todo: "${removed[0].task}"`);
    } else {
      console.error("Invalid index");
    }
  });
program
  .command("done <index>")
  .description("Mark a todo as done")
  .action((index) => {
    const todos = loadTodos();
    if (index >= 0 && index < todos.length) {
      todos[index].done = true;
      saveTodos(todos);
      console.log(`Marked todo as done: "${todos[index].task}"`);
    } else {
      console.error("Invalid index");
    }
  });
program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log("No todos found");
    } else {
      todos.forEach((todo, index) => {
        console.log(`${index}: ${todo.task} [${todo.done ? "x" : " "}]`);
      });
    }
  });
program.parse();
