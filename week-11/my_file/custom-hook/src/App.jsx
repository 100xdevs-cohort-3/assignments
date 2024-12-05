import React from "react";
import { useState } from "react";

import "./App.css";
import usePostTitlle, { useFetch } from "./hooks/useFetch";

function App(){
  //const postTitle= usePostTitlle();

  const [currentPost, setCurrentPost]= useState(1); 

  //destructure that data here
  const {finalData,loading}= useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);


  //if data is coming then add loading spinner
  if(loading){
    return <div>
      Loading...
    </div>
  }


  return <div>
    <button onClick={()=>setCurrentPost(1)}>1</button>
    <button onClick={()=>setCurrentPost(2)}>2</button>
    <button onClick={()=>setCurrentPost(3)}>3</button>
  {JSON.stringify(finalData)}

  </div>
}

export default App;