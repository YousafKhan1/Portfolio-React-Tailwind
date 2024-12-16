// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaDatabase } from "react-icons/fa";
import deb from "../../public/assets/debbi.png"
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <motion.div
      className="bg-black text-white py-20" 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={deb}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate frontend developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create seamless and efficient user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <FaHtml5 className="text-6xl text-red-500" />
                <p className="mt-2">HTML</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <FaCss3Alt className="text-6xl text-blue-500" />
                <p className="mt-2">CSS</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <FaReact className="text-6xl text-cyan-500" />
                <p className="mt-2">React</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <SiNextdotjs className="text-6xl text-gray-800" />
                <p className="mt-2">Next.js</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <SiTypescript className="text-6xl text-blue-700" />
                <p className="mt-2">TypeScript</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <FaWordpress className="text-6xl text-blue-600" />
                <p className="mt-2">WordPress</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
              >
                <FaDatabase className="text-6xl text-green-500" />
                <p className="mt-2">Supabase</p>
              </motion.div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  20+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

// import React from "react";
// import deb from "../assets/debbi.png";

// const About = () => {
//   return (
//     <div className="bg-black text-white py-20 scroll-smooth" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <img
//             src={deb}
//             alt=""
//             className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
//           />
//           <div className="flex-1">
//             <p className="text-lg mb-8">
//               I am a passionate frontend developer with a focus on building
//               modern and responsive web applications. With a strong foundation
//               in  frontend technologies, I strive to create
//               seamless and efficient user experiences.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   HTML & CSS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-10/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   React JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-11/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   TypeScript
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-9/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   WordPress
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-9/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   Supabase
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
//                     transform transition-transform duration-300 hover:scale-105 w-9/12"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 flex justify-between text-center">
//                 <div>
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                         3+
//                     </h3>
//                     <p>Years Experience</p>
//                 </div>
//                 <div>
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                         20+
//                     </h3>
//                     <p>Projects Completed</p>
//                 </div>
//                 <div>
//                     <h3 className="text-2xl font-bold text-transparent bg-clip-text 
//                 bg-gradient-to-r from-green-400 to-blue-500">
//                         10+
//                     </h3>
//                     <p>Happy Clients</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
