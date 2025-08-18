
import { Request, Response, NextFunction } from 'express';
import { Task } from '../models/task.model';
import { CreateTaskDto, UpdateTaskDto } from '../validators/task.dto';

export async function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response, next: NextFunction) {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (err) { next(err); }
}

export async function getTasks(_req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) { next(err); }
}

export async function getTask(req: Request, res: Response, next: NextFunction) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) { next(err); }
}

// export async function updateTask(req: Request<{ id: string }, {}, UpdateTaskDto>, res: Response, next: NextFunction) {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!task) return res.status(404).json({ message: 'Task not found' });
//     res.json(task);
//   } catch (err) { next(err); }
// }

export async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (err) { next(err); }
}


// controllers/task.controller.ts


export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        ...(title && { auto: true }),
        ...(title && { title }),
      },
      { new: true }
    );

    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });

    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
