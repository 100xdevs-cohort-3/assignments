const fs=require("fs");
function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

function readFileAsync(){
    return new Promise(function (resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}

async function solve(){
    await readFileAsync(1000);
}

solve();


console.log("after solve print");