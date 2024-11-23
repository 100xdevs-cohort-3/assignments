import {useState,useEffect} from "react";

 function App(){
  let counterVisible=true;

  return <div>
    {counterVisible ? <Counter></Counter>:null}
  
    {counterVisible && <Counter></Counter>}
  </div>

 }


 //mounting,re-rendering,unmounting
 function Counter(){

  const [count,setCount]=useState(0);
 
  console.log("counter");

  useEffect(function(){
    //this part called only once 
    setInterval(function(){
      setCount(count=>count +1);  
    },1000)

  },[]);  //gaurd our setinterval from re-renders

  function increaseCount(){
    setCount(count +1);
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
  </div>

 }

 export default App;