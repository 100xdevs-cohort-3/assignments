import React from "react";

const Profile = ({ imageURL, name, role, review }) => {
  return (
    <div className=" flex justify-start gap-5 w-full">
      <img
        src={imageURL}
        className="border-2 border-black rounded-full w-32 h-32"
      />
      <div className="flex flex-col justify-between bg-black/10 rounded-md p-3 h-32 overflow-hidden">
        <p className="text-black/80 line-clamp-2">{review}</p>
        <p className="text-base font-medium">
          {name}, {role}
        </p>
      </div>
    </div>
  );
};

export default Profile;
