import React from "react";

function App(){

  function focusOnInput(){
    document.getElementById("name").focus();

  }
  return <div>
    Sign up
    <input id="name" type={"text"} ></input>
    <input type="text" />
    <button onClick={focusOnInput}>submit</button>

  </div>
}


export default App; 