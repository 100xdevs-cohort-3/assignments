const palette = document.querySelector('#palette');
const status = document.querySelector('#status');
const colors = new Set();
function addColor(color) {
  if (colors.has(color)) {
    status.textContent = 'That color is already in the palette.';
    return;
  }
  colors.add(color);
  const button = document.createElement('button');
  button.textContent = color;
  button.style.backgroundColor = color;
  button.style.color = 'white';
  button.style.textShadow = '0 1px 3px black, 0 0 4px black';
  button.addEventListener('click', () => {
    document.body.style.backgroundColor = color;
    status.textContent = 'Background changed to ' + color + '.';
    for (const swatch of palette.children)
      swatch.setAttribute('aria-pressed', String(swatch === button));
  });
  button.setAttribute('aria-pressed', 'false');
  palette.append(button);
}
['red', 'green', 'blue', 'purple', '#202b27'].forEach(addColor);
document.querySelector('#add-color').addEventListener('submit', (event) => {
  event.preventDefault();
  addColor(document.querySelector('#color').value);
});
