async function fetchData(event){
    event.preventDefault();
    let poke = [];

    const container = document.getElementById('container');

    // If container has previous child nodes
    if(container.hasChildNodes){
        //remove child nodes
        container.innerHTML = '';
    }

    // Get Type value
    let inputType = document.getElementById('type').value;
    inputType = inputType.toLowerCase();

    // Get Number of pokemons
    const number = document.getElementById('number').value;

    // Size cannot be more than hundred
    if(number > 100){
        alert("Number value shouldn't be more than 100");
        return;
    }

    // Input is empty or not
    if(!(inputType && number)){
        alert("Input data shouldn't be empty");
        return
    }

    // Fetch Information
    await fetch(`https://pokeapi.co/api/v2/type/${inputType}`)
    .then(response => response.json())
    .then((data)=> {
        for(let i = 0; i < number; i++){
            poke.push(data.pokemon[i]);
        }
    })

    // Render elements
    poke.forEach(element => {
        const card = document.createElement("p");
        card.setAttribute("class", card);
        card.innerText = element.pokemon.name

        container.appendChild(card);
    });
}