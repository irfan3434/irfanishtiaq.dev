// Projects.js - Enhanced 3D Portfolio Display with Future Code Project
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';
import proImage1 from '../assets/fcec-preview.png'
import proImage2 from '../assets/fceco-preview.png'
import proImage3 from '../assets/aqeaw-preview.png'
import proImage4 from '../assets/futureCode-preview.png' // Add this new import

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'showcase'
  const [isScrolled, setIsScrolled] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'FCEC – Engineering Consultations',
      url: 'https://www.fcec.sa',
      image: proImage1,
      description: 'Corporate website for Future Cities for Engineering Consultations featuring multilingual support, responsive layout, and a custom theme to showcase their engineering expertise.',
      challenge: 'Creating a bilingual interface that maintains professional branding across both Arabic and English with right-to-left support while ensuring optimal performance.',
      solution: 'Developed a custom Shopify theme with language detection and dynamic content rendering, implementing performance optimizations for fast page loads across all devices.',
      features: [
        'Multilingual interface (Arabic/English)',
        'Custom project showcase gallery',
        'Responsive design for all devices',
        'Optimized performance (95+ PageSpeed)'
      ],
      stack: ['Shopify', 'Liquid', 'HTML5', 'CSS3', 'JavaScript', 'JSON', 'Responsive Design'],
      color: '#4A90E2'
    },
    {
      id: 2,
      title: 'Future Code – Events & Innovation',
      url: 'https://www.futurecode.sa',
      image: proImage4,
      description: 'Leading the way in innovative exhibitions, conferences, and event management solutions across Saudi Arabia, built with React for dynamic user experiences.',
      challenge: 'Developing a comprehensive platform that showcases Future Code\'s expertise in event management while providing seamless navigation through their diverse service offerings and portfolio of successful events.',
      solution: 'Built a modern React-based single-page application with smooth animations, interactive components, and optimized performance to effectively communicate their innovative approach to event management in Saudi Arabia.',
      features: [
        'React-based single-page application',
        'Dynamic event portfolio showcase',
        'Interactive service exploration',
        'Mobile-first responsive design'
      ],
      stack: ['React', 'JavaScript ES6+', 'CSS3', 'HTML5', 'Responsive Design', 'REST API'],
      color: '#8B5CF6'
    },
    {
      id: 3,
      title: 'AQEAW – Architectural Excellence',
      url: 'https://www.aqeaw.com',
      image: proImage3,
      description: 'Architectural showcase site with a clean interface, developed for AQEAW with pixel-perfect frontend work and customized components to highlight their design expertise.',
      challenge: 'Creating a visually stunning portfolio that showcases architectural projects without overwhelming visitors, while ensuring optimal performance with large image assets.',
      solution: 'Implemented a lazy-loaded image gallery with progressive loading and WebP format conversion, along with smooth scroll animations for an immersive viewing experience.',
      features: [
        'Immersive project gallery',
        'SVG-based interactive elements',
        'Lazy-loaded image optimization',
        'Smooth scrolling animations'
      ],
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Shopify', 'Responsive Design', 'JSON'],
      color: '#ddb20a'
    },
    {
      id: 4,
      title: 'FCECO – Sustainable Energy',
      url: 'https://www.fceco.sa',
      image: proImage2,
      description: 'Website for FCECO sustainable energy services, built with a custom Shopify theme focusing on clarity, performance, and visual impact to highlight their green initiatives.',
      challenge: 'Communicating complex energy services visually while maintaining an engaging user experience that drives conversion and inquiry.',
      solution: 'Designed an interactive service exploration system with animated data visualizations and intuitive navigation flow that guides users from awareness to contact.',
      features: [
        'Interactive service exploration',
        'Case study presentation system',
        'Animated data visualizations',
        'Custom contact forms with validation'
      ],
      stack: ['Shopify', 'Liquid', 'Responsive Design', 'JavaScript', 'CSS3', 'HTML5' ],
      color: '#29b7cf'
    }
  ];

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'showcase' : 'grid');
    setActiveProject(null);
  };

  return (
    <motion.section 
      className={`projects-section ${isScrolled ? 'scrolled' : ''}`}
      ref={projectsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <div className="projects-header">
          
          <motion.div className="projects-title-container" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h2 className="projects-title">Featured Projects</h2>
            <div className="profile-accent"></div> 
          </motion.div> 
          
          <motion.p className="projects-description" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
            A collection of websites I've designed and developed from concept to launch, delivering tailored solutions for real-world clients.
          </motion.p>
          
          <div className="view-toggle">
            <button 
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={toggleViewMode}
              aria-label="Grid View"
            >
              Grid
            </button>
            <button 
              className={`view-toggle-btn ${viewMode === 'showcase' ? 'active' : ''}`}
              onClick={toggleViewMode}
              aria-label="Showcase View"
            >
              Showcase
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 0 1px ${project.color}30`
                }}
              >
                <div className="project-number" style={{ color: project.color }}>0{index + 1}</div>
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                    loading="lazy" 
                  />
                  <div className="project-overlay" style={{ backgroundColor: `${project.color}99` }}>
                    <div className="project-actions">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-action-btn"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink size={20} />
                        <span>Visit Site</span>
                      </a>
                      <button 
                        className="project-action-btn"
                        onClick={() => {
                          setViewMode('showcase');
                          setActiveProject(project.id);
                        }}
                        aria-label={`View ${project.title} details`}
                      >
                        <ChevronDown size={20} />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-excerpt">{project.description.substring(0, 100)}...</p>
                  <div className="project-tags">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="project-tag"
                        style={{ backgroundColor: `${project.color}15`, color: project.color }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="project-tag-more" style={{ color: project.color }}>
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="projects-showcase">
            <AnimatePresence mode="wait">
              {activeProject ? (
                <motion.div 
                  key={`project-detail-${activeProject}`}
                  className="project-detail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {projects.filter(p => p.id === activeProject).map(project => (
                    <div key={`detail-${project.id}`} className="project-detail-content">
                      <button 
                        className="back-to-projects"
                        onClick={() => setActiveProject(null)}
                        aria-label="Back to projects"
                      >
                        <ChevronUp size={20} />
                        <span>Back to projects</span>
                      </button>
                      
                      <div className="project-detail-header">
                        <div className="project-detail-title-group">
                          <h3 className="project-detail-title">{project.title}</h3>
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-detail-link"
                            style={{ color: project.color }}
                          >
                            Visit Website <ArrowUpRight size={16} />
                          </a>
                        </div>
                        <div className="project-detail-tags">
                          {project.stack.map((tech, i) => (
                            <span 
                              key={i} 
                              className="project-detail-tag"
                              style={{ backgroundColor: `${project.color}15`, color: project.color }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="project-detail-preview">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-detail-image" 
                        />
                      </div>
                      
                      <div className="project-detail-sections">
                        <div className="project-detail-section">
                          <h4 className="project-detail-section-title" style={{ "--project-color": project.color, "--project-color-light": `${project.color}15` }}>Overview</h4>
                          <p className="project-detail-text">{project.description}</p>
                        </div>
                        
                        <div className="project-detail-columns">
                          <div className="project-detail-section">
                            <h4 className="project-detail-section-title" style={{ "--project-color": project.color, "--project-color-light": `${project.color}15` }}>Challenge</h4>
                            <p className="project-detail-text">{project.challenge}</p>
                          </div>
                          
                          <div className="project-detail-section">
                            <h4 className="project-detail-section-title" style={{ "--project-color": project.color, "--project-color-light": `${project.color}15` }}>Solution</h4>
                            <p className="project-detail-text">{project.solution}</p>
                          </div>
                        </div>
                        
                        <div className="project-detail-section">
                          <h4 className="project-detail-section-title">Key Features</h4>
                          <ul className="project-detail-features">
                            {project.features.map((feature, i) => (
                              <li key={i} className="project-detail-feature-item">
                                <span className="feature-bullet" style={{ backgroundColor: project.color }}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="project-showcase-list"
                  className="showcase-list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={`showcase-${project.id}`}
                      className="showcase-item"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveProject(project.id)}
                      style={{ 
                        borderColor: activeProject === project.id ? project.color : 'transparent',
                        backgroundColor: `${project.color}10`
                      }}
                    >
                      <div className="showcase-content">
                        <div className="showcase-index" style={{ color: project.color }}>0{index + 1}</div>
                        <div className="showcase-text">
                          <h3 className="showcase-title">{project.title}</h3>
                          <p className="showcase-description">{project.description.substring(0, 120)}...</p>
                        </div>
                      </div>
                      <div className="showcase-preview">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="showcase-image" 
                          loading="lazy"
                        />
                      </div>
                      <div className="showcase-action">
                        <button 
                          className="showcase-detail-btn"
                          style={{ backgroundColor: project.color }}
                          aria-label={`View ${project.title} details`}
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        
        <div className="projects-footer">
          <p>Interested in collaborating on your next project?</p>
          <a href="/contact" className="cta-button">
            Let's work together <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;