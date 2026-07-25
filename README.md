# Muhammad Osama — Senior Backend Engineer Portfolio
### Production Systems Architecture & Automated Workflows

This repository contains the source code for my professional portfolio website: **[https://mosamaeng.github.io](https://mosamaeng.github.io)**. 

The site is built as a high-performance, dark glassmorphic single-page application (SPA) focused on showcasing architectural diagrams, decision trade-offs, and system-layer skill organization rather than flat list items.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Vanilla CSS Design Tokens + Tailwind CSS
- **Theme**: Persistent Light/Dark theme context via HTML `data-theme`
- **SEO & Search Engines**: 
  - Dynamic route metadata handling inside `App.tsx` (title, descriptions)
  - Schema.org JSON-LD structured data (Person & EducationalOrganization)
  - Generated `sitemap.xml` & `robots.txt`
- **CI/CD Pipeline**: GitHub Actions auto-deployment to GitHub Pages (`gh-pages` branch) with `404.html` fallback.

---

## 📂 Project Structure

```bash
├── .github/workflows/   # Automated deployment CI/CD
├── public/              # Sitemap, robots.txt, and official Resume PDF
├── src/
│   ├── components/      # Glassmorphic panels, Navigation, & SVG Diagrams
│   ├── context/         # LocalStorage ThemeProvider
│   ├── data/            # Case studies, Skills taxonomy, & Work narratives
│   ├── pages/           # Route views (Home, Projects, Skills, About, Resume)
│   ├── index.css        # Cybernetic theme variables and custom animations
│   ├── App.tsx          # Router config and dynamic SEO managers
│   └── main.tsx         # App mount point
```

---

## ⚡ Local Setup

To run this project locally, execute the following commands:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production compilation
npm run build
```

---

## 🛡️ License

Private portfolio repository. All rights reserved.
