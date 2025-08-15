"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { portfolioData } from '@/lib/portfolio-data';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(pathname === '/');

  useEffect(() => {
    setIsHomePage(pathname === '/');
  }, [pathname]);

  const getLinkUrl = (href: string) => {
    return isHomePage ? href : `/${href}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary">
          JFCA
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {portfolioData.navLinks.map((link) => (
            <Link key={link.href} href={getLinkUrl(link.href)} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Vagarh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/juan-felipe-c-8a010b121/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/jfcatec" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></a>
          </Button>
          <Button asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" className="text-2xl font-bold tracking-tighter text-primary" onClick={() => setIsOpen(false)}>
                    JFCA
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col items-start space-y-4 p-4 text-lg">
                  {portfolioData.navLinks.map((link) => (
                    <Link key={link.href} href={getLinkUrl(link.href)} className="transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <div className="flex justify-center space-x-4 mb-4">
                     <a href="https://github.com/Vagarh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-6 w-6" /></a>
                     <a href="https://www.linkedin.com/in/juan-felipe-c-8a010b121/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-6 w-6" /></a>
                     <a href="https://twitter.com/jfcatec" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-primary"><Twitter className="h-6 w-6" /></a>
                  </div>
                  <Button asChild className="w-full">
                    <a href="/cv.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
