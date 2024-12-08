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
    {counterVisible && <Counter></Counter>}
    hellooo
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