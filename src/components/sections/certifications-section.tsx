"use client";
import { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { certifications, Certification } from '@/lib/portfolio-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const CertificationCard = ({ certification, index }: { certification: Certification; index: number }) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    const inView = useIntersectionObserver(ref);

    return (
        <a 
            ref={ref}
            href={certification.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
                "group transition-all duration-700 ease-in-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <Card className="overflow-hidden transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20">
                <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 mb-4">
                        <Image
                            src={certification.badge}
                            alt={`${certification.title} badge`}
                            width={96}
                            height={96}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="font-semibold text-foreground">{certification.title}</h3>
                    <p className="text-sm text-muted-foreground">{certification.issuer}</p>
                </CardContent>
            </Card>
        </a>
    );
};

const CertificationsSection = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useIntersectionObserver(ref);

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
                        <CertificationCard key={cert.title} certification={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
