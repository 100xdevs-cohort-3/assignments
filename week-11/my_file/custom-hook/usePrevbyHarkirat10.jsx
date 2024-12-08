import { useEffect,useRef } from "react";

export const usePrev=(value)=>{

    //send the value to ref
    const ref=useRef();
    console.log("Re-render happened with new value " + value)

    //whenever value changes update the ref
    useEffect(()=>{
        console.log("Updated the ref to be " + value)
        ref.current=value;


    },[value]);


    console.log("Returned" + ref.current);
    //return the ref
    return ref.current;


}

//it returbs first , effect gets called later

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