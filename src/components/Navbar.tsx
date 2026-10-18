import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Home,
  FileText,
  Send,
  Calendar,
  Sparkles,
  Award,
  Users,
  BookOpen,
  MapPin,
  Mail,
  Info,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSubmitModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSubmitModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Primary Desktop Nav Items
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Call for Papers', path: '/call-for-papers' },
    { label: 'Submission', path: '/submission' },
    { label: 'Registration', path: '/registration' },
    { label: 'Committee', path: '/committee' },
  ];

  // Secondary Desktop "More" Items
  const moreItems = [
    { label: 'Important Deadlines', path: '/important-dates', icon: Calendar },
    { label: 'Conference Program', path: '/program', icon: Clock },
    { label: 'Venue & Travel Info', path: '/information', icon: MapPin },
    { label: 'Submit Paper Landing', path: '/submit-paper', icon: Send },
    { label: 'Accepted Papers', path: '/accepted-papers', icon: BookOpen },
    { label: 'Awards & Honors', path: '/awards', icon: Award },
    { label: 'Sponsors & Partners', path: '/sponsors', icon: Sparkles },
    { label: 'Contact Organizers', path: '/contact', icon: Mail },
  ];

  // Grouped Menu Items for the Full Mobile Navigation Drawer
  const menuSections = [
    {
      title: 'Conference Essentials',
      items: [
        { label: 'Home', path: '/', icon: Home, desc: 'Conference overview & highlights' },
        { label: 'About AMLIS 2027', path: '/about', icon: Info, desc: 'Mission, scope & academic tracks' },
        { label: 'Organizing Committee', path: '/committee', icon: Users, desc: 'Honorary, General & TPC Chairs' },
        { label: 'Venue & Travel Info', path: '/information', icon: MapPin, desc: 'Sydney venue, accommodation & VISA' },
      ]
    },
    {
      title: 'Authors & Papers',
      items: [
        { label: 'Call for Papers', path: '/call-for-papers', icon: FileText, desc: 'Topics, tracks & publication guidelines' },
        { label: 'Submission Guidelines', path: '/submission', icon: Send, desc: 'Paper formatting & IEEE specifications' },
        { label: 'Author Submission Portal', path: '/submit-paper', icon: Sparkles, desc: 'Direct portal to upload paper draft' },
        { label: 'Accepted Papers', path: '/accepted-papers', icon: BookOpen, desc: 'Directory of peer-reviewed accepted papers' },
        { label: 'Important Deadlines', path: '/important-dates', icon: Calendar, desc: 'Milestones, notification & camera-ready' },
      ]
    },
    {
      title: 'Program & Participation',
      items: [
        { label: 'Conference Program', path: '/program', icon: Clock, desc: 'Day-by-day technical sessions & keynotes' },
        { label: 'Registration & Fees', path: '/registration', icon: Layers, desc: 'Author, student & attendee tier pricing' },
        { label: 'Awards & Honors', path: '/awards', icon: Award, desc: 'Best Paper & Young Researcher awards' },
        { label: 'Sponsors & Partners', path: '/sponsors', icon: Sparkles, desc: 'Institutional patrons & technical cosponsors' },
        { label: 'Contact Secretariat', path: '/contact', icon: Mail, desc: 'Chair inquiries & conference support' },
      ]
    }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath === path) return true;
    return false;
  };

  const isMoreActive = moreItems.some(item => item.path === currentPath);

  return (
    <>
      <header
        id="site-header"
        className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#07153b] border-b border-cyan-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
            : 'bg-[#07153b]/90 backdrop-blur-md border-b border-white/10'
        }`}
      >
        {/* Top Navbar Row (80px height) */}
        <div className="navbar-container max-w-[1100px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="navbar-brand flex items-center text-left focus:outline-none group cursor-pointer shrink-0"
          >
            <Logo lightMode={true} />
          </button>

          {/* Desktop Nav Items (>= 1024px) */}
          <nav id="desktop-navigation" className="site-nav-desktop hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`px-3 py-1.5 text-[13px] font-medium transition-all duration-150 rounded-lg cursor-pointer whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-cyan-400 font-bold border-b-2 border-cyan-400 rounded-b-none'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Desktop "More" Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium transition-all duration-150 rounded-lg cursor-pointer whitespace-nowrap ${
                  isMoreActive
                    ? 'text-cyan-400 font-bold bg-white/10 border border-cyan-500/30'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#07153b] rounded-2xl shadow-2xl border border-cyan-500/30 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3.5 py-1 text-[10px] font-bold text-cyan-400 uppercase tracking-wider border-b border-white/10 mb-1">
                    Conference Options
                  </div>
                  {moreItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full flex items-center gap-3 px-3.5 py-2 text-xs transition-colors cursor-pointer ${
                          isActive(item.path)
                            ? 'text-cyan-400 font-semibold bg-white/10'
                            : 'text-slate-200 hover:text-cyan-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                          <ItemIcon className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="truncate">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Action Button (>= 1024px) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (onOpenSubmitModal) {
                  onOpenSubmitModal();
                } else {
                  handleNavClick('/submission');
                }
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Submit Paper</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile & Tablet Controls (< 1024px) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (onOpenSubmitModal) {
                  onOpenSubmitModal();
                } else {
                  handleNavClick('/submission');
                }
              }}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md shadow-blue-600/30 whitespace-nowrap cursor-pointer"
            >
              Submit
            </button>

            {/* Top Nav Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all duration-200 focus:outline-none cursor-pointer ${
                mobileMenuOpen
                  ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 ring-2 ring-cyan-400/40'
                  : 'bg-white/10 border-white/15 text-white hover:text-cyan-300 hover:bg-white/15'
              }`}
              aria-label="Toggle navigation menu"
              title="Toggle Menu Options"
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-5 h-5 text-cyan-300" />
                  <span className="text-xs font-semibold text-cyan-300">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5 text-white" />
                  <span className="text-xs font-semibold text-white">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          FULL-SCREEN MOBILE & TABLET NAVIGATION DRAWER (< 1024px)
          Guaranteed 100% visible, accessible, scrollable, and reliable
      ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col bg-[#07153b] text-white">
          {/* Drawer Header (Exact 80px matching top navbar) */}
          <div className="h-20 px-4 sm:px-6 flex items-center justify-between border-b border-cyan-500/20 bg-[#07153b] shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className="flex items-center text-left focus:outline-none cursor-pointer"
            >
              <Logo lightMode={true} />
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSubmitModal) {
                    onOpenSubmitModal();
                  } else {
                    handleNavClick('/submission');
                  }
                }}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md shadow-blue-600/30 whitespace-nowrap cursor-pointer"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan-400/40 bg-cyan-950/70 text-cyan-300 hover:bg-cyan-900/80 transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-cyan-300" />
                <span className="text-xs font-semibold">Close</span>
              </button>
            </div>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-6">
            {/* Quick Submit Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/60 to-cyan-950/60 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider font-mono">
                    Call for Papers Open
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mt-1">
                  Ready to present your research?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Submit to IEEE AMLIS 2027 by September 15, 2026.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSubmitModal) {
                    onOpenSubmitModal();
                  } else {
                    handleNavClick('/submission');
                  }
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl shadow-md cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Paper</span>
              </button>
            </div>

            {/* Menu Sections */}
            {menuSections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                    {section.title}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {section.items.length} options
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {section.items.map((item) => {
                    const ItemIcon = item.icon;
                    const active = isActive(item.path);
                    return (
                      <button
                        type="button"
                        key={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                          active
                            ? 'bg-cyan-950/90 text-cyan-300 font-bold border border-cyan-400/60 shadow-md'
                            : 'bg-slate-900/70 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                              active ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/5 text-cyan-400'
                            }`}
                          >
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs sm:text-sm font-semibold truncate block leading-tight">
                              {item.label}
                            </span>
                            <span className="text-[11px] text-slate-400 truncate block mt-0.5 font-normal">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            active ? 'text-cyan-400 translate-x-0.5' : 'text-slate-500'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quick Action Buttons */}
            <div className="pt-2 pb-6 grid grid-cols-2 gap-2.5 border-t border-white/10">
              <button
                type="button"
                onClick={() => handleNavClick('/important-dates')}
                className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold rounded-xl border border-white/15 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Important Dates</span>
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('/contact')}
                className="flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold rounded-xl border border-white/15 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Chairs</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
