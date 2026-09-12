import React from 'react';
import { Link } from 'react-router-dom';
import umerPic from '../components/Umer_pic.jpeg';

export const Home: React.FC = () => {
  const credentials = [
    { code: "PL-600", title: "Power Platform Solution Architect Expert", org: "Microsoft Certified", color: "text-blue-600", icon: "verified" },
    { code: "PL-200", title: "Power Platform Functional Consultant", org: "Microsoft Certified", color: "text-blue-600", icon: "verified" },
    { code: "PL-900", title: "Power Platform Core Fundamentals", org: "Microsoft Certified", color: "text-blue-600", icon: "verified" },
    { code: "MCSE", title: "Dynamics 365 Enterprise Solutions", org: "Enterprise Core", color: "text-indigo-600", icon: "workspace_premium" },
    { code: "MACS CP", title: "ACS Certified Professional", org: "Australian Computer Society", color: "text-emerald-600", icon: "verified_user" },
    { code: "SAFe 6.0", title: "Scaled Agile Practice Consultant", org: "Scaled Agile Org", color: "text-blue-700", icon: "speed" }
  ];

  const pillars = [
    {
      icon: "account_tree",
      iconBg: "bg-blue-100 text-blue-600 border border-blue-200",
      title: "Enterprise Delivery & Governance",
      desc: "Multi-million dollar portfolio leadership, Azure DevOps CI/CD governance, 2-week bi-weekly release trains, public-sector procurement, risk remediation, and steerco executive reporting.",
      tags: ["Azure DevOps", "SAFe 6.0", "PMBOK", "ITIL v4", "TOGAF"]
    },
    {
      icon: "widgets",
      iconBg: "bg-emerald-100 text-emerald-600 border border-emerald-200",
      title: "D365 & Power Platform Architecture",
      desc: "Enterprise Dataverse data modeling, scalable Canvas & Model-driven apps, ALM pipelines, CoE Starter Kit hardening, hybrid on-premises data gateway integration, and high-volume ERP integrations.",
      tags: ["Dynamics 365 CE", "Power Automate", "Dataverse", "Power Pages", "PCF Controls"]
    },
    {
      icon: "dns",
      iconBg: "bg-indigo-100 text-indigo-600 border border-indigo-200",
      title: "Full-Stack Web & Microservices",
      desc: "Distributed event-driven architectures, resilient RESTful & GraphQL APIs, serverless computing, low-latency asynchronous processing, and responsive multi-tenant SaaS dashboards.",
      tags: ["Next.js 14", "React", "TypeScript", "FastAPI (Python)", "Docker", "Redis"]
    },
    {
      icon: "psychology",
      iconBg: "bg-purple-100 text-purple-600 border border-purple-200",
      title: "Applied AI & Automated Workflows",
      desc: "Production Retrieval-Augmented Generation (RAG) pipelines, enterprise LLM fine-tuning, Azure OpenAI secure integration, autonomous multi-agent systems with n8n and LangChain, and cognitive document extraction.",
      tags: ["Azure OpenAI", "LangChain", "n8n", "RAG Pipeline", "Copilot Studio"]
    }
  ];

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface">
      <div className="flex flex-col w-full">

        {/* Top Subtle Architectural Ambient Glow */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-96 bg-gradient-to-b from-blue-200/50 via-slate-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

          {/* 1. HERO SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column (Executive Value Proposition) */}
              <div className="lg:col-span-7 flex flex-col gap-4">

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium shadow-sm w-fit backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  <span className="font-mono text-xs text-slate-800 font-semibold tracking-tight">
                    Available for Enterprise Consulting & Strategic AI Solutions
                  </span>
                </div>

                {/* Main Executive Typography Hierarchy */}
                <div className="flex flex-col pt-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-1">
                    EXECUTIVE PORTFOLIO
                  </span>
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08] font-extrabold">
                    Muhammad Umar Farooq
                  </h1>
                  <p className="font-heading text-xl sm:text-2xl text-slate-700 font-bold mt-2 leading-snug">
                    Delivery Director & Solutions Architect
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 font-bold">
                      {" "}| Full-Stack & AI Systems Engineer
                    </span>
                  </p>
                </div>

                {/* Narrative Statement */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl pt-1">
                  Over 10+ years orchestrating mission-critical digital transformation initiatives across Australia and the UAE. Specializing in enterprise-scale Microsoft Dynamics 365, Power Platform Governance & Centers of Excellence (CoE), custom cloud microservices, and applied AI systems delivering tangible business outcomes for sovereign government entities and tier-1 corporations.
                </p>

                {/* CTA Command Button Group */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    to="/skills-projects"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-slate-800 transition-all"
                  >
                    <span>View Systems & Projects</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <Link
                    to="/experience"
                    className="inline-flex items-center gap-2 bg-white text-slate-800 text-sm font-semibold px-6 py-3 rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 transition-all"
                  >
                    <span>Explore Experience</span>
                    <span className="material-symbols-outlined text-base">account_tree</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 px-3 py-2 transition-colors"
                  >
                    <span>Contact Me</span>
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </Link>
                </div>

                {/* Quick Metrics Stat Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 mt-2 bg-slate-100/70 rounded-xl p-4 shadow-sm border border-slate-200">
                  <div className="flex flex-col">
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">10+</span>
                    <span className="font-mono text-xs text-slate-500 font-medium">Years Experience</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">$40M+</span>
                    <span className="font-mono text-xs text-slate-500 font-medium">Project Delivery</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">100+</span>
                    <span className="font-mono text-xs text-slate-500 font-medium">Microservices</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">ACS CP</span>
                    <span className="font-mono text-xs text-slate-500 font-medium">Certified Leader</span>
                  </div>
                </div>

              </div>

              {/* Right Column (Framed Portrait & Floating Badges) */}
              <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
                <div className="relative w-full max-w-md aspect-square rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-900/10 border border-slate-200">
                  <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative bg-slate-100">
                    <img
                      src={umerPic}
                      alt="Muhammad Umar Farooq - Executive Technology Leader"
                      className="w-full h-full object-cover object-top scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>

                  {/* Floating Badge 1: ACS Professional (Top Right) */}
                  <div className="absolute -top-4 -right-4 bg-emerald-100 text-emerald-950 backdrop-blur-md shadow-lg rounded-xl p-3 flex items-center gap-3 max-w-[210px] border border-emerald-300">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-lg">verified</span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] text-emerald-800 font-bold uppercase tracking-wider">VERIFIED MEMBER</span>
                      <span className="text-xs font-bold text-emerald-950 truncate">ACS Professional</span>
                    </div>
                  </div>

                  {/* Floating Badge 2: PL-600 Solution Architect (Bottom Left) */}
                  <div className="absolute -bottom-5 -left-5 bg-blue-600 text-white backdrop-blur-md shadow-xl rounded-xl p-3 flex items-center gap-3 max-w-[230px] border border-blue-500">
                    <div className="w-10 h-10 rounded-lg bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-xl">architecture</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-blue-200 font-bold uppercase tracking-wider">SOLUTION ARCHITECT</span>
                      <span className="font-heading text-sm font-bold text-white leading-tight">PL-600 Expert</span>
                    </div>
                  </div>

                  {/* Floating Badge 3: FastAPI & MERN Badge (Bottom Right) */}
                  <div className="absolute -bottom-3 -right-3 bg-slate-900 text-white shadow-md rounded-lg px-3 py-1.5 flex items-center gap-1.5 border border-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-mono text-xs font-semibold">FastAPI & MERN Stack</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* 2. CREDENTIALS & CERTIFICATION RIBBON */}
        <section className="w-full bg-slate-100/80 py-8 border-y border-slate-200" id="credentials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 text-lg">military_tech</span>
                <span className="font-mono text-xs text-slate-600 uppercase tracking-wider font-bold">
                  Accredited Enterprise Credentials & Standards
                </span>
              </div>
              <span className="font-mono text-xs text-slate-500 font-semibold">
                Microsoft Certified Trainer & Scaled Agile Framework
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
              {credentials.map((cred, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between gap-2 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${cred.color}`}>{cred.code}</span>
                    <span className={`material-symbols-outlined text-sm ${cred.color}`}>{cred.icon}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 line-clamp-2">{cred.title}</p>
                  <span className="font-mono text-[10px] text-slate-500 font-medium">{cred.org}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL VALUE PROPOSITION MATRIX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="systems-grid">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 uppercase font-bold tracking-widest mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                CORE STRATEGIC ARCHITECTURE PILLARS
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-slate-900 tracking-tight font-extrabold">
                High-Stakes Technical Leadership
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Bridging board-level strategic oversight with rigorous systems architecture across modern cloud runtimes, AI pipelines, and mission-critical enterprise frameworks.
            </p>
          </div>

          {/* 4-Column Elevated Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Header Container */}
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div>
                  {/* Framework Micro-Tags */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-2 font-bold">
                      Key Tech & Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((t, i) => (
                        <span key={i} className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-semibold border border-slate-200">
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

export default Home;
