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