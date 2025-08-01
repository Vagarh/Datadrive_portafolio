import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'DataDive Portfolio | Juan Felipe Cardona Arango',
  description: 'Data Scientist | Machine Learning & Deep Learning | DL Research | NLP | Computer Vision | Biomedical Engineer | MSc in Data Science',
  keywords: ['Data Science', 'AI', 'Biomedical Engineering', 'Juan Felipe Cardona Arango', 'Portfolio', 'Python', 'Cloud Computing', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
  authors: [{ name: 'Juan Felipe Cardona Arango' }],
  creator: 'Juan Felipe Cardona Arango',
  openGraph: {
      title: 'DataDive Portfolio | Juan Felipe Cardona Arango',
      description: 'Transforming data into strategic decisions.',
      type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
