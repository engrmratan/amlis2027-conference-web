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
  Check
} from 'lucide-react';
import { useConference } from '../context/ConferenceContext';
import { TrackIcon } from '../components/TrackIcon';
import { CtaBanner } from '../components/CtaBanner';
import heroBrainImg from '../assets/images/hero-brain.png';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { config, tracks, committee, awards, sponsors, setActiveModal } = useConference();
  const [committeeIndex, setCommitteeIndex] = useState(0);
  const [synapticPulse, setSynapticPulse] = useState(false);
  const [activeTelemetry, setActiveTelemetry] = useState<'neural' | 'xai' | 'llm'>('neural');
  const pulseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Trigger synaptic pulse light animation
  const triggerSynapticPulse = useCallback(() => {
    setSynapticPulse(true);
    if (pulseTimeoutRef.current) {
      clearTimeout(pulseTimeoutRef.current);
    }
    pulseTimeoutRef.current = setTimeout(() => {
      setSynapticPulse(false);
    }, 1200);
  }, []);

  // Clean up pulse timeout on unmount
  useEffect(() => {
    return () => {
      if (pulseTimeoutRef.current) {
        clearTimeout(pulseTimeoutRef.current);
      }
    };
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
      <section id="section-hero" className="section-hero conference-section conference-section-dark relative overflow-hidden bg-[#07153b] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-blue-950">
        {/* Subtle architectural cyber grid and ambient neural lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          {/* Ambient warm amber & cyan neural radial glow positioned behind the brain centerpiece */}
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[280px] sm:w-[420px] lg:w-[520px] h-[280px] sm:h-[420px] lg:h-[520px] rounded-full bg-gradient-to-tr from-amber-500/15 via-cyan-500/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute -top-24 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Authoritative Title, Thesis, Metadata & CTAs */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Institutional kicker pill with live pulsing beacon */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                <span>IEEE International Conference</span>
                <span className="text-cyan-600" aria-hidden="true">·</span>
                <span className="text-slate-300">AMLIS 2027</span>
              </div>

              {/* Main Headline with refined academic scale */}
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-[30px] font-extrabold text-white tracking-tight leading-[1.25] [text-wrap:balance]">
                2027 IEEE International Conference on{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-sky-200 to-white font-extrabold">
                  Advancements of Machine Learning & Intelligent Systems
                </span>
              </h1>

              {/* Scholarly Thesis */}
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                A premier international gathering uniting computer scientists, academic researchers, and industry pioneers to present breakthrough discoveries across deep learning, generative artificial intelligence, and trustworthy intelligent systems.
              </p>

              {/* Date & Location Quick Metadata */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
                <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{config.datesText}</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{config.venueText}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveModal('submissionPortal')}
                  className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-200 cursor-pointer whitespace-nowrap group"
                >
                  <span>Submit Paper</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/call-for-papers')}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm"
                >
                  <span>Call for Papers</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal('template')}
                  className="text-xs sm:text-sm font-medium text-cyan-300 hover:text-cyan-200 underline underline-offset-4 cursor-pointer px-2 py-2 transition-colors whitespace-nowrap"
                >
                  Download IEEE Template
                </button>
              </div>
            </div>

            {/* Right Column: Holographic Stage Featuring the Given Neural Brain (RESPONSIVE ON ALL DEVICES) */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              {/* Responsive Container bounding the scaled holographic stage */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] flex items-center justify-center select-none overflow-visible">
                {/* Scaled 400x400 Interactive Holographic Stage */}
                <div className="absolute w-[400px] h-[400px] shrink-0 scale-[0.70] sm:scale-[0.875] md:scale-[0.90] lg:scale-100 origin-center flex items-center justify-center pointer-events-auto transition-transform duration-200">
                  {/* Holographic Instrument Rings calibrated to the Neural Brain */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 400 400"
                    fill="none"
                  >
                    {/* Outer Rotating Coordinate Ring */}
                    <circle
                      cx="200"
                      cy="200"
                      r="186"
                      stroke="#38bdf8"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      className="opacity-40 animate-rotate"
                    />
                    {/* Middle Counter-Rotating Synaptic Orbit */}
                    <circle
                      cx="200"
                      cy="200"
                      r="154"
                      stroke="#f59e0b"
                      strokeWidth="1.2"
                      strokeDasharray="6 10"
                      className="opacity-35 animate-rotate-orbit-reverse"
                    />
                    {/* Inner Optical Reticle */}
                    <circle
                      cx="200"
                      cy="200"
                      r="120"
                      stroke="#818cf8"
                      strokeWidth="0.8"
                      strokeDasharray="2 6"
                      className="opacity-30"
                    />
                  </svg>

                  {/* Glowing Synaptic Aura behind the Brain */}
                  <div
                    className={`absolute inset-8 rounded-full bg-gradient-to-tr from-amber-500/30 via-cyan-400/30 to-indigo-600/30 blur-2xl pointer-events-none transition-all duration-700 ease-out ${
                      synapticPulse ? 'scale-130 opacity-100 ring-4 ring-cyan-400/40' : 'scale-100 opacity-60'
                    }`}
                  />

                  {/* Interactive Neural Brain Centerpiece Image (triggers on click) */}
                  <div
                    onClick={triggerSynapticPulse}
                    className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer group"
                    title="Click to trigger neural synaptic light transmission"
                  >
                    <img
                      src={heroBrainImg}
                      alt="AMLIS 2027 Neural Synaptic Brain"
                      className={`w-[70%] h-[70%] object-contain drop-shadow-[0_20px_40px_rgba(245,158,11,0.4)] transition-all duration-700 ease-out group-hover:scale-105 ${
                        synapticPulse ? 'brightness-135 scale-110 drop-shadow-[0_0_60px_rgba(56,189,248,0.95)] contrast-110' : ''
                      }`}
                    />
                  </div>

                  {/* Floating HUD Telemetry Chip 1 (Top Left) */}
                  <div
                    onClick={() => setActiveTelemetry('neural')}
                    className={`absolute -top-1 left-2 z-20 px-3 py-2 rounded-xl bg-[#030a1c]/90 backdrop-blur-md border transition-all duration-200 cursor-pointer shadow-lg animate-float-slow ${
                      activeTelemetry === 'neural' ? 'border-amber-400/80 ring-1 ring-amber-400/50 shadow-amber-500/20' : 'border-white/15 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-white tracking-wide">Deep Neural</p>
                        <p className="text-[9px] text-amber-300/90 font-mono">15+ Research Tracks</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating HUD Telemetry Chip 2 (Top Right) */}
                  <div
                    onClick={() => setActiveTelemetry('xai')}
                    className={`absolute -top-1 -right-2 z-20 px-3 py-2 rounded-xl bg-[#030a1c]/90 backdrop-blur-md border transition-all duration-200 cursor-pointer shadow-lg animate-float-delayed ${
                      activeTelemetry === 'xai' ? 'border-cyan-400/80 ring-1 ring-cyan-400/50 shadow-cyan-500/20' : 'border-white/15 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-white tracking-wide">Trustworthy & XAI</p>
                        <p className="text-[9px] text-cyan-300/90 font-mono">Double-Blind Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating HUD Telemetry Chip 3 (Bottom Left) */}
                  <div
                    onClick={() => setActiveTelemetry('llm')}
                    className={`absolute -bottom-2 -left-2 z-20 px-3 py-2 rounded-xl bg-[#030a1c]/90 backdrop-blur-md border transition-all duration-200 cursor-pointer shadow-lg animate-float ${
                      activeTelemetry === 'llm' ? 'border-blue-400/80 ring-1 ring-blue-400/50 shadow-blue-500/20' : 'border-white/15 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-white tracking-wide">Cognitive AI & LLMs</p>
                        <p className="text-[9px] text-slate-300 font-mono">Global Submissions</p>
                      </div>
                    </div>
                  </div>

                </div>
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
                  src="/src/assets/images/conference_hall_overview_1791972827328.jpg"
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
                  src="/src/assets/images/conference_microphone_closeup_1791977765516.jpg"
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
          6. PEER REVIEW RIGOR & ACADEMIC INTEGRITY (LIGHT)
          Featuring Keynote & Review Panel Photography
      ========================================================= */}
      <section id="section-peer-review" className="section-peer-review conference-section conference-section-light py-18 sm:py-22 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left">
            {/* Left Photo: Keynote & Committee Deliberation */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 shadow-md">
                <img
                  src="/src/assets/images/academic_keynote_discussion_1791972828354.jpg"
                  alt="Academic Committee and Keynote Evaluation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 mt-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block">Editorial Integrity</span>
                Every submission undergoes double-blind evaluation by at least two independent expert referees.
              </div>
            </div>

            {/* Right: 3-Stage Peer Review Pipeline */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-[10.5px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Scientific Quality Control
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                  Transparent Double-Blind Peer Review
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                  To ensure impartiality, all submissions are reviewed with author identities strictly withheld. Reviewers evaluate technical novelty, experimental soundness, clarity, and relevance.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">
                      Similarity Screening & Desk Check
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Submissions are verified for IEEE formatting compliance and screened via CrossCheck/Turnitin.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">
                      Independent Subject Referee Evaluation
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Refereed by a minimum of two independent domain experts using standardized criteria.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">
                      Structured Author Feedback & Final Meta-Review
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Authors receive constructive referee reports and recommendations for final camera-ready copies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onNavigate('/call-for-papers')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <span>Review Guidelines & Ethics</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. PROCEEDINGS & SCOPUS INDEXING (DARK BLUE: #091b42)
          Authoritative academic publishing details
      ========================================================= */}
      <section id="section-proceedings" className="section-proceedings conference-section conference-section-dark py-14 sm:py-16 bg-[#091b42] text-white border-b border-blue-950">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-[10.5px] font-bold tracking-widest text-[#00b4d8] uppercase block mb-1">
              Publication & Indexation
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
              Conference Proceedings & Scopus Indexing
            </h2>
            <p className="text-xs text-slate-300 mt-1.5 font-normal leading-relaxed">
              Research presented at AMLIS 2027 is prepared for global discoverability and scholarly citation impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#00b4d8] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Scopus Indexing Submission</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Accepted, registered, and presented papers will be submitted for inclusion in major scientific abstracting and indexing databases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#00b4d8] flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">IEEE Xplore Alignment</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Formatted strictly to IEEE double-column specifications with digital object identifier (DOI) allocation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#00b4d8] flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Worldwide Scientific Reach</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Maximized visibility for academic promotions, institutional grant metrics, and international researcher discovery.
              </p>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic pt-4 border-t border-white/10">
            Note: Publication and indexation remain subject to applicable peer review evaluation, author registration, oral presentation, and indexing database criteria.
          </p>
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
                  src="/src/assets/images/research_laptop_workspace_1791972828276.jpg"
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
          11. ACCEPTED PAPERS & SPONSORS PREVIEW (LIGHT)
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
