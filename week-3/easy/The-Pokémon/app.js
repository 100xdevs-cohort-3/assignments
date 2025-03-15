const btn = document.querySelector(".btn");
const inputText = document.querySelector(".input-val");
const mainContainer = document.querySelector(".data");
const imgData = [];

btn.addEventListener("click", async () => {
  const value = parseInt(inputText.value);
  inputText.value = "";

  const promises = [];
  for (let i = 1; i <= value; i++) {
    promises.push(getTheData(i));
  }

  await Promise.all(promises);

  displayDetails(imgData);
});

const getTheData = async (id) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const jsonData = await data.json();
  console.log(jsonData);

  const pokemanImgFront = jsonData?.sprites?.front_default;
  const pokemanImgBack = jsonData?.sprites?.back_default;
  imgData.push({ pokemanImgFront, pokemanImgBack });
};

const displayDetails = (data) => {
  const div = document.createElement("div");
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", data[i].pokemanImgFront);

    img.addEventListener("mouseenter", () => {
      img.setAttribute("src", data[i].pokemanImgBack);
    });
    img.addEventListener("mouseleave", () => {
      img.setAttribute("src", data[i].pokemanImgFront);
    });

    div.append(img);
  }
  mainContainer.appendChild(div);
};
