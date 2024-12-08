/* eslint-disable react/prop-types */
import Favourite from "./Favourite";
const MainSection = ({toggleSideBar}) => {
  return (
    <>
      <div className={`w-full bg-[#282828] h-full  py-4 px-16 ${toggleSideBar ? "" : "pl-0"}`}>
        <div className="flex w-full h-full">
            <Favourite/>
            <div className="2/3">QuestionList</div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
