import React from 'react';
import { Cuboid as Cube, Palette, Zap, Award, Code, Lightbulb, Target, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Cube className="w-8 h-8" />,
      title: "3D Modeling", 
      description: "Creating detailed inorganic and organic models with precision and quality",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Texturing And Materials",
      description: "Developing realistic textures and materials for enhanced visual quality",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lighting And Rendering",
      description: "Professional lighting and rendering for high-quality final results",
      color: "from-orange-500 to-blue-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rigging",
      description: "Creating functional rigs for characters, objects and mechanical systems",
      color: "from-blue-500 to-orange-500"
    }
  ];

  const tools = [
    { name: 'Inorganic Modeling', level: 90, color: 'bg-orange-500' },
    { name: 'Rigging', level: 85, color: 'bg-blue-500' },
    { name: 'Texturing And Material', level: 80, color: 'bg-orange-600' },
    { name: 'Lighting And Rendering', level: 75, color: 'bg-blue-600' },
    { name: 'Unreal Engine', level: 75, color: 'bg-orange-400' },
    { name: 'Character Modeling', level: 60, color: 'bg-blue-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500 mr-4"></div>
            <Lightbulb className="w-8 h-8 text-orange-500 animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500 ml-4"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">
              About
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a 3D artist with over 5 years of experience
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  My Journey
                </h3>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    I'm a 3D artist with over <span className="text-orange-500 font-bold">5 years</span> of experience, specializing in crafting models and rigs that bring characters, objects, and environments to life — both inorganic and organic.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My journey in 3D began in <span className="text-orange-500 font-bold">2020</span> at Image Campus, where I graduated with a Higher Technical Degree in 3D Production and Animation. Since then, I've worked as a freelancer on video games, character rigs, and environment projects, always aiming to deliver results that go beyond expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Skills Progress */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-lg">
              <h4 className="text-2xl font-bold mb-6 text-center text-white">
                <Code className="w-6 h-6 inline mr-2 text-orange-500" />
                Skills
              </h4>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-sm text-gray-400">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Creative Visual */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden border border-gray-700/50 shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/jlvqN1-zrnc?autoplay=1&mute=1&loop=1&playlist=jlvqN1-zrnc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                title="3D Modeling Showcase"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                     style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}></div>
                
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{skill.icon}</div>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-orange-500 transition-all duration-300">
                  {skill.title}
                </h4>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <a 
            href="https://www.linkedin.com/in/agustin-david-galeano-81716322a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
          >
            <Target className="w-6 h-6 text-orange-500 mr-3" />
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
              View My Profile On LinkedIn
            </span>
            <Rocket className="w-6 h-6 text-orange-500 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
