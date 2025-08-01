
"use client";

import Image from 'next/image';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const aboutImages = [
    {
        src: "https://placehold.co/600x400.png",
        alt: "A man working on a computer with code on the screen.",
        hint: "programming data"
    },
    {
        src: "https://placehold.co/600x400.png",
        alt: "A fossil of a dinosaur skeleton.",
        hint: "dinosaur fossil"
    },
    {
        src: "https://placehold.co/600x400.png",
        alt: "A colorful exotic bird perched on a branch.",
        hint: "exotic bird"
    }
];

const AboutSection = () => {
  const { ref, inView } = useScrollIntoView();
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <div className="space-y-4 text-lg text-foreground/80">
                <p>
                As a Biomedical Engineer with a Master's in Data Science, I thrive at the intersection of technology and discovery. My passion lies in translating complex data into actionable insights, building innovative solutions in AI, Business Intelligence, and data automation.
                </p>
                <p>
                Beyond the world of algorithms, I'm an avid paleontologist and a conservationist for exotic reptiles and birds. This blend of cutting-edge tech and natural history shapes my problem-solving approach: holistic, curious, and driven to make a positive impact.
                </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
             <Carousel className="w-full max-w-md">
                <CarouselContent>
                    {aboutImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    data-ai-hint={image.hint}
                                />
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
