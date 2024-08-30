const fs = require('fs');

const noOfWords = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(err) reject(err);
            else {
                const trimData = data.trim();
                resolve(trimData.split(/\s+/g).length);
            }
    })
    
    })
}

noOfWords('file.txt').then((words) => {
    console.log("No of words: " +words);
})
.catch((error) => {
    console.log('Error: ' + error);
})

