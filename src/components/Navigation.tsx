import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Menu, X, ArrowRight, LogIn } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-codecrew-purple to-codecrew-blue rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-codecrew-purple to-codecrew-blue p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-codecrew-purple to-codecrew-blue bg-clip-text text-transparent">
            CodeCrew
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-gray-800/30 backdrop-blur-lg px-3 py-2 rounded-full border border-gray-100/20 shadow-sm">
          {['Home', 'Services', 'Work','Testimonials', 'About', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-codecrew-purple/10 to-codecrew-blue/10 text-codecrew-purple dark:text-codecrew-blue' 
                  : 'text-foreground/80 hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <button 
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </button>
          <button 
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-codecrew-purple to-codecrew-blue text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-codecrew-purple/20 transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-background/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen py-4 border-t border-gray-100/10' : 'max-h-0'
        }`}
      >
        <div className="container flex flex-col space-y-2">
          {['Home', 'Services', 'Work','Testimonials', 'About', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-3 text-foreground/90 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors flex items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-1 h-6 bg-gradient-to-b from-codecrew-purple to-codecrew-blue rounded-full"></span>
              {item}
            </a>
          ))}
          <div className="border-t border-gray-100/10 my-2"></div>
          <a 
            href="#login" 
            className="px-4 py-3 text-foreground/90 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
          >
            Sign In
          </a>
          <a 
            href="#get-started" 
            className="mx-4 my-2 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-codecrew-purple to-codecrew-blue text-white font-medium rounded-lg hover:shadow-lg hover:shadow-codecrew-purple/20 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
