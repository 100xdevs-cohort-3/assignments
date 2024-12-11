import { useEffect,useRef } from "react";

export const usePrev=(value)=>{

    //send the value to ref
    const ref=useRef();

    //whenever value changes update the ref
    useEffect(()=>{
        ref.current=value;

    },[value]);

    //return the ref
    return ref.current;


}

//it returbs first , effect gets called later