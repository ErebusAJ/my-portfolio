
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Aarya's Portfolio</h2>
            <p className="text-gray-400 mt-2">Creating web services and digital experiences that matter.</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com/ErebusAJ" className="hover:text-portfolio-primary transition-colors p-2">
              <Github size={20} />
            </a>
            <a href="https://x.com/devErebus" className="hover:text-portfolio-primary transition-colors p-2">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aarya-jamwal" className="hover:text-portfolio-primary transition-colors p-2">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/aaryajamwal" className="hover:text-portfolio-primary transition-colors p-2">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <hr className="border-gray-800 my-6" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Aarya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
