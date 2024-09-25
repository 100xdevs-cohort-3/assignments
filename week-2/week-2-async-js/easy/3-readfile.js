const fs = require("fs")

fs.readFile('./a.txt', 'utf-8', (err, data) => {
    console.log(data);
});

for(i = 1; i < 1000000000; i++){}