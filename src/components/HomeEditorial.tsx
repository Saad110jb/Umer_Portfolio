import React from 'react';
import { Link } from 'react-router-dom';
import umerPic from './Umer_pic.jpeg';

export const HomeEditorial: React.FC = () => {
  const credentials = [
    { code: "PL-600", title: "Power Platform Solution Architect Expert", org: "Microsoft Certified", color: "text-blue-600 dark:text-blue-400", accent: "border-l-blue-500", icon: "verified" },
    { code: "PL-200", title: "Power Platform Functional Consultant", org: "Microsoft Certified", color: "text-blue-600 dark:text-blue-400", accent: "border-l-blue-400", icon: "verified" },
    { code: "PL-900", title: "Power Platform Core Fundamentals", org: "Microsoft Certified", color: "text-blue-600 dark:text-blue-400", accent: "border-l-indigo-500", icon: "verified" },
    { code: "MCSE", title: "Dynamics 365 Enterprise Solutions", org: "Enterprise Core", color: "text-indigo-600 dark:text-indigo-400", accent: "border-l-indigo-600", icon: "workspace_premium" },
    { code: "MACS CP", title: "ACS Certified Professional", org: "Australian Computer Society", color: "text-emerald-600 dark:text-emerald-400", accent: "border-l-emerald-500", icon: "verified_user" },
    { code: "SAFe 6.0", title: "Scaled Agile Practice Consultant", org: "Scaled Agile Org", color: "text-blue-700 dark:text-blue-300", accent: "border-l-sky-500", icon: "speed" }
  ];

  const pillars = [
    {
      id: "program-governance",
      icon: "account_tree",
      iconBg: "bg-blue-100/80 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80",
      title: "Enterprise Delivery & Governance",
      desc: "Multi-million dollar portfolio leadership, Azure DevOps CI/CD governance, 2-week bi-weekly release trains, public-sector procurement, risk remediation, and steerco executive reporting.",
      tags: ["Azure DevOps", "SAFe 6.0", "PMBOK", "ITIL v4", "TOGAF"],
      cardBg: "bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-blue-950/40 hover:border-blue-300 dark:hover:border-blue-500 shadow-blue-900/5",
      pillStyle: "bg-blue-50/80 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60"
    },
    {
      id: "architecture-credentials",
      icon: "widgets",
      iconBg: "bg-indigo-100/80 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80",
      title: "D365 & Power Platform Architecture",
      desc: "Enterprise Dataverse data modeling, scalable Canvas & Model-driven apps, ALM pipelines, CoE Starter Kit hardening, hybrid on-premises data gateway integration, and high-volume ERP integrations.",
      tags: ["Dynamics 365 CE", "Power Automate", "Dataverse", "Power Pages", "PCF Controls"],
      cardBg: "bg-gradient-to-br from-white via-white to-indigo-50/50 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-indigo-950/40 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-blue-900/5",
      pillStyle: "bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60"
    },
    {
      id: "fullstack-microservices",
      icon: "dns",
      iconBg: "bg-sky-100/80 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/80",
      title: "Full-Stack Web & Microservices",
      desc: "Distributed event-driven architectures, resilient RESTful & GraphQL APIs, serverless computing, low-latency asynchronous processing, and responsive multi-tenant SaaS dashboards.",
      tags: ["Next.js 14", "React", "TypeScript", "FastAPI (Python)", "Docker", "Redis"],
      cardBg: "bg-gradient-to-br from-white via-white to-sky-50/50 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-sky-950/40 hover:border-sky-300 dark:hover:border-sky-500 shadow-blue-900/5",
      pillStyle: "bg-sky-50/80 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border-sky-200/80 dark:border-sky-800/60"
    },
    {
      id: "applied-ai",
      icon: "psychology",
      iconBg: "bg-emerald-100/80 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80",
      title: "Applied AI & Automated Workflows",
      desc: "Production Retrieval-Augmented Generation (RAG) pipelines, enterprise LLM fine-tuning, Azure OpenAI secure integration, autonomous multi-agent systems with n8n and LangChain, and cognitive document extraction.",
      tags: ["Azure OpenAI", "LangChain", "n8n", "RAG Pipeline", "Copilot Studio"],
      cardBg: "bg-gradient-to-br from-white via-white to-emerald-50/50 dark:from-slate-900/90 dark:via-slate-900/90 dark:to-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-500 shadow-blue-900/5",
      pillStyle: "bg-emerald-50/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60"
    }
  ];

  return (
    <div className="w-full relative">
      <div className="flex flex-col w-full relative z-10">

        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column (Executive Value Proposition) */}
            <div className="lg:col-span-7 flex flex-col gap-4">

              {/* Eyebrow Announcement Chip */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-xs font-medium shadow-sm w-fit backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="material-symbols-outlined text-xs text-blue-600 dark:text-blue-400 font-bold">terminal</span>
                <span className="font-mono text-xs text-slate-800 dark:text-slate-200 font-semibold tracking-tight">
                  Available for Enterprise Consulting & Strategic AI Solutions
                </span>
              </div>

              {/* Main Executive Typography Hierarchy */}
              <div className="flex flex-col pt-1">
                <span className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-1">
                  EXECUTIVE PORTFOLIO
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.08] font-extrabold">
                  Muhammad Umar Farooq
                </h1>
                <p className="font-heading text-xl sm:text-2xl text-slate-700 dark:text-slate-200 font-bold mt-2 leading-snug">
                  Delivery Director & Solutions Architect
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-400 dark:via-sky-400 dark:to-emerald-400 font-bold">
                    {" "}| Full-Stack & AI Systems Engineer
                  </span>
                </p>
              </div>

              {/* Narrative Statement */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-1">
                Over 10+ years orchestrating mission-critical digital transformation initiatives across Australia and the UAE. Specializing in enterprise-scale Microsoft Dynamics 365, Power Platform Governance & Centers of Excellence (CoE), custom cloud microservices, and applied AI systems delivering tangible business outcomes for sovereign government entities and tier-1 corporations.
              </p>

              {/* Dual Action CTA Command Group */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/skills-projects"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>View Systems & Projects</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 text-slate-900 dark:text-slate-100 text-sm font-semibold px-6 py-3 rounded-xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Explore Experience</span>
                  <span className="material-symbols-outlined text-base">account_tree</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-3 py-2 transition-colors"
                >
                  <span>Contact Me</span>
                  <span className="material-symbols-outlined text-base">chevron_right</span>
                </Link>
              </div>

              {/* Quick Metrics Stat Ribbon: Blue Tinted Frosted Containers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 mt-2">
                <div className="flex flex-col bg-white/85 dark:bg-slate-900/85 border border-blue-100/90 dark:border-slate-800/90 p-3.5 rounded-xl shadow-sm backdrop-blur-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">10+</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mt-0.5">Years Experience</span>
                </div>
                <div className="flex flex-col bg-white/85 dark:bg-slate-900/85 border border-blue-100/90 dark:border-slate-800/90 p-3.5 rounded-xl shadow-sm backdrop-blur-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">$40M+</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mt-0.5">Project Delivery</span>
                </div>
                <div className="flex flex-col bg-white/85 dark:bg-slate-900/85 border border-blue-100/90 dark:border-slate-800/90 p-3.5 rounded-xl shadow-sm backdrop-blur-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">100+</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mt-0.5">Microservices</span>
                </div>
                <div className="flex flex-col bg-white/85 dark:bg-slate-900/85 border border-blue-100/90 dark:border-slate-800/90 p-3.5 rounded-xl shadow-sm backdrop-blur-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">ACS CP</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mt-0.5">Certified Leader</span>
                </div>
              </div>

            </div>

            {/* Right Column (Clean Portrait Frame with Ambient Blue Glow & Badges Removed) */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0 group">
              {/* Rich Ambient Blue Backlight Glow behind Picture */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/35 via-indigo-600/30 to-sky-400/35 dark:from-sky-500/40 dark:via-blue-600/35 dark:to-indigo-600/35 rounded-[3rem] blur-2xl opacity-90 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/25 to-sky-400/25 dark:from-sky-400/30 dark:to-blue-500/30 rounded-[2.5rem] blur-md pointer-events-none -z-10" />

              {/* Clean Picture Card Container */}
              <div className="relative w-full max-w-md aspect-square rounded-[2rem] bg-white/95 dark:bg-slate-900/95 p-3 shadow-2xl shadow-blue-900/15 border border-blue-200/80 dark:border-slate-800/80 backdrop-blur-sm">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <img
                    src={umerPic}
                    alt="Muhammad Umar Farooq - Executive Technology Leader"
                    className="w-full h-full object-cover object-top scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 dark:from-slate-950/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. CREDENTIALS & CERTIFICATION RIBBON */}
        <section className="w-full bg-blue-50/40 dark:bg-slate-900/60 backdrop-blur-sm py-8 border-y border-blue-100/80 dark:border-slate-800/80" id="credentials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg">military_tech</span>
                <span className="font-mono text-xs text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
                  Accredited Enterprise Credentials & Standards
                </span>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Microsoft Certified Trainer & Scaled Agile Framework
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-3.5 rounded-xl shadow-sm border border-blue-100/80 dark:border-slate-800/80 ${cred.accent} border-l-4 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between gap-2`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${cred.color}`}>{cred.code}</span>
                    <span className={`material-symbols-outlined text-sm ${cred.color}`}>{cred.icon}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-2">{cred.title}</p>
                  <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-medium">{cred.org}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL VALUE PROPOSITION MATRIX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="systems-grid">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                CORE STRATEGIC ARCHITECTURE PILLARS
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight font-extrabold">
                High-Stakes Technical Leadership
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Bridging board-level strategic oversight with rigorous systems architecture across modern cloud runtimes, AI pipelines, and mission-critical enterprise frameworks.
            </p>
          </div>

          {/* 4-Column Architectural Bento Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm ${item.cardBg} transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div>
                  {/* Monospace Metadata Chips */}
                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                      Key Tech & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t, i) => (
                        <span key={i} className={`font-mono text-[11px] px-2.5 py-1 rounded-md font-semibold border ${item.pillStyle}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomeEditorial;
