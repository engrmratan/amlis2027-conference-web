import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Plane,
  Hotel,
  FileCheck,
  Monitor,
  Accessibility,
  HelpCircle,
  Phone,
  Mail,
  AlertCircle,
  Building,
  Navigation,
  Compass,
  Train,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Search,
  CreditCard,
  FileText
} from 'lucide-react';
import { useConference } from '../context/ConferenceContext';
import { CtaBanner } from '../components/CtaBanner';
import { PageHero } from '../components/PageHero';
import conferenceHallImg from '../assets/images/conference_hall_overview_1791972827328.jpg';

interface InformationPageProps {
  onNavigate: (path: string) => void;
}

export const InformationPage: React.FC<InformationPageProps> = ({ onNavigate }) => {
  const { config, setActiveModal } = useConference();

  // FAQ State
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<string | null>('reg-1');

  const faqCategories = [
    'All',
    'Registration & Fees',
    'Travel & Visa',
    'Conference & Policies'
  ];

  const faqs = [
    // Registration & Fees
    {
      id: 'reg-1',
      category: 'Registration & Fees',
      question: 'What payment methods are supported for conference registration?',
      answer: 'We accept major international credit and debit cards (Visa, MasterCard, American Express) via the secure online registration portal. Additionally, academic institutions, university departments, and corporate sponsors requiring bank wire transfer can request an official pro-forma invoice with international SWIFT/IBAN details by contacting the Secretariat at info@amlis2027.org.'
    },
    {
      id: 'reg-2',
      category: 'Registration & Fees',
      question: 'How do I qualify for the Student Registration rate?',
      answer: 'To use the student registration tier ($350 USD for IEEE student members / $400 USD for non-IEEE students), the applicant must be actively enrolled in a recognized undergraduate, master’s, or PhD program. During checkout, you will need to provide your academic supervisor’s institutional email address and upload verifiable student identification or an official university enrolment letter.'
    },
    {
      id: 'reg-3',
      category: 'Registration & Fees',
      question: 'Can one registration fee cover more than one accepted paper?',
      answer: 'Every accepted manuscript must be accompanied by at least one registered author to ensure placement in the technical schedule and publication in the proceedings. If an author has multiple accepted manuscripts, the first paper requires standard author registration, while each subsequent paper is eligible for the discounted Additional Paper fee ($250 USD) rather than requiring multiple full registrations.'
    },
    {
      id: 'reg-4',
      category: 'Registration & Fees',
      question: 'What is the cancellation, refund, and registration transfer policy?',
      answer: 'Registrations may be transferred to a qualified co-author free of charge at any time up to 14 days prior to the conference opening. Written cancellation requests submitted on or before 15 April 2027 are eligible for an 80% refund (with a 20% administrative handling deduction). Due to contractual venue and catering obligations, cancellations received after 15 April 2027 are strictly non-refundable.'
    },
    {
      id: 'reg-5',
      category: 'Registration & Fees',
      question: 'When does the registration portal open and close?',
      answer: 'The official online registration portal opens on 28 February 2027 following the release of author review reports. Early bird discounted rates will remain active until 15 April 2027 (23:59 AoE). Final registration for all presenting authors strictly closes on 30 April 2027.'
    },

    // Travel, Visa & Logistics
    {
      id: 'travel-1',
      category: 'Travel & Visa',
      question: 'How do I obtain an official Australian Visa Invitation Letter?',
      answer: 'Official conference visa invitation letters are issued exclusively to authors of accepted manuscripts and fully registered delegates. Once your paper is accepted or registration is complete, submit your Paper ID, passport full name, date of birth, nationality, and passport number to info@amlis2027.org. Official letters bearing the conference seal and organizing secretariat details are issued as digital PDFs within 2–3 business days.'
    },
    {
      id: 'travel-2',
      category: 'Travel & Visa',
      question: 'Which Australian visa subclass should international delegates apply for?',
      answer: 'Most international academic attendees travel under a Visitor Visa (Subclass 600 - Business Visitor stream) or an Electronic Travel Authority (ETA Subclass 601 / eVisitor Subclass 651), depending on passport eligibility. Because international visa processing times vary significantly, we strongly recommend submitting your visa application at least 8 to 12 weeks before June 2027.'
    },
    {
      id: 'travel-3',
      category: 'Travel & Visa',
      question: 'How do I travel from Sydney Kingsford Smith Airport (SYD) to the conference venue?',
      answer: 'Sydney Airport (SYD) is located just 8 km south of the Central Business District (CBD). The Airport Link train (T8 line) departs every 10 minutes from both International (T1) and Domestic (T2/T3) stations, arriving at Central Station in approximately 13 minutes. Licensed taxis and rideshare services (Uber) take 20–35 minutes depending on traffic conditions.'
    },
    {
      id: 'travel-4',
      category: 'Travel & Visa',
      question: 'Are special room blocks and rates available at partner hotels?',
      answer: 'Yes. The organizing committee has secured negotiated academic rates with selected 4-star and 5-star partner hotels located within 5–15 minutes walking distance of the venue in the Sydney CBD and Darling Harbour precinct. Discount codes and direct reservation links are provided in your registration confirmation email.'
    },
    {
      id: 'travel-5',
      category: 'Travel & Visa',
      question: 'How does local public transportation operate in Sydney (trains, light rail, ferries)?',
      answer: 'Sydney operates on the fully integrated contactless Opal transit network. Delegates do not need to buy paper transit cards—you can simply tap on and tap off at turnstiles, light rail platforms, ferry wharves, and buses using any contactless credit card, debit card, or smartphone wallet (Apple Pay / Google Wallet).'
    },

    // Conference & Policies
    {
      id: 'policy-1',
      category: 'Conference & Policies',
      question: 'What are the time limits and slide formatting rules for Oral Presentations?',
      answer: 'Oral technical sessions allocate 20 minutes per paper: 15 minutes of empirical presentation followed by 5 minutes for audience Q&A. Slides must be formatted in standard 16:9 widescreen aspect ratio (Microsoft PowerPoint .pptx or PDF format) and uploaded to the session room technician at least 15 minutes prior to the start of the scheduled session block.'
    },
    {
      id: 'policy-2',
      category: 'Conference & Policies',
      question: 'What are the dimensions and display guidelines for Poster Presentations?',
      answer: 'Posters must be printed in standard A0 Portrait orientation (841 mm wide × 1189 mm high). Poster boards, velcro adhesives, and mounting pins will be provided on-site in the Grand Exhibition Foyer. At least one designated author must stand by the poster during the allocated 90-minute interactive evaluation session.'
    },
    {
      id: 'policy-3',
      category: 'Conference & Policies',
      question: 'Can authors present virtually if they face unexpected travel restrictions?',
      answer: 'AMLIS 2027 supports a dedicated Virtual Presentation tier for international authors facing documented visa delays, travel restrictions, or medical circumstances. Virtual presenters submit a pre-recorded 15-minute video lecture in advance and must connect live online via the conference platform during their scheduled session slot for peer Q&A.'
    },
    {
      id: 'policy-4',
      category: 'Conference & Policies',
      question: 'What are the dietary and accessibility accommodations provided at the venue?',
      answer: 'The conference venue is 100% wheelchair accessible with ramp entries, accessible elevators, and hearing-loop infrastructure. During registration, delegates can select dietary options including Halal-certified meals, vegetarian, vegan, gluten-free, or specific allergen precautions. All official luncheons, tea breaks, and the Gala Dinner cater for these preferences.'
    },
    {
      id: 'policy-5',
      category: 'Conference & Policies',
      question: 'What publication and IEEE indexing criteria apply to accepted manuscripts?',
      answer: 'All papers that are accepted, registered, and presented at AMLIS 2027 will be submitted for inclusion in IEEE Xplore and indexed in major scientific databases including Scopus and Web of Science. In accordance with standard IEEE non-presentation policy, papers that are not presented at the conference ("no-show" papers) will be excluded from the final proceedings.'
    }
  ];

  // Filtered FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === 'All' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="ATTENDEE HUB"
        title="Conference Logistics & Venue Guide"
        description="Essential travel directions, venue access, hotel room blocks, visa invitation procedures, and presentation requirements for delegates attending AMLIS 2027 in Sydney, Australia."
        breadcrumbCurrent="Information"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. VENUE & HOST CITY OVERVIEW (LIGHT)
          Matches Home Page 2-column layout
      ========================================================= */}
      <section id="section-info-venue" className="section-info-venue conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Venue Details */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                  Host City & Precinct
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                  Sydney, New South Wales, Australia
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                AMLIS 2027 will convene in <strong className="text-slate-900 font-semibold">{config.venueText}</strong>, located in Sydney, Australia. Recognized as a world-leading hub of technological research, biomedical innovation, and academic scholarship, Sydney offers an extraordinary backdrop for global scientific exchange.
              </p>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                The conference venue features state-of-the-art keynote auditoriums, multimedia breakout seminar rooms, exhibition networking foyers, and full accessibility accommodations.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{config.venueText}</span>
                </div>
                <p className="text-[11px] text-slate-500 pl-6">
                  Sydney, NSW 2000, Australia · Walking distance to central transit stations, Darling Harbour, and Chinatown dining precincts.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('/registration')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Register as Delegate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Contact Logistics</span>
                </button>
              </div>
            </div>

            {/* Right: Venue Preview Image & Fast Facts Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs aspect-16/10 bg-slate-900">
                <img
                  src={conferenceHallImg}
                  alt="Conference Venue Hall"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[9.5px] font-bold text-cyan-300 uppercase tracking-widest block mb-0.5">
                      World-Class Facilities
                    </span>
                    <h3 className="text-sm font-bold">Main Plenary Auditorium & Breakout Halls</h3>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block mb-0.5">Capacity</span>
                  <span className="text-xs font-bold text-slate-900 block">500+ Attendees</span>
                  <span className="text-[10.5px] text-slate-400">Auditorium & 4 session rooms</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-2xs">
                  <span className="text-[10px] font-bold text-blue-600 uppercase block mb-0.5">Audiovisual</span>
                  <span className="text-xs font-bold text-slate-900 block">Dual 4K Laser Display</span>
                  <span className="text-[10.5px] text-slate-400">Integrated podium streaming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. ATTENDEE TRAVEL & LOGISTICS (SLATE TINT)
          4 Cards matching Home Page Section 4 & 8
      ========================================================= */}
      <section id="section-info-logistics" className="section-info-logistics conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Travel Logistics
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Arrival, Accommodation & Visa Guidance
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Essential orientation for domestic and international researchers traveling to Sydney.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Airport & Transit */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Plane className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Airport Transit</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Sydney Kingsford Smith Airport (SYD) is located 8 km from the CBD. The Airport Link train connects directly to Central Station in 13 minutes.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <Train className="w-3 h-3" />
                <span>Airport Link Train (T8)</span>
              </div>
            </div>

            {/* Card 2: Accommodation */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Hotel className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Hotel Room Blocks</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Negotiated academic discount rates will be available at partner hotels in the Sydney CBD and Darling Harbour precinct for registered delegates.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <Building className="w-3 h-3" />
                <span>CBD & Darling Harbour</span>
              </div>
            </div>

            {/* Card 3: Visa Assistance */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Visa Invitation Letter</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  International delegates requiring an Australian visitor or business visa (Subclass 600 or 601 ETA) can request an official conference invitation letter.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>Issued upon registration</span>
              </div>
            </div>

            {/* Card 4: Local Mobility */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">Public Mobility (Opal)</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                  Sydney features contactless payment across trains, light rail, ferries, and buses using any credit/debit card or digital phone wallet.
                </p>
              </div>
              <div className="pt-2.5 border-t border-slate-100 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <Navigation className="w-3 h-3" />
                <span>Contactless tap-on</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. PRESENTATION GUIDELINES & RIGOR (LIGHT)
          Matches Home Page Quality & Rigor style
      ========================================================= */}
      <section id="section-info-guidelines" className="section-info-guidelines conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Speaker Protocols
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Presentation & Session Guidelines
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Technical presentation standards for oral lecturers and poster presenters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Oral Presentation Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Oral Technical Presentations</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Each oral paper is allocated a 20-minute slot consisting of 15 minutes for the presentation and 5 minutes for peer Q&A.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Slides must be in 16:9 widescreen format (PDF or PowerPoint .pptx).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Upload slides to the session room technician 15 minutes before session commencement.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Presenter bio (under 100 words) provided to the Session Chair beforehand.</span>
                </div>
              </div>
            </div>

            {/* Poster Presentation Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Interactive Poster Sessions</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Posters will be displayed in the Grand Foyer during designated 90-minute interactive sessions with delegates.
              </p>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Poster dimensions: Standard A0 Portrait (841 mm wide × 1189 mm high).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Mounting materials (pins and velcro strips) provided on-site at each board.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>At least one designated co-author must stand by the poster during active judging.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. ACCESSIBILITY, SAFETY & INCLUSION (DARK NAVY #07153b)
          Matches Home Page Section 5 & 10
      ========================================================= */}
      <section id="section-info-inclusion" className="section-info-inclusion conference-section conference-section-dark py-14 sm:py-18 bg-[#07153b] text-white border-b border-blue-950 relative overflow-hidden text-left">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase block">
                Code of Conduct & Inclusion
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                Accessibility, Health & Inclusive Environment
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                AMLIS 2027 is committed to providing a secure, professional, and accessible environment for all participants. All convention halls, auditoriums, and banquet dining spaces are fully wheelchair accessible. Halal, vegetarian, and dietary preferences will be catered during all official meal breaks.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Accessibility className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Wheelchair Accessible Facilities</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Zero-Tolerance Harassment Policy</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Special Accommodations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FREQUENTLY ASKED QUESTIONS (LIGHT)
          Addresses Registration, Travel & Visas, and Conference Policies
      ========================================================= */}
      <section id="section-info-faqs" className="section-info-faqs conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Help & Knowledge Base
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Direct guidance regarding registration tiers, Australian visas, travel transit, and presentation policies.
            </p>
          </div>

          {/* Controls: Category Tabs & Search Box */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search queries (e.g. visa, student, hotel)..."
                className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-200 bg-blue-50/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase tracking-wider">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug pt-0.5">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100/80">
                      <p className="pt-3 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="p-10 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                  No questions found matching your search
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  Try another keyword or select "All" to view all available questions.
                </p>
              </div>
            )}
          </div>

          {/* Quick Support Desk Banner to Reduce Tickets */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  Still have questions regarding your participation?
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Our Secretariat team is ready to assist with custom visa letters, wire transfer confirmations, or special requests.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <span>Contact Secretariat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
