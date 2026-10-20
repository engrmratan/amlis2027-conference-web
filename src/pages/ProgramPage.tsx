import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Download,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Presentation,
  FileText,
  Users,
  Award,
  Video,
  Monitor
} from 'lucide-react';
import { useConference } from '../context';
import { CtaBanner, PageHero } from '../components';

interface ProgramPageProps {
  onNavigate: (path: string) => void;
}

export const ProgramPage: React.FC<ProgramPageProps> = ({ onNavigate }) => {
  const { programSessions, config, setActiveModal } = useConference();
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const categories = ['All', 'Keynote', 'Technical Session', 'Ceremony', 'Workshop', 'Break'];

  const filteredSessions = useMemo(() => {
    return programSessions.filter(s => {
      if (s.day !== selectedDay) return false;
      if (selectedCategory !== 'All' && s.category !== selectedCategory) return false;
      return true;
    });
  }, [programSessions, selectedDay, selectedCategory]);

  const handleDownloadProgram = () => {
    const textContent = `AMLIS 2027 - Complete Conference Schedule
2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems
Dates: ${config.datesText}
Venue: ${config.venueText}

DAY 1 - 02 June 2027
08:30 - 09:30 AM: Registration & Welcome Coffee (Grand Foyer)
09:30 - 10:30 AM: Opening Ceremony & Presidential Address (Auditorium Hall A)
10:45 - 12:00 PM: Keynote I: The Next Frontier of Generative AI (Auditorium Hall A)
01:30 - 03:30 PM: Technical Session 1: Machine Learning & Optimization (Room 101)

DAY 2 - 03 June 2027
09:30 - 11:00 AM: Keynote II: Trustworthy AI, Explainability & Societal Impact (Auditorium Hall A)
02:00 - 04:30 PM: Technical Sessions 2 & 3: Computer Vision & Intelligent Systems (Rooms 102 & 103)

DAY 3 - 04 June 2027
10:00 - 12:30 PM: Technical Session 4: NLP & Big Data Science (Room 101)
03:30 - 05:00 PM: Awards Ceremony & Closing Remarks (Auditorium Hall A)
`;
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AMLIS_2027_Conference_Schedule.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setPdfDownloaded(true);
    setTimeout(() => setPdfDownloaded(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="TECHNICAL PROGRAM"
        title="Conference Program & Daily Agenda"
        description="Explore the three-day academic agenda including keynote lectures, peer-reviewed technical sessions, hands-on workshops, and ceremonial gatherings in Sydney."
        breadcrumbCurrent="Program"
        onNavigate={onNavigate}
      >
        <button
          onClick={handleDownloadProgram}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{pdfDownloaded ? 'Schedule Downloaded' : 'Download Complete Schedule'}</span>
        </button>
      </PageHero>

      {/* =========================================================
          1. DAILY SCHEDULE & SESSIONS (LIGHT)
          Matches Home Page card styling & typography
      ========================================================= */}
      <section id="section-program-agenda" className="section-program-agenda conference-section conference-section-light py-14 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Chronological Schedule
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Three Days of Scientific Exchange
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              All session times are Australian Eastern Standard Time (AEST, UTC+10).
            </p>
          </div>

          {/* Day Navigation Tabs & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-200">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
              {[
                { day: 1, label: 'Day 1 — 02 June 2027' },
                { day: 2, label: 'Day 2 — 03 June 2027' },
                { day: 3, label: 'Day 3 — 04 June 2027' },
              ].map((d) => (
                <button
                  key={d.day}
                  onClick={() => setSelectedDay(d.day)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    selectedDay === d.day
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[11px] font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {pdfDownloaded && (
            <div className="p-3.5 mb-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full conference schedule file downloaded successfully!</span>
            </div>
          )}

          {/* Session Cards */}
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                      {session.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Day {session.day} · {session.date}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {session.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {session.description}
                  </p>

                  {session.speaker && (
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium pt-1">
                      <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Distinguished Speaker: <strong className="text-slate-900">{session.speaker}</strong></span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col md:items-end justify-center shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 text-xs text-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{session.startTime} – {session.endTime}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{session.timezone}</span>
                  <div className="flex items-center gap-1.5 text-slate-600 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{session.venue}</span>
                  </div>
                </div>
              </div>
            ))}

            {filteredSessions.length === 0 && (
              <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-800">No sessions match this filter</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try switching the category filter to All or select another conference day.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          2. PRESENTATION FORMATS & SESSION ARCHITECTURE (SLATE TINT)
          4 Cards matching Home Page Tracks & Pathways
      ========================================================= */}
      <section id="section-program-formats" className="section-program-formats conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Format Scope
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Session Formats & Delivery Models
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Designed to foster high-depth scientific discourse and peer networking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                <Presentation className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Plenary Keynotes</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Hour-long keynote presentations by global pioneers in generative architectures and autonomous intelligence.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                <Monitor className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Oral Presentations</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                20-minute rigor sessions: 15-minute empirical lectures followed by 5 minutes of targeted attendee Q&A.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Interactive Posters</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Face-to-face visual demonstrations and direct methodology discussions in the central exhibition foyer.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 mb-1">Gala & Awards</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Conferral of Best Paper, Best Student Paper, and Innovation Awards during the Sydney Harbour gala dinner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SYDNEY GALA & NETWORKING IMMERSION (DARK NAVY #07153b)
          Matches Home Page Section 5 & 10
      ========================================================= */}
      <section id="section-program-banquet" className="section-program-banquet conference-section conference-section-dark py-14 sm:py-18 bg-[#07153b] text-white border-b border-blue-950 relative overflow-hidden text-left">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase block">
                Social Program & Networking
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                Conference Banquet & Industry Reception
              </h2>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal max-w-2xl">
                Beyond scientific paper sessions, AMLIS 2027 hosts an official Welcome Reception and a Gala Dinner Banquet overlooking Sydney Harbour, uniting academic department chairs, industry AI executives, and promising young scholars.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Thursday, 03 June 2027 · 06:30 PM AEST</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Grand Ballroom · Sydney Harbour Precinct</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('/registration')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Reserve Banquet Pass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
