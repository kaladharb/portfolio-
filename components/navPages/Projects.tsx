"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Code, Award, Layers, ArrowLeft, Heart, ExternalLink, ShieldAlert } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { jetbrainsMono } from "@/app/font";
import SkillsSection from "./Skills";
// Local techIconMap in case of import conflicts
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql, SiStreamlit } from "react-icons/si";

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
}

const projectsData: Project[] = [
  {
    title: "AI Resume & Career Assistant",
    description: "A GenAI application using Groq's LLaMA-3-70B for resume analysis, ATS optimization, skill-gap insights, and personalized 12-week roadmaps.",
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
  },
  {
    title: "Multi-Agent Hybrid RAG",
    description: "Designed a multi-agent RAG pipeline with intelligent query routing, integrating Groq LLaMA and Google Gemini backends.",
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
  },
  {
    title: "Echoes of Time",
    description: "Built a React.js application showcasing Telangana's history through interactive timelines, responsive UI, and dynamic navigation.",
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
  },
];

const certificatesData = [
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/cisco_data_analytics.png",
  },
  {
    name: "Python Programming",
    issuer: "Cisco Networking Academy",
    year: "2025",
    image: "/cisco_python.png",
  },
  {
    name: "Database Management System (DBMS) Fundamentals",
    issuer: "Cisco Networking Academy (Dummy)",
    year: "2024",
    image: "/dbms_fundamentals.png",
  },
  {
    name: "Summer of AI Participation",
    issuer: "VISWAM.AI × Meta × IIIT Hyderabad",
    year: "2025",
    image: "/summer_of_ai.png",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "techstack">("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  // Tab configurations
  const tabs = [
    { id: "projects" as const, label: "Projects", icon: <Code className="w-5 h-5" /> },
    { id: "certificates" as const, label: "Certificates", icon: <Award className="w-5 h-5" /> },
    { id: "techstack" as const, label: "Tech Stack", icon: <Layers className="w-5 h-5" /> },
  ];

  return (
    <div id="projects" className={`${jetbrainsMono.className} w-full max-w-4xl px-4 py-16 flex flex-col gap-10 items-center justify-center`}>
      
      {/* Header section (only show if not in project detail page) */}
      {!selectedProject && (
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="flex gap-2 text-[#e8390d] items-center justify-center font-bold">
            Made with <Heart className="w-5 h-5 text-[#e8390d] fill-[#e8390d]" />
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-500 to-purple-600 py-1">
            Portfolio Showcase
          </h1>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-base leading-relaxed mt-2">
            Explore my journey through projects, certifications, and technical expertise. 
            Each section represents a milestone in my continuous learning path.
          </p>
        </div>
      )}

      {/* Tabs list (only show if not in project detail page) */}
      {!selectedProject && (
        <div className="w-full flex items-center justify-center bg-[#070913]/40 border border-zinc-800 p-1.5 rounded-2xl gap-2 md:max-w-xl shadow-inner">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
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
            <div className="flex items-center gap-4 text-xs sm:text-sm text-zinc-400">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 py-2 px-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-white transition-all font-bold"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <div className="flex items-center gap-2">
                <span>Projects</span>
                <span>&gt;</span>
                <span className="text-violet-400 font-bold">{selectedProject.title}</span>
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

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Stats boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-zinc-800 bg-[#0d1020]/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">{selectedProject.techStack.length}</p>
                      <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-semibold">Total Tech</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-800 bg-[#0d1020]/80 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">{selectedProject.features.length}</p>
                      <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-semibold">Key Features</p>
                    </div>
                  </div>
                </div>

                {/* Link Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 transition-all shadow-[0_4px_15px_rgba(124,58,237,0.3)] text-sm"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold hover:bg-zinc-800 transition-all text-sm"
                  >
                    <FiGithub className="w-4 h-4" /> Github
                  </a>
                </div>

                {/* Technologies used */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="text-zinc-300 text-xs sm:text-sm font-bold uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800/80 text-xs font-semibold capitalize text-zinc-300"
                      >
                        <span className="text-sm shrink-0">{techIconMap[tech]}</span>
                        {tech === "ts" ? "TypeScript" : tech === "mongo" ? "MongoDB" : tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Large image */}
              <div className="w-full relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 shadow-2xl">
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
                    className="object-contain w-[85%] h-auto rounded-xl shadow-lg border border-white/5 transition-transform duration-500 hover:scale-102"
                  />
                </div>
              </div>
            </div>

            {/* Key Features section */}
            <div className="w-full flex flex-col gap-4 mt-4 border-t border-zinc-800/80 pt-6">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-white">
                <TrophyIcon className="w-5 h-5 text-violet-400" /> Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-800/60 bg-[#070913]/30 text-zinc-400 text-sm leading-relaxed"
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
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-[#070913]/30 overflow-hidden hover:border-zinc-700/60 transition-all duration-300"
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
                    className="object-contain w-[85%] h-[85%] rounded-lg shadow-md group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Details body */}
                <div className="p-5 flex-1 flex flex-col gap-3 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center justify-between mt-2 pt-3 border-t border-zinc-800/40">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="py-1.5 px-3.5 rounded-lg bg-zinc-850 border border-zinc-800 hover:bg-zinc-800 text-white text-xs font-bold transition-all"
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
