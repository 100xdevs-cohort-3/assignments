const todoInfo = document.getElementById('todo-info');
const progressInfo = document.getElementById('progress-info');
const reviewInfo = document.getElementById('review-info');
const finishedInfo = document.getElementById('finished-info');
let number = 1;
function addTodo(name){
    const info = document.getElementById(name+"-info");
    const todo = document.createElement("div");
    todo.setAttribute("class", "todo");
    todo.setAttribute("draggable", true)
    
    const p = document.createElement('p');
    p.innerText = "Hello this is todo " + number++;

    todo.appendChild(p);
    info.appendChild(todo);

    todo.addEventListener('dragstart', (e) => {
        let selected = e.target;
        console.log(selected);

        todoInfo.addEventListener("dragover", (e) => {
            e.preventDefault();
        })
        todoInfo.addEventListener('drop', () => {
            todoInfo.appendChild(selected);
            selected = null;
        })

        finishedInfo.addEventListener('dragover', (e) => {
            e.preventDefault();
        })
        finishedInfo.addEventListener('drop', () => {
            finishedInfo.appendChild(selected);
            selected = null;
        })

        reviewInfo.addEventListener("dragover", (e) => {
            e.preventDefault();
        })
        reviewInfo.addEventListener('drop', () => {
            reviewInfo.appendChild(selected);
            selected = null;
        })

        progressInfo.addEventListener("dragover", (e) => {
            e.preventDefault();
        })
        progressInfo.addEventListener('drop', () => {
            progressInfo.appendChild(selected);
            selected = null;
        })
    })
}
