import ProfileAvatar from "./ProfileAvatar";
import LockSvg from "../assets/lock.svg";
import DropdownImg from "../assets/dropdown-down.svg";
import Button from "./Button";
import Progress from "./Progress";
import PlaySvg from "../assets/play.svg";
import ForkSvg from "../assets/fork.svg";

const Favourite = () => {
  return (
    <>
      <div className="ml-1 sm:ml-0  md:max-w-96  md:h-auto mt-8 md:mt-0">
      
        <div className=" bg-secondaryColor p-6 md:p-6 rounded-xl w-full flex flex-col items-center md:items-start">
        <div className="w-20 h-20">
          <ProfileAvatar width={8} height={8} br="lg" imgPadding="4" />
        </div>

        <div className="w-full text-center md:text-left">

          <h1 className="text-3xl py-4">Favourite</h1>

          <div className="flex w-full items-center gap-2 text-sm justify-center md:justify-start">
            <span>Sumana</span>.<span className="w-24">19 questions</span>.
            <span className="flex gap-2 items-center justify-center hover:bg-hoverColor rounded-md py-2 px-2 cursor-pointer">
              <img
                src={LockSvg}
                alt="lock svg"
                className="w-5 h-5 object-cover"
              />
              <span>Private</span>
              <span className="w-3 h-3">
                <img
                  src={DropdownImg}
                  alt=""
                  className="w-full h-full"
                />
              </span>
            </span>
          </div>

          <div className="flex gap-2 py-6 md:border-b border-gray-600 justify-center md:justify-start">
            <Button icon={PlaySvg} text="Practice" className="primary-btn py-1 px-4" />
            <Button icon={ForkSvg} text="" className="round-btn" />
          </div>

           <div className="md:hidden text-sm bg-primaryColor text-left max-w-48 py-2 flex gap-2 justify-center items-center px-4 rounded-lg ">
            <p>Progress: <span className=" text-lg  font-semibold">19</span> Solved</p>
            <span className="w-3 h-3 ">
                <img
                  src={DropdownImg}
                  alt=""
                  className="w-full h-full rotate-n-90"
                />
              </span>
          </div>

          <Progress />

        </div>
        </div>
      </div>
    </>
  );
};

export default Favourite;
