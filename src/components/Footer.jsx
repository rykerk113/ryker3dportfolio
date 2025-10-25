import React from 'react';
import { Heart, Sparkles, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 border-t border-gray-700/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-black text-white">
                RYKER
              </div>
              <Sparkles className="w-6 h-6 text-orange-500 ml-2 animate-pulse" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional 3D Modeler & Rigger creating high-quality models and rigs 
              that bring life and quality to your projects.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Inorganic Modeling</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Character Modeling</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Rigging</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Texturing</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-orange-500 animate-pulse" />
              <span>and lots of</span>
              <span className="text-orange-500 font-semibold">
                creativity
              </span>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2025 Ryker. All rights reserved.</p>
              <p className="text-sm mt-1">
                Creating models and rigs with 
                <span className="text-orange-500 font-semibold"> life and quality</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;