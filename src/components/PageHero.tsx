import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface PageHeroProps {
  badge: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  breadcrumbCurrent?: string;
  parentBreadcrumb?: { label: string; path: string };
  onNavigate?: (path: string) => void;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  description,
  breadcrumbCurrent,
  parentBreadcrumb,
  onNavigate,
  children
}) => {
  return (
    <section id="page-hero-banner" className="page-hero-banner conference-section conference-section-dark relative overflow-hidden bg-[#07153b] text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-blue-950">
      {/* Subtle architectural cyber grid and ambient neural lighting following Home page design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        {/* Ambient warm amber & cyan radial glows */}
        <div className="absolute -top-12 right-1/4 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] rounded-full bg-gradient-to-tr from-amber-500/15 via-cyan-500/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Institutional kicker pill with animated beacon */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[10px] sm:text-xs font-semibold text-cyan-300 mb-3">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="tracking-wider uppercase">{badge}</span>
        </div>

        {/* Academic Headline with gradient highlight */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] [text-wrap:balance]">
          {typeof title === 'string' ? (
            <span>{title}</span>
          ) : (
            title
          )}
        </h1>

        {/* Description Copy */}
        {description && (
          <p className="text-xs sm:text-sm md:text-[15px] text-slate-300 font-normal mt-3 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}

        {/* Children (e.g. metadata tags, quick download buttons) */}
        {children && <div className="mt-5">{children}</div>}
      </div>
    </section>
  );
};
