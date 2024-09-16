// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.




const fs = require('fs');

const data = 'This is the content to write to the file.';

function operation() {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) { // Simulating a very expensive operation
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}

fs.writeFile("./textfiles/b.txt", data, "utf-8", (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log(`Data written to b.txt`);

});

operation();