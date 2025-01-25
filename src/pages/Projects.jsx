

// import React, { useState, useEffect } from "react";
// import { getProjects } from "../api"; // Import the API function for fetching projects

// export default function Projects() {
//   const [projects, setProjects] = useState([]); // For dynamically fetched projects
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isImageLoading, setIsImageLoading] = useState(false); // New state for image loading
//   const [loading, setLoading] = useState(true); // Loading state for fetching

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleProjectSelect = (project) => {
//     setSelectedProject(null); // Reset selection for a smoother transition
//     setIsImageLoading(true); // Set loading state
//     setTimeout(() => setSelectedProject(project), 100); // Delay for UI transition
//   };

//   // Fetch projects dynamically from the backend
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const { data } = await getProjects(); // Fetch projects from backend
//         setProjects(data); // Update the projects list
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       } finally {
//         setLoading(false); // Stop the loading spinner
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Loader component
//   const Loader = () => (
//     <div className="mt-10 flex justify-center items-center">
//       <div className="loader">
//         <svg viewBox="0 0 80 80">
//           <circle id="test" cx="40" cy="40" r="32"></circle>
//         </svg>
//       </div>

//       <div className="loader triangle">
//         <svg viewBox="0 0 86 80">
//           <polygon points="43 8 79 72 7 72"></polygon>
//         </svg>
//       </div>

//       <div className="loader">
//         <svg viewBox="0 0 80 80">
//           <rect x="8" y="8" width="64" height="64"></rect>
//         </svg>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-900 py-24 sm:py-32">
//       {/* Sidebar with Dropdown for Mobile */}
//       <div className="w-full sm:w-1/4 px-6 max-h-[80vh] overflow-y-auto sm:mr-6">
//         {/* Dropdown for Mobile */}
//         <div className="sm:hidden">
//           <button
//             onClick={toggleDropdown}
//             className="w-full text-left py-2 px-4 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300"
//           >
//             Select Project
//           </button>
//           {isDropdownOpen && (
//             <ul className="space-y-2 mt-2">
//               {projects.map((project) => (
//                 <li key={project._id}>
//                   <button
//                     onClick={() => {
//                       handleProjectSelect(project);
//                       setIsDropdownOpen(false);
//                     }}
//                     className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-300"
//                   >
//                     {project.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Sidebar for Desktop/Tablets */}
//         <div className="hidden sm:block">
//           <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
//           <ul className="space-y-2">
//             {projects.map((project) => (
//               <li key={project._id}>
//                 <button
//                   onClick={() => handleProjectSelect(project)}
//                   className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-300"
//                 >
//                   {project.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Project Details */}
//       <div className="w-full sm:w-3/4 px-4 sm:px-6">
//         {selectedProject ? (
//           <>
//             <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//               {selectedProject.title}
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
//             <div className="mt-6">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies</h3>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {selectedProject.technologiesUsed.split(",").map((tech) => (
//                   <span
//                     key={tech}
//                     className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-700 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-6 relative">
//               {isImageLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
//                   <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
//                 </div>
//               )}
//               <img
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 className={`w-full max-h-[400px] object-contain rounded-lg shadow-md ${
//                   isImageLoading ? "hidden" : "block"
//                 }`}
//                 onLoad={() => setIsImageLoading(false)} // Update loading state when image loads
//               />
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <p className="text-lg text-gray-600 dark:text-gray-300 text-center">Select a project to view details.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { getProjects } from "../api"; // Import the API function for fetching projects
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

export default function Projects() {
  const [projects, setProjects] = useState([]); // For dynamically fetched projects
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false); // New state for image loading
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const navigate = useNavigate(); // Initialize navigate function

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(null); // Reset selection for a smoother transition
    setIsImageLoading(true); // Set loading state
    setTimeout(() => setSelectedProject(project), 100); // Delay for UI transition
  };

  // Fetch projects dynamically from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects(); // Fetch projects from backend
        setProjects(data); // Update the projects list
        if (data.length > 0) {
          setSelectedProject(data[0]); // Set the first project as the default selected project
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchProjects();
  }, []);

  // Loader component
  const Loader = () => (
    <div className="mt-10 flex justify-center items-center">
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>

      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      {/* Main Content */}
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar with Dropdown for Mobile */}
        <div className="w-full sm:w-1/4 px-6 max-h-[80vh] overflow-y-auto sm:mr-6">
          {/* Dropdown for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleDropdown}
              className="w-full text-left py-2 px-4 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300"
            >
              Select Project
            </button>
            {isDropdownOpen && (
              <ul className="space-y-2 mt-2">
                {projects.map((project) => (
                  <li key={project._id}>
                    <button
                      onClick={() => {
                        handleProjectSelect(project);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-300"
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
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project._id}>
                  <button
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full text-left py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-300 ${
                      selectedProject && selectedProject._id === project._id ? "bg-gray-200 dark:bg-gray-800" : ""
                    }`}
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
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {selectedProject.title}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">{selectedProject.description}</p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.technologiesUsed.split(",").map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-700 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 relative">
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
                  </div>
                )}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`w-full max-h-[400px] object-contain rounded-lg shadow-md ${
                    isImageLoading ? "hidden" : "block"
                  }`}
                  onLoad={() => setIsImageLoading(false)} // Update loading state when image loads
                />
              </div>
              {/* Contact to Buy Button */}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => navigate("/about")} // Redirect to About page
                  className="nav-button bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contact to Buy
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">Select a project to view details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
