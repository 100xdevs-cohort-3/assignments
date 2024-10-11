/*Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
 */

function callback(){
    console.log("hi")
}

//ugly looking
//anonymous function(dont have name know)
setTimeout(function(){
    console.log("hii");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        },5000)
    },3000);
},1000)

//other solution
/*
function step3Done() {
    console.log("hello there");
  }
  
  function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
  }
  
  function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
  }
  
  

  setTimeout(step1Done, 1000);

  */
  //spet1Done then print and call the step2Done then call step3Done 