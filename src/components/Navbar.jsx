import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for mobile menu icons
import imagee from "./android-chrome-192x192-photoaidcom-cropped.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Book Project", href: "/contact" },
  // { name: "Collab", href: "/UploadFrom" },
  { name: "About", href: "/about" },
];

export default function Navbar({ toggleTheme, isDarkMode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-[#0B0B0F]/80 border-b border-[#1A1A20] shadow-[0_0_12px_rgba(108,99,255,0.25)] transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={imagee} alt="logo" className="h-9 w-9 rounded-md" />
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] text-2xl font-extrabold tracking-tight hover:opacity-90 transition-all duration-300"
          >
            KodeNeurons
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] rounded-full animate-pulse"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0B0F]/95 border-t border-[#1A1A20] shadow-lg animate-fadeIn">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-[#00D1FF]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2 mt-2 bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
