import React from "react";
import Card from "./Card";

const Explore = () => {
  return (
    <div className="font-primary flex flex-col justify-center items-center gap-2 px-5 mt-32">
      <p className="text-md font-medium">Explore Courses</p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Card imageURL="" title="Learn HTML" creator="John Doe" />
        <Card imageURL="" title="Learn HTML" creator="John Doe" />
        <Card imageURL="" title="Learn HTML" creator="John Doe" />
        <Card imageURL="" title="Learn HTML" creator="John Doe" />
      </div>
    </div>
  );
};

export default Explore;
