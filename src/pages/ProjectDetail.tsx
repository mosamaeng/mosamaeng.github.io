import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Layers, GitCommit, Check } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-5xl">
      
      {/* Back Navigation Button */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-heading font-semibold transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies & Systems Overview
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4 pb-8" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge badge-cyan text-xs">
            {project.layerTag}
          </span>
          <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
            {project.category}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h1>
        <p className="text-lg font-mono" style={{ color: 'var(--accent-cyan)' }}>
          {project.subtitle}
        </p>

        {project.liveUrl && (
          <div className="pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-xs"
            >
              Visit Live Platform <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Section 1: The Problem */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--accent-cyan)' }}>
          <ShieldAlert className="w-4 h-4" />
          <span>01. Operational & System Pain Points</span>
        </div>
        <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
          The Business Problem
        </h2>
        <div
          className="p-6 rounded-2xl text-base leading-relaxed"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)', color: 'var(--text-secondary)' }}
        >
          {project.problem}
        </div>
      </section>

      {/* Section 2: Architecture Overview & Diagram */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--accent-violet)' }}>
          <Layers className="w-4 h-4" />
          <span>02. Systems & Component Architecture</span>
        </div>
        <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
          Architecture Overview
        </h2>
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {project.architectureOverview}
        </p>
        
        {/* Render interactive SVG/DOM diagram */}
        <ArchitectureDiagram type={project.diagramType} />
      </section>

      {/* Section 3: Key Engineering Decisions */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--accent-emerald)' }}>
          <GitCommit className="w-4 h-4" />
          <span>03. Architectural Trade-offs & Engineering Rationale</span>
        </div>
        <div>
          <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
            Key Engineering Decisions
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
            Seniority is reflected in making informed technical decisions and explicitly managing their trade-offs.
          </p>
        </div>

        <div className="space-y-4">
          {project.decisions.map((dec, idx) => (
            <div key={idx} className="decision-card">
              <div className="text-xs font-mono font-semibold mb-1" style={{ color: 'var(--accent-cyan)' }}>
                DECISION 0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                {dec.decision}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3 pt-3" style={{ borderTop: '1px solid var(--border-dim)' }}>
                <div>
                  <span className="font-mono font-bold block mb-1" style={{ color: 'var(--accent-emerald)' }}>REASONING:</span>
                  <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">{dec.reasoning}</p>
                </div>
                <div>
                  <span className="font-mono font-bold block mb-1" style={{ color: 'var(--accent-amber)' }}>TRADE-OFF CONSIDERED:</span>
                  <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">{dec.tradeoff}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: What It Does (Core Features) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--accent-amber)' }}>
          <CheckCircle2 className="w-4 h-4" />
          <span>04. Functional System Capabilities</span>
        </div>
        <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
          What The System Does
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl flex items-start gap-3"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)' }}
            >
              <div className="p-1 rounded shrink-0 mt-0.5" style={{ backgroundColor: 'var(--accent-emerald-glow)', color: 'var(--accent-emerald)' }}>
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Tech Stack Badges */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--accent-cyan)' }}>
          <Cpu className="w-4 h-4" />
          <span>05. Stack & Infrastructure Layer</span>
        </div>
        <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="badge badge-cyan text-sm py-1.5 px-3">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Section 6: Quantified Outcomes */}
      <section className="space-y-6 pt-10" style={{ borderTop: '1px solid var(--border-dim)' }}>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--accent-emerald)' }}>
          <span>06. Quantified Business & System Impact</span>
        </div>
        <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
          Outcome & Delivered Value
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.outcomes.map((out, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl space-y-2"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)' }}
            >
              <div className="font-heading font-extrabold text-3xl" style={{ color: 'var(--accent-cyan)' }}>
                {out.stat}
              </div>
              <div className="font-heading font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                {out.label}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {out.description}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
