//sum
//string concatination 
//1
/*
function sum(a,b){
    return parseInt(a) + parseInt(b); 
}

let ans=sum("20",30);
console.log(ans);
*/

//2 (sum of 1 to n)

/*
function sum(n){
    let ans1=0;
    for(let i=1;i<=n;i++){
        ans1+=i;
    }
    return ans1;
}

const ans1=sum(100);
console.log(ans1);

*/

//3 fs=>fileSystem
/*
const fs=require("fs");

const contents=fs.readFileSync("a.txt","utf-8");
console.log(contents);

*/

//4 read 2 files and log them
/*
const fs=require("fs");

const contents1=fs.readFile("a.txt","utf-8");//read file asynchronusly
console.log(contents1);

const contents2=fs.readFileSync("b.txt","utf-8"); //read file synchronously
console.log(contents2);

*/


//async read function (read function will call after readFile is done)
//5
/*
const fs=require("fs");


function read(err,data){
    console.log(data);
}
const contents1=fs.readFile("a.txt","utf-8",read);//read file asynchronusly
console.log(contents1);

const contents2=fs.readFile("b.txt","utf-8",read); //read file asynchronously
console.log(contents2);
*/


//6 (which print first)
const fs=require("fs");


function print(err,data){
    console.log(data);
}
const contents1=fs.readFile("a.txt","utf-8",print);//read file asynchronusly

const contents2=fs.readFile("b.txt","utf-8",print); //read file asynchronously

console.log("Done!");