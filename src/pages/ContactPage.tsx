import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Twitter,
  Youtube,
  Building,
  Clock,
  MessageSquare,
  FileText,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Plane
} from 'lucide-react';
import { useConference } from '../context/ConferenceContext';
import { CtaBanner } from '../components/CtaBanner';
import { PageHero } from '../components/PageHero';
import gcstmrLogo from '../assets/images/gcstmr.png';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { config, sendMessage, setActiveModal } = useConference();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('General Enquiries');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setErrorMessage('Please specify the subject of your enquiry.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorMessage('Please write a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendMessage(name, email, category, subject, message);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setIsSubmitting(false);
      setErrorMessage('An unexpected error occurred. Please try again or email us directly.');
    }
  };

  const contactFaqs = [
    {
      q: 'How quickly does the secretariat respond to inquiries?',
      a: 'Official conference emails and portal inquiries are typically answered within 1–2 business days (Australian Eastern Standard Time, AEST / UTC+10).'
    },
    {
      q: 'How do I request an official Visa Invitation Letter?',
      a: 'Visa invitation letters are issued exclusively to authors of accepted papers and fully registered delegates. Please include your accepted Paper ID and registration invoice number in your email.'
    },
    {
      q: 'Can I pay registration fees via international bank wire?',
      a: 'Yes. In addition to credit card payment through the online portal, institutional wire transfer instructions with SWIFT/IBAN details can be provided upon request by contacting registration support.'
    },
    {
      q: 'Whom should I contact regarding corporate sponsorship or booth exhibition?',
      a: 'Direct your message to the Sponsorship & Exhibits Chair at sponsorship@amlis2027.org or choose "Sponsorship Enquiries" in the contact form below.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="GET IN TOUCH"
        title="Contact the Secretariat"
        description="Have questions regarding paper submissions, registration guidelines, academic tracks, or conference partnerships? The AMLIS 2027 Organizing Secretariat is here to assist you."
        breadcrumbCurrent="Contact"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. EXECUTIVE SECRETARIATS & UNITS (LIGHT)
          Matches Home Page Section 2 layout & cards
      ========================================================= */}
      <section id="section-contact-secretariats" className="section-contact-secretariats conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Governance & Secretariats
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Official Organizing Entities
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Direct institutional coordination for authors, referees, and international delegates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card 1: GCSTMR */}
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-5 hover:shadow-md hover:border-blue-200 transition-all text-left">
              <div className="w-14 h-14 rounded-xl border border-slate-100 bg-slate-50 p-2 flex flex-col items-center justify-center shrink-0 shadow-2xs">
                <img
                  src={gcstmrLogo}
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
                  GCSTMR Central Secretariat
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
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-5 relative hover:shadow-md hover:border-blue-200 transition-all text-left">
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
                  IEEE NSW Section Liaison
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

          {/* 2 Sub-desks matching Home Page */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex items-start gap-3.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Technical Program & Editorial Desk</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Assistance with paper submissions, peer reviews, revisions, and camera-ready formatting compliance.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex items-start gap-3.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">Delegate Registration & Visa Support</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  Guidance regarding registration tiers, invoices, payment methods, and consular visa invitation letters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. DIRECT COMMUNICATIONS & MESSAGE FORM (SLATE TINT)
          Matches Home Page Section 12 layout
      ========================================================= */}
      <section id="section-contact-inquiry" className="section-contact-inquiry conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Contact Channels
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                  Direct Inquiries
                </h2>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  For formal communications, please use the designated desk emails or the portal form.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                      Primary Contact
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Official Conference Email</h3>
                    <a
                      href={`mailto:${config.officialEmail}`}
                      className="text-xs text-blue-600 font-semibold hover:underline mt-0.5 block"
                    >
                      {config.officialEmail}
                    </a>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>Response time: 1–2 business days</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                      Host Destination
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Venue & City</h3>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      {config.venueText}
                    </p>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">Sydney, New South Wales, Australia</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block">
                      Digital Hub
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">Official Web Portal</h3>
                    <a
                      href={`https://${config.officialWebsite}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 font-semibold hover:underline mt-0.5 block"
                    >
                      {config.officialWebsite}
                    </a>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">24/7 Author Submission & Updates</span>
                  </div>
                </div>
              </div>

              {/* Official Social Channels */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase block mb-1">
                  Community Network
                </span>
                <h4 className="text-xs font-bold text-slate-900 mb-3">Follow Official Conference Channels</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={config.socialLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center text-slate-600 transition-colors shadow-2xs"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={config.socialX}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center text-slate-600 transition-colors shadow-2xs"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={config.socialYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 flex items-center justify-center text-slate-600 transition-colors shadow-2xs"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form matching Home Page Card */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs text-left">
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Online Secretariat Form
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#07153b] tracking-tight mb-1">
                  Send an Official Enquiry
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details below and your enquiry will be routed to the appropriate conference chair.
                </p>

                {submitSuccess ? (
                  <div className="p-8 bg-blue-50/60 rounded-2xl border border-blue-200 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto" />
                    <h4 className="text-base font-extrabold text-[#07153b]">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting AMLIS 2027. Your message has been logged and routed to the conference secretariat.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Dr. Alex Morgan"
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@university.edu"
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Enquiry Category *
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          <option value="General Enquiries">General Enquiries</option>
                          <option value="Paper Submission Enquiries">Paper Submission Enquiries</option>
                          <option value="Registration Enquiries">Registration Enquiries</option>
                          <option value="Sponsorship Enquiries">Sponsorship Enquiries</option>
                          <option value="Visa Support">Visa Support & Invitation Letters</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Brief topic summary..."
                          className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe your enquiry in detail (include paper ID if applicable)..."
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FREQUENTLY ASKED QUESTIONS (LIGHT)
          Collapsible cards matching Call for Papers FAQ
      ========================================================= */}
      <section id="section-contact-faqs" className="section-contact-faqs conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Instant Assistance
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Frequently Asked Inquiries
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Quick answers to common questions submitted to our secretariats.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {contactFaqs.map((faq, idx) => (
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

      {/* =========================================================
          4. VENUE & HOST DESTINATION IMMERSION (DARK NAVY #07153b)
          Matches Home Page Section 5 & 10
      ========================================================= */}
      <section id="section-contact-venue" className="section-contact-venue conference-section conference-section-dark py-14 sm:py-18 bg-[#07153b] text-white border-b border-blue-950 relative overflow-hidden text-left">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase block">
                Host Destination · Sydney, Australia
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                Join Us in Sydney for AMLIS 2027
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                Experience world-class academic collaboration in Australia's leading innovation capital. The conference venue provides cutting-edge auditorium facilities, rapid transit connections from Sydney Airport (SYD), and walking proximity to world-renowned landmarks.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sydney, Australia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Kingsford Smith Airport (SYD)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{config.venueText}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('/information')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Travel & Venue Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
