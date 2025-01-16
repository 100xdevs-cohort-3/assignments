import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="z-0 font-primary flex flex-col justify-center items-center gap-5 mt-32 ">
      <p className="text-lg font-semibold leading-[95%] tracking-tight text-center">
        The World's <br /> <span className="text-primary">Best Educator</span>
        <br /> Are On Coursify
      </p>
      <div className="text-base font-medium flex flex-col justify-center items-center">
        <p>Browse Courses & Find Your Fit.</p>
        <Link
          to="/register"
          className="bg-primary hover:bg-primary-dark text-white p-2 rounded-md px-3"
        >
          <p className="px-1">Register for free</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
