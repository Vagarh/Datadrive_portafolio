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
    title: 'Pest Detection with Thermography',
    description: 'Analysis of thermal images for early detection of pests in crops, improving agricultural efficiency.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'GCP'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'agriculture technology'
  },
  {
    title: 'AI Agent for Legal Support',
    description: 'Development of a conversational agent to automate document classification and response to legal inquiries.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'ETL'],
    link: '#',
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
    link: '#',
    image: 'https://placehold.co/600x400.png',
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
    description: 'Implementation of machine learning models on cloud platforms like GCP, AWS, or Azure for scalability.',
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
