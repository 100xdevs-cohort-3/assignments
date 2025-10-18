const colorButtons = document.querySelectorAll(".color-btn");
const addColorBtn = document.getElementById("addColorBtn");
const colorInput = document.getElementById("colorInput");
const colorPanel = document.querySelector(".color-panel");

// Change background on color button click
colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;
    document.body.style.backgroundColor = color;
  });
});

// Add new color dynamically
addColorBtn.addEventListener("click", () => {
  const newColor = colorInput.value.trim();

  if (newColor === "") {
    alert("Please enter a valid color name or hex code!");
    return;
  }

  const newButton = document.createElement("button");
  newButton.classList.add("color-btn");
  newButton.style.backgroundColor = newColor;
  newButton.dataset.color = newColor;

  newButton.addEventListener("click", () => {
    document.body.style.backgroundColor = newColor;
  });

  colorPanel.appendChild(newButton);
  colorInput.value = "";
});
