import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onNavigate: (path: string) => void;
  onSubmitClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate, onSubmitClick }) => {
  return (
    <aside id="section-cta-banner" className="section-cta-banner max-w-[1100px] mx-auto px-4 sm:px-6 my-16 sm:my-20" aria-label="Conference Call to Action">
      <div className="cta-container relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#071333] via-[#0b1d4f] to-[#0a2768] p-8 sm:p-12 text-white shadow-xl border border-blue-900/50">
        {/* Subtle decorative glow & waveform SVG */}
        <div className="absolute right-0 top-0 bottom-0 w-2/3 pointer-events-none opacity-25 overflow-hidden">
          <svg viewBox="0 0 500 200" className="w-full h-full object-cover">
            <path
              d="M-50,100 C150,0 250,200 550,60"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <path
              d="M-50,130 C180,20 280,180 550,90"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1.5"
            />
            <path
              d="M-50,70 C120,40 220,160 550,30"
              fill="none"
              stroke="#818cf8"
              strokeWidth="1.5"
            />
            <circle cx="380" cy="80" r="120" fill="url(#wave_glow)" opacity="0.3" />
            <defs>
              <radialGradient id="wave_glow">
                <stop stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#071333" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10.5px] font-bold tracking-widest text-blue-400 uppercase mb-1.5 block">
              Be Part of AMLIS 2027
            </span>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white mb-2 leading-snug">
              Join a global community advancing machine learning, artificial intelligence and intelligent systems.
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed">
              Submit your paper, register for the conference and connect with researchers worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onSubmitClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-blue-900/50 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Submit Paper</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Explore More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
