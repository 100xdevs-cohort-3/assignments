import { useEffect,useRef } from "react";

export const usePrev=(value)=>{

    //send the value to ref(hold the prev value this ref)
    const ref=useRef();

    //whenever value changes update the ref
    useEffect(()=>{//then this gets called after that
        ref.current=value;

    },[value]);

    //return the ref
    //it return first
    return ref.current;
    


}


import {useState} from "react";
import "./App.css";
import {usePrev} from "./hooks/usePrev";


function App(){
  const [state, setState]=useState(0);
  const prev=usePrev(state);  //old value returned by this


  return (
    <>
      <p>{state}</p>
      <button
      onClick={()=>{
        setState((curr)=> curr +1);
      }}
      >
        Click Me 
      </button>
      <p>The Previous value was {prev}</p>
    </>
  );
}

export default App;