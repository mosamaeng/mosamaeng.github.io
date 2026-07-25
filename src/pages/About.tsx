import React from 'react';
import { careerNarrative, workExperiences, educationList } from '../data/experienceData';
import { User, Briefcase, GraduationCap, ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 max-w-4xl">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs uppercase badge-emerald">
          <User className="w-4 h-4" />
          Career Narrative & Background
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
          Muhammad Osama
        </h1>
        <p className="text-xl font-mono" style={{ color: 'var(--accent-cyan)' }}>
          Senior Backend Engineer • 8+ Years Experience
        </p>
      </div>

      {/* 4-Paragraph Career Narrative */}
      <section className="space-y-6">
        <div
          className="p-8 rounded-3xl space-y-6 text-base leading-relaxed"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
            color: 'var(--text-secondary)',
          }}
        >
          <div
            className="flex items-center gap-3 font-heading font-bold text-lg pb-4"
            style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border-dim)' }}
          >
            <Terminal className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
            The Career Through-Line
          </div>

          <p>{careerNarrative.paragraph1}</p>
          <p>{careerNarrative.paragraph2}</p>
          <p>{careerNarrative.paragraph3}</p>
          <p>{careerNarrative.paragraph4}</p>
        </div>
      </section>

      {/* Condensed Career Timeline */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl badge-violet">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>Professional Experience</h2>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Chronological track record of company engineering roles</p>
          </div>
        </div>

        <div className="relative ml-4 pl-6 space-y-8" style={{ borderLeft: '2px solid var(--border-dim)' }}>
          {workExperiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div
                className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2"
                style={{
                  backgroundColor: exp.isCurrent ? 'var(--accent-emerald)' : 'var(--timeline-dot-bg)',
                  borderColor: exp.isCurrent ? 'var(--accent-emerald)' : 'var(--border-dim)',
                }}
              />

              <div
                className="p-5 rounded-2xl space-y-2 transition-all"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-dim)',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-heading font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                    {exp.role}
                  </h3>
                  <span
                    className="font-mono text-xs px-2.5 py-0.5 rounded self-start sm:self-auto badge-cyan"
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {exp.company} • {exp.location}
                </div>

                <ul className="space-y-1.5 pt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {exp.impactBullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: 'var(--accent-cyan)' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Education & Degrees */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl badge-amber">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>Academic Qualifications</h2>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Higher degree specialization in software project management and engineering</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-2">
              <div className="font-mono text-xs" style={{ color: 'var(--accent-cyan)' }}>{edu.period}</div>
              <h3 className="font-heading font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h3>
              <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{edu.institution}</div>
              <p className="text-xs leading-relaxed pt-2" style={{ borderTop: '1px solid var(--border-dim)', color: 'var(--text-secondary)' }}>
                {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border-dim)' }}>
        <div>
          <div className="font-heading font-bold text-base" style={{ color: 'var(--text-primary)' }}>Want to discuss backend architecture or team lead roles?</div>
          <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>Available for senior roles in high-scale backend systems.</div>
        </div>
        <Link to="/projects" className="btn btn-primary text-xs">
          Explore Production Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
