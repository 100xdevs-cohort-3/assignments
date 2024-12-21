import {useState,useEffect} from "react";
 
function App(){
 const [count, setCount] = useState(1);
 const [count2, setCount2] = useState(1);


 function increaseCount(){
  setCount(countVal=>countVal+1);
 }

 function decreaseCount(){
   setCount(countVal=>countVal-1);
 }

 //on mount
 useEffect(function(){
  console.log("abouve setinterval")
  setInterval(increaseCount,5000);
  setInterval(decreaseCount,8000);
 },[])


 useEffect(function(){
  console.log("the count has been updated to " + count);
  
 },[count]);


  return <div>
   {count} {count2}
  </div>
}



export default App;
