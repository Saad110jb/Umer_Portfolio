import React from 'react';
import { DirectContactPanel } from '../components/DirectContactPanel';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-slate-900 dark:text-slate-100 relative font-sans">
      {/* Main Hero / Header Section */}
      <section className="w-full bg-teal-50/40 dark:bg-slate-900/60 backdrop-blur-md py-12 border-b border-teal-100 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Eyebrow Status Badge */}
          <div className="flex flex-wrap items-center gap-3 self-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/90 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/80 text-teal-800 dark:text-teal-200 text-xs font-semibold w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
              </span>
              <span>Initiate Collaboration</span>
            </div>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tracking-wider uppercase font-bold">
              ADVISORY & DELIVERY
            </span>
          </div>

          {/* Main Title & Lead Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0B375A] dark:text-white tracking-tight leading-tight font-extrabold">
                Let’s Architect & Deliver Your Next Enterprise Initiative
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                Available for enterprise solution architecture consulting, delivery governance director roles, and strategic AI/full-stack modernization projects across Australia, UAE, and globally.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <div className="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 w-full sm:w-auto">
                <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">ACTIVE TIMEZONES</span>
                  <span className="font-mono text-xs text-[#0B375A] dark:text-slate-100 font-bold">GST (UTC+4) & AEST (UTC+10)</span>
                </div>
              </div>

              <div className="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-teal-200/80 dark:border-teal-800/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-teal-400 transition-all duration-300 w-full sm:w-auto">
                <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">shield_person</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-teal-800 dark:text-teal-300 uppercase font-bold">GOVERNANCE STANDARD</span>
                  <span className="font-mono text-xs text-teal-900 dark:text-teal-200 font-bold">TOGAF 9.2 • SAFe SPC • IRAP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive SLA Telemetry Ribbon with Smooth Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <div className="group flex items-center gap-3.5 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">RESPONSE SLA</span>
                <span className="font-heading text-sm font-extrabold text-[#0B375A] dark:text-white truncate">&lt; 12 Hours</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Executive Priority Queue</span>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">public</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">DIRECT REACH</span>
                <span className="font-heading text-sm font-extrabold text-[#0B375A] dark:text-white truncate">Dubai & Sydney</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Dual Base Operations</span>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">handshake</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">ENGAGEMENT TYPES</span>
                <span className="font-heading text-sm font-extrabold text-[#0B375A] dark:text-white truncate">Advisory & Retainer</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Board & Program Leadership</span>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-xl">lock_clock</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">DATA SECURITY</span>
                <span className="font-heading text-sm font-extrabold text-[#0B375A] dark:text-white truncate">SOC2 & IRAP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Encrypted Transmission</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2-Column Split Workspace */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Direct Channels (5 Cols) */}
          <div className="lg:col-span-5">
            <DirectContactPanel />
          </div>

          {/* RIGHT COLUMN: Consultation Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
