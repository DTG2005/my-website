"use client";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full row-start-1 sm:justify-items-start bg-slate-700 h-16 px-12">
      <p className="text-3xl font-bold">DTG2005</p>
      <div className="flex gap-4 items-center">
        <button
          className="text-2xl font-bold transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white h-full"
          onClick={() => window.open("https://github.com/DTG2005", "_blank")}
        >
          GitHub
        </button>
        <button
          className="text-2xl font-bold transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/david-taylor-7b5b021b0/",
              "_blank"
            )
          }
        >
          LinkedIn
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
