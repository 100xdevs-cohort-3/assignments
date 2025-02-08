// Get color buttons
const redBtn = document.getElementById('red-btn');
const blueBtn = document.getElementById('blue-btn');
const greenBtn = document.getElementById('green-btn');
const yellowBtn = document.getElementById('yellow-btn');
const colorInput = document.getElementById('custom-color');

// Set background color functions
redBtn.addEventListener('click', () => document.body.style.backgroundColor = 'red');
blueBtn.addEventListener('click', () => document.body.style.backgroundColor = 'blue');
greenBtn.addEventListener('click', () => document.body.style.backgroundColor = 'green');
yellowBtn.addEventListener('click', () => document.body.style.backgroundColor = 'yellow');

// Listen for color input changes
colorInput.addEventListener('input', () => {
  document.body.style.backgroundColor = colorInput.value;
});
