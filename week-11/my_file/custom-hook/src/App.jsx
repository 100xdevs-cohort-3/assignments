import React from "react";

import "./App.css";
import usePostTitlle from "./hooks/useFetch";

function App(){
  const postTitle= usePostTitlle();
  return <div>
   {postTitle}

  </div>
}

export default App;