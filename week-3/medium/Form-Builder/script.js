// script.js

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-field");
  const fieldTypeSelect = document.getElementById("field-type");
  const fieldLabelInput = document.getElementById("field-label");
  const formPreview = document.getElementById("form-preview");

  const downloadButton = document.getElementById("download-btn");

  // Event listener for the "Add Field" button
  addButton.addEventListener("click", () => {
    const fieldType = fieldTypeSelect.value;
    const fieldLabel = fieldLabelInput.value.trim();

    // Validate the input
    if (!fieldLabel) {
      alert("Please enter a field label.");
      return;
    }

    // Create a new form field element based on the selected field type
    const formField = createFormField(fieldType, fieldLabel);
    
    // Append the new field to the form preview section
    formPreview.appendChild(formField);

    // Clear the input field for the next entry
    fieldLabelInput.value = "";
  });


    // Event listener for the "Download Form Code" button
    downloadButton.addEventListener("click", () => {
      const formHtml = generateFormHtml();
      downloadFile("form.html", formHtml);
    })



});



// Function to create a new form field based on the type and label
function createFormField(type, label) {
  // Wrapper for each form field
  const fieldWrapper = document.createElement("div");
  fieldWrapper.className = "mb-4";

  // Label element
  const labelElement = document.createElement("label");
  labelElement.className = "block font-semibold text-gray-700 mb-2";
  labelElement.textContent = label;

  // Different input types based on the selected field type
  let inputElement;

  if(type === "Password Input"){
    inputElement = createPasswordInput(label);
  }else{
    inputElement = document.createElement("input");
    inputElement.placeholder = label;

    switch (type) {
      case "Text Input":
        inputElement.type = "text";
        break;
      case "Number Input":
        inputElement.type = "number";
        break;
      case "Email Input":
        inputElement.type = "email";
        break;
      case "Checkbox":
        inputElement.type = "checkbox";
        inputElement.className = "mr-2";
        break;
      case "Radio Button":
        inputElement.type = "radio";
        inputElement.className = "mr-2";
        break;
      default:
        console.error("Unsupported field type");
        return;
    }
  }

  // Common styling for input elements
  if (type !== "Checkbox" && type !== "Radio Button" && type !== "Password Input") {
    inputElement.className = "w-full border border-gray-300 rounded-md p-2";
  }

  // Append label and input to the field wrapper
  fieldWrapper.appendChild(labelElement);
  fieldWrapper.appendChild(inputElement);

  return fieldWrapper;
}


function createPasswordInput(label){
  const passwordWrapper = document.createElement("div");
  passwordWrapper.className = "relative w-full";


  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  passwordInput.className = "w-full border border-gray-300 rounded-md p-2 "; // Extra padding for button space


  const toggleButton = document.createElement("button");  
  toggleButton.type = "button";
  toggleButton.textContent = "Show";
  toggleButton.className = "absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 text-sm px-2 py-1 rounded";



  toggleButton.addEventListener('click', ()=>{
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

    toggleButton.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
  });


  passwordWrapper.appendChild(passwordInput);
  passwordWrapper.appendChild(toggleButton);

  return passwordWrapper;

}


// Generate HTML for the preview form
function generateFormHtml() {
  const previewContainer = document.getElementById("form-preview");
  let htmlContent = `<script src="https://cdn.tailwindcss.com"></script>\n<form>\n`;

  previewContainer.childNodes.forEach(field => {
    htmlContent += `  ${field.outerHTML}\n`;
  });

  htmlContent += `</form>`;
  return htmlContent;
}

// This function’s job is to take the HTML code from generateFormHtml and create a downloadable file.
function downloadFile(filename, content) {
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}


/*

Let’s go through it step-by-step:

Step 1: It creates something called a Blob. Think of a Blob as a "file" that exists only in memory, which we can use to hold our HTML content.

The Blob is created with new Blob([content], { type: "text/html" }), where content is the HTML code. This tells the browser, "Hey, treat this as an HTML file."

Step 2: It creates a special URL for this Blob file using URL.createObjectURL(blob). This URL lets us temporarily access our file as if it was a downloadable link.

Step 3: It creates an invisible <a> (anchor/link) element, sets its href attribute to our special URL, and sets the download attribute to the filename we want (form.html).

Step 4: It simulates a click on this invisible link, which triggers the browser to download the file.

Step 5: After the download starts, URL.revokeObjectURL(url) cleans up this temporary URL to free up memory.

 */


