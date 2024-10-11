//samething using promicifed version of hell solution of 1
function setTimeoutPromisified(duration){
    return new Promise (function(resolve){
        setTimeout(resolve,duration);
    });
}
//anonimous function
setTimeoutPromisified(1000).then(function(){
    console.log("hii");
    setTimeoutPromisified(3000).then (function(){
        console.log("hello");
        setTimeoutPromisified(5000).then (function(){
            console.log("hello there");
            
        });

    });
});

console.log("outside the callback hell");
