
import { flow, model } from 'genkit';
import { z } from 'zod';
import { llama3 } from 'genkitx-ollama'; // Importar el modelo Llama 3
import { portfolioData, Project } from '../../lib/portfolio-data';

// Define el esquema de entrada para el flujo
const inputSchema = z.object({
  userMessage: z.string().min(10, { message: "User message must be at least 10 characters long." }),
});

// Define el esquema de salida para el flujo
const outputSchema = z.object({
  recommendedProjects: z.array(z.object({
    id: z.number(),
    title: z.string(),
    category: z.string(),
  })),
  aiReasoning: z.string(),
});

// Extrae una lista de títulos y categorías de proyectos para usar en el prompt
const projectList = portfolioData.projects.map(p => `- ${p.title} (Category: ${p.category})`).join('\n');

export const recommendProjectsFlow = flow(
  {
    name: 'recommendProjectsFlow',
    inputSchema,
    outputSchema,
    // Configuración opcional para habilitar el tracing y la observabilidad
    stream: false, // O `true` si prefieres streaming
  },
  async (input) => {
    const { userMessage } = input;

    // Construye el prompt para el modelo de lenguaje
    const prompt = `
      You are an expert AI assistant specialized in data science and software development, working for a professional's portfolio.
      Your task is to analyze a user's contact message and recommend the 2 most relevant projects from a predefined list.

      **Available Projects:**
      ${projectList}

      **User's Message:**
      "${userMessage}"

      **Instructions:**
      1.  Carefully analyze the user's message to understand their needs, interests, or problems.
      2.  Based on your analysis, identify the two most relevant projects from the list provided.
      3.  Provide a brief, compelling reason (no more than 2 sentences) explaining *why* these projects are a good match for the user's inquiry.
      4.  Format your response as a valid JSON object. The JSON should contain two keys: 'recommendedProjects' (an array of project objects, each with 'id', 'title', and 'category') and 'aiReasoning' (your justification).
      5.  Do not recommend more than 2 projects. If no projects seem relevant, return an empty array for 'recommendedProjects' and explain why in 'aiReasoning'.

      **Example of a valid JSON output:**
      {
        "recommendedProjects": [
          { "id": 1, "title": "AI-Powered Financial Fraud Detection", "category": "Machine Learning" },
          { "id": 3, "title": "E-commerce Customer Segmentation", "category": "Data Analysis" }
        ],
        "aiReasoning": "The user mentioned their interest in e-commerce and fraud prevention, making these two projects the most relevant to their needs."
      }
    `;

    // Llama al modelo de lenguaje (LLM) con el prompt
    const llmResponse = await llama3.generate({
      prompt,
      config: {
        temperature: 0.2, // Baja temperatura para respuestas más predecibles
      },
    });

    const textResponse = llmResponse.text();

    try {
      // Intenta parsear la respuesta del LLM como JSON
      const parsedJson = JSON.parse(textResponse);

      // Valida la estructura del JSON parseado con el esquema de salida
      const validationResult = outputSchema.safeParse(parsedJson);

      if (!validationResult.success) {
        console.error("LLM output validation failed:", validationResult.error);
        // En caso de fallo de validación, devuelve un resultado por defecto o lanza un error
        return {
          recommendedProjects: [],
          aiReasoning: "The AI response could not be validated. Please try again later.",
        };
      }

      return validationResult.data;

    } catch (error) {
      console.error("Error parsing LLM JSON response:", error);
      // Si el parseo falla, devuelve un objeto de error estructurado
      return {
        recommendedProjects: [],
        aiReasoning: "Failed to process the AI's recommendation. The response was not valid JSON.",
      };
    }
  }
);
