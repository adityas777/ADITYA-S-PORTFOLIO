
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Smartphone } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      tech: ["React", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 88 },
    { name: "Mobile Development", icon: Smartphone, level: 85 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20"></div>
        
        <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="float-animation">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient">ADITYA SINGH</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer crafting digital experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="glow-button">
              View My Work
            </button>
            <button className="glow-secondary flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aditya@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate web developer with 3+ years of experience creating stunning, user-friendly websites and applications. 
              I specialize in modern JavaScript frameworks, responsive design, and creating seamless user experiences that drive results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="text-center">
                  <div className="flex justify-center mb-4">
                    <skill.icon size={48} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 mt-1">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="glow-secondary flex items-center gap-2 text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
          
          <button className="glow-button text-lg">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Aditya Singh. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
