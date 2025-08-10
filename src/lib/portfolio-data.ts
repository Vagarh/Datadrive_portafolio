import type { LucideIcon } from 'lucide-react';
import { Computer, BarChart3, Cloud, Workflow, Users, Bot } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  imageHint: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    title: 'Computer Vision System for Bird Recognition with Tetrachromatic Simulation through the Addition of an Estimated UVB Channel in RGB Images',
    description: 'Adding an estimated ultraviolet channel to RGB bird images enhances chromatic differentiation, improves cluster separation, and uncovers evolutionary and ecological relationships that remain undetected when relying solely on the visible color space.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'GCP'],
    link: '#',
    image: '/images/ChatGPT Image 10 ago 2025, 15_47_07.png',
    imageHint: 'vision-computer'
  },
  {
    title: 'AI Agent for Legal Support',
    description: 'Development of a conversational agent to automate document classification and response to legal inquiries.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'ETL'],
    link: 'https://github.com/Vagarh/Sistema-de-Visi-n-por-Computadora-para-Reconocimiento-de-Aves-y-Simulaci-n-Tetrocrom-tica',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'AI law'
  },
  {
    title: 'ETL Pipeline in Google Drive',
    description: 'Automation of data extraction, transformation, and loading from multiple sources in Google Drive to a data warehouse.',
    technologies: ['Airflow', 'Python', 'Google Cloud', 'BigQuery'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data pipeline'
  },
  {
    title: 'Business Intelligence Dashboard',
    description: 'Creation of interactive dashboards for visualizing business KPIs, enabling strategic decision-making.',
    technologies: ['Power BI', 'SQL', 'Data Studio'],
    link: 'https://public.tableau.com/app/profile/juan.felipe116/vizzes',
    image: '/images/Screenshot 2025-08-10 at 3.46.21 PM.png',
    imageHint: 'business dashboard'
  },
];

export const services: Service[] = [
  {
    title: 'Computer Vision Consulting',
    description: 'Analysis and development of custom solutions for image and video processing and analysis.',
    icon: Computer,
  },
  {
    title: 'BI Dashboard Development',
    description: 'Design and implementation of interactive control panels to monitor and analyze business data.',
    icon: BarChart3,
  },
  {
    title: 'Cloud Model Deployment',
    description: 'Implementation of machine learning models on cloud platforms like GCP or AWS for scalability.',
    icon: Cloud,
  },
  {
    title: 'ETL Automation',
    description: 'Creation of robust and automated data pipelines to ensure the quality and availability of information.',
    icon: Workflow,
  },
  {
    title: 'AI Agent Development',
    description: 'Building intelligent agents and chatbots to automate tasks and improve customer interaction.',
    icon: Bot,
  },
  {
    title: 'Team Training',
    description: 'Training teams in data science tools and methodologies, BI, and AI development.',
    icon: Users,
  },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];
