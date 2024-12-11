// this is in hooks folder
import {useState, useEffect} from "react";
function usePostTitlle(){
    const [post, setPost]=useState({});

    async function getPosts(){

        const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json=await response.json();
        setPost(json);

       
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;

}


//export default usePostTitlle;



//this is in app.jsx file
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