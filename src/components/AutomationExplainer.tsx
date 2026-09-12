import React, { useState } from 'react';
import { Workflow, Cpu, Server, ShieldCheck, MailCheck, BellRing, Database, ArrowRight, Code2 } from 'lucide-react';
import { ArchitectureMode } from '../types/contact';

export const AutomationExplainer: React.FC = () => {
  const [archMode, setArchMode] = useState<ArchitectureMode>('power-automate');

  const powerAutomateSteps = [
    {
      step: 1,
      title: 'HTTPS Webhook Endpoint',
      description: 'Encrypted SSL payload POST to secure HTTP trigger with Zod sanitized schema.',
      badge: 'SSL / TLS',
      icon: ShieldCheck,
    },
    {
      step: 2,
      title: 'Workflow Orchestration',
      description: 'Power Automate / n8n cloud flow parses payload and validates enterprise tenant context.',
      badge: 'Orchestrator',
      icon: Workflow,
    },
    {
      step: 3,
      title: 'Dataverse & Auto-Responder',
      description: 'Record indexed in Dataverse CRM; automated branded acknowledgment email dispatched instantly.',
      badge: 'Dataverse / SMTP',
      icon: Database,
    },
    {
      step: 4,
      title: 'Executive Push Notification',
      description: 'Real-time mobile push notification alert dispatched directly to Umar\'s device.',
      badge: 'Mobile Alert',
      icon: BellRing,
    },
  ];

  const serverlessSteps = [
    {
      step: 1,
      title: 'Client Endpoint Trigger',
      description: 'Lightweight REST payload dispatch directly from React Hook Form handler.',
      badge: 'REST API',
      icon: Code2,
    },
    {
      step: 2,
      title: 'Serverless Edge Handler',
      description: 'Vercel / AWS Lambda edge function validates API key & Rate Limits.',
      badge: 'Serverless Edge',
      icon: Server,
    },
    {
      step: 3,
      title: 'Resend / EmailJS Gateway',
      description: 'Transactional email engine delivers rich HTML inquiry summary to Umar.',
      badge: 'Resend API',
      icon: MailCheck,
    },
    {
      step: 4,
      title: 'Client Auto-Confirmation',
      description: 'Sender receives instant DKIM/SPF verified transactional confirmation.',
      badge: 'Auto-Confirm',
      icon: Cpu,
    },
  ];

  const currentSteps = archMode === 'power-automate' ? powerAutomateSteps : serverlessSteps;

  return (
    <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
      {/* Background Subtle Tech Grid Decorator */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Header & Toggle */}
      <div className="relative z-10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100 font-heading">Automation Pipeline Architecture</h4>
              <p className="text-xs text-slate-400">Technical transparency & workflow execution flow</p>
            </div>
          </div>

          {/* Toggle Pill */}
          <div className="inline-flex p-1 bg-slate-800 rounded-xl border border-slate-700/80 self-start sm:self-auto">
            <button
              onClick={() => setArchMode('power-automate')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                archMode === 'power-automate'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Power Automate / n8n
            </button>
            <button
              onClick={() => setArchMode('serverless')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                archMode === 'serverless'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Resend / EmailJS
            </button>
          </div>
        </div>

        {/* Steps Pipeline */}
        <div className="space-y-3 pt-1">
          {currentSteps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                className="group p-3.5 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-blue-500/40 hover:bg-slate-800 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-900/50 text-blue-400 font-mono text-xs font-bold shrink-0 border border-blue-500/30">
                    {item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                        <IconComponent className="w-4 h-4 text-blue-400 inline" />
                        {item.title}
                      </h5>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-700/80 text-slate-300 border border-slate-600/50 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Code Snippet Indicator */}
        <div className="pt-2 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800/80">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            Payload Mode: JSON / TLS 1.3 Encrypted
          </span>
          <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
            <span>POST /api/contact-webhook</span>
            <ArrowRight className="w-3 h-3 text-slate-500" />
          </span>
        </div>
      </div>
    </div>
  );
};
