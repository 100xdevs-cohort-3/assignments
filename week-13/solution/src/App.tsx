import "./index.css";
import { useState } from "react";
const App = () => {
  return <Screen />;
};
function Screen() {
  const [drawer, setDrawer] = useState(true);
  function toggleSlider(): void {
    setDrawer((prev) => !prev);
  }
  return (
    <div className="flex h-screen ">
      <div
        className={`bg-[#333333] h-screen ${
          drawer ? "flex-[0.3_9_0%] " : "w-0"
        } border-[1.5px] border-[#464646] transition-all duration-500 relative`}
      >
        <div
          className={`absolute top-0 ${
            drawer ? "right-10" : "left-0"
          } z-50 cursor-pointer transition-all delay-1000 duration-500`}
          onClick={toggleSlider}
        >
          <i className="fa-solid fa-bars text-white border-2 border-white p-2 rounded-lg m-5"></i>
        </div>
      </div>

      <div className="bg-[#1A1A1A] h-screen  flex-[2_1_0%] border-[1.5px] border-[#464646]"></div>
    </div>
  );
}

export default App;
