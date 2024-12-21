//clock counter
import {useState,useEffect} from "react";

 function App(){
  return <div>
    <Counter></Counter>
  </div>

 }


 //mounting,re-rendering,unmounting
 function Counter(){

  const [count,setCount]=useState(0);

  //hooking into the lifecycle events of react 
  console.log("counter");



  //i want this function call only one time so i do mounting with the help of useEffect which wraps the mounting part that called only once
  useEffect(function(){
    //this part called only once 
    setInterval(function(){
      //setCount(count=>count +1);
      //same as this
      setCount(function(count){
        return count +1;
      })
    },1000)

    console.log("mounted");

  },[]);  //gaurd our setinterval from re-renders


  return <div>
    <h1 id="text">{count}</h1>
  </div>

 }

 export default App;