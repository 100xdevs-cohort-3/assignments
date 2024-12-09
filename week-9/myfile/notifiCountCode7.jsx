import {useState} from "react";
import {PostComponent} from "./Post";

 function App(){

  const [count,setCount]=useState(1);

 function increaseCount(){
  setCount(count + 1);

 }

  return <div>
    <div style={{display:"flex"}}>
      <div style={{background: "red",borderRadius:20,width:20,height:25,paddingLeft:10,paddingTop:5}}>
        {count}

      </div>
    </div>
    <img style={{cursor: "pointer"}} src={"https://banner2.cleanpng.com/20180519/oa/avq2scbbe.webp"} width={40}/>

    <button onClick={increaseCount}>Increase the count</button>

  </div>
 
 }

 export default App
