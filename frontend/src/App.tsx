import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import { getTasks, createTask, updateTask, deleteTask } from "./services/api";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showFinished, setShowFinished] = useState<boolean>(true);
  const [title, setTitle] = useState("");

   // Load tasks on mount
  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  // ✅ Add Task
    const addTask = async (title: string) => {
  if (title.trim().length <= 3) return;

  try {
    const newTask = await createTask({ title });
    setTasks((prev) => [newTask, ...prev]); // update frontend state
  } catch (err) {
    console.error("Failed to add task:", err);
  }
};
  


  // ✅ Toggle Complete

const toggleTask = async (id: string, completed: boolean) => {
  try {
    const updated = await updateTask(id, { completed: !completed });
    setTasks((prev) =>
       prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  } catch (err) {
    console.error("Failed to toggle task:", err);
  }
};



  // ✅ Delete Task

  const deleteTask = async (id: string) => {
  try {
    await deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  } catch (err) {
    console.error("Failed to delete task:", err);
  }
};


  // ✅ Edit Task
const editTask = async (id: string, newTitle: string) => {
  try {
    const updated = await updateTask(id, { title: newTitle });
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? updated : task))
    );
  } catch (err) {
    console.error("Failed to edit task:", err);
  }
};


  // ✅ Toggle Show Completed
  const toggleShowFinished = () => setShowFinished((s) => !s);

  const visibleTasks = tasks.filter((t) => (showFinished ? true : !t.completed));

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto p-8">
        {/* Add Task Form */}
        <TaskForm onAddTask={addTask} />

        {/* Controls */}
         <div className="flex items-center justify-between mb-6">
           <label className="flex items-center gap-3 text-gray-700">
            <input
              type="checkbox"
              checked={showFinished}
              onChange={toggleShowFinished}
              className="w-5 h-5 accent-indigo-600"
            />
            <span className="text-lg">Show Completed Tasks</span>
          </label>
          <div className="text-sm text-gray-500">
            {tasks.length} total • {visibleTasks.length} visible
          </div>
        </div>

        {/* Task List */}
        <TaskList
          tasks={visibleTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </main>
    </div>
  );
};

export default App;