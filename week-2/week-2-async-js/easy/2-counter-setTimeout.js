/**
## Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

let count = 0;

function handleCounter() {
  count++;
  console.log(count);

  // schedule to call the handleCounter after 1 second
  setTimeout(handleCounter, 1000);
}

// start the counter
handleCounter();

// stop the counter
setTimeout(() => {
  console.log("Counter stopped!");
}, 10000);
