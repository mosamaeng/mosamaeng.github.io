import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Skills } from './pages/Skills';
import { About } from './pages/About';
import { Resume } from './pages/Resume';

// Dynamic SEO & Scroll Restoration Helper
const SEOAndScrollHandler: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Map routes to dynamic page titles & meta descriptions
    let title = "Muhammad Osama — Senior Backend Engineer & Microservices Architect";
    let desc = "Muhammad Osama is a Senior Backend Engineer with 8+ years experience architecting scalable backend systems, cloud microservices, and AI/automation pipelines.";

    if (pathname === '/projects') {
      title = "Architecture & Production Projects — Muhammad Osama";
      desc = "Explore 4 detailed production case studies: Enterprise ERP, LinkedIn AI Automation Engine, Polyglot Voter Management, and REC Corporate SEO platform.";
    } else if (pathname.startsWith('/projects/')) {
      const slug = pathname.split('/projects/')[1];
      const formatted = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      title = `${formatted} — Case Study | Muhammad Osama`;
      desc = `Architectural case study detailing business problem, component diagrams, key engineering decisions, and quantified impact for ${formatted}.`;
    } else if (pathname === '/skills') {
      title = "Skills & System Layers — Muhammad Osama";
      desc = "7-layer architectural skills taxonomy covering Infrastructure & DevOps, Backend, Databases, AI Automation, AI Tooling (Cursor/Claude Code), Server Security, and Frontend.";
    } else if (pathname === '/about') {
      title = "Career Narrative & Qualifications — Muhammad Osama";
      desc = "Career progression across 8+ years, FAST-NUCES MS in Software Project Management, SSUET BS Computer Engineering, and engineering philosophy.";
    } else if (pathname === '/resume') {
      title = "Resume & PDF View — Muhammad Osama | Senior Backend Engineer";
      desc = "View and download the official PDF resume of Muhammad Osama, Senior Backend Engineer with 8+ years of experience.";
    }

    document.title = title;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SEOAndScrollHandler />
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
          {/* Futuristic scan line & noise overlays */}
          <div className="scan-line" />
          <div className="noise-overlay" />

          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
