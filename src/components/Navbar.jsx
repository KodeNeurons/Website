import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imagee from './android-chrome-192x192-photoaidcom-cropped.png';

const navigation = [
  { name: 'Our Projects', href: '/projects' },
  { name: 'Book Project', href: '/contact' },
  { name: 'Collab', href: '/UploadFrom' },
  { name: 'About', href: '/about' }
  
];

export default function Navbar({ toggleTheme, isDarkMode }) {
  const location = useLocation();

  return (
    <header className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
      <style jsx>{`
        /* Logo 3D Effect */
        .logo-effect {
          --c: ${isDarkMode ? '#fff' : '#1d4ed8'};
          background: linear-gradient(90deg, #0000 33%, ${isDarkMode ? '#fff5' : '#1d4ed855'}, #0000 67%) var(--_p,100%)/300% no-repeat;
          color: #0000;
          transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
          text-shadow: calc(var(--_i,-1)* 0.08em) -.01em 0   var(--c),
            calc(var(--_i,-1)*-0.08em)  .01em 2px ${isDarkMode ? '#fff4' : '#0004'};
          transition: 0.3s;
        }

        .logo-effect:hover {
          --_p: 0%;
          --_i: 1;
        }

        .logo-image-effect {
          transform: perspective(500px) rotateY(calc(20deg*var(--_i,-1)));
          transition: 0.3s;
          --_i: -1;
        }

        .logo-container:hover .logo-effect,
        .logo-container:hover .logo-image-effect {
          --_p: 0%;
          --_i: 1;
        }

        /* Button Glitch Effect */
        .nav-button {
          position: relative;
          overflow: hidden;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .nav-button::after {
          --slice-0: inset(50% 50% 50% 50%);
          --slice-1: inset(80% -6px 0 0);
          --slice-2: inset(50% -6px 30% 0);
          --slice-3: inset(10% -6px 85% 0);
          --slice-4: inset(40% -6px 43% 0);
          --slice-5: inset(80% -6px 5% 0);
          
          content: attr(data-text);
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 3%, #4F46E5 3%, #4F46E5 5%, #7C3AED 5%);
          text-shadow: -1px -1px 0px #818CF8, 1px 1px 0px #4F46E5;
          clip-path: var(--slice-0);
          animation: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-button:hover::after {
          animation: 1s glitch;
          animation-timing-function: steps(2, end);
        }

        @keyframes glitch {
          0% {
            clip-path: var(--slice-1);
            transform: translate(-10px, -5px);
          }
          10% {
            clip-path: var(--slice-3);
            transform: translate(5px, 5px);
          }
          20% {
            clip-path: var(--slice-1);
            transform: translate(-5px, 5px);
          }
          30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 3px);
          }
          40% {
            clip-path: var(--slice-2);
            transform: translate(-3px, 0px);
          }
          50% {
            clip-path: var(--slice-3);
            transform: translate(3px, 0px);
          }
          60% {
            clip-path: var(--slice-4);
            transform: translate(3px, 5px);
          }
          70% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 5px);
          }
          80% {
            clip-path: var(--slice-5);
            transform: translate(10px, -5px);
          }
          90% {
            clip-path: var(--slice-1);
            transform: translate(-5px, 0px);
          }
          100% {
            clip-path: var(--slice-1);
            transform: translate(0);
          }
        }
      `}</style>

      <nav className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center p-4 lg:px-8">
        {/* Top row with logo and theme switch */}
        <div className="w-full flex items-center justify-between mb-4 sm:mb-0 sm:w-auto">
          <div className="flex items-center space-x-4 logo-container">
            <img 
              src={imagee} 
              className="h-9 logo-image-effect" 
              alt="logo" 
            />
            <Link
              to="/"
              className={`logo-effect -m-1.5 p-1.5 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'}`}
            >
              KodeNeurons
            </Link>
          </div>
          
        
        </div>

        {/* Navigation links with glitch effect restored */}
        <div className="flex justify-center items-center w-full sm:w-auto sm:ml-auto gap-2 sm:gap-4 px-2">
  {navigation.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      data-text={item.name}
      className={` 
        nav-button
        min-w-[70px] sm:min-w-[80px] text-center 
        px-2 sm:px-3 py-1.5 sm:py-2
        rounded-lg
        text-xs sm:text-sm font-medium tracking-wide
        ${location.pathname === item.href
          ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white'
          : isDarkMode
          ? 'bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] text-gray-100'
          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800'
        }
      `}
    >
      {item.name}
    </Link>
  ))}
</div>


      </nav>
    </header>
  );
}