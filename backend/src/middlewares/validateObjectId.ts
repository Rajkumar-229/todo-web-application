import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export function validateObjectId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid task id' });
  }
  next();
}