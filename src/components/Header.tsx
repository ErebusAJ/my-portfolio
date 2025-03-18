
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 z-50 transition-colors duration-300">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-portfolio-primary dark:text-blue-400">Aarya.</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {['about', 'services', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-700 dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {['about', 'services', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-700 dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-blue-400 transition-colors py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
