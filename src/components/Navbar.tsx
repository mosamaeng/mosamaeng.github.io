import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Cpu, Layers, FileText, User, Menu, X, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'System Overview', path: '/', icon: Terminal },
    { name: 'Architecture / Projects', path: '/projects', icon: Layers },
    { name: 'System Layers (Skills)', path: '/skills', icon: Cpu },
    { name: 'Career Narrative', path: '/about', icon: User },
    { name: 'Resume', path: '/resume', icon: FileText },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b"
      style={{
        backgroundColor: 'var(--bg-navbar)',
        borderColor: 'var(--border-dim)',
      }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Senior Title */}
        <Link to="/" className="flex items-center gap-3 group" style={{ textDecoration: 'none' }}>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(139,92,246,0.15))',
              border: '1px solid var(--border-bright)',
              color: 'var(--accent-cyan)',
            }}
          >
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <div
              className="font-heading font-bold text-lg flex items-center gap-2 transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              Muhammad Osama
              <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-emerald)' }} />
            </div>
            <div className="text-xs font-mono tracking-wide" style={{ color: 'var(--text-secondary)' }}>
              Senior Backend Engineer
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={active ? {
                  background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(139,92,246,0.15))',
                  color: 'var(--accent-cyan)',
                  border: '1px solid var(--border-bright)',
                  boxShadow: '0 0 12px var(--accent-cyan-glow)',
                } : {
                  color: 'var(--text-secondary)',
                  border: '1px solid transparent',
                }}
              >
                <Icon className="w-4 h-4" style={active ? { color: 'var(--accent-cyan)' } : {}} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Theme Toggle + Social + CTA */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            data-active={theme === 'light' ? 'true' : 'false'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="theme-toggle-knob">
              {theme === 'dark' ? (
                <Moon className="w-3 h-3 text-[#060a12]" />
              ) : (
                <Sun className="w-3 h-3 text-white" />
              )}
            </div>
          </button>

          <a
            href="https://github.com/mosamaeng"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl transition-all"
            style={{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-dim)',
              color: 'var(--text-secondary)',
            }}
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-osama-50b61713a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl transition-all"
            style={{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-dim)',
              color: 'var(--text-secondary)',
            }}
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <Link
            to="/projects"
            className="btn btn-primary text-xs py-2 px-4"
          >
            View Projects
          </Link>
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            data-active={theme === 'light' ? 'true' : 'false'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="theme-toggle-knob">
              {theme === 'dark' ? (
                <Moon className="w-3 h-3 text-[#060a12]" />
              ) : (
                <Sun className="w-3 h-3 text-white" />
              )}
            </div>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl transition-all"
            style={{
              backgroundColor: 'var(--btn-secondary-bg)',
              border: '1px solid var(--border-dim)',
              color: 'var(--text-primary)',
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div
          className="lg:hidden px-4 py-6 space-y-3 border-b"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-dim)',
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all"
                style={active ? {
                  backgroundColor: 'rgba(0,240,255,0.08)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid var(--border-bright)',
                } : {
                  color: 'var(--text-secondary)',
                  border: '1px solid transparent',
                }}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--border-dim)' }}>
            <div className="flex gap-3">
              <a
                href="https://github.com/mosamaeng"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--border-dim)',
                  color: 'var(--text-primary)',
                }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-osama-50b61713a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl"
                style={{
                  backgroundColor: 'var(--btn-secondary-bg)',
                  border: '1px solid var(--border-dim)',
                  color: 'var(--text-primary)',
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <Link
              to="/resume"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary text-xs py-2 px-4"
            >
              Resume PDF
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
