document.getElementById("addButton").addEventListener("click", function () {
    const elementToCreate = document.getElementById("type").value;
    const labelToBeAttached = document.getElementById("labelName").value;
    const placeholder = document.getElementById("placeholder").value;

    elementCreator(elementToCreate, labelToBeAttached, placeholder);

    // Clear input fields after adding an element
    document.getElementById("labelName").value = "";
    document.getElementById("placeholder").value = "";
});

function elementCreator(elementToCreate, labelToBeAttached, placeholder) {
    const previewContainer = document.getElementById("preview");

    // Create a container for the new element and its label
    const elementContainer = document.createElement("div");
    elementContainer.className = "form-element";

    // Create a label for the element
    const labelElement = document.createElement("label");
    labelElement.textContent = labelToBeAttached;

    // Create the new element based on the selected type
    let newElement;
    switch (elementToCreate) {
        case "h3":
            newElement = document.createElement("h3");
            newElement.textContent = labelToBeAttached;
            break;

        case "input":
            newElement = document.createElement("input");
            newElement.type = "text";
            newElement.placeholder = placeholder || "";
            break;

        case "datalist":
            newElement = document.createElement("input");
            newElement.type = "text";
            newElement.placeholder = placeholder || "";
            const datalist = document.createElement("datalist");
            datalist.id = "datalist-" + labelToBeAttached.replace(/\s+/g, "-").toLowerCase();
            newElement.setAttribute("list", datalist.id);

            // Add some example options to the datalist
            const options = ["Option 1", "Option 2", "Option 3"];
            options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                datalist.appendChild(optionElement);
            });

            elementContainer.appendChild(datalist);
            break;

        case "radio":
            newElement = document.createElement("div");
            const radioOptions = ["Option 1", "Option 2", "Option 3"];
            radioOptions.forEach((option, index) => {
                const radioInput = document.createElement("input");
                radioInput.type = "radio";
                radioInput.id = "radio-" + labelToBeAttached.replace(/\s+/g, "-").toLowerCase() + "-" + index;
                radioInput.name = labelToBeAttached.replace(/\s+/g, "-").toLowerCase();

                const radioLabel = document.createElement("label");
                radioLabel.htmlFor = radioInput.id;
                radioLabel.textContent = option;

                newElement.appendChild(radioInput);
                newElement.appendChild(radioLabel);
                newElement.appendChild(document.createElement("br"));
            });
            break;

        default:
            console.error("Invalid element type");
            return;
    }

    // Append the label and the new element to the container
    if (elementToCreate !== "h3") {
        elementContainer.appendChild(labelElement);
    }
    elementContainer.appendChild(newElement);

    // Append the container to the preview section
    previewContainer.appendChild(elementContainer);
}