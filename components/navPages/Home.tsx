'use client';

import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import scrollDownAnimation from '@/public/scroll-down.json';
import { jetbrainsMono } from '@/app/font';
import Image from 'next/image';
import profileImg from "@/public/kaladhar_avatar.jpg";
import { MapPin } from 'lucide-react';
import Socials from '../Socials';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
export function Home() {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Kaladhar_Bandari_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    return (
        <div id='home' className="w-full max-w-4xl flex flex-col items-center justify-center px-6 pt-20 pb-65 sm:min-h-screen relative">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 w-full max-w-5xl">
                <div className="flex-1">
                    <div className="flex items-center gap-3">
                        <h1 className="text-4xl sm:text-6xl font-bold ">
                            Hey, I&apos;m <span className='text-[#e8390d]'>Kaladhar</span>
                        </h1>
                        <span
                            className="text-4xl sm:text-5xl"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                transformOrigin: '70% 70%',
                                animation: isHovered ? 'wave 1.2s ease-in-out infinite' : 'none',
                                display: 'inline-block',
                             }}
                        >
                            👋
                        </span>
                    </div>
                    <p className={` ${jetbrainsMono.className} flex items-center mt-4 text-[#dd431d] gap-2 text-sm sm:text-lg text-right`}> <MapPin /> Hyderabad, Telangana, India</p>

                    <span className="tailwind-wrapper mt-4 text-lg sm:text-3xl font-medium block text-left text-zinc-800 dark:text-zinc-200">
                        <Typewriter
                            options={{
                                strings: ['FULL STACK DEVELOPER', 'AI & ML ENGINEER', 'GEN AI / RAG DEVELOPER'],
                                autoStart: true,
                                loop: true,
                                delay: 20,
                                deleteSpeed: 5,
                            }}
                        />
                    </span>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Socials />
                        <InteractiveHoverButton onClick={handleDownload} />
                    </div>


                    <p
                        className={`mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 text-justify leading-relaxed ${jetbrainsMono.className}`}
                    >
                        I am a Computer Science student specializing in AI & Machine Learning with a strong interest in building real-world applications using web technologies and Generative AI. Through academic projects, internships, and hackathons, I have gained hands-on experience in full-stack development and AI-powered solutions.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-48 h-48 sm:w-72 sm:h-72 relative shrink-0 rounded-full overflow-hidden transition-all duration-300">
                    <Image
                        src={profileImg}
                        alt="Kaladhar Bandari"
                        fill
                        className="object-cover rounded-full transition-transform duration-500 hover:scale-105"
                    />
                </div>

            </div>

            {/* Scroll Down Animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 z-10 hidden md:block">
                <Lottie animationData={scrollDownAnimation} loop />
            </div>
        </div>
    );
}
