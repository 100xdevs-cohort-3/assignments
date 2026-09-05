let token = sessionStorage.getItem('taskify-token') || '';
let todos = [];
const statuses = ['Todo', 'In progress', 'Done'];
const message = document.querySelector('#message');
async function api(path, method = 'GET', body) {
  const response = await fetch(path, {
    method,
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  if (!response.ok) {
    if (response.status === 401 && token) {
      token = '';
      sessionStorage.removeItem('taskify-token');
      showSession();
    }
    throw new Error(data.message || 'Request failed');
  }
  return data;
}
function showSession() {
  document.querySelector('#auth').hidden = !!token;
  document.querySelector('#workspace').hidden = !token;
  document.querySelector('#logout').hidden = !token;
}
async function load() {
  try {
    todos = (await api('/todo')).todos;
    render();
  } catch (error) {
    message.textContent = error.message;
  }
}
async function mutate(id, method, body) {
  try {
    await api('/todo/' + id, method, body);
    message.textContent = 'Saved.';
    await load();
  } catch (error) {
    message.textContent = error.message;
  }
}
function render() {
  const board = document.querySelector('#board');
  board.replaceChildren();
  const search = document.querySelector('#search').value.toLowerCase();
  for (const status of statuses) {
    const column = document.createElement('section');
    column.className = 'card';
    const heading = document.createElement('h2');
    heading.textContent = status;
    column.append(heading);
    column.ondragover = (event) => event.preventDefault();
    column.ondrop = (event) => {
      event.preventDefault();
      const id = event.dataTransfer.getData('text/plain');
      if (todos.some((t) => t._id === id)) mutate(id, 'PUT', { status });
    };
    for (const todo of todos.filter(
      (t) => t.status === status && (t.title + ' ' + t.description).toLowerCase().includes(search),
    )) {
      const card = document.createElement('article');
      card.draggable = true;
      card.ondragstart = (event) => event.dataTransfer.setData('text/plain', todo._id);
      const title = document.createElement('h3');
      title.textContent = todo.title;
      const detail = document.createElement('p');
      detail.textContent = todo.description;
      const select = document.createElement('select');
      select.setAttribute('aria-label', 'Status of ' + todo.title);
      statuses.forEach((s) => select.add(new Option(s, s)));
      select.value = status;
      select.onchange = () => mutate(todo._id, 'PUT', { status: select.value });
      const edit = document.createElement('button');
      edit.textContent = 'Edit';
      edit.className = 'secondary';
      edit.onclick = () => {
        const title = prompt('Task title', todo.title);
        if (title?.trim()) mutate(todo._id, 'PUT', { title: title.trim() });
      };
      const remove = document.createElement('button');
      remove.textContent = 'Delete';
      remove.className = 'danger';
      remove.onclick = () => mutate(todo._id, 'DELETE');
      card.append(title, detail, select, ' ', edit, ' ', remove);
      column.append(card);
    }
    board.append(column);
  }
}
document.querySelector('#auth').onsubmit = async (event) => {
  event.preventDefault();
  const button = event.submitter;
  button.disabled = true;
  try {
    const data = await api(
      '/user/' + (button.value || 'login'),
      'POST',
      Object.fromEntries(new FormData(event.target)),
    );
    token = data.token;
    sessionStorage.setItem('taskify-token', token);
    event.target.reset();
    message.textContent = data.message;
    showSession();
    await load();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
};
document.querySelector('#add').onsubmit = async (event) => {
  event.preventDefault();
  const button = event.target.querySelector('button');
  button.disabled = true;
  try {
    await api('/todo', 'POST', Object.fromEntries(new FormData(event.target)));
    event.target.reset();
    await load();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
};
document.querySelector('#logout').onclick = async () => {
  try {
    await api('/user/logout', 'POST');
    token = '';
    sessionStorage.removeItem('taskify-token');
    todos = [];
    showSession();
    message.textContent = 'Signed out.';
  } catch (error) {
    message.textContent = error.message;
  }
};
document.querySelector('#search').oninput = render;
showSession();
if (token) load();
