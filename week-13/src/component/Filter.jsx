/* eslint-disable react/prop-types */
import RelaodSVG from "../assets/reload.svg";
import TodoSvG from "../assets/todo.svg";
import CheckBox from "../assets/checkboxactive.svg";

const Filter = ({toggleFilter}) => {
  return (
    <div className={`${toggleFilter ? "block" : "hidden"} absolute bg-secondaryColor border border-gray-600 p-4 text-sm rounded-xl top-12`}>
      <div className="flex flex-col">
        <div>
          <p>Status</p>
          <div className="flex gap-4 py-3">
            <span className="flex items-center gap-3 cursor-pointer">
              <img src={TodoSvG} className="w-4 h-4" alt="" />
              Todo
            </span>
            <span className="flex items-center gap-3 cursor-pointer">
              <img src={TodoSvG} className="w-4 h-4" alt="" />
              Solved
            </span>
            <span className="flex items-center gap-3 cursor-pointer">
              <img src={TodoSvG} className="w-4 h-4" alt="" />
              Attempted
            </span>
          </div>
        </div>
        <div>
          <p>Difficulty</p>
          <div className="text-semibold flex  gap-3 py-3">
            <span className="flex items-center gap-3 cursor-pointer">
              <img src={TodoSvG} className="w-4 h-4" alt="" />
              <span className="text-easyTextColor ">Easy</span>
            </span>
            <span className="flex items-center gap-3 cursor-pointer">
              <img src={TodoSvG} className="w-4 h-4" alt="" />

              <span className="text-mediumTextColor ">Medium</span>
            </span>
            <span className="flex items-center gap-3 cursor-pointer">
              <img src={TodoSvG} className="w-4 h-4" alt="" />

              <span className="text-hardTextColor ">Hard</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 my-3 cursor-pointer" >
          <img src={TodoSvG} className="w-4 h-4" alt="" />
          <span>Show tags</span>
        </div>
      </div>

      <div className="flex items-center rounded-lg justify-center cursor-pointer bg-primaryColor mt-4 ">
        <span className="p-3">
          <img src={RelaodSVG} alt="" className="w-4 h-4 flip-h p-[2px]" />
        </span>
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Filter;
