import { useState } from 'react';
import './App.css'


//first call this function
export default function App() {
  //define the state
  const [count,setCount]=useState(0);//then 2nd initialize the state



  //same as one line of code doing
  // const stateVariable=useState(0);  
  // const count = stateVariable[0];
  // const setCount = stateVariable[1];

  //define the function
  function onClickHandler(){  //as click on the counter it set the count varibale increase by 1
    setCount(count + 1);
  }
  
  //jsx code 
  return (  //third this got returned
   <div>
     {/* <button id="btn" onClick={onClickHandler}>
       Counter {count}
     </button> */}
     <button onClick={onClickHandler}></button>
   </div>
  );
}


function Button(props){
  return <button onClick={props.onClickHandler}>Counter {count}
</button>
}