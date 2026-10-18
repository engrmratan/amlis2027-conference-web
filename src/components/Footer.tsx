import React from 'react';
import { Calendar, MapPin, Mail, Building, Globe, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="site-footer bg-[#050e26] text-slate-300 pt-16 pb-12 border-t border-blue-950">
      <div className="footer-container max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Info (Span 2 on lg) */}
          <div className="footer-brand-column lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLinkClick('/')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <Logo lightMode={true} />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>02 – 04 JUNE 2027</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>SYDNEY, AUSTRALIA</span>
              </div>
            </div>
          </div>

          {/* Column 2: CONFERENCE */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">
              Conference
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleLinkClick('/about')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/important-dates')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Important Dates
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/call-for-papers')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Call for Papers
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/awards')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Awards
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/program')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Program
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: AUTHORS */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">
              Authors
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleLinkClick('/submission')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Submission
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/submit-paper')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Paper Requirements
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/submission')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Review Process
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/registration')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Registration
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/accepted-papers')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Proceedings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONFERENCE MANAGEMENT */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">
              Conference Management
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>GCSTMR: Sydney, Australia</span>
              </li>
              <li className="flex items-start gap-2">
                <Building className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>IEEE NSW Section</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:info@icamlis.org" className="hover:text-blue-400 transition-colors">
                  info@icamlis.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2027 AMLIS. All rights reserved.
          </div>
          <div className="text-slate-400 text-[11px]">
            Advancing Machine Learning & Intelligent Systems
          </div>
        </div>
      </div>
    </footer>
  );
};
