
// Get the form and card container elements
const form = document.getElementById('pokemon-form');
const cardContainer = document.getElementById('card-container');

// Add an event listener to the form submit button
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the user input values
  const numCards = document.getElementById('num-cards').value;
  const category = document.getElementById('category').value;

  // Make an API request to fetch Pokémon data
  fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then((response) => response.json())
    .then((data) => {
      // Filter the data by category
      const filteredData = data.results.filter((pokemon) => {
        return pokemon.types.includes(category);
      });

      // Render the Pokémon cards
      filteredData.forEach((pokemon) => {
        const card = document.createElement('div');
        card.innerHTML = `
          <h2>${pokemon.name}</h2>
          <img src="${pokemon.image}" alt="${pokemon.name}">
          <p>Type: ${pokemon.types.join(', ')}</p>
        `;
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => console.error(error));
});