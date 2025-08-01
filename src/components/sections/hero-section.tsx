import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
            Juan Felipe Cardona Arango
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Data Scientist | Machine Learning & Deep Learning | DL Research | NLP | Computer Vision | Biomedical Engineer | MSc in Data Science
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
            Transforming data into strategic decisions with Python, Cloud, and computer vision.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <a href="#projects">
                View my portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
