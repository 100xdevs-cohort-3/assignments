import {atom} from "recoil";


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

///different file


//app file
import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilState,useSetRecoilState} from "recoil";
import { networkAtom } from './atoms.js';
import { jobsAtom } from './atoms.js';
import { notificationsAtom } from './atoms.js';
import { messagingAtom } from './atoms.js';


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
  //const [messagingAtomCount, setMessagingCount]=useRecoilState(messagingAtom);

  // useState like this will also gives the two value one for current one for update




  return (
    <div>
      <button>Home</button>

      <button>My network ({netwworkNotificationCount >= 100 ? "99+" : netwworkNotificationCount})</button>
      <button>Messaging {messagingAtomCount}</button>
      <button>Job {jobsAtomCount}</button>
      <button>Notifications {notificationsAtomCount})+</button>
      <ButtonUpdater/>

      
    </div>
  )
}


function ButtonUpdater(){
  const  setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return(
    <button onClick={()=>{
      setMessagingAtomCount(c=>c+1)
    }}>Me</button>
  )
}

export default App
