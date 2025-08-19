import React, { useState } from "react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    const trimmed = newTitle.trim();
    if (trimmed.length > 0 && trimmed !== task.title) {
      onEdit(task.id, trimmed);
    }
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 mb-2 rounded-lg shadow">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => onToggle(task.id, e.target.checked)}
        className="w-5 h-5 mr-3"
      />

      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          className="flex-1 px-2 border rounded"
          autoFocus
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.title}
        </span>
      )}

      <div className="flex gap-2 ml-3">
        <button
          onClick={() => {
            if (isEditing) handleEdit(); // ✅ actually save
            else setIsEditing(true);
          }}
          className="px-4 py-1 bg-green-500 hover:bg-green-600 text-xs text-white rounded-md font-medium"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-4 py-1 bg-red-500 hover:bg-red-600 text-xs text-white rounded-md font-medium"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
