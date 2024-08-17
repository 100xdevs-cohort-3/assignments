
const fs = require('fs');

function write(filepath) {
  return new Promise(function (resolve) {
    const data = "These assignment are good for practicing javascript";
    fs.writeFile(filepath, data, function () {
      resolve();
    })
  })
}

async function main() {
  try {
    await write('a.txt');
    console.log("File has written");
    const content = fs.readFileSync('a.txt', 'utf8');
    console.log(content);
  } catch (error) {
    console.error(error);
  }
}

main();


