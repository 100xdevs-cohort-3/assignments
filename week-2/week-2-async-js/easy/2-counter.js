// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0; // Initialize the counter variable

function updateCounter() {
    console.log(counter); // Print the current counter value to the console
    counter++; // Increment the counter by 1
    
    // Recursively call updateCounter after 1 second
    setTimeout(updateCounter, 1000);
}

// Start the counter
updateCounter();






































































// (Hint: setTimeout)