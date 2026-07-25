export interface SkillGroup {
  layerName: string;
  layerDescription: string;
  accentColor: 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose' | 'sky' | 'lime';
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    layerName: 'Infrastructure & DevOps',
    layerDescription: 'Production application delivery, containerization, server hardening, and cloud orchestration on Linux.',
    accentColor: 'cyan',
    skills: [
      { name: 'Docker & Docker Compose', highlight: true },
      { name: 'Nginx (High-Traffic Tuning)', highlight: true },
      { name: 'AWS (EC2, S3, RDS)', highlight: true },
      { name: 'Linux Server Administration', highlight: true },
      { name: 'SSH Key Management & Security Groups', highlight: true },
      { name: 'CI/CD — GitHub Actions Pipelines', highlight: true },
      { name: 'Zero-Downtime Deployments' },
      { name: 'Cloudflare CDN & Edge Caching' }
    ]
  },
  {
    layerName: 'Backend & Architecture',
    layerDescription: 'Enterprise backend frameworks, microservices, stateless REST APIs, and authentication systems.',
    accentColor: 'violet',
    skills: [
      { name: 'PHP / Laravel Ecosystem', highlight: true },
      { name: 'Node.js / Express / NestJS', highlight: true },
      { name: 'Microservices Architecture', highlight: true },
      { name: 'Stateless REST API Design', highlight: true },
      { name: 'RBAC & Module-Level Auth', highlight: true },
      { name: 'Go (Golang)' }
    ]
  },
  {
    layerName: 'Data & Storage',
    layerDescription: 'Relational schema design, index tuning, query plan optimization, ORM abstractions, and queue processing.',
    accentColor: 'emerald',
    skills: [
      { name: 'MySQL (Query Tuning — 40% boost)', highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'Sequelize ORM & Migrations', highlight: true },
      { name: 'Redis Caching' },
      { name: 'Queue & Batch Processing', highlight: true }
    ]
  },
  {
    layerName: 'AI & Automation',
    layerDescription: 'Stateful workflow automation, multi-user agentic routing, LLM API integration, and batch OCR pipelines.',
    accentColor: 'amber',
    skills: [
      { name: 'n8n (Self-Hosted Workflows)', highlight: true },
      { name: 'Google Gemini & OpenAI APIs', highlight: true },
      { name: 'Dual-Model Fallback Design', highlight: true },
      { name: 'Python (PyMuPDF, pandas)', highlight: true },
      { name: 'WhatsApp Business API HITL', highlight: true }
    ]
  },
  {
    layerName: 'AI-Assisted Development & Tooling',
    layerDescription: 'Leveraging AI-native IDEs and code assistants to accelerate architecture, debugging, and code generation.',
    accentColor: 'rose',
    skills: [
      { name: 'Cursor IDE (Primary Editor)', highlight: true },
      { name: 'Claude Code (Anthropic)', highlight: true },
      { name: 'Google Gemini Code Assist', highlight: true },
      { name: 'ChatGPT / Claude for Architecture', highlight: true },
      { name: 'Postman (API Testing & Docs)', highlight: true }
    ]
  },
  {
    layerName: 'Server, Security & OS',
    layerDescription: 'Production Linux environments, SSH hardening, AWS security groups, firewall rules, and server provisioning.',
    accentColor: 'sky',
    skills: [
      { name: 'Linux (Ubuntu / Debian — Primary OS)', highlight: true },
      { name: 'SSH Key-Based Auth & Agent Forwarding', highlight: true },
      { name: 'AWS Security Groups & IAM Policies', highlight: true },
      { name: 'UFW / iptables Firewall Management', highlight: true },
      { name: 'SSL/TLS Certificate Management' },
      { name: 'Server Provisioning & Hardening' }
    ]
  },
  {
    layerName: 'Frontend & Integration',
    layerDescription: 'Modern component-driven web interfaces, state management, and API client integration.',
    accentColor: 'lime',
    skills: [
      { name: 'React 19 / Vite', highlight: true },
      { name: 'Vue.js', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Leaflet Maps & Geolocation', highlight: true },
      { name: 'Git & GitHub Workflows', highlight: true },
      { name: 'Vanilla CSS / Design Systems' }
    ]
  }
];
