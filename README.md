# Modern Portfolio with AI-Powered Features

This is a comprehensive portfolio web application built with Next.js for the frontend and a Node.js/Express backend. It's designed to showcase projects, skills, and certifications, while also incorporating AI-powered features to enhance user interaction.

## Key Features

*   **Responsive and Modern UI**: A sleek and mobile-friendly design built with Next.js, TypeScript, and Tailwind CSS.
*   **Dynamic Sections**: Includes sections for:
    *   **Hero**: A captivating introduction.
    *   **About**: A detailed description of your background and skills.
    *   **Services**: Services you offer.
    *   **Projects**: A showcase of your work, with smart recommendations.
    *   **Certifications**: A list of your certifications and credentials.
    *   **Contact**: A functional contact form for user inquiries.
*   **AI-Powered Enhancements**:
    *   **Smart Project Recommendations**: An AI flow that suggests projects based on user interests.
    *   **Automated Contact Emails**: An AI flow that processes and sends contact form submissions.
*   **CV Download**: Allows users to download a PDF version of your CV, with an email registration feature to track downloads.
*   **Backend Service**: A robust backend built with Node.js and Express to handle API requests.
*   **Dockerized Backend**: The backend is containerized with Docker for easy deployment and scalability.

## Tech Stack

### Frontend

*   **Next.js**: React framework for server-side rendering and static site generation.
*   **React**: JavaScript library for building user interfaces.
*   **TypeScript**: Typed superset of JavaScript for enhanced code quality.
*   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
*   **Genkit**: AI framework for building and managing AI flows.
*   **Shadcn UI**: Reusable and accessible UI components.

### Backend

*   **Node.js**: JavaScript runtime environment.
*   **Express**: Web framework for Node.js.
*   **TypeScript**: For type-safe backend development.
*   **Firebase Firestore**: NoSQL database for logging CV downloads.
*   **Docker**: For containerizing the backend service.

## Project Structure

The repository is organized into the following main directories:

*   **`src/`**: Contains the frontend source code, including pages, components, hooks, and AI flows.
*   **`public/`**: Static assets like images, videos, and logos.
*   **`backend/`**: The backend service, including its own `package.json` and Dockerfile.
*   **`docs/`**: Project documentation, including the technical blueprint and development context.

For more detailed information, refer to the `README.md` files within each directory.

## Getting Started

### Prerequisites

*   Node.js (version 20 or higher)
*   npm or yarn
*   Docker (for running the backend in a container)

### Installation and Running the Application

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

3.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    cd ..
    ```

4.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:3000`.

5.  **Run the backend server:**
    *   **Without Docker:**
        ```bash
        cd backend
        npm run build
        npm start
        ```
    *   **With Docker:**
        ```bash
        cd backend
        docker build -t portfolio-backend .
        docker run -p 8080:8080 portfolio-backend
        ```
    The backend will be available at `http://localhost:8080`.

## Deployment

The application is configured for deployment on modern hosting platforms. Refer to the `apphosting.yaml` file for Google Cloud App Hosting configurations.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
