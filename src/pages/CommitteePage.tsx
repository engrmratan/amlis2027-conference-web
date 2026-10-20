import React, { useState, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  MapPin,
  Building,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import { useConference } from '../context';
import { CtaBanner, PageHero } from '../components';

interface CommitteePageProps {
  onNavigate: (path: string) => void;
}

export const CommitteePage: React.FC<CommitteePageProps> = ({ onNavigate }) => {
  const { committee, setActiveModal } = useConference();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: string[] = [
    'All',
    'General Chairs',
    'General Co-Chairs',
    'Technical Program Committee',
    'Organizing Committee',
    'Advisory Committee',
    'Publication Chairs',
    'Publicity Chairs'
  ];

  const filteredMembers = useMemo(() => {
    return committee.filter(m => {
      if (selectedCategory !== 'All' && m.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = m.name.toLowerCase().includes(q);
        const matchAffil = m.affiliation.toLowerCase().includes(q);
        const matchCountry = m.country.toLowerCase().includes(q);
        const matchRole = m.position.toLowerCase().includes(q);
        if (!matchName && !matchAffil && !matchCountry && !matchRole) return false;
      }
      return true;
    });
  }, [committee, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="LEADERSHIP & EDITORIAL BOARD"
        title="Organizing & Technical Committee"
        description="Meet the distinguished international scholars, researchers, and technical program leaders guiding the scientific direction and peer evaluation of AMLIS 2027."
        breadcrumbCurrent="Committee"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. FILTER & SEARCH CONTROLS (LIGHT)
          Matches Home Page directory filtering
      ========================================================= */}
      <section id="section-committee-filters" className="section-committee-filters conference-section conference-section-light py-6 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scholar or institution..."
                className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. COMMITTEE DIRECTORY GRID (SLATE TINT)
          Matches Home Page Section 9
      ========================================================= */}
      <section id="section-committee-directory" className="section-committee-directory conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-1">
                Academic Leadership
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#07153b] tracking-tight">
                Editorial Board & Program Chairs
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm sm:text-right font-normal">
              Showing {filteredMembers.length} distinguished committee members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative mb-4 aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[9.5px] font-bold text-slate-900 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-lg border border-slate-200 shadow-2xs uppercase tracking-wider block">
                        {member.position}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-blue-600 font-semibold mt-0.5">{member.title}</p>

                  <div className="space-y-1 pt-3 mt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <div className="flex items-start gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{member.affiliation}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{member.country}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-normal">
                  <span className="truncate">{member.category}</span>
                  {member.profileUrl && member.profileUrl !== '#' && (
                    <a
                      href={member.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1 shrink-0 font-medium"
                    >
                      Profile <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs max-w-md mx-auto">
              <Users className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-slate-800">No committee members found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for a different researcher or selecting "All" categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
