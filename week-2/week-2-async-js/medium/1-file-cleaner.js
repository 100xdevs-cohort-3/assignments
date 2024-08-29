// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->


const fs = require('fs');

function cleanFile(fileName)
{
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err)
        {
            console.error("Error reading file:", err);
            return;
        }

        const cleanedData = data.split(/\s+/).join(' ').trim();
        fs.writeFile(fileName, cleanedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('File has been cleaned successfully');
        });
    });
}

cleanFile('example.txt');
