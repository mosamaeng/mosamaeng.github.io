import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { Layers, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Enterprise ERP', 'AI & Automation', 'Polyglot Systems', 'Cloud & SEO'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.layerTag === activeFilter);

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs uppercase badge-cyan">
          <Layers className="w-4 h-4" />
          Systems Architecture & Engineering
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
          Production Architecture Case Studies
        </h1>
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Every project below leads with systems design and key trade-off rationale. Each case study documents the business problem, architectural flow diagram, decisions, and quantified engineering impact.
        </p>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-3 pb-6" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div className="flex items-center gap-2 text-xs font-mono mr-2" style={{ color: 'var(--text-muted)' }}>
          <Filter className="w-4 h-4" style={{ color: 'var(--accent-cyan)' }} />
          <span>FILTER BY SYSTEM LAYER:</span>
        </div>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all"
            style={activeFilter === filter ? {
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(139,92,246,0.15))',
              color: 'var(--accent-cyan)',
              border: '1px solid var(--border-bright)',
              boxShadow: '0 0 12px var(--accent-cyan-glow)',
            } : {
              backgroundColor: 'var(--btn-secondary-bg)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-dim)',
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};
