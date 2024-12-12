"use client";

import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white h-12 px-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-semibold">
        <a href="#">Syeda Sabahat</a>
      </h1>

      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-5 absolute md:static bg-blue-600 md:bg-transparent top-12 left-0 w-full md:w-auto p-5 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
          <li><a href="/" className="hover:text-red-600">Home</a></li>
          <li><a href="/aboutus" className="hover:text-red-600">About-us</a></li>
          <li><a href="/contactus" className="hover:text-red-600">Contact-us</a></li>
          <li><a href="#" className="hover:text-red-600">Login</a></li>
          <li><a href="#" className="hover:text-red-600">Sign-up</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

