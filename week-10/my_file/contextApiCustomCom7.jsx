import "./App.css";
import {useState, createContext,useContext} from "react";
import React from "react";


const BulbContext=createContext();

//create our own custom bulbProvider
function BulbProvider({children}){
    const [bulbOn ,setBulbOn]=useState(true);


  return <div>
    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
    

  </div>
    
}


function App(){
   return <div>
     <BulbProvider>
       <Light/>
     </BulbProvider>
   </div>

}

function Light(){
  return <div>
    <LightBulb />
    <LightSwitch />

  </div>

}

function LightBulb(){
 
  const {bulbOn}=useContext(BulbContext);

  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}

  </div>
}


function LightSwitch(){
  const {bulbOn,setBulbOn}=useContext(BulbContext);

  function toggle(){
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle} >Toggle the bulb</button>

  </div>
}


export default App;
