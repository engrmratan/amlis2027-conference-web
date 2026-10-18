import React from 'react';
import { Megaphone, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useConference } from '../context/ConferenceContext';

export const AnnouncementBar: React.FC = () => {
  const { config } = useConference();

  if (!config.announcementActive) return null;

  return (
    <div id="site-announcement-bar" className="site-announcement-bar bg-[#07153b] text-white text-xs py-2 px-4 sm:px-6 border-b border-blue-900/40 relative z-30">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Megaphone className="w-3.5 h-3.5 text-blue-400 shrink-0 animate-bounce" />
          <span className="font-normal text-slate-200">
            {config.announcementText} <span className="text-slate-400">|</span> {config.announcementDeadlineText}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-slate-300">
          <span className="text-[11px] text-slate-400">Follow Us:</span>
          <a
            href={config.socialLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors p-0.5"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={config.socialX}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-blue-400 transition-colors p-0.5"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <a
            href={config.socialYoutube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-400 transition-colors p-0.5"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
