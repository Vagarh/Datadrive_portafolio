import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-secondary border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Juan Felipe Cardona Arango. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition-colors hover:text-primary"><Twitter className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
