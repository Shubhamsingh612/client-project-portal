import axios from "axios";

const isDevelopment = process.env.NODE_ENV === "development";

const baseURL = isDevelopment ? "http://localhost:5000/api" : "/api";

export const api = axios.create({
  baseURL,
  timeout: 8000,
});

// Use full backend URL for image loading
export const API_BASE = isDevelopment ? "http://localhost:5000" : "";

// Function to fix Windows path to URL path
export const fixImagePath = (path) => {
  if (!path) return null;
  // Replace backslashes with forward slashes
  return path.replace(/\\/g, '/');
};
