import mongoose, { Document, Schema } from "mongoose";

export interface TaskDocument extends Document {
  title: string;
  completed: boolean;
}

const TaskSchema = new Schema<TaskDocument>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

// ✅ Tell mongoose what our document looks like
const TaskModel = mongoose.model<TaskDocument>("Task", TaskSchema);

export default TaskModel;
