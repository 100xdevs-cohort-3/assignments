//defined a promisifed function
function setTimeoutPromisified(duration){
    return new Promise (function(resolve){
        setTimeout(resolve,duration);
    });
}


//convert setTimeout to promisifed setTimeout

function callback(){
    console.log("1 second has passed");
}
setTimeoutPromisified(1000).then(callback)//call callback after one second has passed
