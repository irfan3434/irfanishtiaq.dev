import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';

// Home is the landing route — keep it in the main bundle so the LCP path has no extra chunk request.
import Home from './pages/Home';

// Remaining routes are code-split: their JS (including framer-motion, used only by About/Projects)
// loads on demand instead of shipping with the homepage.
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

const PageFallback = () => (
  <div className="route-fallback" role="status" aria-label="Loading page">
    <span className="route-spinner" />
  </div>
);


function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;

