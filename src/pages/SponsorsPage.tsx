import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Send,
  Building,
  Mail,
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useConference } from '../context/ConferenceContext';
import { CtaBanner } from '../components/CtaBanner';
import { PageHero } from '../components/PageHero';

interface SponsorsPageProps {
  onNavigate: (path: string) => void;
}

export const SponsorsPage: React.FC<SponsorsPageProps> = ({ onNavigate }) => {
  const { sponsors, config, sendMessage, setActiveModal } = useConference();

  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [tierInterest, setTierInterest] = useState('Platinum Sponsor');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !email) return;

    setSubmitting(true);
    await sendMessage(
      contactName,
      email,
      'Sponsorship Enquiries',
      `Sponsorship Inquiry: ${tierInterest} (${orgName})`,
      `Organization: ${orgName}\nContact Person: ${contactName}\nInterested Tier: ${tierInterest}\nMessage:\n${message}`
    );
    setSubmitting(false);
    setSubmitted(true);
  };

  const sponsorshipTiers = [
    {
      name: 'Platinum Sponsor',
      fee: 'To Be Announced',
      features: [
        'Premier exhibition booth in Grand Foyer',
        'Special 20-minute industry keynote slot',
        '5 complimentary full conference registrations',
        'Prominent logo on conference website and program banner',
        'Promotional flyers included in conference attendee kit',
        'Recognition during Opening and Gala Ceremonies'
      ]
    },
    {
      name: 'Gold Sponsor',
      fee: 'To Be Announced',
      features: [
        'Dedicated exhibition space in the networking hall',
        '3 complimentary full conference registrations',
        'Logo placement on website and proceedings front matter',
        'Company promotional video during technical session breaks',
        'Formal acknowledgment at the conference reception'
      ]
    },
    {
      name: 'Silver Sponsor',
      fee: 'To Be Announced',
      features: [
        'Tabletop exhibition display in central forum',
        '2 complimentary full registrations',
        'Logo in the conference program book and website',
        'Flyer insert in official delegate bag'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="PARTNERS & SUPPORTERS"
        title="Conference Sponsors & Academic Partners"
        description="We express sincere appreciation to our distinguished corporate sponsors, academic co-organizers, and institutional partners supporting the advancement of machine learning and intelligent systems research."
        breadcrumbCurrent="Sponsors"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. CONFIRMED SPONSORS & CO-ORGANIZERS (LIGHT)
          Matches Home Page Section 11 partner badges
      ========================================================= */}
      <section id="section-sponsors-confirmed" className="section-sponsors-confirmed conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Official Backing
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Confirmed Sponsors & Co-Organizers
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Institutional and technical entities collaborating to produce AMLIS 2027.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex flex-col items-center justify-center text-center min-h-[120px]"
              >
                <span className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                  {sponsor.name === 'IEEE' ? '❖ IEEE' : sponsor.name}
                </span>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-lg uppercase tracking-wider mt-2">
                  {sponsor.tier}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. SPONSORSHIP PACKAGES (SLATE TINT)
          Matches Home Page card styling
      ========================================================= */}
      <section id="section-sponsors-tiers" className="section-sponsors-tiers conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Partnership Tiers
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Sponsorship Opportunities
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Connect your brand with international researchers, academic leaders, and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                    Tier {idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{tier.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold mb-4">Investment: {tier.fee}</p>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100 mb-6">
                    {tier.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setTierInterest(tier.name);
                    const form = document.getElementById('section-sponsors-inquiry');
                    form?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
                >
                  Enquire About {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SPONSORSHIP INQUIRY FORM (LIGHT)
          Matches Home Page institutional inquiry form
      ========================================================= */}
      <section id="section-sponsors-inquiry" className="section-sponsors-inquiry conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-left">
          <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs">
            <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1 text-center">
              Direct Contact
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#07153b] tracking-tight mb-1 text-center">
              Request Partnership Prospectus
            </h2>
            <p className="text-xs text-slate-500 text-center mb-6">
              Submit your organization's details to receive the comprehensive AMLIS 2027 sponsorship kit.
            </p>

            {submitted ? (
              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Inquiry Received</h4>
                <p className="text-xs text-slate-600">
                  Thank you for your interest. The Sponsorship Chair will contact you shortly with the formal prospectus.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. DeepTech Labs"
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Dr. Jane Carter"
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Tier of Interest
                    </label>
                    <select
                      value={tierInterest}
                      onChange={(e) => setTierInterest(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Platinum Sponsor">Platinum Sponsor</option>
                      <option value="Gold Sponsor">Gold Sponsor</option>
                      <option value="Silver Sponsor">Silver Sponsor</option>
                      <option value="Supporting Partner">Supporting Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Message / Custom Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your organization or custom exhibition requirements..."
                    className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Submitting...' : 'Submit Sponsorship Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
