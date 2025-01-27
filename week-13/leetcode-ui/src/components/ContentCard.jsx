import React from "react";

import { IoIosStar } from "react-icons/io";
import { FaCheck, FaPlay } from "react-icons/fa";
import { PiGitForkLight } from "react-icons/pi";
import { IoReload } from "react-icons/io5";

const ContentCard = () => {
  return (
    <div className="p-5 flex flex-col justify-center md:items-start items-center gap-3 bg-gray-700 h-fit">
      <span className="bg-white rounded-md p-1">
        <IoIosStar fill="yellow" size={52} />
      </span>
      <h1 className="text-2xl font-medium">Favourite</h1>
      <div>
        <p>Devansh ▪ 19 questions ▪ Private</p>
      </div>
      <div className="flex gap-2 justify-center items-start">
        <button className="bg-white text-black p-2 px-4 rounded-full flex justify-center items-center gap-2">
          <FaPlay size={14} />
          <p>Practice</p>
        </button>
        <button className="bg-gray-300 p-3 rounded-full">
          <PiGitForkLight />
        </button>
      </div>

      <div className="w-fit hidden md:block">
        <hr className="w-full border-gray-300 my-5" />
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium">Progress</p>
          <IoReload />
        </div>
        <div className="grid grid-rows-3 grid-cols-[100px_100px_100px] grid-flow-col gap-3 *:bg-gray-300 *:rounded-md">
          <div className="flex flex-col justify-center items-center text-sm font-medium col-span-2 row-span-3 p-2">
            <div className="relative w-[150px] h-[150px] border-3 border-green-500 rounded-full">
              {/* <svg width="150" height="150">
                <circle
                  cx="75"
                  cy="75"
                  strokeDasharray=""
                  strokeDashoffset="110"
                  r="70"
                  strokeWidth="5"
                  stroke="green"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg> */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
                <span className="text-3xl">
                  19<span className="text-base">/19</span>
                </span>

                <div className="flex justify-center items-center gap-2">
                  <FaCheck color="green" />
                  <p>Solved</p>
                </div>
              </div>
              <p className="bg-gray-300 absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap p-2">
                0 Attempting
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-sm font-medium">
            <p className="text-teal-300">Easy</p>
            <p>11/11</p>
          </div>
          <div className="flex flex-col justify-center items-center text-sm font-medium">
            <p className="text-yellow-500">Med.</p>
            <p>7/7</p>
          </div>
          <div className="flex flex-col justify-center items-center text-sm font-medium">
            <p className="text-red-600">Hard</p>
            <p>1/1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
