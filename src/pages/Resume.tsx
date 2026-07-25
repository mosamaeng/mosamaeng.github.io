import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const Resume: React.FC = () => {
  const pdfUrl = "/Muhammad-Osama-Resume-2026.pdf";

  return (
    <div className="container mx-auto px-4 py-12 space-y-10 max-w-5xl">
      
      {/* Header & Download Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6" style={{ borderBottom: '1px solid var(--border-dim)' }}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs uppercase mb-2 badge-cyan">
            <FileText className="w-4 h-4" />
            Official Resume & Credentials
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Muhammad Osama — Resume
          </h1>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Senior Backend Engineer • MS SPM (FAST-NUCES) • BS Comp Eng (SSUET)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={pdfUrl}
            download="Muhammad-Osama-Resume-2026.pdf"
            className="btn btn-primary text-sm py-3 px-6"
          >
            <Download className="w-4 h-4" />
            Download PDF Resume
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-sm p-3"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer Container */}
      <div className="glass-panel p-2 rounded-2xl overflow-hidden shadow-2xl">
        <div className="rounded-xl overflow-hidden min-h-[750px] relative flex flex-col" style={{ backgroundColor: 'var(--bg-surface)' }}>
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            title="Muhammad Osama Resume PDF"
            className="w-full h-[750px] border-0 rounded-xl"
          >
            <p className="p-8 text-center" style={{ color: 'var(--text-secondary)' }}>
              Your browser does not support inline PDF viewing. Please download the resume directly using the button above.
            </p>
          </iframe>
        </div>
      </div>

      {/* Quick Resume Bullet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl space-y-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)' }}>
          <ShieldCheck className="w-5 h-5" style={{ color: 'var(--accent-cyan)' }} />
          <h3 className="font-heading font-bold text-base" style={{ color: 'var(--text-primary)' }}>Backend & Microservices</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Laravel/PHP, Node.js, Express, Sequelize, Docker, AWS (EC2/S3/RDS), Linux Server Management.
          </p>
        </div>

        <div className="p-6 rounded-2xl space-y-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)' }}>
          <CheckCircle className="w-5 h-5" style={{ color: 'var(--accent-violet)' }} />
          <h3 className="font-heading font-bold text-base" style={{ color: 'var(--text-primary)' }}>Performance & AI Automation</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            40% MySQL query boost, n8n self-hosted state machines, Gemini & Gemma APIs, Python PyMuPDF batch OCR.
          </p>
        </div>

        <div className="p-6 rounded-2xl space-y-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-dim)' }}>
          <FileText className="w-5 h-5" style={{ color: 'var(--accent-emerald)' }} />
          <h3 className="font-heading font-bold text-base" style={{ color: 'var(--text-primary)' }}>Academic Foundations</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            MS in Software Project Management (FAST-NUCES 2020-2023), BS Computer Engineering (SSUET 2014-2017).
          </p>
        </div>
      </div>

    </div>
  );
};
