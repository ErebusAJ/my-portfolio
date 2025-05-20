
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const Index: React.FC = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set default theme to light when component mounts
  useEffect(() => {
    setMounted(true);
    // Set default theme to light if not already set
    if (!theme) {
      setTheme('light');
    }
  }, [theme, setTheme]);

  // Prevent hydration mismatch by only showing theme toggle after mount
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm border-border"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {mounted && resolvedTheme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
