//callback function
function main(){

}
setTimeout(main,3000);//call back the main function



// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


//it returns you an object of the promise class
function setTimeoutPromisified(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));  //global function
  }
  
  function callback() {
      console.log("3 seconds have passed");
  }
  
  setTimeoutPromisified(3000).then(callback)
  