const root = document.querySelector(".root");
const allButtons = document.querySelectorAll(".btn");
const inputBtn = document.querySelector("#input-btn");
const inputText = document.querySelector("#input");

allButtons.forEach((eachBtn) => {
  eachBtn.addEventListener("click", (event) => {
    event.target.innerHTML == "Default"
      ? (root.style.backgroundColor = "white")
      : (root.style.backgroundColor = eachBtn.innerHTML);
  });
});

inputBtn.addEventListener("click", () => {
  root.style.backgroundColor = inputText.value;
  inputText.value = "";
});
