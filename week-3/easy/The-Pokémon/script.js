async function fetchPokemons() {
  document.querySelector("#pokemons").innerHTML = "";

  const selectedCategory = document.querySelector("input:checked").id;
  const limit = document.querySelector("#limit").value;

  if (limit < 1) return;

  const pokemons = await fetch(
    `https://pokeapi.co/api/v2/type/${selectedCategory}?limit=${limit}`
  )
    .then((response) => response.json())
    .then((data) => data.pokemon);

  pokemons.splice(limit);

  pokemons.forEach(async (pokemon) => {
    document
      .querySelector("#pokemons")
      .appendChild(await CardComponent(pokemon.pokemon));
  });
}

async function CardComponent(pokemon) {
  const pokemonData = await fetch(pokemon.url).then((response) =>
    response.json()
  );

  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("id", "card");

  const pokemonName = document.createElement("h1");
  const pokemonImage = document.createElement("img");

  pokemonName.classList.add("pokemonName");
  pokemonName.innerHTML = pokemonData.species.name;

  pokemonImage.classList.add("pokemonImage");
  pokemonImage.src = pokemonData.sprites.front_default;

  cardContainer.appendChild(pokemonName);
  cardContainer.appendChild(pokemonImage);

  return cardContainer;
}
