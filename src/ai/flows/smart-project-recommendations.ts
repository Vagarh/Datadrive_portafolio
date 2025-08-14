
'use server';
/**
 * @fileOverview This file contains the server-side logic for the smart project recommendation feature.
 * It uses Genkit to define a flow that analyzes a user's query and suggests relevant projects.
 *
 * - recommendProjects - A function that handles the project recommendation logic.
 * - ProjectRecommendationInput - The Zod schema for the input data.
 * - ProjectRecommendationOutput - The Zod schema for the output data.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define the schema for the input data using Zod for validation.
const ProjectRecommendationInputSchema = z.object({
  userQuery: z.string().describe("The user's query about their needs or project ideas."),
  projectDescriptions: z.array(z.string()).describe("A list of available projects, including their title, description, and technologies."),
});

// Define the schema for the output data.
const ProjectRecommendationOutputSchema = z.object({
  recommendedProjects: z.array(z.string()).optional().describe("An array of up to 3 recommended project titles that are most relevant to the user's query."),
});

export type ProjectRecommendationInput = z.infer<typeof ProjectRecommendationInputSchema>;
export type ProjectRecommendationOutput = z.infer<typeof ProjectRecommendationOutputSchema>;


/**
 * The main flow function that generates project recommendations.
 * It is defined as a Genkit flow.
 */
const recommendProjectsFlow = ai.defineFlow(
  {
    name: 'recommendProjectsFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async ({ userQuery, projectDescriptions }) => {
    
    const result = await ai.generate({
      prompt: `
        Based on the user's query about their needs, recommend up to 3 projects from the list below that are most relevant.
        User Query: "${userQuery}"
        Available Projects:
        ${projectDescriptions.join('\n')}
        Only return the titles of the recommended projects.
      `,
      output: {
        schema: ProjectRecommendationOutputSchema,
      },
      config: {
        temperature: 0.3,
      },
    });
  
    return result.output || { recommendedProjects: [] };
  }
);


/**
 * An exported wrapper function that calls the Genkit flow.
 * This makes it easier to use from React Server Components/Actions.
 * @param data The input data for project recommendations.
 * @returns A promise that resolves to the output of the flow.
 */
export async function recommendProjects(data: ProjectRecommendationInput): Promise<ProjectRecommendationOutput> {
  return recommendProjectsFlow(data);
}
