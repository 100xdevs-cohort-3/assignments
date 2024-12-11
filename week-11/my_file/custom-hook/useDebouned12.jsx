import {useEffect, useRef, useState} from "react";
import "./App.css";


function App(){
    const [inputVal,setInoutVal]=useState("");
    const debouncedValue=useDebounce(inputVal);

    function change(e){
        setInoutVal(e.target.value);
        
    }

    const useDebounce=(value,delay)=>{
         const [debouncedValue,setDebouncedValue]=useState(value);

         useEffect(()=>{
            const handler=setTimeout(()=>{
                setDebouncedValue(value);
            },delay);

            return ()=>{
                clearTimeout(handler);
            }

            
         })
    }

    useEffect (()=>{
        //expensive opeartion 
        //fetch
    },[inputVal])
    

    return (
        <>
            <input id="input" type="text" value={inputVal} onChange={change}/>
        </>
    )
}


export default App;