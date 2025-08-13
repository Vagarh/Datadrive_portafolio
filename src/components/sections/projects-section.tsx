"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { projects } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  const { ref, inView } = useScrollIntoView();
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Success cases where I have applied my skills to solve complex problems and generate value.
          </p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.title} style={{ transitionDelay: `${index * 100}ms` }} className={cn("flex flex-col overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-background", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className="w-full h-48 object-cover" // Fixed height for images
                data-ai-hint={project.imageHint}
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="mt-4">
                    <Button asChild variant="link" className="p-0 text-accent hover:text-accent/80 group">
                        <a href={project.link}>
                            View project
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
