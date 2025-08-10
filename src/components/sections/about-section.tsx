"use client";

import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge"; // Assuming a Badge component for skills
import { CodeIcon, BrainCircuitIcon, TelescopeIcon, FlaskConicalIcon } from 'lucide-react'; // Example icons
// Removed Carousel related imports and aboutImages array

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
                {/* Add more details about your formation and specializations here */}
                <p>
                 My expertise includes data analysis, machine learning, computer vision, and automation. I focus on applying these skills to create impactful solutions in health, environmental conservation, and other areas where data can make a real difference.
                </p>
            </div>
          </div>
          {/* Skills & Tools Section - Replaces Carousel */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold tracking-tight mb-6 text-primary">Skills & Tools</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {/* Placeholder for skill badges/icons */}
              {/* Replace with actual mapping of your skills data */}
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">PyTorch</Badge>
              <Badge variant="secondary">OpenCV</Badge>
              <Badge variant="secondary">Scikit-learn</Badge>
              <Badge variant="secondary">Pandas</Badge>
              <Badge variant="secondary">NumPy</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">GCP</Badge>
              <Badge variant="secondary">AWS</Badge>
              <Badge variant="secondary">Azure</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">CI/CD</Badge>
            </div>
          </div>
          {/* End Skills & Tools Section */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
