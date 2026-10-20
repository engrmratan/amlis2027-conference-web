import React, { useState } from 'react';
import {
  Calendar,
  User,
  Utensils,
  Clock,
  ArrowRight,
  Mail,
  Copy,
  CheckCircle2,
  Send,
  Bell,
  X,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useConference, isValidEmail, sanitizeInput } from '../context';
import { PageHero, CtaBanner } from '../components';

interface RegistrationPageProps {
  onNavigate: (path: string) => void;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate }) => {
  const { sendMessage } = useConference();

  // Contact form state
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [subjectText, setSubjectText] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [formSent, setFormSent] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Notify modal state
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyEmail, setNotifyNotifyEmail] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@icamlis.org');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  const handleSubmitMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeInput(fullName, 100);
    const cleanEmail = sanitizeInput(emailAddress, 120);
    const cleanSubject = sanitizeInput(subjectText, 150) || 'Registration Inquiry';
    const cleanBody = sanitizeInput(messageBody, 5000);

    if (!cleanName || !isValidEmail(cleanEmail)) return;

    await sendMessage(
      cleanName,
      cleanEmail,
      'Registration Enquiries',
      cleanSubject,
      cleanBody
    );
    setFormSent(true);
    setFullName('');
    setEmailAddress('');
    setSubjectText('');
    setMessageBody('');
    setTimeout(() => setFormSent(false), 6000);
  };

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNotifyEmail = sanitizeInput(notifyEmail, 120);
    if (!isValidEmail(cleanNotifyEmail)) return;
    setNotifySuccess(true);
    setTimeout(() => {
      setNotifySuccess(false);
      setNotifyModalOpen(false);
      setNotifyNotifyEmail('');
    }, 3000);
  };

  const feeData = [
    { category: 'Non IEEE Registration', earlyBird: 'USD 500', regular: 'USD 500' },
    { category: 'IEEE Registration', earlyBird: 'USD 450', regular: 'USD 450' },
    { category: 'Non IEEE Student Registration', earlyBird: 'USD 400', regular: 'USD 400' },
    { category: 'IEEE Student Registration', earlyBird: 'USD 350', regular: 'USD 350' },
    {
      category: 'More Than One Paper',
      subCategory: '(For each additional paper)',
      earlyBird: 'USD 250',
      regular: 'USD 250'
    },
    { category: 'Virtual Presentation', earlyBird: 'USD 250', regular: 'USD 250' },
    { category: 'Attendees', earlyBird: 'USD 400', regular: 'USD 400' },
    { category: 'Conference Dinner', earlyBird: 'USD 80', regular: 'USD 80' },
  ];

  const milestones = [
    {
      num: '01',
      title: 'Paper Submission',
      desc: 'Closing date for paper submission',
      date: '31 December 2026',
      isRed: true
    },
    {
      num: '02',
      title: 'Review',
      desc: 'Full paper review report to author',
      date: '28 February 2027',
      isRed: false
    },
    {
      num: '03',
      title: 'Early Bird Opens',
      desc: 'Early bird registration opens',
      date: '28 February 2027',
      isRed: false
    },
    {
      num: '04',
      title: 'Camera Ready',
      desc: 'Final paper + camera-ready copy',
      date: '15 April 2027',
      isRed: false
    },
    {
      num: '05',
      title: 'Early Bird Closes',
      desc: 'Early bird registration closes',
      date: '15 April 2027',
      isRed: false
    },
    {
      num: '06',
      title: 'Final Registration',
      desc: 'Registration closes',
      date: '30 April 2027',
      isRed: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches screenshot: dark navy banner with cyan uppercase subtitle) */}
      <PageHero
        badge="REGISTRATION FEES"
        title="Join AMLIS 2027"
        description="Registration information for delegates, authors and presenters."
        breadcrumbCurrent="Registration"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          2. REGISTRATION TABLE SECTION (LIGHT)
          Clean institutional registration fee table matching Home Page
      ========================================================= */}
      <section id="section-registration-rates" className="section-registration-rates conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 space-y-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Delegate Investment
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Registration Categories & Rates
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              All fees in USD. Early bird discounts apply until 15 April 2027.
            </p>
          </div>

          {/* Main Table Card (Desktop & Tablet) */}
          <div className="hidden sm:block rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-1/2">
                      CATEGORY
                    </th>
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      EARLY BIRD
                    </th>
                    <th className="py-3.5 px-6 text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      REGULAR
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {feeData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-blue-50/40 transition-colors"
                    >
                      <td className="py-3.5 px-6 font-semibold text-slate-800">
                        <div>
                          <span className="text-slate-900 font-medium">{row.category}</span>
                          {row.subCategory && (
                            <span className="block text-[11px] font-normal italic text-slate-400 mt-0.5">
                              {row.subCategory}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-6 font-bold text-blue-600">
                        {row.earlyBird}
                      </td>
                      <td className="py-3.5 px-6 font-bold text-slate-800">
                        {row.regular}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Fee Cards (< 640px) */}
          <div className="sm:hidden space-y-3">
            {feeData.map((row, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2.5">
                <div>
                  <span className="font-bold text-xs text-slate-900 block">{row.category}</span>
                  {row.subCategory && (
                    <span className="text-[10px] text-slate-400 italic block mt-0.5">{row.subCategory}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="bg-blue-50/70 p-2.5 rounded-lg border border-blue-100/70">
                    <span className="text-[9px] text-blue-800 uppercase font-bold tracking-wider block">Early Bird</span>
                    <span className="font-extrabold text-blue-600 text-sm">{row.earlyBird}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider block">Regular</span>
                    <span className="font-extrabold text-slate-700 text-sm">{row.regular}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Key Date Cards matching Home Page */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center gap-3.5 shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Early Bird Opens</p>
                <p className="text-xs sm:text-[13px] font-bold text-blue-600 mt-0.5">28 February 2027</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center gap-3.5 shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Early Bird Closes</p>
                <p className="text-xs sm:text-[13px] font-bold text-blue-600 mt-0.5">15 April 2027</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-white flex items-center gap-3.5 shadow-xs hover:border-blue-200 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Registration Closes</p>
                <p className="text-xs sm:text-[13px] font-bold text-blue-600 mt-0.5">30 April 2027</p>
              </div>
            </div>
          </div>

          {/* Two Requirement Notes Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/70 text-xs text-slate-600">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
              <p className="leading-relaxed">
                <strong className="text-slate-800">Student requirement:</strong> To use the student registration rate, the student needs to provide his/her supervisor's institutional contact information during registration.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Utensils className="w-4 h-4" />
              </div>
              <p className="leading-relaxed">
                <strong className="text-slate-800">Conference dinner:</strong> Conference dinner ticket includes full admission to the official AMLIS 2027 Sydney Gala Dinner.
              </p>
            </div>
          </div>

          {/* Coming Soon Notice Bar + Contact Organizer Button + Notify Me */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Online registration portal opens 28 February 2027.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setNotifyModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl shadow-2xs transition-colors cursor-pointer"
              >
                <Bell className="w-3.5 h-3.5 text-blue-600" />
                <span>Notify Me When Open</span>
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Contact Organizer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. TIMELINE MILESTONES (SLATE TINT)
          Matching Home Page Important Dates section exactly with centered line
      ========================================================= */}
      <section id="section-registration-timeline" className="section-registration-timeline conference-section conference-section-slate py-12 sm:py-14 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Deadlines & Milestones
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#07153b] tracking-tight">
                Official Registration Timeline
              </h2>
            </div>
            <p className="text-[11px] text-slate-500 max-w-sm sm:text-right font-normal">
              Strict deadlines apply. All deadlines are 23:59 AoE (Anywhere on Earth).
            </p>
          </div>

          {/* Timeline Container with exact centered line */}
          <div className="overflow-x-auto pb-6 scrollbar-none">
            <div className="min-w-[780px] relative text-left">
              <div className="grid grid-cols-6 gap-6 relative">
                {milestones.map((item, idx, arr) => (
                  <div key={item.num} className="flex flex-col text-left relative">
                    {/* Node on line: height 24px (h-6) with centered connector line */}
                    <div className="relative h-6 flex items-center">
                      {idx < arr.length - 1 && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[calc(100%+24px)] h-[1.5px] bg-slate-200 z-0">
                          {idx === 0 && (
                            <div className="h-full w-2/5 bg-red-500" />
                          )}
                        </div>
                      )}

                      <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                        {item.isRed ? (
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

                    <h3 className="text-xs sm:text-[12.5px] font-bold text-slate-900 mt-2.5 leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-[11px] text-slate-500 mt-1 leading-normal font-normal min-h-[28px]">
                      {item.desc}
                    </p>
                    <p className={`text-[11.5px] sm:text-xs font-bold mt-3 sm:mt-4 tracking-tight ${item.isRed ? 'text-red-600' : 'text-blue-600'}`}>
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. REGISTRATION INQUIRY & SUPPORT (LIGHT)
          Matching Home Page institutional cards
      ========================================================= */}
      <section id="section-registration-support" className="section-registration-support conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
            {/* Left Card: Conference Administrator */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Secretariat Assistance
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight mb-2">
                  Registration Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For payment verification, wire transfer invoices, supervisor confirmation letters, and visa assistance documents.
                </p>
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900 block mb-0.5">Primary Contact:</span>
                  <a href="mailto:info@icamlis.org" className="text-blue-600 font-bold hover:underline">
                    info@icamlis.org
                  </a>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:info@icamlis.org"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Secretariat</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-600 transition-colors cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copySuccess ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copySuccess && (
                  <p className="text-[11px] text-emerald-600 font-medium text-center">
                    Email address copied to clipboard!
                  </p>
                )}
              </div>
            </div>

            {/* Right Card: Send message form */}
            <div className="lg:col-span-7 p-7 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Direct Inquiry
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#07153b] tracking-tight mb-4">
                Send a Message to the Organizing Committee
              </h3>

              {formSent ? (
                <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-200 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto" />
                  <p className="text-xs font-bold text-slate-900">Message Delivered</p>
                  <p className="text-[11px] text-slate-600">
                    Thank you. The conference administrator will respond to your registration inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="academic@institution.edu"
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={subjectText}
                      onChange={(e) => setSubjectText(e.target.value)}
                      placeholder="Registration rate, invoice, or visa enquiry"
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={messageBody}
                      onChange={(e) => setMessageBody(e.target.value)}
                      placeholder="How can we assist your conference participation?"
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message to Secretariat</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Banner matching Home Page */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => onNavigate('/contact')} />

      {/* Notify Me Modal */}
      {notifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 space-y-4">
            <button
              onClick={() => setNotifyModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">
                Early Bird Registration Alert
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Be the first to know when the official AMLIS 2027 registration portal opens on 28 February 2027 to claim early bird discounts.
              </p>
            </div>

            {notifySuccess ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-emerald-900">Alert Confirmed</p>
                <p className="text-[11px] text-emerald-700">
                  We will notify you immediately once registration goes live!
                </p>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-700 mb-1">
                    Your Academic or Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={notifyEmail}
                    onChange={(e) => setNotifyNotifyEmail(e.target.value)}
                    placeholder="researcher@university.edu"
                    className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>

                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>No spam. Only essential conference registration milestones.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Confirm Notification
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
