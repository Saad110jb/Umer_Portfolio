import React, { useState, useEffect } from 'react';
import { Toast } from './Toast';

export const DirectContactPanel: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [uaeTime, setUaeTime] = useState<string>('');
  const [sydTime, setSydTime] = useState<string>('');

  const email = 'amifar13@gmail.com';
  const phoneUae = '+971 50 111 3483';
  const phoneUaeTel = '+971501113483';
  const phonePk = '+92 331 4841842';
  const phonePkTel = '+923314841842';
  const linkedinUrl = 'https://www.linkedin.com/in/amifar/';

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const uaeOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      const sydOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      setUaeTime(new Intl.DateTimeFormat('en-GB', uaeOptions).format(now) + ' GST');
      setSydTime(new Intl.DateTimeFormat('en-GB', sydOptions).format(now) + ' AEST');
    };
    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setCopied(false), 2500);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs text-teal-700 dark:text-teal-400 uppercase tracking-wider font-bold">
            DIRECT ACCESS CHANNELS
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-[#0B375A] dark:text-white">
            Confidential Inquiries
          </h2>
        </div>

        {/* Channel Cards Grid with Hover Micro-Interactions */}
        <div className="flex flex-col gap-3.5">
          {/* Email Card */}
          <div className="group p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">alternate_email</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  PRINCIPAL CONTACT EMAIL
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-heading text-sm sm:text-base font-extrabold text-[#0B375A] dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors truncate"
                >
                  {email}
                </a>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Direct Mailbox • Encrypted Dispatch
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
                title="Copy email address"
              >
                <span className="material-symbols-outlined text-base">
                  {copied ? 'check' : 'content_copy'}
                </span>
              </button>
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-xl bg-[#0B375A] text-white hover:bg-[#07243D] transition-all shadow-sm"
                title="Launch email client"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
          </div>

          {/* UAE Phone & WhatsApp Card */}
          <div className="group p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  UAE MOBILE & WHATSAPP
                </span>
                <span className="font-heading text-sm sm:text-base font-extrabold text-[#0B375A] dark:text-white truncate">
                  {phoneUae}
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Available 08:00–20:00 GST
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center w-full sm:w-auto">
              <a
                href={`https://wa.me/${phoneUaeTel.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-[#0B375A] text-white font-mono text-xs font-bold flex items-center justify-center gap-1 hover:bg-[#07243D] transition-all shadow-sm w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Pakistan Phone & WhatsApp Card */}
          <div className="group p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">phone_iphone</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  PAKISTAN MOBILE & WHATSAPP
                </span>
                <span className="font-heading text-sm sm:text-base font-extrabold text-[#0B375A] dark:text-white truncate">
                  {phonePk}
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Direct Line & Instant Reach
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center w-full sm:w-auto">
              <a
                href={`https://wa.me/${phonePkTel.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-full bg-[#0B375A] text-white font-mono text-xs font-bold flex items-center justify-center gap-1 hover:bg-[#07243D] transition-all shadow-sm w-full sm:w-auto"
              >
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </a>
            </div>
          </div>

          {/* Dual Executive Hubs Location Card */}
          <div className="group p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">location_city</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                    DUAL EXECUTIVE HUBS
                  </span>
                  <span className="font-heading text-base font-extrabold text-[#0B375A] dark:text-white">
                    EMEA & APAC Presences
                  </span>
                </div>
              </div>
              <span className="font-mono text-[10px] px-3 py-1 bg-teal-50 dark:bg-teal-950 rounded-full text-teal-800 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800">
                Global Advisory
              </span>
            </div>

            {/* Hub Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl flex flex-col gap-0.5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 text-teal-700 dark:text-teal-400">
                  <span className="material-symbols-outlined text-xs">flag</span>
                  <span className="text-xs font-bold font-heading">Sharjah & Dubai, UAE</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-semibold">EMEA Command Base</span>
                <span className="font-mono text-[11px] text-[#0B375A] dark:text-teal-300 font-bold">
                  {uaeTime || 'GST (UTC+4)'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl flex flex-col gap-0.5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 text-teal-700 dark:text-teal-400">
                  <span className="material-symbols-outlined text-xs">flag</span>
                  <span className="text-xs font-bold font-heading">Sydney, Australia</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-semibold">APAC Practice Hub</span>
                <span className="font-mono text-[11px] text-[#0B375A] dark:text-teal-300 font-bold">
                  {sydTime || 'AEST (UTC+10)'}
                </span>
              </div>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="group p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">badge</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  LINKEDIN PROFILE
                </span>
                <span className="font-heading text-base font-extrabold text-[#0B375A] dark:text-white truncate">
                  linkedin.com/in/amifar
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Verified Executive Identity
                </span>
              </div>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#0B375A] text-white hover:bg-[#07243D] transition-all text-xs font-bold inline-flex items-center gap-1 shadow-md"
            >
              <span>Connect</span>
              <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>

      </div>

      <Toast
        message="Email address copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default DirectContactPanel;
