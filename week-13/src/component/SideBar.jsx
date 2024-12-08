/* eslint-disable react/prop-types */
import ToggleButton from "./ToggleButton";
import ProfileAvatar from "./ProfileAvatar";
import LockSvg from "../assets/lock.svg";

const SideBar = ({ toggleSideBar, handleClick }) => {
  return (
    <>
      <div
        className={`${
          toggleSideBar ? "w-80 bg-[#3e3e3e]" : "w-40 bg-[#282828]"
        } p-1 pt-4 h-full`}
      >
        <div className="w-full relative">
          {toggleSideBar && (
            <div className="flex flex-col gap-4 pr-4">
              <h1 className="pl-2 text-xl font-semibold">My Lists</h1>
              <h2 className="pl-2">Created by me</h2>
              <div className="bg-[#4b4b4b] p-2 rounded-sm flex items-center gap-2 cursor-pointer">
                <ProfileAvatar width="6" height="5" br="sm" imgPadding="1" />
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
          <span className="absolute top-0 right-4">
            <ToggleButton
              handleClick={handleClick}
              toggleSideBar={toggleSideBar}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default SideBar;
