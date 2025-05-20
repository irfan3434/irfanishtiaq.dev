// Footer.jsx
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Globe,
  Send,
  Zap,
  ShoppingBag,
  Brain

} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [darkMode, setDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [IsHovered, setIsHovered] = useState(false);

  const thoughts = [
  "Performance isn't a feature. It's a mindset.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "A great UI is invisible. It just works.",
  "Fast is better than fancy.",
  "Responsive isn't optional. It's essential.",
  "You aren't building pages. You're building experiences.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const currentQuote = thoughts[currentQuoteIndex];

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % thoughts.length);
  }, 5000); // Change quote every 5 seconds

  return () => clearInterval(interval);
  }, []);

  // Sync with global dark mode
  useEffect(() => {
    const updateDarkMode = () => {
      setDarkMode(document.body.classList.contains("dark-mode"));
    };

    updateDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(updateDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/irfan3434",
      label: "GitHub",
      icon: <Github size={25} />,
    },
    {
      href: "https://www.linkedin.com/in/irfanishtiaqdev/",
      label: "LinkedIn",
      icon: <Linkedin size={25} />,
    },
    {
      href: "mailto:irfanishtiaq2k10@gmail.com",
      label: "Email",
      icon: <Mail size={25} />,
    },
    {
      href: "https://irfanishtiaq.dev", // Replace with your personal website
      label: "Portfolio",
      icon: <Globe size={25} />,
    },
  ];

  const handleLogoClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const roles = [
    { icon: <Code size={16} />, text: "Frontend Developer" },
    { icon: <Zap size={16} />, text: "React Specialist" },
    { icon: <ShoppingBag size={16} />, text: "Shopify Specialist" },
    { icon: <Brain size={16} />, text: "IT Consultant" },
  ];

  return (
    <footer className={`footer ${darkMode ? "dark-mode" : ""}`}>
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-branding" onClick={handleLogoClick}>
          <Code size={32} className={`footer-logo ${isAnimating ? "animate-spin" : ""}`} />
          <h3 className="footer-title">Irfan Ishtiaq</h3>
          <div className="footer-role-container">
            <div className="roles-wrapper" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
              {roles.map((role, index) => (
                <div key={index} className="role-badge">
                  <span className="role-icon">{role.icon}</span>
                  <span className="role-text">{role.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <ul className="footer-social">
          {socialLinks.map(({ href, label, icon }) => (
            <li key={label}>
              <a  href={href}  target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-social-link">
                {icon}
                <span className="footer-social-tooltip">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Technical Skills */}
          <div className="footer-thoughts">
            <h4 className="footer-thoughts-title">Developer Thoughts</h4>
              <p className="footer-thoughts-text">
             {currentQuote}
             </p>
          
          </div>

        {/* Contact Prompt */}
        <div className="footer-contact">
          <h4 className="footer-contact-title">
            <Send size={16} className="inline-block mr-2" />
            Let's Connect
          </h4>
          <p className="footer-contact-text">
            Open to collaboration, freelance opportunities, and interesting
            projects.
          </p>
          <a
            href="mailto:irfanishtiaq2k10@gmail.com"
            className="footer-contact-button"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="lower-footer-section">
        {/* Copyright */}
        <p className="footer-copy">
          &copy; {currentYear} Irfan Ishtiaq. All Rights Reserved.
          <br />
          <span className="footer-tech-note">
            Crafted with React, Passion, and ☕
          </span>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="footer-wave"></div>
      </div>
    </footer>
  );
};

export default Footer;
