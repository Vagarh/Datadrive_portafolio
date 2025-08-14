# DataDive Portfolio

This is the repository for the DataDive Portfolio, a personal portfolio website for Juan Felipe, a Data Scientist with expertise in Biomedical Engineering and AI.

## Core Features:

- **Persistent Navigation**: A fixed header with navigation links to key sections, social media, and a downloadable CV.
- **Hero Section**: An introductory section highlighting Juan Felipe's expertise in data science, biomedical engineering, and AI.
- **About Me**: A section showcasing Juan Felipe's background, blending technical skills with personal interests.
- **Projects Showcase**: A collection of project cards displaying successful projects with descriptions, technologies used, and links to demos or repositories.
- **Services Offered**: A list of services with icons and descriptions, covering data science, BI, and AI agent development.
- **Contact Form**: A functional contact form for inquiries and service requests.
- **Smart Project Recommendations**: An AI-powered tool that suggests relevant projects to visitors based on their inquiries in the contact form.

## Style Guidelines:

- **Background**: Dark tones (#1F1F23) for a modern and sophisticated look.
- **Primary Color**: Cobalt blue (#3A7CA5) to convey trustworthiness.
- **Accent Color**: Lime green (#A3D9A5) for interactive elements and calls to action.
- **Font**: 'Inter' (sans-serif) for a modern and readable experience.
- **Cards**: Subtle shadows and rounded borders (8px) for project and service sections.
- **Animations**: Subtle scroll animations to reveal content sections and micro-interactions on buttons.
- **Icons**: Minimalist icons to accompany services and links, ensuring clarity and visual appeal.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env.local` file in the root of the project and add the following environment variables:
    ```
    RESEND_API_KEY=your_resend_api_key
    TO_EMAIL=your_email_address
    ```

### Running the Application

```sh
npm run dev
```

This will start the development server on `http://localhost:3000`.

## Project Structure

The project is organized as follows:

- `src/app/`: Contains the main pages of the application.
- `src/components/`: Contains the reusable React components.
- `src/lib/`: Contains utility functions and data.
- `src/styles/`: Contains global styles and Tailwind CSS configuration.
- `public/`: Contains static assets like images and fonts.
- `backend/`: Contains the backend server code.

## Technologies Used

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Resend](https://resend.com/) - Email API
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel Component
- [Genkit](https://firebase.google.com/docs/genkit) - AI Framework
- [Firebase](https://firebase.google.com/) - Backend Platform

---

This README was generated with the help of an AI assistant.
