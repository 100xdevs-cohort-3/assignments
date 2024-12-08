import './App.css'
import {useState} from 'react';

function App() {
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  const [bulbOn, setBulbOn]=useState(false);


  return <div>
    <BulbState bulbOn={bulbOn}/>
    <TogggleBuldState  bulbOn = {bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn}){
  //this we have to defined in LightBulb component
  //const [bulbOn, setBulbOn]=useState(true);

  return <div>
    {bulbOn ? "Bulb on" :"Bulb off"}
  </div>
}

function TogggleBuldState({bulbOn,setBulbOn}){

  function toggle(){
    //1
    //setBulbOn(currentState=>!currentState)
    //same
    // setBulbOn(function9currentState){
    //   if(currentState== true){
    //     return false
    //   }else {
    //     return true
    //   }
    // }

    //3
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>

  </div>
}
export default App
