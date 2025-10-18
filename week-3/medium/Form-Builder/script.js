const fieldType = document.getElementById("fieldType");
const fieldLabel = document.getElementById("fieldLabel");
const addFieldBtn = document.getElementById("addFieldBtn");
const fieldList = document.getElementById("fieldList");
const previewForm = document.getElementById("previewForm");

addFieldBtn.addEventListener("click", () => {
  const type = fieldType.value;
  const label = fieldLabel.value.trim();

  if (!type || !label) {
    alert("Please select a field type and enter a label!");
    return;
  }

  addField(type, label);
  fieldType.value = "";
  fieldLabel.value = "";
});

function addField(type, label) {
  // Create list item for builder
  const li = document.createElement("li");
  li.classList.add("field-item");
  li.innerHTML = `
    <span>${label} (${type})</span>
    <button class="delete-btn">X</button>
  `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    updatePreview();
  });

  fieldList.appendChild(li);
  updatePreview();
}

function updatePreview() {
  previewForm.innerHTML = "";

  const fields = document.querySelectorAll(".field-item span");
  fields.forEach(field => {
    const text = field.textContent;
    const [label, type] = text.split(" (");

    const cleanType = type.replace(")", "").trim();

    const fieldDiv = document.createElement("div");

    const lbl = document.createElement("label");
    lbl.textContent = label.trim();

    fieldDiv.appendChild(lbl);

    if (cleanType === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Enter text...";
      fieldDiv.appendChild(input);
    } else if (cleanType === "checkbox") {
      const input = document.createElement("input");
      input.type = "checkbox";
      fieldDiv.appendChild(input);
    } else if (cleanType === "radio") {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "radio-group"; // same group for simplicity
      fieldDiv.appendChild(input);
    }

    previewForm.appendChild(fieldDiv);
  });
}
