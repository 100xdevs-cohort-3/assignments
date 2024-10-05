//Write to a file
const fs = require('fs').promises;

async function writeInFile(filename, content) {
    try {
        await fs.writeFile(filename,content,'utf8');
        console.log("file written succesfully");
        
    } catch (error) {
        console.error('Error in writing', error);
        
    }
}

writeInFile('ex.txt','I trisha I love you .')



