import {  Linkedin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0F] border-t border-[#1A1A20] shadow-[0_-2px_10px_rgba(108,99,255,0.2)] mt-20">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6C63FF] via-[#00D1FF] to-[#6C63FF] opacity-80"></div>

      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/company/kodeneurons-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00D1FF] transition-transform transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/kodeneurons_3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#6C63FF] transition-transform transform hover:scale-110"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://chat.whatsapp.com/JIm62KdRToG4CCBB5pnUBe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition-transform transform hover:scale-110"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-400 text-sm font-light tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] font-semibold">
            KodeNeurons
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
