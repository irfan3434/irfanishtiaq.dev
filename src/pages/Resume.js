import React from 'react';
import { useState, useEffect } from 'react';
import './Resume.css';
import  myResume from '../assets/Irfan_Ishtiaq_Resume.pdf';

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
        Senior Frontend Engineer with 6+ years building production React and Next.js applications across SaaS portals, corporate platforms, and e-commerce. Specializes in component architecture, performance optimization, and translating Figma designs into accessible, pixel-perfect interfaces. Recently extended stack into React Native for cross-platform delivery.
      </p>
    </div>

    <div className="resume-section">
      <h2 className="resume-section-title">Professional Journey</h2>
      
      <div className="experience-item">
        <div className="job-header">
          <h3>Senior Frontend Engineer</h3>
          <span className="job-duration">Oct 2023 – Present</span>
        </div>
        <div className="company-name">Future Cities for Engineering Consultations (Riyadh, KSA)</div>
        <ul className="job-responsibilities">
          <li>Architected and shipped an internal Employee Portal (React + Node.js + Django, JWT auth) with a role-based access control system spanning 47 granular permissions, personalized dashboards, leave management, document expiry tracking, and internal messaging.</li>
          <li>Built a full budget-lifecycle module with multi-stage approval workflows, versioning, audit trails, and typed sub-items (iqama renewals, medical insurance, business trips) including expense tracking and increment-request flows.</li>
          <li>Delivered 6 production web properties including aqeaw.com (bilingual Next.js 14 portfolio), fcec.sa and futurecode.sa (bilingual corporate sites), fceco.sa, and Kheir Fragrances (Shopify Liquid e-commerce); deployed on Vercel with custom DNS configuration.</li>
          <li>Built the full-stack backend (Express + MongoDB Atlas on Heroku) with automated Outlook email notifications and a password-protected admin dashboard with search, filters, detail views, and Excel export for the review committee.</li>
          <li>Achieved Lighthouse scores of 85–89 Performance, 88–95 Accessibility, 92–100 SEO, and 96–100 Best Practices across production deployments (fcec.sa, fceco.sa, futurecode.sa) via code splitting, next/image optimization, and deferred third-party scripts.</li>
          <li>Prototyped a React Native CLI application with FlatList virtualization, React Navigation, form validation, and search/filter, targeting Android.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Frontend Developer</h3>
          <span className="job-duration">Apr 2023 – Sep 2023</span>
        </div>
        <div className="company-name">KreativStorm (Berlin, Germany)</div>
        <ul className="job-responsibilities">
          <li>Built responsive React + ES6 interfaces consuming REST APIs across multiple client projects.</li>
          <li>Translated Figma and Adobe XD designs into pixel-perfect React components, contributing to a shared component library.</li>
          <li>Applied technical SEO fundamentals (semantic HTML, meta tags, structured data, sitemap generation) and mobile-first responsive layouts.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Frontend Developer</h3>
          <span className="job-duration">Jul 2021 – Feb 2023</span>
        </div>
        <div className="company-name">Crewlogix (Lahore, Pakistan)</div>
        <ul className="job-responsibilities">
          <li>Built and maintained custom Shopify themes in Liquid and React-based client interfaces across multiple stores.</li>
          <li>Collaborated with designers and backend engineers in agile sprints; participated in code reviews and PR workflows.</li>
          <li>Integrated third-party Shopify apps and custom Liquid sections for client stores, including product filters, review widgets, and conversion-focused landing pages.</li>
        </ul>
      </div>

      <div className="experience-item">
        <div className="job-header">
          <h3>Junior Web Developer</h3>
          <span className="job-duration">May 2015 – Oct 2018</span>
        </div>
        <div className="company-name">TEXOL (Dammam, KSA)</div>
        <ul className="job-responsibilities">
          <li>Built and maintained corporate websites in HTML5, CSS3, and JavaScript; handled cross-browser compatibility and legacy browser support.</li>
          <li>Integrated CMS workflows and managed content updates across multiple client sites.</li>
          <li>Supported ongoing maintenance, bug triage, and deployment.</li>
        </ul>
      </div>
    </div>

    {/* Skills Section Component */}
    <SkillsSection />

    <div className="resume-section">
      <h2 className='resume-section-title'>Education</h2>
      
      <div className="education-item">
        <div className="education-header">
          <h3>Master of Science (Computer Science)</h3>
          <span className="education-duration">Feb 2019 – Jun 2021</span>
        </div>
        <div className="institution">Universiti Kuala Lumpur, Malaysia</div>
        
      </div>

      <div className="education-item">
        <div className="education-header">
          <h3>Bachelor of Science (Electrical Engineering)</h3>
          <span className="education-duration">Nov 2010 – Aug 2014</span>
        </div>
        <div className="institution">University of Engineering and Technology, Taxila, Pakistan</div>
        
      </div>
    </div>
  </div>
);





export default Resume;