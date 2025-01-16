//  implement the home page UI here.
import React from "react";

// components imports
// import Login from "../components/Login";
// import Register from "../components/Register";
// import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Reviews />
    </>
  );
};

export default Home;
