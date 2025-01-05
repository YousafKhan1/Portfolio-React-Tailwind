// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Connect
        </motion.h3>
        <motion.p
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm always happy to discuss opportunities or answer your questions.
        </motion.p>

        {/* Contact Details */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex justify-center items-center space-x-2">
            <FaEnvelope className="text-green-400" />
            <a href="mailto:yourfirstemail@example.com" className="hover:underline">
              isholadeborahope@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <FaPhone className="text-green-400" />
            <span>+2348165655608</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;



// import React from 'react'
// import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

// const Contact = () => {
//   return (
//     <div className="bg-black text-white py-20" id="contact">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           <div className="flex-1">
//             <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
//             from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
//             <p>I'm open to discussing web development projects or partnership opportunities.</p>
//             <div className='mb-4 mt-8'>
//                 <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
//                 <a href="mailto:youremail@example.com" className='hover:underline'>
//                     isholadeborahope@gmail.com
//                 </a>
//             </div>
//             <div className='mb-4'>
//                 <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
//                 <span>+2348165655608</span>
//             </div>
//             <div className='mb-4'>
//                 <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
//                 <span>No 58, University Road, Opposite T&K Eatry Ilorin, Kwara State.</span>
//             </div>
//           </div>
//           <div className='flex-1 w-full'>
//             <form className='space-y-4'>
//                 <div>
//                     <label htmlFor="name" className='block mb-2'>Your Name</label>
//                     <input type="text" 
//                     className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400'
//                     placeholder='Enter You Name'/>
//                 </div>
//                 <div>
//                     <label htmlFor="emial" className='block mb-2'>Email</label>
//                     <input type="text" 
//                     className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400'
//                     placeholder='Enter You Email'/>
//                 </div>
//                 <div>
//                     <label htmlFor="message" className='block mb-2'>Message</label>
//                     <textarea type="text" 
//                     className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
//                     focus:border-green-400'
//                     rows="5"
//                     placeholder='Enter You Message'/>
//                 </div>
//                 <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact