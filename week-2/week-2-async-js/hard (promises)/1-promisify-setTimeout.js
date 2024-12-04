/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function setTimeoutPromisified(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(); 
        },ms*1000)
    })
}
function wait(n) {
    return setTimeoutPromisified(n)
    // console.log("p = ",p)
    
}
// wait(3);
module.exports = wait;
