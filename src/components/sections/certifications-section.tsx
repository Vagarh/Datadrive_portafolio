
"use client";

import { forwardRef, useEffect, useState } from 'react';
import { certifications } from '@/lib/portfolio-data';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const CertificationsSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    const inView = useIntersectionObserver(ref as React.RefObject<Element>);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // This ensures the animation only runs on the client, avoiding hydration issues.
        setIsMounted(true);
    }, []);

    const duplicatedCerts = isMounted ? [...certifications, ...certifications] : [];

    return (
        <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-background" ref={ref}>
            <div className={cn("container px-4 md:px-6 transition-all duration-700 ease-in-out", inView ? "opacity-100" : "opacity-0 translate-y-4")}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Certifications & Badges</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        My credentials from industry-leading platforms.
                    </p>
                </div>
                
                <div className="scroller w-full overflow-hidden">
                    <div className="scroller__inner flex gap-4 py-4">
                        {duplicatedCerts.map((cert, index) => (
                           <a 
                             href={cert.link} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             key={index} 
                             className="group block flex-shrink-0 w-48"
                           >
                                <div className="flex flex-col items-center justify-center text-center p-4 bg-secondary rounded-lg h-36 transition-all duration-300 ease-in-out group-hover:bg-primary/10 group-hover:-translate-y-2">
                                    <div className="relative w-full h-20">
                                        <Image
                                            src={cert.badge}
                                            alt={`${cert.issuer} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-3 font-semibold text-foreground text-sm">{cert.issuer}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
CertificationsSection.displayName = "CertificationsSection";

export default CertificationsSection;
