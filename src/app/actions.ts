"use server";
import { Resend } from 'resend';
import { googleAI } from '@genkit-ai/googleai';
import { generate } from '@genkit-ai/ai';
import { z } from 'zod';

// Initialize SDKs
const resend = new Resend(process.env.RESEND_API_KEY);

// Define interfaces
interface ContactData {
    name: string;
    email: string;
    message: string;
}

// Server Action to send an email
export async function sendContactEmail(data: ContactData) {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.EMAIL_TO || 'delivered@resend.dev',
            subject: `New message from ${data.name} on your portfolio`,
            html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email.');
    }
}

// Server Action for project recommendations
export async function recommendProjects(input: {
  userQuery: string;
  projectDescriptions: string[];
}) {
  try {
    const result = await generate({
        model: googleAI('gemini-1.5-flash'),
        prompt: `
          Based on the user's query about their needs, recommend up to 3 projects from the list below that are most relevant.
          User Query: "${input.userQuery}"
          Available Projects:
          ${input.projectDescriptions.join('\n')}
          Only return the titles of the recommended projects.
        `,
        output: {
          schema: z.object({
            recommendedProjects: z.array(z.string()).optional(),
          }),
        },
        config: {
          temperature: 0.3,
        },
      });
    
      return result.output() || { recommendedProjects: [] };
  } catch (error) {
      console.error('Error generating recommendations:', error);
      throw new Error('Failed to get recommendations.');
  }
}
