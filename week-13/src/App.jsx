import { useState } from "react"
import SideBar from "./component/SideBar"
import MainSection from "./component/MainSection"

export default function App() {

  const [toggleSideBar,setToggleSideBar] = useState(true);

  const handleClick = () => {
    setToggleSideBar(!toggleSideBar);
  }


  return (
    <main className="max-w-full h-screen bg-pink-500 flex text-white">
      <SideBar  toggleSideBar={toggleSideBar}  handleClick={handleClick}/>
      <MainSection toggleSideBar={toggleSideBar}  handleClick={handleClick}/>
    </main>
  )
}