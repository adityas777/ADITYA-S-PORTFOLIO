
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Smartphone, Database, Globe, Cpu, Home, User, FolderOpen, MessageCircle, X } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    email: '',
    workArea: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "PCOS Prediction Website",
      description: "A machine learning-powered web application for PCOS prediction and health monitoring",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      tech: ["JavaScript", "Machine Learning", "Healthcare"],
      liveUrl: "https://github.com/adityas777/PCOS-PREDICTION-WEBSITE",
      githubUrl: "https://github.com/adityas777/PCOS-PREDICTION-WEBSITE"
    },
    {
      title: "Food Delivery App",
      description: "A full-stack food delivery web app with Google Maps integration and Stripe payments",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      tech: ["JavaScript", "Google Maps", "Stripe", "Full-Stack"],
      liveUrl: "https://github.com/adityas777/FOOD-DILIVERY",
      githubUrl: "https://github.com/adityas777/FOOD-DILIVERY"
    },
    {
      title: "Swap and Compare",
      description: "A fun, swipe-based web app where users upload images and enter ranking challenges",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["JavaScript", "Image Upload", "Ranking System"],
      liveUrl: "https://github.com/adityas777/SWAP-AND-COMPARE",
      githubUrl: "https://github.com/adityas777/SWAP-AND-COMPARE"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="text-purple-400" size={24} />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Experience"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-green-400" size={24} />,
      skills: ["React Native", "Flutter", "Mobile UI", "Cross-platform"]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-red-400" size={24} />,
      skills: ["Node.js", "Express", "MongoDB", "API Development"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-yellow-400" size={24} />,
      skills: ["REST APIs", "GraphQL", "WebSockets", "PWA"]
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="text-indigo-400" size={24} />,
      skills: ["Git", "Docker", "AWS", "CI/CD"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ email: '', workArea: '', message: '' });
    setShowContactForm(false);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden cursor-animated">
      {/* Hero Section with Spline Background */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
          
          {/* Navigation Buttons - Transparent with Glow */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-8 animate-fade-in">
            <button 
              onClick={() => scrollToSection('home')}
              className="glass-glow-button flex items-center gap-2 animate-scale-in"
            >
              <Home size={20} />
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="glass-glow-secondary flex items-center gap-2 animate-scale-in"
            >
              <User size={20} />
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="glass-glow-secondary flex items-center gap-2 animate-scale-in"
            >
              <Code size={20} />
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="glass-glow-secondary flex items-center gap-2 animate-scale-in"
            >
              <FolderOpen size={20} />
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="glass-glow-secondary flex items-center gap-2 animate-scale-in"
            >
              <MessageCircle size={20} />
              Contact
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <button 
              onClick={() => scrollToSection('projects')}
              className="glass-glow-button animate-scale-in"
            >
              View My Work
            </button>
            <a 
              href="/lovable-uploads/b0379306-b9e2-41cc-a7be-728ff6f71947.png"
              download="Aditya_Singh_Resume.png"
              className="glass-glow-secondary flex items-center gap-2 animate-scale-in"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in">
            <a href="https://github.com/adityas777" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform glow-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-singh-204a27289/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform glow-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:adityas2110@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125 transform glow-icon">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Spline Background */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Skills Section with Robot Background and Interactive Buttons */}
      <section id="skills" className="py-32 px-6 relative overflow-hidden">
        {/* Robot Spline Background with proper cursor interaction */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://my.spline.design/robotfollowcursorforlandingpage-K1dzNEhJ6skRNqf2NDGxO1aj/"
            className="w-full h-full border-none pointer-events-auto"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center center' }}
          />
        </div>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          
          {/* Interactive Skill Category Buttons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="glass-card-transparent p-6 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 text-white rounded-full text-sm hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Image Display */}
          <div className="flex justify-center animate-scale-in">
            <div className="glass-card-transparent p-8 max-w-5xl hover-scale">
              <img 
                src="/lovable-uploads/68dc756c-0c1e-490d-95d2-54468603942c.png"
                alt="Skills & Technologies"
                className="w-full h-auto rounded-lg shadow-2xl transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Better Spacing and Enhanced Cards */}
      <section id="projects" className="py-32 px-6 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 animate-fade-in">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={project.title} className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in hover:shadow-2xl" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden rounded-lg mb-4 group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-secondary flex items-center gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors glow-text"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Robot Background */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Robot Spline Background with proper cursor interaction */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src="https://my.spline.design/robotfollowcursorforlandingpage-K1dzNEhJ6skRNqf2NDGxO1aj/"
            className="w-full h-full border-none pointer-events-auto"
            style={{ transform: 'scale(1.1)', transformOrigin: 'center center' }}
          />
        </div>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            <span className="text-gradient">Let's Work Together</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
          
          <button 
            onClick={() => setShowContactForm(true)}
            className="glass-glow-button text-lg animate-scale-in hover-scale"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
          <div className="glass-card p-8 max-w-md w-full animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gradient">Get In Touch</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="workArea" className="block text-sm font-medium text-gray-300 mb-2">
                  Area of Work
                </label>
                <select
                  id="workArea"
                  name="workArea"
                  value={contactForm.workArea}
                  onChange={handleContactChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an area</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="full-stack">Full Stack Development</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full glow-button py-3 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

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
                <a href="https://github.com/adityas777" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 glow-icon">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/aditya-singh-204a27289/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 glow-icon">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:adityas2110@gmail.com" className="text-gray-400 hover:text-white transition-all duration-300 glow-icon">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors glow-text">About</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white transition-colors glow-text">Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors glow-text">Contact</button></li>
                <li><a href="/lovable-uploads/b0379306-b9e2-41cc-a7be-728ff6f71947.png" download className="text-gray-400 hover:text-white transition-colors glow-text">Resume</a></li>
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
