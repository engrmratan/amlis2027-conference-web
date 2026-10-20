import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Users,
  Globe,
  Sparkles,
  ShieldCheck,
  FileText,
  FileCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Trophy,
  GraduationCap,
  Star,
  ExternalLink,
  Layers,
  Clock,
  ArrowUpRight,
  Download,
  Search,
  Award,
  Building2,
  Microscope,
  Check,
  Ticket,
  Store,
  Mic,
  Quote,
  Train,
  Plane,
  Hotel,
  Navigation,
  Compass
} from 'lucide-react';
import { useConference } from '../context';
import { TrackIcon, CtaBanner, VenueMap } from '../components';
import sydneyVenueImg from '../assets/images/sydney_icc_venue_1792520944491.jpg';
import conferenceHallImg from '../assets/images/conference_hall_overview_1791972827328.jpg';
import conferenceMicImg from '../assets/images/conference_microphone_closeup_1791977765516.jpg';
import researchWorkspaceImg from '../assets/images/research_laptop_workspace_1791972828276.jpg';
import speakerSarahImg from '../assets/images/committee_sarah_johnson_1791972866215.jpg';
import speakerMichaelImg from '../assets/images/committee_michael_chen_1791972866604.jpg';
import speakerEmilyImg from '../assets/images/committee_emily_davis_1791972867145.jpg';
import speakerJohnImg from '../assets/images/committee_john_smith_1791972866685.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { config, tracks, committee, awards, sponsors, setActiveModal } = useConference();
  const [committeeIndex, setCommitteeIndex] = useState(0);

  const [countdown, setCountdown] = useState({
    days: 263,
    hours: 12,
    minutes: 34,
    seconds: 9
  });

  // Real-time conference countdown timer towards 11 July 2027
  useEffect(() => {
    const targetDate = new Date('2027-07-11T09:00:00+10:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const nextCommittee = () => {
    setCommitteeIndex((prev) => (prev + 1) % Math.max(1, committee.length - 3));
  };

  const prevCommittee = () => {
    setCommitteeIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // 6 Milestones matching the exact design and copy from the screenshot
  const keyMilestones = [
    {
      num: '01',
      title: 'Paper Submission',
      desc: 'Closing date for paper submission',
      date: '31 December 2026',
      dateColor: 'text-red-600',
      isActive: true
    },
    {
      num: '02',
      title: 'Review',
      desc: 'Full paper review report to author',
      date: '28 February 2027',
      dateColor: 'text-blue-600',
      isActive: false
    },
    {
      num: '03',
      title: 'Early Bird Opens',
      desc: 'Early bird registration opens',
      date: '28 February 2027',
      dateColor: 'text-blue-600',
      isActive: false
    },
    {
      num: '04',
      title: 'Camera Ready',
      desc: 'Final paper — camera-ready copy',
      date: '15 April 2027',
      dateColor: 'text-blue-600',
      isActive: false
    },
    {
      num: '05',
      title: 'Early Bird Closes',
      desc: 'Early bird registration closes',
      date: '15 April 2027',
      dateColor: 'text-blue-600',
      isActive: false
    },
    {
      num: '06',
      title: 'Final Registration',
      desc: 'Registration closes',
      date: '30 April 2027',
      dateColor: 'text-blue-600',
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* =========================================================
          1. HERO SECTION (DEEP DARK NAVY: #07153b)
          Authoritative academic command center with interactive neural visualizer
      ========================================================= */}
      {/* =========================================================
          1. HERO SECTION (DEEP DARK NAVY: #07153b)
          Showcases the uploaded glowing neural synaptic brain centerpiece
      ========================================================= */}
      <section id="section-hero" className="section-hero conference-section conference-section-dark relative overflow-hidden bg-[#07153b] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-blue-950/60">
        {/* Subtle architectural cyber grid and ambient neural lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[320px] sm:w-[480px] lg:w-[600px] h-[320px] sm:h-[480px] lg:h-[600px] rounded-full bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute -top-24 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-[1110px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Authoritative Title, Thesis, Metadata, CTAs & Deadline */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Kicker prefix matching screenshot: Red dash + tracking badge */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase font-mono">
                  {config.acronym} 2027 · {config.city.toUpperCase()}, {config.country.toUpperCase()}
                </span>
              </div>

              {/* Main Headline with high-impact academic scale */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.16] [text-wrap:balance]">
                2027 IEEE International Conference on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-white font-extrabold">
                  Future Machine Learning
                </span>{' '}
                and Intelligent Systems
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl pt-1">
                Join researchers, academics and industry leaders shaping the next generation of machine learning, artificial intelligence and data science.
              </p>

              {/* Date & Location inline row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs sm:text-sm text-slate-200 font-normal">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{config.datesText}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{config.venueText}</span>
                </div>
              </div>

              {/* CTAs matching screenshot */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal('submissionPortal')}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer whitespace-nowrap group"
                >
                  <span>Submit Paper</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/call-for-papers')}
                  className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm"
                >
                  <span>View Research Tracks</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal('template')}
                  className="text-xs sm:text-sm font-medium text-cyan-300 hover:text-cyan-200 underline underline-offset-4 cursor-pointer px-1 py-2 transition-colors whitespace-nowrap"
                >
                  IEEE Template
                </button>
              </div>

              {/* Bottom Micro Status Line matching screenshot */}
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-2 font-normal">
                <span>Deadline <strong className="text-white font-semibold">31 December 2026</strong></span>
                <span className="text-slate-600">·</span>
                <span>Proceedings submitted to <strong className="text-slate-200 font-medium">IEEE Xplore</strong></span>
              </div>
            </div>

            {/* Right Column: Hero Showcase Card with Sydney ICC Venue and Live Countdown (Matches Screenshot) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900/90 aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[500px] flex flex-col justify-between p-6 sm:p-7 group">
                {/* Background Image: Aerial view of ICC Sydney & Darling Harbour */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={sydneyVenueImg}
                    alt="International Convention Centre Sydney (ICC Sydney) and Darling Harbour"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />
                  {/* Cinematic dark gradient overlay matching screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07153b] via-[#07153b]/60 to-[#07153b]/30" />
                </div>

                {/* Top Overlay: Metric Badge (Matching screenshot) */}
                <div className="relative z-10 flex items-start justify-end">
                  <div className="px-3.5 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-right shadow-lg">
                    <span className="text-xl sm:text-2xl font-black text-white leading-none block">
                      4
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-slate-300 uppercase block mt-0.5">
                      CONFERENCE DAYS
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Content: Tracks, Host line, and Live Countdown Timer */}
                <div className="relative z-10 space-y-3 sm:space-y-4 pt-12">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase block mb-1">
                      ML · AI · DATA SCIENCE · INTELLIGENT SYSTEMS
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                      Hosted by IEEE NSW Section & GCSTMR, Sydney.
                    </h3>
                  </div>

                  {/* 4 Live Countdown Blocks (Matching screenshot) */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-2.5 pt-1">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center shadow-lg">
                      <span className="text-lg sm:text-2xl font-black text-white tracking-tight leading-none block font-mono">
                        {countdown.days}
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                        DAYS
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center shadow-lg">
                      <span className="text-lg sm:text-2xl font-black text-white tracking-tight leading-none block font-mono">
                        {String(countdown.hours).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                        HOURS
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center shadow-lg">
                      <span className="text-lg sm:text-2xl font-black text-white tracking-tight leading-none block font-mono">
                        {String(countdown.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                        MIN
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-center shadow-lg">
                      <span className="text-lg sm:text-2xl font-black text-cyan-400 tracking-tight leading-none block font-mono">
                        {String(countdown.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-[9px] font-mono font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                        SEC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HERO QUICK ACTION BAR (MATCHES SCREENSHOT & SITE DESIGN)
          4-column ribbon with Paper Submission, Program, Registration, Booth Registration
      ========================================================= */}
      <section id="section-hero-quick-actions" className="section-hero-quick-actions relative z-30 -mt-7 sm:-mt-9 lg:-mt-12 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/90 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* 1. Paper Submission */}
            <div
              onClick={() => onNavigate('/submission')}
              className="p-5 sm:p-6 flex items-center gap-4 text-left hover:bg-slate-50/80 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-2xs">
                <FileText className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  Paper Submission
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal leading-snug">
                  Guidelines and the submission link.
                </p>
              </div>
            </div>

            {/* 2. Tentative Program */}
            <div
              onClick={() => onNavigate('/program')}
              className="p-5 sm:p-6 flex items-center gap-4 text-left hover:bg-slate-50/80 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-2xs">
                <Clock className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  Tentative Program
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal leading-snug">
                  Sessions, keynotes and schedule.
                </p>
              </div>
            </div>

            {/* 3. Registration */}
            <div
              onClick={() => onNavigate('/registration')}
              className="p-5 sm:p-6 flex items-center gap-4 text-left hover:bg-slate-50/80 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-2xs">
                <Ticket className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  Registration
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal leading-snug">
                  Fees and how to register.
                </p>
              </div>
            </div>

            {/* 4. Booth Registration */}
            <div
              onClick={() => onNavigate('/sponsors')}
              className="p-5 sm:p-6 flex items-center gap-4 text-left hover:bg-slate-50/80 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center shrink-0 border border-blue-100/60 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-200 shadow-2xs">
                <Store className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  Booth Registration
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-normal leading-snug">
                  Exhibit at AMLIS2027.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CONFERENCE MANAGEMENT & PROPOSED AFFILIATION (LIGHT)
          Clean institutional trust cards
      ========================================================= */}
      <section id="section-management-affiliation" className="section-management-affiliation conference-section conference-section-slate py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Institutional Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Conference Management & Proposed Affiliation
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm md:text-right font-normal">
              Operating under strict international scientific rigor and academic ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: GCSTMR */}
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-5 sm:gap-6 hover:shadow-md hover:border-blue-200 transition-all text-left">
              <div className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 p-2 flex flex-col items-center justify-center shrink-0 shadow-2xs">
                <img
                  src="/src/assets/images/gcstmr.png"
                  alt="GCSTMR Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-[7.5px] font-black tracking-tighter text-slate-700 mt-0.5">
                  GCSTMR
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                  Official Conference Management
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#07153b] tracking-tight">
                  GCSTMR
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  Global Circle for Scientific, Technological and Management Research
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Sydney, Australia</span>
                  <span aria-hidden="true">·</span>
                  <span>Primary Secretariat</span>
                </div>
              </div>
            </div>

            {/* Card 2: IEEE NSW Section (Proposed) */}
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-5 sm:gap-6 relative hover:shadow-md hover:border-blue-200 transition-all text-left">
              <div className="w-14 h-14 rounded-xl bg-[#00629b] text-white font-extrabold text-sm flex flex-col items-center justify-center shrink-0 shadow-xs tracking-wider">
                <span>IEEE</span>
                <span className="text-[7.5px] font-medium opacity-80">NSW</span>
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                    Proposed Technical Affiliation
                  </span>
                  <span className="text-[9.5px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
                    PROPOSED
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#07153b] tracking-tight">
                  IEEE NSW Section
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  Proposed technical and professional affiliation for conference proceedings and technical evaluation.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Australia</span>
                  <span aria-hidden="true">·</span>
                  <span>IEEE Region 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. KEY DATES & TIMELINE (LIGHT)
          Milestone timeline with high-clarity status
      ========================================================= */}
      <section id="section-important-dates" className="section-important-dates conference-section conference-section-light py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 text-left">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Deadlines & Milestones
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Important Dates
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 max-w-sm sm:text-right font-normal">
              Strict deadlines apply. All deadlines are 23:59 AoE (Anywhere on Earth).
            </p>
          </div>

          {/* Timeline Container */}
          <div className="overflow-x-auto pb-6 scrollbar-none mb-5">
            <div className="min-w-[780px] relative text-left">
              {/* 6 Milestone Columns */}
              <div className="grid grid-cols-6 gap-6 relative">
                {keyMilestones.map((item, idx) => (
                  <div key={item.title} className="flex flex-col text-left relative">
                    {/* Node on the line: height 24px (h-6) with line passing through exact vertical and horizontal center */}
                    <div className="relative h-6 flex items-center">
                      {/* Connecting Line Segment to next circle point */}
                      {idx < keyMilestones.length - 1 && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[calc(100%+24px)] h-[1.5px] bg-slate-200 z-0">
                          {idx === 0 && (
                            /* Active progress highlight */
                            <div className="h-full w-2/5 bg-red-500" />
                          )}
                        </div>
                      )}

                      {/* Circle Point Node (center at x=12px / left-3, y=12px / 50%) */}
                      <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                        {item.isActive ? (
                          <div className="w-5.5 h-5.5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full border-[1.5px] border-red-500 bg-white flex items-center justify-center shadow-xs">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            </div>
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-slate-300 bg-white flex items-center justify-center shadow-2xs">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Title (a little smaller) */}
                    <h3 className="text-xs sm:text-[12.5px] font-bold text-slate-900 mt-2.5 leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    {/* Description (a little smaller) */}
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-1 leading-normal font-normal min-h-[28px]">
                      {item.desc}
                    </p>

                    {/* Date (a little smaller, Red for item 1, Blue for items 2-6) */}
                    <p className={`text-[11.5px] sm:text-xs font-bold mt-3 sm:mt-4 tracking-tight ${item.dateColor}`}>
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Paper Submission Deadline: 31 December 2026
                </h4>
                <p className="text-[11px] text-slate-500">
                  Prepare your manuscript using standard IEEE two-column formatting.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setActiveModal('template')}
                className="px-3.5 py-1.5 text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                IEEE Template
              </button>
              <button
                onClick={() => setActiveModal('submissionPortal')}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                <span>Submit Manuscript</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. RESEARCH TRACKS (LIGHT)
          Eight scientific research disciplines
      ========================================================= */}
      <section id="section-research-tracks" className="section-research-tracks conference-section conference-section-slate py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
            <div>
              <span className="text-[10.5px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Thematic Scope
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Eight Research Tracks
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Explore the key thematic disciplines and topics covered in AMLIS 2027.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/call-for-papers')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer shrink-0"
            >
              <span>View Full Call for Papers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {tracks.map((track, idx) => (
              <div
                key={track.id}
                onClick={() => onNavigate('/call-for-papers')}
                className="group p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${track.colorClass}`}>
                      <TrackIcon name={track.iconName} className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5 leading-snug">
                    {track.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal mb-2.5">
                    {track.description}
                  </p>
                  {/* Topics preview */}
                  <ul className="space-y-1 mb-3 text-[10.5px] text-slate-500">
                    {track.topics.slice(0, 2).map((t, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                        <span className="truncate">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-blue-600">
                  <span>Explore topics</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. CONFERENCE OVERVIEW & IMMERSION (DEEP DARK NAVY: #07153b)
          Real conference hall & microphone photography showcasing 3 Days of Science
      ========================================================= */}
      <section id="section-conference-overview" className="section-conference-info conference-section conference-section-dark py-14 sm:py-18 bg-[#07153b] text-white border-b border-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="mb-10">
            <span className="text-[10.5px] font-bold tracking-widest text-[#00b4d8] uppercase block mb-1">
              Conference Experience
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-[1.2] [text-wrap:balance]">
              Three Days of Intensive Scientific Discovery in Sydney
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed mt-2.5 max-w-2xl">
              From keynote addresses delivered by internationally renowned luminaries to technical sessions spanning all facets of intelligent systems, AMLIS 2027 provides an unparalleled venue for academic collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Dual Visual: Main Hall + Lectern Microphone Inset */}
            <div className="lg:col-span-5 relative">
              {/* Primary Hall Photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-2xl border border-white/10">
                <img
                  src={conferenceHallImg}
                  alt="AMLIS 2027 Plenary Hall Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                  <p className="font-semibold text-white">Sydney Plenary Hall</p>
                  <p className="text-[11px] text-slate-300">Audience of over 450+ delegates and researchers</p>
                </div>
              </div>

              {/* Overlapping Keynote Microphone Inset */}
              <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-44 sm:w-52 aspect-[4/3] rounded-2xl overflow-hidden border-4 border-[#07153b] shadow-2xl bg-slate-900">
                <img
                  src={conferenceMicImg}
                  alt="Keynote Lectern Microphone"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-5 left-4 p-4 px-6 rounded-2xl bg-white border border-slate-100 shadow-2xl text-left">
                <span className="text-3xl font-extrabold text-blue-600 block leading-none">3</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mt-1.5">
                  Days of Science
                </span>
              </div>
            </div>

            {/* Right: 4 Pillar Highlights */}
            <div className="lg:col-span-7 space-y-4 pt-4 lg:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">Global Participation</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Delegates from across 30+ nations bringing multifaceted perspectives.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">High-Impact Keynotes</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Distinguished lectures on frontier AI, foundational models, and robotics.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">Industry & Academia</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Dynamic exchange linking university laboratories with industrial AI research.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-3">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">Sydney Venue</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Hosted at premier convention facilities with modern academic exhibition halls.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/program')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-cyan-200 cursor-pointer"
                >
                  <span>Explore Three-Day Program Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. REVIEW OF PAPERS & CONFERENCE PROCEEDINGS (MATCHES SCREENSHOT)
          Side-by-side dual card layout: Review of Papers & Conference Proceedings
      ========================================================= */}
      <section id="section-review-and-proceedings" className="section-review-and-proceedings conference-section py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch text-left">
            {/* Left Card: Review of Papers (Light Theme) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 lg:p-10 shadow-xs flex flex-col justify-between">
              <div>
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase font-mono">
                    REVIEW OF PAPERS
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#07153b] tracking-tight leading-tight">
                  Rigorous independent review.
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                  Submissions may be a 4-6 page regular paper or a 1-page abstract. Every paper is reviewed by at least two independent referees.
                </p>

                {/* 3 Steps Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-7 sm:my-8">
                  {/* Step 01 */}
                  <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center mb-4 border border-blue-100/60 shadow-2xs">
                        <FileText className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-400 mb-1 block">01</span>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5">
                        Paper submission
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                        Authors submit full papers or abstracts through the official portal.
                      </p>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center mb-4 border border-blue-100/60 shadow-2xs">
                        <Users className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-400 mb-1 block">02</span>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5">
                        Independent review
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                        Each paper is refereed by at least two independent reviewers.
                      </p>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#ebf3fe] text-[#2563eb] flex items-center justify-center mb-4 border border-blue-100/60 shadow-2xs">
                        <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-400 mb-1 block">03</span>
                      <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1.5">
                        Decision and feedback
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                        Authors receive review reports and the final decision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Pill Badge */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ebf3fe] border border-blue-100 text-[#2563eb] text-xs font-semibold self-start shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0" />
                  <span>Minimum two reviewers per submission</span>
                </div>
              </div>
            </div>

            {/* Right Card: Conference Proceedings (Dark Theme) */}
            <div className="lg:col-span-5 bg-[#07153b] rounded-3xl border border-blue-900/60 p-7 sm:p-9 lg:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase font-mono">
                    CONFERENCE PROCEEDINGS
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight leading-tight">
                  Research prepared for global visibility.
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed font-normal">
                  Accepted, registered and presented papers will be submitted to the conference proceedings by IEEE Xplore.
                </p>

                {/* Bullet Points with Cyan Dots */}
                <div className="space-y-4 my-8 text-xs sm:text-sm text-slate-200 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8] shrink-0 shadow-sm shadow-cyan-400/50" />
                    <span>IEEE conference proceedings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8] shrink-0 shadow-sm shadow-cyan-400/50" />
                    <span>Global researcher discoverability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00b4d8] shrink-0 shadow-sm shadow-cyan-400/50" />
                    <span>International research visibility</span>
                  </div>
                </div>
              </div>

              {/* Bottom Disclaimer */}
              <div className="relative z-10 pt-4 border-t border-slate-800/80">
                <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
                  Publication remains subject to IEEE's own evaluation and approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. KEYNOTE HIGHLIGHTS GRID SECTION (BELOW REVIEW OF PAPERS)
          Featuring Profile Cards for Invited Speakers with Photos, Names, and Talk Titles
      ========================================================= */}
      <section id="section-keynote-highlights" className="section-keynote-highlights conference-section conference-section-light py-18 sm:py-22 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase font-mono">
                  INVITED PLENARY SPEAKERS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#07153b] tracking-tight">
                Keynote Highlights
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl font-normal leading-relaxed">
                Distinguished international authorities and academic pioneers delivering plenary vision addresses at AMLIS 2027.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/program')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-slate-50 text-slate-700 hover:text-blue-600 text-xs font-semibold transition-all cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>View Full Program Schedule</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4-Column Keynote Speaker Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Speaker Photo with Session Badge */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={speakerSarahImg}
                    alt="Prof. Dr. Sarah Johnson"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Session Badge */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-white/10 uppercase tracking-wider">
                    <Mic className="w-3 h-3 text-cyan-400" />
                    <span>Keynote I · Day 1</span>
                  </div>

                  {/* Topic Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[10px] font-mono text-cyan-200 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded tracking-wide uppercase">
                      Generative AI & LLMs
                    </span>
                  </div>
                </div>

                {/* Speaker Identity & Affiliation */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      Prof. Dr. Sarah Johnson
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      Stanford University, USA
                    </p>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Chair of Data Intelligence & Machine Learning
                    </p>
                  </div>

                  {/* Talk Title & Overview */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-600 text-[10.5px] font-bold uppercase tracking-wider">
                      <Quote className="w-3 h-3 text-blue-500 shrink-0" />
                      <span>Keynote Talk Title</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      "The Next Frontier: Multimodal Foundation Architectures & Generative AI"
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                      Architectural scaling laws, cross-modal latent alignment, and reasoning boundaries in foundation models.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button
                  type="button"
                  onClick={() => onNavigate('/program')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Session Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Speaker Photo with Session Badge */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={speakerMichaelImg}
                    alt="Prof. Dr. Michael Chen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Session Badge */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-white/10 uppercase tracking-wider">
                    <Mic className="w-3 h-3 text-cyan-400" />
                    <span>Keynote II · Day 2</span>
                  </div>

                  {/* Topic Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[10px] font-mono text-cyan-200 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded tracking-wide uppercase">
                      Intelligent Systems & Robotics
                    </span>
                  </div>
                </div>

                {/* Speaker Identity & Affiliation */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      Prof. Dr. Michael Chen
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      Tsinghua University, China
                    </p>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Professor of Intelligent Automation & Control
                    </p>
                  </div>

                  {/* Talk Title & Overview */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-600 text-[10.5px] font-bold uppercase tracking-wider">
                      <Quote className="w-3 h-3 text-blue-500 shrink-0" />
                      <span>Keynote Talk Title</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      "Autonomous Neuro-Symbolic Agents in Dynamic Physical Environments"
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                      Coupling reinforcement learning with formal symbolic verification to guarantee safety in autonomous robotics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button
                  type="button"
                  onClick={() => onNavigate('/program')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Session Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Speaker Photo with Session Badge */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={speakerEmilyImg}
                    alt="Prof. Dr. Emily Davis"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Session Badge */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-white/10 uppercase tracking-wider">
                    <Mic className="w-3 h-3 text-cyan-400" />
                    <span>Keynote III · Day 2</span>
                  </div>

                  {/* Topic Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[10px] font-mono text-cyan-200 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded tracking-wide uppercase">
                      Trustworthy & Explainable AI
                    </span>
                  </div>
                </div>

                {/* Speaker Identity & Affiliation */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      Prof. Dr. Emily Davis
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      MIT, Cambridge, USA
                    </p>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Professor of Electrical Engineering & CS
                    </p>
                  </div>

                  {/* Talk Title & Overview */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-600 text-[10.5px] font-bold uppercase tracking-wider">
                      <Quote className="w-3 h-3 text-blue-500 shrink-0" />
                      <span>Keynote Talk Title</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      "Provable Fairness, Interpretability & Trust in High-Stakes AI"
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                      Mathematical auditing algorithms and causal explainability methods for clinical healthcare and finance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button
                  type="button"
                  onClick={() => onNavigate('/program')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Session Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Speaker Photo with Session Badge */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={speakerJohnImg}
                    alt="Prof. Dr. John Smith"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Session Badge */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-white/10 uppercase tracking-wider">
                    <Mic className="w-3 h-3 text-cyan-400" />
                    <span>Keynote IV · Day 3</span>
                  </div>

                  {/* Topic Tag */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <span className="text-[10px] font-mono text-cyan-200 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded tracking-wide uppercase">
                      Deep Learning Optimization
                    </span>
                  </div>
                </div>

                {/* Speaker Identity & Affiliation */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      Prof. Dr. John Smith
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      University of California, Berkeley
                    </p>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Professor of Computer Science & AI Systems
                    </p>
                  </div>

                  {/* Talk Title & Overview */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-blue-600 text-[10.5px] font-bold uppercase tracking-wider">
                      <Quote className="w-3 h-3 text-blue-500 shrink-0" />
                      <span>Keynote Talk Title</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      "Scalable Distributed Machine Learning on Next-Gen Accelerators"
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal pt-1">
                      Overcoming memory wall constraints and communication bottlenecks across heterogeneous parallel clusters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <button
                  type="button"
                  onClick={() => onNavigate('/program')}
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Session Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. SUBMISSION PROCESS & AUTHOR ROADMAP (LIGHT)
          Featuring Author Workspace Photography
      ========================================================= */}
      <section id="section-submission-process" className="section-submission-process conference-section conference-section-slate py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            {/* Left: 4-Step Author Roadmap */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[10.5px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Author Pathway
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                  How to Submit Your Manuscript
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Follow these four steps to prepare and upload your contribution to AMLIS 2027.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Step 1 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 01</span>
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Format Manuscript</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Use standard IEEE two-column template (LaTeX or Word) up to 6–8 pages.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 02</span>
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Anonymize PDF</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Remove author names, emails, and institutional affiliations for blind review.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 03</span>
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Submit via Portal</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Upload your PDF and enter title, abstract, and keywords into the portal.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 04</span>
                  <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Camera-Ready & Reg</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Address reviewer comments, submit camera-ready copy, and register.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => setActiveModal('template')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download IEEE Template</span>
                </button>
                <button
                  onClick={() => setActiveModal('submissionPortal')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <span>Open Submission Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Right: Author Workspace Photography */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 shadow-md">
                <img
                  src={researchWorkspaceImg}
                  alt="Author Research Workspace and IEEE Template Preparation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3.5 mt-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-900 block">Template Compliance</span>
                LaTeX & Microsoft Word templates pre-configured with IEEE styling and reference formats.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          9. COMMITTEE LEADERSHIP (LIGHT)
          International academic chairs and scholars
      ========================================================= */}
      <section id="section-committee-showcase" className="section-committee-showcase conference-section conference-section-light py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-[10.5px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Conference Leadership
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Organizing & Technical Committee
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Distinguished researchers and leaders guiding the scientific direction of AMLIS 2027.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={prevCommittee}
                aria-label="Previous committee member"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCommittee}
                aria-label="Next committee member"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 shadow-2xs transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-8">
            {committee.slice(committeeIndex, committeeIndex + 4).map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0 border border-slate-200"
                />
                <div className="overflow-hidden">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-medium text-blue-600 truncate mt-0.5">
                    {member.position}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {member.affiliation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('/committee')}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>View Full Committee & Editorial Board</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          10. AWARDS & ACADEMIC RECOGNITION (PRESTIGE DARK: #061230)
          Honoring research breakthroughs with elite prestige
      ========================================================= */}
      <section id="section-conference-awards" className="section-conference-awards conference-section conference-section-dark py-18 sm:py-22 bg-[#061230] text-white border-b border-blue-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10.5px] font-bold tracking-widest text-amber-400 uppercase block mb-1">
                Academic Honors
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                Recognizing Research Excellence
              </h2>
            </div>
            <p className="text-xs text-slate-300 max-w-sm md:text-right font-normal">
              Bestowed by the Technical Program Committee to celebrate seminal contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 text-left">
            {awards.map((award) => {
              const renderAwardIcon = () => {
                switch (award.iconName) {
                  case 'Trophy':
                    return <Trophy className="w-4 h-4 text-amber-400" />;
                  case 'GraduationCap':
                    return <GraduationCap className="w-4 h-4 text-cyan-400" />;
                  case 'Star':
                    return <Star className="w-4 h-4 text-amber-300" />;
                  default:
                    return <Award className="w-4 h-4 text-blue-400" />;
                }
              };

              return (
                <div
                  key={award.id}
                  className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-3.5">
                      {renderAwardIcon()}
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-white mb-1.5">{award.title}</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {award.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center gap-1.5 text-[10.5px] font-semibold text-amber-300">
                    <Check className="w-3 h-3" />
                    <span>Includes Plaque & Citation</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('/awards')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Explore Awards Criteria & Past Laureates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          11. VENUE & HOST CITY (LOS ANGELES LOCATION & INTERACTIVE MAP)
          Featuring interactive map placeholder, LACC facility overview, transit & accommodations
      ========================================================= */}
      <section id="section-venue" className="section-venue conference-section conference-section-light py-18 sm:py-22 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-widest text-blue-600 uppercase font-mono">
                  CONFERENCE VENUE & HOST CITY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#07153b] tracking-tight">
                Host Venue — Los Angeles, California
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl font-normal leading-relaxed">
                AMLIS 2027 will convene at the world-renowned Los Angeles Convention Center (LACC), positioned in the South Park district of Downtown Los Angeles (DTLA) steps from L.A. LIVE.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('/information')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Full Venue & Travel Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Key Information Highlight Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* 1. Precinct Address */}
            <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Convention Address
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                1201 S Figueroa St
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Los Angeles, CA 90015 · South Park District adjacent to L.A. LIVE and Crypto.com Arena.
              </p>
            </div>

            {/* 2. Transit & Airport Access */}
            <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-3">
                <Train className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                Transit & Airport Links
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                Pico Metro (A & E Lines)
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                4-minute walk to light rail station · 25–35 min to LAX Airport via FlyAway bus or rideshare.
              </p>
            </div>

            {/* 3. Delegate Accommodations */}
            <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-700 flex items-center justify-center mb-3">
                <Hotel className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                Hotel Room Blocks
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                JW Marriott L.A. LIVE
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                0.3 miles (6 min walk) · Special discounted academic room rates for AMLIS 2027 delegates.
              </p>
            </div>

            {/* 4. Facilities & Connectivity */}
            <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/70 hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-purple-700 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1">
                Auditorium & Halls
              </span>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                1,200-Seat Plenary Hall
              </h3>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                West Hall Plenary, 12 parallel oral seminar rooms, 80-poster exhibition & multi-gigabit Wi-Fi.
              </p>
            </div>
          </div>

          {/* Interactive Map Component Container */}
          <div className="shadow-lg rounded-2xl border border-slate-200/80 overflow-hidden">
            <VenueMap />
          </div>

          {/* Bottom Context Banner */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Planning Your Trip to Los Angeles?
                </h4>
                <p className="text-slate-500 text-[11px] mt-0.5">
                  View international flight tips, visa invitation letter instructions, and parking directions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Los+Angeles+Convention+Center+1201+S+Figueroa+St+Los+Angeles+CA+90015"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('/information')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Travel & VISA Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          12. ACCEPTED PAPERS & SPONSORS PREVIEW (LIGHT)
          Searchable research directory preview and institutional partners
      ========================================================= */}
      <section id="section-accepted-and-sponsors" className="section-accepted-and-sponsors conference-section conference-section-slate py-14 sm:py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left">
            {/* Left Card: Accepted Papers Preview */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10.5px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Technical Programme
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#07153b] tracking-tight mb-1.5">
                  Directory of Accepted Papers
                </h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed font-normal">
                  Search through accepted technical manuscripts, track classifications, and author indices across all eight research tracks.
                </p>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('/accepted-papers')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Accepted Papers</span>
                </button>

                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Right Card: Institutional Support & Sponsors */}
            <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10.5px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Partners & Supporters
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#07153b] tracking-tight mb-1.5">
                  Institutional Backing
                </h3>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed font-normal">
                  Acknowledging the support of university partners, scientific bodies, and technological organizations.
                </p>
              </div>

              {/* Sponsor Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center px-3 hover:bg-slate-100 transition-colors"
                  >
                    <span className="text-xs font-bold text-slate-700 tracking-tight text-center">
                      {sponsor.name === 'IEEE' ? '❖ IEEE' : sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          12. FINAL CALL TO ACTION BANNER
      ========================================================= */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
