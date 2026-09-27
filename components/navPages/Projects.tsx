"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Code,
  Award,
  Layers,
  ArrowLeft,
  Heart,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { jetbrainsMono } from "@/app/font";
import SkillsSection from "./Skills";
// Local techIconMap in case of import conflicts
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiStreamlit,
  SiVite,
} from "react-icons/si";

export const techIconMap: Record<string, React.ReactNode> = {
  react: <FaReact className="text-cyan-300" />,
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  mongo: <SiMongodb className="text-green-400" />,
  ts: <SiTypescript className="text-blue-500" />,
  next: <SiNextdotjs className="text-white" />,
  postgres: <SiPostgresql className="text-sky-500" />,
  python: <FaPython className="text-yellow-400" />,
  streamlit: <SiStreamlit className="text-red-500" />,
  vite: <SiVite className="text-purple-400" />,
};

interface Project {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  gradient: string;
  github: string;
  live: string;
  features: string[];
  implementation: string;
}

const projectsData: Project[] = [
  {
    title: "AI Resume & Career Assistant",
    description:
      "A GenAI application using Groq's LLaMA-3-70B for resume analysis, ATS optimization, skill-gap insights, and personalized 12-week roadmaps.",
    thumbnail: "/project_resume_coach.png",
    techStack: ["react", "node", "mongo"],
    gradient: "#51fbfb, rgb(13, 15, 60)",
    github: "https://github.com/kaladharb/RESUME-COACH",
    live: "https://resume-coach-five.vercel.app/",
    features: [
      "Built a GenAI application using Groq's LLaMA-3-70B for resume analysis and ATS optimization.",
      "Generated skill-gap insights and personalized 12-week career roadmaps based on job matching metrics.",
      "Engineered clean charts and visualizations for resume scores and data parsing using Recharts.",
    ],
    implementation:
      "A React and Node.js application connects resume workflows to MongoDB-backed data and presents scoring and roadmap results through responsive UI and charts.",
  },
  {
    title: "Multi-Agent Hybrid RAG",
    description:
      "Designed a multi-agent RAG pipeline with intelligent query routing, integrating Groq LLaMA and Google Gemini backends.",
    thumbnail: "/project_hybrid_rag.png",
    techStack: ["python", "streamlit"],
    gradient: "#14f195, rgb(13, 15, 60)",
    github: "https://github.com/kaladharb/PDF-CHAT-BOT",
    live: "https://pdf-bot-q-a-ef3uxiqrkcbhclzbgrp3fn.streamlit.app/",
    features: [
      "Designed a multi-agent RAG pipeline with intelligent query routing and PDF indexing.",
      "Integrated Groq LLaMA and Google Gemini backends to dynamically balance performance and cost.",
      "Built a fully interactive chatbot frontend using Streamlit and LangChain orchestration.",
    ],
    implementation:
      "A Streamlit frontend coordinates PDF indexing and conversational retrieval through a Python-based multi-agent orchestration layer.",
  },
  {
    title: "Echoes of Time",
    description:
      "Built a React.js application showcasing Telangana's history through interactive timelines, responsive UI, and dynamic navigation.",
    thumbnail: "/project_echoes_time.png",
    techStack: ["react", "ts"],
    gradient: "#64e, rgb(13, 15, 60)",
    github: "https://github.com/kaladharb/Echoes-of-Time",
    live: "https://echoes-of-time-theta.vercel.app/",
    features: [
      "Built a React.js application showcasing Telangana's rich history through interactive, animated timelines.",
      "Implemented responsive UI design, customized navigation hooks, and interactive mapping details.",
      "Optimized build size and asset delivery for high performance and smooth framer-motion transitions.",
    ],
    implementation:
      "A TypeScript React frontend with responsive navigation, interactive timeline views, and animated content transitions.",
  },
  {
    title: "HEEERA-E - EV Vehicle Management System",
    description:
      "A full-stack electric vehicle management platform with React and TypeScript frontend workflows backed by Node.js, Express, and MongoDB.",
    thumbnail: "/project_heerae.svg",
    techStack: ["react", "ts", "node", "express", "mongo"],
    gradient: "#8b5cf6, rgb(13, 15, 60)",
    github: "https://github.com/kaladharb/HEEERA-E",
    live: "https://www.heeraevehicles.in/user/home",
    features: [
      "Supports browsing electric vehicles, specifications, offers, comparison, and color customization for users.",
      "Provides admin workflows for vehicle, offer, inventory, customer, inquiry, notification, and settings management.",
      "Uses analytics views and REST API workflows to connect the React frontend with the Node.js, Express, and MongoDB backend.",
    ],
    implementation:
      "The frontend uses React, TypeScript, Vite, Tailwind CSS, Radix UI, React Router, Axios, and Recharts, with JWT-authenticated REST APIs backed by Mongoose.",
  },
  {
    title: "EduPapers - Engineering Question Papers Platform",
    description:
      "An engineering question-paper platform organized by branch, academic year, and exam type, with search, filtering, and user uploads.",
    thumbnail: "/project_edupapers.svg",
    techStack: ["react", "ts", "vite"],
    gradient: "#f59e0b, rgb(13, 15, 60)",
    github: "https://github.com/kaladharb/EDU-PAPERS",
    live: "",
    features: [
      "Organizes developer papers across CSE, ECE, AI, AIML, AIDS, EEE, MECH, and CIVIL branches with year and exam filters.",
      "Combines real-time search with Mid-1, Mid-2, and Semester paper categories for faster study-resource discovery.",
      "Supports multiple image uploads through ImgBB with upload metadata stored in localStorage for the platform workflow.",
    ],
    implementation:
      "A mobile-first React and TypeScript interface uses local paper data, responsive layouts, touch-friendly controls, and Framer Motion animations for browsing and uploads.",
  },
];

