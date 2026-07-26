import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { LinkedInBadge } from './LinkedInBadge';

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full pt-16 pb-12"
      style={{
        backgroundColor: 'var(--bg-footer)',
        borderTop: '1px solid var(--border-dim)',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container mx-auto px-4">
        
        {/* Top Operational Status Banner */}
        <div
          className="mb-12 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: 'var(--accent-emerald)' }} />
              <div className="absolute w-6 h-6 rounded-full animate-ping" style={{ backgroundColor: 'var(--accent-emerald-glow)' }} />
            </div>
            <div>
              <div className="font-heading font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                System Status: Operational & Ready for Senior Backend Opportunities
              </div>
              <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                Architecture Design • Microservices • High-Performance Databases • AI Automation
              </div>
            </div>
          </div>
          <a href="mailto:osama.symits@gmail.com" className="btn btn-primary text-xs whitespace-nowrap">
            Initiate Contact
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-heading font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(0,240,255,0.08)', color: 'var(--accent-cyan)', border: '1px solid var(--border-bright)' }}>
                <Terminal className="w-5 h-5" />
              </div>
              Muhammad Osama
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Senior Backend Engineer with 8+ years architecting scalable microservices, automated pipelines, and enterprise systems.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/mosamaeng"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl transition-all"
                style={{ backgroundColor: 'var(--btn-secondary-bg)', border: '1px solid var(--border-dim)', color: 'var(--text-secondary)' }}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-osama-50b61713a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl transition-all"
                style={{ backgroundColor: 'var(--btn-secondary-bg)', border: '1px solid var(--border-dim)', color: 'var(--text-secondary)' }}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            {/* LinkedIn Verified Badge */}
            <div className="pt-4">
              <LinkedInBadge />
            </div>
          </div>

          {/* Col 2: System Case Studies */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wide mb-4" style={{ color: 'var(--accent-cyan)' }}>
              Production Case Studies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/projects/ems-enterprise-management-system" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>EMS Enterprise Management ERP</Link></li>
              <li><Link to="/projects/linkedin-automation-engine" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>LinkedIn AI Automation Engine</Link></li>
              <li><Link to="/projects/election-campaign-voter-management" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>Polyglot Voter Ingestion System</Link></li>
              <li><Link to="/projects/rec-corporate-website" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>REC Corporate (SEO & Speed)</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wide mb-4" style={{ color: 'var(--accent-violet)' }}>
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>Home & System Summary</Link></li>
              <li><Link to="/projects" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>Architecture Case Studies</Link></li>
              <li><Link to="/skills" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>Skills by System Layer</Link></li>
              <li><Link to="/about" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>Career Narrative & Degrees</Link></li>
              <li><Link to="/resume" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>Embedded PDF Resume</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Touchpoints */}
          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wide mb-4" style={{ color: 'var(--accent-emerald)' }}>
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-cyan)' }} />
                <a href="mailto:osama.symits@gmail.com" className="transition-colors break-all hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  osama.symits@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-emerald)' }} />
                <a href="tel:+923123396927" className="transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  +92 312 3396927
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-violet)' }} />
                <span>Karachi, Pakistan (Open to Remote / Relocation)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid var(--border-dim)', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Muhammad Osama. Built with React 19, TypeScript, Vite & Custom Glassmorphism.
          </div>
          <div className="font-mono flex items-center gap-2">
            <span>FAST-NUCES MS SPM</span> • <span>SSUET BS Comp Eng</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
