const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = createTaskElement(taskText);
  todoList.appendChild(task);
  taskInput.value = "";
}

function createTaskElement(text) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.textContent = text;
  task.draggable = true;
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
  return task;
}

function allowDrop(event) {
  event.preventDefault();
  const board = event.currentTarget;
  board.classList.add("drag-over");
}

function drop(event) {
  event.preventDefault();
  const board = event.currentTarget;
  board.classList.remove("drag-over");
  const task = document.querySelector(".dragging");
  const taskList = board.querySelector(".task-list");
  taskList.appendChild(task);
}

function dragStart(event) {
  this.classList.add("dragging");
}

function dragEnd(event) {
  this.classList.remove("dragging");
  document.querySelectorAll(".board").forEach(board => board.classList.remove("drag-over"));
}
