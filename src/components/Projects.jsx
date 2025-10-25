import React, { useState } from 'react';
import { ExternalLink, Github, Play, Layers, Sparkles, Eye } from 'lucide-react';

const Projects = () => {
  const [activeSection, setActiveSection] = useState('section1');
  const [hoveredProject, setHoveredProject] = useState(null);

  const modeladoProjects = [
    {
      title: "Robotic Arm",
      description: "Detailed 3D model of a robotic arm with precise mechanical components",
      image: "https://images.pexels.com/photos/34426364/pexels-photo-34426364.jpeg",
      tags: ["Robot", "Mechanic", "Hard Surface"],
      category: "3D Model",
      links: { demo: "https://www.artstation.com/artwork/1NgZmX", github: "https://www.artstation.com/artwork/1NgZmX" }
    },
    {
      title: "Tanque TX-130",
      description: "Futuristic military vehicle with technical details and realistic texturing",
      image: "https://images.pexels.com/photos/34442318/pexels-photo-34442318.jpeg",
      tags: ["Vehicle", "Military", "Sci-Fi"],
      category: "3D Model",
      links: { demo: "https://www.artstation.com/artwork/wr3dlX", github: "https://www.artstation.com/artwork/wr3dlX" }
    },
    {
      title: "Hunter Sword",
      description: "Sword inspired by the dual blades of the Monster Hunter game series",
      image: "https://images.pexels.com/photos/34442195/pexels-photo-34442195.jpeg",
      tags: ["Game", "Sword", "Fantasy"],
      category: "3D Model",
      links: { demo: "https://www.artstation.com/artwork/BkKWRk", github: "https://www.artstation.com/artwork/BkKWRk" }
    },
    {
      title: "Guitar",
      description: "Musical instrument modeled with precision and realistic details",
      image: "https://images.pexels.com/photos/34442196/pexels-photo-34442196.jpeg",
      tags: ["Instrument", "Musical", "Realistic"],
      category: "3D Model",
      links: { demo: "https://www.artstation.com/artwork/Nqk9ad", github: "https://www.artstation.com/artwork/Nqk9ad" }
    },
    {
      title: "Gun Post-apocalipse",
      description: "Post-apocalyptic weapon with ornamental details and metallic finish",
      image: "https://images.pexels.com/photos/34442319/pexels-photo-34442319.jpeg",
      tags: ["Gun", "Apocalipse", "Fiction"],
      category: "3D Model",
      links: { demo: "https://www.artstation.com/artwork/wrYrEw", github: "https://www.artstation.com/artwork/wrYrEw" }
    },
    {
      title: "R2-D2",
      description: "Iconic Star Wars droid with details faithful to the original design",
      image: "https://images.pexels.com/photos/34442323/pexels-photo-34442323.jpeg",
      tags: ["Star Wars", "Droid", "Iconic"],
      category: "3D Model",
      links: { demo: "https://www.artstation.com/artwork/rlL4v5", github: "https://www.artstation.com/artwork/rlL4v5" }
    }
  ];

  const riggingProjects = [
    {
      title: "Vending Machine Anime",
      description: "Complex rigging system for vending machines with functional animations",
      image: "https://images.pexels.com/photos/34442322/pexels-photo-34442322.jpeg",
      tags: ["Mechanical", "Animation", "Functional"],
      category: "Rigging",
      links: { demo: "https://www.artstation.com/artwork/XJwxGa", github: "https://www.artstation.com/artwork/XJwxGa" }
    },
    {
      title: "Cyborg",
      description: "Character rig with facial controls and advanced deformation system",
      image: "https://images.pexels.com/photos/34442316/pexels-photo-34442316.jpeg",
      tags: ["Cyborg", "Vehicle", "Transformation"],
      category: "Rigging",
      links: { demo: "https://www.artstation.com/artwork/V2R334", github: "https://www.artstation.com/artwork/V2R334" }
    },
    {
      title: "Spider Gwen",
      description: "Character rig with facial controls and advanced deformation system",
      image: "https://images.pexels.com/photos/34442315/pexels-photo-34442315.jpeg",
      tags: ["Character", "Facial", "Superhero"],
      category: "Rigging",
      links: { demo: "https://www.artstation.com/artwork/4NLdR8", github: "https://www.artstation.com/artwork/4NLdR8" }
    },
    {
      title: "Pteranodon",
      description: "Organic flying creature rig with realistic wing system",
      image: "https://images.pexels.com/photos/34442321/pexels-photo-34442321.jpeg",
      tags: ["Creature", "Organic", "Flying"],
      category: "Rigging",
      links: { demo: "https://www.artstation.com/artwork/a03dOL", github: "https://www.artstation.com/artwork/a03dOL" }
    },
    {
      title: "Elephant",
      description: "Quadruped animal rig with natural muscle deformations",
      image: "https://images.pexels.com/photos/34442317/pexels-photo-34442317.jpeg",
      tags: ["Animal", "Quadruped", "Organic"],
      category: "Rigging",
      links: { demo: "https://www.artstation.com/artwork/DvrwkO", github: "https://www.artstation.com/artwork/DvrwkO" }
    },
    {
      title: "Tanq",
      description: "Rigging system for military vehicle with tracks and functional turret",
      image: "https://images.pexels.com/photos/34442320/pexels-photo-34442320.jpeg",
      tags: ["Military", "Vehicle", "Mechanical"],
      category: "Rigging",
      links: { demo: "https://www.artstation.com/artwork/QXboPx", github: "https://www.artstation.com/artwork/QXboPx" }
    }
  ];

  const currentProjects = activeSection === 'section1' ? modeladoProjects : riggingProjects;

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-500 mr-4"></div>
            <Layers className="w-8 h-8 text-orange-500 animate-pulse" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-500 ml-4"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my 3D projects
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-gray-800/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-700/50">
            <div className="flex relative">
              <button
                onClick={() => setActiveSection('section1')}
                className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeSection === 'section1'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Models
                </span>
                {activeSection === 'section1' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl"></div>
                )}
              </button>

              <button
                onClick={() => setActiveSection('section2')}
                className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeSection === 'section2'
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Rigs
                </span>
                {activeSection === 'section2' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/80 to-orange-600/80 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-auto">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 pointer-events-auto"
                  >
                    <Play size={16} className="text-white" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 pointer-events-auto"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/20 animate-pulse pointer-events-none"></div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-500 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.artstation.com/rykerk/albums/12370496"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
          >
            <Sparkles className="w-6 h-6 text-orange-500 mr-3 group-hover:animate-spin" />
            <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
              View All Projects on ArtStation
            </span>
            <ExternalLink className="w-6 h-6 text-orange-500 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
