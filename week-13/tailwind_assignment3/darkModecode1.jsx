import './App.css'
import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode]=useState(true);

  return (
    <div className={"h-screen bg-white dark:bg-blue-800 text-black dark:text-white" } >
      <h1>Toggle theme</h1>
      <button onClick={()=>setDarkMode(!darkMode)}>toggle</button>
      

    </div>
   
  )
}

export default App



//only add class="dark" to the index.html file but here we have to mannuallyt do that
