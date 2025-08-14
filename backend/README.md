# Backend Service

This directory contains the backend service for the portfolio application. It's a Node.js application built with Express and TypeScript.

## Features

*   Handles contact form submissions.
*   Manages CV download requests and logs them.
*   Provides a simple API for the frontend application.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express:** Web framework for Node.js.
*   **TypeScript:** Superset of JavaScript that adds static typing.
*   **Firebase Firestore:** NoSQL database for storing download logs.

## API Endpoints

### `GET /`

*   **Description:** A health check endpoint to verify that the server is running.
*   **Response:**
    *   `200 OK`: with the message "Backend server is running!".

### `POST /api/contact`

*   **Description:** Handles submissions from the contact form.
*   **Request Body:**
    ```json
    {
      "name": "string",
      "email": "string",
      "message": "string"
    }
    ```
*   **Responses:**
    *   `200 OK`: If the message is processed successfully.
    *   `400 Bad Request`: If any of the required fields are missing.

### `POST /api/register-cv`

*   **Description:** Registers an email address for CV download tracking and sends the `cv.pdf` file as a response.
*   **Request Body:**
    ```json
    {
      "email": "string"
    }
    ```
*   **Responses:**
    *   `200 OK`: On successful registration, the CV PDF file is sent for download.
    *   `400 Bad Request`: If the email field is missing.
    *   `500 Internal Server Error`: If there's an issue with saving the data or sending the file.

## Getting Started

### Prerequisites

*   Node.js (version 20 or higher recommended)
*   npm

### Installation

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  **Build the TypeScript code:**
    ```bash
    npm run build
    ```
    *(Note: You might need to add a `build` script to your `package.json` like `"build": "tsc"`)*

2.  **Run the server:**
    ```bash
    npm start
    ```
    *(Note: You might need to add a `start` script to your `package.json` like `"start": "node dist/server.js"`)*

The server will start on port `8080`.

## Docker

You can also run the backend service using Docker.

1.  **Build the Docker image:**
    ```bash
    docker build -t portfolio-backend .
    ```

2.  **Run the Docker container:**
    ```bash
    docker run -p 8080:8080 portfolio-backend
    ```

This will start the server and map port `8080` of the container to port `8080` on your host machine.
