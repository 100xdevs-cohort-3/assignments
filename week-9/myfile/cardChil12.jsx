import {useState,useEffect} from "react";


function App(){

  return <div style={{display: "flex" ,background: "gray"}}>
    <Card>
      <div style={{color: "green"}}>
        What do you want to post <br /> <br />
        <input type={"text"} />
      </div>
    </Card>
    <Card>
      <div>
        hii there
      </div>
    </Card>
    
  </div>

}


function Card({children}){
  //outer design
  return <span style={{background : "white", borderRadius : 10, color: "black" , padding :10, margin:10 }}>
    Upper topbar
    {children}
    Lower bottom footer
    {children}
    

  </span>
}

export default App;