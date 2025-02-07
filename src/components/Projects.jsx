
import React from 'react'
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>

              <p className="mt-2 text-gray-300">{project.description}</p>

             
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>         
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects
