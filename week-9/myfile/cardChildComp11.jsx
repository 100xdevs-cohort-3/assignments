import {useState,useEffect} from "react";


function App(){

  return <div style={{display: "flex"}}>
   <Card innerContent={"hii there"}/>
   <Card innerContent={<div style={{color: "green"}}>
    hello there</div> } />
    
  </div>

}


function Card({innerContent}){
  //outer design
  return <span style={{background : "black", borderRadius : 10, color: "white" , padding :10, margin:10 }}>

    {innerContent}

  </span>
}

export default App;