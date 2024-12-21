import React from 'react';
import { useState } from 'react';
import {RecoilRoot, atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {counterAtom} from "./store/atoms/counter";


function App() {
   return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
   )
}


//top level component
function Counter(){
  
  //const [count, setCount] = useState(0) ;
  return <div>
    <CurrentCount />
    <Decrease />
    <Increase /> 

  </div>
}

function CurrentCount(){
  const count =useRecoilValue(counterAtom);
  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount=useSetRecoilState(counterAtom);

  function increase(){
    setCount(c=>c + 1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}


function Decrease(){
  const setCount=useSetRecoilState(counterAtom);

  function decrease(){
    setCount (c=>c-1);
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App


// written in counter file (store/atoms/counter.js)

import {atom } from "recoil";


export const counterAtom=atom({
    default:0,
    key:"counter"
})