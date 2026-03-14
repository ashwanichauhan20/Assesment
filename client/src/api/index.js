import axios from "axios";

// Use import.meta.env to access Vite env variables
const API = axios.create({
  baseURL: `${import.meta.env.VITE_URL}/api/auth`,
  withCredentials: true // optional, if backend uses cookies or sessions
});

// API functions
export const register = (formData) => API.post("/register", formData);
export const login = (formData) => API.post("/login", formData);
