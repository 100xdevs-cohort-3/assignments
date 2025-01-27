import React from "react";

import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { IoIosStar } from "react-icons/io";

const Sidebar = ({ isVisible, setIsVisible }) => {
  if (isVisible) {
    return (
      <div className="flex flex-col justify-center items-start p-3 font-medium gap-3 *:w-full *:text-sm">
        <div className="flex justify-between">
          <h1 className="text-lg">My Lists</h1>
          <button onClick={() => setIsVisible(!isVisible)}>
            <VscLayoutSidebarLeft />
          </button>
        </div>
        <p>Created by me</p>
        <button className="bg-gray-300 p-2 flex justify-start items-center rounded-md gap-2">
          <span className="bg-white rounded-md p-1">
            <IoIosStar fill="yellow" size={18} />
          </span>
          <p>Favourite</p>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsVisible(!isVisible)}
      className="p-2 rounded-md border-2 border-white/20 absolute md:static top-4 left-4"
    >
      <VscLayoutSidebarLeft />
    </button>
  );
};

export default Sidebar;
