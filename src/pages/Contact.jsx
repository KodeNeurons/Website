import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "83e66638-db7b-44ee-b2a8-bedf587bcadb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      event.target.reset();

      // Show success toast
      toast.success("Form submitted successfully! We'll contact you soon.");
    } else {
      console.log("Error", data);

      // Show error toast
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="py-12">
      {/* Toaster for notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Project Info Section */}
      <div className="bg-gray-100 dark:bg-gray-900 py-16 text-gray-700 dark:text-gray-300 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            KodeNeurons: Let's Build Your Project Together
          </h2>
          <p className="text-lg">
            Welcome to KodeNeurons! We specialize in creating custom projects across various
            domains in Computer Science and Engineering. Share your requirements with us by
            filling out the form below, and we'll bring your ideas to life with cutting-edge
            technology and expertise.
          </p>
        </div>
        {/* Animation Container */}
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
            {/* End Animation Container */}
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center py-4 justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
  onSubmit={onSubmit}
  className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 py-6 transform transition-all duration-300 hover:shadow-xl"
>
  {/* Full Name */}
  <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
    <label
      htmlFor="fullName"
      className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
    >
      Your Full Name
    </label>
    <input
      type="text"
      name="fullName"
      id="fullName"
      required
      className="w-full px-3 py-2 border rounded transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    />
  </div>

  {/* Contact Number */}
  <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
    <label
      htmlFor="contactNumber"
      className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
    >
      Contact Number
    </label>
    <input
      type="tel"
      name="contactNumber"
      id="contactNumber"
      required
      className="w-full px-3 py-2 border rounded transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    />
  </div>

  {/* Email */}
  <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
    <label
      htmlFor="email"
      className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
    >
      Email
    </label>
    <input
      type="email"
      name="email"
      id="email"
      required
      className="w-full px-3 py-2 border rounded transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    />
  </div>

  {/* College/Company/Institute */}
  <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
    <label
      htmlFor="institution"
      className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
    >
      College/Company/Institute
    </label>
    <input
      type="text"
      name="institution"
      id="institution"
      required
      className="w-full px-3 py-2 border rounded transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    />
  </div>

  {/* Project Name */}
  <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
    <label
      htmlFor="projectName"
      className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
    >
      Project Name
    </label>
    <input
      type="text"
      name="projectName"
      id="projectName"
      required
      className="w-full px-3 py-2 border rounded transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    />
  </div>

  {/* Project Description */}
  <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
    <label
      htmlFor="projectDescription"
      className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
    >
      Project Description
    </label>
    <textarea
      name="projectDescription"
      id="projectDescription"
      required
      className="w-full px-3 py-2 border rounded transition-all duration-300
                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                focus:outline-none focus:ring-2 focus:ring-blue-500
                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded
              transition-all duration-300 transform
              hover:bg-blue-600 hover:scale-105 hover:shadow-lg
              active:scale-95 focus:outline-none"
  >
    Submit Form
  </button>
</form>
      </div>
    </div>
  );
}
