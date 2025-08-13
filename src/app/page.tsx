import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import CertificationsSection from '@/components/sections/certifications-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="bg-[#F8F9FA]">
          <AboutSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
