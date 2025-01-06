function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function addButton() {
  const buttonLists = document.querySelector("#colorSwitches");
  const newColor = document.querySelector("input").value;

  const newBtn = document.createElement("button");
  newBtn.setAttribute("onclick", `changeColor('${newColor}')`);
  newBtn.style.backgroundColor = newColor;

  newBtn.innerHTML = newColor;

  buttonLists.prepend(newBtn);
}
