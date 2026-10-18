import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Globe,
  Users,
  Lightbulb,
  Handshake,
  CheckCircle2,
  Download,
  FileText,
  FileCheck,
  ShieldAlert,
  ChevronDown,
  Clock,
  Sparkles,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { useConference } from '../context/ConferenceContext';
import { TrackIcon } from '../components/TrackIcon';
import { CtaBanner } from '../components/CtaBanner';
import { PageHero } from '../components/PageHero';

interface CallForPapersPageProps {
  onNavigate: (path: string) => void;
}

export const CallForPapersPage: React.FC<CallForPapersPageProps> = ({ onNavigate }) => {
  const { config, tracks, dates, setActiveModal } = useConference();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submissionDate = dates.find(d => d.id === 'date-1')?.dateStr || '31 December 2026';
  const reviewDate = dates.find(d => d.id === 'date-2')?.dateStr || '28 February 2027';
  const cameraReadyDate = dates.find(d => d.id === 'date-4')?.dateStr || '15 April 2027';
  const confDates = dates.find(d => d.id === 'date-5')?.dateStr || config.datesText;

  const faqs = [
    {
      q: 'What is the official paper submission deadline?',
      a: 'The submission deadline is 31 December 2026 at 23:59 AoE (Anywhere on Earth). Strict deadlines apply to facilitate the double-blind review process.'
    },
    {
      q: 'How do I submit my paper?',
      a: 'Papers must be submitted electronically through the official AMLIS 2027 submission portal. Prepare your manuscript adhering strictly to the official IEEE two-column conference formatting template.'
    },
    {
      q: 'Is there a page limit for manuscripts?',
      a: 'Regular full papers should be 6 to 8 pages including all figures, tables, and references. Papers exceeding page limits will incur additional page charges.'
    },
    {
      q: 'Can I submit to multiple tracks?',
      a: 'Each manuscript should be submitted to the single primary track that best matches its core research contribution. The program committee may reassign manuscripts if appropriate.'
    },
    {
      q: 'Is double-blind peer review enforced?',
      a: 'Yes. All submitted manuscripts must be fully anonymized. Author names, affiliations, email addresses, and obvious self-referential citations must be removed from the review copy.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="CALL FOR PAPERS"
        title="Call for Papers — AMLIS 2027"
        description="We invite researchers, practitioners and innovators from around the world to submit high-quality papers presenting original research, innovative ideas, and practical solutions in the field of machine learning, AI and intelligent systems."
        breadcrumbCurrent="Call for Papers"
        onNavigate={onNavigate}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>{config.datesText}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{config.venueText}</span>
          </div>
        </div>
      </PageHero>

      {/* =========================================================
          1. INTRODUCTION + WHY SUBMIT (LIGHT)
          Matches Home Page 2-column layout
      ========================================================= */}
      <section id="section-cfp-invitation" className="section-cfp-invitation conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Invitation to Authors
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                  Call for Original Research
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                AMLIS 2027 welcomes original research papers, innovative algorithms, and practical applications across machine learning, artificial intelligence, data science, and intelligent systems.
              </p>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Authors are invited to present empirical studies, theoretical frameworks, and novel implementations that address real-world challenges in robotics, NLP, healthcare, and cyber-physical infrastructure.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModal('submissionPortal')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Submit Manuscript</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveModal('template')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  <span>IEEE Template</span>
                </button>
              </div>
            </div>

            {/* Right: Why Submit (4 cards matching Home Page) */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Author Benefits
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#07153b] tracking-tight mb-4">
                Why Submit to AMLIS 2027?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Global Reach</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Showcase your findings to researchers spanning 30+ nations and institutions.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Peer Exchange</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Connect directly with session chairs, keynote speakers, and academic innovators.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Constructive Review</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Receive comprehensive peer evaluation from independent domain specialists.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Joint Collaboration</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Catalyze cross-institutional grants, joint papers, and industrial translations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. RESEARCH TRACKS (SLATE TINT)
          Matches Home Page Section 4 exactly
      ========================================================= */}
      <section id="section-cfp-tracks" className="section-cfp-tracks conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Thematic Scope
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Eight Conference Research Tracks
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Select your primary track for targeted reviewer assignment.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/submission')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer shrink-0"
            >
              <span>Submission Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracks.map((track, idx) => (
              <div
                key={track.id}
                onClick={() => onNavigate('/submission')}
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
                  <span>Track criteria</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MANUSCRIPT PREPARATION & DEADLINES (LIGHT)
          Matches Home Page Author Pathway style
      ========================================================= */}
      <section id="section-cfp-guidelines" className="section-cfp-guidelines conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Checklist */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Formatting Rigor
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                  Manuscript Guidelines
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Authors must strictly follow standard IEEE conference manuscript formats (LaTeX or Microsoft Word). Ensure full anonymization prior to uploading your PDF.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Standard IEEE 2-column format (A4 or US Letter).</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Regular full paper: 6 to 8 pages including references.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Strict double-blind anonymization for all initial submissions.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Verified originality screened through Turnitin/CrossCheck.</span>
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => setActiveModal('template')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download IEEE Template</span>
                </button>
              </div>
            </div>

            {/* Center Key Points (Cards) */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                At a Glance
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Key Requirements</h3>

              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Format Standard</h4>
                  <p className="text-[11px] text-slate-500">IEEE 2-column conference template</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Length Policy</h4>
                  <p className="text-[11px] text-slate-500">6–8 pages including citations</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Academic Ethics</h4>
                  <p className="text-[11px] text-slate-500">Zero tolerance for plagiarized text</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Review Rigor</h4>
                  <p className="text-[11px] text-slate-500">Double-blind peer evaluation</p>
                </div>
              </div>
            </div>

            {/* Right Important Dates Card matching Home Page */}
            <div className="lg:col-span-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3.5">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wide">
                <Calendar className="w-4 h-4" />
                <span>Important Dates</span>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-[10.5px] text-slate-400 font-medium">Submission Deadline</p>
                  <p className="font-bold text-red-600 text-xs mt-0.5">{submissionDate}</p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10.5px] text-slate-400 font-medium">Review Notification</p>
                  <p className="font-semibold text-slate-800 text-xs mt-0.5">{reviewDate}</p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10.5px] text-slate-400 font-medium">Camera-ready Deadline</p>
                  <p className="font-semibold text-slate-800 text-xs mt-0.5">{cameraReadyDate}</p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10.5px] text-slate-400 font-medium">Conference Dates</p>
                  <p className="font-bold text-blue-600 text-xs mt-0.5">{confDates}</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/important-dates')}
                className="w-full mt-2 py-2 text-[11px] font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer text-center block"
              >
                View Full Timeline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. 4-STEP SUBMISSION ROADMAP (SLATE TINT)
          Matches Home Page Section 8
      ========================================================= */}
      <section id="section-cfp-pathway" className="section-cfp-pathway conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Author Pathway
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                How to Submit Your Paper
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Follow these four sequential steps to submit your research to AMLIS 2027.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/submission')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <span>Submission Portal Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 01</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Prepare Manuscript</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Format your paper in standard IEEE two-column layout using LaTeX or Microsoft Word.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 02</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Anonymize Document</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Remove author names, emails, and institutional ties for double-blind review.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 03</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Submit via Portal</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Upload your PDF and enter abstract, keywords, and author meta into the system.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 04</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Camera-Ready & Reg</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Incorporate reviewer feedback, submit camera-ready copy, and complete registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FAQS (LIGHT)
          Clean collapsible cards
      ========================================================= */}
      <section id="section-cfp-faqs" className="section-cfp-faqs conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Frequently Asked Questions
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Author Inquiry & FAQ
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Direct guidance regarding paper submissions, formatting, and referee processes.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-semibold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
