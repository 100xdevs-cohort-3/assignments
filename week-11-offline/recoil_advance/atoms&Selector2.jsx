import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilState,useSetRecoilState} from "recoil";
import { networkAtom} from './atoms.js';
import { jobsAtom } from './atoms.js';
import { notificationsAtom } from './atoms.js';
import { messagingAtom } from './atoms.js';
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
  const netwworkNotificationCount=useRecoilValue(networkAtom);
  const jobsAtomCount=useRecoilValue(jobsAtom);
  const notificationsAtomCount=useRecoilValue(notificationsAtom);
  const messagingAtomCount=useRecoilValue(messagingAtom);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector);
 
//by memo
  //const totalNotificationCount=useMemo(()=>{
    //return netwworkNotificationCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
  //},[netwworkNotificationCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount])




  return (
    <div>
      <button>Home</button>

      <button>My network ({netwworkNotificationCount >= 100 ? "99+" : netwworkNotificationCount})</button>
      <button>Messaging {messagingAtomCount}</button>
      <button>Job {jobsAtomCount}</button>
      <button>Notifications {notificationsAtomCount})+</button>
      
      <button>Me({totalNotificationCount})</button>

      
    </div>
  )
}



export default App

//other file


import {atom, selector} from "recoil";


export const networkAtom =atom({
    key: "networkAtom",
    default :102
});

export const jobsAtom =atom({
    key:" jobsAtom",
    default: 0

});

export const notificationsAtom=atom({
    key:"notificationsAtom",
    default:12
});

export const messagingAtom =atom({
    key: "messagingAtom",
    default:0
});


export const totalNotificationSelector=selector({
    key:"totalNotificationCount",
    get:({get})=>{
        const networkNotificationCount=get(networkAtom);
        const jobsAtomCount=get(jobsAtom);
        const notificationsAtomCount=get(notificationsAtom);
        const messagingAtomCount=get(messagingAtom);
        return networkNotificationCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
    }
})