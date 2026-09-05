const builder = document.querySelector('#builder');
const fields = document.querySelector('#fields');
let nextId = 0;
builder.elements.type.onchange = () => {
  document.querySelector('#options-label').hidden = builder.elements.type.value !== 'radio';
};
builder.onsubmit = (event) => {
  event.preventDefault();
  const data = new FormData(builder);
  const title = String(data.get('label')).trim();
  const type = data.get('type');
  const options = String(data.get('options'))
    .split('\n')
    .map((x) => x.trim())
    .filter(Boolean);
  const error = document.querySelector('#error');
  error.textContent = '';
  if (!title || (type === 'radio' && options.length < 2)) {
    error.textContent = 'Enter a label and at least two choices for radio groups.';
    return;
  }
  if (!nextId) fields.replaceChildren();
  const name = 'field-' + nextId++;
  const field = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = title;
  field.append(legend);
  for (const option of type === 'radio' ? options : [title]) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    Object.assign(input, { type, name, required: data.has('required') });
    if (type !== 'text') input.value = option;
    label.append(input, type === 'text' ? '' : option);
    input.setAttribute('aria-label', option);
    field.append(label);
  }
  const remove = document.createElement('button');
  Object.assign(remove, { type: 'button', textContent: 'Remove field', className: 'secondary' });
  remove.onclick = () => field.remove();
  field.append(remove);
  fields.append(field);
  builder.reset();
  document.querySelector('#options-label').hidden = true;
};
document.querySelector('#preview').onsubmit = (event) => {
  event.preventDefault();
  document.querySelector('#result').textContent = JSON.stringify(
    Object.fromEntries(new FormData(event.target)),
    null,
    2,
  );
};
