import {useState, useEffect} from "react";
import React from "react";



export function useFetch(url, retryTime){
    const [finalData,setFinalData]=useState({});
    console.log(url);

    const [loading ,setLoading]=useState(true);



    async function getDetails(){
        //befor req goes to backend
        setLoading(true);

        //send backend req to generic data
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);
        //after req goes to backend
        setLoading(false);

    }

    //anytime url changes fetch the data from the backend
    useEffect(()=>{
        getDetails();
    },[url])

    useEffect(()=>{
        setInterval(getDetails, retryTime * 1000)
    },[])

    //clean up logic


    return {
        finalData,
        loading
    }
}

// export default useFetch;



// import React from "react";
// import { useState } from "react";

// import "./App.css";
// import { useFetch } from "./hooks/useFetch";

// function App(){
//   //const postTitle= usePostTitlle();

//   const [currentPost, setCurrentPost]= useState(1); 

//   //destructure that data here
//   const {finalData,loading, error}= useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost,10);


//   //if data is coming then add loading spinner
//   if(loading){
//     return <div>
//       Loading...
//     </div>
//   }


//   return <div>
//     <button onClick={()=>setCurrentPost(1)}>1</button>
//     <button onClick={()=>setCurrentPost(2)}>2</button>
//     <button onClick={()=>setCurrentPost(3)}>3</button>
//   {JSON.stringify(finalData)}

//   </div>
// }

export default App;