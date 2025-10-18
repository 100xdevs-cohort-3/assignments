const fetchBtn = document.getElementById("fetchBtn");
const pokemonContainer = document.getElementById("pokemonContainer");

fetchBtn.addEventListener("click", async () => {
  const count = parseInt(document.getElementById("pokemonCount").value);
  const type = document.getElementById("pokemonType").value;

  if (!count || count <= 0) {
    alert("Please enter a valid number of Pokémon!");
    return;
  }

  pokemonContainer.innerHTML = "<p>Loading Pokémon...</p>";

  const pokemons = [];

  for (let i = 1; i <= count; i++) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await res.json();
      pokemons.push(data);
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
    }
  }

  displayPokemons(pokemons, type);
});

function displayPokemons(pokemons, typeFilter) {
  pokemonContainer.innerHTML = "";

  const filtered = typeFilter === "all"
    ? pokemons
    : pokemons.filter(p =>
        p.types.some(t => t.type.name === typeFilter)
      );

  if (filtered.length === 0) {
    pokemonContainer.innerHTML = `<p>No Pokémon found for type "${typeFilter}"</p>`;
    return;
  }

  filtered.forEach(pokemon => {
    const types = pokemon.types.map(t => t.type.name).join(", ");
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h3 class="pokemon-name">${pokemon.name}</h3>
      <p class="pokemon-type">Type: ${types}</p>
    `;
    pokemonContainer.appendChild(card);
  });
}
