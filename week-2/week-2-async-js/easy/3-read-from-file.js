//read from file  and perform expensive operations

const fs=require("fs");

fs.readFile("a.txt","utf8",function(err,data){
    console.log(data);
})
let c=0;
for(let i=0;i<10000000;i++){
    c++;
}
console.log(c);