document.getElementById("pokemonForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const numPokemon = parseInt(document.getElementById("numPokemon").value, 10); // Parse as integer
    const category = document.getElementById("category").value;
    const container = document.getElementById("pokemonContainer");
    const messageContainer = document.getElementById("messageContainer");

    if (!numPokemon) {
        messageContainer.innerText = "Please enter a number to generate cards";
        return;
    }

    container.innerHTML = "";
    messageContainer.innerText = "Loading Pokémon... Please wait.";

    try {
        const pokemonCards = await fetchUniquePokemon(numPokemon, category);

        if (pokemonCards.length === 0) {
            container.innerHTML = `<p>No Pokémon found for the selected category.</p>`;
            messageContainer.textContent = "No Pokémon found.";
        } else {
            pokemonCards.forEach(card => container.appendChild(card));
            messageContainer.textContent = "Pokémon cards loaded successfully!";
        }
    } catch (error) {
        console.error("Error fetching and displaying Pokémon:", error);
        container.innerHTML = `<p>An error occurred while loading Pokémon. Please try again.</p>`;
        messageContainer.textContent = "Error loading Pokémon.";
    } finally {
        setTimeout(() => (messageContainer.textContent = ""), 5 * 1000);
    }
});

const cache = {}; // Simple in-memory cache

async function fetchUniquePokemon(numPokemon, category) {
    const pokemonCards = [];
    const fetchedPokemon = new Set(); // Use a Set to track fetched IDs
    let id = Math.floor(Math.random()) + 1;

    while (pokemonCards.length < numPokemon && id <= 1000) {
        try {
            // Check cache first
            if (cache[id]) {
                const data = cache[id];
                if (data.types.some(type => type.type.name === category)) {
                    if (!fetchedPokemon.has(id)) { //Ensure pokemon is unique
                        const card = createPokemonCard(data);
                        pokemonCards.push(card);
                        fetchedPokemon.add(id);
                    }

                }
            } else {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                cache[id] = data; // Store data in cache

                if (data.types.some(type => type.type.name === category)) {
                    if (!fetchedPokemon.has(id)) { //Ensure pokemon is unique
                        const card = createPokemonCard(data);
                        pokemonCards.push(card);
                        fetchedPokemon.add(id);
                    }

                }
            }


        } catch (err) {
            console.error(`Failed to process Pokémon with ID ${id}: `, err);
        }
        id++;
    }

    return pokemonCards;
}

function createPokemonCard(data) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    img.alt = data.name;
    img.onerror = () => { img.src = 'path/to/default/image.png'; }; // Handle image loading errors

    const name = document.createElement("h3");
    name.textContent = data.name;

    const type = document.createElement("p");
    type.textContent = `Type: ${data.types.map(t => t.type.name).join(", ")}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(type);

    return card;
}