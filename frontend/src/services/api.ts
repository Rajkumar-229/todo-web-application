import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // adjust if backend runs on different port

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// ✅ Get all tasks
export const getTasks = async (): Promise<Task[]> => {
  const res = await axios.get<Task[]>(API_URL);
  return res.data;
};

// ✅ Create new task
export const createTask = async (task: { title: string }): Promise<Task> => {
  const res = await axios.post<Task>(API_URL, task);
  return res.data;
};

// ✅ Update task
export const updateTask = async (
  id: string,
  updates: Partial<Task>
): Promise<Task> => {
  const res = await axios.put<Task>(`${API_URL}/${id}`, updates);
  return res.data;
};

// ✅ Delete task
export const deleteTask = async (id: string): Promise<{ message: string; id: string }> => {
  const res = await axios.delete<{ message: string; id: string }>(`${API_URL}/${id}`);
  return res.data;
};
