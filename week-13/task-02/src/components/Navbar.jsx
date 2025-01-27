import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <img src="https://tailwindfromscratch.com/website-projects/bookmark/images/logo-bookmark.svg" />
      </div>
      <div className="flex justify-center items-center gap-10 tracking-wider uppercase text-gray-500 *:hover:text-secondary">
        <a href="">Features</a>
        <a href="">Download</a>
        <a href="">FAQ</a>
        <button className="cursor-pointer uppercase tracking-wider bg-secondary py-2 px-8 rounded-md text-white shadow-xl hover:bg-white border-2">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
