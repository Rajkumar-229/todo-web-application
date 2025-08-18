import { Router } from 'express';
import { createTask, deleteTask, getTask, getTasks, updateTask } from '../controllers/task.controller';
import { validate } from '../middlewares/validate';
import { validateObjectId } from '../middlewares/validateObjectId';
import { createTaskSchema, updateTaskSchema } from '../validators/task.dto';

const router = Router();

router.post('/', validate(createTaskSchema), createTask);        // POST /api/tasks
router.get('/', getTasks);                                       // GET  /api/tasks
router.get('/:id', validateObjectId, getTask);                   // GET  /api/tasks/:id
router.patch('/:id', validateObjectId, validate(updateTaskSchema), updateTask); // PATCH /api/tasks/:id
router.delete('/:id', validateObjectId, deleteTask);             // DELETE /api/tasks/:id

export default router;