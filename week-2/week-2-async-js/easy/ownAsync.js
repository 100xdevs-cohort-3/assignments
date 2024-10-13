/*
Defining your own async function
Q: Write a function that
Reads the contents of a file
Trims the extra space from the left and right
Writes it back to the file
*/


//promisified version of read file function
const fs=require("fs")

function readTheFile(sendTheFinalValueHere){
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data);
    })
  
}

function readFile(fileName){
    //read the file and return its value
    return new Promise(readTheFile);//parameter of its and the function of the readTheFile 's parameter get call then our .then (callback )called
    
}

const p=readFile();

function callback(contents){
    console.log(contents);
}
p.then(callback)