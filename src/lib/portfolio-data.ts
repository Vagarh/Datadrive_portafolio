import type { LucideIcon } from 'lucide-react';
import { Computer, BarChart3, Cloud, Workflow, Users, Bot } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  category: string;
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

export type Certification = {
  title: string;
  issuer: string;
  badge: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Computer Vision System for Bird Recognition',
    category: 'Deep Learning',
    description: 'Adding an estimated ultraviolet channel to RGB bird images enhances chromatic differentiation, improves cluster separation, and uncovers evolutionary and ecological relationships that remain undetected when relying solely on the visible color space.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'GCP'],
    link: 'https://github.com/Vagarh/Sistema-de-Visi-n-por-Computadora-para-Reconocimiento-de-Aves-y-Simulaci-n-Tetrocrom-tica',
    image: '/images/ChatGPT Image 10 ago 2025, 15_47_07.png',
    imageHint: 'vision-computer'
  },
  {
    id: 2,
    title: 'AI Agent for Legal Support',
    category: 'AI Agents',
    description: 'Development of a conversational agent to automate document classification and response to legal inquiries.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'ETL'],
    link: 'https://github.com/Vagarh/Sistema-de-Visi-n-por-Computadora-para-Reconocimiento-de-Aves-y-Simulaci-n-Tetrocrom-tica',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'AI law'
  },
  {
    id: 3,
    title: 'ETL Pipeline in Google Drive',
    category: 'Data Engineering',
    description: 'Automation of data extraction, transformation, and loading from multiple sources in Google Drive to a data warehouse.',
    technologies: ['Airflow', 'Python', 'Google Cloud', 'BigQuery'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data pipeline'
  },
  {
    id: 4,
    title: 'Business Intelligence Dashboard',
    category: 'Business Intelligence',
    description: 'Creation of interactive dashboards for visualizing business KPIs, enabling strategic decision-making.',
    technologies: ['Power BI', 'SQL', 'Data Studio'],
    link: 'https://public.tableau.com/app/profile/juan.felipe116/vizzes',
    image: '/images/Screenshot 2025-08-10 at 3.46.21 PM.png',
    imageHint: 'business dashboard'
  },
];

const services: Service[] = [
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

const certifications: Certification[] = [
  {
    title: 'Google Cloud Skills Boost Profile',
    issuer: 'Google Cloud',
    badge: '/images/google_skills_logo.jpg',
    link: 'https://www.cloudskillsboost.google/public_profiles/276ef987-5293-4a35-a408-075eb40c6a05',
  },
  {
    title: 'Platzi Profile',
    issuer: 'Platzi',
    badge: '/images/platzi_logo.png',
    link: 'https://platzi.com/p/juan_felipe116/',
  },
  {
    title: 'Coursera Profile',
    issuer: 'Coursera',
    badge: '/images/coursera_logo.png',
    link: 'https://www.coursera.org/user/5cbabff82249fc7988bf620d7b0c7230',
  },
  {
    title: 'Credly Profile',
    issuer: 'Credly',
    badge: '/images/credly.png',
    link: 'https://www.credly.com/users/juan-felipe-cardona-arango/badges#credly',
  },
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const skills = [
    { name: "Python" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "OpenCV" },
    { name: "Scikit-learn" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "SQL" },
    { name: "NoSQL" },
    { name: "GCP" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Git" },
    { name: "CI/CD" },
    { name: "n8n" },
    { name: "Machine Learning" },
    { name: "LLM" },
  ];

export const portfolioData = {
  projects,
  services,
  certifications,
  navLinks,
  skills,
};
