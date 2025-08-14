"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const resend_1 = require("resend");
const admin = __importStar(require("firebase-admin"));
// --- INICIALIZACIÓN ---
// Inicializar Express
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware para parsear JSON
app.use((0, cors_1.default)()); // Middleware para habilitar CORS
// Inicializar Firebase Admin SDK
// Para Cloud Run, es mejor especificar las credenciales explícitamente.
// Cloud Run las inyecta automáticamente si la cuenta de servicio tiene permisos.
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();
// Inicializar Resend
// ¡IMPORTANTE! Configura estas variables en tu servicio de Cloud Run.
const resend = new resend_1.Resend(process.env.RESEND_API_KEY || '');
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
    }
    catch (error) {
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
    }
    catch (error) {
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
