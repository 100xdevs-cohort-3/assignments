document.addEventListener('DOMContentLoaded', () => {
    const formBuilder = document.getElementById("form-builder");
    const addButton = document.getElementById('add-field');
    const submitButton = document.getElementById('submit-field');
    const formPreview = document.getElementById('form-preview');

    addButton.addEventListener('click', () => {
        const field = document.createElement('div');
        field.className = 'field';
        field.innerHTML = `<select class="field-type">
                             <option value="text">Text</option>
                             <option value="checkbox">Checkbox</option>
                              <option value="radio">Radio</option>
                            </select>
                            <input type="text" class="field-label" placeholder="Label">
                            <button class="remove-field">Remove</button>`;
        formBuilder.appendChild(field);

        formBuilder.querySelector('.remove-field').addEventListener('click', () => {
            formBuilder.removeChild(field);
        })

    })

    submitButton.addEventListener('click', () => {
        formPreview.innerHTML = '';
        const fields = formBuilder.querySelectorAll('.field')
        fields.forEach(field => {
            const type = field.querySelector('.field-type').value
            const label = field.querySelector('.field-label').value
            const previewField = document.createElement('div')
            if (type === 'text') {
                previewField.innerHTML = `<input type="text" placeholder="${label}"> <label>${label}</label>`;
            } else if (type === 'checkbox') {
                previewField.innerHTML = `<input type="checkbox"> <label>${label}</label>`;
            } else if (type === 'radio') {
                previewField.innerHTML = `<input type="radio"> <label>${label}</label>`;
            }
            formPreview.appendChild(previewField);

        })
    })
})