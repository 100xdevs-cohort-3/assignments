import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="font-display overflow-hidden">
      <div className="px-15 py-10">
        <Navbar />
        <Hero />
        <Features />
        <Download />
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
