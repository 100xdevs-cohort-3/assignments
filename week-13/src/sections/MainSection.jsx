/* eslint-disable react/prop-types */
import Favourite from "../component/Favourite";
import QuestionList from "./QuestionList";
import ToggleButton from "../component/ToggleButton";
import NavBar from "./Navbar";

const MainSection = ({ toggleSideBar, handleClick }) => {
  return (
    <>
      <div
        className={`w-full bg-black   relative ${
          toggleSideBar ? "" : "pl-0"
        }`}
      >
          <NavBar/>
          <span className="fixed md:static top-0 right-4  block md:hidden z-10  ">
            <ToggleButton toggleSideBar={toggleSideBar} handleClick={handleClick}/>
          </span>

        <div className="flex w-full h-full flex-col md:flex-row gap-4 relative p-4 pt-6  overflow-y-hidden">
          <Favourite />
          <QuestionList />
          
        </div>
      </div>
    </>
  );
};

export default MainSection;
