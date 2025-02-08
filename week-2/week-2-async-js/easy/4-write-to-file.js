const fs = require('fs');

// const filePath = 

const data = "This is a content to be written in the file";

function expensiveOperation(){
  let sum = 0;
    for (let i = 0; i < 1e11; i++) { // Simulating a very expensive operation
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}

fs.writeFile('a.txt', data, (err)=>{
  if(err){
    console.error('Error Writing file; ', err);
    return;
  }
  console.log('Data Written to a.txt');
})


expensiveOperation();

