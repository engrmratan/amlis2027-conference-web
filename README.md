# AMLIS 2027 — Conference Web Application

Official website codebase for the **2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems (AMLIS 2027)**, taking place **02 – 04 June 2027** at the **International Convention Centre Sydney (ICC Sydney), Australia**.

---

## 📁 Project Directory Structure

```
├── src/
│   ├── assets/                # Visual conference images and media
│   │   └── images/            # High-resolution hero banners & venue photos
│   │
│   ├── components/            # Reusable UI components & layouts
│   │   ├── index.ts           # Central component barrel export
│   │   ├── Navbar.tsx         # Responsive top navigation & mobile drawer
│   │   ├── Footer.tsx         # Institutional footer & administrative links
│   │   ├── Logo.tsx           # Official IEEE AMLIS conference emblem
│   │   ├── PageHero.tsx       # Standardized page header banners
│   │   ├── AnnouncementBar.tsx# Sticky call-for-papers banner
│   │   ├── CtaBanner.tsx      # Dual-action paper submission ribbons
│   │   ├── Modals.tsx         # Template downloads & portal dialogs
│   │   ├── TrackIcon.tsx      # Dynamic track icon mapper
│   │   ├── AiNeuralAnimation.tsx # Interactive neural canvas animation
│   │   └── VenueMap.tsx       # Interactive Los Angeles venue location & map
│   │
│   ├── context/               # Global state, content data, types & security
│   │   ├── index.ts           # Central barrel export for context, data & types
│   │   ├── ConferenceContext.tsx # Central React Context + localStorage persistence
│   │   ├── initialData.ts     # Complete default dataset (dates, fees, tracks)
│   │   ├── websiteData.ts     # Master human-readable content documentation
│   │   ├── types.ts           # TypeScript domain interfaces (Track, Member, FAQ)
│   │   └── security.ts        # Input sanitization, safe URLs & prototype safety
│   │
│   ├── pages/                 # Full website page views
│   │   ├── index.ts           # Barrel export for all pages
│   │   ├── HomePage.tsx       # Main conference landing page (12 sections)
│   │   ├── AboutPage.tsx      # Scope, Sydney venue details & IEEE endorsement
│   │   ├── CallForPapersPage.tsx # Scientific tracks, topics & publication guide
│   │   ├── SubmissionPage.tsx # IEEE formatting instructions & review guidelines
│   │   ├── SubmitPaperPage.tsx # Direct paper draft verification & submission
│   │   ├── RegistrationPage.tsx # Attendee & author registration tiers & pricing
│   │   ├── CommitteePage.tsx  # General Chairs, TPC & Advisory boards
│   │   ├── ImportantDatesPage.tsx # Milestone deadlines & countdowns
│   │   ├── ProgramPage.tsx    # 3-day technical sessions & keynote schedules
│   │   ├── AcceptedPapersPage.tsx # Searchable directory of accepted manuscripts
│   │   ├── AwardsPage.tsx     # Best Paper & Student Paper awards
│   │   ├── SponsorsPage.tsx   # Corporate sponsors & partnership tiers
│   │   ├── InformationPage.tsx # Venue, Sydney transit, lodging, VISA & FAQs
│   │   └── ContactPage.tsx    # Official Secretariat inquiries & contact form
│   │
│   ├── App.tsx                # Master client router & page shell
│   ├── index.css              # Global styles & human row-grid layout classes
│   └── main.tsx               # React application entry point
│
├── index.html                 # HTML document template with SEO metadata
├── metadata.json              # Applet identity & platform configuration
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript compiler settings
└── vite.config.ts             # Vite build & bundler configuration
```

---

## ⚡ How to Edit Website Content in Code

All website content is centralized in plain TypeScript/JavaScript:

1. Open **`/src/context/initialData.ts`**.
2. Modify the straightforward configuration objects:
   - `INITIAL_CONFIG`: Title, dates, location, venue, announcement text, emails, and links.
   - `INITIAL_DATES`: Milestones, paper submission deadline, review notifications, and registration dates.
   - `INITIAL_TRACKS`: Technical research tracks, subtopics, and focus areas.
   - `INITIAL_COMMITTEE`: Chairs, Technical Program Committee (TPC) members, affiliations, and profiles.
   - `INITIAL_REGISTRATION_TIERS`: Author, student, and IEEE member registration fee tables.
   - `INITIAL_PROGRAM`: 3-day schedule, keynotes, technical oral presentation sessions, and room venues.
   - `INITIAL_AWARDS`: Best Paper, Student Paper awards, and prize descriptions.
   - `INITIAL_FAQS`: Frequently asked questions and answers.
3. Save the file — the changes will immediately reflect across all 14 conference pages!

---

## 🛠️ Development & Build Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server on port 3000 |
| `npm run build` | Compiles TypeScript and creates an optimized production bundle in `/dist` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) to verify correctness |

---

## 🎨 CSS & Layout System

The project uses a clean combination of **Tailwind CSS** utilities and human-authored layout classes in `/src/index.css`:
- `.row-layout`: Flexbox row wrapper with standard gap and wrapping.
- `.row-grid-2`, `.row-grid-3`, `.row-grid-4`: Standard responsive grid layouts.
- `.conference-section`: Standard section vertical padding and responsive constraints.
- `.table-institutional-wrapper`: Standard rounded, bordered institutional table container.
