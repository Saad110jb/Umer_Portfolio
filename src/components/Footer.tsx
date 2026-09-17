import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from './AnimatedLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F4F1EA] dark:bg-slate-900 border-t border-slate-300/70 dark:border-slate-800 py-12 px-4 sm:px-6 lg:px-8 mt-auto text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Brand & Profile */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <AnimatedLogo size={36} className="shrink-0" />
              <h3 className="font-heading text-lg font-extrabold text-[#0B375A] dark:text-white">
                Muhammad Umar Farooq
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Enterprise Delivery Director, Solutions Architect & AI Systems Engineer leading mission-critical digital transformation initiatives across Oceania and EMEA public/private sectors.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full border border-teal-200 dark:border-teal-800">
                Dynamics 365 CE
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full border border-teal-200 dark:border-teal-800">
                Power Platform CoE
              </span>
              <span className="px-3 py-1 bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 text-xs font-semibold rounded-full border border-teal-200 dark:border-teal-800">
                Azure OpenAI
              </span>
              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-950 text-teal-900 dark:text-teal-200 text-xs font-bold rounded-full border border-teal-300 dark:border-teal-700">
                MACS CP Certified
              </span>
            </div>
          </div>

          {/* Column 2: Regional Hubs */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold block">
              REGIONAL HUBS
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#0B375A] dark:text-slate-200 font-bold">
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-sm">location_on</span>
                <span>Melbourne, Australia</span>
              </div>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 block pl-5">APAC Practice Hub</span>
              <div className="flex items-center gap-1.5 text-[#0B375A] dark:text-slate-200 font-bold pt-1">
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-sm">location_on</span>
                <span>Abu Dhabi & Dubai, UAE</span>
              </div>
              <span className="text-[11px] text-slate-600 dark:text-slate-400 block pl-5">EMEA Executive Operations</span>
            </div>
          </div>

          {/* Column 3: Professional Network */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold block">
              EXECUTIVE NETWORK
            </span>
            <div className="space-y-2 text-xs font-medium">
              <a
                href="https://linkedin.com/in/amifar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-[#0B375A] dark:hover:text-teal-400 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">link</span>
                <span>LinkedIn Executive Profile</span>
              </a>
              <a
                href="https://github.com/Saad110jb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-[#0B375A] dark:hover:text-teal-400 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">code</span>
                <span>GitHub Repositories</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
                <span className="material-symbols-outlined text-sm">group</span>
                <span>Microsoft Tech Community</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-300/70 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} Muhammad Umar Farooq. Sovereign & Enterprise Architecture Practice.</span>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">Australia • United Arab Emirates</span>
            <Link to="/contact" className="text-[#0B375A] dark:text-teal-400 font-bold hover:underline flex items-center gap-1">
              <span>Executive Contact</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
