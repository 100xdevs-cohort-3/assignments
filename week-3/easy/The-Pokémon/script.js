const form = document.querySelector('form');
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('The Pokémon service is unavailable. Please retry.');
  return response.json();
}
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = document.querySelector('#status');
  const cards = document.querySelector('#cards');
  const button = form.querySelector('button');
  button.disabled = true;
  status.textContent = 'Finding Pokémon…';
  cards.replaceChildren();
  try {
    const count = Math.min(30, Math.max(1, Number(document.querySelector('#count').value)));
    const type = await fetchJson(
      'https://pokeapi.co/api/v2/type/' + document.querySelector('#type').value,
    );
    const results = await Promise.all(
      type.pokemon.slice(0, count).map(({ pokemon }) => fetchJson(pokemon.url)),
    );
    for (const pokemon of results) {
      const card = document.createElement('article');
      const image = document.createElement('img');
      image.src = pokemon.sprites.front_default || '';
      image.alt = pokemon.name;
      image.width = 150;
      image.height = 150;
      const title = document.createElement('h2');
      title.textContent = pokemon.name;
      const detail = document.createElement('p');
      detail.textContent =
        '#' +
        pokemon.id +
        ' · ' +
        pokemon.types.map((item) => item.type.name).join(', ') +
        ' · ' +
        pokemon.weight / 10 +
        ' kg';
      card.append(image, title, detail);
      cards.append(card);
    }
    status.textContent = results.length + ' Pokémon found.';
  } catch (error) {
    status.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
