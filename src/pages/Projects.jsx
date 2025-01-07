import React, { useState } from "react";

const projects = [
  {
    id: "1",
    title: "E-Notes App",
    description: "A digital notebook for organizing notes efficiently.",
    technologies: ["React", "Node.js", "Tailwind-CSS"],
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Smart Inventory Management System",
    description: "ML-based inventory prediction and management solution.",
    technologies: ["Python", "PyTorch", "React", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Data Analytics Dashboard",
    description: "Real-time analytics platform for business intelligence.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "4",
    title: "Fitness Tracker App",
    description: "A mobile app to track fitness goals and activities.",
    technologies: ["React Native", "Firebase", "Tailwind-CSS"],
    image:
      "https://images.unsplash.com/photo-1517960413843-0aee8e2d3f19?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "5",
    title: "Fraud Detection System",
    description: "AI-powered system to detect fraudulent transactions.",
    technologies: ["Python", "TensorFlow", "Flask", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1508387021346-dffa5ff2b6b2?auto=format&fit=crop&q=80&w=1000",
  },
];

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
      <div className="w-full sm:w-3/4 px-6">
        {selectedProject ? (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
            </div>
          </>
        ) : (
          <p className="text-lg text-gray-600">Select a project to view details.</p>
        )}
      </div>
    </div>
  );
}
