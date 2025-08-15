
"use client";

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";
import { portfolioData } from '@/lib/portfolio-data';
import { forwardRef } from 'react';

const badgeColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(var(--primary))",
];

const AboutSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    const inView = useIntersectionObserver(ref as React.RefObject<Element>);
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary" ref={ref}>
        <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
                <div className="space-y-4 text-lg text-foreground/80">
                <p>
                I am a Data Scientist with a background in Biomedical Engineering and a Master's in Data Science. I have experience in Machine Learning, Deep Learning, Natural Language Processing (NLP), and Computer Vision, as well as in implementing Business Intelligence solutions using tools like Python, SQL, Power BI, Tableau, and Looker Studio.
                </p>
                <p>
                My work combines advanced statistical analysis, process automation, and data visualization to transform complex information into practical solutions that support decision-making. I also have experience in the healthcare sector and scientific research projects, which allows me to integrate technical approaches and specialized contexts to solve real-world problems.
                </p>
                </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start w-full">
                <h3 className="text-2xl font-semibold tracking-tight mb-6 text-primary">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className={cn(
                        "text-lg px-4 py-2 transform transition-all duration-500 ease-out text-white",
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{
                        backgroundColor: badgeColors[index % badgeColors.length],
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
});
AboutSection.displayName = "AboutSection";

export default AboutSection;
