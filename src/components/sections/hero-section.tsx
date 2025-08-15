"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section id="home" className="w-full grid lg:grid-cols-2 min-h-[calc(100vh-56px)]">
      <div className="flex flex-col justify-center items-center text-center lg:text-left p-8 bg-black">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#F8F9FA] font-poppins">
            Bridging Data, Biology, and Intelligence
          </h1>
          <TypeAnimation
            sequence={[
              'Data Scientist',
              1000,
              'Biomedical Specialist',
              1000,
              'AI Developer',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#7FB069] font-poppins"
            repeat={Infinity}
          />
          <p className="mt-6 text-lg text-[#F8F9FA] opacity-80 font-inter">
            I'm exploring how we can make agents see, understand, and transform the world around us. I'm dedicated to building systems that bridge perception and action, shaping a future where technology seamlessly integrates into our lives.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="default" className='bg-[#0a2342] text-[#F8F9FA] hover:bg-[#0a2342]/90' asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative bg-background">
        <Image
            src="/images/unnamed.png"
            alt="Digital Brain"
            width={1080}
            height={1920}
            className="w-full h-full object-cover opacity-90 lg:hidden"
            priority
        />
        <video className="w-full h-full object-cover opacity-90 hidden lg:block" autoPlay loop muted playsInline>
            <source src="/videos/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;