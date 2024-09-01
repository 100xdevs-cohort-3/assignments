// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0; // Initialize the counter variable

function updateCounter() {
    console.log(counter); // Print the current counter value to the console
    counter++; // Increment the counter by 1
}

// Set the interval to call updateCounter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);
