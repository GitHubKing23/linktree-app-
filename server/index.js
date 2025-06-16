import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import linkRoutes from './routes/linkRoutes.js';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/linktree';

mongoose.connect(MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

export default app;
