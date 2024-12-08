import {useState,useEffect} from "react";

 function App(){
  let [counterVisible,setCounterVisible]=useState(true);

  //every 5 sec it will flip the use of the counter (t->f->t->f->t)
  useEffect(function(){
    setInterval(function(){
        setCounterVisible(c=>!c)
    },5000);

  },[])

  return <div>
    hiii
    <div style={{visibility:counterVisible ? "hidden":"visible"}}> <Counter></Counter></div>
    hellooo
  </div>

 }


 //mounting,re-rendering,unmounting
 function Counter(){

  const [count,setCount]=useState(0);
 
  console.log("counter");

  useEffect(function(){
    //this part called only once 
    console.log("On mount")
    let clock=setInterval(function(){
      console.log("from the interval")
      //start the clock
      setCount(count=>count +1);  
    },1000)


    //logic for unmounting
    return function(){
        console.log("on unmount")
      clearInterval(clock)
    }


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
