import {useState, useEffect} from "react";
import React from "react";

import "./App.css";

function App(){
  const [post, setPost]=useState({});

  async function getPost(){
    //fetch the data from the backend
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");

    //convert the data into json
    const data=await response.json();

    //update the data
    setPost(data);
  }

  //bcoz we cant make first argument of useeffcet async
  useEffect(()=>{
    //either 
    //fetch("https://jsonplaceholder.typicode.com/posts/1")

    //or
    getPost();
  },[])

  return <div>
    {post.title}  
    <br/>
    {post.body}
    <br/>
    
  </div>
}

export default App;