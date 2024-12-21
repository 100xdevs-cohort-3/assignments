//defining your asynchronous dunction
const fs=require("fs");
function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

function readFileAsync(){
    return new Promise(function (resolve,reject){ //it take 2 parameter (resolve, reject) but we can ignore reject 
        fs.readFile("aqqq.txt","utf-8",function(err,data){//it will do 2 things either give error if file not found or give the data
            if(err){
                reject("File not found")
            }else {
                resolve(data)
            }
        })
    })
}


//if file found
readFileAsync().then(function(x){
    console.log("Files has been read " + x);
}).catch(function (e){
    console.log("Error");
    console.log(e);//if file not exist then control goes here

})




console.log("after solve print");