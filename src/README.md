# Frontend Application

This directory contains the source code for the frontend of the portfolio application, built with Next.js and TypeScript.

## Folder Structure

The `src` directory is organized into the following subdirectories:

*   **`ai/`**: Contains Genkit flows and AI-related functionalities.
    *   **`flows/`**: Holds specific AI flows, such as `send-contact-email.ts` for handling contact form submissions and `smart-project-recommendations.ts` for providing project suggestions.
    *   **`dev.ts`**: Likely for development-related AI configurations.
    *   **`genkit.ts`**: Main configuration file for Genkit.

*   **`app/`**: The core of the Next.js application, following the App Router structure.
    *   **`api/`**: (If present) For API routes handled by Next.js.
    *   **`privacy-policy/`**: Contains the privacy policy page.
    *   **`layout.tsx`**: The main layout component for the application.
    *   **`page.tsx`**: The main page component, serving as the landing page.
    *   **`globals.css`**: Global CSS styles for the application.
    *   **`actions.ts`**: Server-side actions that can be called from client components.
    *   **`favicon.ico`**: The favicon for the application.

*   **`components/`**: Reusable React components used throughout the application.
    *   **`email/`**: Components for styling and formatting emails, like `contact-template.tsx`.
    *   **`layout/`**: Components related to the application's layout, such as the `header.tsx` and `footer.tsx`.
    *   **`sections/`**: Components that represent different sections of the portfolio, such as `about-section.tsx`, `projects-section.tsx`, and `contact-section.tsx`.
    *   **`ui/`**: UI components, often from a UI library like Shadcn UI, including elements like `button.tsx`, `card.tsx`, `dialog.tsx`, and more.

*   **`hooks/`**: Custom React hooks for shared logic.
    *   **`use-intersection-observer.tsx`**: A hook for detecting when an element enters the viewport.
    *   **`use-mobile.tsx`**: A hook for detecting if the user is on a mobile device.
    *   **`use-toast.ts`**: A hook for displaying toast notifications.

*   **`lib/`**: Utility functions and libraries.
    *   **`portfolio-data.ts`**: A file containing static data for the portfolio, such as project details, skills, and certifications.
    *   **`utils.ts`**: General utility functions used across the application.

## Key Technologies

*   **Next.js:** A React framework for building server-side rendered and statically generated web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Genkit:** An open-source framework for building AI-powered applications.
*   **Shadcn UI:** A collection of reusable UI components.

## Getting Started

### Prerequisites

*   Node.js (version 20 or higher)
*   npm or yarn

### Installation

1.  Navigate to the root of the project.
2.  Install the dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Development Server

1.  Start the development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

The application will automatically reload if you make changes to the code.
