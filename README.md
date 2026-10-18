# AMLIS 2027 — Conference Website

> **2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems**
> 📅 June 02–04, 2027 · 📍 Sydney, Australia

---

## Overview

This is the official website for **AMLIS 2027**, built as a modern, static React single-page application. No backend server or API keys are required to run this project.

**Tech Stack:**
- ⚛️ React 19 + TypeScript
- ⚡ Vite 8 (bundler & dev server)
- 🎨 Tailwind CSS v4
- 🔷 Lucide React (icons)
- 🎞️ Motion (animations)

---

## Project Structure

```
amlis-2027/
├── public/                  # Static public assets (favicon, etc.)
├── src/
│   ├── assets/              # Images and static media
│   │   └── images/          # Conference photos & logos
│   ├── components/          # Shared UI components
│   │   ├── AiNeuralAnimation.tsx  # Hero SVG animation
│   │   ├── AnnouncementBar.tsx    # Top announcement strip
│   │   ├── CtaBanner.tsx          # Call-to-action banner
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Logo.tsx               # AMLIS brand logo
│   │   ├── Modals.tsx             # Global modal dialogs
│   │   ├── Navbar.tsx             # Primary navigation
│   │   ├── PageHero.tsx           # Page hero header
│   │   └── TrackIcon.tsx          # Research track icon mapper
│   ├── context/
│   │   └── ConferenceContext.tsx  # Global state (React Context + localStorage)
│   ├── data/
│   │   └── initialData.ts         # Seed data for all conference sections
│   ├── pages/               # Route-level page components
│   │   ├── AboutPage.tsx
│   │   ├── AcceptedPapersPage.tsx
│   │   ├── AwardsPage.tsx
│   │   ├── CallForPapersPage.tsx
│   │   ├── CommitteePage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ImportantDatesPage.tsx
│   │   ├── InformationPage.tsx
│   │   ├── ProgramPage.tsx
│   │   ├── RegistrationPage.tsx
│   │   ├── SponsorsPage.tsx
│   │   ├── SubmissionPage.tsx
│   │   └── SubmitPaperPage.tsx
│   ├── types/
│   │   └── conference.ts    # TypeScript interfaces & type definitions
│   ├── utils/
│   │   └── security.ts      # Input sanitization & validation helpers
│   ├── App.tsx              # Root app component & client-side router
│   ├── index.css            # Global styles & Tailwind directives
│   └── main.tsx             # React DOM entry point
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project manifest & scripts
```

---

## Getting Started

### Prerequisites
- **Node.js** v18 or later
- **npm** v8 or later

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

The site will open at **http://localhost:3000**.

### Build for Production

```bash
npm run build
```

Output is placed in the `dist/` directory. Deploy it to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, key dates, tracks, committee preview |
| `/about` | About — Conference overview, scope, governance |
| `/call-for-papers` | Tracks, topics, paper types & guidelines |
| `/submission` | Submission guide, IEEE template, FAQs |
| `/submit-paper` | Paper formatting requirements |
| `/important-dates` | Timeline & deadline tracker |
| `/registration` | Registration categories & fee structure |
| `/committee` | General chairs, TPC, organizing committee |
| `/program` | Conference program schedule by day |
| `/accepted-papers` | Accepted paper directory |
| `/awards` | Best paper, student, and presentation awards |
| `/sponsors` | Conference sponsors & supporting partners |
| `/information` | Venue, travel, accommodation, visa info |
| `/contact` | Contact form & secretariat information |

---

## State Management

All conference data is managed via **React Context** (`ConferenceContext`) and persisted to **localStorage**. The initial seed data lives in `src/data/initialData.ts` — edit this file to update conference content.
