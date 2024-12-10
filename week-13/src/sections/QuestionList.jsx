import Questions from "../component/Questions";
import FilterSvg from "../assets/filter.svg";
import CrossSvg from "../assets/cross.svg";
import Button from "../component/Button";
import Filter from "../component/Filter";
import { useState } from "react";

const QuestionList = () => {
  const [toggleFilter, setToggleFilter] = useState(true);
  const filterData = [{
    status : {
      istodo: false,
      isloved : false,
      isattempted : false
    },
    difficulty : {
      iseasy : false,
      ismedium : false,
      ishard : false
    },
    showtags : false
  }]

  const seletedArray = [];

  console.log(seletedArray);

  const handleFilterData = () => {}

  const toggleFilterfn = () => {
    console.log(toggleFilter);
    setToggleFilter(!toggleFilter);
  };

  return (
    <div className=" w-full md:px-6 h-screen relative ">
      <div className="flex gap-2">
        <Button
          icon={FilterSvg}
          onClick={toggleFilterfn}
          text="Filter"
          className="primary-btn py-1 px-4 text-sm"
        />

        <Button
          icon={CrossSvg}
          flip={true}
          text="Easy"
          className="border border-primaryColor rounded-full py-2 px-3 text-sm "
        />
      </div>
      <Filter toggleFilter={toggleFilter} filterData={filterData} handleFilterData={handleFilterData}/>
      <Questions />
    </div>
  );
};

export default QuestionList;
