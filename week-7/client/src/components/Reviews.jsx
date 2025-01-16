import React from "react";
import Profile from "./Profile";

const Reviews = () => {
  return (
    <div className="font-primary flex flex-col justify-center items-start gap-2 px-10 mt-32">
      <p className="text-md font-medium">Join Our Community of Learners.</p>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <Profile
          imageURL="/globe.png"
          name="Learn HTML"
          role="John Doe"
          review="Best websiteBest websiteBest web"
        />
        <Profile
          imageURL="/certificate.svg"
          name="Learn HTML"
          role="John Doe"
        />
        <Profile imageURL="" name="Learn HTML" role="John Doe" />
        <Profile imageURL="" name="Learn HTML" role="John Doe" />
      </div>
    </div>
  );
};

export default Reviews;
