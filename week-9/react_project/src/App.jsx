import {useState,useEffect} from "react";
 
function App(){
 const [count, setCount] = useState(1);

 function increaseCount(){
  setCount(countVal=>countVal+1);
 }

 useEffect(function(){
  console.log("abouve setinterval")
  setInterval(increaseCount,1000);
 },[])

  return <div>
   {count}
  </div>
}



export default App;
