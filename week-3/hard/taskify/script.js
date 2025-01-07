let todoCount = 0;
let currentEl = null;

function addTodo(category) {
  const title = prompt("Enter Todo Title: ");
  const desc = prompt("Enter description Title: ");

  if (!title || title.trim() === "") return;
  if (!desc || desc.trim() === "") return;

  document
    .getElementById(category)
    .children[1].appendChild(TodoComponent(title, desc));
}

document.onmousemove = (e) => {
  if (!currentEl) return;

  const x = e.clientX;
  const y = e.clientY;

  currentEl.style.top = y + "px";
  currentEl.style.left = x + "px";

  document.onmouseup = () => {
    changeCategory(e, currentEl);
    currentEl.style.position = "static";
    currentEl = null;
  };
};

function changeCategory(e) {
  const inProgressRange = document.getElementById("in-progress").offsetLeft;
  const underReviewRange = document.getElementById("under-review").offsetLeft;
  const finishedRange = document.getElementById("finished").offsetLeft;

  currentEl.parentElement.removeChild(currentEl);

  if (e.clientX > 0 && e.clientX < inProgressRange) {
    document.getElementById("to-do").children[1].appendChild(currentEl);
  } else if (e.clientX > inProgressRange && e.clientX < underReviewRange) {
    document.getElementById("in-progress").children[1].appendChild(currentEl);
  } else if (e.clientX > underReviewRange && e.clientX < finishedRange) {
    document.getElementById("under-review").children[1].appendChild(currentEl);
  } else if (e.clientX > finishedRange) {
    document.getElementById("finished").children[1].appendChild(currentEl);
  }
}

function TodoComponent(title, desc) {
  const todoContainer = document.createElement("div");
  const todoTitle = document.createElement("span");
  const todoDesc = document.createElement("span");

  todoContainer.classList.add("todo");

  todoTitle.classList.add("todo-heading");
  todoDesc.classList.add("todo-desc");

  todoContainer.id = todoCount;

  todoContainer.addEventListener("mousedown", () => {
    currentEl = todoContainer;
    currentEl.style.position = "absolute";
  });

  todoTitle.innerHTML = title;
  todoDesc.innerHTML = desc;

  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoDesc);

  todoCount++;
  return todoContainer;
}
