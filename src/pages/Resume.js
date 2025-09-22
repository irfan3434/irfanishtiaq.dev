import React from 'react';
import { useState, useEffect } from 'react';
import './Resume.css';
import  myResume from '../assets/Irfan_Resume.pdf'

// Skills Section Component
const SkillsSection = () => {
  // Define all skills with their categories
  const skills = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScript(ES6+)', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'React.js', category: 'frontend' },
    { name: 'Shopify Liquid', category: 'frontend' },
    { name: 'UI/UX (Figma, Adobe XD, Photoshop)', category: 'frontend' },
    { name: 'Wix Web Design', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Django (Python)', category: 'backend' },
    { name: 'REST APIs', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'JWT Authentication', category: 'backend' },
    { name: 'MongoDB', category: 'tools' },
    { name: 'Git/GitHub', category: 'tools' },
    { name: 'Postman (API Testing)', category: 'tools' },
    { name: 'VS Code', category: 'tools' },
    { name: 'SEO Best Practices', category: 'testing' },
    { name: 'Google Optimization', category: 'testing' },
    { name: 'Performance Tuning', category: 'testing' },
    { name: 'Debugging & Troubleshooting', category: 'testing' },
    { name: 'IT Infrastructure Consulting', category: 'softskills' },
    { name: 'Strategic Planning', category: 'softskills' },
    { name: 'Client Communication', category: 'softskills' },
    { name: 'Project Management', category: 'softskills' },
  
  ];

  // Define skill categories
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'testing', label: 'Testing' },
    { id: 'tools', label: 'Tools' },
    { id: 'softskills', label: 'Soft Skills' },

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
        Frontend Developer and Shopify Specialist with 6+ years of proven expertise designing, developing, 
        and deploying high-performance web applications and custom Shopify themes. Successfully built scalable Employee Portals and corporate websites, 
        enhancing application performance by over 30% and boosting user engagement. Skilled in modern JavaScript frameworks (React, Node.js), 
        Django backend integration, and strategically optimizing IT infrastructure to align with business goals.
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
          <li>Developed a secure Employee Portal utilizing React, Node.js, Django, and JWT Authentication, supporting 50+ employees with features like role-based access control, personalized dashboards, and real-time updates, resulting in a 25% increase in operational efficiency.</li>
          <li>Designed, developed, and optimized responsive corporate websites and e-commerce stores, leveraging Shopify Liquid, React, Wix and modern JavaScript, including: https://www.fcec.sa/, https://www.futurecode.sa/, https://aqeaw.com/, https://kheirfragrances.com/, https://www.fceco.sa/ and https://www.maisonroyah.com/. </li>
          <li>Improved website performance metrics (Google PageSpeed Insights) by 35%, significantly boosting user engagement and organic traffic.</li>
          <li>Conducted thorough analysis and strategic recommendations for IT infrastructure, reducing downtime by 20% through enhanced system reliability and optimized deployments.</li>
          <li>Ensured secure, high-performance websites and regulatory compliance.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Frontend Developer</h3>
          <span className="job-duration">Apr 2023 – Sep 2023</span>
        </div>
        <div className="company-name">KreativStorm (Berlin, Germany)</div>
        <ul className="job-responsibilities">
          <li>Designed, built, and optimized modern web applications using React, JavaScript (ES6+), HTML5, CSS3, and REST APIs, achieving over 40% improvement in load times.</li>
          <li>Translated UI/UX designs from tools like Figma, Adobe XD, and Photoshop into responsive and pixel-perfect frontend code, significantly enhancing client satisfaction and project turnaround by 30%.</li>
          <li>Implemented SEO best practices and responsive web design principles across multiple projects, boosting client site traffic by an average of 25%.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Frontend Developer</h3>
          <span className="job-duration">Jul 2021 – Feb 2023</span>
        </div>
        <div className="company-name">Crewlogix (Lahore, Pakistan)</div>
        <ul className="job-responsibilities">
          <li>Developed and maintained custom Shopify themes and responsive frontend interfaces, contributing to increased e-commerce sales by approximately 20% year-over-year.</li>
          <li>Enhanced client websites’ responsiveness and accessibility, reducing bounce rate by 18% through optimized UI implementations.</li>
          <li>Provided ongoing website maintenance, bug troubleshooting, and performance optimization, reducing reported client issues by 30%.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Junior Web Developer</h3>
          <span className="job-duration">May 2015 – Oct 2018</span>
        </div>
        <div className="company-name">TEXOL (Dammam, KSA)</div>
        <ul className="job-responsibilities">
          <li>Developed and maintained custom Shopify themes and responsive frontend interfaces, contributing to increased e-commerce sales by approximately 20% year-over-year.</li>
          <li>Enhanced client websites’ responsiveness and accessibility, reducing bounce rate by 18% through optimized UI implementations.</li>
          <li>Provided ongoing website maintenance, bug troubleshooting, and performance optimization, reducing reported client issues by 30%.</li>
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