const techLabels: Record<string, string> = {
  react: "React",
  ts: "TypeScript",
  node: "Node.js",
  express: "Express",
  mongo: "MongoDB",
  vite: "Vite",
};

const certificatesData = [
  {
    name: "Summer of AI Internship",
    issuer: "VISWAM.AI × Meta × IIIT Hyderabad × Swecha",
    year: "2025",
    image: "/cert_summer_of_ai.png",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/cert_data_analytics.png",
  },
  {
    name: "GitHub Copilot Dev Days",
    issuer: "India Microsoft Fabric User Group × Hyderabad Data & AI Community",
    year: "2026",
    image: "/cert_copilot.jpg",
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "/cert_python_essentials.png",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    image: "/cert_cybersecurity.png",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "certificates" | "techstack"
  >("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  // Automatically switch tab when clicking menu/footer anchors
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#skills") {
        setActiveTab("techstack");
        setSelectedProject(null);
      } else if (hash === "#projects") {
        setActiveTab("projects");
        setSelectedProject(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href === "#skills") {
          setActiveTab("techstack");
          setSelectedProject(null);
        } else if (href === "#projects") {
          setActiveTab("projects");
          setSelectedProject(null);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    // Initial check on mount
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  // Tab configurations
  const tabs = [
    {
      id: "projects" as const,
      label: "Projects",
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      id: "certificates" as const,
      label: "Certificates",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      id: "techstack" as const,
      label: "Tech Stack",
      icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  return (
    <div
      id="projects"
      className={`${jetbrainsMono.className} w-full max-w-4xl px-4 py-16 flex flex-col gap-10 items-center justify-center relative`}
    >
      {/* Hidden skills scroll anchor target */}
      <div id="skills" className="absolute top-0 pointer-events-none" />

      {/* Header section (only show if not in project detail page) */}
      {!selectedProject && (
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="flex gap-2 text-[#e8390d] items-center justify-center font-bold">
            Made with{" "}
            <Heart className="w-5 h-5 text-[#e8390d] fill-[#e8390d]" />
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-600 py-1">
            Portfolio Showcase
          </h1>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      )}

      {/* Tabs list (only show if not in project detail page) */}
      {!selectedProject && (
        <div className="grid w-full max-w-xl grid-cols-3 items-stretch gap-1 sm:gap-2 rounded-2xl border border-zinc-800 bg-[#070913]/40 p-1 shadow-inner">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-w-0 min-h-11 items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-center text-xs font-bold leading-tight transition-all duration-300 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${
                  isActive
                    ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                {tab.icon}
                <span className="min-w-0 whitespace-normal">{tab.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Tab Contents */}
      <div className="w-full mt-4">
        {selectedProject ? (
          /* PROJECT DETAIL VIEW */
          <div className="w-full flex flex-col gap-8 animate-fade-in">
            {/* Breadcrumb & Back button */}
            <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-zinc-400 sm:gap-4 sm:text-sm">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 py-2 px-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white transition-all font-bold"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span>Projects</span>
                <span>&gt;</span>
                <span className="min-w-0 break-words text-violet-400 font-bold">
                  {selectedProject.title}
                </span>
              </div>
            </div>

            {/* Grid layout for project content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Column - Details */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="w-20 h-1 bg-violet-600 mt-2.5 rounded-full" />
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Stats boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-zinc-800 bg-[#0d1020]/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">
                        {selectedProject.techStack.length}
                      </p>
                      <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                        Total Tech
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-800 bg-[#0d1020]/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">
                        {selectedProject.features.length}
                      </p>
                      <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                        Key Features
                      </p>
                    </div>
                  </div>
                </div>

                {/* Link Buttons */}
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-0 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-bold text-white shadow-[0_4px_15px_rgba(124,58,237,0.3)] transition-all hover:bg-violet-700 sm:flex-1 sm:px-6"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 w-full items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-center text-sm font-bold text-zinc-300 transition-all hover:bg-zinc-800 sm:flex-1 sm:px-6"
                  >
                    <FiGithub className="w-4 h-4" /> Github
                  </a>
                </div>

                {/* Technologies used */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-zinc-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="flex min-w-0 max-w-full flex-wrap items-center gap-2 rounded-xl border border-zinc-800/80 bg-zinc-900 px-3.5 py-1.5 text-xs font-semibold capitalize text-zinc-300 break-words"
                      >
                        <span className="text-sm shrink-0">
                          {techIconMap[tech]}
                        </span>
                        {techLabels[tech] ?? tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 sm:text-sm">
                    Implementation
                  </h4>
                  <p className="break-words text-sm leading-relaxed text-zinc-300">
                    {selectedProject.implementation}
                  </p>
                </div>
              </div>

              {/* Right Column - Large image */}
              <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-2xl">
                <div
                  className="aspect-video relative w-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${selectedProject.gradient})`,
                  }}
                >
                  <Image
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    width={500}
                    height={300}
                    className="h-auto max-w-full w-[85%] object-contain rounded-xl border border-white/5 shadow-lg transition-transform duration-500 hover:scale-102"
                  />
                </div>
              </div>
            </div>

            {/* Key Features section */}
            <div className="mt-4 flex w-full min-w-0 flex-col gap-4 border-t border-zinc-800/80 pt-6">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-white">
                <TrophyIcon className="w-5 h-5 text-violet-400" /> Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="min-w-0 rounded-xl border border-zinc-800/60 bg-[#070913]/30 p-4 text-sm leading-relaxed text-zinc-300 break-words"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : activeTab === "projects" ? (
          /* TAB 1: PROJECTS GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-[#070913]/30 transition-all duration-300 hover:border-zinc-700/60"
              >
                {/* Thumbnail Image Header */}
                <div
                  className="relative aspect-video flex items-center justify-center p-4"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.gradient})`,
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={300}
                    height={180}
                    className="h-auto max-h-full max-w-full w-[85%] object-contain rounded-lg shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Details body */}
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-5">
                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className="break-words text-lg font-bold leading-snug text-white transition-colors group-hover:text-violet-400">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800/40 pt-3">
                    <div className="flex min-w-0 flex-wrap items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-w-0 max-w-full items-center gap-1 break-words text-xs font-bold text-violet-400 transition-colors hover:text-violet-300"
                        >
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-0 max-w-full items-center gap-1 break-words text-xs font-bold text-zinc-300 transition-colors hover:text-white"
                      >
                        <FiGithub className="h-3 w-3" /> GitHub
                      </a>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-850 px-3.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-zinc-800"
                    >
                      Details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : activeTab === "certificates" ? (
          /* TAB 2: CERTIFICATES GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {certificatesData.map((cert, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 bg-[#070913]/30 hover:border-zinc-700/60 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCertificate(cert.image)}
              >
                {/* Certificate Image */}
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="py-2.5 px-5 rounded-full bg-violet-600 text-white font-bold text-sm shadow-lg flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> View Certificate
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* TAB 3: TECH STACK SECTION */
          <div className="animate-fade-in w-full">
            <SkillsSection />
          </div>
        )}
      </div>

      {/* Lightbox Modal for Certificate View */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-1">
            <Image
              src={selectedCertificate}
              alt="Certificate"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Inline Icon Helper components
function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
      <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
    </svg>
  );
}
