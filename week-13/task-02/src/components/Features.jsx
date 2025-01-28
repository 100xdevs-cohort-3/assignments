import React, { useState } from "react";

function Features() {
  const [currentPanel, setCurrentPanel] = useState(0);

  const panelData = [
    {
      imageUrl:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-1.svg",
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      imageUrl:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-2.svg",
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      imageUrl:
        "https://tailwindfromscratch.com/website-projects/bookmark/images/illustration-features-tab-3.svg",
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center my-10">
      <h1 className="font-bold text-4xl">Features</h1>
      <p className="text-gray-500 max-w-md text-center my-10">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <FeaturesTabs currentTab={currentPanel} changeTab={setCurrentPanel} />
      <hr className="border-gray-200 w-xl" />

      <div className="flex gap-20 justify-center items-start my-10 *:w-1/2">
        <div className="relative">
          <div className="absolute top-1/2 right-38 bg-primary h-64 w-screen rounded-r-full" />
          <img
            src={panelData[currentPanel].imageUrl}
            alt="hero-image"
            className="z-10 relative"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-10">
          <h1 className="font-bold text-3xl">
            {panelData[currentPanel].title}
          </h1>
          <p className="text-gray-500 max-w-md text-left">
            {panelData[currentPanel].description}
          </p>
          <button className="cursor-pointer bg-primary py-2 px-6 rounded-md text-white hover:text-primary hover:bg-white border-2 border-primary shadow-lg">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturesTabs({ currentTab, changeTab }) {
  return (
    <>
      <div className="flex justify-center items-center gap-20 *:cursor-pointer">
        <button
          className={`text-gray-700 hover:text-secondary py-5 ${
            currentTab === 0 && "border-b-4 border-secondary"
          }`}
          onClick={() => changeTab(0)}
        >
          Simple Bookmarking
        </button>
        <button
          className={`text-gray-700 hover:text-secondary py-5 ${
            currentTab === 1 && "border-b-4 border-secondary"
          }`}
          onClick={() => changeTab(1)}
        >
          Speedy Searching
        </button>
        <button
          className={`text-gray-700 hover:text-secondary py-5 ${
            currentTab === 2 && "border-b-4 border-secondary"
          }`}
          onClick={() => changeTab(2)}
        >
          Easy Sharing
        </button>
      </div>
    </>
  );
}

export default Features;
