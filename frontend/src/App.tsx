import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTaskApi,
  toggleTaskApi,
  editTaskApi,
  deleteTaskApi,
  Task as ApiTask,
} from "./services/taskService";

type Task = ApiTask;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showFinished, setShowFinished] = useState<boolean>(true);

  // Load tasks on mount
  useEffect(() => {
    (async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (e) {
        console.error("Failed to load tasks", e);
      }
    })();
  }, []);

  // Add Task
  const addTask = async (title: string) => {
    const trimmed = title.trim();
    if (trimmed.length <= 3) return;
    try {
      const newTask = await createTaskApi(trimmed);
      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      console.error("Failed to add task:", err);
    }
  };

  // Toggle Complete (value comes from checkbox)
  const toggleTask = async (id: string, completed: boolean) => {
    try {
      const updated = await toggleTaskApi(id, completed);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      console.error("Failed to toggle task:", err);
    }
  };

  // Delete Task
  const deleteTaskHandler = async (id: string) => {
    try {
      await deleteTaskApi(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  // Edit Task
  const editTask = async (id: string, newTitle: string) => {
    const trimmed = newTitle.trim();
    if (!trimmed) return;
    try {
      const updated = await editTaskApi(id, trimmed);
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      console.error("Failed to edit task:", err);
    }
  };

  // Show/Hide completed
  const toggleShowFinished = () => setShowFinished((s) => !s);
  const visibleTasks = tasks.filter((t) => (showFinished ? true : !t.completed));

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto p-8">
        <TaskForm onAddTask={addTask} />

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              checked={showFinished}
              onChange={toggleShowFinished}
              className="w-5 h-5"
            />
            <span className="text-lg">Show Completed Tasks</span>
          </label>
          <div className="text-sm text-gray-500">
            {tasks.length} total • {visibleTasks.length} visible
          </div>
        </div>

        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTaskHandler}
          onEdit={editTask}
        />
      </main>
    </div>
  );
};

export default App;
