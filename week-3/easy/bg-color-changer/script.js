const buttonContainer = document.querySelector(".button-container");
const changeBgButtons = document.querySelectorAll(".change-bg-button");
const addColorButton = document.querySelector(".add-color");
const deleteColorBtn = document.querySelector(".delete-color");
const modalContainer = document.querySelector(".modal-container");
const saveDisplay = document.querySelector(".save-display");

changeBgButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const body = document.body;
        const color = e.target.dataset.color;
        body.style.backgroundColor = color;
    });
});

addColorButton.addEventListener("click", (e) => {
    modalContainer.classList.remove("hidden");
});

deleteColorBtn.addEventListener("click", (e) => {
    document
        .querySelectorAll(".remove-color-button")
        .forEach((btn) => btn.classList.remove("hidden"));
    saveDisplay.classList.remove("hidden");
});

buttonContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-color-button")) {
        const colorButton = e.target.closest(".color-button");
        if (colorButton) {
            colorButton.remove();
        }
    }
});

saveDisplay.addEventListener("click", (e) => {
    document
        .querySelectorAll(".remove-color-button")
        .forEach((btn) => btn.classList.add("hidden"));
    saveDisplay.classList.add("hidden");
});

function addColor() {
    const colorName = document.querySelector("#color-name");
    const colorShade = document.querySelector("#color-shade");

    const nameValue = colorName.value;
    const shadeValue = colorShade.value;

    addButton(nameValue, shadeValue);
    closeModal();
}

function closeModal() {
    modalContainer.classList.add("hidden");
}

function addButton(color, shade) {
    const colorButton = document.createElement("div");
    colorButton.classList.add("color-button");

    const changeBgButton = document.createElement("button");
    changeBgButton.classList.add("change-bg-button");
    changeBgButton.textContent = color;
    changeBgButton.style.backgroundColor = shade
    changeBgButton.setAttribute("data-color", shade);

    changeBgButton.addEventListener("click", (e) => {
        document.body.style.backgroundColor = e.target.dataset.color;
    });

    const removeColorButton = document.createElement("button");
    removeColorButton.classList.add("remove-color-button");
    removeColorButton.textContent = "❌";
    removeColorButton.classList.add("hidden");

    colorButton.appendChild(changeBgButton);
    colorButton.appendChild(removeColorButton);

    buttonContainer.appendChild(colorButton);
}
