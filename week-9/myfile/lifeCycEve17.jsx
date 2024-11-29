import React from "react";
import {useState, useEffect} from "react";


const App=()=>{
  return (
    <div>
      <MyComponent/>

    </div>
  )
}

 
function MyComponent(){
  const [count,setCount]=useState(0);

  useEffect(()=>{
    //this will run when count variable chnages
    console.log("Component mounted or count updated")
  },[count]);


  useEffect(()=>{

    //on mount
    console.log("Component mounted");

    //on unmount
    return ()=>{
      console.log("Component will unmount")
    }

  },[]);

  return (
    <div>
      <p>Count :{count}</p>
      <button onClick={()=>setCount(count +1)}>Increment</button>

    </div>
  )
}

export default App;