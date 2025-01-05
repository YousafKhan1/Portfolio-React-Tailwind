/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import deb from "/public/assets/deb.png";


const Hero = ({ isMenuOpen }) => {
  return (
    <div
      className={`bg-black text-white text-center py-16 relative z-10 transition-transform duration-300 ${
        isMenuOpen ? "translate-y-48" : "translate-y-0"
      }`}
    >
      <img
        src={deb}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        {" "}
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Ishola Deborah Opeyemi
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <a
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          href="/DeboResume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
