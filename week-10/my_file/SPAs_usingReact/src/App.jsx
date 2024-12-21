//import React from "react";

import {useRef} from "react";

function App(){
  const inputRef=useRef();


  function focusOnInput(){
    //document.getElementById("name").focus();
    inputRef.current.focus();
  }
  return <div>
    Sign up
    <input ref={inputRef} id="name" type={"text"} ></input>
    <input type="text" />
    <button onClick={focusOnInput}>submit</button>

  </div>
}


export default App; 