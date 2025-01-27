import React from "react";

function Hero() {
  return (
    <section className="flex justify-between items-center my-10 relative">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold my-10">A Simple Bookmark Manager</h1>
        <p className="text-2xl text-gray-500 line-clamp-4 my-5 max-w-md">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="my-10 flex justify-start items-center gap-5 font-medium">
          <button className="cursor-pointer bg-primary p-4 rounded-md text-white hover:text-primary hover:bg-white border-2 border-primary shadow-lg">
            Get it On Chrome
          </button>
          <button className="cursor-pointer bg-gray-300 p-4 rounded-md hover:text-gray-600 hover:bg-white border-2 border-gray-300 shadow-lg">
            Get it On Firefox
          </button>
        </div>
      </div>
      <div className="mx-10 relative">
        <div className="absolute top-1/2 left-38 bg-primary h-64 w-full rounded-l-full" />
        <img
          src="https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-hero.svg"
          alt="hero-image"
          className="z-10 relative"
        />
      </div>
    </section>
  );
}

export default Hero;
