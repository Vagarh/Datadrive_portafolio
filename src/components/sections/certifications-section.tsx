
"use client";

import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';

const CertificationsSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const duplicatedCerts = isMounted ? [...portfolioData.certifications, ...portfolioData.certifications] : [];

    return (
        <section id="certifications" className="w-full py-16 md:py-24 bg-secondary" ref={ref}>
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Certifications & Badges</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                        My credentials from industry-leading platforms, showcasing my commitment to continuous learning.
                    </p>
                </motion.div>
                
                <div className="scroller w-full overflow-hidden">
                    <div className="scroller__inner flex gap-6 py-4">
                        {duplicatedCerts.map((cert, index) => (
                           <a 
                             href={cert.link} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             key={index} 
                             className="group block flex-shrink-0 w-48"
                           >
                                <div className="flex flex-col items-center justify-center text-center p-4 bg-background rounded-lg h-40 transition-all duration-300 ease-in-out group-hover:bg-primary/10 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                                    <div className="relative w-full h-24">
                                        <Image
                                            src={cert.badge}
                                            alt={`${cert.issuer} logo`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-4 font-semibold text-foreground text-sm">{cert.issuer}</p>
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
