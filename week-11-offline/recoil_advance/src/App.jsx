import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilState,useSetRecoilState} from "recoil";
import axios from "axios";
import { useEffect } from "react";
import { notifications} from './atoms.js';
import { totalNotificationSelector } from './atoms.js';




function App() {
 return (
  <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
   </div>
 )
}


function MainApp(){

  const [networkCount,setNetowrkCount]=useRecoilState(notifications);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector);



  // useEffect(()=>{

  //   //fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res=>{
  //     setNetowrkCount(res.data)
  //   })
  // },[])
  


  return (
    <div>
      <button>Home</button>


      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Messaging {networkCount.messaging}</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Notifications {networkCount.notifications})+</button>


      <button>Me({totalNotificationCount})</button>
    </div>
  )
}



export default App
