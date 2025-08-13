"use client";

import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

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
              I am a Data Scientist with a background in Biomedical Engineering and a Master's in Data Science. I have experience in Machine Learning, Deep Learning, Natural Language Processing (NLP), and Computer Vision, as well as in implementing Business Intelligence solutions using tools like Python, SQL, Power BI, Tableau, and Looker Studio.
             </p>
             <p>
               My work combines advanced statistical analysis, process automation, and data visualization to transform complex information into practical solutions that support decision-making. I also have experience in the healthcare sector and scientific research projects, which allows me to integrate technical approaches and specialized contexts to solve real-world problems.
             </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold tracking-tight mb-6 text-primary">Skills & Tools</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">OpenCV</Badge>
              <Badge variant="secondary">Scikit-learn</Badge>
              <Badge variant="secondary">Pandas</Badge>
              <Badge variant="secondary">NumPy</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">NoSQL</Badge>
              <Badge variant="secondary">GCP</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">CI/CD</Badge>
              <Badge variant="secondary">n8n</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">LLM</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
