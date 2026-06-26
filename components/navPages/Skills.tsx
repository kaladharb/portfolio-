"use client";
import { FaGitAlt, FaGithub, FaReact, FaPython, FaJava } from "react-icons/fa6";
import { RiCss3Fill, RiHtml5Fill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNodedotjs, SiTypescript, SiPostgresql, SiMysql, SiStreamlit } from "react-icons/si";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
    { name: "Python", icon: <FaPython />, hoverColor: "group-hover:text-blue-400" },
    { name: "Java", icon: <FaJava />, hoverColor: "group-hover:text-red-400" },
    { name: "JavaScript", icon: <IoLogoJavascript />, hoverColor: "group-hover:text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, hoverColor: "group-hover:text-sky-500" },
    { name: "HTML 5", icon: <RiHtml5Fill />, hoverColor: "group-hover:text-orange-500" },
    { name: "CSS", icon: <RiCss3Fill />, hoverColor: "group-hover:text-blue-500" },
    { name: "React.js", icon: <FaReact />, hoverColor: "group-hover:text-cyan-300" },
    { name: "Node.js", icon: <SiNodedotjs />, hoverColor: "group-hover:text-green-600" },
    { name: "Express.js", icon: <SiExpress />, hoverColor: "group-hover:text-gray-500" },
    { name: "MongoDB", icon: <SiMongodb />, hoverColor: "group-hover:text-green-500" },
    { name: "PostgreSQL", icon: <SiPostgresql />, hoverColor: "group-hover:text-sky-500" },
    { name: "MySQL", icon: <SiMysql />, hoverColor: "group-hover:text-blue-600" },
    { name: "Streamlit", icon: <SiStreamlit />, hoverColor: "group-hover:text-red-500" },
    { name: "Git", icon: <FaGitAlt />, hoverColor: "group-hover:text-orange-600" },
    { name: "Github", icon: <FaGithub />, hoverColor: "group-hover:text-purple-500" },
];

export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 py-16 px-4`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            <div className="flex flex-wrap max-w-4xl mx-auto gap-6 items-center justify-center">
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
        </section>
    );
}
