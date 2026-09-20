import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TiltCard } from '../components/TiltCard';

interface SkillCard {
  id: string;
  category: 'platforms' | 'devops' | 'fullstack' | 'ai' | 'leadership';
  name: string;
  subtitle: string;
  level: string;
  levelBadgeClass: string;
  focus: string;
  years: string;
  icon: string;
  iconColorClass: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'powerplatform';
  categoryLabel: string;
  subtitle: string;
  badge: {
    text: string;
    bgClass: string;
    textClass?: string;
  };
  summary: string;
  techSections?: {
    title: string;
    icon: string;
    items: { name: string; desc: string; url?: string }[];
  }[];
  keyHighlights: string[];
  tags: string[];
}

export const SkillsProjectsPage: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const skills: SkillCard[] = [
    // Platforms & Tools
    {
      id: 'd365-ent',
      category: 'platforms',
      name: 'Dynamics 365 Enterprise',
      subtitle: 'CE, Sales, Service, Marketing',
      level: 'Principal',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'Multi-Tenant CRM Architecture',
      years: '11+ yrs',
      icon: 'view_quilt',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'power-apps',
      category: 'platforms',
      name: 'Power Apps Suite',
      subtitle: 'Model-Driven & Complex Canvas',
      level: 'Architect',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'Enterprise Citizen-Pro Mesh',
      years: '9+ yrs',
      icon: 'widgets',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'power-automate',
      category: 'platforms',
      name: 'Power Automate & RPA',
      subtitle: 'Cloud Flows & Desktop RPA',
      level: 'Lead',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'High-Volume Async Queuing',
      years: '8+ yrs',
      icon: 'schema',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'dataverse',
      category: 'platforms',
      name: 'Microsoft Dataverse',
      subtitle: 'Complex RBAC & Elastic Tables',
      level: 'Architect',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'Enterprise Schema & Virtual Tables',
      years: '10+ yrs',
      icon: 'database',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'power-bi',
      category: 'platforms',
      name: 'Power BI & Fabric',
      subtitle: 'Executive KPI & Row-Level Security',
      level: 'Expert',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'High-Concurrency Real-Time DAX',
      years: '7+ yrs',
      icon: 'bar_chart',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'power-pages',
      category: 'platforms',
      name: 'Power Pages Portals',
      subtitle: 'GovTech Resident-Facing Portals',
      level: 'Lead',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'Entra ID / B2C Federation',
      years: '6+ yrs',
      icon: 'public',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'pcf-framework',
      category: 'platforms',
      name: 'PCF Custom Framework',
      subtitle: 'React/TS Component Library',
      level: 'Master',
      levelBadgeClass: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800 font-bold',
      focus: 'High-Performance Custom Controls',
      years: '5+ yrs',
      icon: 'code_blocks',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },

    // Architecture & DevOps
    {
      id: 'coe-governance',
      category: 'devops',
      name: 'Center of Excellence (CoE)',
      subtitle: 'Enterprise Guardrails & Auditing',
      level: 'Director',
      levelBadgeClass: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-bold',
      focus: 'DLP Compliance & Policy Shields',
      years: '6+ yrs',
      icon: 'account_tree',
      iconColorClass: 'text-emerald-600',
    },
    {
      id: 'azure-devops-alm',
      category: 'devops',
      name: 'Azure DevOps & ALM',
      subtitle: 'Managed Solution CI/CD Pipelines',
      level: 'Lead',
      levelBadgeClass: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-bold',
      focus: 'Zero-Downtime Release Trains',
      years: '8+ yrs',
      icon: 'hub',
      iconColorClass: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'hybrid-gateway',
      category: 'devops',
      name: 'Hybrid On-Prem Gateways',
      subtitle: 'Secure On-Prem to Cloud Bridges',
      level: 'Architect',
      levelBadgeClass: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-bold',
      focus: 'DMZ Enterprise Security Gateway',
      years: '7+ yrs',
      icon: 'dns',
      iconColorClass: 'text-emerald-600 dark:text-emerald-400',
    },

    // Full-Stack & Backend
    {
      id: 'react-next',
      category: 'fullstack',
      name: 'React 18 & Next.js 14',
      subtitle: 'Server Components & Responsive UI',
      level: 'Lead',
      levelBadgeClass: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 font-bold',
      focus: 'High-Concurrency Web Apps',
      years: '6+ yrs',
      icon: 'devices',
      iconColorClass: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'python-fastapi',
      category: 'fullstack',
      name: 'Python 3.11 & FastAPI',
      subtitle: 'Async Microservice Endpoints',
      level: 'Architect',
      levelBadgeClass: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 font-bold',
      focus: 'High-Throughput REST APIs',
      years: '5+ yrs',
      icon: 'terminal',
      iconColorClass: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'csharp-net',
      category: 'fullstack',
      name: 'C# .NET Core & Plugins',
      subtitle: 'Dynamics Plugins & Azure Functions',
      level: 'Principal',
      levelBadgeClass: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 font-bold',
      focus: 'Asynchronous Event Handlers',
      years: '10+ yrs',
      icon: 'code',
      iconColorClass: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'docker-containers',
      category: 'fullstack',
      name: 'Docker & Microservices',
      subtitle: 'Containerization & Compose',
      level: 'Lead',
      levelBadgeClass: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 font-bold',
      focus: 'Decoupled Multi-Container Stack',
      years: '5+ yrs',
      icon: 'deployed_code',
      iconColorClass: 'text-indigo-600 dark:text-indigo-400',
    },

    // Applied AI & Automation
    {
      id: 'vapi-webrtc-voice',
      category: 'ai',
      name: 'Autonomous Voice AI',
      subtitle: 'WebRTC Streaming & Vapi AI',
      level: 'Architect',
      levelBadgeClass: 'bg-blue-600 text-white font-bold',
      focus: 'Real-Time Conversational Telephony',
      years: '3+ yrs',
      icon: 'settings_voice',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'openai-gpt-llm',
      category: 'ai',
      name: 'OpenAI GPT & LLM APIs',
      subtitle: 'Prompt Engineering & Function Calls',
      level: 'Lead',
      levelBadgeClass: 'bg-blue-600 text-white font-bold',
      focus: 'Transcript Extraction & Lead Scoring',
      years: '3+ yrs',
      icon: 'psychology',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'rag-langchain',
      category: 'ai',
      name: 'LangChain & RAG Pipelines',
      subtitle: 'Vector DBs & Semantic Retrieval',
      level: 'Lead',
      levelBadgeClass: 'bg-blue-600 text-white font-bold',
      focus: 'Enterprise Document Q&A Systems',
      years: '3+ yrs',
      icon: 'find_in_page',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'n8n-workflow-automation',
      category: 'ai',
      name: 'n8n Workflow Automation',
      subtitle: 'Self-Hosted Webhook Relays',
      level: 'Architect',
      levelBadgeClass: 'bg-blue-600 text-white font-bold',
      focus: 'Event-Driven Workflow Automation',
      years: '4+ yrs',
      icon: 'conversion_path',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
    },

    // Delivery Leadership
    {
      id: 'agile-safe-leadership',
      category: 'leadership',
      name: 'Agile & SAFe 6.0 Leadership',
      subtitle: 'Bi-Weekly Sprint Cadences',
      level: 'Director',
      levelBadgeClass: 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold',
      focus: 'Squad Management (8–15 Engineers)',
      years: '8+ yrs',
      icon: 'groups',
      iconColorClass: 'text-slate-800 dark:text-slate-300',
    },
    {
      id: 'presales-rfp-blueprints',
      category: 'leadership',
      name: 'Pre-Sales & RFP Blueprints',
      subtitle: 'Tender Blueprints & PoC Builds',
      level: 'Principal',
      levelBadgeClass: 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold',
      focus: '$12M+ Tenders Won',
      years: '7+ yrs',
      icon: 'description',
      iconColorClass: 'text-slate-800 dark:text-slate-300',
    }
  ];

  const projects: ProjectItem[] = [
    {
      id: 'voice-leads-ai',
      title: '🎙️ VoiceLeads AI (VocalSync CRM)',
      category: 'ai',
      categoryLabel: 'Autonomous Voice AI & CRM Automation',
      subtitle: 'Real-Time WebRTC AI Inbound/Outbound Caller & Lead Qualification Pipeline',
      badge: {
        text: 'FLAGSHIP AI PLATFORM',
        bgClass: 'bg-blue-600 text-white',
      },
      summary: 'VoiceLeads AI (VocalSync CRM) is a complete, full-stack voice-powered lead generation and CRM automation platform. It allows users to conduct real-time AI voice conversations directly in the browser via WebRTC (or over outbound phone calls), automatically extract prospect details (name, email, company, budget, timeframe, intent), compute AI lead qualification scores (HOT, WARM, COLD), and instantly synchronize leads across Google Sheets, SMTP Email notifications, n8n automation workflows, and a live web CRM dashboard.',
      techSections: [
        {
          title: 'Frontend Architecture',
          icon: 'desktop_windows',
          items: [
            { name: 'React 18', desc: 'Component-based UI library for building the CRM web application', url: 'https://react.dev/' },
            { name: 'Vite', desc: 'Next-generation frontend build tool providing instant HMR and optimized bundles', url: 'https://vitejs.dev/' },
            { name: '@vapi-ai/web', desc: 'WebRTC browser SDK used to manage real-time interactive voice calls with Vapi agents' },
            { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for responsive UI styling', url: 'https://tailwindcss.com/' },
            { name: 'Lucide React', desc: 'Icon library for UI elements (mikes, call controls, lead temperature indicators)', url: 'https://lucide.dev/' },
            { name: 'Axios', desc: 'Promise-based HTTP client for React and FastAPI communication', url: 'https://axios-http.com/' },
          ]
        },
        {
          title: 'Backend Microservices',
          icon: 'dns',
          items: [
            { name: 'Python 3.11+', desc: 'Core programming language', url: 'https://www.python.org/' },
            { name: 'FastAPI', desc: 'High-performance async framework for microservice endpoints & webhooks', url: 'https://fastapi.tiangolo.com/' },
            { name: 'Uvicorn', desc: 'Lightning-fast ASGI server implementation for async Python', url: 'https://www.uvicorn.org/' },
            { name: 'Pydantic v2', desc: 'Data validation and settings management using Python type hints', url: 'https://docs.pydantic.dev/' },
            { name: 'HTTPX', desc: 'Fully async HTTP client for outbound API requests (Vapi API & n8n webhooks)', url: 'https://www.python-httpx.org/' },
            { name: 'Pytest', desc: 'Automated unit & integration testing suite for backend routers', url: 'https://docs.pytest.org/' },
          ]
        },
        {
          title: 'AI Engine & Telephony',
          icon: 'psychology',
          items: [
            { name: 'Vapi AI', desc: 'Voice AI engine providing WebRTC audio streaming, TTS, STT, and phone dispatch', url: 'https://vapi.ai/' },
            { name: 'OpenAI GPT API', desc: 'LLM integration for automated transcript analysis, entity extraction, and lead temperature scoring', url: 'https://openai.com/' },
          ]
        },
        {
          title: 'Workflow Automation',
          icon: 'hub',
          items: [
            { name: 'n8n', desc: 'Self-hosted workflow automation engine with pre-configured JSON flows', url: 'https://n8n.io/' },
            { name: 'vapi_lead_sync_workflow.json', desc: 'Automated webhook relay for qualified leads' },
            { name: 'calendar_booking_flow.json', desc: 'Calendar slot checking and automated meeting booking logic' },
          ]
        },
        {
          title: 'Data Persistence & Integrations',
          icon: 'database',
          items: [
            { name: 'Google Sheets API (gspread)', desc: 'Real-time spreadsheet synchronization with OAuth2 authentication', url: 'https://docs.gspread.org/' },
            { name: 'SMTP Email Dispatcher', desc: 'Native Python smtplib implementation for rich HTML email notifications via Gmail App Passwords' },
            { name: 'JSON Storage', desc: 'Local persistent fallback data storage (leads.json) ensuring zero data loss if external APIs drop' },
          ]
        },
        {
          title: 'DevOps & Infrastructure',
          icon: 'deployed_code',
          items: [
            { name: 'Docker & Docker Compose', desc: 'Multi-container orchestration powering FastAPI backend service and self-hosted n8n instance', url: 'https://www.docker.com/' },
          ]
        }
      ],
      keyHighlights: [
        'Real-time WebRTC browser voice conversations and outbound telephony dispatch.',
        'Automated AI transcript parsing and lead temperature classification (HOT, WARM, COLD).',
        'Instant multi-channel sync across Google Sheets, SMTP Email alerts, n8n, and web dashboard.',
        'Zero-data-loss architecture with local JSON persistent fallbacks and containerized Docker execution.'
      ],
      tags: ['React 18', 'FastAPI', 'Vapi AI', 'WebRTC', 'OpenAI GPT', 'n8n', 'Google Sheets API', 'Docker']
    },
    {
      id: 'bazaarboost-marketplace',
      title: '🛍️ BazaarBoost: Ad-Driven Multi-Tenant Local Marketplace',
      category: 'ai',
      categoryLabel: 'Applied AI & Multi-Tenant SaaS E-Commerce',
      subtitle: 'The Intelligent, Ad-Driven Multi-Tenant Marketplace for Local Commerce',
      badge: {
        text: 'MULTI-TENANT SAAS + LOCAL AI',
        bgClass: 'bg-teal-50 text-teal-800 border border-teal-200/80 font-bold',
      },
      summary: 'BazaarBoost is a comprehensive, multi-tenant Software-as-a-Service (SaaS) e-commerce platform custom-tailored for local vendor ecosystems. Unlike traditional global SaaS models that rely on monthly credit card subscriptions, BazaarBoost monetizes via a Manual Bank Transfer Ad-Promotion Bidding/Slot System. The platform utilizes lightweight, open-source, locally hosted AI models to eliminate external API costs while offering automated product tagging, OCR-based fraud detection for payment receipts, and smart product recommendations.',
      techSections: [
        {
          title: 'Core SaaS & Ad Monetization Engine',
          icon: 'storefront',
          items: [
            { name: 'Multi-Tenant SaaS Architecture', desc: 'Isolated tenant data boundaries, custom vendor storefronts, and catalog management.' },
            { name: 'Ad-Promotion Bidding System', desc: 'Manual Bank Transfer slot auction & promotion bidding system replacing monthly subscriptions.' },
            { name: 'Manual Bank Transfer Payment Workflow', desc: 'Custom local payment workflow tailored for regional vendor financial habits.' },
          ]
        },
        {
          title: 'Locally Hosted Open-Source AI Stack',
          icon: 'smart_toy',
          items: [
            { name: 'OCR Receipt Fraud Detection Engine', desc: 'Tesseract/EasyOCR pipeline detecting tampered bank transfer payment receipts.' },
            { name: 'Automated AI Product Tagging', desc: 'On-device open-source NLP model classifying and tagging vendor product listings.' },
            { name: 'Smart Recommendation System', desc: 'Zero-API-cost vector embedding engine powering local vendor & item discovery.' },
          ]
        }
      ],
      keyHighlights: [
        'Multi-Tenant SaaS Architecture: Tailored multi-vendor e-commerce platform with isolated tenant environments.',
        'Ad-Promotion Bidding System: Manual bank transfer bidding slot system monetizing local vendor promotion.',
        'Locally Hosted Open-Source AI: Zero external API costs via self-hosted lightweight vision & NLP models.',
        'OCR Receipt Fraud Detection: Automated verification pipeline analyzing payment transfer slips for tampering.',
        'Smart AI Catalog & Discovery: Automated product categorization, tagging, and contextual buyer recommendations.'
      ],
      tags: ['Multi-Tenant SaaS', 'Locally Hosted AI', 'Python', 'OCR Fraud Detection', 'Ad Bidding System', 'Product Tagging', 'Smart Recommendations', 'Local E-Commerce']
    },
    {
      id: 'rag-medical-direct',
      title: '🩺 DIRECT: Diagnostic Reasoning RAG System (RAG_Medical)',
      category: 'ai',
      categoryLabel: 'Clinical AI & Retrieval-Augmented Generation',
      subtitle: 'End-to-End Clinical Diagnostic RAG Pipeline on MIMIC-IV-Ext Dataset',
      badge: {
        text: 'CLINICAL AI & RAG',
        bgClass: 'bg-teal-100 text-teal-900 border border-teal-300 font-bold',
      },
      summary: 'DIRECT (Diagnostic Reasoning for Clinical Notes) is a Retrieval-Augmented Generation (RAG) system designed to assist in medical diagnostics. It parses nested clinical JSON data from the MIMIC-IV-Ext dataset, indexes patient records into ChromaDB vector stores using sentence-transformers for efficient semantic search, and uses Google’s Gemini 1.5 Flash (via LangChain) to synthesize evidence-based diagnoses within an interactive Streamlit UI.',
      techSections: [
        {
          title: 'Ingestion & Data Parsing',
          icon: 'data_object',
          items: [
            { name: 'MIMIC-IV-Ext Dataset', desc: 'Clinical dataset containing complex nested patient diagnostic notes' },
            { name: 'Python Ingestion Engine', desc: 'Custom JSON parser structuring multi-tier clinical data into normalized schemas' },
          ]
        },
        {
          title: 'Vector Store & Semantic Retrieval',
          icon: 'find_in_page',
          items: [
            { name: 'ChromaDB', desc: 'High-performance vector database for embedding indexing and similarity search' },
            { name: 'sentence-transformers', desc: 'Dense vector embedding models fine-tuned for semantic clinical relevance' },
            { name: 'LangChain Retriever', desc: 'Contextual retrieval chains fetching relevant patient medical history' },
          ]
        },
        {
          title: 'LLM Reasoning & Streamlit UI',
          icon: 'psychology',
          items: [
            { name: 'Google Gemini 1.5 Flash', desc: 'Generative LLM (via LangChain) for evidence-based diagnostic synthesis' },
            { name: 'Streamlit UI', desc: 'Interactive clinical web application with transparent step-by-step retrieval visibility' },
          ]
        }
      ],
      keyHighlights: [
        'Ingestion & Parsing: Structures complex nested clinical JSON records from MIMIC-IV-Ext dataset.',
        'Vector Store & Search: ChromaDB vector database powered by sentence-transformers.',
        'LangChain Retrieval Pipeline: Semantic search retrieving highly relevant patient diagnostic context.',
        'Gemini 1.5 Flash Synthesis: Evidence-based diagnostic answer and clinical summary generation.',
        'Interactive Streamlit App: Real-time UI showcasing retrieval stages and diagnostic reasoning.'
      ],
      tags: ['Python', 'LangChain', 'Google Gemini 1.5 Flash', 'ChromaDB', 'sentence-transformers', 'Streamlit', 'MIMIC-IV-Ext', 'RAG']
    },
    {
      id: 'the-language-transformer',
      title: 'The Language Transformer',
      category: 'ai',
      categoryLabel: 'Applied AI & Natural Language Processing',
      subtitle: 'Custom Conversational Urdu Chatbot via From-Scratch Transformer Architecture',
      badge: {
        text: 'OPEN SOURCE NLP',
        bgClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold',
      },
      summary: 'Build a custom conversational chatbot for Urdu using a Transformer encoder-decoder architecture implemented from scratch (without pre-trained models). The model utilizes multi-head attention to capture contextual relationships and generate fluent, context-aware Urdu responses.',
      keyHighlights: [
        'Implemented Transformer encoder-decoder neural network completely from scratch in PyTorch.',
        'Multi-head self-attention mechanism capturing complex Urdu syntactic and semantic dependencies.',
        'Custom Urdu BPE tokenizer and sequence processing pipeline for low-resource NLP.',
        'Context-aware conversational response generation without reliance on commercial pre-trained weights.'
      ],
      tags: ['Python', 'PyTorch', 'Transformer Architecture', 'Multi-Head Attention', 'Urdu NLP', 'Encoder-Decoder', 'Seq2Seq']
    },
    {
      id: 'neural-storyteller',
      title: '📸 Neural Storyteller: Image Captioning Pipeline',
      category: 'ai',
      categoryLabel: 'Multimodal Deep Learning & Computer Vision',
      subtitle: 'CNN-RNN Encoder-Decoder Image Captioning System Trained on Flickr30k',
      badge: {
        text: 'COMPUTER VISION + NLP',
        bgClass: 'bg-indigo-100 text-indigo-900 border border-indigo-300 font-bold',
      },
      summary: 'A multimodal Deep Learning system that bridges Computer Vision and Natural Language Processing to generate descriptive captions for images. This project utilizes a CNN-RNN (Encoder-Decoder) architecture trained on the "Flickr30k" dataset.',
      keyHighlights: [
        'Hybrid CNN-RNN architecture bridging high-dimensional feature extraction and language generation.',
        'ResNet/VGG CNN feature encoder extracting spatial image embeddings.',
        'LSTM/GRU RNN decoder generating natural language descriptions with attention weights.',
        'Trained and evaluated on Flickr30k benchmark dataset with BLEU score evaluation.'
      ],
      tags: ['Python', 'PyTorch', 'CNN-RNN Architecture', 'Computer Vision', 'NLP', 'Flickr30k', 'Image Captioning']
    },
    {
      id: 'dge-government-platform',
      title: 'DGE Sovereign GovTech Platform',
      category: 'powerplatform',
      categoryLabel: 'Dynamics 365 & Power Platform Architecture',
      subtitle: 'Public Sector ICT Budgeting, AOP & Sovereign Dataverse Infrastructure',
      badge: {
        text: 'GOVERNMENT ENTERPRISE',
        bgClass: 'bg-slate-200 text-slate-900 border border-slate-300 font-bold',
      },
      summary: 'End-to-end delivery of sovereign public sector ICT budgeting, Annual Operating Plan (AOP), and executive KPI tracking platforms across 40+ government entities in the UAE and Oceania.',
      keyHighlights: [
        'Supervised zero-downtime migration of 3,000+ historical ICT records across 40 entities.',
        'Engineered Model-Driven and Canvas Power Apps with PCF custom controls and Dataverse integration.',
        'Governed 2-week Azure DevOps release trains and SteerCo executive dashboard reporting.',
        'Integrated hybrid on-premises data gateways with enterprise ERP systems.'
      ],
      tags: ['Dynamics 365 CE', 'Power Apps', 'Dataverse', 'Azure DevOps', 'Power BI', 'ALM Pipelines']
    }
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeSkillCategory === 'all' || skill.category === activeSkillCategory;
    const matchesSearch =
      searchTerm === '' ||
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.focus.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeProjectCategory === 'all' || project.category === activeProjectCategory;
    const matchesSearch =
      searchTerm === '' ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Ambient Glow */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-96 bg-gradient-to-b from-blue-100/50 via-slate-100/30 to-transparent dark:from-blue-900/20 dark:via-slate-900/10 dark:to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Section 1: Header, Breadcrumbs & Executive Metrics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-sans font-medium">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 font-bold">
              <span className="material-symbols-outlined text-sm">home</span>
              Home
            </Link>
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-slate-900 dark:text-white font-bold">Skills & Projects</span>
          </nav>

          {/* Eyebrow + Primary H1 */}
          <div className="flex flex-col gap-3 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/90 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/80 text-teal-800 dark:text-teal-200 text-xs font-semibold w-fit">
              <span className="material-symbols-outlined text-base">verified</span>
              <span className="font-sans text-xs uppercase tracking-wider font-bold">
                CAPABILITIES & TECHNICAL PORTFOLIO
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0B375A] dark:text-white font-extrabold tracking-tight">
              Enterprise Architecture, Applied AI & Technical Skills
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Over 8+ years orchestrating sovereign government digital transformations, mission-critical Power Platform & Dynamics 365 enterprise ecosystems, fault-tolerant cloud microservices, and applied cognitive AI systems.
            </p>
          </div>

          {/* Quick Metrics Bar (Bento Grid) with Hover Micro-Interactions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="group bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">PRACTICE DOMAINS</span>
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-xl group-hover:scale-110 transition-transform">domain</span>
              </div>
              <p className="font-heading text-3xl font-extrabold text-[#0B375A] dark:text-white mt-1">8+</p>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Core Specializations & Domains</span>
            </div>

            <div className="group bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">PORTFOLIO TRACK</span>
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-xl group-hover:scale-110 transition-transform">stacks</span>
              </div>
              <p className="font-heading text-3xl font-extrabold text-[#0B375A] dark:text-teal-400 mt-1">20+</p>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Enterprise Deployments</span>
            </div>

            <div className="group bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">SERVICES & APIS</span>
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-xl group-hover:scale-110 transition-transform">verified_user</span>
              </div>
              <p className="font-heading text-3xl font-extrabold text-[#0B375A] dark:text-teal-400 mt-1">50+</p>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Microservices & Integrations</span>
            </div>

            <div className="group bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">ALM STANDARD</span>
                <span className="material-symbols-outlined text-teal-700 dark:text-teal-400 text-xl group-hover:scale-110 transition-transform">hub</span>
              </div>
              <p className="font-heading text-3xl font-extrabold text-[#0B375A] dark:text-teal-400 mt-1">0-Debt</p>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Managed Solutions Only</span>
            </div>
          </div>
        </section>
      </div>

      {/* Section 2: Interactive Competency Matrix & Skills Section */}
      <section className="w-full bg-slate-100/70 dark:bg-slate-900/50 py-12 border-y border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
                Skill Taxonomy & Accreditations
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-slate-900 dark:text-white font-extrabold">
                Interactive Competency Matrix
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
                Cross-functional mastery across Microsoft Business Applications, Azure cloud architecture, full-stack microservices, and AI workflow orchestration.
              </p>
            </div>

            {/* Live Search Field */}
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg">search</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter skills, tools, stacks..."
                className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Skill Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            <button
              onClick={() => setActiveSkillCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                activeSkillCategory === 'all'
                  ? 'bg-[#0B375A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              All Skills ({skills.length})
            </button>
            <button
              onClick={() => setActiveSkillCategory('platforms')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                activeSkillCategory === 'platforms'
                  ? 'bg-[#0B375A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              Platforms & Tools (7)
            </button>
            <button
              onClick={() => setActiveSkillCategory('devops')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSkillCategory === 'devops'
                  ? 'bg-[#0B375A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              Architecture & DevOps (3)
            </button>
            <button
              onClick={() => setActiveSkillCategory('fullstack')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSkillCategory === 'fullstack'
                  ? 'bg-[#0B375A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              Full-Stack & Backend (4)
            </button>
            <button
              onClick={() => setActiveSkillCategory('ai')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSkillCategory === 'ai'
                  ? 'bg-[#0B375A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              Applied AI & Automation (4)
            </button>
            <button
              onClick={() => setActiveSkillCategory('leadership')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeSkillCategory === 'leadership'
                  ? 'bg-[#0B375A] text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              Delivery Leadership (2)
            </button>
          </div>

          {/* Skills Grid with Layout Shuffle & 3D Tilt */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <TiltCard className="group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 ease-out h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className={`material-symbols-outlined text-xl ${skill.iconColorClass}`}>{skill.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-heading text-sm font-extrabold text-[#0B375A] dark:text-white">{skill.name}</h3>
                          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold">{skill.subtitle}</span>
                        </div>
                      </div>
                      <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full font-bold border border-teal-200 dark:border-teal-800 ${skill.levelBadgeClass}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="mt-4 pt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-medium">{skill.focus}</span>
                      <span className="font-mono text-[#0B375A] dark:text-teal-300 font-bold">{skill.years}</span>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Section 3: Featured Systems & Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-1 max-w-xl">
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
              Project Portfolio & System Implementations
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-slate-900 dark:text-white font-extrabold">
              Featured AI & Engineering Systems
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 font-normal">
              Full-stack production builds, multimodal deep learning models, and enterprise solution architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap">
            <button
              onClick={() => setActiveProjectCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                activeProjectCategory === 'all'
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveProjectCategory('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                activeProjectCategory === 'ai'
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              AI & RAG ({projects.filter((p) => p.category === 'ai').length})
            </button>
            <button
              onClick={() => setActiveProjectCategory('powerplatform')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                activeProjectCategory === 'powerplatform'
                  ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              Enterprise D365 ({projects.filter((p) => p.category === 'powerplatform').length})
            </button>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8"
            >
              <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500 mb-2">search_off</span>
              <p className="text-base font-bold text-slate-900 dark:text-white font-heading">No projects match your current search query</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Clear the search input above to view all featured systems.</p>
            </motion.div>
          ) : (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 ease-out space-y-6"
              >
                {/* Header Badge & Title */}
                <div className="flex flex-col gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800 ${project.badge.bgClass}`}>
                      {project.badge.text}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">{project.categoryLabel}</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B375A] dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-bold text-teal-700 dark:text-teal-400">
                    {project.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Tech Stack Breakdown Grid (For VoiceLeads AI) */}
                {project.techSections && (
                  <div className="space-y-4 pt-2">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base text-blue-600 dark:text-blue-400">developer_board</span>
                      <span>Technologies & System Architecture ("What Things Are Used In It")</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.techSections.map((sec, sIdx) => (
                        <div key={sIdx} className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-3">
                          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xs font-heading">
                            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-base">{sec.icon}</span>
                            <span>{sec.title}</span>
                          </div>
                          <ul className="space-y-2">
                            {sec.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-xs leading-normal">
                                {item.url ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                  >
                                    {item.name}
                                    <span className="material-symbols-outlined text-[10px]">open_in_new</span>
                                  </a>
                                ) : (
                                  <span className="font-bold text-slate-900 dark:text-white">{item.name}</span>
                                )}
                                <span className="text-slate-600 dark:text-slate-400 text-[11px] block mt-0.5">{item.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Deliverable Bullet Points */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-1">
                    Key Architectural Impact & Capabilities:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.keyHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                        <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-sm shrink-0 mt-0.5">check_circle</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags Strip */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1 font-bold">
                    Stack Tags:
                  </span>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="font-mono text-[11px] px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800/80 rounded text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))
          )}
        </AnimatePresence>
      </section>

    </div>
  );
};
