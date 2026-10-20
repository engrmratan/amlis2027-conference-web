import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Quote,
  Globe,
  Users,
  Lightbulb,
  Handshake,
  FileText,
  Download,
  Settings,
  BookOpen,
  CheckCircle2,
  ShieldAlert,
  ChevronDown,
  Send,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { useConference } from '../context';
import { CtaBanner, PageHero } from '../components';

interface SubmissionPageProps {
  onNavigate: (path: string) => void;
}

export const SubmissionPage: React.FC<SubmissionPageProps> = ({ onNavigate }) => {
  const { config, dates, setActiveModal } = useConference();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submissionDate = dates.find(d => d.id === 'date-1')?.dateStr || '31 December 2026';
  const reviewDate = dates.find(d => d.id === 'date-2')?.dateStr || '28 February 2027';
  const cameraReadyDate = dates.find(d => d.id === 'date-4')?.dateStr || '15 April 2027';
  const confDates = dates.find(d => d.id === 'date-5')?.dateStr || config.datesText;

  const faqs = [
    {
      q: 'What is the paper submission deadline?',
      a: 'The submission deadline is 31 December 2026 at 23:59 AoE (Anywhere on Earth). Any updates or deadline announcements will be posted immediately.'
    },
    {
      q: 'Can I submit to multiple tracks?',
      a: 'Authors must designate a single primary track for each submission. Submitting identical manuscripts to multiple tracks is strictly not permitted.'
    },
    {
      q: 'How many papers can I submit?',
      a: 'There is no strict restriction on the number of non-overlapping submissions per author, but each accepted paper must be accompanied by at least one unique author registration.'
    },
    {
      q: 'Do you accept previously published work?',
      a: 'No. Submissions must present novel, unpublished work not currently under review by another conference or journal. Dual submissions will be rejected immediately.'
    },
    {
      q: 'Is there a page limit for papers?',
      a: 'Standard full papers are up to 6 to 8 double-column pages including figures, with up to 2 additional pages strictly for references.'
    },
    {
      q: 'When will I receive the review results?',
      a: 'Review notifications will be announced on 28 February 2027 through the submission system.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="PAPER SUBMISSION"
        title="Author Submission Portal & Guidelines"
        description="We invite high-quality research papers presenting original, unpublished work in machine learning, artificial intelligence, and intelligent systems. Review formatting guidelines, templates, and evaluation standards."
        breadcrumbCurrent="Submission"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. SUBMISSION OVERVIEW + WHY SUBMIT (LIGHT)
          Matches Home Page 2-column layout
      ========================================================= */}
      <section id="section-submission-overview" className="section-submission-overview conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Author Orientation
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                  Submission Overview
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                AMLIS 2027 invites original research papers, innovative ideas, and practical solutions in the field of Machine Learning, Artificial Intelligence, Data Science and Intelligent Systems.
              </p>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                All submissions undergo double-blind peer review by an international committee of academic domain experts.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-xs flex items-start gap-3">
                <Quote className="w-5 h-5 text-blue-600 shrink-0 opacity-70 mt-0.5" />
                <p className="font-medium text-slate-800 not-italic leading-relaxed">
                  “We encourage submissions that present novel research, practical applications, and innovative approaches in AI and data science.”
                </p>
              </div>
            </div>

            {/* Right: Why Submit? (4 cards matching Home Page) */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Value Proposition
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
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Global Exposure</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Showcase your research to an international academic and industrial audience.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Scholarly Network</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Connect with leading researchers, academicians and industry AI pioneers.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Knowledge Sharing</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Gain constructive feedback, referee evaluations, and fresh perspectives.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Future Collaboration</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                      Explore multi-laboratory grant opportunities and research partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. AUTHOR GUIDELINES (SLATE TINT)
          4 Cards matching Home Page Track design
      ========================================================= */}
      <section id="section-submission-guidelines" className="section-submission-guidelines conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Preparation Guidelines
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Author Submission Guidelines
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Follow these core requirements to ensure proper formatting and review compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Manuscript Preparation</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Format your paper strictly in standard IEEE two-column format using LaTeX or Word.
                </p>
              </div>
              <button
                onClick={() => setActiveModal('template')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer pt-2.5 border-t border-slate-100"
              >
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Download className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Official Template</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Download the IEEE manuscript template pre-configured with margin parameters.
                </p>
              </div>
              <button
                onClick={() => setActiveModal('template')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer pt-2.5 border-t border-slate-100"
              >
                <span>Download Template</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Settings className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Formatting Standards</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Ensure strict font sizes, high-resolution figures, and IEEE citation style.
                </p>
              </div>
              <button
                onClick={() => setActiveModal('template')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer pt-2.5 border-t border-slate-100"
              >
                <span>View Standards</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Card 4 */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Page Limits</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Regular full papers: 6–8 double-column pages including all diagrams and citations.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 inline-flex items-center gap-1 pt-2.5 border-t border-slate-100">
                <span>6 to 8 Pages</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. CHECKLIST, ETHICS & REVIEW RIGOR (LIGHT)
          3 Cards matching Home Page Section 6
      ========================================================= */}
      <section id="section-submission-standards" className="section-submission-standards conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Quality Verification
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Quality & Evaluation Standards
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Operating under strict scientific impartiality and publication ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Checklist Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                Verification
              </span>
              <h3 className="text-base font-bold text-[#07153b] mb-1">Pre-Submission Checklist</h3>
              <p className="text-xs text-slate-500 mb-4">
                Verify that your PDF fulfills every item before uploading.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Standard IEEE conference formatting used.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Author names & affiliations completely removed.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Originality verified against plagiarism screening.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Within 6–8 double-column page boundary.</span>
                </div>
              </div>
            </div>

            {/* Originality & Ethics */}
            <div className="lg:col-span-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                  Integrity
                </span>
                <h3 className="text-base font-bold text-[#07153b] mb-2">Originality & Research Ethics</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Submissions must represent novel work not concurrently submitted or published elsewhere. Any unauthorized text reuse will result in immediate desk rejection.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Screened automatically via Turnitin / CrossCheck.</span>
              </div>
            </div>

            {/* Peer Review Process */}
            <div className="lg:col-span-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                Evaluation
              </span>
              <h3 className="text-base font-bold text-[#07153b] mb-2">Double-Blind Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Assessed by a minimum of two independent domain reviewers for scientific novelty, empirical rigor, and clarity.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-800">
                  <span className="text-[11px] font-mono font-bold text-blue-600 w-5">01</span>
                  <span>Similarity Check & Desk Scope</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-800">
                  <span className="text-[11px] font-mono font-bold text-blue-600 w-5">02</span>
                  <span>Subject Expert Double-Blind Review</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-800">
                  <span className="text-[11px] font-mono font-bold text-blue-600 w-5">03</span>
                  <span>Meta-Review & Decision Notification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. 3 ACTION CARDS: TEMPLATE + DATES + INSTRUCTIONS (SLATE TINT)
      ========================================================= */}
      <section id="section-submission-actions" className="section-submission-actions conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Template */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                  Template Download
                </span>
                <h3 className="text-base font-bold text-[#07153b] mb-2">IEEE Conference Template</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                  Pre-configured LaTeX style packages and Microsoft Word (.docx) templates adhering to IEEE standards.
                </p>
              </div>

              <button
                onClick={() => setActiveModal('template')}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Template Package</span>
              </button>
            </div>

            {/* Card 2: Dates */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                  Timeline
                </span>
                <h3 className="text-base font-bold text-[#07153b] mb-3">Important Dates</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Submission Deadline</span>
                    <span className="font-bold text-red-600">{submissionDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Review Notification</span>
                    <span className="font-semibold text-slate-800">{reviewDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Camera-ready Deadline</span>
                    <span className="font-semibold text-slate-800">{cameraReadyDate}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Conference Dates</span>
                    <span className="font-bold text-blue-600">{confDates}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Instructions */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Send className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                  Author Steps
                </span>
                <h3 className="text-base font-bold text-[#07153b] mb-3">Submission Instructions</h3>
                <ol className="space-y-1.5 text-xs text-slate-600 mb-6 font-normal">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Prepare manuscript using IEEE template.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Anonymize author credentials for review.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Upload PDF and complete meta on portal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-600">4.</span>
                    <span>Receive instant submission confirmation ID.</span>
                  </li>
                </ol>
              </div>

              <button
                onClick={() => setActiveModal('submissionPortal')}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Open Submission Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FAQS (LIGHT)
      ========================================================= */}
      <section id="section-submission-faqs" className="section-submission-faqs conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Author FAQs
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Direct guidance for authors regarding submissions, formatting, and referee processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
