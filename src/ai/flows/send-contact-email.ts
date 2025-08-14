
'use server';
/**
 * @fileOverview This file contains the server-side logic for sending a contact email.
 * It uses Genkit to define a flow that processes contact form data and sends an email
 * using the Resend service.
 *
 * - sendContactEmail - A function that handles the contact form submission.
 * - ContactFormData - The Zod schema for the contact form data.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/email/contact-template';

// Define the schema for the contact form data using Zod for validation.
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Export the TypeScript type inferred from the Zod schema.
export type ContactFormData = z.infer<typeof contactFormSchema>;

// IMPORTANT: Replace this with your own email address in a real application.
const TO_EMAIL = process.env.EMAIL_TO || 'your-email@example.com';

/**
 * The main flow function that sends the contact email.
 * It is defined as a Genkit flow.
 */
const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: contactFormSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (data) => {
    // Check for the Resend API key from environment variables.
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable.');
      throw new Error('Server configuration error: Missing Resend API key.');
    }
    
    // Initialize the Resend client.
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      // Send the email using the Resend API.
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>', // This is a required field by Resend.
        to: TO_EMAIL,
        subject: `New Contact Form Submission from ${data.name}`,
        reply_to: data.email,
        react: ContactEmailTemplate({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      // Re-throw the error to be caught by the calling function.
      throw new Error('Failed to send email.');
    }
  }
);

/**
 * An exported wrapper function that calls the Genkit flow.
 * This makes it easier to use from React Server Components/Actions.
 * @param data The contact form data.
 * @returns A promise that resolves to the output of the flow.
 */
export async function sendContactEmail(data: ContactFormData) {
  return sendContactEmailFlow(data);
}
