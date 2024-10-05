// File cleaner
const { error } = require('console')
const fs = require('fs')

const FileCleaner = (filePath) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.error("File not found");
            } else {
                console.error("error in reading file", err)
            }
            return
        }
        console.log("Content in file:", data);

        const cleanedContent = data.replace(/\s+/g, ' ').trim()

        fs.writeFile(filePath, cleanedContent, (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        })
    })


}

const filePath = 'exe.txt'

FileCleaner(filePath)