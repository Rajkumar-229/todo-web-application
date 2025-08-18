import React from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string,completed:boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="w-full max-w-2xl mx-auto mt-6">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}        // ✅ single task
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No tasks available. Add one above!
        </p>
      )}
    </ul>
  );
};

export default TaskList;
