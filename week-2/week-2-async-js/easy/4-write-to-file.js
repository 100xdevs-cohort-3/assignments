// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require('fs');

function error (err) {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File has been written successfully');
}

// Function to write contents to a file
function writeFile(filename, content) {
    // Asynchronously write to the file
    fs.writeFile(filename, content, 'utf8', error);
}

// Call the function to write to the file
writeFile('example.txt', 'Hello, world! This is a test file.');