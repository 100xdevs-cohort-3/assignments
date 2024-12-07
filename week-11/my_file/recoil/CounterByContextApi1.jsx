
//this code is not optimal we can make optimal by stop the re render or minimize the re render by recoil

import React from 'react';
import { useState } from 'react';

function App() {
   return (
    <>
      <Counter/>
    </>
   )
}


//top level component
function Counter(){
  const [count, setCount] = useState(0) ;
  return <div>
    <CurrentCount count={count}/>
    <Decrease setCount={setCount}/>
    <Increase setCount={setCount}/> 

  </div>
}

function CurrentCount({count}){
  return <div>
    {count}
  </div>
}

function Increase({setCount}){

  function increase(){
    setCount(c=>c + 1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}


function Decrease(  {setCount}){

  function decrease(){
    setCount (c=>c-1);
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App
