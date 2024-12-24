
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/student-routes.js';
import userRoutes from './routes/user-routes.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', studentRoutes);
app.use('/api', userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Connection is successful on port ${PORT}`);
});
