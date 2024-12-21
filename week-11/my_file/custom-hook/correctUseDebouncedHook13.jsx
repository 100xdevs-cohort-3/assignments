import {useEffect, useRef, useState} from "react";
import "./App.css";


const useDebounce=(value,delay)=>{
    const [debouncedValue,setDebouncedValue]=useState(value);

    useEffect(()=>{
       const handler=setTimeout(()=>{
           setDebouncedValue(value);
       },delay);

       return ()=>{
           clearTimeout(handler);
       };
    },[value,delay]);

    return debouncedValue;
};

function App(){
    const [inputVal,setInoutVal]=useState("");
    const debouncedValue=useDebounce(inputVal,200);

    function change(e){
        setInoutVal(e.target.value);
        
    }


    useEffect (()=>{
        //expensive opeartion 
        //fetch
        console.log("Expensive opeartion");
    },[debouncedValue])
    

    return (
        <>
            <input id="input" type="text" value={inputVal} onChange={change}/>
        </>
    )
}


export default App;