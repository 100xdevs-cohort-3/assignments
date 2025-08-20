const fs = require("fs");

fs.writeFile("a.txt", "Hey this is just another follow up!", "utf-8", () => {
    console.log("Done.");
});

console.log("Writing to file ...");