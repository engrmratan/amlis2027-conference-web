import React from 'react';
import {
  Eye,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  Globe,
  Share2,
  BookOpen,
  Building,
  Mail,
  Quote,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { useConference } from '../context';
import { TrackIcon, CtaBanner, PageHero } from '../components';
import keynoteDiscussionImg from '../assets/images/academic_keynote_discussion_1791972828354.jpg';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { config, tracks, setActiveModal } = useConference();

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="ABOUT THE CONFERENCE"
        title="About AMLIS 2027"
        description="The 2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems (AMLIS 2027) is a premier global forum for researchers, practitioners and industry innovators to shape the future of artificial intelligence."
        breadcrumbCurrent="About"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. CONFERENCE OVERVIEW + VISION & MISSION (LIGHT)
          Clean institutional layout matching Home Page
      ========================================================= */}
      <section id="section-about-overview" className="section-about-overview conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 text-left items-start">
            {/* Left: Conference Overview */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Institutional Scope
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                  Conference Overview
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                AMLIS 2027 brings together leading researchers, academicians, practitioners and industry experts from around the world to discuss the latest advancements in machine learning, artificial intelligence, data science and intelligent systems. The conference serves as a vibrant forum for knowledge exchange, collaboration and innovation, with a focus on both theoretical research and real-world applications.
              </p>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Hosted in Sydney, Australia, AMLIS 2027 fosters rigorous discourse spanning deep neural architectures, explainable AI, autonomous robotics, computer vision, and trustworthy machine intelligence.
              </p>

              {/* Styled Blockquote matching Home Page styling */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-[13px] flex items-start gap-3.5">
                <Quote className="w-5 h-5 text-blue-600 shrink-0 opacity-70 mt-0.5" />
                <p className="font-medium text-slate-800 leading-relaxed italic">
                  “Fostering innovation and collaboration for a smarter tomorrow through AI, machine learning and data science.”
                </p>
              </div>
            </div>

            {/* Right: Vision & Mission Cards matching Home Page */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Guiding Principles
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                  Vision & Mission
                </h2>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                    Our Horizon
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">Our Vision</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    To be a leading international platform that advances research, innovation and collaboration in AI, machine learning and intelligent systems for global scientific progress.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                    Our Purpose
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">Our Mission</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    To bring together researchers, practitioners and industry experts to share knowledge, explore emerging trends, and foster meaningful collaborations for solving real-world challenges using AI and data science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CONFERENCE OBJECTIVES (SLATE TINT)
          4-Column Grid matching Home Page Research Tracks & Highlights
      ========================================================= */}
      <section id="section-about-objectives" className="section-about-objectives conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Strategic Benchmarks
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Conference Objectives
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Directing academic inquiry toward verifiable scientific excellence and societal benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-300">01</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Knowledge Exchange</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Provide a platform for sharing cutting-edge research and innovative ideas across global academia.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-300">02</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Collaboration</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Encourage collaboration between academia, industry and research communities for collective impact.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-300">03</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Innovation</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Showcase emerging trends, foundation models, and practical applications in AI and data science.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-300">04</span>
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Global Impact</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Contribute to the ethical development of intelligent systems for sustainable societal benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. ACADEMIC & INDUSTRY COLLABORATION (DEEP NAVY IMMERSION: #07153b)
          Matches Home Page Section 5 style with real photo
      ========================================================= */}
      <section id="section-about-collaboration" className="section-about-collaboration conference-section conference-section-dark py-16 sm:py-20 bg-[#07153b] text-white border-b border-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-2xl border border-white/10">
                <img
                  src={keynoteDiscussionImg}
                  alt="Academic and Industry Deliberation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                  <p className="font-semibold text-white">Peer Evaluation & Forum</p>
                  <p className="text-[11px] text-slate-300">Connecting laboratory theory with industrial translation</p>
                </div>
              </div>
            </div>

            {/* Right: Collaboration Pillars */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#00b4d8] uppercase block mb-1">
                  Cross-Disciplinary Synergy
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                  Academic and Industry Collaboration
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed mt-2">
                  AMLIS 2027 bridges the gap between fundamental laboratory inquiry and industrial enterprise by creating structured opportunities for joint research, technology transfer, and ethical deployment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-2.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">Global Network</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Build active partnerships with scholars and AI research labs worldwide.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-2.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">Knowledge Sharing</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Keynote lectures, technical presentations, and interactive peer exchanges.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-[#00b4d8] flex items-center justify-center mb-2.5">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1">Interactive Format</h3>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Poster sessions, roundtables, industry exhibition, and networking dinner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. EIGHT RESEARCH TRACKS (LIGHT)
          Matches Home Page Research Tracks section
      ========================================================= */}
      <section id="section-about-tracks" className="section-about-tracks conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Thematic Scope
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Eight Research Disciplines
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                The conference covers a comprehensive spectrum of intelligent systems topics.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          5. INSTITUTIONAL GOVERNANCE & HOST (SLATE TINT)
          Matching Home Page Section 2 exactly
      ========================================================= */}
      <section id="section-about-governance" className="section-about-governance conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Institutional Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Conference Management & Affiliation
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Operating under strict international scientific rigor and academic ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Card 1: GCSTMR */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-5 hover:shadow-md hover:border-blue-200 transition-all">
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
                <h3 className="text-base font-extrabold text-[#07153b] tracking-tight">
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
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-5 relative hover:shadow-md hover:border-blue-200 transition-all">
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
                <h3 className="text-base font-extrabold text-[#07153b] tracking-tight">
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

          {/* Quick Contact & Inquiry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white border border-slate-200">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Have questions about the conference?</h4>
                <p className="text-[11px] text-slate-500">Contact the secretariat at {config.officialEmail}</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <span>Contact Secretariat</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Banner matching Home Page */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
