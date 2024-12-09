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


import axios from "axios";
import {atom, selector} from "recoil";

//Asynchronous data queries
export const notifications=atom({
    key: "networkAtom",
    default : selector({
        key: "networkAtomSelector",
        get: async ()=>{
            const res=await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data
        }
    })
});



export const totalNotificationSelector=selector({
    key:"totalNotificationCount",
    get:({get})=>{
        const allNotifications=get(notifications);
        
        return allNotifications.network+allNotifications.jobs+allNotifications.messaging+allNotifications.notifications
    }
})



//not run error
