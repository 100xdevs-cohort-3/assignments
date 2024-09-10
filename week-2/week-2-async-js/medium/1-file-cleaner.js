
const fs = require('fs');

const data = "hello     world    my    name   is       raman";
fs.writeFileSync('b.txt', data, 'utf-8');
const content = fs.readFileSync('b.txt', 'utf8');
console.log(content);


function trim(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      } else {
        let text = data.replace(/\s+/g, ' ');
        fs.appendFile(filepath, ` =>\n${text}`, (err) => {
          if (err) {
            return reject(err);
          }
          console.log("file has successfully changed");
          console.log(fs.readFileSync(filepath, 'utf8'));
          resolve();
        })
      }
    })
  })
}

async function main() {
  try {
    await trim('b.txt');
  } catch (error) {
    console.error(error);
  }
}
main();
