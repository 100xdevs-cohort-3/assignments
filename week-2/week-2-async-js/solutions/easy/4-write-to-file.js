const fs = require('fs').promises;

async function writeToFile(filename, content) {
  try {
    await fs.writeFile(filename, content, 'utf8');
    console.log('File has been written successfully');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Usage
writeToFile('example.txt', 'Hello, world!');
