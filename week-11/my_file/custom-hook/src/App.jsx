import React from "react";

import "./App.css";
import usePostTitlle, { useFetch } from "./hooks/useFetch";

function App(){
  //const postTitle= usePostTitlle();

  //destructure that data here
  const {finalData}= useFetch("https://jsonplaceholder.typicode.com/posts/1");
  return <div>
  {JSON.stringify(finalData)}

  </div>
}

export default App;