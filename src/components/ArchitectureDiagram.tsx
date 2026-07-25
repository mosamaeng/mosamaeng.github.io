import React, { useState } from 'react';
import { Database, Server, Smartphone, Globe, ShieldCheck, Cpu, ArrowRight, Layers, Bot, MessageSquare, MapPin } from 'lucide-react';

interface ArchitectureDiagramProps {
  type: 'ems' | 'n8n' | 'voting' | 'rec';
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ type }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  if (type === 'ems') {
    return (
      <div className="w-full bg-[#04070d] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">EMS Enterprise Architecture Diagram</h4>
              <p className="text-xs text-[#94a3b8]">Client Browser ↔ JWT API ↔ RBAC Middleware ↔ Sequelize ORM ↔ MySQL 8.0</p>
            </div>
          </div>
          <span className="badge badge-cyan text-xs">Dockerized Full-Stack</span>
        </div>

        {/* Diagram Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Step 1: Client */}
          <div
            onMouseEnter={() => setActiveStep(1)}
            onMouseLeave={() => setActiveStep(null)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeStep === 1 ? 'border-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_20px_rgba(0,240,255,0.3)]' : 'border-white/10 bg-[#0f172a]/80'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-[#00f0ff] px-2 py-0.5 rounded bg-[#00f0ff]/10">01. Frontend</span>
              <Smartphone className="w-4 h-4 text-[#00f0ff]" />
            </div>
            <h5 className="font-heading font-semibold text-white text-sm">React 19 / Vite App</h5>
            <p className="text-xs text-[#94a3b8] mt-1">Single-page app, Leaflet Maps, CKEditor letterheads</p>
            <div className="mt-3 pt-2 border-t border-white/5 flex flex-wrap gap-1">
              <span className="text-[10px] font-mono text-[#64748b]">TypeScript</span>
              <span className="text-[10px] font-mono text-[#64748b]">Vanilla CSS</span>
            </div>
          </div>

          {/* Step 2: REST API & RBAC */}
          <div
            onMouseEnter={() => setActiveStep(2)}
            onMouseLeave={() => setActiveStep(null)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeStep === 2 ? 'border-[#8b5cf6] bg-[#8b5cf6]/10 shadow-[0_0_20px_rgba(139,92,246,0.3)]' : 'border-white/10 bg-[#0f172a]/80'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-[#8b5cf6] px-2 py-0.5 rounded bg-[#8b5cf6]/10">02. REST API & Auth</span>
              <ShieldCheck className="w-4 h-4 text-[#8b5cf6]" />
            </div>
            <h5 className="font-heading font-semibold text-white text-sm">Express & Dynamic RBAC</h5>
            <p className="text-xs text-[#94a3b8] mt-1">JWT claims, 7 granular roles, module permissions</p>
            <div className="mt-3 pt-2 border-t border-white/5 flex flex-wrap gap-1">
              <span className="text-[10px] font-mono text-[#64748b]">bcryptjs</span>
              <span className="text-[10px] font-mono text-[#64748b]">Multer Uploads</span>
            </div>
          </div>

          {/* Step 3: ORM Layer */}
          <div
            onMouseEnter={() => setActiveStep(3)}
            onMouseLeave={() => setActiveStep(null)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeStep === 3 ? 'border-[#10b981] bg-[#10b981]/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'border-white/10 bg-[#0f172a]/80'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-[#10b981] px-2 py-0.5 rounded bg-[#10b981]/10">03. ORM Layer</span>
              <Server className="w-4 h-4 text-[#10b981]" />
            </div>
            <h5 className="font-heading font-semibold text-white text-sm">Sequelize ORM</h5>
            <p className="text-xs text-[#94a3b8] mt-1">Relational models: HR, Payroll, Tasks, Invoices</p>
            <div className="mt-3 pt-2 border-t border-white/5 flex flex-wrap gap-1">
              <span className="text-[10px] font-mono text-[#64748b]">Migrations</span>
              <span className="text-[10px] font-mono text-[#64748b]">Transactions</span>
            </div>
          </div>

          {/* Step 4: Storage */}
          <div
            onMouseEnter={() => setActiveStep(4)}
            onMouseLeave={() => setActiveStep(null)}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeStep === 4 ? 'border-[#f59e0b] bg-[#f59e0b]/10 shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'border-white/10 bg-[#0f172a]/80'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase text-[#f59e0b] px-2 py-0.5 rounded bg-[#f59e0b]/10">04. Database</span>
              <Database className="w-4 h-4 text-[#f59e0b]" />
            </div>
            <h5 className="font-heading font-semibold text-white text-sm">MySQL 8.0</h5>
            <p className="text-xs text-[#94a3b8] mt-1">Geospatial punch data, financial ledgers, audit logs</p>
            <div className="mt-3 pt-2 border-t border-white/5 flex flex-wrap gap-1">
              <span className="text-[10px] font-mono text-[#64748b]">sem_db</span>
              <span className="text-[10px] font-mono text-[#64748b]">Docker Vol</span>
            </div>
          </div>

        </div>

        {/* Side Branch Note: Geolocation verification */}
        <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-[#94a3b8]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00f0ff]" />
            <span>Punch Verification Branch: Client Punch Geolocation → Leaflet Geofence Map Inspection → HR Relaxation Approval</span>
          </div>
          <span className="font-mono text-[10px] text-[#00f0ff]">Anti-Fraud Subsystem</span>
        </div>
      </div>
    );
  }

  if (type === 'n8n') {
    return (
      <div className="w-full bg-[#04070d] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">Stateful AI Automation Flow (n8n Engine)</h4>
              <p className="text-xs text-[#94a3b8]">Trigger → Webhook Router → News Scraping → Dual Model Fallback → WhatsApp HITL → LinkedIn API</p>
            </div>
          </div>
          <span className="badge badge-violet text-xs">Self-Hosted n8n</span>
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] font-mono text-xs flex items-center justify-center font-bold">1</span>
              <div>
                <span className="text-xs font-mono text-[#00f0ff]">Schedule / Webhook</span>
                <div className="text-sm font-semibold text-white">Daily 9:15 AM Cron or WhatsApp Command Input</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748b]" />
          </div>

          <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] font-mono text-xs flex items-center justify-center font-bold">2</span>
              <div>
                <span className="text-xs font-mono text-[#8b5cf6]">Context Enrichment</span>
                <div className="text-sm font-semibold text-white">Fetch Live Google News RSS & PSX Market HTML Scraper</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748b]" />
          </div>

          <div className="p-4 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/40 relative">
            <div className="text-xs font-mono text-[#8b5cf6] uppercase tracking-wider mb-2 font-bold flex items-center justify-between">
              <span>03. Resilient Redundant AI Generation Layer</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#8b5cf6]/20">onError: continueErrorOutput</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#080c14] border border-[#00f0ff]/40">
                <div className="text-xs text-[#00f0ff] font-mono font-bold">Primary: Gemini 3 Pro</div>
                <div className="text-xs text-[#94a3b8] mt-1">High-capacity reasoning, topical formatting, hashtag generation</div>
              </div>
              <div className="p-3 rounded-lg bg-[#080c14] border border-[#f59e0b]/40">
                <div className="text-xs text-[#f59e0b] font-mono font-bold">Fallback: Gemma 4 (31B)</div>
                <div className="text-xs text-[#94a3b8] mt-1">Executes automatically if Gemini hits API quota/timeout</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#10b981]/20 text-[#10b981] font-mono text-xs flex items-center justify-center font-bold">4</span>
              <div>
                <span className="text-xs font-mono text-[#10b981]">Human-In-The-Loop Approval</span>
                <div className="text-sm font-semibold text-white">Send Interactive Draft to WhatsApp (Approve / Regenerate / Cancel)</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#64748b]" />
          </div>

          <div className="p-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-[#10b981]" />
              <div className="text-sm font-semibold text-white">Publish Directly to LinkedIn REST API v2 on 1-Click Mobile Signal</div>
            </div>
            <span className="badge badge-emerald text-xs">Zero-Hallucination Safe</span>
          </div>

        </div>
      </div>
    );
  }

  if (type === 'voting') {
    return (
      <div className="w-full bg-[#04070d] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base">Polyglot Mass Data & AI OCR Architecture</h4>
              <p className="text-xs text-[#94a3b8]">Laravel 8 Queue Workers ↔ Python PyMuPDF ↔ GCS ↔ Gemini AI Batch OCR ↔ WhatsApp Dispatch</p>
            </div>
          </div>
          <span className="badge badge-emerald text-xs">Mass Scale Ingestion</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0f172a]/80 border border-white/10">
            <div className="text-xs font-mono text-[#00f0ff] mb-1">01. Ingestion Layer</div>
            <h5 className="font-heading font-semibold text-white text-sm">Laravel 8 Queue Batching</h5>
            <p className="text-xs text-[#94a3b8] mt-1">Chunked processing (1000 records/batch) for Excel and electoral PDFs.</p>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-[#64748b] font-mono">
              ProcessVoterImport Job
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/30">
            <div className="text-xs font-mono text-[#8b5cf6] mb-1">02. Python & AI Subsystem</div>
            <h5 className="font-heading font-semibold text-white text-sm">PyMuPDF + Gemini Batch OCR</h5>
            <p className="text-xs text-[#94a3b8] mt-1">Crops scanned Urdu/English voter blocks, uploads to GCS, runs Gemini multimodal OCR.</p>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-[#8b5cf6] font-mono">
              Quarantine Bad CNICs
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30">
            <div className="text-xs font-mono text-[#10b981] mb-1">03. Delivery & Field Layer</div>
            <h5 className="font-heading font-semibold text-white text-sm">mPDF Slips & WhatsApp Dispatch</h5>
            <p className="text-xs text-[#94a3b8] mt-1">Renders bilingual voter parchi PDFs and generates +92 WhatsApp API target links.</p>
            <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-[#10b981] font-mono">
              Instant Voter Delivery
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#04070d] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/30">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-white text-base">High-Performance & Technical SEO Architecture</h4>
            <p className="text-xs text-[#94a3b8]">Cloudflare CDN → High-Availability Linux PHP → Minified Assets & Preloading → GA4 & Schema.org</p>
          </div>
        </div>
        <span className="badge badge-amber text-xs">1st Page Google Rank</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-center">
          <div className="text-xs font-mono text-[#f59e0b] mb-1">01. CDN Edge</div>
          <div className="font-semibold text-white text-sm">Cloudflare CDN</div>
          <div className="text-[11px] text-[#94a3b8] mt-1">Brotli compression, DDoS protection, edge caching</div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-center">
          <div className="text-xs font-mono text-[#00f0ff] mb-1">02. Server</div>
          <div className="font-semibold text-white text-sm">PHP 8 Modular App</div>
          <div className="text-[11px] text-[#94a3b8] mt-1">Clean templates, high availability Linux host</div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-center">
          <div className="text-xs font-mono text-[#8b5cf6] mb-1">03. Performance</div>
          <div className="font-semibold text-white text-sm">Asset Preloading</div>
          <div className="text-[11px] text-[#94a3b8] mt-1">LCP image preloads, style.min.css, main.min.js</div>
        </div>

        <div className="p-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-center">
          <div className="text-xs font-mono text-[#10b981] mb-1">04. SEO & Analytics</div>
          <div className="font-semibold text-white text-sm">JSON-LD & GA4</div>
          <div className="text-[11px] text-[#94a3b8] mt-1">Schema.org entities, search snippet optimization</div>
        </div>
      </div>
    </div>
  );
};
