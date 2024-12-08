/* eslint-disable react/prop-types */
import SideBarIcon from "../assets/sidebar1.svg";

const ToggleButton = ({ handleClick, toggleSideBar }) => {
  return (
    <div
      onClick={handleClick}
      className={` inline-block cursor-pointer p-1 ${
        toggleSideBar
          ? "border-none"
          : "border-solid border-[1px] border-gray-400 rounded-md"
      } hover:bg-[#292929b9] rounded-sm`}
    >
      <img src={SideBarIcon} alt="sidebar logo" className="w-6 h-6" />
    </div>
  );
};

export default ToggleButton;
