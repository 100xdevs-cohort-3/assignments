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
    allItems = await api('/bookmarks');
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
  const items = allItems.filter(
    (item) =>
      (item.category + ' ' + item.url).toLowerCase().includes(query) &&
      (!document.querySelector('#favorites').checked || item.favorite),
  );
  if (!items.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No bookmarks found.';
    target.append(empty);
  }
  for (const item of items) {
    const card = document.createElement('article');
    card.className = 'row';
    const link = document.createElement('a');
    link.href = item.url;
    link.textContent = item.category + ' — ' + item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const favorite = document.createElement('button');
    favorite.className = 'secondary';
    favorite.textContent = item.favorite ? '★ Unfavorite' : '☆ Favorite';
    favorite.setAttribute('aria-pressed', item.favorite);
    favorite.onclick = () =>
      mutate('/bookmarks/' + item.id + '/favorite', 'PATCH', { favorite: !item.favorite });
    card.append(link, favorite);
    const remove = document.createElement('button');
    remove.textContent = 'Delete';
    remove.className = 'danger';
    remove.onclick = () => mutate('/bookmarks/' + item.id, 'DELETE');
    card.append(remove);
    target.append(card);
  }
}
document.querySelector('#add').onsubmit = async (event) => {
  event.preventDefault();
  const button = event.target.querySelector('button');
  button.disabled = true;
  try {
    await api('/bookmarks', 'POST', Object.fromEntries(new FormData(event.target)));
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
document.querySelector('#favorites').onchange = render;
load();
