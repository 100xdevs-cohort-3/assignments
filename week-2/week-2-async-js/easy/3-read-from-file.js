const fs = require("fs");

const content = fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(`File Content:\n${data}`);    
})

console.log("Expensive Operation ongoing...");
for(i=0; i<1000000000; i++){
    
}
console.log("Expensive Operation done.\n");

