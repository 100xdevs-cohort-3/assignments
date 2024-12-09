
import {useState, useRef, useEffect} from "react";
import "./App.css";



function useDebounce(originalFn){

  const currentClock=useRef();

  const fn=()=>{
    clearTimeout(currentClock.current);  //clear the old clock
    currentClock.current=setTimeout(originalFn,200);//start the new clock with the function
  }


  return fn;

}

function App(){
  function sendDataToBackend(){
    fetch("api.amazon.com/search/");

  }


  const debouncedFn =useDebounce(sendDataToBackend);



  return (
    <>
     <input type="text"  onClick={debouncedFn}/>
    
    </>
  );
}


export default App;



