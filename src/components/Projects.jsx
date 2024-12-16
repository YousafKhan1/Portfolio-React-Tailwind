// eslint-disable-next-line no-unused-vars
import React from "react";
import vetlepImage from "../../public/assets/vetlepImage.png";
import StudentImage from "../../public/assets/studentImage.png";
import collegeImage from "../../public/assets/collegeImage.png";
import interior from "../../public/assets/interior.png";
import chronicles from "../../public/assets/chronicles.png";
import github from "../../public/assets/github.png";


const projects = [
  {
    id: 1,
    name: "Vetlep",
    technologies: "Nextjs",
    image: vetlepImage,
    github: "https://www.vetlep.com/",
  },
  {
    id: 2,
    name: "Student First",
    technologies: "Nextjs",
    image: StudentImage,
    github: "https://studentfirst.vercel.app/",
  },
  {
    id: 3,
    name: "Valdymas College",
    technologies: "Nextjs",
    image: collegeImage,
    github: "https://valdymas-college.vercel.app/",
  },
  {
    id: 4,
    name: "Chronicles",
    technologies: "React",
    image: chronicles,
    github: "https://clcfreedomchronicles.com/",
  },
  {
    id: 5,
    name: "Github App",
    technologies: "React",
    image: github,
    github: "https://exam-project-alt-school.netlify.app/",
  },
  {
    id: 6,
    name: "Interior Designer",
    technologies: "React",
    image: interior,
    github: "https://revampinterior.netlify.app/",
  },
];


const wordpressProjects = [
  {
    id: 1,
    name: "Valdymas Intelligence",
    technologies: "WordPress, Elementor",
    image: "../../public/assets/intelligence.png",
    github: "https://valdymasintelligence.org/",
  },
  {
    id: 2,
    name: "ATK Fashion",
    technologies: "WordPress, WooCommerce",
    image: "../../public/assets/fashion.png",
    github: "https://atkfhouse.com/",
  },
  {
    id: 3,
    name: "Valdymas Africa",
    technologies: "WordPress, LearnDash",
    image: "../../public/assets/africa.png",
    github: "https://valdymasafrica.org/",
  },
  {
    id: 4,
    name: "Transforming the Impossible",
    technologies: "WordPress, Divi",
    image: "../../public/assets/transform.png",
    github: "https://valdymasintelligence.org/books/",
  },
  {
    id: 5,
    name: "Deep Green",
    technologies: "WordPress, Custom Theme",
    image: "../../public/assets/deepgreen.png",
    github: "https://example-education.com/",
  },
  {
    id: 6,
    name: "ATK",
    technologies: "WordPress, The Events Calendar",
    image: "../../public/assets/atk.png",
    github: "https://atkfhouse.com/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* My Projects Section */}
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>

        {/* WordPress Projects Section */}
        <h2 className="text-4xl font-bold text-center mt-20 mb-12">WordPress Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordpressProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
