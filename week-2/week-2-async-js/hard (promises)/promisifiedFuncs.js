// Promisified Version of 
// setTimeout
// fetch
// fs.readfile


// Promisified setTimeout
function setPromisifiedTimeout(ms){
  return new Promise((res) => {
    setTimeout(()=>{
        console.log('Timer up');
        res()
      }, ms);
  })
}

// Promisified fetch using a dummy api
function PromisifiedFetch(){
  return new Promise((resolve) => {
    fetch('https://dummyjson.com/users/1')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      resolve(data);
    })
  })
}

const { error } = require('console');
// Promisified fs.readFile
const fs = require('fs');
function PromisifiedreadFile(file){
  return new Promise((res, rej) =>  {
    fs.readFile(file, "utf-8", (err,data) => {
      if(err){
        ;rej(err)
      }else{
        res(data)
        
      }
    })
  })
}

// Goal of this function is if reading the file takes more than certain amount of milli seconds, return error.
function PromisifiedTimeoutReadFile(file, ms){
  const timeout = new Promise((res,rej) => {
    setTimeout(() => rej(new Error('File read timed out')), ms);
  });
  const reader = new Promise((res, rej) => {
    fs.readFile(file, "utf-8", (err,data) => {
      if (err){
        rej(err)
      }else{
        res(data)
      }
    })
  });

  return Promise.race([timeout, reader])
  
}


// setPromisifiedTimeout(1000)

// PromisifiedFetch()

// PromisifiedreadFile("a.txt").then(data => console.log(data))

// To tinker with this, reduce the ms down to 0-2 ms and see the error get thrown. Alternatively increase the amount of text in a.txt
// PromisifiedTimeoutReadFile('a.txt', 20).then(res => console.log(res))