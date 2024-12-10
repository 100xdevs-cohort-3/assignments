import RelaodSVG from "../assets/reload.svg";
import CheckSvg from "../assets/check.svg";

const Progress = () => {
  return (
    <div className="mt-6 w-full hidden md:block">
      <div className="flex items-center justify-between pb-3 ">
        <span>Progress</span>
        <span
          onClick={() => {
            window.location.reload();
          }}
          className="p-2 hover:bg-tirtiaryButtonActiveColor rounded-full cursor-pointer "
        >
          <img src={RelaodSVG} alt="" className="w-4 h-4 flip-h p-[2px]" />
        </span>
      </div>

      <div className="flex w-full gap-2">
        <div className=" bg-primaryColor w-2/3 flex items-center justify-center rounded-md">
          <div className=" w-44 h-44 p-6  relative flex  justify-center">
            <div className="w-full h-full border-4 flex relative items-center flex-col justify-center  border-progressColor rounded-full">
              <p className="text-3xl font-semibold">
                19<span className="text-sm font-normal">/19</span>
              </p>
              <div className="flex gap-1 items-center justify-center">
                <img src={CheckSvg} alt="check-svg" className="w-3 h-3" />
                <span className="text-sm">Solved</span>
              </div>
            </div>
            <div className="absolute bg-primaryColor bottom-6 ">
              <p className="text-center text-xs p-2 text-gray-400">
                0 Attempting
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex gap-2 h-full flex-col text-sm text-center">
          <div className=" bg-primaryColor rounded-md px-3 py-2  ">
            <span className=" text-easyTextColor font-semibold">Easy</span>
            <p>11/11</p>
          </div>
          <div className=" bg-primaryColor rounded-md py-2 ">
            <span className=" text-mediumTextColor font-semibold">Med</span>
            <p>7/7</p>
          </div>
          <div className=" bg-primaryColor rounded-md py-2 ">
            <span className=" text-hardTextColor font-semibold">Hard</span>
            <p>1/1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
