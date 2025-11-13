import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import afro from "../pages/imageF/aff.png";
import nachi from "../pages/imageF/my_photo.png";
import shoy from "../pages/imageF/shoyeb.png";

export default function About() {
  const team = [
    {
      name: "Shoyeb Chaudhari",
      role: "Co-Founder | Tech Architect & Innovator",
      image: shoy,
      bio: "Driving innovation across Android, Web, and AI/ML solutions. Skilled in Python, PHP, Firebase, SQL, and AI automation, he focuses on building scalable digital ecosystems that accelerate KodeNeurons’ growth and impact.",
      linkedin: "https://www.linkedin.com/in/shoyeb-chaudhari-033b44234/",
      github: "https://github.com/ShoyebChaudhari45",
      email: "chaudharishoyeb@gmail.com",
      phone: "+91-7499601744",
    },
    {
      name: "Nachiket Shinde",
      role: "Co-Founder | AI Strategist & Product Visionary",
      image: nachi,
      bio: "Leads the AI and machine learning initiatives at KodeNeurons. With a deep passion for intelligent systems and data-driven insights, he transforms complex ideas into practical, high-impact innovations.",
      linkedin: "https://www.linkedin.com/in/nachiket-shinde-a4b378276/",
      github: "https://github.com/Nachiket858",
      email: "nachiketshinde8766@gmail.com",
      phone: "+91-8766055949",
    },
    {
      name: "Afroz Sheikh",
      role: "Co-Founder | UI Engineer & Growth Contributor",
      image: afro,
      bio: "A creative technologist contributing to the growth of KodeNeurons through modern front-end development and seamless user experience design. He bridges design and AI-driven web innovation.",
      linkedin: "https://www.linkedin.com/in/afroz-sheikh-404268262/",
      github: "https://github.com/AfrozSheikh",
      email: "afrozsheikh1112@gmail.com",
      phone: "+91-9766432374",
    },
  ];

  return (
    <div className="bg-[#0B0B0F] text-white min-h-screen py-24 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] mb-6">
          About KodeNeurons
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          KodeNeurons is a next-generation tech startup founded by passionate
          developers committed to transforming ideas into intelligent digital
          products. Our goal is to bridge innovation and practicality through
          AI, automation, and scalable software solutions that empower students,
          startups, and enterprises alike.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {team.map((person, index) => (
          <div
            key={index}
            className="bg-[#101016] rounded-2xl border border-[#1F1F25] shadow-[0_0_25px_rgba(108,99,255,0.2)] p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(108,99,255,0.4)]"
          >
            <div className="relative">
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-40 rounded-full object-cover ring-2 ring-transparent hover:ring-[#6C63FF] transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/20 to-[#00D1FF]/20 blur-xl rounded-full opacity-0 hover:opacity-100 transition duration-500"></div>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              {person.name}
            </h3>
            <p className="text-[#00D1FF] font-medium">{person.role}</p>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {person.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-5 mt-5">
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D1FF] transition"
              >
                <FaLinkedin size={22} />
              </a>
            
               
             
              <a
                href={`mailto:${person.email}`}
                className="text-gray-400 hover:text-[#00D1FF] transition"
              >
                <FaEnvelope size={22} />
              </a>
              <a
                href={`tel:${person.phone}`}
                className="text-gray-400 hover:text-[#00D1FF] transition"
              >
                <FaPhone size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="h-[2px] w-3/4 mx-auto my-20 bg-gradient-to-r from-[#6C63FF] via-[#00D1FF] to-[#6C63FF] opacity-60 rounded-full"></div>

      {/* Vision Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] mb-6">
          Our Vision
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed">
          To redefine innovation through collaboration, technology, and
          creativity. At KodeNeurons, we aim to grow as a tech-driven ecosystem
          where talent meets execution, and every idea turns into a solution
          that creates real-world impact.
        </p>
      </div>
    </div>
  );
}
