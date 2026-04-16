import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Globe, Code, Star, X } from 'lucide-react';
import './About.css';

import Image11 from '../assets/BSDegree.webp';
import Image22 from '../assets/MSDegree.webp';
import Image33 from '../assets/IELTS.webp';
import Image1 from '../assets/Kreativstorm.webp';
import Image2 from '../assets/Crewlogix.webp';
import Image3 from '../assets/TEXOL.webp';
import Image4 from '../assets/JohnHopkins.webp';
import Image5 from '../assets/META.webp';
import Image6 from '../assets/Codecademy1.webp';
import Image7 from '../assets/Codecademy2.webp';
import Image8 from '../assets/freeCodeCamp1.webp';
import Image9 from '../assets/freeCodeCamp2.webp';
import Image10 from '../assets/HackerRank.webp';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [

    { 
      id: 1, 
      title: "Bachelor of Science (Electrical Engineering)", 
      issuer: "University of Engineering and Technology, Taxila", 
      date: "Sep 2014",
      image: Image11,
      description: "Bachelor of Science in Electrical Engineering"
    },
    { 
      id: 2, 
      title: "Master of Science (Computer Science)", 
      issuer: "University Kuala Lumpur", 
      date: "June 2021",
      image: Image22,
      description: "Master of Science in Computer Science"
    },
    { 
      id: 3, 
      title: "IELTS", 
      issuer: "British Council", 
      date: "Sep 2021",
      image: Image33,
      description: "IELTS Comprehensive test for English evaluation in listening, reading, writing and speaking."
    },
    { 
      id: 4, 
      title: "Frontend Web Development", 
      issuer: "KreativStorm", 
      date: "August 2023",
      image: Image1,
      description: "Comprehensive training in modern frontend technologies including HTML5, CSS3, JavaScript ES6+, and React framework."
    },
    { 
      id: 5, 
      title: "Frontend Developer | IT Specialist", 
      issuer: "Crewlogix Company", 
      date: "Feb 2023",
      image: Image2,
      description: "Experience Certificate for working in Crewlogix as Frontend Developer with IT Expertise, showcasing notable sills in web programming and organizational computing infrastructure."
    },
    { 
      id: 6, 
      title: "Junior Web Developer", 
      issuer: "Texol Corporate", 
      date: "Oct 2018",
      image: Image3,
      description: "Understanding and mastery of user interface design principles, user experience methodologies, and programming skills of HTML, CSS and JavaScript."
    },
    { 
      id: 7, 
      title: "HTML, CSS and JavaScript for Web Developers", 
      issuer: "Coursera", 
      date: "Jul 2021",
      image: Image4,
      description: "Completion certificate of HTML, CSS and JavaScript for Web Developers"
    },
     { 
      id: 8, 
      title: "Advanced React", 
      issuer: "Coursera", 
      date: "Jun 2022",
      image: Image5,
      description: "Completion certificate of Advanced React from META."
    },
     { 
      id: 9, 
      title: "Learn JavaScript", 
      issuer: "Codecademy", 
      date: "Dec 2022",
      image: Image6,
      description: "Completion certificate of basics and advance skills of JavaScript for Web Developers by Codecademy."
    },
     { 
      id: 10, 
      title: "Python 3", 
      issuer: "Codecademy", 
      date: "Apr 2022",
      image: Image7,
      description: "Completion certificate of Python3 by Codecademy."
    },
     { 
      id: 11, 
      title: "JavaScipt Algorithms and Data Structures", 
      issuer: "freeCodeCamp", 
      date: "Jan 2022",
      image: Image8,
      description: "Completion certificate of JavaScipt Algorithms and Data Structures issued by freeCodeCamp. Developer Certification, representing approximately 300 hours of coursework."
    },
     { 
      id: 12, 
      title: "Responsive Web Design", 
      issuer: "freeCodeCamp", 
      date: "Mar 2022",
      image: Image9,
      description: "Completion certificate of Responsive Web Design issued by freeCodeCamp. Developer Certification, representing approximately 300 hours of coursework."
    },
     { 
      id: 13, 
      title: "Basic JavaScript", 
      issuer: "HackerRank", 
      date: "Oct 2021",
      image: Image10,
      description: "Completion certificate of JavaScript(Basic)."
    }
  ];

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
    setModalOpen(true);
  };

  const closeCertificateModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };
 
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Django", level: 75 },
    { name: "MongoDB", level: 85 },
    { name: "Shopify Liquid", level: 90 },
    { name: "UI/UX Design", level: 80 },
    { name: "Wix Web Design", level: 95 },
    { name: "Git/GitHub", level: 85 },
    { name: "REST APIs", level: 80 },
    { name: "Express", level: 85 },
    { name: "Postman (API testing)", level: 85 }
    
  ];
 
  return (
    <motion.section className="about-page"  initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
      <div className="about-container">

        <motion.div className='about-header' initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
       
          <motion.div className="about-header-container" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} >
            <h2 className="about-header-title">About Me</h2>
            <div className="profile-accent"></div> 
          </motion.div>
            <motion.p className="about-summary" initial={{ opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Senior Frontend Engineer with 6+ years building production React and Next.js applications across SaaS portals, corporate platforms, and e-commerce. Specializes in component architecture, performance optimization, and translating Figma designs into accessible, pixel-perfect interfaces. Recently extended stack into React Native for cross-platform delivery.
            </motion.p>
        
           
        

        <div className="nav-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} />
            <span>Experience</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} />
            <span>Education</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <Code size={18} />
            <span>Skills</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <Award size={18} />
            <span>Credentials</span>
          </button>
        </div>
        
        </motion.div>

        <motion.div className="tab-content" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="experience-section">
              <h2><Briefcase size={20} /> Professional Journey</h2>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker current"></div>
                  <div className="timeline-content">
                    <div className="job-item">
                      <div className="job-header">
                        <h3>Senior Frontend Developer</h3>
                        <span className="job-date">Oct 2023 – Present</span>
                      </div>
                      <p className="job-company"><Globe size={16} /> Future Cities for Engineering Consultations (Riyadh, KSA)</p>
                      <ul>
                        <li>Architected and shipped an internal Employee Portal (React + Node.js + Django, JWT auth) with a role-based access control system spanning 47 granular permissions, personalized dashboards, leave management, document expiry tracking, and internal messaging.</li>
                       <li>Built a full budget-lifecycle module with multi-stage approval workflows, versioning, audit trails, and typed sub-items (iqama renewals, medical insurance, business trips) including expense tracking and increment-request flows.</li>
                       <li>Delivered 6 production web properties including aqeaw.com (bilingual Next.js 14 portfolio), fcec.sa and futurecode.sa (bilingual corporate sites), fceco.sa, and Kheir Fragrances (Shopify Liquid e-commerce); deployed on Vercel with custom DNS configuration.</li>
                       <li>Built the full-stack backend (Express + MongoDB Atlas on Heroku) with automated Outlook email notifications and a password-protected admin dashboard with search, filters, detail views, and Excel export for the review committee.</li>
                       <li>Achieved Lighthouse scores of 85–89 Performance, 88–95 Accessibility, 92–100 SEO, and 96–100 Best Practices across production deployments (fcec.sa, fceco.sa, futurecode.sa) via code splitting, next/image optimization, and deferred third-party scripts.</li>
                      <li>Prototyped a React Native CLI application with FlatList virtualization, React Navigation, form validation, and search/filter, targeting Android.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-item">
                      <div className="job-header">
                        <h3>Frontend Developer</h3>
                        <span className="job-date">Apr 2023 – Sep 2023</span>
                      </div>
                      <p className="job-company"><Globe size={16} /> KreativStorm (Berlin, Germany)</p>
                      <ul>
                        <li>Built responsive React + ES6 interfaces consuming REST APIs across multiple client projects.</li>
                        <li>Translated Figma and Adobe XD designs into pixel-perfect React components, contributing to a shared component library.</li>
                        <li>Applied technical SEO fundamentals (semantic HTML, meta tags, structured data, sitemap generation) and mobile-first responsive layouts.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-item">
                      <div className="job-header">
                        <h3>Frontend Developer</h3>
                        <span className="job-date">Jul 2021 – Feb 2023</span>
                      </div>
                      <p className="job-company"><Globe size={16} /> Crewlogix (Lahore, Pakistan)</p>
                      <ul>
                         <li>Built and maintained custom Shopify themes in Liquid and React-based client interfaces across multiple stores.</li>
                         <li>Collaborated with designers and backend engineers in agile sprints; participated in code reviews and PR workflows.</li>
                         <li>Integrated third-party Shopify apps and custom Liquid sections for client stores, including product filters, review widgets, and conversion-focused landing pages.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-item">
                      <div className="job-header">
                        <h3>Junior Web Developer</h3>
                        <span className="job-date">May 2015 – Oct 2018</span>
                      </div>
                      <p className="job-company"><Globe size={16} /> TEXOL (Dammam, KSA)</p>
                      <ul>
                        <li>Built and maintained corporate websites in HTML5, CSS3, and JavaScript; handled cross-browser compatibility and legacy browser support.</li>
                        <li>Integrated CMS workflows and managed content updates across multiple client sites.</li>
                        <li>Supported ongoing maintenance, bug triage, and deployment.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="education-section">
              <h2><GraduationCap size={20} /> Education</h2>
              
              <div className="education-grid">
                <div className="edu-card">
                  <div className="edu-icon">
                    <GraduationCap size={32} />
                  </div>
                  <div className="edu-content">
                    <h3>Master of Science (Computer Science)</h3>
                    <p className="edu-sub">Universiti Kuala Lumpur, Malaysia</p>
                    <span className="edu-date">Feb 2019 – Jun 2021</span>
                    <p className="edu-desc">
                      Specialized in advanced engineering technologies with a focus on digital systems and IT infrastructure management.
                    </p>
                  </div>
                </div>

                <div className="edu-card">
                  <div className="edu-icon">
                    <GraduationCap size={32} />
                  </div>
                  <div className="edu-content">
                    <h3>Bachelor of Science (Electrical Engineering)</h3>
                    <p className="edu-sub">University of Engineering and Technology, Taxila, Pakistan</p>
                    <span className="edu-date">Nov 2010 – Aug 2014</span>
                    <p className="edu-desc">
                      Comprehensive program covering electrical systems design, electronics, and computer systems fundamentals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="skills-section">
              <h2><Code size={20} /> Technical Proficiencies</h2>
              
              <div className="about-skills-grid">
                {skills.map((skill, index) => (
                  <div className="about-skill-item" key={index}>
                    <div className="about-skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="certificates-section">
              <h2><Award size={20} /> Degrees & Professional Certifications</h2>
              
              <div className="certificates-gallery">
                {certificates.map((cert) => (
                  <div className="cert-card" key={cert.id} onClick={() => openCertificateModal(cert)} >
                    <div className="cert-image">
                      <img src={cert.image} alt={cert.title} />
                      <div className="cert-overlay">
                        <span className="view-cert">View Details</span>
                      </div>
                    </div>
                    <div className="cert-info">
                      <h3>{cert.title}</h3>
                      <p>{cert.issuer}</p>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Certificate Modal */}
        {modalOpen && selectedCertificate && (
          <div className={`certificate-modal ${modalOpen ? 'open' : ''}`}>
            <div className="modal-overlay" onClick={closeCertificateModal}></div>
            <div className="modal-content">
              <button className="modal-close" onClick={closeCertificateModal}>
                <X size={24} />
              </button>
              <div className="modal-image">
                <img src={selectedCertificate.image} alt={selectedCertificate.title} />
              </div>
              <div className="modal-info">
                <h3>{selectedCertificate.title}</h3>
                <p className="modal-issuer"><Star size={16} /> {selectedCertificate.issuer}</p>
                <p className="modal-date">{selectedCertificate.date}</p>
                <p className="modal-description">{selectedCertificate.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default About;