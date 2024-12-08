function setTimeoutPromisified(duration){
    return new Promise (function(resolve){
        setTimeout(resolve,duration);
    });
}
//promise chaining(claer syntax)
setTimeoutPromisified(1000).then(function(){
    console.log("hii");
    return setTimeoutPromisified(3000)
}).then (function(){
        console.log("hello");
        return setTimeoutPromisified(5000)
}).then (function(){
        console.log("hello there");
            
});



console.log("outside the callback hell");

/*
setTimeoutPromisified(1000).then(function(){
    console.log("hii");
    return setTimeoutPromisified(3000)
})
    */
   //it return the promise call .somthing and so on then chain promise
   