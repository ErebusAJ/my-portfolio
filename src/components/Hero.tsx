import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 md:pt-0 bg-gradient-to-br from-background to-background/50 transition-all duration-500">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-0 py-12 md:py-0">
        <div className="animate-fade-in text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 transition-all">
            Hi, I'm <span className="text-portfolio-primary dark:text-blue-400">Aarya Jamwal</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground/80 mb-6 md:mb-8 transition-all">
            Backend Developer
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-8 md:mb-10 max-w-md mx-auto md:mx-0 transition-all">
            I build powerful and scalable backend systems that drive seamless digital experiences and enhance business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button
              onClick={scrollToAbout}
              className="bg-portfolio-primary hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 text-md sm:text-lg px-6 py-3 sm:py-6"
              size="lg"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 text-md sm:text-lg px-6 py-3 sm:py-6"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-in transition-all duration-500 hover:scale-105 order-first md:order-last">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-300">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="hidden md:inline-block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-portfolio-primary dark:text-blue-400 animate-bounce transition-colors duration-300"
      >
        <ArrowDownCircle size={42} />
      </button>
    </section>
  );
};

export default Hero;
