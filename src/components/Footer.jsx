import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin, Instagram, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import knLogo from "./kn-logo.png";

const pages = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const social = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/kodeneurons-3/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/kodeneurons_3/", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://chat.whatsapp.com/JIm62KdRToG4CCBB5pnUBe", label: "WhatsApp" },
  { icon: Mail, href: "mailto:kodeneurons@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F2C]">
      {/* Top orange stripe */}
      <div className="h-0.5 bg-gradient-to-r from-[#FF7A00] via-[#FF9E3D] to-[#FF7A00]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10 mb-14">

          {/* Brand — wider column */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={knLogo} alt="Kodeneurons" loading="lazy" className="h-10 w-14 object-contain" />
              <span className="text-xl font-extrabold text-white">Kode<span className="text-[#FF7A00]">neurons</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              A next-generation AI software studio — engineering intelligent web, mobile, and AI products for startups and enterprises worldwide.
            </p>
            <div className="flex gap-3 mb-6">
              {social.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#FF7A00] hover:border-[#FF7A00]/40 hover:bg-[#FF7A00]/10 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-[#FF9E3D] uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.name}>
                  <Link to={p.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-[#FF9E3D] uppercase tracking-widest mb-5">Get In Touch</h4>
            <div className="space-y-3 mb-6 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-gray-500" />
                <a href="mailto:kodeneurons@gmail.com" className="hover:text-white transition-colors">kodeneurons@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="w-3.5 h-3.5 flex-shrink-0 text-gray-500" />
                <a href="https://wa.me/7499601744" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 7499-601-744</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-500" />
                India · Remote-first
              </p>
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_14px_rgba(255,122,0,0.3)] hover:scale-105 transition-all duration-300">
              Start a Project <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} <span className="text-[#FF7A00] font-semibold">Kodeneurons</span>. All rights reserved.</p>
          <p>Built with care by the Kodeneurons team · India</p>
        </div>
      </div>
    </footer>
  );
}
