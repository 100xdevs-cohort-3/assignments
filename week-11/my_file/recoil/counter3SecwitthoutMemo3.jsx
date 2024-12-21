import React from 'react';
import { useState,useEffect } from 'react';
import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {counterAtom} from "./store/atoms/counter";


function App() {
   return (
    
      <Counter/>
  
   )
}


//top level component
function Counter(){
  
  const [count, setCount] = useState(0) ;


  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    },3000)
  },[]);


  return <div>
    <CurrentCount />
    <Decrease />
    <Increase /> 

  </div>
}

function CurrentCount(){
  
  return <div>
    hiii1
  </div>
}

function Increase(){
  

  function increase(){
    
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}


function Decrease(){
  

  function decrease(){
    
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App
