const textInput = document.querySelector("#text-input");
const checkbox = document.querySelector("#checkbox");
const radioButton = document.querySelector("#radio-button");
const submitButton = document.querySelector("#submit-button");
const addTextInputButton = document.querySelector(".add-text-input-button");
const addCheckbox = document.querySelector(".add-checkbox");
const formPreview = document.querySelector(".form-preview");
const textInputModel = document.querySelector(".text-input-model");
const checkboxModel = document.querySelector(".checkbox-model");
const addCheckboxLabel = document.querySelector(".add-checkbox-label");
const radioButtonModel = document.querySelector(".radio-button-model");
const addRadioLabel = document.querySelector(".add-radio-label");
const addRadioButton = document.querySelector(".add-radio-button");

textInput.addEventListener("click", (e) => {
    textInputModel.classList.remove("hidden");
});

checkbox.addEventListener("click", (e) => {
    checkboxModel.classList.remove("hidden");
});

addTextInputButton.addEventListener("click", (e) => {
    const textLabel = document.querySelector("#text-label").value;
    const textOption = document.querySelector("#text-options").value;
    const textInputDivision = document.createElement("div");
    const textInputLabel = document.createElement("label");
    textInputLabel.textContent = textLabel;
    const textInputType = document.createElement("input");
    textInputType.setAttribute("type", textOption);

    textInputDivision.appendChild(textInputLabel);
    textInputDivision.appendChild(textInputType);

    textInputDivision.classList.add("text-input-division");
    formPreview.appendChild(textInputDivision);

    document.querySelector("#text-label").value = "";
    document.querySelector("#text-options").value = "text";

    textInputModel.classList.add("hidden");
});

addCheckbox.addEventListener("click", (e) => {
    const checkboxDivision = document.createElement("div");
    checkboxDivision.classList.add("checkbox-input-division");

    const checkboxLabel = document.querySelector("#checkbox-label").value;
    const checkboxItems = document.querySelector(".checkbox-items").children;

    const checkboxTitle = document.createElement("label");
    checkboxTitle.textContent = checkboxLabel;

    checkboxDivision.appendChild(checkboxTitle);

    for (let i = 0; i < checkboxItems.length; i++) {
        const element = checkboxItems[i];

        const checkboxOption = document.createElement("div");
        checkboxOption.classList.add("checkbox-option");

        const checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.setAttribute("value", element.value);

        const checkboxOptionLabel = document.createElement("label");
        checkboxOptionLabel.textContent = element.value;

        checkboxOption.appendChild(checkboxInput);
        checkboxOption.appendChild(checkboxOptionLabel);

        checkboxDivision.appendChild(checkboxOption);
    }
    formPreview.appendChild(checkboxDivision);

    document.querySelector("#checkbox-label").value = "";
    document.querySelector(
        ".checkbox-items"
    ).innerHTML = `<input type = "text"/>`;

    checkboxModel.classList.add("hidden");
});

addCheckboxLabel.addEventListener("click", (e) => {
    const checkboxItems = document.querySelector(".checkbox-items");

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");

    checkboxItems.appendChild(newInput);
});

radioButton.addEventListener("click", (e) => {
    radioButtonModel.classList.remove("hidden");
});

addRadioLabel.addEventListener("click", (e) => {
    const radioItems = document.querySelector(".radio-items");

    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text");

    radioItems.appendChild(newInput);
});

addRadioButton.addEventListener("click", (e) => {
    const radioDivision = document.createElement("div");
    radioDivision.classList.add("radio-input-division");

    const radioLabel = document.querySelector("#radio-label").value;
    const radioItems = document.querySelector(".radio-items").children;

    const radioTitle = document.createElement("label");
    radioTitle.textContent = radioLabel;

    radioDivision.appendChild(radioTitle);

    for (let i = 0; i < radioItems.length; i++) {
        const element = radioItems[i];

        const radioOption = document.createElement("div");
        radioOption.classList.add("radio-option");

        const radioInput = document.createElement("input");
        radioInput.setAttribute("type", "radio");
        radioInput.setAttribute("value", element.value);

        const radioOptionLabel = document.createElement("label");
        radioOptionLabel.textContent = element.value;

        radioOption.appendChild(radioInput);
        radioOption.appendChild(radioOptionLabel);

        radioDivision.appendChild(radioOption);
    }
    formPreview.appendChild(radioDivision);

    document.querySelector("#radio-label").value = "";
    document.querySelector(".radio-items").innerHTML = `<input type = "text"/>`;

    radioButtonModel.classList.add("hidden");
});

submitButton.addEventListener("click", (e) => {
    const addSubmitButton = document.createElement("input");
    addSubmitButton.setAttribute("type", "submit");
    addSubmitButton.textContent = "Submit";

    const submitButtonDivision = document.createElement("div");
    submitButtonDivision.classList.add("submit-button-division");

    submitButtonDivision.appendChild(addSubmitButton);
    formPreview.appendChild(submitButtonDivision);
});
