// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0; // Initialize the counter to 0

function startCounter() {
  setInterval(() => {
    counter++; // Increment the counter by 1
    console.log(counter); // Log the current value of the counter
  }, 1000); // Set the interval to 1000 milliseconds (1 second)
}

startCounter(); // Start the counter
