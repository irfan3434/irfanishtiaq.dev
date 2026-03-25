import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ShoppingBag, Layout, Smartphone, Server, Users, BarChart, Database, FileText } from 'lucide-react';
import './Home.css';
import profileImage from '../assets/profile1.png';
import ProfileCard from '../components/ProfileCard';

/* ── Count-up stat card ──────────────────────────────────────────────── */
const StatCard = ({ end, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      const duration = 1600;
      let startTime = null;
      const animate = (ts) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.floor(eased * end));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(end);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, end, delay]);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

/* ── Main component ──────────────────────────────────────────────────── */
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
    { title: "Custom Shopify Theme Development",       description: "Tailor-made Shopify themes that reflect your brand identity and enhance customer experience.",    icon: <ShoppingBag size={22} /> },
    { title: "Modern Frontend Development",            description: "Interactive and dynamic user interfaces using React, HTML, CSS, and JavaScript.",                   icon: <Layout size={22} /> },
    { title: "Responsive UI Design & Implementation",  description: "Pixel-perfect interfaces that work flawlessly across all devices and screen sizes.",               icon: <Smartphone size={22} /> },
    { title: "Full-Stack Web App Development",         description: "End-to-end solutions using Node.js and Django for robust web applications.",                       icon: <Server size={22} /> },
    { title: "Role-Based Dashboards & Authentication", description: "Secure user management systems with custom permission structures.",                                icon: <Users size={22} /> },
    { title: "Performance Optimization & SEO",         description: "Accelerate load times and improve search engine visibility for your applications.",                icon: <BarChart size={22} /> },
    { title: "Headless CMS & REST API Integrations",   description: "Seamless connections between your frontend and various data sources.",                             icon: <Database size={22} /> },
    { title: "Technical Consulting & Audits",          description: "Expert advice on architecture, infrastructure, and performance improvements.",                     icon: <FileText size={22} /> },
  ];

  const techGroups = [
    {
      label: "Frontend",
      color: "#61dafb",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Shopify Liquid"],
    },
    {
      label: "Backend",
      color: "#76b852",
      items: ["Node.js", "Django (Python)", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      label: "Database",
      color: "#4db6ac",
      items: ["MongoDB", "JSON"],
    },
    {
      label: "Design & Tools",
      color: "#e8a838",
      items: ["UI/UX Design", "Wix Web Design", "Git / GitHub", "Postman (API)"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    setIsVisible(true);

    setTimeout(() => {
      if (servicesRef.current) servicesRef.current.classList.add('visible');
    }, 400);

    const currentRef = techStackRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('stack-visible'); },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);

    return () => {
      clearInterval(interval);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [taglines.length]);

  const handleContactClick = () => { window.location.href = '/Contact'; };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-bg-grid" />
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>

        <div className="hero-container">
          <div className="hero-left">
            <ProfileCard
              name="Irfan Ishtiaq"
              title="Frontend Developer"
              handle="irfanishtiaq"
              status="Available for Projects"
              contactText="Contact Me"
              avatarUrl={profileImage}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={handleContactClick}
              className="profile-card-custom"
            />
          </div>

          <div className="hero-right">
            <span className="available-badge">
              <span className="badge-dot" />
              Available for Work
            </span>

            <h1 className="hero-heading">
              <span className="terminal-cursor">$</span>{' '}
              Hi, I'm <span className="hero-name">Irfan Ishtiaq</span>
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

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="services-section" ref={servicesRef}>
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">What I Do</h2>
            <p className="section-description">Specialized solutions I offer to bring your vision to life</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className="service-card"
                key={index}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section className="tech-stack-section" ref={techStackRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-description">Tools & technologies I work with</p>
          </div>

          <div className="tech-groups">
            {techGroups.map((group) => (
              <div className="tech-group" key={group.label}>
                <div className="tech-group-label" style={{ '--group-color': group.color }}>
                  <span className="group-dot" />
                  {group.label}
                </div>
                <div className="tech-pills">
                  {group.items.map((item) => (
                    <span
                      className="tech-pill"
                      key={item}
                      style={{ '--pill-color': group.color }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="quick-stats">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Track Record</h2>
            <p className="section-description">Delivering exceptional results with precision and expertise</p>
          </div>
          <div className="stats-grid">
            <StatCard end={10} suffix="+" label="Projects Completed" delay={0}   />
            <StatCard end={5}  suffix="+" label="Years Experience"   delay={200} />
            <StatCard end={12} suffix="+" label="Happy Clients"      delay={400} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
