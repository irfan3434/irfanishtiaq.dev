/*
<script type="application/ld+json">
{
  "@context": "Portfolio Website",
  "@type": "WebSite",
  "name": "Irfan Ishtiaq Portfolio",
  "url": "https://irfanishtiaq.dev",
  }
}
</script>
*/


// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code, Moon, Sun, Terminal } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled ] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const logoTextRef = useRef(null);
  

  
  // Typing animation effect
  useEffect(() => {
    if (!logoTextRef.current) return;
    
    const text = "Irfan Ishtiaq";
    let i = 0;
    logoTextRef.current.textContent = "";
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        logoTextRef.current.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, []);




  // Scroll effect
  useEffect(() => {
    const handleSmartScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Set scrolled state (already in your code)
      setScrolled(currentScrollPos > 10);
      
      // Update scroll progress indicator
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrollPercent}%`;
      }
      
      // Smart scroll behavior - hide when scrolling down, show when scrolling up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleSmartScroll);
    return () => window.removeEventListener('scroll', handleSmartScroll);
  }, [prevScrollPos]);



  useEffect(() => {
    // Save user preference
    localStorage.setItem('darkMode', darkMode);
    
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);


  const toggleNav = () => setIsMenuOpen((prev) => !prev);
  const closeNav = () => setIsMenuOpen(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''} ${!visible ? 'smart-scroll' : ''}`}>
      <div className="scroll-progress"></div>
      <div className="header-container">
        {/* Logo Area */}
        <div className="logo">
          <NavLink to="/" className="logo-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-icon">
              <Terminal size={24} />
            </span>
            <span ref={logoTextRef} className="logo-text"></span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={item.label}>
                <NavLink 
                  to={item.to} 
                  onClick={closeNav}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={({isActive}) => isActive ? 'active' : ''}
                >
                  {item.label}
                  <span className={`nav-indicator ${activeIndex === index ? 'nav-indicator-active' : ''}`}></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="header-controls">
          {/* Dark Mode Toggle */}
          <button 
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode} 
            className="theme-toggle"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* Mobile Menu Button */}
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'overlay-visible' : ''}`} onClick={closeNav}>
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-visible' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <button onClick={closeNav} className="close-nav" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  onClick={closeNav}
                  className={({isActive}) => isActive ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="mobile-nav-footer">
            <Code size={24} />
            <p>Frontend Developer Portfolio</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;