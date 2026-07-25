import React from 'react';

interface StatCardProps {
  stat: string;
  label: string;
  sublabel: string;
  accentColor?: 'cyan' | 'violet' | 'emerald' | 'amber';
}

export const StatCard: React.FC<StatCardProps> = ({ stat, label, sublabel, accentColor = 'cyan' }) => {
  const colorMap = {
    cyan: 'var(--accent-cyan)',
    violet: 'var(--accent-violet)',
    emerald: 'var(--accent-emerald)',
    amber: 'var(--accent-amber)',
  };

  return (
    <div className="glass-panel p-6 rounded-2xl transition-all">
      <div
        className="font-heading font-extrabold text-4xl lg:text-5xl mb-2 tracking-tight"
        style={{ color: colorMap[accentColor] }}
      >
        {stat}
      </div>
      <div className="font-heading font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
        {label}
      </div>
      <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
        {sublabel}
      </div>
    </div>
  );
};
