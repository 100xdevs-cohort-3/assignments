import React from "react";

const Card = ({ imageURL, title, creator }) => {
  return (
    <div className="border-2 border-black/10 rounded-md p-2 w-60 h-72 flex flex-col justify-end">
      <img src={imageURL} alt="" />
      <p className="text-base font-medium">{title}</p>
      <p className="text-sm text-black/70">{creator}</p>
    </div>
  );
};
export default Card;
