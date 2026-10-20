import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Middleware for security & compression headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Cache control for static assets in dist/assets
app.use('/assets', express.static(path.join(distPath, 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

// Serve all other static files from dist
app.use(express.static(distPath));

// Health check endpoint for cloud hosting platforms (AWS, Render, Railway, Cloud Run)
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// SPA catch-all fallback: send index.html for all client routes
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 AMLIS 2027 production server listening on http://0.0.0.0:${PORT}`);
});
