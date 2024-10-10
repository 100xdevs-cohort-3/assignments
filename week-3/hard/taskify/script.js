const taskInput = document.getElementById('task-input');
const addTask = document.getElementById('add-task-btn');
const tasks = document.querySelectorAll('.category .task-list');

addTask.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        createTask(taskText, 'todo');
        taskInput.value = '';
    }
})

function createTask(taskText, category) {
    const taskEle = document.createElement('div');
    taskEle.classList.add('task');
    taskEle.setAttribute('draggable', 'true');
    taskEle.innerHTML = `
        <span>${taskText}</span>
        <button class="doneButton">Done</button>
    `;
    
    taskEle.querySelector('.doneButton').addEventListener('click', () => {
        moveToDone(taskEle);
    });

    document.querySelector(`#${category} .task-list`).appendChild(taskEle);
    addDragEvents(taskEle);
}

function moveToDone(taskEle) {
    taskEle.querySelector('.doneButton').remove();

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteTask(taskEle)
    });

    taskEle.appendChild(deleteBtn);
    document.querySelector('#done .task-list').appendChild(taskEle);
}

function deleteTask(taskEle) {
    taskEle.remove();
}

function addDragEvents(taskEle) {
    taskEle.addEventListener('dragstart', () => {
        taskEle.classList.add('dragging');
    });

    taskEle.addEventListener('dragend', () => {
        taskEle.classList.remove('dragging');
    });

}

tasks.forEach(category => {
    category.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const draggingTask = document.querySelector('.dragging');
        category.appendChild(draggingTask)
    });

    category.addEventListener('dragenter', ()=>{
        category.classList.add('hovered');
    });

    category.addEventListener('dragleave', ()=>{
        category.classList.remove('hovered');
    });

    category.addEventListener('drop', ()=>{
        category.classList.remove('hovered');
    });
});
