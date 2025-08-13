'use server';

/**
 * @fileOverview A Genkit flow for sending a contact form email.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/email/contact-template';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

// IMPORTANT: Replace this with your own email address.
const TO_EMAIL = 'your-email@example.com'; 

export const sendContactEmail = ai.defineFlow(
  {
    name: 'sendContactEmail',
    inputSchema: contactFormSchema,
    outputSchema: z.void(),
  },
  async (formData) => {
    try {
      await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: TO_EMAIL,
        subject: `New message from ${formData.name} via your portfolio`,
        reply_to: formData.email,
        react: ContactEmailTemplate({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      // Re-throw the error to be caught by the client-side caller
      throw new Error('Email sending failed.');
    }
  }
);
