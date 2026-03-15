import axios from "axios";

// remove trailing slash if present
const BASE_URL = import.meta.env.VITE_URL?.replace(/\/$/, "");

const API = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
  withCredentials: true
});

// API functions
export const register = (formData) => API.post("/register", formData);
export const login = (formData) => API.post("/login", formData);
