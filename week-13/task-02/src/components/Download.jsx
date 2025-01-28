import React from "react";

function Download() {
  return (
    <section className="my-40 flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">Download the extension</h1>
      <p className="text-gray-500 max-w-lg text-center my-10">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="flex justify-center items-center gap-7 mt-20">
        <Card>
          <img
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-chrome.svg"
            alt="chrome"
          />
          <div className="text-center">
            <p className="font-bold text-lg mb-5">Add to Chrome</p>
            <p className="text-gray-500">Minimum Version 62</p>
          </div>
        </Card>
        <Card>
          <img
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-firefox.svg"
            alt="firefox"
            className="pt-10"
          />
          <div className="text-center">
            <p className="font-bold text-lg mb-5">Add to Firefox</p>
            <p className="text-gray-500">Minimum Version 55</p>
          </div>
        </Card>
        <Card>
          <img
            src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-opera.svg"
            alt="opera"
            className="pt-20"
          />
          <div className="text-center">
            <p className="font-bold text-lg mb-5">Add to Opera</p>
            <p className="text-gray-500">Minimum Version 46</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="shadow-lg w-72 flex flex-col justify-center items-center gap-10 p-5 rounded-md relative">
      {children}
      <img
        src="https://tailwindfromscratch.com/website-projects/bookmark/images/bg-dots.svg"
        alt=""
        className="absolute bottom-20 w-full"
      />
      <button className="cursor-pointer bg-primary p-2 rounded-md text-white hover:text-primary hover:bg-white border-2 border-primary shadow-lg w-full">
        Add & Install Extension
      </button>
    </div>
  );
}

export default Download;
