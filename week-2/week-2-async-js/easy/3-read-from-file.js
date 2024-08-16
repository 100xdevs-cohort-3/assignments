// // Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs')


fs.readFile("./textfiles/a.txt", "utf-8", (err,data) => {
  if (err){
    return err;
  }else{
    console.log(`${data}-> event loop occurs here`);
  }
})

console.log('first for loop -> thread is here')
let c= 0;
for (let i = 0; i < 100000; i++){
  c++;
  // console.log(c)
}
console.log('after loop -> thread is here')