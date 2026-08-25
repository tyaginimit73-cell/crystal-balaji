import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import articleRoutes from './routes/articles.js';
import contactRoutes from './routes/contact.js';
import jobRoutes from './routes/jobs.js';
import docRoutes from './routes/documents.js';
import leadershipRoutes from './routes/leadership.js';
import statsRoutes from './routes/stats.js';
import { notFound, errorHandler } from './middleware/error.js';
import { seed } from './utils/seed.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
setTimeout(()=>seed().catch(()=>{}), 2000);

app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({ windowMs: 15*60*1000, max: 200 });
app.use('/api/', limiter);

app.get('/api/health', (req,res)=> res.json({ success:true, message:'Crystal Balaji API running', timestamp:new Date().toISOString() }));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/documents', docRoutes);
app.use('/api/leadership', leadershipRoutes);
app.use('/api/stats', statsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', ()=> console.log(`✅ Backend running on http://0.0.0.0:${PORT}`));
