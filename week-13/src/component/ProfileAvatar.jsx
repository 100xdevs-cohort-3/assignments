/* eslint-disable react/prop-types */
import ProfileImg from "../assets/start-icon.svg"

const ProfileAvatar = ({ br, imgPadding }) => {
  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const paddingClass = {
    0: "p-0",
    1: "p-1",
    2: "p-2",
    3: "p-3",
    4: "p-4",
  };

  return (
    <div className={`${roundedClass[br] || ""} w-full h-full bg-white`}>
      <img
        className={`${paddingClass[imgPadding] || ""} w-full h-full object-cover`}
        src={ProfileImg}
        alt="Profile"
      />
    </div>
  );
};

export default ProfileAvatar;
