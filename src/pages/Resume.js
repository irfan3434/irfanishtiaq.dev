import React from 'react';
import { useState, useEffect } from 'react';
import './Resume.css';
import  myResume from '../assets/Latest Resume.pdf'

// Skills Section Component
const SkillsSection = () => {
  // Define all skills with their categories
  const skills = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Shopify Liquid', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Django', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'UI/UX Design', category: 'design' },
    { name: 'Responsive Design', category: 'design' },
    { name: 'JSON', category: 'data' },
    { name: 'MongoDB', category: 'data' },
    { name: 'Git/GitHub', category: 'tools' },
    
  
  ];

  // Define skill categories
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'data', label: 'Data' },
    { id: 'tools', label: 'Tools' },
  ];

  // State for the active category filter
  const [activeCategory, setActiveCategory] = useState('all');
  
  // State for animation control
  const [animate, setAnimate] = useState(false);

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Handle category filter click
  const handleCategoryClick = (categoryId) => {
    if (categoryId !== activeCategory) {
      setAnimate(false);
      setTimeout(() => {
        setActiveCategory(categoryId);
        setAnimate(true);
      }, 300);
    }
  };

  // Set initial animation state
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="resume-section">
      <h2 className="resume-section-title">Technical Proficiencies</h2>
      <div className="skills-section">
        {/* Category Filters */}
        <div className="skills-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className={`skills-grid ${animate ? 'animate' : 'fade-out'}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card skill-${skill.category}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state when no skills match the filter */}
        {filteredSkills.length === 0 && (
          <div className="no-skills-message">
            No skills found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

const Resume = () => (
  <div className="resume-container">
    <div className="resume-header">
      <h1>Resume</h1>
      <a href={myResume} className="download-button" download>
        Download PDF Version
      </a>
    </div>

    <div className="resume-summary">
      <p>
        A skilled Frontend Developer, Shopify Developer, and IT Consultant with expertise in creating responsive, 
        user-friendly web interfaces, developing custom Shopify themes, and providing strategic IT solutions. 
        Proficient in leveraging modern technologies to optimize functionality and enhance user experiences.
      </p>
    </div>

    <div className="resume-section">
      <h2 className="resume-section-title">Professional Journey</h2>
      
      <div className="experience-item">
        <div className="job-header">
          <h3>Senior Frontend Developer | IT Consultant</h3>
          <span className="job-duration">Oct 2023 – Present</span>
        </div>
        <div className="company-name">FCEC (Riyadh, KSA)</div>
        <ul className="job-responsibilities">
          <li>Developed a secure Employee Portal using Node.js, Django, and JWT authentication, featuring role-based access, task management, personalized dashboards, and real-time updates.</li>
          <li>Developed corporate websites using Shopify Liquid Platform: fcec.sa, fceco.sa, aqeaw.com.</li>
          <li>Designed scalable, user-friendly web apps aligned with company goals.</li>
          <li>Analyzed IT infrastructure, providing optimization strategies.</li>
          <li>Ensured secure, high-performance websites and regulatory compliance.</li>
          <li>Managed dev projects and trained teams on modern web tech.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Frontend Developer</h3>
          <span className="job-duration">Apr 2023 – Sep 2023</span>
        </div>
        <div className="company-name">KreativStorm (Berlin, Germany)</div>
        <ul className="job-responsibilities">
          <li>Engaged in real-world projects demanding high-quality frontend development skills.</li>
          <li>Developed and optimized web pages using HTML, CSS and JavaScript.</li>
          <li>Exposure to relational database systems and Object Oriented Programming.</li>
          <li>Implemented interactive features and functionalities using Node.js.</li>
          <li>Actively design and maintain solutions targeting new applications.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Frontend Developer | IT Specialist</h3>
          <span className="job-duration">Jul 2021 – Feb 2023</span>
        </div>
        <div className="company-name">Crewlogix (Lahore, Pakistan)</div>
        <ul className="job-responsibilities">
          <li>Determined the source of computer problems (hardware, software, user access, etc.).</li>
          <li>Served as liaison between staff and the technology department to resolve issues.</li>
          <li>Implemented front-end technologies like HTML, CSS and JavaScript to design, develop and maintain user-friendly web applications.</li>
          <li>Developed and maintained high-quality Shopify themes.</li>
          <li>Developed and implemented analytical capabilities and applications.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Junior Web Developer</h3>
          <span className="job-duration">May 2015 – Oct 2018</span>
        </div>
        <div className="company-name">TEXOL (Dammam, KSA)</div>
        <ul className="job-responsibilities">
          <li>Understanding and familiarity with top-notch programming skills and in-depth knowledge of modern HTML, CSS and JavaScript.</li>
          <li>Converted designs visualised in Photoshop, Illustrator, Adobe XD etc. to compliant HTML/CSS.</li>
          <li>Did the website maintenance for existing clients and new ones.</li>
          <li>Implemented Responsive design principles.</li>
          <li>Troubleshoot and fixed bugs, evaluated their impact, and came up with immediate solutions.</li>
          <li>Gained basic knowledge of SEO best practices.</li>
        </ul>
      </div>
    </div>

    {/* Skills Section Component */}
    <SkillsSection />

    <div className="resume-section">
      <h2 className='resume-section-title'>Education</h2>
      
      <div className="education-item">
        <div className="education-header">
          <h3>Master of Engineering Technology</h3>
          <span className="education-duration">Feb 2019 – Jun 2021</span>
        </div>
        <div className="institution">Universiti Kuala Lumpur, Malaysia</div>
        <p className="education-description">
          Specialized in advanced engineering technologies with a focus on digital systems and IT infrastructure management.
        </p>
      </div>

      <div className="education-item">
        <div className="education-header">
          <h3>BSc Electrical Engineering</h3>
          <span className="education-duration">Nov 2010 – Aug 2014</span>
        </div>
        <div className="institution">University of Engineering and Technology, Taxila, Pakistan</div>
        <p className="education-description">
          Comprehensive program covering electrical systems design, electronics, and computer systems fundamentals.
        </p>
      </div>
    </div>
  </div>
);





export default Resume;