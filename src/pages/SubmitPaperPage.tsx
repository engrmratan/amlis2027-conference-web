import React from 'react';
import {
  Download,
  CheckCircle2,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  Mail,
  Send
} from 'lucide-react';
import { useConference } from '../context';
import { CtaBanner, PageHero } from '../components';

interface SubmitPaperPageProps {
  onNavigate: (path: string) => void;
}

export const SubmitPaperPage: React.FC<SubmitPaperPageProps> = ({ onNavigate }) => {
  const { config, dates, setActiveModal } = useConference();

  const submissionDate = dates.find(d => d.id === 'date-1')?.dateStr || '31 December 2026';

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="AUTHOR PORTAL"
        title="Submit Your Paper — AMLIS 2027"
        description="Complete guidelines, submission checklist, and direct access to the paper submission portal for the 2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems."
        breadcrumbCurrent="Submit Paper"
        parentBreadcrumb={{ label: 'Submission', path: '/submission' }}
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. DEADLINE & ACTION BANNER (LIGHT)
          Matches Home Page Action Ribbon
      ========================================================= */}
      <section id="section-submit-verification" className="section-submit-verification conference-section conference-section-light py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 space-y-8 text-left">
          {/* Deadline Highlight Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-0.5">
                  Submission Status
                </span>
                <h3 className="text-base font-bold text-slate-900">Official Manuscript Deadline: {submissionDate}</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-normal">
                  All submissions are due at 23:59 AoE (Anywhere on Earth). Strict double-blind peer review applies.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveModal('submissionPortal')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <span>Submit Manuscript</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Author Checklist */}
          <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="mb-5">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Author Checklist
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Pre-Submission Verification
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Verify each criterion prior to final PDF compilation and portal upload:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Format strictly using IEEE 2-column conference specifications.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Remove all author names and affiliations for double-blind review.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Ensure manuscript length does not exceed 6–8 pages (+ 2 refs).</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Embed all vector fonts within the compiled PDF file.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Check that novelty and empirical validations are clearly presented.</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-start gap-3 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Ensure paper has not been published or submitted concurrently elsewhere.</span>
              </div>
            </div>
          </div>

          {/* Template Download Block */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-0.5">
                  Official Resources
                </span>
                <h3 className="text-base font-bold text-slate-900">IEEE Manuscript Template Packages</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Available in standard LaTeX (IEEEtran) and Microsoft Word (.docx) formats.
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveModal('template')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Templates</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. STEP-BY-STEP SUBMISSION ROADMAP (SLATE TINT)
          Matches Home Page Section 8
      ========================================================= */}
      <section id="section-submit-workflow" className="section-submit-workflow conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Submission Workflow
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Step-by-Step Submission Process
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Follow these sequential phases to complete your paper upload.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 01</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Account Creation</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Register or sign in with your academic credentials in the submission portal.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 02</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Track Selection</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Designate the single primary technical track corresponding to your research scope.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 03</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">PDF Upload</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Upload your anonymized PDF manuscript and enter abstract, title, and keywords.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[11px] font-mono font-bold text-blue-600 block mb-1">STEP 04</span>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Confirmation ID</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Receive your unique Paper ID and automated submission acknowledgment email.
              </p>
            </div>
          </div>

          {/* Submission Contact Bar */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Questions regarding paper submission? Contact the Secretariat at: <strong className="text-slate-900">{config.officialEmail}</strong></span>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-1.5 text-blue-600 font-semibold hover:underline self-start sm:self-auto cursor-pointer"
            >
              <span>Contact Secretariat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
