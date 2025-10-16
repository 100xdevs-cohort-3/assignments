//## File cleaner
/*Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```*/

const fs = require('fs');
const filePath = 'example.txt'; // Replace with your file name

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("Original content:");
    console.log(data);

    // Remove extra spaces (replace multiple spaces with a single space)
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned content back to the same file
    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File cleaned successfully!");
    });
});
