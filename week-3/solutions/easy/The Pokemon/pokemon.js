document
  .getElementById("pokemonform")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const numCards = document.getElementById("num-cards").value;

    // Replace with appropriate API endpoint based on category
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const requiredData = data.results.slice(0, numCards);
      const pokemanList = await Promise.all(
        requiredData.map(async (p) => {
          console.log("curr pokeman name: " + p.name);
          const currData = await getPokeManDetails(p);
          console.log(
            `curr detail ${currData.name} ${currData.weight} ${currData.order}`
          );
          return {
            name: currData.name,
            weight: currData.weight,
            order: currData.order,
            picture: currData.sprites?.front_default,
          };
        })
      );

      displayCards(pokemanList); // Adjust based on API response structure
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  });

async function getPokeManDetails(p) {
  let pokemanDetailUrl = `https://pokeapi.co/api/v2/pokemon/${p.name}`;

  try {
    const currResp = await fetch(pokemanDetailUrl);
    const data = await currResp.json();
    console.log("curr pokeman detail resp" + currResp);
    return data;
  } catch {
    console.error(`Error fetching pokeman detail ${p.name}`, error);
  }
}

function displayCards(cards) {
  const container = document.getElementById("cards-container");
  container.innerHTML = ""; // Clear previous cards
  console.log(cards[0].name);
  cards.forEach((card) => {
    const cardElement = SetCardAndItsDetails(card);
    container.appendChild(cardElement);
  });
}

function SetCardAndItsDetails(card) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";
  cardElement.style.border = "1px solid black";
  cardElement.style.borderRadius = "10%";
  cardElement.style.margin = "10px";
  cardElement.style.backgroundColor = "grey";
  cardElement.style.padding = "10px";

  //add image as header
  const imageEle = document.createElement("img");
  imageEle.setAttribute("src", `${card.picture}`);
  imageEle.style.borderRadius = "10%";
  imageEle.className = "card-image";
  imageEle.style.display = "flex";
  imageEle.style.justifyContent = "center";
  imageEle.style.alignItems = "center";
  imageEle.style.content = "100%";
  imageEle.style.objectFit = "cover";
  imageEle.style.width = "80%";
  imageEle.style.height = "80%";
  imageEle.style.margin = "auto auto";
  imageEle.style.border = "1px solid black";
  imageEle.style.backgroundColor = "lightskyblue";

  //add name under image
  const nameEle = document.createElement("div");
  nameEle.innerHTML = `<h3>${card.name}</h3>`;
  nameEle.style.color = "black";
  nameEle.style.fontSize = "20px";
  nameEle.style.textAlign = "center";
  nameEle.style.margin = "auto";

  //add details under name
  const detailEle = document.createElement("div");
  detailEle.className = "card-detail";
  detailEle.style.display = "flex";
  detailEle.style.justifyContent = "space-evenly";
  detailEle.style.alignItems = "flex-start";
  detailEle.style.flexDirection = "row";

  const weightEle = document.createElement("div");
  weightEle.innerHTML = `Weight: ${card.weight}`;
  weightEle.style.margin = "5px";
  const heightElr = document.createElement("div");
  heightElr.innerHTML = `Order: ${card.order}`;
  heightElr.style.margin = "5px";
  detailEle.appendChild(weightEle);
  detailEle.appendChild(heightElr);

  //add all childs
  cardElement.appendChild(imageEle);
  cardElement.appendChild(nameEle);
  cardElement.appendChild(detailEle);
  return cardElement;
  console.log(cardElement);
}

const inputEle = document.getElementById("num-cards");
inputEle.addEventListener("input", () => {
  if (inputEle.value) {
    inputEle.style.borderColor = "red";
  } else {
    inputEle.style.borderColor = "";
  }
});
