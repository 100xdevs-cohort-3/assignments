import Questions from "../component/Questions";
import FilterSvg from "../assets/filter.svg";
import FilterSvg2 from "../assets/filter-2.svg";
import CrossSvg from "../assets/cross.svg";
import Button from "../component/Button";
import Filter from "../component/Filter";
import questions from "../questions.json";
import { useState } from "react";

const QuestionList = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    status: {
      istodo: false,
      isSloved: true,
      isattempted: false,
    },
    difficulty: {
      iseasy: false,
      ismedium: false,
      ishard: false,
    },
    showtags: false,
  });

  const handleFilterData = (category, key) => {
    setFilterData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key], // Toggle the specific key
      },
    }));
  };

  const FilterQuestion = questions.filter((q) => {
    const { iseasy, ismedium, ishard } = filterData.difficulty;

    if (iseasy || ismedium || ishard) {
      if (iseasy && q.category == "Easy") return true;
      if (ismedium && q.category == "Medium") return true;
      if (ishard && q.category == "Hard") return true;

      return false;
    }

    return true;
  });

  const toggleShowTags = () => {
    setFilterData((prev) => ({
      ...prev,
      showtags: !prev.showtags,
    }));
  };

  const resetTags = () => {
    setFilterData({
      status: {
        istodo: false,
        isSloved: true,
        isattempted: false,
      },
      difficulty: {
        iseasy: false,
        ismedium: false,
        ishard: false,
      },
      showtags: false,
    });
  };

  const toggleFilterfn = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <div className=" w-full md:px-6 relative ">
      <div className="flex gap-2">
        <Button
          icon={ toggleFilter ? FilterSvg : FilterSvg2}
          onClick={toggleFilterfn}
          text="Filter"
          className={`primary-btn py-2 px-4 text-sm ${toggleFilter ? ` bg-primaryColor text-white border border-gray-600` : "" } `}
        />

        <Button
          icon={CrossSvg}
          flip={true}
          text="Easy"
          className={`border border-primaryColor rounded-full py-2 px-3 text-sm 
          ${filterData.difficulty.iseasy ? `block` : `hidden` } `}
          onClick={() => handleFilterData("difficulty", "iseasy")}

        />
        <Button
          icon={CrossSvg}
          flip={true}
          text="Medium"
          className={`border border-primaryColor rounded-full py-2 px-3 text-sm 
          ${filterData.difficulty.ismedium ? `block` : `hidden` } `}
          onClick={() => handleFilterData("difficulty", "ismedium")}

        />
        <Button
          icon={CrossSvg}
          flip={true}
          text="Hard"
          className={`border border-primaryColor rounded-full py-2 px-3 text-sm 
          ${filterData.difficulty.ishard ? `block` : `hidden` } `}
          onClick={() => handleFilterData("difficulty", "ishard")}

        />
        
      </div>
      <Filter
        toggleFilter={toggleFilter}
        filterData={filterData}
        handleFilterData={handleFilterData}
        toggleShowTags={toggleShowTags}
        resetTags={resetTags}
      />
      <Questions questions={FilterQuestion} filterData={filterData} />
    </div>
  );
};

export default QuestionList;
