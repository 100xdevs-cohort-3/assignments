//trimming the contents of the file and writing them back in the file -->

const fs=require("fs");
function fn(path,cb){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",function(err,data){
            data=data.trim();
            fs.writeFile(path,data,function(){
                cb();
                resolve();
            })
            if(err){
                reject();
            }
        })
    })
}
function done(){
    console.log("all tasks done !");
}
fn("a.txt",done);