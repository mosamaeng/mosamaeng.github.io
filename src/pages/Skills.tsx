import React from 'react';
import { skillsData } from '../data/skillsData';
import { Cpu, Server, Database, Bot, Layers, CheckCircle, Shield, Sparkles, Code } from 'lucide-react';

export const Skills: React.FC = () => {
  const getLayerIcon = (idx: number) => {
    switch (idx) {
      case 0: return Server;
      case 1: return Layers;
      case 2: return Database;
      case 3: return Bot;
      case 4: return Sparkles;
      case 5: return Shield;
      case 6: return Code;
      default: return Cpu;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12 max-w-5xl">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs uppercase badge-violet">
          <Cpu className="w-4 h-4" />
          Systems Taxonomy & Technical Stack
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
          Skills Grouped by System Layer
        </h1>
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Organized by architectural layers rather than a flat tag cloud. This reflects how an architect thinks about component boundaries, infrastructure ownership, and end-to-end data flow.
        </p>
      </div>

      {/* Layer Groups List */}
      <div className="space-y-8">
        {skillsData.map((group, idx) => {
          const Icon = getLayerIcon(idx);
          const accentColors: Record<string, string> = {
            cyan: 'var(--accent-cyan)', violet: 'var(--accent-violet)', emerald: 'var(--accent-emerald)',
            amber: 'var(--accent-amber)', rose: 'var(--accent-rose)', sky: 'var(--accent-sky)', lime: 'var(--accent-lime)'
          };
          const color = accentColors[group.accentColor] || 'var(--accent-cyan)';

          return (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4" style={{ borderBottom: '1px solid var(--border-dim)' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`, color, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)` }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      {group.layerName}
                    </h2>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {group.layerDescription}
                    </p>
                  </div>
                </div>
                <span
                  className="font-mono text-xs px-3 py-1 rounded self-start sm:self-auto"
                  style={{ backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`, color }}
                >
                  LAYER 0{idx + 1}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl transition-all flex items-center gap-3"
                    style={{
                      backgroundColor: skill.highlight ? 'var(--bg-card)' : 'var(--btn-secondary-bg)',
                      border: skill.highlight ? `1px solid color-mix(in srgb, ${color} 35%, transparent)` : '1px solid var(--border-dim)',
                      boxShadow: skill.highlight ? `0 0 12px color-mix(in srgb, ${color} 8%, transparent)` : 'none',
                    }}
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: skill.highlight ? color : 'var(--text-muted)' }} />
                    <span className="text-sm font-heading font-medium" style={{ color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
