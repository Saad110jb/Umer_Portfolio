import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import umerPic from '../components/Umer_pic.jpeg';

interface ExperienceNode {
  id: number;
  role: string;
  organization: string;
  location: string;
  tenure: string;
  statusBadge: {
    text: string;
    icon: string;
    bgClass: string;
    textClass: string;
    isCurrent?: boolean;
  };
  dealMetric?: {
    label: string;
    value: string;
  };
  scope: string;
  impactBadges: string[];
  deliverables: string[];
  techStack: string[];
  markerColorClass: string;
  titleColorClass: string;
  deliverableBgClass: string;
  deliverableIconClass: string;
}

export const ExperiencePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  const experiences: ExperienceNode[] = [
    {
      id: 1,
      role: 'Delivery Manager / Director',
      organization: 'Datanox',
      location: 'Dubai, UAE & Sydney, Australia',
      tenure: 'July 2025 – Present',
      statusBadge: {
        text: 'CURRENT LEADERSHIP ENGAGEMENT',
        icon: 'verified',
        bgClass: 'bg-emerald-100 border border-emerald-300',
        textClass: 'text-emerald-900',
        isCurrent: true,
      },
      scope: 'Leading enterprise transformation programs and high-stakes government delivery squads across Oceania and the Middle East, steering strategic platform modernizations with multi-agency ICT footprint.',
      impactBadges: ['Agile Governance & SAFe', 'GovTech DGE Programs', 'Dataverse Migration', 'Executive SteerCo', 'Azure DevOps CI/CD'],
      deliverables: [
        'Managed cross-functional squads (8–15 software engineers, QA leads, and functional consultants) across parallel workstreams.',
        'Governed 2-week Azure DevOps sprint cadences, proactive RAID log mitigation, SteerCo status reporting, and multi-million dollar budget allocations.',
        'Oversaw sovereign GovTech digital platforms (DGE) for public sector ICT budgeting, Annual Operating Plans (AOP), and ministry-level KPI tracking dashboards.',
        'Oversaw migration of 3,000+ ICT historical records across 40 government entities with zero downtime and 100% data integrity.',
        'Directed UAT and Production releases, downtime coordination, smoke testing, and post-go-live support governance.'
      ],
      techStack: ['Dynamics 365 CE', 'Power Apps', 'Azure DevOps', 'Dataverse', 'FastAPI', 'Bicep IaC'],
      markerColorClass: 'bg-blue-600',
      titleColorClass: 'text-blue-600',
      deliverableBgClass: 'bg-blue-100',
      deliverableIconClass: 'text-blue-600',
    },
    {
      id: 2,
      role: 'Pre-Sales Solution Architect & Lead Consultant',
      organization: 'EPM Partners',
      location: 'Sydney, Australia (Hybrid / Remote)',
      tenure: 'August 2021 – June 2025',
      statusBadge: {
        text: 'SOLUTIONS ARCHITECTURE & PRE-SALES',
        icon: 'architecture',
        bgClass: 'bg-blue-100 border border-blue-300',
        textClass: 'text-blue-900',
      },
      dealMetric: {
        label: 'Tenders Won',
        value: '$12M+ Direct Won',
      },
      scope: 'Spearheaded enterprise Power Platform architectural blueprints, enterprise customer tenders, and Center of Excellence (CoE) rollouts across major financial institutions and government accounts.',
      impactBadges: ['CoE Hardening', 'Enterprise Pre-Sales', 'Hybrid ERP/CRM Integrations', 'Solution Blueprints'],
      deliverables: [
        'Engineered hybrid Power Platform enterprise architectures and CoE governance guardrails, ALM pipelines, and maker DLP policies.',
        'Delivered custom connectors and third-party integrations into SAP ERP, Oracle Cloud, and TechnologyOne.',
        'Authored technical solution blueprints, RFPs, RFIs, and customer working proof-of-concepts (PoCs) winning $12M+ in client contracts.',
        'Led sprint planning workshops, translated functional requirements into technical backlog user stories, and guided pre-sales to live implementation.'
      ],
      techStack: ['Power Platform CoE', 'Azure Service Bus', 'Custom Connectors', 'SAP Integration', 'C# .NET', 'Power Pages'],
      markerColorClass: 'bg-blue-600',
      titleColorClass: 'text-blue-600',
      deliverableBgClass: 'bg-blue-100',
      deliverableIconClass: 'text-blue-600',
    },
    {
      id: 3,
      role: 'Dynamics CRM & Power Platform Developer',
      organization: 'Hearing Australia',
      location: 'Sydney, NSW, Australia',
      tenure: 'January 2019 – July 2021',
      statusBadge: {
        text: 'CORE CLOUD TRANSFORMATION',
        icon: 'cloud_sync',
        bgClass: 'bg-purple-100 border border-purple-300',
        textClass: 'text-purple-900',
      },
      dealMetric: {
        label: 'Sector',
        value: 'National Healthcare',
      },
      scope: 'Spearheaded national health services digital modernization, migrating legacy on-premises CRM to secure cloud infrastructure, empowering clinical practitioners nationwide with robust automation.',
      impactBadges: ['Cloud Modernization', 'C# Plugin Engine', '60+ SSRS Reports', 'Healthcare Compliance'],
      deliverables: [
        'Modernized on-premises Dynamics CRM 2016 to Dynamics 365 Online with automated Azure DevOps CI/CD deployment pipelines.',
        'Implemented custom C# .NET plugins, client scripts, client-side TypeScript, SSRS reports, and Power Automate flows.',
        'Built responsive Canvas Apps and automated Power Automate approval workflows streamlining clinical practitioner requests.',
        'Maintained environment lifecycle management (ALM), security role models, and tenant-wide governance under strict healthcare privacy standards.'
      ],
      techStack: ['Dynamics CRM 2016 to D365 Online', 'C# Plugins', 'TypeScript', 'Power Automate', 'SSRS', 'Azure DevOps'],
      markerColorClass: 'bg-blue-600',
      titleColorClass: 'text-blue-600',
      deliverableBgClass: 'bg-purple-100',
      deliverableIconClass: 'text-purple-600',
    },
    {
      id: 4,
      role: 'Junior CRM Consultant & Intern',
      organization: 'A Dot Dynamics & Empower IT Solutions',
      location: 'Sydney, Australia',
      tenure: '2017 – 2018',
      statusBadge: {
        text: 'FOUNDATIONAL ENGINEERING',
        icon: 'code_blocks',
        bgClass: 'bg-slate-200 border border-slate-300',
        textClass: 'text-slate-800',
      },
      scope: 'Foundation in Microsoft business applications development, client requirements elicitation, and system maintenance across Australian mid-market commercial operations.',
      impactBadges: ['CRM Customization', 'Data Modeling', 'SLA Support'],
      deliverables: [
        'Configured Dynamics 365 Sales, custom entities, forms, views, and client support workflows.',
        'Customized Dynamics CRM 2016 / D365, writing C# plugins and JavaScript web resources to enhance system features.',
        'Consolidated multiple 2016 CRM environments into unified instances and built 60+ custom SSRS reports.',
        'Learned core CRM Dynamics 2013-2016 stack, C#, .NET, JavaScript, and SQL under senior architects.'
      ],
      techStack: ['Dynamics 365 Sales', 'C# .NET', 'JavaScript', 'SQL Server', 'SSRS', 'Custom Entities'],
      markerColorClass: 'bg-slate-400',
      titleColorClass: 'text-slate-800',
      deliverableBgClass: 'bg-slate-100',
      deliverableIconClass: 'text-slate-600',
    }
  ];

  const [expandedNodes, setExpandedNodes] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const allExpanded = Object.values(expandedNodes).every(Boolean);

  const toggleNode = (id: number) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = () => {
    const nextState = !allExpanded;
    setExpandedNodes({
      1: nextState,
      2: nextState,
      3: nextState,
      4: nextState,
    });
  };

  return (
    <div className="w-full min-h-screen text-slate-900 dark:text-slate-100 relative">
      {/* Ambient Glow Canvas */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-950/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-80 left-10 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Top Eyebrow, Hero Heading, Sub-lead */}
          <div className="flex flex-col gap-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 rounded-lg text-blue-600 dark:text-blue-400 font-bold">
              <span className="material-symbols-outlined text-base">account_tree</span>
              <span className="font-mono text-xs uppercase tracking-wider">
                CAREER TRAJECTORY & EXECUTIVE LEADERSHIP
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight font-extrabold">
              Professional Experience & Enterprise Track Record
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Over a decade of orchestrating mission-critical enterprise deliveries, architectural governance, cloud modernization, and cross-functional engineering squads across Australia and the UAE.
            </p>
          </div>

          {/* Quick Career Metrics Strip (4-Card Bento) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="relative p-5 bg-white dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Experience</span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                </div>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-1">10+ Years</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Enterprise Delivery Leadership</div>
              <div className="mt-3 pt-2 flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold border-t border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-sm">trending_up</span> Australia & MEA
              </div>
            </div>

            <div className="relative p-5 bg-white dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Volume</span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">account_balance_wallet</span>
                </div>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight leading-none mb-1">$40M+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Cumulative Project Delivery Volume</div>
              <div className="mt-3 pt-2 flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-mono font-medium border-t border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-sm">format_image_left</span> Tier-1 Public & Private
              </div>
            </div>

            <div className="relative p-5 bg-white dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Entities</span>
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">corporate_fare</span>
                </div>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-1">40+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Gov & Tier-1 Entities Transformed</div>
              <div className="mt-3 pt-2 flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold border-t border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-sm">sync_alt</span> Sovereign DGE Programs
              </div>
            </div>

            <div className="relative p-5 bg-white dark:bg-slate-900/90 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Governance</span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">timelapse</span>
                </div>
              </div>
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight leading-none mb-1">100%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">On-Time Milestone Governance</div>
              <div className="mt-3 pt-2 flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-mono font-medium border-t border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-sm">task_alt</span> Zero Critical SLA Drift
              </div>
            </div>
          </div>

          {/* Interactive Global Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined text-sm">timeline</span>
              </div>
              <span className="font-mono text-xs text-slate-800 dark:text-slate-200 font-bold tracking-wide">
                Showing 4 Executive Milestones • 2017 to Present
              </span>
            </div>
            <button
              type="button"
              onClick={toggleAll}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all self-start sm:self-auto cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <span>{allExpanded ? 'Collapse All Deliverables' : 'Expand All Deliverables'}</span>
              <span className={`material-symbols-outlined text-base transition-transform duration-200 ${allExpanded ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
          </div>

          {/* Vertical Timeline System with Animated SVG Cable */}
          <div ref={containerRef} className="relative mt-8 space-y-8">
            
            {/* Background Base Spine Line */}
            <div className="absolute left-4 sm:left-8 top-6 bottom-8 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

            {/* Dynamic Drawn SVG Cable Path */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-4 sm:left-8 top-6 bottom-8 w-[2.5px] bg-gradient-to-b from-blue-600 via-indigo-600 to-emerald-500 origin-top -translate-x-1/2 z-0 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]"
            />

            {experiences.map((exp) => {
              const isExpanded = expandedNodes[exp.id];

              return (
                <div key={exp.id} className="relative pl-12 sm:pl-20">

                  {/* Connector Node Marker with Radar Pulse */}
                  <div className="absolute left-4 sm:left-8 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-md z-10 border border-slate-300 dark:border-slate-700">
                    {exp.statusBadge.isCurrent ? (
                      <div className="w-4 h-4 rounded-full bg-blue-600 relative flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <motion.span
                          animate={{ scale: [1, 2.2], opacity: [0.75, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                          className="absolute inset-0 rounded-full bg-blue-600"
                        />
                      </div>
                    ) : (
                      <div className={`w-3.5 h-3.5 rounded-full ${exp.markerColorClass}`} />
                    )}
                  </div>

                  {/* Timeline Card */}
                  <div className="bg-white dark:bg-slate-900/90 rounded-xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                    
                    {/* Header Block */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4">
                      <div className="flex flex-col gap-1">
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${exp.statusBadge.bgClass} ${exp.statusBadge.textClass} rounded-md self-start font-bold`}>
                          {exp.statusBadge.isCurrent ? (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                            </span>
                          ) : (
                            <span className="material-symbols-outlined text-xs">{exp.statusBadge.icon}</span>
                          )}
                          <span className="font-mono text-[11px] tracking-wider uppercase">
                            {exp.statusBadge.text}
                          </span>
                        </div>

                        {/* Role Title & Organization */}
                        <div className="flex flex-wrap items-baseline gap-2 mt-1">
                          <h2 className="font-heading text-xl sm:text-2xl text-slate-900 dark:text-white font-extrabold">
                            {exp.role}
                          </h2>
                          <span className="text-slate-400 dark:text-slate-600 font-bold">•</span>
                          <span className={`font-heading text-lg sm:text-xl font-extrabold ${exp.titleColorClass}`}>
                            {exp.organization}
                          </span>
                        </div>

                        {/* Tenure & Location */}
                        <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-400 text-xs mt-1">
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-slate-400">calendar_today</span>
                            <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{exp.tenure}</span>
                          </div>
                          <span className="text-slate-300 dark:text-slate-700">•</span>
                          <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm text-slate-400">location_on</span>
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>

                      </div>

                      {/* Deal Volume / Metric Badge */}
                      {exp.dealMetric ? (
                        <div className="p-2.5 px-4 bg-blue-50 dark:bg-blue-950/60 rounded-lg self-start text-right hidden sm:block border border-blue-200 dark:border-blue-800/80">
                          <div className="font-mono text-[10px] text-blue-800 dark:text-blue-300 uppercase tracking-wider font-bold">{exp.dealMetric.label}</div>
                          <div className="font-heading text-base font-extrabold text-blue-700 dark:text-blue-400">{exp.dealMetric.value}</div>
                        </div>
                      ) : exp.statusBadge.isCurrent ? (
                        <div className="hidden sm:flex items-center gap-2 p-2 px-3 bg-slate-50 dark:bg-slate-800/80 rounded-lg self-start border border-slate-200 dark:border-slate-700">
                          <img src={umerPic} alt="Umar Avatar" className="w-7 h-7 rounded-full object-cover object-top" />
                          <div className="flex flex-col">
                            <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-wider">PRACTICE LEAD</span>
                            <span className="font-mono text-[11px] text-slate-900 dark:text-slate-100 font-bold">Oceania • MEA</span>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Scope Overview */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {exp.scope}
                    </p>

                    {/* Key Impact Badges */}
                    <div className="flex flex-wrap gap-1.5 my-4">
                      {exp.impactBadges.map((badge, bIdx) => (
                        <span key={bIdx} className="font-mono text-[11px] px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded font-bold border border-slate-200 dark:border-slate-700">
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Accordion Deliverables Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleNode(exp.id)}
                      className="w-full flex items-center justify-between p-3 px-4 bg-slate-50 dark:bg-slate-800/80 rounded-lg text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-left border border-slate-200 dark:border-slate-700"
                    >
                      <div className="flex items-center gap-2 font-heading text-sm sm:text-base font-bold">
                        <span className={`material-symbols-outlined ${exp.titleColorClass} text-lg`}>fact_check</span>
                        <span>Key Deliverables & Strategic Outcomes</span>
                      </div>
                      <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>

                    {/* Expandable Deliverables Panel with Spring Accordion */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 p-4 bg-white dark:bg-slate-900 rounded-lg flex flex-col gap-2.5 border border-slate-200 dark:border-slate-800 shadow-inner">
                            {exp.deliverables.map((item, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full ${exp.deliverableBgClass} flex items-center justify-center shrink-0 mt-0.5 ${exp.deliverableIconClass}`}>
                                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech Stack Footer Strip */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mr-1 font-bold">
                        Architecture Stack:
                      </span>
                      {exp.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="font-mono text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700 font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-16 text-center space-y-4 pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
              Looking for tailored solution architecture or delivery governance for your organization?
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]"
              >
                <span>Initiate Executive Consultation</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
