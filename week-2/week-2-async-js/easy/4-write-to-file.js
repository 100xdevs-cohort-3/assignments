//## Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content = "Hello! This is some text to write to the file.";

// Asynchronously write to a file
fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }
    console.log("File has been written successfully.");

    // Simulate an expensive operation after writing
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { // Increase this number to make it more expensive
        sum += i;
    }
    console.log("Expensive operation done. Sum:", sum);
});

console.log("This prints BEFORE the file write finishes.");
