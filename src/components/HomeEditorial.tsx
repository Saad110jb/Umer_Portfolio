import React from 'react';
import { Link } from 'react-router-dom';
import umerPic from './Umer_pic.jpeg';

export const HomeEditorial: React.FC = () => {
  const credentials = [
    { code: "PL-600", title: "Power Platform Solution Architect Expert", org: "Microsoft Certified", pillTag: "EXPERT", color: "text-blue-700 dark:text-blue-300" },
    { code: "PL-200", title: "Power Platform Functional Consultant", org: "Microsoft Certified", pillTag: "CERTIFIED", color: "text-blue-700 dark:text-blue-300" },
    { code: "PL-900", title: "Power Platform Core Fundamentals", org: "Microsoft Certified", pillTag: "FOUNDATION", color: "text-blue-700 dark:text-blue-300" },
    { code: "MCSE", title: "Dynamics 365 Enterprise Solutions", org: "Enterprise Core", pillTag: "ENTERPRISE", color: "text-teal-700 dark:text-teal-300" },
    { code: "MACS CP", title: "ACS Certified Professional", org: "Australian Computer Society", pillTag: "GOVERNMENT", color: "text-emerald-700 dark:text-emerald-300" },
    { code: "SAFe 6.0", title: "Scaled Agile Practice Consultant", org: "Scaled Agile Org", pillTag: "AGILE", color: "text-sky-700 dark:text-sky-300" }
  ];

  const pillars = [
    {
      id: "program-governance",
      icon: "account_tree",
      badge: "GOVERNANCE",
      title: "Enterprise Delivery & Governance",
      desc: "Multi-million dollar portfolio leadership, Azure DevOps CI/CD governance, 2-week bi-weekly release trains, public-sector procurement, risk remediation, and steerco executive reporting.",
      tags: ["Azure DevOps", "SAFe 6.0", "PMBOK", "ITIL v4", "TOGAF"]
    },
    {
      id: "architecture-credentials",
      icon: "widgets",
      badge: "ARCHITECTURE",
      title: "D365 & Power Platform Architecture",
      desc: "Enterprise Dataverse data modeling, scalable Canvas & Model-driven apps, ALM pipelines, CoE Starter Kit hardening, hybrid on-premises data gateway integration, and high-volume ERP integrations.",
      tags: ["Dynamics 365 CE", "Power Automate", "Dataverse", "Power Pages", "PCF Controls"]
    },
    {
      id: "fullstack-microservices",
      icon: "dns",
      badge: "ENGINEERING",
      title: "Full-Stack Web & Microservices",
      desc: "Distributed event-driven architectures, resilient RESTful & GraphQL APIs, serverless computing, low-latency asynchronous processing, and responsive multi-tenant SaaS dashboards.",
      tags: ["Next.js 14", "React", "TypeScript", "FastAPI (Python)", "Docker", "Redis"]
    },
    {
      id: "applied-ai",
      icon: "psychology",
      badge: "AI SYSTEMS",
      title: "Applied AI & Automated Workflows",
      desc: "Production Retrieval-Augmented Generation (RAG) pipelines, enterprise LLM fine-tuning, Azure OpenAI secure integration, autonomous multi-agent systems with n8n and LangChain, and cognitive document extraction.",
      tags: ["Azure OpenAI", "LangChain", "n8n", "RAG Pipeline", "Copilot Studio"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Strategic Alignment",
      description: "Analyze enterprise requirements, stakeholder goals, regulatory frameworks, and system constraints to formulate architectural roadmaps."
    },
    {
      step: "2",
      title: "Architecture & CoE Governance",
      description: "Design resilient Dataverse models, cloud microservices, security boundaries, and Center of Excellence (CoE) guardrails."
    },
    {
      step: "3",
      title: "Agile & Scalable Execution",
      description: "Orchestrate multi-disciplinary engineering teams using SAFe 6.0 bi-weekly trains, automated CI/CD pipelines, and rigorous QA."
    },
    {
      step: "4",
      title: "Managed Evolution & AI Optimization",
      description: "Embed applied AI, telemetry monitoring, performance tuning, and long-term operating models for enterprise continuous value."
    }
  ];

  const experienceRows = [
    {
      date: "2023 — Present",
      role: "Delivery Director & Principal Architect",
      organization: "Enterprise Digital Practice • Australia & UAE",
      description: "Leading sovereign digital transformation portfolios, Azure DevOps ALM governance, and enterprise AI integrations across public and private sectors.",
      tag: "ENTERPRISE",
      tagStyle: "bg-teal-50 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border-teal-200/80 dark:border-teal-800"
    },
    {
      date: "2020 — 2023",
      role: "Senior Solutions Architect — Power Platform & D365",
      organization: "Tier-1 Government & Public Sector Initiatives",
      description: "Architected multi-tenant Microsoft Dynamics 365 solutions, complex Dataverse structures, and high-security compliance systems for government bodies.",
      tag: "GOVERNMENT",
      tagStyle: "bg-blue-50 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200/80 dark:border-blue-800"
    },
    {
      date: "2017 — 2020",
      role: "Lead Full-Stack & Integration Engineer",
      organization: "Cloud Engineering Practice",
      description: "Designed resilient event-driven microservices, REST APIs, and automated enterprise workflow engines for high-volume transactions.",
      tag: "ARCHITECTURE",
      tagStyle: "bg-indigo-50 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800"
    },
    {
      date: "2014 — 2017",
      role: "Software Engineer & Systems Consultant",
      organization: "Enterprise Solutions Consultancy",
      description: "Built custom core business applications, ERP database integrations, and web service layers for enterprise clients.",
      tag: "ENGINEERING",
      tagStyle: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800"
    }
  ];

  return (
    <div className="w-full relative font-sans text-slate-900 dark:text-slate-100">
      <div className="flex flex-col w-full relative z-10">

        {/* 1. HERO SECTION (AL ADAA Inspired Clean Split Layout) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column (Executive Value Proposition) */}
            <div className="lg:col-span-7 flex flex-col gap-4">

              {/* Eyebrow Announcement Chip / Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/90 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/80 text-teal-800 dark:text-teal-200 text-xs font-semibold w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                </span>
                <span className="font-mono uppercase tracking-wider text-[11px]">
                  AVAILABLE FOR ENTERPRISE CONSULTING & AI STRATEGY
                </span>
              </div>

              {/* Main Executive Typography Hierarchy */}
              <div className="flex flex-col pt-1">
                <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold mb-1.5">
                  EXECUTIVE PORTFOLIO
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0B375A] dark:text-white tracking-tight leading-[1.08] font-extrabold">
                  Muhammad Umar Farooq
                </h1>
                <p className="font-heading text-xl sm:text-2xl text-slate-700 dark:text-slate-200 font-bold mt-2.5 leading-snug">
                  Delivery Director & Solutions Architect
                  <span className="text-teal-700 dark:text-teal-400 font-semibold">
                    {" "}| Full-Stack & AI Systems
                  </span>
                </p>
              </div>

              {/* Narrative Statement */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl pt-1">
                Over 10+ years orchestrating mission-critical digital transformation initiatives across Australia and the UAE. Specializing in enterprise-scale Microsoft Dynamics 365, Power Platform Governance & Centers of Excellence (CoE), custom cloud microservices, and applied AI systems delivering tangible outcomes for government entities and tier-1 corporations.
              </p>

              {/* AL ADAA Style Dark Navy Rounded Pill CTA Button Group */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/skills-projects"
                  className="inline-flex items-center gap-2.5 bg-[#0B375A] hover:bg-[#07243D] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Systems & Projects</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm font-semibold px-6 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.01]"
                >
                  <span>Career History</span>
                  <span className="material-symbols-outlined text-base">account_tree</span>
                </Link>
              </div>

              {/* Quick Metrics Stat Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-2 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 rounded-2xl shadow-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B375A] dark:text-teal-400 tracking-tight">10+</span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Years Experience</span>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 rounded-2xl shadow-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B375A] dark:text-teal-400 tracking-tight">$40M+</span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Portfolio Value</span>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 rounded-2xl shadow-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B375A] dark:text-teal-400 tracking-tight">100+</span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Microservices</span>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3.5 rounded-2xl shadow-sm">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-teal-700 dark:text-teal-400 tracking-tight">ACS CP</span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mt-0.5">Certified Leader</span>
                </div>
              </div>

            </div>

            {/* Right Column (AL ADAA Rounded Portrait Arch with Soft Teal Backdrop) */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
              {/* Soft Mint/Teal Backdrop Glow & Arch Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 via-sky-50 to-teal-50 dark:from-teal-950/40 dark:via-slate-900 dark:to-teal-900/30 rounded-[3rem] -z-10 border border-teal-200/60 dark:border-teal-800/40 shadow-xl" />

              <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-white dark:bg-slate-900 p-4 shadow-xl border border-teal-100 dark:border-slate-800">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <img
                    src={umerPic}
                    alt="Muhammad Umar Farooq - Executive Technology Leader"
                    className="w-full h-full object-cover object-top scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B375A]/40 dark:from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Pill Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-3 border border-teal-200/60 dark:border-slate-700 shadow-md flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-heading text-xs font-bold text-[#0B375A] dark:text-white">Muhammad Umar Farooq</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Delivery Director & Solutions Architect</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[10px] font-bold border border-teal-200 dark:border-teal-800">
                      MACS CP
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. CREDENTIALS & ACCREDITATION RIBBON (Pill Styled Badges) */}
        <section className="w-full bg-teal-50/50 dark:bg-slate-900/80 py-8 border-y border-teal-100 dark:border-slate-800" id="credentials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-lg">military_tech</span>
                <span className="font-mono text-xs text-slate-800 dark:text-slate-200 uppercase tracking-wider font-bold">
                  Accredited Enterprise Credentials & Standards
                </span>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
                Microsoft Certified Solution Architect & Scaled Agile Consultant
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 transition-all flex flex-col justify-between gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${cred.color}`}>{cred.code}</span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[9px] font-bold border border-teal-200 dark:border-teal-800">
                      {cred.pillTag}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-2">{cred.title}</p>
                  <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">{cred.org}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CORE STRATEGIC ARCHITECTURE PILLARS (Clean White Cards + Mint Pill Tags) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="systems-grid">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-mono text-[11px] font-bold tracking-wider mb-2 border border-teal-200 dark:border-teal-800">
                CORE STRATEGIC ARCHITECTURE PILLARS
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0B375A] dark:text-white tracking-tight font-extrabold">
                High-Stakes Technical Leadership
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md leading-relaxed">
              Bridging executive strategy with rigorous systems architecture across modern cloud runtimes, Power Platform governance, and applied AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200/80 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-[10px] font-bold border border-teal-200 dark:border-teal-800">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0B375A] dark:text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-bold">
                    Key Frameworks & Tech
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-teal-50/80 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200/70 dark:border-teal-800/60 px-3 py-1 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. NUMBERED PROCESS CARDS (AL ADAA Style How We Deliver Sequence 1, 2, 3, 4) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="bg-teal-50/60 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-teal-100 dark:border-slate-800">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold block mb-1">
                DELIVERY METHODOLOGY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#0B375A] dark:text-white font-extrabold">
                Structured Enterprise Architecture & Execution Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-heading font-extrabold text-base flex items-center justify-center border border-teal-200 dark:border-teal-800">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0B375A] dark:text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. EXPERIENCE & ANNOUNCEMENTS ROW TIMELINE (AL ADAA Horizontal List Style) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-bold block mb-1">
                CAREER MILESTONES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[#0B375A] dark:text-white font-extrabold">
                Leadership History & Key Track Record
              </h2>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B375A] dark:text-teal-400 hover:underline"
            >
              <span>View Full Experience Record</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-slate-200/80 dark:divide-slate-800 border-y border-slate-200/80 dark:border-slate-800">
            {experienceRows.map((row, index) => (
              <div
                key={index}
                className="py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors px-3 rounded-lg"
              >
                <div className="lg:w-48 shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  {row.date}
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-heading text-base font-bold text-[#0B375A] dark:text-white">
                    {row.role}
                  </h3>
                  <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {row.organization}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                    {row.description}
                  </p>
                </div>

                <div className="shrink-0 pt-1 lg:pt-0">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${row.tagStyle}`}>
                    {row.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. FOLLOW & SOCIAL CONNECTIONS BANNER (AL ADAA Style Social Bar) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="bg-gradient-to-r from-teal-100 via-teal-50 to-sky-100 dark:from-slate-900 dark:via-teal-950 dark:to-slate-900 rounded-3xl p-6 sm:p-8 border border-teal-200/80 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-[#0B375A] dark:text-teal-300 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-xl">share</span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-heading text-base font-bold text-[#0B375A] dark:text-white">
                  Connect & Direct Engagement
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Consultation inquiries, architectural discussions, and executive networking.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://linkedin.com/in/amifar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 hover:bg-[#0B375A] hover:text-white dark:hover:bg-teal-600 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
              >
                LinkedIn
              </a>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-full bg-[#0B375A] text-white hover:bg-[#07243D] text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <span>Initiate Contact</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomeEditorial;
