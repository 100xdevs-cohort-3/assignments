// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

function errData (err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
}

// Function to read the contents of a file
function readFileAndPrint(filename) {
    // Asynchronously read the file
    fs.readFile(filename, 'utf8', errData);
}

// Expensive operation simulation
function expensiveOperation(duration) {
    const endTime = Date.now() + duration;
    while (Date.now() < endTime) {
        // Busy-wait to simulate an expensive operation
    }
    console.log(`Expensive operation took ${duration} ms`);
}

// Call the function to read the file
readFileAndPrint('example.txt');

// Simulate an expensive operation (adjust the duration to see how it affects the output)
expensiveOperation(5000); // 5 seconds
