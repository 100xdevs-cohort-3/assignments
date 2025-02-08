const fs = require('fs');

const filePath = 'a.txt';


fs.readFile(filePath, 'utf-8', (err, data)=>{

  if(err){
    console.log('Error reading file: ', err);
    return
  }
  console.log('File Content: ', data);
});

function expensiveOperation(){
  let sum = 0;
    for (let i = 0; i < 1e10; i++) { // Simulating a very expensive operation
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}


expensiveOperation();
//calls expensiveOperation and holds the fs operation

