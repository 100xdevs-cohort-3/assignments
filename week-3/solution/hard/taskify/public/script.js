document.getElementById("add-task-btn").addEventListener("click", () => {
    const taskInput = document.getElementById('task-input').value;
    const parentBody = document.getElementById("todo-tasks");

    if(taskInput){
        const taskElement = document.createElement("div")
        taskElement.className = "task"
        taskElement.draggable = true
        taskElement.textContent = taskInput

        taskElement.addEventListener("dragstart", dragStart)
        taskElement.addEventListener("dragend", dragEnd)

        parentBody.appendChild(taskElement)

        taskInput.value = '';
    }
})

let draggedTask = null;

function dragStart(event) {
    draggedTask = event.target;
    setTimeout(() => {
        event.target.style.display = 'none';
    }, 0);
}

function dragEnd(event) {
    setTimeout(() => {
        event.target.style.display = 'block';
        draggedTask = null;
    }, 0);
}

function dragOver(event){
    event.preventDefault()
}

function dragEnter(event){
    event.preventDefault()
    event.target.classList.add("over")
}

function dragLeave(event){
    event.target.classList.remove("over")
}

function drop(event){
    event.preventDefault()
    event.target.classList.remove("over")

    if(event.target.classList.contains("tasks")){
        event.target.appendChild(draggedTask)
    }
}

const taskContainers = document.querySelectorAll(".tasks")

taskContainers.forEach((container) => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', drop);
})