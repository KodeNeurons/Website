import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadProject } from '../api';

const UploadForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologiesUsed: '',
        password: '',
    });
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('image', image);
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));

        setResult('Uploading...');
        try {
            await uploadProject(data);
            setResult('Project uploaded successfully!');
        } catch (error) {
            setResult('Error: ' + (error.response?.data?.error || 'An error occurred.'));
        }
    };

    return (
        <div className="py-12">
            {/* Collaboration Page Header */}
            <div className="bg-gray-100 dark:bg-gray-900 py-16 text-gray-700 dark:text-gray-300 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">
                        KodeNeurons: Showcase & Collaborate
                    </h2>
                    <p className="text-lg">
                        Welcome to the KodeNeurons collaboration platform! Share your innovative
                        projects with us, and we’ll help showcase them to a wide audience of potential
                        buyers and collaborators. Submit your project details below, and let’s connect
                        your work with the right people.
                    </p>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex flex-col items-center py-4 justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded px-8 py-6 transform transition-all duration-300 hover:shadow-xl"
                >
                    <h2 className="text-2xl font-bold mb-4 text-center dark:text-gray-300">
                        Upload Your Project
                    </h2>

                    {/* Title */}
                    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
                        <label
                            htmlFor="title"
                            className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
                        >
                            Project Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter project title"
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded transition-all duration-300
                                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
                        >
                            Upload Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            id="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                            className="w-full px-3 py-2 border rounded transition-all duration-300
                                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
                        >
                            Project Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Enter project description"
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded transition-all duration-300
                                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        ></textarea>
                    </div>

                    {/* Technologies Used */}
                    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
                        <label
                            htmlFor="technologiesUsed"
                            className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
                        >
                            Technologies Used
                        </label>
                        <input
                            type="text"
                            name="technologiesUsed"
                            id="technologiesUsed"
                            placeholder="e.g., React, Node.js, Python"
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded transition-all duration-300
                                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4 transform transition-all duration-300 hover:translate-x-2">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 dark:text-gray-300 font-bold mb-2 transition-all duration-300 hover:text-blue-500"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded transition-all duration-300
                                hover:border-blue-500 hover:shadow-lg hover:scale-[1.02]
                                focus:outline-none focus:ring-2 focus:ring-blue-500 
                                dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            * Contact admin to get the password.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded
                            transition-all duration-300 transform
                            hover:bg-blue-600 hover:scale-105 hover:shadow-lg
                            active:scale-95 focus:outline-none"
                    >
                        Upload Project
                    </button>
                </form>

                {/* Redirect Button */}
                <button
                    onClick={() => navigate('/about')}
                    className="mt-6 bg-gray-700 text-white font-bold py-2 px-4 rounded
                        transition-all duration-300 transform
                        hover:bg-gray-800 hover:scale-105 hover:shadow-lg
                        active:scale-95 focus:outline-none"
                >
                    Contact Here
                </button>

                {/* Result Message */}
                {result && (
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        {result}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UploadForm;
