export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const API_URL = "http://localhost:5000/api/tasks";

// Helper to throw on non-2xx
async function handle(res: Response) {
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(msg || `HTTP ${res.status}`);
  }
  return res.json();
}

// Get all tasks
export const getTasks = async (): Promise<Task[]> => {
  const res = await fetch(API_URL);
  return handle(res);
};

// Add a new task
export const createTaskApi = async (title: string): Promise<Task> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return handle(res);
};

// Toggle complete (set to provided value)
export const toggleTaskApi = async (id: string, completed: boolean): Promise<Task> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  return handle(res);
};

// Edit task title
export const editTaskApi = async (id: string, title: string): Promise<Task> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return handle(res);
};

// Delete task
export const deleteTaskApi = async (
  id: string
): Promise<{ id: string; message: string }> => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return handle(res);
};
