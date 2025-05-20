import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Code, Monitor, Layers, Zap, GitBranch, ShoppingBag, Layout, Smartphone, Server, Users, BarChart, Database, FileText } from 'lucide-react';
import './Home.css';
import profileImage from '../assets/profile1.png';

const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const techStackRef = useRef(null);
  const servicesRef = useRef(null);
  
  const taglines = [
    "Creative Frontend Developer",
    "React & Shopify Expert",
    "Pixel-perfect UI Engineer",
    "Clean Code Craftsman",
    "Performance-Obsessed Builder",
  ];


    const services = [
    {
      title: "Custom Shopify Theme Development",
      description: "Tailor-made Shopify themes that reflect your brand identity and enhance customer experience.",
      icon: <ShoppingBag size={24} />
    },
    {
      title: "Modern Frontend Development",
      description: "Interactive and dynamic user interfaces using React, HTML, CSS, and JavaScript.",
      icon: <Layout size={24} />
    },
    {
      title: "Responsive UI Design & Implementation",
      description: "Pixel-perfect interfaces that work flawlessly across all devices and screen sizes.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Full-Stack Web App Development",
      description: "End-to-end solutions using Node.js and Django for robust web applications.",
      icon: <Server size={24} />
    },
    {
      title: "Role-Based Dashboards & Authentication",
      description: "Secure user management systems with custom permission structures.",
      icon: <Users size={24} />
    },
    {
      title: "Performance Optimization & SEO",
      description: "Accelerate load times and improve search engine visibility for your applications.",
      icon: <BarChart size={24} />
    },
    {
      title: "Headless CMS & REST API Integrations",
      description: "Seamless connections between your frontend and various data sources.",
      icon: <Database size={24} />
    },
    {
      title: "Technical Consulting & Audits",
      description: "Expert advice on architecture, infrastructure, and performance improvements.",
      icon: <FileText size={24} />
    }
  ];

  const techStack = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScipt', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Shopify Liquid', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Django', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'MongoDB', category: 'database' },
    { name: 'JSON', category: 'database' },
    { name: 'UI/UX Design', category: 'design' },
    { name: 'Responsive Design', category: 'design' },
    { name: 'Git/GitHub', category: 'tool' },
    
  ];
 
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    
    setIsVisible(true);
    

    setTimeout(() => {
      if (servicesRef.current) {
        servicesRef.current.classList.add('visible');
      }
    }, 500);


    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('stack-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (techStackRef.current) {
      observer.observe(techStackRef.current);
    }
    
    return () => {
      clearInterval(interval);
      if (techStackRef.current) {
        observer.unobserve(techStackRef.current);
      }
    };
  }, []);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend':
        return <Monitor size={14} />;
      case 'backend':
        return <Layers size={14} />;
      case 'design':
        return <Code size={14} />;
      case 'database':
        return <Layers size={14} />;
      case 'data':
        return <Zap size={14} />;
      case 'api':
        return <Zap size={14} />;
      case 'tool':
        return <GitBranch size={14} />;
      default:
        return <Code size={14} />;
    }
  };

  return (
    <>
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="hero-shape hero-shape-1"></div>
            <div className="hero-shape hero-shape-2"></div>
            <div className="hero-shape hero-shape-3"></div>
          </div>
        </div>
        
        <div className="hero-container">
          <div className="hero-left">
            <div className="profile-container">
              <img src={profileImage} alt="Irfan Ishtiaq" className="profile-img" />
              <div className="profile-ring"></div>
              <div className="profile-blob"></div>
            </div>
          </div>

          <div className="hero-right">
            
            <h1 className="hero-heading">
              <span className="terminal-cursor">$</span> Hi, I'm <span className="underline">Irfan Ishtiaq</span>
            </h1>

            <div className="animated-tagline">
              <p key={taglineIndex} className="tagline-slide">
                {taglines[taglineIndex]}
              </p>
            </div>

            <p className="hero-description">
              I build sleek, fast, scalable UIs that power modern web applications. 
              Focused on creating exceptional digital experiences with clean code and 
              attention to detail.
            </p>

            <div className="hero-cta-group">
              <a href="/Projects" className="hero-cta primary-cta">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="/Contact" className="hero-cta secondary-cta">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="services-section" ref={servicesRef}>
        <div className="services-container">
          <h2 className="section-title">Services</h2>
          <p className="section-description">Specialized solutions I offer to bring your vision to life</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-section" ref={techStackRef}>
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-description">Tools and Technologies I work with</p>
          
          <div className="tech-stack-container">
            {techStack.map((tech, index) => (
              <div 
                className={`tech-item ${tech.category}`} 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="tech-icon">{getCategoryIcon(tech.category)}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-stats">
        <div className="container">
          <h2 className="section-title">Track Record</h2>
          <p className="section-description">Delivering exceptional results with precision and expertise.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;