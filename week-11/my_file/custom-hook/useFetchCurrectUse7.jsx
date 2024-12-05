import {useState, useEffect} from "react";

//THIS IS CUTOM HOOK
function usePostTitlle(){
    const [post, setPost]=useState({});

    async function getPosts(){

        //send backend req to specific data
        const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json=await response.json();
        setPost(json);

       
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;

}

export function useFetch(url){
    const [finalData,setFinalData]=useState({});
    console.log(url);



    async function getDetails(){

        //send backend req to generic data
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);

    }

    //anytime url changes fetch the data from the backend
    useEffect(()=>{
        getDetails();
    },[url])


    return {
        finalData
    }
}


export default usePostTitlle;




// import React from "react";
// import { useState } from "react";

// import "./App.css";
// import usePostTitlle, { useFetch } from "./hooks/useFetch";

// function App(){
//   //const postTitle= usePostTitlle();

//   const [currentPost, setCurrentPost]= useState(1); 

//   //destructure that data here
//   const {finalData}= useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);



//   return <div>
//     <button onClick={()=>setCurrentPost(1)}>1</button>
//     <button onClick={()=>setCurrentPost(2)}>2</button>
//     <button onClick={()=>setCurrentPost(3)}>3</button>
//   {JSON.stringify(finalData)}

//   </div>
// }

// export default App;