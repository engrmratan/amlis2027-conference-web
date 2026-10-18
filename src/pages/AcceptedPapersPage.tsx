import React, { useState, useMemo } from 'react';
import {
  FileText,
  Users,
  Layers,
  Globe,
  Search,
  ArrowRight,
  Filter,
  RotateCcw,
  Info,
  X
} from 'lucide-react';
import { useConference } from '../context/ConferenceContext';
import { TrackIcon } from '../components/TrackIcon';
import { CtaBanner } from '../components/CtaBanner';
import { PageHero } from '../components/PageHero';
import { AcceptedPaperItem } from '../types/conference';

interface AcceptedPapersPageProps {
  onNavigate: (path: string) => void;
}

export const AcceptedPapersPage: React.FC<AcceptedPapersPageProps> = ({ onNavigate }) => {
  const { tracks, papers, setActiveModal } = useConference();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'title' | 'author' | 'track'>('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [viewingPaper, setViewingPaper] = useState<AcceptedPaperItem | null>(null);

  const paperTypes = ['Full Paper', 'Short Paper', 'Poster Paper', 'Workshop Paper'];

  const toggleTrack = (trackTitle: string) => {
    setSelectedTracks(prev =>
      prev.includes(trackTitle) ? prev.filter(t => t !== trackTitle) : [...prev, trackTitle]
    );
    setCurrentPage(1);
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTracks([]);
    setSelectedTypes([]);
    setSortBy('recent');
    setCurrentPage(1);
  };

  // Filter & sort papers
  const filteredPapers = useMemo(() => {
    return papers
      .filter(paper => {
        if (!paper.isPublished) return false;

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = paper.title.toLowerCase().includes(q);
          const matchAuthors = paper.authors.toLowerCase().includes(q);
          const matchTrack = paper.track.toLowerCase().includes(q);
          const matchId = paper.paperId?.toLowerCase().includes(q);
          if (!matchTitle && !matchAuthors && !matchTrack && !matchId) return false;
        }

        // Track filter
        if (selectedTracks.length > 0 && !selectedTracks.includes(paper.track)) {
          return false;
        }

        // Type filter
        if (selectedTypes.length > 0 && !selectedTypes.includes(paper.type)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'author') return a.authors.localeCompare(b.authors);
        if (sortBy === 'track') return a.track.localeCompare(b.track);
        return 0; // recent
      });
  }, [papers, searchQuery, selectedTracks, selectedTypes, sortBy]);

  const totalPages = Math.ceil(filteredPapers.length / pageSize) || 1;
  const paginatedPapers = filteredPapers.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO HEADER (Matches Home Page: dark navy banner with cyan uppercase badge) */}
      <PageHero
        badge="TECHNICAL DIRECTORY"
        title="Directory of Accepted Papers"
        description="Explore the comprehensive directory of peer-reviewed accepted papers, technical presentation sessions, and authors for the 2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems."
        breadcrumbCurrent="Accepted Papers"
        onNavigate={onNavigate}
      />

      {/* =========================================================
          1. DIRECTORY OVERVIEW METRICS (LIGHT)
          Matches Home Page stats styling
      ========================================================= */}
      <section id="section-papers-metrics" className="section-papers-metrics conference-section conference-section-light py-10 bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#07153b] leading-none block">--</span>
                <span className="text-xs font-bold text-slate-900 mt-1 block">Accepted Papers</span>
                <span className="text-[11px] text-slate-400">Under Peer Review</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#07153b] leading-none block">--</span>
                <span className="text-xs font-bold text-slate-900 mt-1 block">Registered Authors</span>
                <span className="text-[11px] text-slate-400">Global Submissions</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#07153b] leading-none block">8</span>
                <span className="text-xs font-bold text-slate-900 mt-1 block">Research Tracks</span>
                <span className="text-[11px] text-slate-400">All Topics Open</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#07153b] leading-none block">30+</span>
                <span className="text-xs font-bold text-slate-900 mt-1 block">Nations Represented</span>
                <span className="text-[11px] text-slate-400">International Scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. TWO-COLUMN SEARCH & DIRECTORY LIST (SLATE TINT)
      ========================================================= */}
      <section id="section-papers-directory" className="section-papers-directory conference-section conference-section-slate py-14 sm:py-18 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filters */}
            <div className="lg:col-span-4 space-y-5">
              {/* Search Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1 block">
                  Keywords
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-3">Search Papers</h3>
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Title, author, or paper ID..."
                    className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>

              {/* Filter by Track */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Filter by Track</h3>
                  {selectedTracks.length > 0 && (
                    <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-semibold">
                      {selectedTracks.length} selected
                    </span>
                  )}
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {tracks.map((track) => (
                    <label
                      key={track.id}
                      className="flex items-center gap-2.5 text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTracks.includes(track.title)}
                        onChange={() => toggleTrack(track.title)}
                        className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 border-slate-300"
                      />
                      <span className="truncate">{track.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter by Type */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">Paper Classification</h3>
                <div className="space-y-2">
                  {paperTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2.5 text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 border-slate-300"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">Sort Order</h3>
                <div className="space-y-2">
                  {[
                    { key: 'recent', label: 'Most Recent' },
                    { key: 'title', label: 'Title (A–Z)' },
                    { key: 'author', label: 'Author (A–Z)' },
                    { key: 'track', label: 'Track Category' },
                  ].map((option) => (
                    <label
                      key={option.key}
                      className="flex items-center gap-2.5 text-xs text-slate-700 hover:text-slate-900 cursor-pointer select-none"
                    >
                      <input
                        type="radio"
                        name="paperSort"
                        checked={sortBy === option.key}
                        onChange={() => setSortBy(option.key as any)}
                        className="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 border-slate-300"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Filter className="w-3.5 h-3.5" />
                  <span>Apply Filters</span>
                </button>
                <button
                  onClick={handleResetFilters}
                  className="w-full py-2 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            </div>

            {/* Right Paper List */}
            <div className="lg:col-span-8 space-y-4">
              {/* Header Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase block mb-0.5">
                    Search Results
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    Directory of Accepted Papers
                  </h2>
                </div>

                <div className="flex items-center gap-3 shrink-0 text-xs">
                  <span className="text-slate-500">
                    Showing {paginatedPapers.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} –{' '}
                    {Math.min(currentPage * pageSize, filteredPapers.length)} of{' '}
                    <span className="font-semibold text-slate-800">{filteredPapers.length}</span>
                  </span>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border border-slate-200 rounded-xl px-2.5 py-1 text-xs text-slate-700 bg-white focus:outline-none focus:border-blue-500"
                  >
                    <option value={10}>10 / page</option>
                    <option value={20}>20 / page</option>
                    <option value={50}>50 / page</option>
                  </select>
                </div>
              </div>

              {/* Papers List */}
              <div className="space-y-3">
                {paginatedPapers.map((paper, index) => {
                  const itemNumber = String((currentPage - 1) * pageSize + index + 1).padStart(2, '0');
                  const trackObj = tracks.find(t => t.title === paper.track);

                  return (
                    <div
                      key={paper.id}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg shrink-0">
                          {itemNumber}
                        </span>
                        <div>
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {paper.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1">
                            Authors: <span className="text-slate-700 font-medium">{paper.authors}</span>
                          </p>
                          {paper.paperId && (
                            <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                              Paper ID: {paper.paperId}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200">
                          <TrackIcon name={trackObj?.iconName || 'Brain'} className="w-3.5 h-3.5 text-blue-600" />
                          <span>{paper.track}</span>
                        </div>

                        <button
                          onClick={() => setViewingPaper(paper)}
                          className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 border border-blue-200 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1"
                        >
                          <span>View Abstract</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {filteredPapers.length === 0 && (
                  <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs">
                    <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-slate-800">No accepted papers published yet</h3>
                    <p className="text-xs text-slate-500 mt-1 mb-4">
                      The peer review process is currently active. Accepted papers will appear here upon completion of review decisions on 28 February 2027.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-center gap-1 text-xs">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
                  >
                    &lt;
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`w-8 h-8 rounded-xl font-semibold transition-colors cursor-pointer ${
                        currentPage === p
                          ? 'bg-blue-600 text-white shadow-2xs'
                          : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Viewing Paper Modal */}
      {viewingPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 z-10 border border-slate-200 text-left">
            <button
              onClick={() => setViewingPaper(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg uppercase tracking-wider">
              {viewingPaper.type}
            </span>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 mb-1">
              {viewingPaper.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Authors: <span className="text-slate-800 font-medium">{viewingPaper.authors}</span>
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-4 text-xs text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-900 mb-1">Abstract:</p>
              {viewingPaper.abstract || 'Detailed abstract will be available upon publication.'}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span>Track: <strong className="text-slate-800">{viewingPaper.track}</strong></span>
              <button
                onClick={() => setViewingPaper(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <CtaBanner onNavigate={onNavigate} onSubmitClick={() => setActiveModal('submissionPortal')} />
    </div>
  );
};
