import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Subtle geometric background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-orange-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-orange-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-orange-400/20 rounded-full animate-pulse"></div>
        
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-orange-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Digital Artist Label */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-8">
            <span className="text-gray-400 font-mono text-2xl tracking-[0.3em] font-medium uppercase">
              3D Modeler - Rigger
            </span>
          </div>
          
          {/* Main RYKER Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative">
            <span className="text-white">
              RYKER
            </span>
          </h1>
          
          {/* 3D Modeler • Rigger */}
          <div className="text-lg md:text-xl font-medium text-gray-300 mb-8">
            <span className="inline-block">My specialty is creating models and rigs that bring life and quality to your project.</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            Projects
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-700 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mb-2 relative">
            <div className="w-1 h-3 bg-gray-600 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          </div>
          <ChevronDown size={24} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default Hero;