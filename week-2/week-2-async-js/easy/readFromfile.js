const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('File contents:', data);
});


const D = () => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) { 
    sum += i;
  }
  console.log("Testing"+sum)
}


D();
