export interface EngineeringDecision {
  decision: string;
  reasoning: string;
  tradeoff: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  layerTag: 'Enterprise ERP' | 'AI & Automation' | 'Polyglot Systems' | 'Cloud & SEO';
  problem: string;
  architectureOverview: string;
  diagramType: 'ems' | 'n8n' | 'voting' | 'rec';
  decisions: EngineeringDecision[];
  keyFeatures: string[];
  techStack: string[];
  outcomes: {
    stat: string;
    label: string;
    description: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'ems',
    slug: 'ems-enterprise-management-system',
    title: 'EMS — Enterprise Management System',
    subtitle: 'Full-stack ERP & Operations Platform for Engineering Consultancies',
    category: 'Backend Architecture / ERP System',
    layerTag: 'Enterprise ERP',
    problem: 'Engineering consulting firms run multi-million dollar projects, payroll, attendance, and invoicing across disconnected spreadsheets and manual processes with zero audit trail or granular role separation, leading to operational friction and attendance fraud.',
    architectureOverview: 'Architected as a containerized React 19/Vite frontend communicating with a stateless Express.js REST backend. Utilizes Sequelize ORM mapping to MySQL 8.0 under a module-level RBAC middleware layer. Attendance logging integrates with Leaflet maps to record and visualize check-in geolocation coordinates against client site bounds.',
    diagramType: 'ems',
    decisions: [
      {
        decision: 'Module-level dynamic permission matrix instead of static role-level checks',
        reasoning: 'Configured dynamic RBAC (Create, Read, Update, Delete per module) to support 7 distinct organizational roles (Super Admin, Admin, HR Manager, Accountant, PM, Employee, Viewer) without controller sprawl.',
        tradeoff: 'Slightly higher initial database authorization query overhead (mitigated via JWT claim caching) in exchange for complete administrative flexibility.'
      },
      {
        decision: 'Punch-time geolocation capture instead of client-side clock trust',
        reasoning: 'Captures precise latitude/longitude at punch-in/out and renders interactive Leaflet map overlays for HR managers to prevent attendance spoofing.',
        tradeoff: 'Requires GPS device permissions and handles edge-case offline fallback states via missing-attendance relaxation workflows.'
      },
      {
        decision: 'Attendance-driven payroll deduction & relaxation workflow engine',
        reasoning: 'Payroll deductions compute dynamically from punch records + approved relaxation requests rather than rigid hardcoded logic, allowing policy shifts without code deployment.',
        tradeoff: 'Increased financial database schema complexity to track retroactive adjustments and relaxation approvals.'
      }
    ],
    keyFeatures: [
      '7 Granular Roles with Module-Level dynamic RBAC (JWT authenticated)',
      'Complete HR & Employee Lifecycle Management with resume attachment tracking',
      'Projects & Interactive Kanban Task Board with multi-currency tracking',
      'Letterhead & Standard Invoicing Generator with CKEditor signature integration',
      'Geolocation Punch Verification with Leaflet interactive map rendering',
      'Attendance Relief & Relaxation Request Workflow for penalty waivers',
      'Playwright E2E Integration Test Suite covering critical business flows',
      'Docker & Docker Compose setup supporting zero-config full-stack deployment'
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Node.js / Express',
      'Sequelize ORM',
      'MySQL 8.0',
      'Docker',
      'Leaflet Maps',
      'JWT Auth',
      'Playwright E2E'
    ],
    outcomes: [
      {
        stat: '7 Roles',
        label: 'Granular Access',
        description: 'Enforced zero-trust RBAC across HR, Finance, and Project Management modules.'
      },
      {
        stat: '100%',
        label: 'Audit Accuracy',
        description: 'Replaced manual spreadsheets with tamper-proof geolocation punch verification.'
      },
      {
        stat: '< 200ms',
        label: 'API Response Time',
        description: 'Optimized Sequelize queries and indexed REST API controllers.'
      }
    ]
  },
  {
    id: 'n8n-linkedin',
    slug: 'linkedin-automation-engine',
    title: 'LinkedIn Automation Engine (n8n + AI Fallback + WhatsApp HITL)',
    subtitle: 'Stateful Agentic Workflow Engine with Redundant LLM Architecture',
    category: 'AI & Automation Pipelines',
    layerTag: 'AI & Automation',
    problem: 'Maintaining an authoritative LinkedIn presence requires continuous topic research and writing. Fully automated poster bots output generic hallucinations or off-brand copy, while manual drafting consumes hours of senior engineering time.',
    architectureOverview: 'Self-hosted n8n workflow operating as a stateful conversational engine. Uses n8n static data ($getWorkflowStaticData) to track multi-user sessions. Dynamically enriches prompts using Google News RSS feeds and live PSX stock market HTML scrapers, then routes generation to a dual-model redundant LLM stack with WhatsApp Human-in-the-Loop approval.',
    diagramType: 'n8n',
    decisions: [
      {
        decision: 'Dual-model fallback architecture (Gemini 3 Pro → Gemma 4 31B)',
        reasoning: 'Configured the Gemini 3 Pro agent with onError: continueErrorOutput. On API rate-limit or outage, n8n seamlessly transfers context to Gemma 4 (31B) to guarantee zero workflow failures during API disruptions.',
        tradeoff: 'Requires maintaining prompt compatibility across two different model families and distinct token limits.'
      },
      {
        decision: 'WhatsApp Human-in-the-Loop (HITL) 1-click mobile approval',
        reasoning: 'Forces human oversight via simple WhatsApp interactive actions (Approve, Regenerate, Cancel) before publishing to LinkedIn, eliminating hallucination risks.',
        tradeoff: 'Introduces a synchronous human bottleneck before posting, prioritizing content quality over blind speed.'
      },
      {
        decision: 'Session-isolated window buffer memories',
        reasoning: 'Maintains isolated conversation buffers per model to prevent state bleeding across the fallback boundary when primary models fail.',
        tradeoff: 'Slight increase in memory footprint within n8n static data storage.'
      }
    ],
    keyFeatures: [
      'Daily 9:15 AM scheduled trigger & WhatsApp webhook command router',
      'Real-time news enrichment via Google News RSS & live PSX market scrapers',
      'Stateful multi-user session tracking using n8n $getWorkflowStaticData',
      'Primary AI Agent: Gemini 3 Pro with structured system prompts',
      'Secondary Fallback Agent: Gemma 4 31B for uninterrupted execution',
      'Role-based approval permissions (Operators approve vs. Viewers preview)',
      '1-Click WhatsApp publish dispatch directly to LinkedIn REST API v2'
    ],
    techStack: [
      'n8n (Self-Hosted)',
      'Google Gemini 3 Pro',
      'Gemma 4 (31B)',
      'WhatsApp Business API',
      'LinkedIn API v2',
      'JavaScript (Node.js)',
      'RSS / HTML Scraper'
    ],
    outcomes: [
      {
        stat: '99.9%',
        label: 'Pipeline Reliability',
        description: 'Dual-model fallback prevented failure during third-party LLM API outages.'
      },
      {
        stat: '1-Click',
        label: 'Mobile Approval',
        description: 'Reduced content publishing workflow time from 45 mins to 15 seconds.'
      },
      {
        stat: 'Daily',
        label: 'Automated Cadence',
        description: 'Sustained continuous thought leadership publishing without manual effort.'
      }
    ]
  },
  {
    id: 'voting-system',
    slug: 'election-campaign-voter-management',
    title: 'Election Campaign & Voter Management System',
    subtitle: 'Polyglot Queue-Driven Ingestion Engine & Gemini AI OCR Subsystem',
    category: 'Polyglot Systems / Mass Data Ingestion',
    layerTag: 'Polyglot Systems',
    problem: 'Local election campaigns struggle to manage massive scanned PDF electoral rolls containing hundreds of thousands of voter records. Manual data extraction is slow, error-prone, and incapable of rapid field outreach or voter slip delivery.',
    architectureOverview: 'Polyglot architecture combining a Laravel 8 queue-driven core with a Python & Google Gemini AI batch OCR subsystem. Large electoral rolls upload via chunked queue workers (1000 records/batch). Python scripts (PyMuPDF) crop scanned PDF voter lists, upload snippets to GCS, and trigger Gemini Multimodal OCR for Urdu/English extraction, outputting normalized records into MySQL and generating bilingual voter slips (Parchi) with WhatsApp delivery.',
    diagramType: 'voting',
    decisions: [
      {
        decision: 'Asynchronous chunked queue ingestion (1000 records/batch)',
        reasoning: 'Leveraged Laravel Queue Workers with WithChunkReading & WithBatchInserts to process files with 100,000+ records without memory exhaustion or HTTP timeouts.',
        tradeoff: 'Requires background queue worker infrastructure and job monitoring dashboards.'
      },
      {
        decision: 'Faulty-record quarantine table instead of hard batch rejection',
        reasoning: 'Malformed or duplicate CNIC records isolate into a faulty_records review panel, preserving valid imports while enabling manual administrative correction.',
        tradeoff: 'Additional database tables and triage UI components to manage quarantined records.'
      },
      {
        decision: 'CNIC parity gender inference and standardization',
        reasoning: 'Automatically normalizes CNICs to 13 digits and infers gender (even = Female, odd = Male) to clean source electoral data on entry.',
        tradeoff: 'Edge-case handling required for non-standard administrative ID formats.'
      }
    ],
    keyFeatures: [
      'Chunked Excel & PDF Bulk Voter Ingestion (1000 records/batch)',
      'Python PyMuPDF & pdfplumber extraction pipeline for scanned rolls',
      'Google Gemini AI Batch Multimodal OCR for Urdu & English voter data',
      'Faulty Record Quarantine Panel for data audit & correction',
      'Bilingual (English/Urdu) Voter Slip (Parchi) PDF rendering with mPDF',
      'Direct WhatsApp Dispatch with automated phone number formatting (+92)',
      'Worker Activity Logging & Audit Trail to prevent bulk data scraping'
    ],
    techStack: [
      'PHP / Laravel 8',
      'Python 3.9 (PyMuPDF, pandas)',
      'Google Gemini AI API',
      'Google Cloud Storage',
      'MySQL',
      'mPDF',
      'WhatsApp API',
      'Tailwind CSS'
    ],
    outcomes: [
      {
        stat: '100k+',
        label: 'Records Ingested',
        description: 'Processed full city electoral rolls smoothly without server timeouts.'
      },
      {
        stat: '< 2s',
        label: 'Voter Slip Generation',
        description: 'Instant bilingual PDF voter parchi generation and WhatsApp share.'
      },
      {
        stat: '98%+',
        label: 'OCR Accuracy',
        description: 'Gemini AI multimodal OCR extracted Urdu voter names & addresses accurately.'
      }
    ]
  },
  {
    id: 'rec-website',
    slug: 'rec-corporate-website',
    title: 'REC Corporate Website (SEO & Performance Engineering)',
    subtitle: 'High-Availability Business Platform with 1st Page Google Rank',
    category: 'Product Ownership / Performance & SEO',
    layerTag: 'Cloud & SEO',
    problem: 'A leading structural engineering consultancy needed a high-authority digital presence to generate organic high-ticket B2B leads without relying on continuous paid ad spend.',
    architectureOverview: 'Engineered as a lightweight, modular PHP product deployed on high-availability Linux infrastructure. Features Cloudflare CDN edge caching for static assets, automated minification, preloading of critical Largest Contentful Paint (LCP) elements, and rich JSON-LD Schema.org structured data integrated with Google Analytics 4 (GA4) and Google Search Console.',
    diagramType: 'rec',
    decisions: [
      {
        decision: 'Structured data (Schema.org) & technical SEO investment upfront',
        reasoning: 'Engineered custom JSON-LD Organization and LocalBusiness schemas directly into head templates to establish search engine entity authority for high-intent keywords.',
        tradeoff: 'Required rigorous schema validation and canonical URL management across all service pages.'
      },
      {
        decision: 'Strict performance budget (asset minification & LCP preloading)',
        reasoning: 'Preloaded critical font fonts/images and deferred non-essential JavaScript to guarantee sub-second rendering for mobile and desktop clients.',
        tradeoff: 'Manual asset build pipelines required for style minification during development updates.'
      }
    ],
    keyFeatures: [
      '1st Page Google Organic Ranking for competitive regional structural engineering keywords',
      'Cloudflare Edge Caching with Brotli compression & global DDoS protection',
      '100% Mobile Responsive design across desktop, tablet, and mobile viewports',
      'Google Analytics 4 (GA4) event tracking & Search Console indexation',
      'JSON-LD Structured Data (Schema.org) for enriched search snippet cards',
      'Showcase of landmark engineering projects (RC, PT Structures, High-Rise Towers)'
    ],
    techStack: [
      'PHP 8.x',
      'HTML5 / Vanilla CSS',
      'Bootstrap 5.3',
      'Cloudflare CDN',
      'GA4 / Search Console',
      'JSON-LD Schema.org',
      'Linux / Nginx'
    ],
    outcomes: [
      {
        stat: '1st Page',
        label: 'Google Ranking',
        description: 'Achieved top search placement for high-intent structural engineering keywords.'
      },
      {
        stat: 'Sub-second',
        label: 'LCP Speed',
        description: 'Optimized critical rendering path and edge caching.'
      },
      {
        stat: 'B2B Leads',
        label: 'Organic Growth',
        description: 'Drove consistent inbound commercial lead generation without ad spend.'
      }
    ],
    liveUrl: 'https://resilient-ec.com/'
  }
];
