import express from 'express';
import cors from 'cors';
import * as fs from 'fs';
import * as path from 'path';
import { Resend } from 'resend';
import * as admin from 'firebase-admin';

// --- INICIALIZACIÓN ---

// Inicializar Express
const app = express();
app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Middleware para habilitar CORS

// Inicializar Firebase Admin SDK
// Para Cloud Run, es mejor especificar las credenciales explícitamente.
// Cloud Run las inyecta automáticamente si la cuenta de servicio tiene permisos.
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();

// Inicializar Resend
// ¡IMPORTANTE! Configura estas variables en tu servicio de Cloud Run.
const resend = new Resend(process.env.RESEND_API_KEY || '');
const to_email = process.env.TO_EMAIL || '';


// --- RUTAS DE LA API ---

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.status(200).send('Backend server is running!');
});

/**
 * Ruta para el formulario de contacto.
 * Método: POST /api/contact
 */
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({ error: 'Missing required fields.' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: to_email,
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });
    res.status(200).send({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ success: false, message: 'Error sending message.' });
  }
});

/**
 * Ruta para registrar el email y descargar el CV.
 * Método: POST /api/register-cv
 */
app.post('/api/register-cv', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ error: 'Email is required.' });
  }

  try {
    // 1. Guardar en Firestore
    await db.collection('cvDownloads').add({
      email: email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 2. Enviar el archivo
    const filePath = path.join(__dirname, 'cv.pdf');
    res.download(filePath, 'CV-Juan-Felipe.pdf', (err) => {
      if (err) {
        console.error("Error sending file:", err);
        if (!res.headersSent) {
          res.status(500).send({ error: 'Could not download the file.' });
        }
      }
    });
  } catch (error) {
    console.error('Error in register-cv:', error);
    if (!res.headersSent) {
        res.status(500).send({ error: 'Could not process request.' });
    }
  }
});


// --- INICIAR EL SERVIDOR ---

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
