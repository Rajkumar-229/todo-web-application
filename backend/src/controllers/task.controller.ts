import { Request, Response } from "express";
import TaskModel, { TaskDocument } from "../models/task.model";

// ✅ Get all tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks: TaskDocument[] = await TaskModel.find();
      res.json(
        tasks.map((t) => ({
          id:
            typeof t._id === "string"
              ? t._id
              : t._id && typeof t._id.toString === "function"
              ? t._id.toString()
              : "",
          title: t.title,
          completed: t.completed,
        }))
      );
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

// ✅ Create new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = new TaskModel({ title, completed: false });
    const saved = await newTask.save();

    res.status(201).json({
      id:
        typeof saved._id === "string"
          ? saved._id
          : saved._id && typeof saved._id.toString === "function"
          ? saved._id.toString()
          : "",
      title: saved.title,
      completed: saved.completed,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

// ✅ Update task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updated = await TaskModel.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Task not found" });

    res.json({
      id:
        typeof updated._id === "string"
          ? updated._id
          : updated._id && typeof updated._id.toString === "function"
          ? updated._id.toString()
          : "",
      title: updated.title,
      completed: updated.completed,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to update task" });
  }
};

//  Delete task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await TaskModel.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ message: "Task not found" });

    res.json({
      message: "Task deleted",
      id:
        typeof deleted._id === "string"
          ? deleted._id
          : deleted._id && typeof deleted._id.toString === "function"
          ? deleted._id.toString()
          : "",
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task" });
  }
};
