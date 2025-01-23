import image from './pngtree-web-programmer-avatar-png-image_12529205.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import afro from '../pages/imageF/aff.png'
import nachi from '../pages/imageF/nachu.jpg' 
import shoy from '../pages/imageF/shoyeb.png'
export default function About() {
  const team = [
    {
      name: 'Shoyeb Chaudhari',
      role: 'Co-Founder & Developer',
      image: `${shoy}`,
      bio: 'A coder specializing in Android development, PHP, SQL, Firebase, and web technologies, constantly striving to build innovative and impactful solutions.',
      linkedin: 'https://www.linkedin.com/in/shoyeb-chaudhari-033b44234/',
      github: 'https://github.com/ShoyebChaudhari45',
      email: 'chaudharishoyeb@gmail.com',
      phone: '+91-7499601744',
    },
    {
      name: 'Nachiket Shinde',
      role: 'Co-Founder & Developer',
      image: `${nachi}`,
      bio: 'A dedicated coder with expertise in AI, ML, and software development. Focused on building innovative solutions, exploring new technologies, and solving real-world problems creatively.',
      linkedin: 'https://www.linkedin.com/in/nachiket-shinde-a4b378276/',
      github: 'https://github.com/Nachiket858',
      email: 'nachiketshinde8766@gmail.com',
      phone: '+91-8766055949',
    },
    {
      name: 'Afroz Sheikh',
      role: 'Co-Founder & Developer',
      image: `${afro}`,
      bio: 'A passionate coder and beginner in machine learning, skilled in building innovative projects, from AI-powered platforms to React-based applications, driven by creativity and growth.',
      linkedin: 'https://www.linkedin.com/in/afroz-sheikh-404268262/',
      github: 'https://github.com/AfrozSheikh',
      email: 'afrozsheikh1112@gmail.com',
      phone: '+91-9766432374',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            We are a team of passionate technologists dedicated to solving complex problems through innovative solutions.
            Our mission is to empower businesses with cutting-edge technology solutions that drive growth and efficiency.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-start">
              <img
  className="w-[70%] rounded-full object-cover 
            transform transition-all duration-300
            hover:scale-110 hover:shadow-xl
            group-hover:opacity-90
            cursor-pointer
            ring-2 ring-offset-2 ring-transparent
            hover:ring-blue-500
            aspect-square" // This ensures perfect circle
  src={person.image}
  alt={person.name}
  onError={(e) => {
    e.target.src = "/api/placeholder/200/200"; // Fallback image
  }}
/>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-blue-600 dark:text-blue-400">
                {person.role}
              </p>
              <div className="flex mt-4 gap-4">
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={person.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                {person.bio}
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400 flex items-center">
                <FaEnvelope className="mr-2 text-blue-600" />
                <a href={`mailto:${person.email}`} className="hover:underline">
                  {person.email}
                </a>
              </p>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 flex items-center">
                <FaPhone className="mr-2 text-blue-600" />
                <a href={`tel:${person.phone}`} className="hover:underline">
                  {person.phone}
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Our Vision
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            To be the leading provider of innovative technology solutions that transform businesses and drive digital evolution.
            We strive to create lasting impact through our commitment to excellence and cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
}
