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
    title: 'Detección de plagas con termografía',
    description: 'Análisis de imágenes térmicas para la detección temprana de plagas en cultivos, mejorando la eficiencia agrícola.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'GCP'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'agriculture technology'
  },
  {
    title: 'Agente de IA para soporte legal',
    description: 'Desarrollo de un agente conversacional para automatizar la clasificación de documentos y la respuesta a consultas legales.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'ETL'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'AI law'
  },
  {
    title: 'Pipeline ETL en Google Drive',
    description: 'Automatización de la extracción, transformación y carga de datos desde múltiples fuentes en Google Drive a un data warehouse.',
    technologies: ['Airflow', 'Python', 'Google Cloud', 'BigQuery'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data pipeline'
  },
  {
    title: 'Dashboard de Business Intelligence',
    description: 'Creación de dashboards interactivos para la visualización de KPIs de negocio, permitiendo la toma de decisiones estratégicas.',
    technologies: ['Power BI', 'SQL', 'Data Studio'],
    link: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'business dashboard'
  },
];

export const services: Service[] = [
  {
    title: 'Consultoría en Visión por Computadora',
    description: 'Análisis y desarrollo de soluciones personalizadas para el procesamiento y análisis de imágenes y video.',
    icon: Computer,
  },
  {
    title: 'Desarrollo de Dashboards BI',
    description: 'Diseño e implementación de paneles de control interactivos para monitorizar y analizar datos de negocio.',
    icon: BarChart3,
  },
  {
    title: 'Despliegue de Modelos en la Nube',
    description: 'Implementación de modelos de machine learning en plataformas cloud como GCP, AWS o Azure para escalabilidad.',
    icon: Cloud,
  },
  {
    title: 'Automatización de ETL',
    description: 'Creación de pipelines de datos robustos y automatizados para garantizar la calidad y disponibilidad de la información.',
    icon: Workflow,
  },
  {
    title: 'Desarrollo de Agentes de IA',
    description: 'Construcción de agentes inteligentes y chatbots para automatizar tareas y mejorar la interacción con el cliente.',
    icon: Bot,
  },
  {
    title: 'Entrenamiento de Equipos',
    description: 'Capacitación a equipos en herramientas y metodologías de ciencia de datos, BI y desarrollo de IA.',
    icon: Users,
  },
];

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];
