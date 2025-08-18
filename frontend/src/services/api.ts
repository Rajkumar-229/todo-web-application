// src/services/taskService.ts
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // backend base URL

export const getTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTask = async (task: { title: string; description?: string }) => {
  const res = await axios.post(API_URL, task);
  return res.data;
};

export const updateTask = async (id: string, updates: object) => {
  const res = await axios.put(`${API_URL}/${id}`, updates);
  return res.data;
};

export const deleteTask = async (id: string) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
