import React from 'react';

interface LogoProps {
  lightMode?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ lightMode = false, className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Stylized Neural Node Icon */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="url(#logo_grad)" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
          <circle cx="20" cy="20" r="6" fill="url(#logo_grad)" />
          <circle cx="20" cy="7" r="3" fill="#2563eb" />
          <circle cx="20" cy="33" r="3" fill="#3b82f6" />
          <circle cx="7" cy="20" r="3" fill="#6366f1" />
          <circle cx="33" cy="20" r="3" fill="#0ea5e9" />
          <circle cx="10" cy="11" r="2.5" fill="#4f46e5" />
          <circle cx="30" cy="11" r="2.5" fill="#38bdf8" />
          <circle cx="10" cy="29" r="2.5" fill="#818cf8" />
          <circle cx="30" cy="29" r="2.5" fill="#2563eb" />
          <path d="M20 14V7 M20 26V33 M14 20H7 M26 20H33 M15 15L10 11 M25 15L30 11 M15 25L10 29 M25 25L30 29" stroke="url(#logo_grad)" strokeWidth="1.2" opacity="0.75" />
          <defs>
            <linearGradient id="logo_grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" />
              <stop offset="0.5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-baseline gap-1.5 font-bold tracking-tight text-lg">
          <span className={lightMode ? 'text-white' : 'text-[#07153b]'}>AMLIS</span>
          <span className="text-blue-600 font-extrabold">2027</span>
        </div>
      </div>
    </div>
  );
};
