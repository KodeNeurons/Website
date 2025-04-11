import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import UploadForm from './pages/UploadFrom';
import AlimonyCal from './pages/AlimonyCal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Flip the dark mode state
  };

  // Dynamically add/remove the "dark" class to the body tag
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home  isDarkMode={isDarkMode}/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/uploadfrom" element={<UploadForm />} />
            <Route path="/alimony-calculator" element={<AlimonyCal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
