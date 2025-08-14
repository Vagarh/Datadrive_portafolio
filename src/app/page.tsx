
"use client";

import { useRef } from 'react';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import CertificationsSection from '@/components/sections/certifications-section';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection ref={aboutRef} />
        <ProjectsSection ref={projectsRef} />
        <CertificationsSection ref={certificationsRef} />
        <ContactSection ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
