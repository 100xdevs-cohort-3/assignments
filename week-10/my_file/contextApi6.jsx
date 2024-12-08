import "./App.css";
import {useState, createContext,useContext} from "react";
import React from "react";

//3 steps we have to do to use the context

//step one create the context api
const BulbContext=createContext();


function App(){
  const [bulbOn ,setBulbOn]=useState(true);


  //step2 wrap inside the provider
  return <div>
    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
      <Light/>
    </BulbContext.Provider>
    

  </div>

}

function Light(){
  return <div>
    <LightBulb />
    <LightSwitch />

  </div>

}

function LightBulb(){
  //  step3 use it here(consume the context)
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
    <button onClick={toggle} style={{backgroundColor:"red"}}>Toggle the bulb</button>

  </div>
}


export default App;
