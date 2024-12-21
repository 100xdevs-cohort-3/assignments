import {useState} from "react";
import "./App.css";


function App(){

  const [currentTab, setCurrentTab] = useState("feed");

  return <div>
    <button onClick={function(){setCurrentTab("feed")}} style={{color: currentTab=="feed"? "red" : "black"}}>Feed</button>
    <button onClick={function(){setCurrentTab("notifications")  }} style={{color:currentTab=="notifications"? "red" : "black"}}>Notifications</button>
    <button onClick={function(){setCurrentTab("messages")}} style={{color: currentTab =="messages" ? "red": "black"}}>messages</button>
    <button onClick={function(){setCurrentTab("jobs")}} style={{color : currentTab=="jobs"? "red" : "black"}}>Jobs</button>
  </div>

}

export default App;
