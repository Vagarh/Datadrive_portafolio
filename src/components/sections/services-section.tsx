
"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from '@/lib/portfolio-data';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const { ref, inView } = useScrollIntoView();
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I offer my expertise to help you build robust and innovative data solutions.
          </p>
        </div>
        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.title} style={{ transitionDelay: `${index * 150}ms` }} className={cn("text-center p-4 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
              <CardHeader className="items-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
