import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import { FaReact, FaNodeJs, FaPython } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiPostgresql, SiStreamlit } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
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

const projects = [
  {
    title: "AI Resume & Career Assistant",
    description: "A GenAI application using Groq's LLaMA-3-70B for resume analysis, ATS optimization, skill-gap insights, and personalized 12-week roadmaps.",
    thumbnail: "/project_resume_coach.png",
    techStack: ["react", "node", "mongo"],
    gradient: "#51fbfb, rgb(13, 1, 60)",
    github: "https://github.com/kaladharb", // TODO: Update to project-specific repository URL
    live: "https://resume-coach-five.vercel.app/",
  },
  {
    title: "Multi-Agent Hybrid RAG",
    description: "Designed a multi-agent RAG pipeline with intelligent query routing, integrating Groq LLaMA and Google Gemini backends.",
    thumbnail: "/project_hybrid_rag.png",
    techStack: ["python", "streamlit"],
    gradient: "#14f195, rgb(13, 1, 60)",
    github: "https://github.com/kaladharb", // TODO: Update to project-specific repository URL
    live: "https://pdf-bot-q-a-ef3uxiqrkcbhclzbgrp3fn.streamlit.app/",
  },
  {
    title: "Echoes of Time",
    description: "Built a React.js application showcasing Telangana's history through interactive timelines, responsive UI, and dynamic navigation.",
    thumbnail: "/project_echoes_time.png",
    techStack: ["react", "ts"],
    gradient: "#64e, rgb(13, 1, 60)",
    github: "https://github.com/kaladharb", // TODO: Update to project-specific repository URL
    live: "https://echoes-of-time-theta.vercel.app/",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="projects" className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex gap-2 text-[#e8390d]">
          Made with <Heart />
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} flex flex-col gap-6 w-full `}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
