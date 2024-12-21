import { useState } from "react";
import './App.css'

function App() {
  return (
    <div>
      <b>
        hii there
      </b>
      <Counter></Counter>  
    </div>
  )
}



//define the counter compomenet
function Counter(){

  const [count,setCount]=useState(0);

  //let count =0;  //raw variable

  function increaseCount(){
    setCount(count +1);//call the setCount with count +1

  }

  function decreaseCount(){
    setCount(count - 1);

  }

  function resetCount(){
    setCount(0);
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>
  </div>
}

export default App
