const message = document.querySelector('#message');
let allItems = [];
async function api(path, method = 'GET', body) {
  const response = await fetch(path, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(data?.message || 'Request failed');
  return data;
}
async function load() {
  try {
    allItems = await api('/todos');
    render();
  } catch (error) {
    message.textContent = error.message;
  }
}
async function mutate(path, method, body) {
  try {
    await api(path, method, body);
    message.textContent = 'Saved.';
    await load();
  } catch (error) {
    message.textContent = error.message;
  }
}
function render() {
  const target = document.querySelector('#items');
  target.replaceChildren();
  const query = document.querySelector('#search').value.toLowerCase();
  const items = allItems.filter((item) => item.task.toLowerCase().includes(query));
  if (!items.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No tasks found.';
    target.append(empty);
  }
  for (const item of items) {
    const card = document.createElement('article');
    card.className = 'row';
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.onchange = () => mutate('/todos/' + item.id, 'PUT', { completed: checkbox.checked });
    label.append(checkbox, item.task);
    if (item.completed) label.style.textDecoration = 'line-through';
    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.className = 'secondary';
    edit.onclick = () => {
      const task = prompt('Edit task', item.task);
      if (task?.trim()) mutate('/todos/' + item.id, 'PUT', { task });
    };
    card.append(label, edit);
    const remove = document.createElement('button');
    remove.textContent = 'Delete';
    remove.className = 'danger';
    remove.onclick = () => mutate('/todos/' + item.id, 'DELETE');
    card.append(remove);
    target.append(card);
  }
}
document.querySelector('#add').onsubmit = async (event) => {
  event.preventDefault();
  const button = event.target.querySelector('button');
  button.disabled = true;
  try {
    await api('/todos', 'POST', Object.fromEntries(new FormData(event.target)));
    event.target.reset();
    await load();
    message.textContent = 'Added.';
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
};
document.querySelector('#search').oninput = render;

load();
