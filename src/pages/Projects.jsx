import React, { useState } from "react";
import projects from './project/data'


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row bg-white py-24 sm:py-32">
      {/* Sidebar with Dropdown for Mobile */}
      <div className="w-full sm:w-1/4 px-6 max-h-[80vh] overflow-y-auto sm:mr-6">
        {/* Dropdown for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleDropdown}
            className="w-full text-left py-2 px-4 rounded bg-blue-100 text-blue-700"
          >
            Select Project
          </button>
          {isDropdownOpen && (
            <ul className="space-y-2 mt-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 text-gray-900"
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar for Desktop/Tablets */}
        <div className="hidden sm:block">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Projects</h2>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 text-gray-900"
                >
                  {project.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project Details */}
      <div className="w-full sm:w-3/4 px-4 sm:px-6">
  {selectedProject ? (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
        {selectedProject.title}
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">{selectedProject.description}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900">Technologies</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {selectedProject.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full max-h-[400px] object-contain rounded-lg shadow-md"
        />
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center h-full">
      <p className="text-lg text-gray-600 text-center">Select a project to view details.</p>
    </div>
  )}
</div>

    </div>
  );
}
