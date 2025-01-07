let fieldCounter = 0;
let radioGroupCounter = 0;

function copyCode() {
  navigator.clipboard.writeText(document.querySelector("form").innerHTML);
}

function addField() {
  const label = document.getElementById("label").value;
  const fieldType = document.querySelector("select").value;

  if (label.trim() === "") {
    return;
  }

  document.querySelector("form").appendChild(FieldComponent(label, fieldType));
}

function FieldComponent(labelText, type) {
  const fieldContainer = document.createElement("div");

  const fieldLabel = document.createElement("label");
  fieldLabel.innerHTML = labelText;
  fieldLabel.setAttribute("for", fieldCounter);

  switch (type) {
    case "heading":
      fieldLabel.id = "form-heading";
      fieldContainer.appendChild(fieldLabel);
      break;
    case "text":
      const textbox = document.createElement("input");
      textbox.type = "text";

      fieldContainer.appendChild(fieldLabel);
      fieldContainer.appendChild(textbox);
      break;
    case "textarea":
      const textarea = document.createElement("textarea");
      fieldLabel.id = "form-heading";

      fieldContainer.appendChild(fieldLabel);
      fieldContainer.appendChild(textarea);
      break;
    case "radio":
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = fieldCounter;
      radio.value = labelText;
      radio.name = radioGroupCounter;

      fieldContainer.appendChild(radio);
      fieldContainer.appendChild(fieldLabel);
      break;
    case "checkbox":
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = fieldCounter;
      checkbox.value = labelText;

      fieldContainer.appendChild(checkbox);
      fieldContainer.appendChild(fieldLabel);
      break;
    default:
      break;
  }

  fieldCounter++;
  if (type !== "radio") radioGroupCounter++;
  return fieldContainer;
}
