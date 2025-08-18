import express, { Request, Response } from "express";
import cors from "cors";
import { Task } from "../src/types/Task"; // adjust path if needed
import { connect } from "http2";
import connectDB from "./config/db";

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

let tasks: Task[] = [];  // ✅ now it's strongly typed

// GET all tasks
app.get("/api/tasks", (req: Request, res: Response) => {
  res.json(tasks);
});

// POST new task
app.post("/api/tasks", (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title || title.trim().length < 3) {
    return res.status(400).json({ error: "Task title is required (min 3 chars)" });
  }
  const newTask: Task = { id: Date.now().toString(),  title: req.body.title, completed:  title ? true : false,} // if undefined, default to false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT toggle complete
app.put("/api/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  res.json({ success: true });
});

// DELETE task
app.delete("/api/tasks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
