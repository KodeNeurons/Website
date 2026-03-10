import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/projects' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-display font-bold text-lg">K</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Kode<span className="gradient-text">Neurons</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-white bg-white/10'
                      : 'text-dark-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-neon-purple rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex btn-primary text-sm"
              >
                <span>Start Your Project</span>
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                      isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isMobileOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                      isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-dark-950/90 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-dark-900/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-500 ease-out ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-white bg-white/10 border border-white/10'
                      : 'text-dark-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ transitionDelay: isMobileOpen ? `${index * 50}ms` : '0ms' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <Link to="/contact" className="btn-primary w-full text-center block">
                <span>Start Your Project</span>
              </Link>
            </div>

            <div className="mt-auto pb-8">
              <p className="text-dark-500 text-sm">
                © 2024 KodeNeurons.<br />All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
