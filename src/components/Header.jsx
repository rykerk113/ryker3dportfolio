import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' }, 
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="text-3xl font-black text-white group-hover:text-orange-500 transition-all duration-500">
                RYKER
              </div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-orange-500 animate-pulse group-hover:animate-spin" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="relative px-6 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            {isMenuOpen ? (
              <X size={24} className="text-white relative z-10" />
            ) : (
              <Menu size={24} className="text-white relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-md border-b border-gray-800/50">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-left px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-4 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-white text-center"
              >
                Let's Talk
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;