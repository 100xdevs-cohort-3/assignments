
document.getElementById('pokemon-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const numCards = document.getElementById('num-cards').value;
    const category = document.getElementById('category').value;
    const cardsContainer = document.getElementById('pokemon-cards');
    cardsContainer.innerHTML = '';


    const response = await fetch(`https://pokeapi.co/api/v2/type/${category}`);
    const data = await response.json();
    const pokemonList = data.pokemon;


    for (let i = 0; i < numCards; i++) {
        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const pokemonId = pokemonList[randomIndex].pokemon.url.split('/').slice(-2, -1)[0];


        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const pokemonData = await pokemonResponse.json();


        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <h3>${pokemonData.name}</h3>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <p>Type: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
        `;
        cardsContainer.appendChild(card);
    }
});
