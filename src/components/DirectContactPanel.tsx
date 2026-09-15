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
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
            Direct Access Channels
          </span>
          <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
            Confidential Inquiries
          </h2>
        </div>

        {/* Channel Cards Grid */}
        <div className="flex flex-col gap-3">
          {/* Email Card */}
          <div className="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800/80 hover:shadow-md transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-700 dark:text-blue-300 shrink-0">
                <span className="material-symbols-outlined text-2xl">alternate_email</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  Principal Contact Email
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-heading text-base font-extrabold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate"
                >
                  {email}
                </a>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Direct Mailbox • Encrypted Dispatch
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                title="Copy email address"
              >
                <span className="material-symbols-outlined text-base">
                  {copied ? 'check' : 'content_copy'}
                </span>
              </button>
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
                title="Launch email client"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
          </div>

          {/* UAE Phone & WhatsApp Card */}
          <div className="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800/80 hover:shadow-md transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  UAE Mobile & WhatsApp
                </span>
                <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white truncate">
                  {phoneUae}
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Available 08:00–20:00 GST
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={`https://wa.me/${phoneUaeTel.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center gap-1 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </a>
              <a
                href={`tel:${phoneUaeTel}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700"
                title="Call directly"
              >
                <span className="material-symbols-outlined text-base">phone_forwarded</span>
              </a>
            </div>
          </div>

          {/* Pakistan Phone & WhatsApp Card */}
          <div className="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800/80 hover:shadow-md transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0">
                <span className="material-symbols-outlined text-2xl">phone_iphone</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  Pakistan Mobile & WhatsApp
                </span>
                <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white truncate">
                  {phonePk}
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Direct Line & Instant Reach
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={`https://wa.me/${phonePkTel.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center gap-1 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </a>
              <a
                href={`tel:${phonePkTel}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700"
                title="Call directly"
              >
                <span className="material-symbols-outlined text-base">phone_forwarded</span>
              </a>
            </div>
          </div>

          {/* Dual Executive Hubs Location Card */}
          <div className="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800/80 hover:shadow-md transition-all flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 border border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-2xl">location_city</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                    Dual Executive Hubs
                  </span>
                  <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white">
                    EMEA & APAC Presences
                  </span>
                </div>
              </div>
              <span className="font-mono text-[11px] px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                Global Advisory
              </span>
            </div>

            {/* Hub Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg flex flex-col gap-0.5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined text-xs">flag</span>
                  <span className="text-xs font-bold font-heading">Sharjah & Dubai, UAE</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-semibold">EMEA Command Base</span>
                <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold">
                  {uaeTime || 'GST (UTC+4)'}
                </span>
              </div>
              <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg flex flex-col gap-0.5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                  <span className="material-symbols-outlined text-xs">flag</span>
                  <span className="text-xs font-bold font-heading">Sydney, Australia</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 font-semibold">APAC Practice Hub</span>
                <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-bold">
                  {sydTime || 'AEST (UTC+10)'}
                </span>
              </div>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <div className="p-4 bg-white/90 dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800/80 hover:shadow-md transition-all flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-800 dark:text-blue-300 shrink-0">
                <span className="material-symbols-outlined text-2xl">badge</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">
                  LinkedIn Profile
                </span>
                <span className="font-heading text-base font-extrabold text-slate-900 dark:text-white truncate">
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
              className="px-3.5 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all text-xs font-bold inline-flex items-center gap-1 border border-blue-200 dark:border-blue-800 shadow-sm"
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
