/* eslint-disable react/prop-types */
import RelaodSVG from "../assets/reload.svg";
import TodoSvG from "../assets/todo.svg";
import CheckBox from "../assets/checkboxactive.svg";

const Filter = ({ toggleFilter, filterData, handleFilterData, toggleShowTags,resetTags }) => {
  return (
    <div
      className={`${
        toggleFilter ? "block" : "hidden"
      } absolute bg-secondaryColor border border-gray-600 p-4 text-sm rounded-xl top-12 z-10`}
    >
      <div className="flex flex-col">
        {/* Status Section */}
        <div>
          <p>Status</p>
          <div className="flex gap-4 py-3">
            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleFilterData("status", "istodo")}
            >
              <img
                src={filterData.status.istodo ? CheckBox : TodoSvG}
                className="w-4 h-4"
                alt="Todo"
              />
              Todo
            </span>
            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleFilterData("status", "issolved")}
            >
              <img
                src={filterData.status.isSloved ? CheckBox : TodoSvG}
                className="w-4 h-4"
                alt="Solved"
              />
              Solved
            </span>
            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleFilterData("status", "isattempted")}
            >
              <img
                src={filterData.status.isattempted ? CheckBox : TodoSvG}
                className="w-4 h-4"
                alt="Attempted"
              />
              Attempted
            </span>
          </div>
        </div>

        {/* Difficulty Section */}
        <div>
          <p>Difficulty</p>
          <div className="text-semibold flex gap-3 py-3">
            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleFilterData("difficulty", "iseasy")}
            >
              <img
                src={filterData.difficulty.iseasy ? CheckBox : TodoSvG}
                className="w-4 h-4"
                alt="Easy"
              />
              <span className="text-easyTextColor">Easy</span>
            </span>
            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleFilterData("difficulty", "ismedium")}
            >
              <img
                src={filterData.difficulty.ismedium ? CheckBox : TodoSvG}
                className="w-4 h-4"
                alt="Medium"
              />
              <span className="text-mediumTextColor">Medium</span>
            </span>
            <span
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleFilterData("difficulty", "ishard")}
            >
              <img
                src={filterData.difficulty.ishard ? CheckBox : TodoSvG}
                className="w-4 h-4"
                alt="Hard"
              />
              <span className="text-hardTextColor">Hard</span>
            </span>
          </div>
        </div>

        {/* Show Tags */}
        <span className="flex items-center gap-3 my-3 cursor-pointer" onClick={toggleShowTags}>
          {filterData.showtags ? (
            <img src={CheckBox} className="w-4 h-4" alt="Checked" />
          ) : (
            <img src={TodoSvG} className="w-4 h-4" alt="Unchecked" />
          )}
          <span>Show tags</span>
        </span>
      </div>

      {/* Reset */}
      <div className="flex items-center rounded-lg justify-center cursor-pointer bg-primaryColor mt-4" onClick={resetTags} >
        <span className="p-3">
          <img src={RelaodSVG} alt="" className="w-4 h-4 flip-h p-[2px]" />
        </span>
        <span>Reset</span>
      </div>
    </div>
  );
};

export default Filter;
