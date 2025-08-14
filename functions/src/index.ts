import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Resend } from 'resend';
import * as cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';

// Initialize Firebase Admin SDK to access Firestore
admin.initializeApp();

// Initialize cors middleware
const corsHandler = cors({ origin: true });

// Get Resend API key and the email to send to from environment variables
const resend = new Resend(functions.config().resend.api_key);
const to_email = functions.config().resend.to_email;

/**
 * Cloud Function to handle contact form submissions.
 * Uses Resend to send the email.
 */
export const sendContactEmail = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== 'POST') {
      response.status(405).send('Method Not Allowed');
      return;
    }

    const { name, email, message } = request.body;

    if (!name || !email || !message) {
      response.status(400).send('Bad Request: Missing required fields.');
      return;
    }

    try {
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: to_email,
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      response.status(200).send({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      response.status(500).send({ success: false, message: 'Error sending message.' });
    }
  });
});

/**
 * Cloud Function to register an email and then send the CV file for download.
 * The CV is stored securely within the functions directory.
 */
export const registerForCVDownload = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== 'POST') {
      response.status(405).send('Method Not Allowed');
      return;
    }

    const { email } = request.body;
    if (!email) {
      response.status(400).send('Bad Request: Email is required.');
      return;
    }

    try {
      // 1. Register the email in Firestore
      const db = admin.firestore();
      await db.collection('cvDownloads').add({
        email: email,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
      
      // 2. Read the CV file from the local functions directory
      const filePath = path.join(__dirname, 'cv.pdf');
      const stat = fs.statSync(filePath);

      // 3. Send the file as the response
      response.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Length': stat.size,
        'Content-Disposition': 'attachment; filename=CV-Juan-Felipe.pdf',
      });

      const readStream = fs.createReadStream(filePath);
      readStream.pipe(response);

    } catch (error) {
      console.error('Error in registerForCVDownload:', error);
      if (!response.headersSent) {
        response.status(500).send({ success: false, message: 'Could not process request.' });
      }
    }
  });
});
