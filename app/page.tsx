'use client';
import {Home} from "@/components/navPages/Home"
import { Projects } from '@/components/navPages/Projects';
import ExperienceEducation from "@/components/navPages/ExperienceEducation";
import Contact from '@/components/navPages/Contact';
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className={`flex flex-col items-center justify-center scroll-smooth`}>
      <Home/>
      <Projects/>
      <ExperienceEducation/>
      <Contact/>
      <Footer/>
    </main>
  );
}
