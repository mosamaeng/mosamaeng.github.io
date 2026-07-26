import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Linkedin } from 'lucide-react';

export const LinkedInBadge: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const profileUrl = 'https://pk.linkedin.com/in/muhammad-osama-50b61713a';

  return (
    <div style={{ width: '100%' }}>
      <div
        className="rounded-xl overflow-hidden transition-all"
        style={{
          backgroundColor: isDark ? '#1b1f23' : '#ffffff',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
          boxShadow: isDark
            ? '0 4px 20px rgba(0,0,0,0.3)'
            : '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        {/* LinkedIn Blue Header */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ backgroundColor: '#0a66c2' }}
        >
          <Linkedin className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-semibold tracking-wide">LinkedIn</span>
        </div>

        {/* Profile Content */}
        <div className="px-4 py-5 text-center space-y-3">

          {/* Initials Avatar */}
          <div
            className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
            style={{
              background: 'linear-gradient(135deg, #0a66c2, #004182)',
              color: '#ffffff',
              border: `3px solid ${isDark ? 'rgba(10,102,194,0.4)' : 'rgba(10,102,194,0.2)'}`,
            }}
          >
            MO
          </div>

          {/* Name & Title */}
          <div>
            <div className="font-semibold text-sm" style={{ color: isDark ? '#e8e8e8' : '#191919' }}>
              Muhammad Osama
            </div>
            <div
              className="text-[11px] mt-1 leading-snug"
              style={{ color: isDark ? '#a0a0a0' : '#666666' }}
            >
              Sr. Software Engineer | Backend & DevOps | AI Automation (n8n & LLMs) | Laravel • Node.js • Docker • Nginx
            </div>
          </div>

          {/* View Profile CTA */}
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: '#0a66c2',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            View profile
          </a>
        </div>
      </div>
    </div>
  );
};
