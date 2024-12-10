/* eslint-disable react/prop-types */
import ToggleButton from "./ToggleButton";
import ProfileAvatar from "./ProfileAvatar";
import LockSvg from "../assets/lock.svg";

const SideBar = ({ toggleSideBar, handleClick }) => {
  return (

    <div
      className={`${
        toggleSideBar
          ? "w-80 bg-primaryColor"
          : "hidden md:w-40 md:flex bg-black "
      } 
    p-1 pt-4 z-20 overflow-y-hidden  
    fixed md:static top-0 left-0`}
    >
      <div className="w-full relative ">
        {toggleSideBar && (
          <div className="flex flex-col gap-4 pr-4 ">
            <h4 className="pl-2 text-xl font-semibold">My Lists</h4>
            <p className="pl-2">Created by me</p>
            <div className="bg-primaryActiveColor p-2 rounded-sm flex items-center gap-2 cursor-pointer">
              <div className="w-6 h-5">
                <ProfileAvatar br="sm" imgPadding="1" className="w-6 h-5" />
              </div>
              <div className="flex items-center w-full justify-between ">
                <p>Favourite</p>
                <span className="w-5 h-5 ">
                  <img
                    src={LockSvg}
                    alt="locksvg"
                    className="w-full h-full object-cover"
                  />
                </span>
              </div>
            </div>
          </div>
        )}
        <span className="absolute top-0 right-4 hidden md:block">
          <ToggleButton
            handleClick={handleClick}
            toggleSideBar={toggleSideBar}
          />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
