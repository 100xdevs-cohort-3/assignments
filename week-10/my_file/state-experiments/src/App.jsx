import './App.css'
import {useState} from 'react';

function App() {
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  return <div>
    <BulbState/>
    <TogggleBuldState/>
  </div>
}

function BulbState(){
  const [bulbOn, setBulbOn]=useState(true);

  return <div>
    {bulbOn ? "Bulb on" :"Bulb off"}
  </div>
}

function TogggleBuldState(){
  return <div>
    <button>Toggle the bulb</button>

  </div>
}
export default App
