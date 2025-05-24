
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Smartphone, Database, Globe, Cpu } from 'lucide-react';

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
    { name: "Frontend Development", icon: Code, level: 95, description: "React, Vue, Angular" },
    { name: "UI/UX Design", icon: Palette, level: 88, description: "Figma, Adobe XD" },
    { name: "Mobile Development", icon: Smartphone, level: 85, description: "React Native, Flutter" },
    { name: "Backend Development", icon: Database, level: 90, description: "Node.js, Python, MongoDB" },
    { name: "Web Technologies", icon: Globe, level: 92, description: "HTML5, CSS3, JavaScript" },
    { name: "DevOps & Tools", icon: Cpu, level: 80, description: "Docker, AWS, Git" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section with Spline Background */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://my.spline.design/themuseum-P8hpUTGZRDLpBIjrQdCjmTUw/"
            className="w-full h-full border-none"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center center' }}
          />
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="float-animation">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient animate-pulse">ADITYA SINGH</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Full Stack Web Developer crafting digital experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button className="glow-button animate-scale-in">
              View My Work
            </button>
            <button className="glow-secondary flex items-center gap-2 animate-scale-in">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform glow-icon">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform glow-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aditya@example.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform glow-icon">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Spline Background */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://my.spline.design/particlenebula-DVXLglRttXue7VlJ2jslaLU8/"
            className="w-full h-full border-none"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center center' }}
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto animate-scale-in">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a passionate web developer with 3+ years of experience creating stunning, user-friendly websites and applications. 
              I specialize in modern JavaScript frameworks, responsive design, and creating seamless user experiences that drive results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.slice(0, 3).map((skill, index) => (
                <div key={skill.name} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex justify-center mb-4">
                    <skill.icon size={48} className="text-blue-400 glow-icon" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800/80">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <skill.icon size={32} className="text-blue-400 mr-3 glow-icon" />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 glow-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{skill.level}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Spline Background */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://my.spline.design/particlenebula-DVXLglRttXue7VlJ2jslaLU8/"
            className="w-full h-full border-none"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center center' }}
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                />
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm hover:bg-blue-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className="glow-secondary flex items-center gap-2 text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors glow-text">
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
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
          
          <button className="glow-button text-lg animate-scale-in">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Aditya Singh</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Web Developer passionate about creating innovative digital solutions.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" className="text-gray-400 hover:text-white transition-all duration-300 glow-icon">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-all duration-300 glow-icon">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:aditya@example.com" className="text-gray-400 hover:text-white transition-all duration-300 glow-icon">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors glow-text">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors glow-text">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors glow-text">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors glow-text">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Web Development</span></li>
                <li><span className="text-gray-400">Mobile Apps</span></li>
                <li><span className="text-gray-400">UI/UX Design</span></li>
                <li><span className="text-gray-400">Consulting</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Aditya Singh. Built with React & Tailwind CSS
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm glow-text">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm glow-text">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
