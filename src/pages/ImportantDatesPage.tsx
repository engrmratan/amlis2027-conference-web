import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  Bell,
  Download,
  CalendarDays,
  ShieldCheck,
  Send,
  Sparkles
} from 'lucide-react';
import { useConference } from '../context';
import { CtaBanner, PageHero } from '../components';

interface ImportantDatesPageProps {
  onNavigate: (path: string) => void;
}

export const ImportantDatesPage: React.FC<ImportantDatesPageProps> = ({ onNavigate }) => {
  const { dates, config, setActiveModal } = useConference();

  const timelineMilestones = [
    {
      title: 'Paper Submission',
      desc: 'Closing date for paper submission',
      date: '31 December 2026',
      dateColor: 'text-red-600',
      isActive: true,
      status: 'Open for Submission',
      requirement: 'Full 6–8 page PDF via IEEE template (anonymized)'
    },
    {
      title: 'Review',
      desc: 'Full paper review report to author',
      date: '28 February 2027',
      dateColor: 'text-blue-600',
      isActive: false,
      status: 'Scheduled',
      requirement: 'Detailed referee reports & acceptance status sent to authors'
    },
    {
      title: 'Early Bird Opens',
      desc: 'Early bird registration opens',
      date: '28 February 2027',
      dateColor: 'text-blue-600',
      isActive: false,
      status: 'Upcoming',
      requirement: 'Discounted author & delegate registration rates available'
    },
    {
      title: 'Camera Ready',
      desc: 'Final paper — camera-ready copy',
      date: '15 April 2027',
      dateColor: 'text-blue-600',
      isActive: false,
      status: 'Pending Review',
      requirement: 'Final revised PDF incorporating peer reviewer feedback'
    },
    {
      title: 'Early Bird Closes',
      desc: 'Early bird registration closes',
      date: '15 April 2027',
      dateColor: 'text-blue-600',
      isActive: false,
      status: 'Pending',
      requirement: 'Final day to claim early bird registration discount'
    },
    {
      title: 'Final Registration',
      desc: 'Registration closes',
      date: '30 April 2027',
      dateColor: 'text-blue-600',
      isActive: false,
      status: 'Final Deadline',
      requirement: 'At least one author must register per accepted paper'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="SCHEDULE & MILESTONES"
        title="Important Dates & Deadlines"
        description="Stay up-to-date with key deadlines for manuscript submission, peer review notifications, author registration, camera-ready papers, and conference proceedings for AMLIS 2027."
        breadcrumbCurrent="Important Dates"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. OFFICIAL CONFERENCE TIMELINE (LIGHT)
          Milestone timeline with centered line segments and compact text
      ========================================================= */}
      <section id="section-timeline-interactive" className="section-timeline-interactive conference-section conference-section-light py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Section Subtitle & Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 text-left">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Deadlines & Milestones
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Official Conference Timeline
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 max-w-sm sm:text-right font-normal">
              All deadlines are 23:59 AoE (Anywhere on Earth) unless stated otherwise.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="overflow-x-auto pb-6 scrollbar-none mb-6">
            <div className="min-w-[780px] relative text-left">
              {/* 6 Milestone Columns */}
              <div className="grid grid-cols-6 gap-6 relative">
                {timelineMilestones.map((item, idx, arr) => (
                  <div key={item.title} className="flex flex-col text-left relative">
                    {/* Node on the line: height 24px (h-6) with line passing through exact vertical and horizontal center */}
                    <div className="relative h-6 flex items-center">
                      {/* Connecting Line Segment to next circle point */}
                      {idx < arr.length - 1 && (
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

                    {/* Title (scaled small and crisp) */}
                    <h3 className="text-xs sm:text-[12.5px] font-bold text-slate-900 mt-2.5 leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    {/* Description (scaled small and crisp) */}
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-1 leading-normal font-normal min-h-[28px]">
                      {item.desc}
                    </p>

                    {/* Date (scaled small and crisp, Red for item 1, Blue for items 2-6) */}
                    <p className={`text-[11.5px] sm:text-xs font-bold mt-3 sm:mt-4 tracking-tight ${item.dateColor}`}>
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timezone Note */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3 text-left">
            <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-800">Timezone Specification:</p>
              <p className="mt-0.5 text-slate-500">
                Unless stated otherwise, all conference deadlines are 23:59 Anywhere on Earth (AoE) / Pacific Standard Time (PST, UTC-8).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. DETAILED DEADLINES SPECIFICATION TABLE (SLATE TINT)
          Matches Home Page fee / criteria table style
      ========================================================= */}
      <section id="section-deadlines-specifications" className="section-deadlines-specifications conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Phase Breakdown
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Milestone Specifications & Deliverables
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Review specific submission requirements and action items for each phase.
            </p>
          </div>

          {/* Table Card */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      MILESTONE
                    </th>
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-1/5">
                      DEADLINE (23:59 AOE)
                    </th>
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-1/6">
                      STATUS
                    </th>
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                      REQUIREMENTS & ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {timelineMilestones.map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-slate-400">0{idx + 1}</span>
                          <span className="font-bold text-slate-800">{row.title}</span>
                        </div>
                      </td>
                      <td className={`py-3.5 px-6 font-semibold ${row.dateColor}`}>
                        {row.date}
                      </td>
                      <td className="py-3.5 px-6">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                            row.isActive
                              ? 'bg-red-50 text-red-600 border border-red-200'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-slate-600 text-[11.5px] leading-relaxed">
                        {row.requirement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. AUTHOR ACTION ROADMAP (LIGHT)
          4 Cards matching Home Page Section 8
      ========================================================= */}
      <section id="section-author-journey" className="section-author-journey conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Author Journey
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Author Submission Pathway
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Four sequential steps from initial draft to published proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 01</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Prepare Manuscript</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Format your paper in standard IEEE two-column format using LaTeX or Microsoft Word.
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
                Upload your PDF and enter abstract, keywords, and author metadata into the system.
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
          4. CALENDAR SYNC & ACTION (DARK NAVY #07153b)
          Matches Home Page Section 5 & 10
      ========================================================= */}
      <section id="section-calendar-sync" className="section-calendar-sync conference-section conference-section-dark py-14 sm:py-18 bg-[#07153b] text-white border-b border-blue-950 relative overflow-hidden text-left">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase block">
                Never Miss a Milestone
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                Submission Portal Now Open for AMLIS 2027
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                The manuscript submission portal is actively accepting submissions across all 8 research disciplines. Authors are encouraged to submit early to ensure adequate time for review and revisions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Submission Closes: 31 December 2026</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>23:59 AoE (Anywhere on Earth)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:justify-end">
              <button
                onClick={() => setActiveModal('submissionPortal')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Submit Manuscript</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveModal('template')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download IEEE Template</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
