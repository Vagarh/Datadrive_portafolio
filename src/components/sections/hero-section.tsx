
"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="w-full grid lg:grid-cols-2 min-h-[calc(100vh-56px)]">
      <div className="flex flex-col justify-center items-center text-center lg:text-left p-8 bg-black">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            I'm <span className="text-primary">Juan Felipe Cardona Arango.</span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            A Computer Vision Engineer
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I'm exploring how we can make agents see, understand, and transform the world around us. I'm dedicated to building systems that bridge perception and action, shaping a future where technology seamlessly integrates into our lives.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild>
              <a href="#contact">
                Let's Build Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
                <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block bg-background">
        <Image
          src="https://placehold.co/800x1200.png"
          alt="A photo of Juan Felipe Cardona Arango"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          data-ai-hint="man presenting"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
