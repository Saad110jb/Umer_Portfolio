import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from './AnimatedLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Brand & Profile */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <AnimatedLogo size={36} className="shrink-0" />
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                Muhammad Umar Farooq
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Enterprise Delivery Director, Solutions Architect & AI Systems Engineer leading mission-critical transformation across Oceania and EMEA markets.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono rounded border border-slate-200 dark:border-slate-700">
                Dynamics 365
              </span>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono rounded border border-slate-200 dark:border-slate-700">
                Power Platform
              </span>
              <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono rounded border border-slate-200 dark:border-slate-700">
                Azure OpenAI
              </span>
              <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold rounded border border-emerald-300 dark:border-emerald-800">
                TOGAF Certified
              </span>
            </div>
          </div>

          {/* Column 2: Hubs & Presence */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold block">
              Hubs & Presence
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-slate-200 font-semibold">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">location_on</span>
                <span>Melbourne, Australia</span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block pl-5">APAC Practice Hub</span>
              <div className="flex items-center gap-1.5 text-slate-900 dark:text-slate-200 font-semibold pt-1">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">location_on</span>
                <span>Dubai, UAE</span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block pl-5">EMEA Executive Office</span>
            </div>
          </div>

          {/* Column 3: Executive Network */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold block">
              Executive Network
            </span>
            <div className="space-y-1.5 text-xs font-medium">
              <a
                href="https://linkedin.com/in/amifar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                <span>LinkedIn Executive Network</span>
              </a>
              <a
                href="https://github.com/Saad110jb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                <span>GitHub Architecture Repositories</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
                <span className="material-symbols-outlined text-sm">group</span>
                <span>Microsoft Tech Community</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Muhammad Umar Farooq. Enterprise Architecture Portfolio. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">Confidential & Proprietary</span>
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1">
              <span>Executive Inquiry</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
