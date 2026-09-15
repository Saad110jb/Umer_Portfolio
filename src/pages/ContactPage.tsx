import React from 'react';
import { DirectContactPanel } from '../components/DirectContactPanel';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-slate-900 dark:text-slate-100 relative">
      {/* Main Hero / Header Section */}
      <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-12 border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Eyebrow Status Badge */}
          <div className="flex items-center gap-2 self-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold tracking-wide border border-emerald-200 dark:border-emerald-800/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Initiate Collaboration</span>
            </div>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tracking-wider uppercase ml-1 font-bold">
              Advisory & Delivery
            </span>
          </div>

          {/* Main Title & Lead Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight font-extrabold">
                Let’s Architect & Deliver Your Next Enterprise Initiative
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                Available for enterprise solution architecture consulting, delivery governance director roles, and strategic AI/full-stack modernization projects across Australia, UAE, and globally.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-white/90 dark:bg-slate-800/90 rounded-xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm w-full sm:w-auto">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">schedule</span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">Active Timezones</span>
                  <span className="font-mono text-xs text-slate-900 dark:text-slate-100 font-semibold">GST (UTC+4) & AEST (UTC+10)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 bg-emerald-50/80 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm w-full sm:w-auto">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl">shield_person</span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-400 uppercase font-bold">Governance Standard</span>
                  <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 font-semibold">TOGAF 9.2 • SAFe SPC • IRAP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive SLA Telemetry Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-3.5 p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">Response SLA</span>
                <span className="font-heading text-sm font-bold text-slate-900 dark:text-white truncate">&lt; 12 Hours</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Executive Priority Queue</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <span className="material-symbols-outlined text-xl">public</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">Direct Reach</span>
                <span className="font-heading text-sm font-bold text-slate-900 dark:text-white truncate">Dubai & Sydney</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Dual Base Operations</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <span className="material-symbols-outlined text-xl">handshake</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">Engagement Types</span>
                <span className="font-heading text-sm font-bold text-slate-900 dark:text-white truncate">Advisory & Retainer</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Board & Program Leadership</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <span className="material-symbols-outlined text-xl">lock_clock</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">Data Security</span>
                <span className="font-heading text-sm font-bold text-slate-900 dark:text-white truncate">SOC2 & IRAP</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Serverless Encrypted Transmission</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2-Column Split Workspace */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Direct Channels & Serverless Email Topology (5 Cols) */}
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
