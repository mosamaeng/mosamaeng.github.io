export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  impactBullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  focus: string;
  location: string;
}

export const careerNarrative = {
  paragraph1: "Across 8+ years of engineering production systems, my trajectory has followed a natural progression: from shipping core product features, to refactoring high-traffic database bottlenecks, to taking complete ownership of infrastructure, microservices, and system architecture. I specialize in designing backends that don't just process requests—they remain resilient under heavy data loads, recover gracefully from API disruptions, and scale predictably across Linux-based cloud environments.",
  paragraph2: "What continuously drives my engineering focus is building resilient, self-healing systems and automation pipelines. Whether it's architecting a dual-model LLM fallback (Gemini → Gemma) to ensure zero workflow downtime during cloud outages, optimizing MySQL query execution plans to deliver a 40% performance boost, or hardening SSH-secured Linux servers behind AWS Security Groups — I operate at the intersection of infrastructure stability, data flow efficiency, and developer velocity.",
  paragraph3: "I embrace AI-assisted development as a force multiplier, not a crutch. Cursor IDE and Claude Code accelerate my architecture prototyping and code generation, while Gemini Code Assist and ChatGPT help me reason through complex system trade-offs. My workflow pairs these tools with deep hands-on Git discipline — feature branching, pull request reviews, and GitHub Actions CI/CD pipelines ensuring every deployment is tested, linted, and reproducible.",
  paragraph4: "Beyond enterprise engineering roles, I actively design and deploy end-to-end production platforms independently — from an Enterprise Management System (EMS) running geolocation-verified HR and payroll, to a polyglot mass electoral ingestion pipeline handling hundreds of thousands of records, to high-converting SEO infrastructure for engineering firms. Every project is containerized with Docker, version-controlled on GitHub, and deployed through automated pipelines on hardened Linux servers."
};

export const workExperiences: WorkExperience[] = [
  {
    company: "Next Generation Innovations",
    location: "Karachi, PK",
    role: "Sr. Engineer – Applications",
    period: "Jul 2025 – Present",
    isCurrent: true,
    impactBullets: [
      "Manage and optimize high-performance Nginx configurations for production LAMP stack applications serving enterprise-scale traffic.",
      "Orchestrate zero-downtime production deployments via SSH on hardened Linux servers, maintaining system reliability and uptime SLAs.",
      "Enforce security posture through AWS Security Group policies, SSH key-based authentication, and automated GitHub Actions CI/CD pipelines."
    ]
  },
  {
    company: "Get Licensed",
    location: "Karachi, PK",
    role: "Backend Engineer",
    period: "Dec 2024 – Jul 2025",
    impactBullets: [
      "Engineered Docker-based microservices architecture on Linux servers, improving system modularity and deployment speed.",
      "Optimized MySQL schemas and query execution plans, achieving a 40% boost in database query performance and system responsiveness.",
      "Established GitHub Actions CI/CD pipelines for automated testing, linting, and deployment workflows."
    ]
  },
  {
    company: "Shispare Pvt. Ltd.",
    location: "Karachi, PK",
    role: "Sr. Software Engineer",
    period: "Jun 2022 – Dec 2024",
    impactBullets: [
      "Architected Laravel/Vue.js ecosystems integrated with AWS microservices (EC2, S3, RDS) for global e-commerce platforms.",
      "Designed and implemented complex 3PL (third-party logistics) integrations serving international clients across multiple regions.",
      "Led backend architecture decisions, mentored junior engineers, and enforced code quality standards via Git PR review workflows."
    ]
  },
  {
    company: "E-Planet Communications",
    location: "Karachi, PK",
    role: "Software Engineer",
    period: "Sep 2021 – Jun 2022",
    impactBullets: [
      "Specialized in performance refactoring of high-traffic Laravel applications, reducing response times by profiling and resolving bottlenecks.",
      "Delivered new feature implementations aligned with product roadmap, collaborating closely with frontend and QA teams."
    ]
  },
  {
    company: "CIS Pvt. Ltd.",
    location: "Karachi, PK",
    role: "Software Engineer",
    period: "Jun 2020 – Aug 2021",
    impactBullets: [
      "Developed and maintained Laravel-based e-POS platforms with server-side deployment pipelines ensuring 99.9% transaction stability.",
      "Managed Linux server environments (Ubuntu) and implemented automated deployment scripts to reduce release cycle time."
    ]
  },
  {
    company: "DotKlick Pvt. Ltd.",
    location: "Karachi, PK",
    role: "Software Engineer",
    period: "Apr 2020 – Jun 2020",
    impactBullets: [
      "Rapidly developed an online school management system and digital library as a COVID-19 emergency response, delivering within weeks."
    ]
  },
  {
    company: "Symbiosis Technologies",
    location: "Karachi, PK",
    role: "Junior Software Engineer",
    period: "Mar 2018 – Mar 2020",
    impactBullets: [
      "Designed scalable cloud architectures and delivered high-quality web solutions across multiple client projects using modern development stacks.",
      "Gained foundational experience in PHP, MySQL, and Linux server management across diverse industry verticals."
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "MS in Software Project Management",
    institution: "FAST – National University of Computer & Emerging Sciences",
    period: "2020 – 2023",
    focus: "Advanced software lifecycle management, agile methodologies, scalable system architecture",
    location: "Karachi, PK"
  },
  {
    degree: "BS in Computer Engineering",
    institution: "Sir Syed University of Engineering & Technology",
    period: "2014 – 2017",
    focus: "Hardware-software integration, system design, computer science fundamentals",
    location: "Karachi, PK"
  }
];
