"use client";

import { Card, CardContent } from "@/components/ui/card";
import { certifications } from '@/lib/portfolio-data';
import { useScrollIntoView } from '@/hooks/use-scroll-into-view';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const CertificationsSection = () => {
  const { ref, inView } = useScrollIntoView();
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-background" ref={ref}>
      <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Certifications & Badges</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My credentials from industry-leading platforms.
          </p>
        </div>
        <div className="grid gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="group">
              <Card style={{ transitionDelay: `${index * 100}ms` }} className={cn("overflow-hidden transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
