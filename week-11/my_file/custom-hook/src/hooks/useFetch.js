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


export default usePostTitlle;