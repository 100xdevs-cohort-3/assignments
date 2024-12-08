import ProfileAvatar from "./ProfileAvatar";
import LockSvg from "../assets/lock.svg";
import DropdownImg from "../assets/dropdown-down.svg";

const Favourite = () => {
  return (
    <div className="w-1/3 bg-[#3e3e3e] rounded-xl p-6">
      <ProfileAvatar width="20" height="20" br="lg" imgPadding="4" />
      <div>
        <h1 className="text-3xl py-4">Favourite</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Sumana</span>.<span>19 questions</span>.
          <span className="flex gap-2 items-center justify-center hover:bg-[#4b4b4b] rounded-md py-2 px-2 cursor-pointer">
            <img
              src={LockSvg}
              alt="lock svg"
              className="w-5 h-5 object-cover"
            />
            <span>Private</span>
            <span className="w-3 h-3 ">
              <img
                src={DropdownImg}
                alt=""
                className="w-full h-full rotate-[270]"
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
