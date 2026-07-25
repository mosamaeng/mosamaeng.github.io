import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Github, Linkedin, ShieldCheck, Terminal, Server, Sparkles, GitBranch } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';

export const Home: React.FC = () => {

  const accentColors: Record<string, string> = {
    cyan: 'var(--accent-cyan)', violet: 'var(--accent-violet)', emerald: 'var(--accent-emerald)',
    amber: 'var(--accent-amber)', rose: 'var(--accent-rose)', sky: 'var(--accent-sky)', lime: 'var(--accent-lime)'
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-16 md:pt-28 overflow-hidden">

        {/* Animated hero background orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--orb-drift-cyan)' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ backgroundColor: 'var(--orb-drift-violet)' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 px-4">
          
          {/* Terminal-Style Intro Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-mono text-xs tracking-widest uppercase hero-glow-ring badge-cyan">
            <ShieldCheck className="w-4 h-4" />
            <span>Architectural Discipline</span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span>Senior Backend Engineer</span>
          </div>

          {/* Name & Title */}
          <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9]" style={{ color: 'var(--text-primary)' }}>
            Muhammad
            <span className="block gradient-text">Osama</span>
          </h1>

          <p className="text-xl sm:text-2xl font-heading font-semibold tracking-wide" style={{ color: 'var(--text-secondary)' }}>
            Senior Backend Engineer
          </p>

          {/* Positioning Statement */}
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            8+ years building and operating backend systems and automation pipelines on{' '}
            <span className="font-semibold" style={{ color: 'var(--accent-sky)' }}>Linux</span> — from ERP platforms processing real payroll data to{' '}
            <span className="font-semibold" style={{ color: 'var(--accent-rose)' }}>AI-driven</span> content engines handling hundreds of thousands of records. Every deployment pushed through{' '}
            <span className="font-semibold" style={{ color: 'var(--accent-lime)' }}>GitHub Actions CI/CD</span> pipelines to{' '}
            <span className="font-semibold" style={{ color: 'var(--accent-cyan)' }}>SSH-hardened</span> production servers.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/projects" className="btn btn-primary text-base py-4 px-10 text-lg">
              Explore Architecture & Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="/Muhammad-Osama-Resume-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-base py-4 px-8"
            >
              <FileText className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
              Download Resume (PDF)
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center justify-center gap-6 pt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <a
              href="https://github.com/mosamaeng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono">github.com/mosamaeng</span>
            </a>
            <span style={{ color: 'var(--border-dim)' }}>│</span>
            <a
              href="https://linkedin.com/in/muhammad-osama-50b61713a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors group"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-mono">linkedin.com/in/muhammad-osama</span>
            </a>
          </div>

          {/* Quick Descriptor Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="badge badge-sky"><Server className="w-3 h-3" /> Linux / SSH / AWS</span>
            <span className="badge badge-rose"><Sparkles className="w-3 h-3" /> AI-Assisted Dev (Cursor / Claude Code)</span>
            <span className="badge badge-lime"><GitBranch className="w-3 h-3" /> GitHub Actions CI/CD</span>
            <span className="badge badge-cyan"><Terminal className="w-3 h-3" /> Docker / Nginx / Microservices</span>
          </div>

        </div>
      </section>

      {/* ===== STAT STRIP ===== */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard stat="8+ Years" label="Professional Experience" sublabel="Backend Systems, Microservices & Infrastructure" accentColor="cyan" />
          <StatCard stat="40%" label="Query Performance Boost" sublabel="MySQL execution tuning delivered at Get Licensed" accentColor="violet" />
          <StatCard stat="4 Systems" label="Architected End-to-End" sublabel="ERP, AI Engine, Polyglot Mass Ingestion, Web Platform" accentColor="emerald" />
          <StatCard stat="1st Page" label="Google Organic Rank" sublabel="SEO & high-performance engineering achieved for REC" accentColor="amber" />
        </div>
      </section>

      {/* ===== FEATURED PROJECTS GRID ===== */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6" style={{ borderBottom: '1px solid var(--border-dim)' }}>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--accent-cyan)' }}>
              Architectural Case Studies
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
              Production Systems Showcase
            </h2>
          </div>
          <Link to="/projects" className="text-sm font-semibold hover:underline flex items-center gap-1" style={{ color: 'var(--accent-cyan)' }}>
            View All 4 Detailed Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, i) => (
            <div key={project.id} className={`animate-float-in delay-${i + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== SYSTEM LAYER SKILLS PREVIEW ===== */}
      <section className="container mx-auto px-4 space-y-8">
        <div className="p-8 sm:p-10 rounded-3xl relative overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)' }}>
          
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ background: 'linear-gradient(to bottom-left, var(--orb-violet), transparent)' }} />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 relative z-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest block mb-2" style={{ color: 'var(--accent-violet)' }}>
                System Layer Breakdown — 7 Layers
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
                Technical Mastery by Architectural Layer
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                Includes AI dev tools, Linux/SSH security, and CI/CD pipelines
              </p>
            </div>
            <Link to="/skills" className="btn btn-secondary text-xs shrink-0">
              Explore Full Taxonomy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 relative z-10">
            {skillsData.map((group, idx) => {
              const color = accentColors[group.accentColor] || 'var(--accent-cyan)';
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl space-y-3 transition-all"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-dim)',
                  }}
                >
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color }}>
                    Layer 0{idx + 1}
                  </div>
                  <div className="font-heading font-semibold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
                    {group.layerName}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.skills.slice(0, 3).map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: 'var(--badge-bg)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-dim)',
                        }}
                      >
                        {s.name.length > 18 ? s.name.slice(0, 18) + '…' : s.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};
