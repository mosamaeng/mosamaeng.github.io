import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Bot, Cpu, Globe } from 'lucide-react';
import { ProjectData } from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = () => {
    switch (project.diagramType) {
      case 'ems': return Layers;
      case 'n8n': return Bot;
      case 'voting': return Cpu;
      default: return Globe;
    }
  };

  const Icon = getIcon();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="glass-panel glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between group h-full"
      style={{ textDecoration: 'none' }}
    >
      <div>
        {/* Header Tag & Icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="badge badge-cyan text-xs">
            {project.layerTag}
          </span>
          <div
            className="p-2 rounded-xl transition-all"
            style={{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-dim)',
              color: 'var(--accent-cyan)',
            }}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-heading font-bold text-xl mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p className="text-xs font-mono mb-4" style={{ color: 'var(--text-secondary)' }}>
          {project.subtitle}
        </p>

        {/* Problem Solved */}
        <div
          className="p-4 rounded-xl text-sm leading-relaxed mb-6"
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-dim)',
            color: 'var(--text-secondary)',
          }}
        >
          <span className="font-semibold font-mono text-xs block mb-1" style={{ color: 'var(--accent-cyan)' }}>
            PROBLEM SOLVED:
          </span>
          {project.problem}
        </div>
      </div>

      {/* Footer CTA */}
      <div
        className="pt-4 flex items-center justify-between text-xs font-heading font-semibold group-hover:translate-x-1 transition-transform"
        style={{ borderTop: '1px solid var(--border-dim)', color: 'var(--accent-cyan)' }}
      >
        <span>Explore Architecture & Decisions</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
};
