import React from 'react';
import {
  Trophy,
  GraduationCap,
  Star,
  ShieldCheck,
  Check,
  Calendar,
  Gift,
  ArrowRight,
  Award
} from 'lucide-react';
import { useConference } from '../context';
import { CtaBanner, PageHero } from '../components';

interface AwardsPageProps {
  onNavigate: (path: string) => void;
}

export const AwardsPage: React.FC<AwardsPageProps> = ({ onNavigate }) => {
  const { awards, dates, setActiveModal } = useConference();

  const confDates = dates.find(d => d.id === 'date-5')?.dateStr || '02 – 04 June 2027';

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="ACADEMIC HONORS"
        title="Conference Awards & Recognition"
        description="AMLIS 2027 honors outstanding scientific contributions, breakthrough discoveries, and distinguished academic presentations advancing machine learning and intelligent systems."
        breadcrumbCurrent="Awards"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. AWARDS RECOGNITION (LIGHT)
          Matches Home Page card styling
      ========================================================= */}
      <section id="section-awards-honors" className="section-awards-honors conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Competitive Honors
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Recognizing Research Excellence
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Bestowed by the Technical Program Committee to celebrate seminal research papers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award) => {
              const renderIcon = () => {
                switch (award.iconName) {
                  case 'Trophy':
                    return <Trophy className="w-5 h-5 text-amber-500" />;
                  case 'GraduationCap':
                    return <GraduationCap className="w-5 h-5 text-blue-600" />;
                  case 'Star':
                    return <Star className="w-5 h-5 text-amber-400" />;
                  default:
                    return <ShieldCheck className="w-5 h-5 text-blue-600" />;
                }
              };

              return (
                <div
                  key={award.id}
                  className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-center mb-4">
                      {renderIcon()}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">{award.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                      {award.description}
                    </p>

                    <div className="space-y-2.5 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 mb-4">
                      <div>
                        <span className="font-semibold text-slate-900 block mb-0.5 text-[11px] uppercase tracking-wider">
                          Eligibility Scope:
                        </span>
                        <span className="text-slate-600">{award.eligibility}</span>
                      </div>
                      <div className="pt-2 border-t border-slate-200/60">
                        <span className="font-semibold text-slate-900 block mb-0.5 text-[11px] uppercase tracking-wider">
                          Evaluation Criteria:
                        </span>
                        <span className="text-slate-600">{award.criteria}</span>
                      </div>
                    </div>
                  </div>

                  {award.benefits && (
                    <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-700 font-semibold">
                      <Gift className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{award.benefits}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. AWARDS CEREMONY & GALA (PRESTIGE DARK: #061230)
          Matches Home Page Section 10
      ========================================================= */}
      <section id="section-awards-ceremony" className="section-awards-ceremony conference-section conference-section-dark py-16 sm:py-20 bg-[#061230] text-white border-b border-blue-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase block mb-1">
                Official Ceremony
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                Gala Awards Presentation at AMLIS 2027
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 max-w-xl leading-relaxed font-normal">
                Award winners will be officially unveiled and presented with commemorative engraved crystal plaques and certificates during the Closing & Gala Dinner Banquet in Sydney.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center shrink-0 min-w-[200px]">
              <Calendar className="w-6 h-6 text-amber-400 mx-auto mb-1.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                Ceremony Date
              </span>
              <span className="text-sm font-extrabold text-white mt-0.5 block">{confDates}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
