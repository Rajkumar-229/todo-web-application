import express from 'express';
import cors from 'cors';
import taskRouter from './routes/task.routes';
import { notFound } from './middlewares/notFound';
import { errorHandler } from './middlewares/errorHandler';
import connectDB from './config/db';
import taskRoutes from "./routes/task.routes";
import mongoose from 'mongoose'; 


mongoose.connect(process.env.MONGO_URI!)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));// your routes file

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // allow frontend to access backend
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Default route
app.get("/", (req, res) => res.send("Backend is running"));

// Start server
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
