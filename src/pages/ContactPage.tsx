import React from 'react';
import { DirectContactPanel } from '../components/DirectContactPanel';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-surface min-h-screen text-on-surface">
      {/* Main Hero / Header Section */}
      <section className="w-full bg-surface-container-lowest py-12 border-b border-surface-container-high px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Eyebrow Status Badge */}
          <div className="flex items-center gap-2 self-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-mono text-xs font-semibold tracking-wide border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span>Initiate Collaboration</span>
            </div>
            <span className="font-mono text-xs text-outline tracking-wider uppercase ml-1">
              Advisory & Delivery
            </span>
          </div>

          {/* Main Title & Lead Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight font-bold">
                Let’s Architect & Deliver Your Next Enterprise Initiative
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Available for enterprise solution architecture consulting, delivery governance director roles, and strategic AI/full-stack modernization projects across Australia, UAE, and globally.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <div className="flex items-center gap-3 px-4 py-2.5 bg-surface-container-low rounded-xl border border-surface-container-high w-full sm:w-auto">
                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-outline uppercase font-semibold">Active Timezones</span>
                  <span className="font-mono text-xs text-on-surface font-semibold">GST (UTC+4) & AEST (UTC+10)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 bg-secondary-container/20 rounded-xl border border-secondary/20 w-full sm:w-auto">
                <span className="material-symbols-outlined text-secondary text-xl">shield_person</span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-outline uppercase font-semibold">Governance Standard</span>
                  <span className="font-mono text-xs text-secondary font-semibold">TOGAF 9.2 • SAFe SPC • IRAP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive SLA Telemetry Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-surface-container-high">
            <div className="flex items-center gap-3.5 p-4 bg-surface-container-low rounded-xl border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-outline uppercase font-semibold">Response SLA</span>
                <span className="font-heading text-sm font-bold text-on-surface truncate">&lt; 12 Hours</span>
                <span className="text-xs text-on-surface-variant">Executive Priority Queue</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-surface-container-low rounded-xl border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">public</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-outline uppercase font-semibold">Direct Reach</span>
                <span className="font-heading text-sm font-bold text-on-surface truncate">Dubai & Sydney</span>
                <span className="text-xs text-on-surface-variant">Dual Base Operations</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-surface-container-low rounded-xl border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">handshake</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-outline uppercase font-semibold">Engagement Types</span>
                <span className="font-heading text-sm font-bold text-on-surface truncate">Advisory & Retainer</span>
                <span className="text-xs text-on-surface-variant">Board & Program Leadership</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 bg-surface-container-low rounded-xl border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-xl">lock_clock</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-outline uppercase font-semibold">Data Security</span>
                <span className="font-heading text-sm font-bold text-on-surface truncate">SOC2 & IRAP</span>
                <span className="text-xs text-on-surface-variant">Serverless Encrypted Transmission</span>
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

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-surface-container-high text-center text-xs text-outline font-mono">
        © {new Date().getFullYear()} Muhammad Umar Farooq. Direct Contact & Serverless Inquiry Protocol.
      </footer>
    </div>
  );
};
