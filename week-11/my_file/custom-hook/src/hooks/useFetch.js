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

export default useFetch;