import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Brain, Globe, Smartphone, Database, Cloud, Bot, ChevronDown } from "lucide-react";
import knLogo from "./kn-logo.png";

const services = [
  { name: "AI & Machine Learning", href: "/services", icon: Brain, desc: "Custom models, NLP, inference APIs" },
  { name: "Full-Stack Web Apps", href: "/services", icon: Globe, desc: "React, Node.js, cloud-native" },
  { name: "Android & Mobile", href: "/services", icon: Smartphone, desc: "Native and cross-platform apps" },
  { name: "AI Agents & Automation", href: "/services", icon: Bot, desc: "LLM agents and workflow automation" },
  { name: "Data Engineering", href: "/services", icon: Database, desc: "ETL pipelines, analytics dashboards" },
  { name: "Cloud & DevOps", href: "/services", icon: Cloud, desc: "CI/CD, Docker, AWS, Terraform" },
];

const mainNav = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Careers", href: "/careers" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [location]);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/97 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)] border-b border-gray-100" : "bg-white/85 backdrop-blur-md"
      }`}>
      <nav className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src={knLogo} alt="KodeNeurons" className="h-10 w-14 object-contain" />
          <span className="text-[#0A0F2C] text-lg font-extrabold tracking-tight">
            Kode<span className="text-[#FF7A00]">Neurons</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => {
            const isActive = location.pathname === item.href ||
              (item.href !== "/" && location.pathname.startsWith(item.href));

            if (item.hasDropdown) {
              return (
                <div key={item.name} className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen((o) => !o)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive ? "text-[#FF7A00] bg-orange-50" : "text-gray-500 hover:text-[#0A0F2C] hover:bg-gray-50"
                      }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <Link key={s.name} to={s.href}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 hover:border-[#FF7A00]/20 border border-transparent transition-all duration-200">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 group-hover:bg-[#FF7A00] flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                            <s.icon className="w-4 h-4 text-[#FF7A00] group-hover:text-white transition-colors duration-200" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#0A0F2C] group-hover:text-[#FF7A00] transition-colors">{s.name}</p>
                            <p className="text-xs text-gray-400">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={item.name} to={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "text-[#FF7A00] bg-orange-50" : "text-gray-500 hover:text-[#0A0F2C] hover:bg-gray-50"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_14px_rgba(255,122,0,0.35)] hover:shadow-[0_6px_20px_rgba(255,122,0,0.45)] hover:scale-105 transition-all duration-300">
            Book a Demo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gray-600 hover:text-[#FF7A00] transition-colors p-1">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-5 gap-1">
            {mainNav.map((item) => (
              <Link key={item.name} to={item.href}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${location.pathname === item.href ? "text-[#FF7A00] bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact"
              className="mt-3 px-5 py-3 rounded-xl text-sm font-bold text-white text-center bg-[#FF7A00] shadow-[0_4px_14px_rgba(255,122,0,0.35)]">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
