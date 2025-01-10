import { Github, Linkedin , Instagram} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com/KodeNeurons"
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/kodeneurons/"
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/kodeneurons_3/"
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6" />
          </a>

          <a
        href="https://chat.whatsapp.com/JIm62KdRToG4CCBB5pnUBe"
        className="text-gray-400 hover:text-green-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} KodeNeurons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}