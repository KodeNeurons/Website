import { Menu, X, Sun, Moon } from 'lucide-react'; // Importing Sun and Moon icons
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imagee from './android-chrome-192x192-photoaidcom-cropped.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Book Your Project', href: '/contact' },
];

export default function Navbar({ toggleTheme, isDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center space-x-4">
          <img src={imagee} className="h-9" alt="logo" />
          <Link
            to="/"
            className={`-m-1.5 p-1.5 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-600'}`}
          >
            KodeNeurons
          </Link>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Theme Switch Button with Icon Only in Right Corner */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-md ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Moon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 ${location.pathname === item.href ? (isDarkMode ? 'text-blue-400' : 'text-blue-600') : (isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-900 hover:text-blue-600')}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className={`lg:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="space-y-1 px-6 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${location.pathname === item.href ? (isDarkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-50 text-blue-600') : (isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-50')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
