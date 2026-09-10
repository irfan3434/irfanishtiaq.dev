// Projects.js - Enhanced 3D Portfolio Display with Frontend/Backend Sections
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp, Code, Globe, Database, Server } from 'lucide-react';
import './Projects.css';
import proImage1 from '../assets/fcec4.webp'
import proImage2 from '../assets/fceco.webp'
import proImage3 from '../assets/aqeaw5.webp'
import proImage4 from '../assets/futurecode3.webp'
import proImage5 from '../assets/kf10.webp'
import proImage6 from '../assets/maisonroyah.webp'
import proImage7 from '../assets/whitepace.webp'
import proImage8 from '../assets/tajalasna.webp'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'showcase'
  const [activeSection, setActiveSection] = useState('frontend'); // 'frontend' or 'backend'
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

  // Reset active project when switching sections
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setActiveProject(null);
  };

  const frontendProjects = [
    {
      id: 11,
      title: 'Whitepace – Pixel-Perfect SaaS Marketing Site',
      url: 'https://whitepace-frontend-liard.vercel.app',
      image: proImage7,
      description: 'A production-grade, pixel-faithful recreation of a SaaS marketing site built on the Next.js 16 App Router with Turbopack. Matches the Figma across five breakpoints (320–1920) with a hand-built component system and zero UI-framework dependencies.',
      challenge: 'Reproducing a complex, multi-section marketing design 1:1 across five breakpoints while keeping the bundle lean, the markup accessible, and dark mode flash-free — all without reaching for a component library.',
      solution: 'Built a system of shared primitives (Button, Card, SectionHeading, Container, Reveal) fed by a centralized content layer, defaulted to React Server Components, and opted into client code only for genuinely interactive sections. Theme is resolved before paint via useSyncExternalStore to eliminate any flash of the wrong theme.',
      features: [
        'Five-breakpoint pixel-faithful layout (320 → 1920)',
        'Hand-built component system — no UI framework',
        'React Server Components by default, minimal client JS',
        'No-flash dark mode via useSyncExternalStore + pre-paint script',
        'WCAG AA: landmarks, skip-to-content, focus-visible, reduced-motion',
        'Fully static output with next/image + next/font (near-zero CLS)'
      ],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Turbopack', 'React Server Components', 'Responsive Design'],
      color: '#4F9CF9'
    },
    {
      id: 12,
      title: 'Al Taj Al Asna – Bilingual Knowledge Platform (AI)',
      url: 'https://taj-al-asna.vercel.app',
      image: proImage8,
      description: 'A bilingual (Arabic/English, full RTL) knowledge platform built on the Next.js App Router, pairing a richly art-directed interface with a retrieval-augmented AI assistant that answers in the user\'s language, streamed live to the browser.',
      challenge: 'Delivering an AI assistant that feels instant and stays secure — the model-service key must never reach the browser — while serving a fully bilingual, deeply-linkable experience with audio playback and strong SEO.',
      solution: 'Added a retrieval-augmented assistant behind a same-origin backend-for-frontend route that proxies to the model service with the key held server-side, streaming answers over Server-Sent Events token by token. Content is served through dynamic routes with programmatic sitemap/robots and Open Graph metadata.',
      features: [
        'Retrieval-augmented (RAG) AI assistant',
        'Token-by-token answer streaming over Server-Sent Events',
        'Same-origin BFF proxy — API key never exposed to the client',
        'Bilingual Arabic/English with full RTL and audio playback',
        'Dynamic content routes with deep-linkable, shareable URLs',
        'Programmatic SEO: dynamic sitemap, robots, Open Graph, WebP media'
      ],
      stack: ['Next.js', 'TypeScript', 'Server-Sent Events', 'RAG / AI', 'i18n / RTL', 'SEO'],
      color: '#0e7a5f'
    },
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
      solution: 'Built a modern React-based multi-page application with smooth animations, interactive components, and optimized performance to effectively communicate their innovative approach to event management in Saudi Arabia.',
      features: [
        'React-based multi-page application',
        'Dynamic event portfolio showcase',
        'Interactive service exploration',
        'Mobile-first responsive design'
      ],
      stack: ['React.js', 'JavaScript ES6+', 'CSS3', 'HTML5', 'Responsive Design', 'REST API'],
      color: '#8B5CF6'
    },
    {
      id: 3,
      title: 'AQEAW – Ayed Alqarni Excellence Awards',
      url: 'https://www.aqeaw.com',
      image: proImage3,
      description: 'A production-grade, bilingual (Arabic/English) web application built on Next.js 14 using the App Router architecture. The project is written in TypeScript with a full RTL/LTR layout switching system.',
      challenge: 'Creating a visually stunning web interface that showcases architectural brilliance without overwhelming visitors, while ensuring optimal performance with large image assets.',
      solution: 'Implemented a lazy-loaded image gallery with progressive loading and WebP format conversion, along with smooth scroll animations for an immersive viewing experience.',
      features: [
        'Zero-Flash Bilingual RTL/LTR Switching',
        'App Router Architecture with Feature-Scoped Structure',
        'Global Language Context',
        'Persistent Layout Shell',
        'Rich Homepage Section Composition'
      ],
      stack: ['HTML5', 'CSS3', 'TypeScript', 'React.js', 'Next.js', 'Responsive Design'],
      color: '#ddb20a'
    },
    {
      id: 4,
      title: 'FCECO – Sustainable Energy',
      url: 'https://www.fceco.sa',
      image: proImage2,
      description: 'Designed and developed a fast, responsive corporate website for FC ECO using Next.js. Features include a clean brand-aligned UI, dynamic sections (Problem/Solution, Values, Projects), and mobile-optimized navigation.',
      challenge: 'Communicating complex energy services visually while maintaining an engaging user experience that drives conversion and inquiry.',
      solution: 'Designed an interactive service exploration system with animated data visualizations and intuitive navigation flow that guides users from awareness to contact.',
      features: [
        'Interactive service exploration',
        'Case study presentation system',
        'Animated data visualizations',
        'Custom contact forms with validation'
      ],
      stack: ['Next.js', 'React.js', 'Responsive Design', 'JavaScript', 'CSS3', 'HTML5'],
      color: '#29b7cf'
    },
    {
      id: 5,
      title: 'Kheir Fragrances – Luxury Perfume House',
      url: 'https://kheirfragrances.com/',
      image: proImage5,
      description: 'Luxury perfume brand website blending Middle Eastern heritage with French craftsmanship, developed to evoke elegance and sensory allure through refined visuals and polished UX.',
      challenge: 'Crafting an online experience that reflects the luxury essence of the brand while optimizing performance for high-resolution visuals and international accessibility.',
      solution: 'Built a minimalist yet luxurious interface with scroll-triggered transitions, optimized product imagery, and fragrance storytelling through elegant layout and motion design.',
      features: [
        'High-resolution product showcase',
        'Smooth scroll and parallax effects',
        'Localized performance optimization',
        'Story-driven fragrance presentation'
      ],
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Shopify', 'Liquid', 'Responsive Design'],
      color: '#a9beb3'
    },
    {
      id: 6,
      title: 'Maison Royah – Extravagant Fragrance House',
      url: 'https://www.maisonroyah.com/',
      image: proImage6,
      description: 'Built using the Wix platform, the site showcases a refined aesthetic that aligns with the brand luxurious identity.',
      challenge: 'Designing immersive product presentation pages with rich visuals and clean layouts.',
      solution: 'Designed and developed a visually elegant, fully responsive e-commerce website for Maison Royah, a premium home fragrance brand based in United Kingdom.',
      features: [
        'Integrated Wix Stores for seamless shopping experience',
        'Optimized for mobile and tablet responsiveness',
        'Ensured SEO best practices',
      ],
      stack: ['Wix', 'Webdesign', 'Web Development', 'UI/UX Design', 'Responsive Design'],
      color: '#d1532dff'
    }
  ];

  const backendProjects = [
    {
      id: 7,
      title: 'AQEAW – Awards Application & Review Platform',
      githubUrl: 'https://github.com/irfan3434/aq2026-backend',
      liveUrl: 'https://aqeaw.com/HowToApply',
      description: 'Backend and admin platform for a national excellence award. Handles bilingual, polymorphic nomination forms (individual and organization; self-entry and referral) with file-backed achievements, stores uploads in MongoDB Atlas via GridFS, and gives the review committee an authenticated dashboard with filtering and Excel export.',
      challenge: 'Accepting multi-part nominations with attachments from the public while keeping the committee\'s admin surface secure — without standing up external file storage or pulling in a heavy authentication stack.',
      solution: 'Built an Express API that streams uploads straight into GridFS (MIME allow-listing and size limits via Multer), signs admin sessions with dependency-free HMAC-SHA256 tokens verified in constant time, and exports submissions to a styled multi-sheet workbook with ExcelJS. New submissions trigger Nodemailer notifications with the original files attached, read back out of GridFS.',
      codeSnippet: `router.post('/submit-application', upload.fields([
  { name: 'upload[]', maxCount: 4 },
  { name: 'uploadOrg[]', maxCount: 4 },
]), async (req, res) => {
  const { formType } = req.body;

  // Stream each attachment into GridFS (MongoDB Atlas) — no external blob store
  const buildAchievements = async (titles, descs, files) => {
    const out = [];
    for (let i = 0; i < titles.length; i++) {
      let file;
      if (files[i]?.buffer) {
        const { fileId, filename, size } = await uploadToGridFS(
          files[i].buffer, files[i].originalname, files[i].mimetype
        );
        file = { fileId, filename, originalName: files[i].originalname, size };
      }
      out.push({ title: titles[i] || '', description: descs[i] || '', file });
    }
    return out;
  };

  // Polymorphic: individual (self / referral) or organization submission
  const doc = formType === 'organization'
    ? await OrganizationApplication.create({ /* org fields */ achievements })
    : await PersonalApplication.create({ /* self or referral */ achievements });

  res.status(201).json({ ok: true, id: doc._id, type: formType });

  // Fire-and-forget email with the original files read back out of GridFS
  sendSubmissionNotification(doc, formType).catch(console.error);
});`,
      features: [
        'Polymorphic forms: individual / organization, self / referral',
        'GridFS file storage in MongoDB Atlas (no external blob store)',
        'Multer memory uploads with MIME allow-list and size limits',
        'HMAC-SHA256 signed admin tokens, constant-time verification, TTL',
        'Admin dashboard: search, type and date-range filters, detail views',
        'Styled multi-sheet Excel export (ExcelJS)',
        'Email notifications with GridFS-sourced attachments (Nodemailer)',
        'CORS allow-list, request IP capture, health endpoint'
      ],
      implementation: [
        { label: 'Architecture', value: 'Express REST API; uploads streamed into MongoDB Atlas via GridFS' },
        { label: 'Security', value: 'HMAC-SHA256 signed admin tokens, constant-time verification, CORS allow-list' },
        { label: 'Files', value: 'Multer memory storage, MIME allow-list and size limits; email attachments read back from GridFS' },
        { label: 'Reporting', value: 'Styled multi-sheet workbook export via ExcelJS' }
      ],
      stack: ['Node.js', 'Express', 'MongoDB Atlas', 'GridFS', 'Multer', 'ExcelJS', 'Nodemailer', 'Heroku'],
      color: '#2563eb'
    },
    {
      id: 8,
      title: 'FCEC Job Recruitment System',
      githubUrl: 'https://github.com/irfan3434/recruitment-form',
      liveUrl: 'https://www.fcec.sa/pages/apply-now-1',
      description: 'Full-featured job application processing system for FCEC engineering consultancy. Handles complex multi-section forms with dynamic field addition, resume uploads, and automated HR notifications with structured data presentation.',
      challenge: 'Building a scalable recruitment system that captures comprehensive candidate profiles including dynamic education/experience entries, handles file uploads securely, and delivers well-formatted application data to HR teams while maintaining data integrity across form submissions.',
      solution: 'Developed a robust Express.js backend with MongoDB for applicant data storage, Multer for secure resume handling with base64 encoding, and Nodemailer for automated HR notifications. Implemented dynamic array processing for education/experience sections and comprehensive error handling.',
      codeSnippet: `app.post('/submit-form', upload.single('resume'), async (req, res) => {
  const { firstName, lastName, email, phone, profession, nationality, 
          address, highestEducation, fieldOfStudy, institute, 
          companyName, positionTitle, yearsOfExperience, skills, jobPosition } = req.body;

  let encodedFile = null;
  if (req.file) {
    const fileBuffer = await fs.promises.readFile(req.file.path);
    encodedFile = fileBuffer.toString('base64');
    await fs.promises.unlink(req.file.path); // Clean up uploaded file
  }

  const applicationFormEntry = new ApplicationForm({
    firstName, lastName, email, phone, profession, nationality, address,
    education: highestEducation.map((educationLevel, index) => ({
      highestEducation: educationLevel,
      fieldOfStudy: fieldOfStudy[index],
      institute: institute[index],
    })),
    experience: companyName.map((company, index) => ({
      companyName: company,
      positionTitle: positionTitle[index],
      yearsOfExperience: yearsOfExperience[index],
    })),
    skills: Array.isArray(skills) ? skills.join(', ') : skills,
    resume: encodedFile,
    jobPosition,
  });

  await applicationFormEntry.save();

  // Send structured email notification to HR
  await transporter.sendMail({
    from: process.env.OUTLOOK_EMAIL,
    to: 'careers@futurecityec.com',
    subject: 'New Job Application Received',
    html: generateStructuredEmailTemplate(req.body),
    attachments: [{ filename: req.file.originalname, content: encodedFile, encoding: 'base64' }]
  });

  res.send('Application submitted successfully.');
});`,
      features: [
        'Dynamic form sections (Education, Experience, Skills)',
        'Resume upload with base64 encoding and cleanup',
        'Structured MongoDB data storage with arrays',
        'Automated HR email notifications with attachments',
        'Multi-language frontend support (Arabic/English)',
        'Input validation and error handling',
        'CORS security for domain-specific access',
        'Responsive form UI with image carousel'
      ],
      implementation: [
        { label: 'Architecture', value: 'Express REST API with dynamic array processing for education / experience sections' },
        { label: 'Files', value: 'Résumé upload with base64 encoding and temp-file cleanup' },
        { label: 'Notifications', value: 'Structured HR email templates with attachments (Nodemailer)' },
        { label: 'Security', value: 'CORS allow-list and server-side input validation' }
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Multer', 'Nodemailer', 'CORS', 'Heroku'],
      color: '#10b981'
    },
    {
      id: 9,
      title: 'Enterprise HR Management System',
      githubUrl: 'https://github.com/irfan3434/employee-portal-backend',
      liveUrl: 'https://hr-dashboard-api.fcec.com',
      description: 'Comprehensive enterprise HR management platform built with Django REST Framework. Features role-based access control, employee management, budget tracking with approval workflows, leave management, task assignment, and internal messaging systems.',
      challenge: 'Building a scalable HR system that handles complex organizational hierarchies with granular permissions, multi-stage budget approval workflows, and real-time employee tracking while maintaining data security and audit trails across all operations.',
      solution: 'Developed a robust Django REST API with JWT authentication, custom permission classes, and role-based access control. Implemented complex budget management with version tracking, automated approval workflows, and comprehensive audit logging for compliance and transparency.',
      codeSnippet: `
      class EmployeeDataView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not check_dashboard_permission(request.user, 'view_self_profile'):
            return Response({'error': 'Permission denied'}, status=403)

        user = request.user
        
        # ✅ Retrieve dashboard role if assigned
        dashboard_role = user.dashboard_role.name if hasattr(user, 'dashboard_role') and user.dashboard_role else None
        
        # ✅ Retrieve assigned permissions as a list
        permissions = list(user.dashboard_role.permissions.values_list("code", flat=True)) if dashboard_role else []

        # Define accessible software based on access level
        software_links = {
            "basic": ["https://signin.jisr.net/#/login", "https://www.zoho.com/login.html"],
            "advanced": ["https://signin.jisr.net/#/login", "https://www.zoho.com/login.html"],
            "admin": ["https://signin.jisr.net/#/login", "https://www.zoho.com/login.html"],
        }

        return Response({
            "id": user.id,
            "username": user.username,
            "full_name": user.full_name,
            "email": user.email,
            "employee_id": user.employee_id,
            "work_title": user.work_title,
            "department": user.department,
            "access_level": ', '.join([group.name for group in user.groups.all()]) or "No group assigned",
            "avatar": user.avatar.url if user.avatar else '/media/avatars/default.jpg',
            "join_date": localtime(user.date_joined).strftime('%d-%m-%Y %H:%M:%S'),
            "last_login": localtime(user.last_login).strftime('%d-%m-%Y %H:%M:%S') if user.last_login else "Never logged in",
            "software_links": software_links.get(user.access_level, []),
            "is_staff": user.is_staff,
            "total_annual_leave": user.total_annual_leave,
            "dashboard_role": dashboard_role,  # ✅ Now includes role
            "permissions": permissions  # ✅ Now includes permissions
        })
      
      class BudgetView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def generate_unique_serial_number(self, budget_type, main_category, month, fortnight):
        prefix = f"BUDG-{budget_type.upper()}-{main_category.upper().replace(' ', '_')}-{month.upper()}-{fortnight.upper()}-{timezone.now().year}"
        counter = 1
        serial_number = f"{prefix}-{counter:03d}"
        while Budget.objects.filter(serial_number=serial_number).exists():
            counter += 1
            serial_number = f"{prefix}-{counter:03d}"
        return serial_number

    def post(self, request):
        if not check_dashboard_permission(request.user, 'submit_budget'):
            return Response({'error': 'Permission denied'}, status=403)

        finance_id = request.data.get('finance_reviewer')
        approver_id = request.data.get('approver')

        try:
            finance_user = Employee.objects.get(id=finance_id)
            approver_user = Employee.objects.get(id=approver_id)
        except Employee.DoesNotExist:
            return Response({"error": "Invalid Finance Reviewer or Approver."}, status=400)

        serializer = BudgetSerializer(data=request.data)
        if serializer.is_valid():
            # Generate unique serial number
            serial_number = self.generate_unique_serial_number(
                request.data.get('budget_type'),
                request.data.get('main_category'),
                request.data.get('month'),
                request.data.get('fortnight')
            )

            budget = serializer.save(
                created_by=request.user,
                finance_reviewer=finance_user,
                approver=approver_user,
                status='pending_finance',
                serial_number=serial_number
            )

            # Create version history for audit trail
            BudgetVersion.objects.create(
                budget_request=budget,
                modified_by=request.user,
                version_number=1,
                changes={'initial_submission': True}
            )

            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)`,
      features: [
        'Role-based Access Control (RBAC) with custom permissions',
        'Multi-stage budget approval workflows with audit trails',
        'Employee management with department hierarchies',
        'Leave request system with automated approvals',
        'Task assignment and tracking with notifications',
        'Internal messaging system with read receipts',
        'Budget expense tracking with overage protection',
        'Comprehensive reporting and CSV export',
        'JWT authentication with refresh tokens',
        'Version control for all budget modifications'
      ],
      implementation: [
        { label: 'Architecture', value: 'Django REST Framework; class-based API views with serializers' },
        { label: 'Access control', value: 'Custom RBAC permission checks per endpoint; role-scoped querysets' },
        { label: 'Workflows', value: 'Budget approval state machine with version history and unique serial numbers' },
        { label: 'Auth', value: 'JWT (SimpleJWT) access and refresh tokens' }
      ],
      stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'SimpleJWT', 'RBAC'],
      color: '#8b5cf6'
    },
    {
      id: 10,
      title: 'Dr. Ayed Alqarni Awards - Feedback & Voting Platform',
      githubUrl: 'https://github.com/irfan3434/dr-ayed-feedback-system',
      liveUrl: 'https://aqeaw.com/pages/feedbackform',
      description: 'Comprehensive feedback collection and voting platform for the Dr. Ayed Alqarni Awards council. Features multi-suggestion feedback forms, admin curation workflows, public voting system, and real-time dashboard analytics with security middleware.',
      challenge: 'Building a secure multi-stage platform that handles sensitive council feedback, allows administrative curation of suggestions, enables public voting, and provides comprehensive analytics while maintaining data integrity and preventing vote manipulation.',
      solution: 'Developed with Express.js featuring Helmet security, rate limiting, and CORS protection. Implemented MongoDB for scalable data storage, comprehensive admin dashboard for feedback curation, and public voting interface with real-time analytics and XSS protection.',
      codeSnippet: `const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration with dynamic origin checking
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:3000',
      'https://aqeaw.com',
      'https://www.aqeaw.com',
      'https://irfan3434.github.io'
    ];
    
    if (origin.includes('localhost') || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
};

app.use(cors(corsOptions));

// Rate limiting for security
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: {
    error: 'Too many requests. Please try again in 15 minutes.',
    code: 'RATE_LIMIT_EXCEEDED'
  }
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Route modules
app.use('/api/feedback', feedbackRoutes);
app.use('/api/voting', votingRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Dr. Ayed Feedback API is running!',
    timestamp: new Date().toISOString()
  });
});`
,
      features: [
        'Multi-suggestion feedback collection forms',
        'Administrative curation and approval workflows',
        'Public voting system with real-time analytics',
        'Comprehensive admin dashboard with statistics',
        'Security middleware (Helmet, CORS, Rate Limiting)',
        'XSS protection and input validation',
        'Real-time vote counting and result display',
        'Responsive frontend with smooth animations',
        'MongoDB data persistence with proper indexing',
        'RESTful API design with comprehensive error handling'
      ],
      implementation: [
        { label: 'Architecture', value: 'Modular Express routers (feedback / voting / admin) with a health endpoint' },
        { label: 'Security', value: 'Helmet headers, rate limiting, dynamic CORS origin checks, XSS protection' },
        { label: 'Data', value: 'MongoDB with indexing; admin curation before public voting' },
        { label: 'Analytics', value: 'Real-time vote tallying and results dashboard' }
      ],
      stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Helmet', 'CORS', 'Rate Limiting', 'XSS Protection'],
      color: '#dc2626'
    }
  ];

  const getCurrentProjects = () => {
    return activeSection === 'frontend' ? frontendProjects : backendProjects;
  };

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
            A collection of full-stack solutions I've designed and developed, showcasing both frontend interfaces and backend architectures.
          </motion.p>
          
          {/* Section Toggle Buttons */}
          <motion.div 
            className="section-toggle"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <button 
              className={`section-toggle-btn ${activeSection === 'frontend' ? 'active' : ''}`}
              onClick={() => handleSectionChange('frontend')}
              aria-label="Frontend Projects"
            >
              <Globe size={18} />
              Frontend
              <span className="section-count">({frontendProjects.length})</span>
            </button>
            <button 
              className={`section-toggle-btn ${activeSection === 'backend' ? 'active' : ''}`}
              onClick={() => handleSectionChange('backend')}
              aria-label="Backend Projects"
            >
              <Database size={18} />
              Backend
              <span className="section-count">({backendProjects.length})</span>
            </button>
          </motion.div>
          
          {/* View Mode Toggle */}
          <motion.div 
            className="view-toggle"
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.7, delay: 0.5 }}
          >
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
          </motion.div>
        </div>

        {viewMode === 'grid' ? (
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {getCurrentProjects().map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${activeSection === 'backend' ? 'backend-card' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 0 1px ${project.color}30`
                }}
              >
                <div className="project-number" style={{ color: project.color }}>
                  0{index + 1}
                </div>
                
                {activeSection === 'frontend' ? (
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      width="1720"
                      height="1080"
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
                ) : (
                  <div className="backend-code-container">
                    <div className="code-header">
                      <div className="code-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                      </div>
                      <span className="code-title">API Implementation</span>
                    </div>
                    <pre className="backend-code-snippet">
                      <code>{project.codeSnippet.substring(0, 400)}...</code>
                    </pre>
                    <div className="backend-overlay" style={{ backgroundColor: `${project.color}99` }}>
                      <div className="project-actions">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-btn"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Code size={20} />
                          <span>GitHub</span>
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-action-btn"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <Server size={20} />
                            <span>Live API</span>
                          </a>
                        )}
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
                )}
                
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
                  {getCurrentProjects().filter(p => p.id === activeProject).map(project => (
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
                          <div className="project-detail-links">
                            {activeSection === 'frontend' ? (
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-detail-link"
                                style={{ color: project.color }}
                              >
                                <Globe size={16} />
                                Visit Website <ArrowUpRight size={14} />
                              </a>
                            ) : (
                              <>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-detail-link"
                                  style={{ color: project.color }}
                                >
                                  <Code size={16} />
                                  View Code <ArrowUpRight size={14} />
                                </a>
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-detail-link"
                                    style={{ color: project.color }}
                                  >
                                    <Server size={16} />
                                    Live API <ArrowUpRight size={14} />
                                  </a>
                                )}
                              </>
                            )}
                          </div>
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
                        {activeSection === 'frontend' ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-detail-image"
                            width="1720"
                            height="1080"
                          />
                        ) : (
                          <div className="project-detail-code-container">
                            <div className="code-header">
                              <div className="code-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                              </div>
                              <span className="code-title">{project.title} - API Implementation</span>
                            </div>
                            <pre className="project-detail-code-snippet">
                              <code>{project.codeSnippet}</code>
                            </pre>
                          </div>
                        )}
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
                          <h4 className="project-detail-section-title" style={{ "--project-color": project.color, "--project-color-light": `${project.color}15` }}>Key Features</h4>
                          <ul className="project-detail-features">
                            {project.features.map((feature, i) => (
                              <li key={i} className="project-detail-feature-item">
                                <span className="feature-bullet" style={{ backgroundColor: project.color }}></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {activeSection === 'backend' && project.implementation && (
                          <div className="project-detail-section">
                            <h4 className="project-detail-section-title" style={{ "--project-color": project.color, "--project-color-light": `${project.color}15` }}>Technical Implementation</h4>
                            <div className="implementation-highlights">
                              {project.implementation.map((item, i) => (
                                <div className="implementation-item" key={i}>
                                  <strong>{item.label}:</strong> {item.value}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
                  {getCurrentProjects().map((project, index) => (
                    <motion.div
                      key={`showcase-${project.id}`}
                      className={`showcase-item ${activeSection === 'backend' ? 'backend-showcase' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveProject(project.id)}
                      style={{ 
                        borderColor: activeProject === project.id ? project.color : 'transparent',
                        backgroundColor: `${project.color}05`
                      }}
                    >
                      <div className="showcase-content">
                        <div className="showcase-index" style={{ color: project.color }}>0{index + 1}</div>
                        <div className="showcase-text">
                          <h3 className="showcase-title">{project.title}</h3>
                          <p className="showcase-description">{project.description.substring(0, 120)}...</p>
                          <div className="showcase-tech-stack">
                            {project.stack.slice(0, 4).map((tech, i) => (
                              <span 
                                key={i} 
                                className="showcase-tech"
                                style={{ backgroundColor: `${project.color}15`, color: project.color }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="showcase-preview">
                        {activeSection === 'frontend' ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="showcase-image"
                            width="1720"
                            height="1080"
                            loading="lazy"
                          />
                        ) : (
                          <div className="showcase-code-container">
                            <div className="code-header-mini">
                              <div className="code-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                              </div>
                            </div>
                            <pre className="showcase-code-snippet">
                              <code>{project.codeSnippet.substring(0, 200)}...</code>
                            </pre>
                          </div>
                        )}
                      </div>
                      <div className="showcase-action">
                        <button 
                          className="showcase-detail-btn"
                          style={{ backgroundColor: project.color }}
                          aria-label={`View ${project.title} details`}
                        >
                          {activeSection === 'frontend' ? <Globe size={16} /> : <Code size={16} />}
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
        
        <motion.div 
          className="projects-footer"
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="footer-content">
            <h3>Ready to build something amazing together?</h3>
            <p>I specialize in creating end-to-end solutions that combine beautiful interfaces with robust backend systems.</p>
            <div className="footer-actions">
              <a href="/contact" className="cta-button primary">
                Start a Project <ArrowUpRight size={16} />
              </a>
              <a href="/about" className="cta-button secondary">
                Learn More About Me
              </a>
            </div>
          </div>
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-number">{frontendProjects.length}</span>
              <span className="stat-label">Frontend Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{backendProjects.length}</span>
              <span className="stat-label">Backend APIs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{frontendProjects.length + backendProjects.length}</span>
              <span className="stat-label">Total Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;