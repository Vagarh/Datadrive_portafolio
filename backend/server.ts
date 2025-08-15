
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { z, ZodError } from 'zod';
import * as fs from 'fs';
import * as path from 'path';
import { Resend } from 'resend';
import * as admin from 'firebase-admin';
import { configureGenkit } from '@genkit-ai/core';
import { ollama } from 'genkitx-ollama'; // Importar Ollama
import { recommendProjectsFlow } from '../../src/ai/flows/smart-project-recommendations';

// --- CONFIGURACIÓN E INICIALIZACIÓN ---

// Inicializar Genkit con Ollama
configureGenkit({
  plugins: [
    ollama({
      models: [{ name: 'llama3' }], // Especificar el modelo Llama 3
      serverAddress: 'http://127.0.0.1:11434', // Dirección por defecto de Ollama
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

// Inicializar Express
const app = express();
app.use(express.json());

// Configuración de CORS para mayor seguridad
const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL || '' // Añade la URL de tu frontend en producción
].filter(Boolean); // Filtra valores vacíos si la variable de entorno no está configurada

app.use(cors({
  origin: (origin, callback) => {
    // Permite peticiones sin 'origin' (como las de Postman o scripts de servidor) en desarrollo
    if (!origin && process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    if (origin && allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}));


// Inicializar Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();

// Inicializar Resend
const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.TO_EMAIL;

if (!resendApiKey || !toEmail) {
  console.error("FATAL ERROR: Missing RESEND_API_KEY or TO_EMAIL environment variables.");
  process.exit(1); // Detiene la aplicación si las variables críticas no están configuradas
}
const resend = new Resend(resendApiKey);


// --- MIDDLEWARE DE SEGURIDAD ---

// Rate Limiter para prevenir abuso en la API
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de 100 peticiones por IP durante el periodo de tiempo
  standardHeaders: true, // Devuelve información del límite en las cabeceras `RateLimit-*`
  legacyHeaders: false, // Deshabilita las cabeceras `X-RateLimit-*`
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

app.use('/api/', apiLimiter); // Aplicar el rate limiter solo a las rutas de la API


// --- ESQUEMAS DE VALIDACIÓN (ZOD) ---

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters long." }),
});

const cvDownloadSchema = z.object({
  email: z.string().email({ message: "A valid email is required to download the CV." }),
});

const recommendSchema = z.object({
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});


// --- RUTAS DE LA API ---

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Backend server is running!');
});

// Ruta para el formulario de contacto
app.post('/api/contact', async (req: Request, res: Response) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten().fieldErrors });
  }

  const { name, email, message } = result.data;

  try {
    // Guardar el mensaje en Firestore
    await db.collection('contactMessages').add({
      name,
      email,
      message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Enviar el email
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: toEmail,
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\\n/g, '<br>')}</p>`,
    });
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    res.status(500).json({ success: false, message: 'Error sending message.' });
  }
});

// Ruta para registrar el email y descargar el CV
app.post('/api/register-cv', async (req: Request, res: Response) => {
  const result = cvDownloadSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten().fieldErrors });
  }

  const { email } = result.data;

  try {
    await db.collection('cvDownloads').add({
      email,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    const filePath = path.join(__dirname, '..', 'cv.pdf'); // Ruta corregida
    res.download(filePath, 'CV.pdf', (err) => {
      if (err) {
        console.error("Error sending file:", err);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Could not download the file.' });
        }
      }
    });
  } catch (error) {
    console.error('Error in register-cv:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Could not process the request.' });
    }
  }
});

// Ruta para recomendaciones de proyectos (AI)
app.post('/api/recommend', async (req: Request, res: Response) => {
  const result = recommendSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.flatten().fieldErrors });
  }

  const { message } = result.data;

  try {
    const recommendation = await recommendProjectsFlow.run({
      userMessage: message,
    });
    res.status(200).json(recommendation);
  } catch (error) {
    console.error('Error in /api/recommend:', error);
    res.status(500).json({ error: 'Failed to get AI recommendations.' });
  }
});


// --- MIDDLEWARE DE MANEJO DE ERRORES ---

// Middleware para manejar errores de forma centralizada
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// --- INICIAR EL SERVIDOR ---

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
