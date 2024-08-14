/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve)=>{
        setTimeout(resolve,n);
    })
}
//if we want to do smth else after the promise->
wait(n).then(function(){
    console.log("done");
})

module.exports = wait;
