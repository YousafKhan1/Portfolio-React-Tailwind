import React from "react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Designing interactive, responsive, and modern user interfaces that elevate the user experience.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building solid server-side logic and advanced database systems that provide a strong foundation for your web applications.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 4,
    title: "Postman API Testing",
    description: "Using Postman to execute detailed API tests, ensuring your API endpoints work seamlessly, and optimizing response and error handling.",
  },
  {
    id: 5,
    title: "RESTful API Services",
    description: "Connecting RESTful APIs to reliable databases to manage and retrieve data efficiently, powering your applications with real-time information.",
  },
  {
    id: 6,
    title: "Manual Testing",
    description: "Manually testing the software carefully to find and fix problems, making sure it works as expected, while focusing on user experience, functionality, and overall quality.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
  