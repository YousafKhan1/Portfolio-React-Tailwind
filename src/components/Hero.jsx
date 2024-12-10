// eslint-disable-next-line no-unused-vars
import React from "react";
import newImg from "../assets/newID.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={newImg}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold"> I am {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Ishola Deborah Opeyemi
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
        <a className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" href="/src/assets/DeboResume.pdf">Resume</a>
        {/* <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button> */}

        
      </div>
    </div>
  );
};

export default Hero;
