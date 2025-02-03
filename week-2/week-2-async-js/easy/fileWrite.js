const fs = require('fs').promises;

async function writeFile(filename, content) {
    try {
        await fs.writeFile(filename,content,'utf8')
        console.log('successfully write into the file ');
        
    } catch (error) {
        console.log('Error during writing file',error);
        
    }
}

writeFile('easy/example.txt','secret has been reveled ! ')