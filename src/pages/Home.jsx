import {
  Brain,
  Code,
  Database,
  Layers,
  CheckCircle,
  Coffee,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js
import "./animation.css";

const features = [
  {
    name: "Custom Project Solutions",
    description:
      "Get professional help with your projects in AI, web development, mobile apps, and more - perfect for students and organizations.",
    icon: CheckCircle,
  },
  {
    name: "Competitive Pricing",
    description:
      "High-quality projects at budget-friendly prices. Get the best value for your investment.",
    icon: Coffee,
  },
  {
    name: "Latest Technologies",
    description:
      "Implement cutting-edge technologies like AI, Machine Learning, and Full Stack Development in your projects.",
    icon: Code,
  },
  {
    name: "Excellence Guaranteed",
    description:
      "Deliver impressive results with our professionally crafted solutions that meet your specific requirements.",
    icon: Trophy,
  },
];

const technologies = [
  'AI/ML Projects',
  'Android Apps',
  'Web Development',
  'React Projects',
  'Java Projects',
  'Python Projects',
  'Database Projects',
  'Full Stack Projects',
  'Enterprise Solutions',
  'Custom Software',
  'Research Projects'
];

export default function Home() {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".typed-output", {
      strings: technologies,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup Typed.js instance on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <style jsx>{`
              .glitch-effect {
                --c: #fff; /* text color */
                color: #0000; /* transparent text */
                border: none;
                transform: perspective(500px)
                  rotateY(calc(20deg * var(--_i, -1)));
                text-shadow: calc(var(--_i, -1) * 0.08em) -0.01em 0 var(--c),
                  calc(var(--_i, -1) * -0.08em) 0.01em 2px #0004;
                outline-offset: 0.1em;
                transition: 0.3s;
                display: inline-block; /* Ensure the element is inline-block for proper positioning */
                font-weight: bold;
                font-size: 3rem; /* Adjust font size as needed */
                margin: 0;
                cursor: pointer;
                padding: 0.1em 0.3em; /* Adjust padding as needed */
              }

              .glitch-effect:hover,
              .glitch-effect:focus-visible {
                --_p: 0%;
                --_i: 1;
              }

              .glitch-effect:active {
                text-shadow: none;
                color: var(--c);
                transition: 0s;
              }
            `}</style>

            <h1 className="glitch-effect font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Your Idea, Our Code
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              We are <strong>CSMSS Chh. Shahu College of Engineering</strong>{" "}
              students from
              <strong> CSE Third Year (TY)</strong>. We specialize in creating
              professional solutions in AI, Web Development, Mobile Apps, and
              more - all at competitive prices!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                data-text="Book Your Project"
                className="nav-button bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Book Your Project
              </Link>
              <Link
                to="/projects"
                data-text="View Our Projects"
                className="nav-button bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Our Projects <span aria-hidden="true">→</span>
              </Link>
            </div>

            

            {/* Dynamic Typed.js Text */}
            <div className="mt-8 text-xl font-bold text-blue-600 dark:text-blue-400">
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8">
          We Provide Software Solutions On :
        </h3>
              <span className="typed-output text-4xl "></span>
            </div>
          </div>
        </div>
      </div>

    

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Why Choose Us?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Your Trusted Technology Partner
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            As CSMSS CSE TY students, we understand the challenges and
            expectations of academic and professional projects. We deliver
            solutions that meet your requirements while being cost-effective.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="my-10">
       
       <div className="flex flex-wrap justify-center gap-4">
         {technologies.map((tech) => (
           <span
             key={tech}
             className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium"
           >
             {tech}
           </span>
         ))}
       </div>
     </div>
      </div>
    </div>
  );
}

// import { Brain, Code, Database, Layers, CheckCircle, Coffee, Trophy } from 'lucide-react';
// import { Link } from "react-router-dom";

// const features = [
//   {
//     name: 'Custom Project Solutions',
//     description: 'Get professional help with your projects in AI, web development, mobile apps, and more - perfect for students and organizations.',
//     icon: CheckCircle,
//   },
//   {
//     name: 'Competitive Pricing',
//     description: 'High-quality projects at budget-friendly prices. Get the best value for your investment.',
//     icon: Coffee,
//   },
//   {
//     name: 'Latest Technologies',
//     description: 'Implement cutting-edge technologies like AI, Machine Learning, and Full Stack Development in your projects.',
//     icon: Code,
//   },
//   {
//     name: 'Excellence Guaranteed',
//     description: 'Deliver impressive results with our professionally crafted solutions that meet your specific requirements.',
//     icon: Trophy,
//   },
// ];

// const technologies = [
//   'AI/ML Projects',
//   'Android Apps',
//   'Web Development',
//   'React Projects',
//   'Java Projects',
//   'Python Projects',
//   'Database Projects',
//   'IoT Projects',
//   'Full Stack Projects',
//   'Enterprise Solutions',
//   'Custom Software',
//   'Research Projects'
// ];

// export default function Home() {
//   return (
//     <div className="bg-white dark:bg-gray-900">
//       <div className="relative isolate">
//         <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
//           <div className="text-center">
//             <h1 className="font-bold tracking-tight text-gray-900 dark:text-gray-100 text-5xl">
//               Professional Projects at Affordable Prices
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
//               Looking for custom project development? We create professional solutions
//               in AI, Web Development, Mobile Apps, and more - all at competitive prices!
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <Link
//                 to="/contact"
//                 className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//               >
//                 Book Your Project
//               </Link>
//               <Link to="/projects" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
//                 View Our Projects <span aria-hidden="true">→</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Why Choose Us?</h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
//             Your Trusted Technology Partner
//           </p>
//           <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
//             We understand your needs and deliver projects that meet your requirements while being cost-effective.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
//             {features.map((feature) => (
//               <div key={feature.name} className="flex flex-col">
//                 <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
//                   <feature.icon className="h-5 w-5 flex-none text-blue-600 dark:text-blue-400" aria-hidden="true" />
//                   {feature.name}
//                 </dt>
//                 <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
//                   <p className="flex-auto">{feature.description}</p>
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>

//         <div className="mt-20 mb-20">
//           <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-8">Solutions We Offer</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-100 dark:hover:bg-blue-600 cursor-pointer"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
