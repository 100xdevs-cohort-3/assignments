const key = 'week3-taskify';
let tasks;
try {
  tasks = JSON.parse(localStorage.getItem(key)) || [];
} catch {
  tasks = [];
}
if (!Array.isArray(tasks)) tasks = [];
const statuses = ['Todo', 'In progress', 'Done'];
function save() {
  try {
    localStorage.setItem(key, JSON.stringify(tasks));
  } catch {
    document.querySelector('#message').textContent =
      'Browser storage is unavailable; changes last for this session.';
  }
  render();
}
function move(id, status) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.status = status;
    save();
  }
}
function render() {
  const board = document.querySelector('#board');
  board.replaceChildren();
  for (const status of statuses) {
    const column = document.createElement('section');
    column.className = 'card';
    const heading = document.createElement('h2');
    heading.textContent = status + ' (' + tasks.filter((t) => t.status === status).length + ')';
    column.append(heading);
    column.ondragover = (event) => event.preventDefault();
    column.ondrop = (event) => {
      event.preventDefault();
      move(event.dataTransfer.getData('text/plain'), status);
    };
    for (const task of tasks.filter((task) => task.status === status)) {
      const card = document.createElement('article');
      card.draggable = true;
      card.ondragstart = (event) => event.dataTransfer.setData('text/plain', task.id);
      const title = document.createElement('p');
      title.textContent = task.title;
      const select = document.createElement('select');
      select.setAttribute('aria-label', 'Status for ' + task.title);
      statuses.forEach((value) => select.add(new Option(value, value)));
      select.value = status;
      select.onchange = () => move(task.id, select.value);
      const remove = document.createElement('button');
      remove.textContent = 'Delete';
      remove.className = 'danger';
      remove.onclick = () => {
        tasks = tasks.filter((t) => t.id !== task.id);
        save();
      };
      card.append(title, select, ' ', remove);
      column.append(card);
    }
    board.append(column);
  }
}
document.querySelector('#add').onsubmit = (event) => {
  event.preventDefault();
  const input = event.target.elements.title;
  if (input.value.trim()) {
    tasks.push({ id: crypto.randomUUID(), title: input.value.trim(), status: 'Todo' });
    input.value = '';
    save();
  }
};
render();
