import './App.css';
import {useState} from "react";


//custom hook
function useCounter(){
  //create the state variabke
  const [count, setCount]=useState(0);


 // define the functiom
  function increaseCount(){
    setCount (count +1);
  } 

  //return the function as well as state variavle in an object
  return {
     count:count,
     increaseCount:increaseCount
  }

}

function App() {
  return <div>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
  </div>
}



//create the counter componet that uses the custom hook (reusing that logic)
function Counter(){

  const {count,increaseCount}=useCounter();

  //use here
  return <div>
    <button onClick={increaseCount}>Increase {count}</button>
    
  </div>
}

export default App
