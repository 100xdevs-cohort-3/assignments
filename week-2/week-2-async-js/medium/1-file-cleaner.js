const fs = require("fs")


function  readFilePromisified(resolve,reject){
    fs.readFile("text","utf-8",(err,dat)=>{
        if(err) reject(err)
        resolve(dat)
    })

}

function write(data){

  return  function  writeFilePromisified(resolve,reject){
        fs.writeFile("text",data,(err)=>{
            if(err) reject(err)
            resolve()
        })
    
    }
}



const r = new Promise(readFilePromisified)

r.then((data)=>{
    data = data.replace(/\s{2,}/g, ' ').trim() 
    const w = new Promise(write(data))
    w.then(()=>console.log('finished'))
})

