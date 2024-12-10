import { useState } from "react";
import SideBar from "./component/SideBar";
import MainSection from "./sections/MainSection";

export default function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleClick = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <>
      <main className="flex text-white min-h-screen bg-primaryColor relative ">
        <SideBar toggleSideBar={toggleSideBar} handleClick={handleClick} />
        <MainSection toggleSideBar={toggleSideBar} handleClick={handleClick} />
      </main>
    </>
  );
}
