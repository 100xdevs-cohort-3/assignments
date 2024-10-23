// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let counter = 0; // Initialize the counter to 0

function startCounter() {
  function increment() {
    counter++; // Increment the counter by 1
    console.log(counter); // Log the current value of the counter
    setTimeout(increment, 1000); // Call increment again after 1000 milliseconds (1 second)
  }

  increment(); // Start the first increment
}

startCounter(); // Start the counter
