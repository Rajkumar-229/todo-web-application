import React, { useState, type ChangeEvent, type FormEvent } from "react";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task.trim());
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center  w-full max-w-2xl mx-auto mt-6 gap-4 mb-6"
    >
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
