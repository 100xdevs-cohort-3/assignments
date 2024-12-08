import './App.css'
import {useState} from 'react';

function App() {
  const [bulbOn, setBulbOn]=useState(true);
  return <div>
    <Light bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function Light(bulbOn,setBulbOn){


  return <div>
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch  bulbOn = {bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function  LightBulb({bulbOn}){
  //this we have to defined in LightBulb component
  //const [bulbOn, setBulbOn]=useState(true);

  return <div>
    {bulbOn ? "Bulb on" :"Bulb off"}
  </div>
}

function LightSwitch({bulbOn,setBulbOn}){

  function toggle(){
    
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>

  </div>
}
export default App;
