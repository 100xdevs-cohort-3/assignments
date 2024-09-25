const fs = require("fs")

const readFile = fs.readFileSync('./a.txt', 'utf-8')
console.log("File contents before writing ", readFile );

fs.writeFile('./a.txt', 'Hello Orca', (err) => {
    if(err) throw new err;
    console.log("File has been saved \n");

    const afterWrite = fs.readFileSync('./a.txt', 'utf-8');
    console.log(afterWrite);
});