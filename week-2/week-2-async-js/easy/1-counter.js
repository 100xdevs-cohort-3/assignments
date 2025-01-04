let counter = 0;

function updateCounter() {
  counter++;
  console.log(counter);
}

setInterval(updateCounter, 1000);
