
"use client";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { portfolioData, Project } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={350}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="flex-grow">{project.description}</CardDescription>
        <div className="mt-4">
          <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80 group">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ProjectsSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-background" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            A selection of my work, showcasing my skills in creating valuable and impactful solutions.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});
ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
