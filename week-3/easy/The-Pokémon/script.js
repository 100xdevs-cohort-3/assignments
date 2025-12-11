let score = 0;

function startPokemon() {
  document.querySelector("#input").innerHTML = ""
  document.querySelector("#pokemon-list").innerHTML = ""
  document.querySelector("#input").appendChild(submitPokemonId())
}

function submitPokemonId() {
  const div = document.createElement("div");
  const form = document.createElement("form");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const button = document.createElement("button");
  label.setAttribute("for", "pokemonId")
  label.innerHTML = "Enter pokemon id"
  input.setAttribute("id", "pokemonId")
  input.setAttribute("placeholder", "Enter pokemon id")
  button.innerHTML = "Submit"
  button.type = "button";
  button.addEventListener("click", () => pokemonComponent(input.value));
  form.appendChild(label)
  form.appendChild(input)
  form.appendChild(button)
  div.appendChild(form)
  return div
}

async function pokemonComponent(id) {
  console.log(id)
  document.querySelector("#pokemon-list").innerHTML = ""
    try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-form/" + id + "/");
    const pokemonData = await response.json();  // <-- JSON stored here
    const h1 = document.createElement("h1");
    const imgFront = document.createElement("img");
    const imgBack = document.createElement("img");
    h1.innerHTML = pokemonData.pokemon.name;
    imgFront.setAttribute("src", pokemonData.sprites.front_default)
    imgBack.setAttribute("src", pokemonData.sprites.back_default)
    document.querySelector("#pokemon-list").appendChild(h1)
    document.querySelector("#pokemon-list").appendChild(imgFront)
    document.querySelector("#pokemon-list").appendChild(imgBack)
  } catch (err) {
    console.error("Error fetching Pokémon data:", err);
  }  
}

// Attach event listener in JavaScript (module-safe)
document.getElementById("start-btn").addEventListener("click", startPokemon);