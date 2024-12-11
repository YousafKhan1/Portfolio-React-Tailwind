// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-black text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Debs</div>
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 lg:static absolute bg-black left-0 w-full lg:w-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "top-12" : "top-[-300px]"
          }`}
        >
          {["Home", "About", "Services", "Contact"].map((link, index) => (
            <motion.li
              key={index}
              className="py-2 lg:py-0 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={menuVariants}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 text-white hover:text-green-400"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
//     <div className='container py-2 flex justify-center md:justify-between items-center'>
//         <div className='text-2xl font-bold hidden md:inline'>Debs</div>
//         <div className='space-x-6'>
//             <a href="#home" className='hover:text-gray-400'>Home</a>
//             <a href="#about" className='hover:text-gray-400'>About Me</a>
//             <a href="#service" className='hover:text-gray-400'>Services</a>
//             <a href="#project" className='hover:text-gray-400'>Projects</a>
//             <a href="#contact" className='hover:text-gray-400'>Contact</a>
//         </div>

//     </div>
// </nav>
