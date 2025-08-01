'use server';

/**
 * @fileOverview An AI agent that recommends relevant projects based on user queries.
 *
 * - recommendProjects - A function that handles the project recommendation process.
 * - RecommendProjectsInput - The input type for the recommendProjects function.
 * - RecommendProjectsOutput - The return type for the recommendProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendProjectsInputSchema = z.object({
  userQuery: z.string().describe('The user query from the contact form.'),
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions from the portfolio.'),
});
export type RecommendProjectsInput = z.infer<typeof RecommendProjectsInputSchema>;

const RecommendProjectsOutputSchema = z.object({
  recommendedProjects: z
    .array(z.string())
    .describe('An array of project descriptions that are relevant to the user query.'),
});
export type RecommendProjectsOutput = z.infer<typeof RecommendProjectsOutputSchema>;

export async function recommendProjects(input: RecommendProjectsInput): Promise<RecommendProjectsOutput> {
  return recommendProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendProjectsPrompt',
  input: {schema: RecommendProjectsInputSchema},
  output: {schema: RecommendProjectsOutputSchema},
  prompt: `You are an AI assistant helping Juan Felipe recommend relevant projects from his portfolio to users based on their queries.

  Analyze the following user query and determine which projects from the provided project descriptions are most relevant to the user's needs and interests. Return an array of the most relevant project descriptions.

  User Query: {{{userQuery}}}

  Project Descriptions: {{#each projectDescriptions}}{{{this}}}\n{{/each}}
  `,
});

const recommendProjectsFlow = ai.defineFlow(
  {
    name: 'recommendProjectsFlow',
    inputSchema: RecommendProjectsInputSchema,
    outputSchema: RecommendProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
