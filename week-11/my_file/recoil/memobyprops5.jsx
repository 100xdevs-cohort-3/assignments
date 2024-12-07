import React from 'react';
import { useState,useEffect,memo } from 'react';
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
   
    <CurrentCount count={count}/>

    <Decrease />
    <Increase /> 

  </div>
}
//const MemoizedCurrentcount=memo(CurrentCount);


//or pass the function
const  CurrentCount=memo(function({count}){
  return <div>
   {count}
  </div>
})


//const MemoizedIncrese=memo(Increase);

const Increase=memo(function(){ 
  

  function increase(){
    
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

const Decrease=memo(function(){
  

  function decrease(){
    
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})

export default App
