const pokemonType = document.getElementById('pokemon-type');
const pokemonNumber = document.getElementById('pokemon-number');
const cardsContainer = document.getElementById('cards-container');



const emptyGif = document.createElement('img');
emptyGif.src = 'https://i.gifer.com/embedded/download/E47O.gif'; // Example GIF URL
emptyGif.alt = 'Pikachu GIF';
emptyGif.classList.add('mx-auto', 'rounded-lg');

const checkAndShowGif = () => {
  if (cardsContainer.children.length === 0) {
    cardsContainer.appendChild(emptyGif);
  }
};

// Call the function to check and show the GIF if the container is empty
checkAndShowGif();

const loadingGif = document.createElement('img');
  loadingGif.src = 'https://media.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif'; // Example GIF URL
  loadingGif.alt = 'Pikachu GIF';
  loadingGif.classList.add('mx-auto');

 
const getPokemon = async () => {
  cardsContainer.innerHTML = '';
  cardsContainer.appendChild(loadingGif);

  

  const type = pokemonType.value.toLowerCase();
  const count = pokemonNumber.value;

    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
    
    const data = await response.json();

    const pokeNames = data.pokemon;

    cardsContainer.removeChild(loadingGif);
    cardsContainer.innerHTML = '';
    for (let i = 0; i < count; i++) {

      

      let pokeUrl=pokeNames[i].pokemon.url;
      let pokeData=await fetch(pokeUrl);
      let pokeJson=await pokeData.json();


      // console.log(pokeJson);


      let pokeDetails = {
        pokeName: pokeJson.name.charAt(0).toUpperCase() + pokeJson.name.slice(1),
        pokeType: pokeJson.types[0].type.name.charAt(0).toUpperCase() + pokeJson.types[0].type.name.slice(1),
        pokeImage: pokeJson.sprites.front_default,
        pokeHP: pokeJson.stats.find(obj => obj.stat.name === 'hp').base_stat,
        pokeAttack: pokeJson.stats.find(obj=>obj.stat.name==='attack').base_stat,
        pokeDefense: pokeJson.stats.find(obj=>obj.stat.name==='defense').base_stat,
      }

    

      
      const cardWrapper = document.createElement('div');
      cardWrapper.classList.add('mb-4');

      cardWrapper.innerHTML= `
      <div class="pokemon-card bg-white rounded-lg shadow-md p-2 mt-2 w-[95%] mx-auto flex justify-around h-fit">

        <img src="${pokeDetails.pokeImage}" alt="Bulbasaur" 
        class="w-[50%] h-[150px] object-contain">
        
        <div class="flex flex-col w-[50%]">
          <h2 class="text-xl truncate font-bold text-gray-800 mt-2">${pokeDetails.pokeName}</h2>
        <p class="text-gray-600">Type: ${pokeDetails.pokeType}</p>
        <p class="text-gray-600">HP: ${pokeDetails.pokeHP}</p>
        <p class="text-gray-600">Attack: ${pokeDetails.pokeAttack}</p>
        <p class="text-gray-600">Defence: ${pokeDetails.pokeDefense}</p>
        </div>
      </div>
      `

      

      cardsContainer.appendChild(cardWrapper);
      

    }


}


