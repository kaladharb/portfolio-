"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, GraduationCap, Trophy, Award } from "lucide-react";
import { jetbrainsMono } from "@/app/font";

export default function ExperienceEducation() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const cardShadow = isDarkMode
    ? {
        boxShadow: "rgba(200, 200, 200, 0.2) 2px 2px 6px, rgba(160, 160, 160, 0.15) 0px 6px 10px",
      }
    : {
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.1) 0px 10px 15px, rgba(0, 0, 0, 0.05) 0px 4px 6px",
      };

  const internships = [
    {
      company: "MicroSys Logic Technologies",
      role: "Web Developer Intern (Full-Stack)",
      location: "Hyderabad, India",
      duration: "Oct 2025 – Apr 2026",
      details: [
        "Developed and enhanced responsive React.js components, improving user experience across multiple modules.",
        "Worked across the full stack by integrating frontend interfaces with backend APIs and database systems.",
        "Assisted in API integration, authentication, and feature implementation, reducing development bottlenecks.",
        "Collaborated in an agile environment, participating in code reviews, debugging, testing, and deployment.",
      ],
    },
    {
      company: "VISWAM.AI × Meta × IIIT Hyderabad",
      role: "AI Intern (Summer of AI Program)",
      location: "Hyderabad, India",
      duration: "May 2025 – Jun 2025",
      details: [
        "Completed a 4-week intensive AI program focused on technology solutions for real-world and social-impact challenges.",
        "Worked in a collaborative team environment under mentors from VISWAM.AI, Meta, and IIIT Hyderabad.",
        "Contributed to the development of an AI-powered solution by participating in problem analysis and prototyping.",
        "Gained practical exposure to AI workflows, rapid prototyping, and project delivery.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institute: "Vidya Jyothi Institute of Technology (VJIT)",
      location: "Hyderabad, India",
      duration: "Jul 2023 – 2027 (Expected)",
      score: "CGPA: 8.4 / 10.0",
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institute: "SVS Group of Institutions",
      location: "Hanamkonda, India",
      duration: "Aug 2021 – Apr 2024",
      score: "CGPA: 8.84 / 10.0",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "TSMS Lachapet",
      location: "Telangana, India",
      duration: "2021",
      score: "GPA: 10.0 / 10.0",
    },
  ];

  const certifications = [
    { name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", year: "2026" },
    { name: "Python Programming", issuer: "Cisco Networking Academy", year: "2025" },
    { name: "Database Management System (DBMS) Fundamentals", issuer: "NPTEL / Coursework", year: "2024" },
    { name: "Summer of AI Participation", issuer: "VISWAM.AI × Meta × IIIT Hyderabad", year: "2025" },
  ];

  const achievements = [
    { title: "Smart India Hackathon (SIH) 2024", desc: "Cleared the internal college round and represented the team." },
    { title: "InnoQuest Hackathon", desc: "Ranked among Top 10 teams." },
    { title: "Summer of AI", desc: "Completed AI innovation program under VISWAM.AI, Meta and IIIT Hyderabad." },
  ];

  return (
    <section id="experience" className={`${jetbrainsMono.className} w-full max-w-4xl px-4 py-16 flex flex-col gap-16`}>
      {/* Experience Block */}
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
          <Briefcase className="text-[#e8390d] w-8 h-8" /> Experience
        </h2>
        <div className="flex flex-col gap-6">
          {internships.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 transform hover:-translate-y-1"
              style={cardShadow}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border pb-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-[#e8390d] font-semibold text-sm sm:text-base">{job.company}</p>
                </div>
                <div className="text-left md:text-right text-xs sm:text-sm text-muted-foreground">
                  <p>{job.duration}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground">
                {job.details.map((detail, dIdx) => (
                  <li key={dIdx} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Block */}
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
          <GraduationCap className="text-[#e8390d] w-9 h-9" /> Education
        </h2>
        <div className="flex flex-col gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 transform hover:-translate-y-1"
              style={cardShadow}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                  <p className="text-muted-foreground text-sm font-semibold">{edu.institute}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{edu.location}</p>
                </div>
                <div className="text-left md:text-right text-xs sm:text-sm">
                  <p className="text-muted-foreground mb-1">{edu.duration}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-[#e8390d] font-bold text-xs sm:text-sm">
                    {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications and Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Achievements Block */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Trophy className="text-[#e8390d] w-7 h-7" /> Achievements
          </h2>
          <div className="flex flex-col gap-4">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border bg-card text-card-foreground transition-all duration-300"
                style={cardShadow}
              >
                <h3 className="font-bold text-base sm:text-lg mb-1">{ach.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Award className="text-[#e8390d] w-7 h-7" /> Certifications
          </h2>
          <div className="flex flex-col gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border bg-card text-card-foreground transition-all duration-300"
                style={cardShadow}
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg leading-snug">{cert.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-[#e8390d] font-bold shrink-0">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
