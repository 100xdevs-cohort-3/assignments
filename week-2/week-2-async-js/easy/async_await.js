
function setTimeoutPromisified(duration){
    return new Promise (function(resolve){
        setTimeout(resolve,duration);
    });
}


//async await

//even its not looking like its returning promise but it is returning new promise if you hovour over it then u can see it

//syntactical sugar
async function solve(){
    await setTimeoutPromisified(1000);  
    console.log("hii");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hello there");

            
}

solve();

console.log("after solve function");