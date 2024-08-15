const fs = require("fs")


function  readFilePromisified(resolve,reject){
    fs.readFile("3-read-from-file.md","utf-8",(err,dat)=>{
        if(err) reject(err)
        resolve(dat)
    })

}

const p = new Promise(readFilePromisified)

p.then((data)=>console.log(data))